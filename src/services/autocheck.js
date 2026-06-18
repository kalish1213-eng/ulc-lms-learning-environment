export function normalizeAnswer(value, rules = {}) {
  if (Array.isArray(value)) {
    return value.map((item) => normalizeAnswer(item, rules));
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, normalizeAnswer(item, rules)]));
  }

  let normalized = String(value ?? "");
  if (rules.normalize_apostrophes) normalized = normalized.replace(/[’`´]/g, "'");
  if (rules.trim_whitespace) normalized = normalized.trim();
  if (rules.collapse_multiple_spaces) normalized = normalized.replace(/\s+/g, " ");
  if (rules.ignore_terminal_punctuation || rules.allow_period_optional || rules.allow_question_mark_optional) {
    normalized = normalized.replace(/[.!?]+$/g, "");
  }
  if (rules.ignore_case) normalized = normalized.toLowerCase();
  return normalized;
}

function valuesEqual(a, b, rules) {
  if (Array.isArray(a) || Array.isArray(b)) {
    if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) return false;
    return a.every((item, index) => valuesEqual(item, b[index], rules));
  }

  if (a && b && typeof a === "object" && typeof b === "object") {
    const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
    return [...keys].every((key) => valuesEqual(a[key], b[key], rules));
  }

  return normalizeAnswer(a, rules) === normalizeAnswer(b, rules);
}

function variantsFor(correctAnswer, acceptedAnswers = []) {
  const variants = [correctAnswer.value, correctAnswer.display_en];
  acceptedAnswers
    .filter((accepted) => accepted.answer_id === correctAnswer.answer_id)
    .forEach((accepted) => variants.push(...accepted.variants));
  return variants.filter((variant) => variant !== undefined && variant !== null);
}

function answerForItem(exercise, answer, correctAnswer) {
  if (exercise.exercise_type === "matching") {
    return answer?.[correctAnswer.item_id];
  }
  return answer;
}

export function formatCorrectAnswer(exercise) {
  if (!exercise) return "";
  if (exercise.correct_answers.length > 1) {
    return exercise.correct_answers.map((answer) => answer.display_en).join("; ");
  }
  const value = exercise.correct_answers[0]?.display_en ?? exercise.correct_answers[0]?.value;
  return Array.isArray(value) ? value.join(" → ") : String(value ?? "");
}

export function checkExercise(exercise, answer) {
  const rules = exercise.normalization_rules || {};

  if (exercise.exercise_type === "short_writing") {
    return {
      correct: false,
      completed: true,
      status: "submitted",
      score: null,
      teacher_review_recommended: true,
      preliminary_feedback_ru:
        "Ответ сохранён. Для short writing в v0.2 показана предварительная обратная связь; финальную оценку должен подтвердить преподаватель.",
      item_results: [],
      correct_answer: formatCorrectAnswer(exercise),
    };
  }

  const itemResults = exercise.correct_answers.map((correctAnswer) => {
    const submitted = answerForItem(exercise, answer, correctAnswer);
    const variants = variantsFor(correctAnswer, exercise.accepted_answers);
    const correct = variants.some((variant) => valuesEqual(submitted, variant, rules));
    return {
      item_id: correctAnswer.item_id,
      submitted,
      correct,
      expected: correctAnswer.display_en,
      explanation_ru: correctAnswer.explanation_ru,
    };
  });

  const correctCount = itemResults.filter((item) => item.correct).length;
  const correct = correctCount === itemResults.length;
  const partial = correctCount > 0 && !correct;

  return {
    correct,
    completed: correct,
    partial,
    status: correct ? "correct" : partial ? "partial" : "incorrect",
    score: itemResults.length ? Math.round((correctCount / itemResults.length) * 100) : 0,
    teacher_review_recommended: false,
    item_results: itemResults,
    correct_answer: formatCorrectAnswer(exercise),
  };
}
