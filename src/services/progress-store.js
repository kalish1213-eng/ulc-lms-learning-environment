const STORAGE_KEY = "ulc_lms_progress_v0_2";
const LEGACY_KEYS = ["ulc_mvp_v0_1_1_progress"];

const defaultProgress = {
  version: "v0.2",
  currentUnitId: "beginner_u1",
  currentLessonId: "beg_u1_l1",
  exerciseState: {},
  homeworkProgress: {},
  lessonProgress: {},
  unitProgress: 0,
  lastActivityAt: null,
  legacy: {
    detected: false,
    keys: [],
  },
};

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function readJson(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function detectLegacy() {
  const keys = LEGACY_KEYS.filter((key) => readJson(key));
  return { detected: keys.length > 0, keys };
}

export function loadProgress() {
  const stored = readJson(STORAGE_KEY);
  const legacy = detectLegacy();
  if (!stored) return { ...clone(defaultProgress), legacy };
  return {
    ...clone(defaultProgress),
    ...stored,
    exerciseState: stored.exerciseState || {},
    homeworkProgress: stored.homeworkProgress || {},
    lessonProgress: stored.lessonProgress || {},
    legacy,
  };
}

export function saveProgress(progress) {
  const next = { ...progress, lastActivityAt: new Date().toISOString() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  return next;
}

export function resetDemoProgress() {
  const legacy = detectLegacy();
  const next = { ...clone(defaultProgress), legacy, lastActivityAt: new Date().toISOString() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  return next;
}

export function getExerciseState(progress, exerciseId) {
  return progress.exerciseState?.[exerciseId] || {
    status: "not started",
    attempts: 0,
    latestAnswer: null,
    bestResult: null,
    correctAnswerShown: false,
    aiExplanationOpened: false,
    completedAt: null,
    lastActivityAt: null,
  };
}

export function saveDraftAnswer(progress, exercise, answer) {
  const current = getExerciseState(progress, exercise.exercise_id);
  const next = {
    ...progress,
    exerciseState: {
      ...progress.exerciseState,
      [exercise.exercise_id]: {
        ...current,
        status: current.status === "done" ? "done" : "in progress",
        latestAnswer: answer,
        mode: exercise.mode,
        lastActivityAt: new Date().toISOString(),
      },
    },
  };
  return saveProgress(next);
}

export function recordExerciseCheck(progress, exercise, result) {
  const current = getExerciseState(progress, exercise.exercise_id);
  const attempts = (current.attempts || 0) + 1;
  const isShortWriting = exercise.exercise_type === "short_writing";
  const status = result.correct || isShortWriting ? "done" : "needs retry";
  const completedAt = status === "done" ? new Date().toISOString() : current.completedAt;
  const next = {
    ...progress,
    currentLessonId: exercise.lesson_id,
    exerciseState: {
      ...progress.exerciseState,
      [exercise.exercise_id]: {
        ...current,
        attempts,
        status,
        bestResult: result,
        mode: exercise.mode,
        completedAt,
        lastActivityAt: new Date().toISOString(),
      },
    },
  };
  return saveProgress(next);
}

export function markCorrectAnswerShown(progress, exerciseId) {
  const current = getExerciseState(progress, exerciseId);
  return saveProgress({
    ...progress,
    exerciseState: {
      ...progress.exerciseState,
      [exerciseId]: {
        ...current,
        correctAnswerShown: true,
        lastActivityAt: new Date().toISOString(),
      },
    },
  });
}

export function markAiExplanationOpened(progress, exerciseId) {
  const current = getExerciseState(progress, exerciseId);
  return saveProgress({
    ...progress,
    exerciseState: {
      ...progress.exerciseState,
      [exerciseId]: {
        ...current,
        aiExplanationOpened: true,
        lastActivityAt: new Date().toISOString(),
      },
    },
  });
}

export function setCurrentLesson(progress, lessonId) {
  return saveProgress({ ...progress, currentLessonId: lessonId });
}

function exerciseIdOf(exercise) {
  return typeof exercise === "string" ? exercise : exercise?.exercise_id;
}

export function getExerciseStatus(progress, exercise) {
  const exerciseId = exerciseIdOf(exercise);
  if (!exerciseId) return "not started";
  return getExerciseState(progress, exerciseId).status || "not started";
}

export function isExerciseCompleted(progress, exercise) {
  return getExerciseStatus(progress, exercise) === "done";
}

export function calculateExerciseProgress(progress, exercises) {
  const list = (exercises || []).filter(Boolean);
  if (!list.length) return { percent: 0, completed: 0, total: 0 };
  const completed = list.filter((exercise) => isExerciseCompleted(progress, exercise)).length;
  return { percent: Math.round((completed / list.length) * 100), completed, total: list.length };
}

export function calculateLessonProgress(progress, lessonId, exercises) {
  const lessonExercises =
    typeof exercises === "function"
      ? exercises(lessonId)
      : (exercises || []).filter((exercise) => exercise.lesson_id === lessonId);
  return calculateExerciseProgress(progress, lessonExercises);
}

export function calculateHomeworkProgress(progress, homeworkTask, exercises) {
  const tasks = Array.isArray(homeworkTask) ? homeworkTask : [homeworkTask].filter(Boolean);
  const exerciseIds = [...new Set(tasks.flatMap((task) => task.exercise_ids || []))];
  const exercisePool =
    typeof exercises === "function"
      ? tasks.flatMap((task) => exercises(task.lesson_id) || [])
      : exercises || [];
  const homeworkExercises = exerciseIds
    .map((exerciseId) => exercisePool.find((exercise) => exercise.exercise_id === exerciseId))
    .filter(Boolean);
  return calculateExerciseProgress(progress, homeworkExercises);
}

export function calculateUnitProgress(progress, exercises) {
  return calculateExerciseProgress(progress, exercises);
}

export function getLastActivity(progress) {
  return progress.lastActivityAt || "no activity";
}

export { STORAGE_KEY };
