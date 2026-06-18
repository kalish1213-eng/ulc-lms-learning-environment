const ANALYTICS_KEY = "ulc_lms_analytics_v0_2";
const memoryEvents = [];

function readEvents() {
  try {
    return JSON.parse(localStorage.getItem(ANALYTICS_KEY) || "[]");
  } catch {
    return [];
  }
}

function writeEvents(events) {
  localStorage.setItem(ANALYTICS_KEY, JSON.stringify(events.slice(0, 200)));
}

export function logEvent(event_name, payload = {}) {
  const event = {
    event_name,
    timestamp: new Date().toISOString(),
    user_id: payload.user_id || "student_demo_anna",
    course_id: payload.course_id || "beginner_english_for_adults",
    unit_id: payload.unit_id || "beginner_u1",
    lesson_id: payload.lesson_id || null,
    exercise_id: payload.exercise_id || null,
    mode: payload.mode || "classwork",
    metadata: payload.metadata || {},
  };
  memoryEvents.unshift(event);
  writeEvents([event, ...readEvents()]);
  return event;
}

export function getAnalyticsEvents() {
  return [...memoryEvents, ...readEvents()].slice(0, 200);
}

export function clearAnalyticsEvents() {
  memoryEvents.length = 0;
  writeEvents([]);
}
