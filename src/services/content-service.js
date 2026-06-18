import beginnerUnit1 from "../data/beginner-unit-1.js?v=0.2-state-p0b";

const course = {
  course_id: "beginner_english_for_adults",
  title: "Beginner English for Adults",
  school: "ULC.by",
  level: "Beginner",
  group: "Beginner A1 Evening",
};

const byId = (items, key) =>
  new Map(items.map((item) => [item[key], item]));

const lessonMap = byId(beginnerUnit1.lessons, "lesson_id");
const exerciseMap = byId(beginnerUnit1.exercises, "exercise_id");
const homeworkMap = byId(beginnerUnit1.homework_tasks, "homework_id");
const mediaMap = byId(beginnerUnit1.media_specifications, "media_id");
const speakingActivityMap = byId(beginnerUnit1.speaking_activities, "activity_id");

export function getCourse() {
  return { ...course };
}

export function getUnit(unitId = beginnerUnit1.unit.unit_id) {
  if (unitId !== beginnerUnit1.unit.unit_id) return null;
  return beginnerUnit1.unit;
}

export function getLessons(unitId = beginnerUnit1.unit.unit_id) {
  const unit = getUnit(unitId);
  if (!unit) return [];
  return unit.lessons.map((lessonId) => lessonMap.get(lessonId)).filter(Boolean);
}

export function getLesson(lessonId) {
  return lessonMap.get(lessonId) || getLessons()[0] || null;
}

export function getLessonExercises(lessonId) {
  return beginnerUnit1.exercises.filter((exercise) => exercise.lesson_id === lessonId);
}

export function getClassworkExercises(lessonId) {
  return getLessonExercises(lessonId).filter((exercise) => exercise.mode === "classwork" || exercise.mode === "both");
}

export function getHomeworkExercises(lessonId) {
  return getLessonExercises(lessonId).filter((exercise) => exercise.mode === "homework" || exercise.mode === "both");
}

export function getExercise(exerciseId) {
  return exerciseMap.get(exerciseId) || null;
}

export function getTeacherNotes(lessonId) {
  const lesson = getLesson(lessonId);
  if (!lesson) return [];
  const exerciseNotes = getLessonExercises(lessonId).flatMap((exercise) => exercise.teacher_notes || []);
  return [...(lesson.teacher_notes || []), ...exerciseNotes];
}

export function getSpeakingOutcome(lessonId) {
  return getLesson(lessonId)?.speaking_outcome || null;
}

export function getHomeworkTask(homeworkId) {
  return homeworkMap.get(homeworkId) || null;
}

export function getLessonHomework(lessonId) {
  const lesson = getLesson(lessonId);
  if (!lesson) return null;
  return (lesson.homework_task_ids || []).map((id) => homeworkMap.get(id)).find(Boolean) || null;
}

export function getHomeworkTasks(unitId = beginnerUnit1.unit.unit_id) {
  const unit = getUnit(unitId);
  if (!unit) return [];
  return unit.homework_task_ids.map((id) => homeworkMap.get(id)).filter(Boolean);
}

export function getMediaSpecification(mediaId) {
  return mediaMap.get(mediaId) || null;
}

export function getLessonMedia(lessonId) {
  const lesson = getLesson(lessonId);
  const media = lesson?.listening_dialogue ? getMediaSpecification(lesson.listening_dialogue) : null;
  return media ? [media] : [];
}

export function getSpeakingActivities(lessonId) {
  const lesson = getLesson(lessonId);
  if (!lesson) return [];
  const ids = lesson.speaking_outcome?.speaking_activity_ids || [];
  return ids.map((id) => speakingActivityMap.get(id)).filter(Boolean);
}

export function getTypicalMistakes(lessonId) {
  return getLesson(lessonId)?.typical_mistakes || [];
}

export function getAiExplanations(lessonId) {
  return getLesson(lessonId)?.ai_explanations || [];
}

export function getUnitStats(unitId = beginnerUnit1.unit.unit_id) {
  const lessons = getLessons(unitId);
  const exercises = lessons.flatMap((lesson) => getLessonExercises(lesson.lesson_id));
  const classwork = exercises.filter((exercise) => exercise.mode === "classwork" || exercise.mode === "both");
  const homework = exercises.filter((exercise) => exercise.mode === "homework" || exercise.mode === "both");
  return {
    lessonCount: lessons.length,
    exerciseCount: exercises.length,
    classworkCount: classwork.length,
    homeworkCount: homework.length,
    mediaCount: beginnerUnit1.media_specifications.length,
  };
}

export function getExerciseModeCounts(lessonId) {
  return {
    classwork: getClassworkExercises(lessonId).length,
    homework: getHomeworkExercises(lessonId).length,
  };
}

export function getAllExercises() {
  return [...beginnerUnit1.exercises];
}

export function getAllMediaSpecifications() {
  return [...beginnerUnit1.media_specifications];
}

export function getContentDataset() {
  return beginnerUnit1;
}
