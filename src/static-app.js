import {
  getAllExercises,
  getAllMediaSpecifications,
  getClassworkExercises,
  getCourse,
  getExercise,
  getExerciseModeCounts,
  getHomeworkExercises,
  getHomeworkTasks,
  getLesson,
  getLessonExercises,
  getLessonHomework,
  getLessonMedia,
  getLessons,
  getSpeakingActivities,
  getTeacherNotes,
  getTypicalMistakes,
  getUnit,
  getUnitStats,
} from "./services/content-service.js";
import { checkExercise, formatCorrectAnswer } from "./services/autocheck.js";
import {
  calculateExerciseProgress,
  calculateHomeworkProgress,
  calculateLessonProgress,
  calculateUnitProgress,
  getExerciseState,
  getExerciseStatus,
  getLastActivity,
  loadProgress,
  markAiExplanationOpened,
  markCorrectAnswerShown,
  recordExerciseCheck,
  resetDemoProgress,
  saveDraftAnswer,
  setCurrentLesson,
  STORAGE_KEY,
} from "./services/progress-store.js";
import { getAnalyticsEvents, logEvent } from "./services/analytics-service.js";

const VERSION = "v0.2 RC";
const UNIT_ID = "beginner_u1";
const DEMO_USER_ID = "student_demo_anna";

const root = document.getElementById("root");
const course = getCourse();
const unit = getUnit(UNIT_ID);
const lessons = () => getLessons(UNIT_ID);
const allExercises = () => getAllExercises(UNIT_ID);

const ui = {
  student: "\u0421\u0442\u0443\u0434\u0435\u043d\u0442",
  unitMap: "\u041a\u0430\u0440\u0442\u0430 Unit",
  lesson: "\u0423\u0440\u043e\u043a",
  homework: "\u0414\u043e\u043c\u0430\u0448\u043a\u0430",
  teacher: "\u041f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u044c",
  methodologist: "\u041c\u0435\u0442\u043e\u0434\u0438\u0441\u0442",
  continueLesson: "\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u0443\u0440\u043e\u043a",
  continueHomework: "\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u0434\u043e\u043c\u0430\u0448\u043a\u0443",
  currentLesson: "\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u0443\u0440\u043e\u043a",
  nextLesson: "\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0443\u0440\u043e\u043a",
  progress: "\u041f\u0440\u043e\u0433\u0440\u0435\u0441\u0441",
  check: "\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c",
  showAnswer: "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043e\u0442\u0432\u0435\u0442",
  choose: "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435",
  answer: "\u041e\u0442\u0432\u0435\u0442",
  reset: "\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u0434\u0435\u043c\u043e-\u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441",
  saved: "\u041e\u0442\u0432\u0435\u0442 \u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d",
};

let progress = loadProgress();

const state = {
  view: "student",
  selectedLessonId: progress.currentLessonId || lessons()[0].lesson_id,
  selectedExerciseId: null,
  selectedMode: "classwork",
  lessonStepIndex: 0,
  homeworkStarted: false,
  liveLessonId: progress.currentLessonId || lessons()[0].lesson_id,
  liveExerciseId: null,
  liveMode: "group",
  liveLocked: false,
  liveShowAnswers: true,
  selectedStudentId: DEMO_USER_ID,
  methodStatusFilter: "all",
  selectedMethodExerciseId: null,
};

const demoStudents = [
  { id: DEMO_USER_ID, name: "Anna", source: "localStorage demo", nps: 9, retention: "active", inactiveDays: 0, missedHomework: 0, depth: "high" },
  { id: "student_demo_maria", name: "Maria", source: "mock cohort", progress: 38, classwork: 46, homework: 28, nps: 8, retention: "watch", inactiveDays: 2, missedHomework: 1, depth: "medium", mistake: "question_order" },
  { id: "student_demo_irina", name: "Irina", source: "mock cohort", progress: 18, classwork: 24, homework: 8, nps: 6, retention: "risk", inactiveDays: 8, missedHomework: 2, depth: "low", mistake: "missing_be" },
  { id: "student_demo_ekaterina", name: "Ekaterina", source: "mock cohort", progress: 72, classwork: 78, homework: 66, nps: 10, retention: "active", inactiveDays: 0, missedHomework: 0, depth: "high", mistake: "email_at_dot" },
];

const statusWorkflow = [
  "draft",
  "AI-generated",
  "methodist review",
  "language review",
  "UX review",
  "pilot",
  "approved",
  "published",
  "needs revision",
  "archived",
];

const methodMaterials = allExercises().map((exercise, index) => ({
  id: exercise.exercise_id,
  title: `${getLesson(exercise.lesson_id).title} / ${exercise.exercise_type}`,
  status: statusWorkflow[index % (statusWorkflow.length - 1)],
  owner: index % 2 ? "language reviewer" : "methodist",
  updated: `2026-06-${String(10 + index).padStart(2, "0")}`,
}));

methodMaterials.push({
  id: "archived_sample_u1_l0",
  title: "Archived pilot card: old greeting drill",
  status: "archived",
  owner: "methodist",
  updated: "2026-06-01",
});

const icons = {
  home: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 10.8 12 4l9 6.8v8.1a1.6 1.6 0 0 1-1.6 1.6h-4.8v-5.7H9.4v5.7H4.6A1.6 1.6 0 0 1 3 18.9z"/></svg>`,
  book: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4.8A2.8 2.8 0 0 1 7.8 2H20v17H7.8A2.8 2.8 0 0 0 5 21.8z"/><path d="M5 4.8v17A2.8 2.8 0 0 1 7.8 19H20"/></svg>`,
  checklist: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 6 1.6 1.6L9 4.2"/><path d="M11 6h9"/><path d="m4 12 1.6 1.6L9 10.2"/><path d="M11 12h9"/><path d="m4 18 1.6 1.6L9 16.2"/><path d="M11 18h9"/></svg>`,
  cards: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="5" width="12" height="14" rx="2"/><path d="M9 5.5 17.8 3a2 2 0 0 1 2.5 1.4l3 10.7a2 2 0 0 1-1.4 2.5L17 19"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4M16 3v4M4 10h16"/></svg>`,
  headphones: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 14a8 8 0 0 1 16 0"/><rect x="3" y="13" width="4" height="7" rx="2"/><rect x="17" y="13" width="4" height="7" rx="2"/></svg>`,
  microphone: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8"/></svg>`,
  message: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9l-5 4v-4H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"/></svg>`,
  progress: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19V5"/><path d="M4 19h16"/><path d="M8 16v-4M12 16V8M16 16v-6"/></svg>`,
  profile: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>`,
  back: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="m11 6-6 6 6 6"/></svg>`,
  check: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 12.5 5 5L20 6"/></svg>`,
  hint: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M8 14a6 6 0 1 1 8 0c-.8.7-1 1.4-1 2H9c0-.6-.2-1.3-1-2z"/></svg>`,
  play: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>`,
  bell: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></svg>`,
  users: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="10" r="2.5"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M14 19a5 5 0 0 1 7 0"/></svg>`,
  settings: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/><path d="m4 12-2-1 2-4 2 1a8 8 0 0 1 2-1V5h8v2a8 8 0 0 1 2 1l2-1 2 4-2 1a8 8 0 0 1 0 2l2 1-2 4-2-1a8 8 0 0 1-2 1v2H8v-2a8 8 0 0 1-2-1l-2 1-2-4 2-1a8 8 0 0 1 0-2z"/></svg>`,
};

const lessonIllustrations = {
  beg_u1_l1: "./src/assets/illustrations/lesson-1-meeting.svg",
  beg_u1_l2: "./src/assets/illustrations/lesson-2-countries.svg",
  beg_u1_l3: "./src/assets/illustrations/lesson-3-jobs.svg",
  beg_u1_l4: "./src/assets/illustrations/lesson-4-contacts.svg",
  beg_u1_l5: "./src/assets/illustrations/lesson-5-profile.svg",
  beg_u1_l6: "./src/assets/illustrations/lesson-6-practical.svg",
};

const lessonScenes = {
  beg_u1_l1: "Знакомство",
  beg_u1_l2: "Город",
  beg_u1_l3: "Работа",
  beg_u1_l4: "Контакты",
  beg_u1_l5: "Профиль",
  beg_u1_l6: "Практика",
};

function html(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function icon(name) {
  return `<span class="ui-icon" aria-hidden="true">${icons[name] || icons.arrow}</span>`;
}

function pill(text, tone = "blue") {
  return `<span class="status-pill ${html(tone)}">${html(text)}</span>`;
}

function progressBar(percent) {
  return `<div class="progress-bar"><span style="width: ${Math.max(0, Math.min(100, Number(percent) || 0))}%"></span></div>`;
}

function statusTone(status) {
  if (status === "done" || status === "published" || status === "approved") return "green";
  if (status === "needs retry" || status === "risk" || status === "needs revision") return "danger";
  if (status === "in progress" || status === "methodist review" || status === "language review" || status === "UX review") return "amber";
  if (status === "archived") return "gray";
  return "blue";
}

function routeFor(view, extra = {}) {
  if (view === "lesson") return `#lesson/${extra.lessonId || state.selectedLessonId}`;
  if (view === "exercise") return `#exercise/${extra.lessonId || state.selectedLessonId}/${extra.exerciseId || state.selectedExerciseId}/${extra.mode || state.selectedMode}`;
  if (view === "homework") return `#homework/${extra.lessonId || state.selectedLessonId}`;
  if (view === "live") return `#live/${extra.lessonId || state.liveLessonId}`;
  if (view === "teacher") return "#teacher";
  if (view === "methodologist") return "#methodologist";
  if (view === "unit") return "#unit";
  if (view === "review") return "#review";
  return "#student";
}

function navigate(view, extra = {}) {
  window.location.hash = routeFor(view, extra);
  parseHash();
  render();
}

function parseHash() {
  const parts = window.location.hash.replace(/^#/, "").split("/").filter(Boolean);
  const [view, lessonId, exerciseId, mode] = parts;
  if (!view) return;

  if (["student", "unit", "review", "teacher", "methodologist"].includes(view)) {
    state.view = view;
  }

  if (view === "lesson" && getLesson(lessonId)) {
    state.view = "lesson";
    state.selectedLessonId = lessonId;
    state.selectedExerciseId = null;
    state.lessonStepIndex = 0;
    state.homeworkStarted = false;
  }

  if (view === "homework" && getLesson(lessonId)) {
    state.view = "homework";
    state.selectedLessonId = lessonId;
    state.selectedMode = "homework";
    state.homeworkStarted = false;
  }

  if (view === "exercise" && getLesson(lessonId) && getExercise(exerciseId)) {
    const exercise = getExercise(exerciseId);
    const exerciseMode = mode || exercise.mode || "classwork";
    state.view = exerciseMode === "homework" ? "homework" : "lesson";
    state.selectedLessonId = lessonId;
    state.selectedExerciseId = exerciseId;
    state.selectedMode = exerciseMode;
    state.homeworkStarted = exerciseMode === "homework";
    state.lessonStepIndex = exerciseMode === "homework" ? 0 : lessonStepIndexForExercise(lessonId, exerciseId);
  }

  if (view === "live" && getLesson(lessonId)) {
    state.view = "live";
    state.liveLessonId = lessonId;
  }
}

function render() {
  root.innerHTML = renderShell(renderCurrentView());
}

function renderShell(content) {
  if (["teacher", "live", "methodologist"].includes(state.view)) {
    return renderStaffShell(content);
  }

  if (state.view === "lesson" || (state.view === "homework" && state.homeworkStarted)) {
    return `
      <div class="focus-shell">
        <main class="focus-workspace">
          ${content}
        </main>
      </div>
    `;
  }

  const stats = calculateUnitProgress(progress, allExercises());
  const studentNav = [
    ["student", "Сегодня", "home"],
    ["unit", "Курс", "book"],
    ["homework", "Домашка", "checklist"],
    ["review", "Повторение", "cards"],
  ];

  return `
    <div class="student-shell">
      <header class="student-topbar">
        <button class="brand-button" type="button" data-route="student" aria-label="ULC">
          <span class="brand-mark">ULC</span>
          <span>Учимся</span>
        </button>
        <nav class="student-nav" aria-label="Student navigation">
          ${studentNav.map(([view, label, iconName]) => {
            const active = state.view === view || (view === "student" && state.view === "lesson");
            return `<button class="${active ? "active" : ""}" type="button" data-route="${view}">${icon(iconName)}<span>${html(label)}</span></button>`;
          }).join("")}
        </nav>
        <div class="student-actions">
          <span class="streak-pill">${icon("progress")} 3 дня</span>
          <button class="icon-button" type="button" aria-label="Уведомления">${icon("bell")}</button>
          <details class="profile-menu">
            <summary><span class="avatar">A</span></summary>
            <div class="profile-popover">
              <strong>Анна</strong>
              <span>${stats.percent}% Unit 1</span>
              <button type="button" data-route="teacher">${icon("users")} Кабинет преподавателя</button>
              <button type="button" data-open-live="${html(state.selectedLessonId)}">${icon("microphone")} Live-урок</button>
              <button type="button" data-route="methodologist">${icon("settings")} Методист</button>
              <button type="button" data-reset-progress="true">${icon("progress")} ${html(ui.reset)}</button>
            </div>
          </details>
        </div>
      </header>
      <main class="student-workspace">
        ${content}
      </main>
      <nav class="mobile-bottom-nav" aria-label="Student mobile navigation">
        ${studentNav.map(([view, label, iconName]) => `<button class="${state.view === view ? "active" : ""}" type="button" data-route="${view}">${icon(iconName)}<span>${html(label)}</span></button>`).join("")}
      </nav>
    </div>
  `;
}

function renderStaffShell(content) {
  const navItems = [
    ["student", "Student", "home"],
    ["teacher", "Teacher", "users"],
    ["live", "Live", "microphone"],
    ["methodologist", "Methodologist", "settings"],
  ];
  const stats = calculateUnitProgress(progress, allExercises());

  return `
    <div class="app-shell staff-shell">
      <aside class="sidebar staff-sidebar">
        <div class="brand-block">
          <div class="brand-mark">ULC</div>
          <div>
            <h1>ULC LMS</h1>
            <p>${html(VERSION)}</p>
          </div>
        </div>
        <nav class="nav-list" aria-label="Staff navigation">
          ${navItems.map(([view, label, iconName]) => {
            const active = state.view === view;
            return `<button class="nav-item ${active ? "active" : ""}" type="button" data-route="${view}">${icon(iconName)}<span>${html(label)}</span></button>`;
          }).join("")}
        </nav>
        <div class="sidebar-status">
          <strong>${stats.percent}% Unit 1</strong>
          ${progressBar(stats.percent)}
          <span>${stats.completed}/${stats.total} exercises - ${html(STORAGE_KEY)}</span>
        </div>
      </aside>
      <main class="workspace staff-workspace">
        <div class="topbar">
          <div>
            <p class="eyebrow">Internal demo workspace</p>
            <h2>${html(unit.title)}</h2>
          </div>
          <div class="topbar-actions">
            ${pill("6 lessons", "green")}
            ${pill("24 exercises", "blue")}
            ${pill("12/12 classwork/homework", "amber")}
          </div>
        </div>
        ${content}
      </main>
    </div>
  `;
}

function renderCurrentView() {
  if (state.view === "unit") return renderUnitMap();
  if (state.view === "lesson") return renderLessonPage();
  if (state.view === "homework") return renderHomeworkMode();
  if (state.view === "review") return renderReviewPractice();
  if (state.view === "teacher") return renderTeacherDashboard();
  if (state.view === "live") return renderLiveLessonMode();
  if (state.view === "methodologist") return renderMethodologistDashboard();
  return renderStudentDashboard();
}

function renderMetric(label, value, note) {
  return `
    <div class="metric-card">
      <span>${html(label)}</span>
      <strong>${html(value)}</strong>
      <small>${html(note)}</small>
    </div>
  `;
}

function currentLesson() {
  return getLesson(state.selectedLessonId) || lessons()[0];
}

function nextLessonAfter(lesson) {
  return lessons().find((item) => item.lesson_number > lesson.lesson_number) || lessons()[0];
}

function deadlineForLesson(lesson) {
  const day = 18 + lesson.lesson_number;
  return `2026-06-${String(day).padStart(2, "0")} 22:00`;
}

function humanDeadlineForLesson(lesson) {
  return lesson.lesson_number === 1 ? "До завтра, 22:00" : `До ${18 + lesson.lesson_number} июня, 22:00`;
}

function formatEstimatedTime(value) {
  const minutes = String(value || "").match(/\d+/)?.[0] || "3";
  return `${minutes} ${minutes === "1" ? "минута" : Number(minutes) > 1 && Number(minutes) < 5 ? "минуты" : "минут"}`;
}

function lessonShortTitle(lesson) {
  return lesson.title.replace(/^Lesson\s+\d+:\s*/i, "");
}

function lessonRouteMeta(lesson) {
  return `Урок ${lesson.lesson_number} · ${lessonScenes[lesson.lesson_id] || "Разговор"}`;
}

function clippedOutcome(lesson) {
  const outcome = lessonOutcome(lesson);
  return outcome.length > 118 ? `${outcome.slice(0, 115).trim()}...` : outcome;
}

function lessonIllustration(lesson) {
  return lessonIllustrations[lesson.lesson_id] || "./src/assets/illustrations/unit-1-cover.svg";
}

function lessonOutcome(lesson) {
  return lesson.speaking_outcome?.can_do_statement_ru || lesson.lesson_goal || "";
}

function humanStatus(status) {
  const labels = {
    "not started": "Не начато",
    "in progress": "В процессе",
    done: "Готово",
    "needs retry": "Повторить",
    risk: "Риск",
    active: "Активен",
    watch: "Наблюдать",
  };
  return labels[status] || status;
}

function humanExerciseType(type) {
  const labels = {
    fill_gap: "Заполнить пропуск",
    multiple_choice: "Выбор ответа",
    matching: "Сопоставить",
    word_order: "Собрать фразу",
    listen_type: "Аудирование",
    listen_choose: "Аудирование",
    short_writing: "Мини-письмо",
    drag_drop: "Собрать диалог",
  };
  return labels[type] || type;
}

function attemptsText(exercise, exerciseState) {
  const attemptsLeft = Math.max(0, exercise.attempts_allowed - (exerciseState.attempts || 0));
  if (attemptsLeft === 1) return "Осталась 1 попытка";
  if (attemptsLeft > 1 && attemptsLeft < 5) return `Осталось ${attemptsLeft} попытки`;
  return `Осталось ${attemptsLeft} попыток`;
}

function renderFriendlyMeta(exercise, exerciseState, mode, options = {}) {
  const result = exerciseState.latestResult || exerciseState.bestResult;
  const isCorrect = Boolean(result?.correct);
  const labels = [`${options.stepTitle || humanExerciseType(exercise.exercise_type)} · ${formatEstimatedTime(exercise.estimated_time)}`];
  if (options.teacherLed) labels.push("Задание с преподавателем");
  if (!isCorrect && !options.teacherLed) labels.push(attemptsText(exercise, exerciseState));

  return `
    <div class="friendly-meta">
      ${labels.slice(0, 2).map((label, index) => `<span>${icon(index === 0 ? "calendar" : "progress")} ${html(label)}</span>`).join("")}
    </div>
  `;
}

function renderProgressRing(percent, label = "") {
  const value = Math.max(0, Math.min(100, Number(percent) || 0));
  return `
    <div class="progress-ring" style="--progress: ${value}%">
      <strong>${value}%</strong>
      ${label ? `<span>${html(label)}</span>` : ""}
    </div>
  `;
}

function getCurrentExerciseIndex(pool) {
  return Math.max(0, pool.findIndex((exercise) => exercise.exercise_id === state.selectedExerciseId));
}

function getDemoStudentMetrics() {
  const localStats = calculateUnitProgress(progress, allExercises());
  return demoStudents.map((student) => {
    if (student.id !== DEMO_USER_ID) return student;
    const classwork = calculateExerciseProgress(progress, allExercises().filter((exercise) => exercise.mode === "classwork"));
    const homework = calculateHomeworkProgress(progress, getHomeworkTasks(), getHomeworkExercises);
    return {
      ...student,
      progress: localStats.percent,
      classwork: classwork.percent,
      homework: homework.percent,
      retention: localStats.percent > 35 ? "active" : "watch",
      mistake: "live localStorage data",
    };
  });
}

function renderStudentDashboard() {
  const lesson = currentLesson();
  const next = nextLessonAfter(lesson);
  const unitStats = calculateUnitProgress(progress, allExercises());
  const homework = getLessonHomework(lesson.lesson_id) || getHomeworkTasks()[0];
  const homeworkStats = calculateExerciseProgress(progress, getHomeworkExercises(homework.lesson_id));
  const reviewWords = lesson.target_vocabulary.slice(0, 3);

  return `
    <section class="student-dashboard">
      <div class="learning-hero">
        <div class="hero-copy-block">
          <span class="soft-label">Урок ${lesson.lesson_number} · ${html(formatEstimatedTime(lesson.estimated_time || "18 min"))}</span>
          <h1>Привет, Анна!</h1>
          <p>${html(lessonOutcome(lesson))}</p>
          <button class="primary-button large-cta" type="button" data-open-lesson="${html(lesson.lesson_id)}">
            ${icon("arrow")} ${html(ui.continueLesson)}
          </button>
        </div>
        <img src="./src/assets/illustrations/unit-1-cover.svg" alt="" class="hero-illustration" />
      </div>

      <div class="quick-card-row">
        <button class="quick-card" type="button" data-open-lesson="${html(next.lesson_id)}">
          ${icon("calendar")}
          <span>Следующий урок</span>
          <strong>${html(next.title)}</strong>
        </button>
        <button class="quick-card" type="button" data-open-homework="${html(homework.lesson_id)}">
          ${icon("checklist")}
          <span>Домашка</span>
          <strong>${homeworkStats.percent}% · ${html(humanDeadlineForLesson(lesson))}</strong>
        </button>
        <button class="quick-card" type="button" data-route="review">
          ${icon("cards")}
          <span>Повторить слова</span>
          <strong>${reviewWords.map(html).join(", ")}</strong>
        </button>
      </div>

      <section class="course-path-panel" aria-label="Course progress">
        <div class="path-heading">
          <div>
            <span class="soft-label">Unit 1 · Nice to meet you</span>
            <h2>Путь к первому разговору</h2>
          </div>
          ${renderProgressRing(unitStats.percent, "готово")}
        </div>
        <div class="visual-path compact-path">
          ${lessons().map(renderPathNode).join("")}
        </div>
      </section>
    </section>
  `;
}

function renderLessonTile(lesson) {
  const stats = calculateLessonProgress(progress, lesson.lesson_id, getLessonExercises);
  const active = lesson.lesson_id === state.selectedLessonId;
  const status = stats.percent >= 100 ? "done" : stats.percent > 0 ? "in-progress" : "not-started";

  return `
    <button class="learning-path-card ${active ? "active" : ""} ${status}" type="button" data-open-lesson="${html(lesson.lesson_id)}">
      <span class="path-marker">${stats.percent >= 100 ? icon("check") : lesson.lesson_number}</span>
      <img src="${html(lessonIllustration(lesson))}" alt="" />
      <span class="path-meta">${html(lessonRouteMeta(lesson))}</span>
      <strong>${html(lessonShortTitle(lesson))}</strong>
      <small>${html(clippedOutcome(lesson))}</small>
      <div class="path-card-footer">
        ${progressBar(stats.percent)}
        <span>${stats.percent}%</span>
      </div>
      <em>Продолжить</em>
    </button>
  `;
}

function renderPathNode(lesson) {
  const stats = calculateLessonProgress(progress, lesson.lesson_id, getLessonExercises);
  const status = stats.percent >= 100 ? "done" : stats.percent > 0 ? "in progress" : "not started";
  return `
    <button class="path-node ${status.replaceAll(" ", "-")}" type="button" data-open-lesson="${html(lesson.lesson_id)}">
      <span>${lesson.lesson_number}</span>
      <strong>${html(lesson.title.replace(/^Lesson \d+:\s*/i, ""))}</strong>
      <small>${html(humanStatus(status))}</small>
    </button>
  `;
}

function renderUnitMap() {
  const unitStats = calculateUnitProgress(progress, allExercises());
  return `
    <section class="unit-map-screen">
      <div class="unit-route-hero">
        <div>
          <span class="soft-label">Английский для начинающих</span>
          <h1>Unit 1 · Nice to meet you</h1>
          <p>Научитесь знакомиться, рассказывать о себе и обмениваться контактами</p>
          <div class="unit-compact-progress">
            <span>${unitStats.percent}% пройдено</span>
            ${progressBar(unitStats.percent)}
          </div>
        </div>
        <img src="./src/assets/illustrations/unit-1-cover.svg" alt="" />
      </div>
      <div class="learning-path" aria-label="Unit 1 learning path">
        ${lessons().map(renderLessonTile).join("")}
      </div>
    </section>
  `;
}

function buildLessonSteps(lesson) {
  const classwork = getClassworkExercises(lesson.lesson_id);
  return [
    { type: "context", title: "Контекст", icon: "message" },
    { type: "phrases", title: "Новые фразы", icon: "cards" },
    { type: "exercise", title: "Мини-практика", icon: "checklist", exercise: classwork[0] },
    { type: "grammar", title: "Грамматика", icon: "book" },
    { type: "exercise", title: "Аудирование", icon: "headphones", exercise: classwork[1] || classwork[0] },
    { type: "speaking", title: "Практика речи", icon: "microphone" },
    { type: "summary", title: "Итог", icon: "check" },
  ];
}

function lessonStepIndexForExercise(lessonId, exerciseId) {
  const lesson = getLesson(lessonId);
  const steps = buildLessonSteps(lesson);
  const index = steps.findIndex((step) => step.exercise?.exercise_id === exerciseId);
  return index >= 0 ? index : 0;
}

function syncLessonStepToExercise(lesson, steps) {
  if (!Number.isInteger(state.lessonStepIndex) || state.lessonStepIndex < 0 || state.lessonStepIndex >= steps.length) {
    state.lessonStepIndex = 0;
  }
  const step = steps[state.lessonStepIndex];
  if (step.exercise) {
    state.selectedExerciseId = step.exercise.exercise_id;
    state.selectedMode = step.exercise.mode;
  }
}

function renderLessonPage() {
  const lesson = currentLesson();
  const steps = buildLessonSteps(lesson);
  syncLessonStepToExercise(lesson, steps);
  const step = steps[state.lessonStepIndex] || steps[0];
  const stats = calculateLessonProgress(progress, lesson.lesson_id, getLessonExercises);
  const exercise = step.exercise ? getExercise(step.exercise.exercise_id) : getExercise(state.selectedExerciseId);

  return `
    <section class="lesson-player-screen">
      <div class="lesson-player-top">
        <button class="ghost-button compact" type="button" data-route="student">${icon("back")} Назад</button>
        <div>
          <span>Урок ${lesson.lesson_number}</span>
          <strong>${html(lesson.title)}</strong>
        </div>
        <div class="lesson-step-meter">
          <span>Шаг ${state.lessonStepIndex + 1} из ${steps.length}</span>
          ${progressBar(((state.lessonStepIndex + 1) / steps.length) * 100)}
        </div>
        <button class="ghost-button compact" type="button" data-route="unit">Выйти</button>
      </div>

      <div class="lesson-player-layout focus-layout">
        <article class="lesson-stage focus-stage">
          <div class="stage-visual">
            <img src="${html(lessonIllustration(lesson))}" alt="" />
          </div>
          <div class="stage-content">
            <span class="soft-label">${html(step.title)}</span>
            ${renderLessonStepContent(lesson, step)}
          </div>
        </article>

        <details class="lesson-drawer focus-drawer">
          <summary>${icon("book")} Структура урока</summary>
          <div class="lesson-step-list">
            ${steps.map((item, index) => `
              <button class="${index === state.lessonStepIndex ? "active" : ""}" type="button" data-lesson-step="${index}">
                ${icon(item.icon)}
                <span>${html(item.title)}</span>
              </button>
            `).join("")}
          </div>
        </details>
      </div>

      ${renderLessonActionBar(exercise, step, steps.length)}
    </section>
  `;
}

function renderLessonStepContent(lesson, step) {
  if (step.type === "context") {
    return `
      <h1>${html(lesson.title)}</h1>
      <p>${html(lessonOutcome(lesson))}</p>
      <div class="phrase-bubbles">
        ${lesson.target_vocabulary.slice(0, 4).map((item) => `<span>${html(item)}</span>`).join("")}
      </div>
    `;
  }

  if (step.type === "phrases") {
    return `
      <h2>Фразы для старта</h2>
      <div class="phrase-list">
        ${lesson.target_vocabulary.slice(0, 5).map((item) => `<span>${html(item)}</span>`).join("")}
      </div>
      <p>Прочитайте вслух и выберите две фразы, которые пригодятся в разговоре.</p>
    `;
  }

  if (step.type === "grammar") {
    return `
      <h2>Маленькое правило</h2>
      <div class="rule-card">
        ${lesson.target_grammar.slice(0, 2).map((item) => `<strong>${html(item)}</strong>`).join("")}
      </div>
      <p>${html(lesson.pronunciation_focus?.[0] || "Скажите фразу медленно, затем естественно.")}</p>
    `;
  }

  if (step.type === "speaking") {
    const activity = getSpeakingActivities(lesson.lesson_id)[0];
    return `
      <h2>Скажите вслух</h2>
      <p>${html(activity?.instruction_ru || lessonOutcome(lesson))}</p>
      <div class="speaking-card">
        ${icon("microphone")}
        <strong>${html(activity?.target_phrases_en?.slice(0, 3).join(" · ") || lesson.learning_content_en || lesson.title)}</strong>
      </div>
    `;
  }

  if (step.type === "summary") {
    return `
      <h2>Готово на сегодня</h2>
      <p>${html(lessonOutcome(lesson))}</p>
      <div class="summary-actions">
        <button class="primary-button" type="button" data-open-homework="${html(lesson.lesson_id)}">${icon("checklist")} Перейти к домашке</button>
      </div>
    `;
  }

  if (step.exercise) {
    state.selectedExerciseId = step.exercise.exercise_id;
    state.selectedMode = step.exercise.mode;
    return renderExercisePlayer(lesson.lesson_id, step.exercise.mode, { includeActions: false, compactHeader: true, stepTitle: step.title });
  }

  return "";
}

function renderLessonActionBar(exercise, step, totalSteps) {
  const isExercise = step.type === "exercise" && exercise;
  const exerciseState = isExercise ? getExerciseState(progress, exercise.exercise_id) : null;
  const result = exerciseState?.latestResult || exerciseState?.bestResult;
  if (isExercise && result?.correct) {
    return `
      <div class="lesson-action-bar success-only">
        <button class="primary-button" type="button" data-next-step="true">${icon("arrow")} Далее</button>
      </div>
    `;
  }
  const attemptsLeft = isExercise ? Math.max(0, exercise.attempts_allowed - (exerciseState.attempts || 0)) : 1;
  const mainLabel = isExercise ? ui.check : state.lessonStepIndex >= totalSteps - 1 ? "К курсу" : "Далее";
  const mainAttrs = isExercise
    ? `data-check-exercise="${html(exercise.exercise_id)}" ${attemptsLeft <= 0 ? "disabled" : ""}`
    : state.lessonStepIndex >= totalSteps - 1
      ? `data-route="unit"`
      : `data-next-step="true"`;

  return `
    <div class="lesson-action-bar">
      <button class="ghost-button" type="button" data-prev-step="true" ${state.lessonStepIndex <= 0 ? "disabled" : ""}>${icon("back")} Назад</button>
      ${isExercise ? `<button class="ghost-button" type="button" data-show-answer="${html(exercise.exercise_id)}">${icon("check")} Показать ответ</button>` : `<button class="ghost-button" type="button">${icon("hint")} Подсказка</button>`}
      <button class="primary-button" type="button" ${mainAttrs}>${icon(isExercise ? "check" : "arrow")} ${html(mainLabel)}</button>
    </div>
  `;
}

function renderExerciseCard(exercise, mode) {
  const status = getExerciseStatus(progress, exercise.exercise_id);
  const selected = exercise.exercise_id === state.selectedExerciseId;
  return `
    <button class="exercise-card ${selected ? "selected" : ""}" type="button" data-open-exercise="${html(exercise.exercise_id)}" data-mode="${html(mode)}">
      <span>${html(humanExerciseType(exercise.exercise_type))}</span>
      <strong>${html(exercise.instruction_ru)}</strong>
      <small>${html(exercise.estimated_time)}</small>
      ${pill(humanStatus(status), statusTone(status))}
    </button>
  `;
}

function renderMediaSpecs(lessonId) {
  const media = getLessonMedia(lessonId);
  const speaking = getSpeakingActivities(lessonId);
  if (!media.length && !speaking.length) return "";

  return `
    <div class="media-spec-grid">
      ${media.map((item) => `
        <div class="media-mini">
          <p class="eyebrow">listening media specification</p>
          <strong>${html(item.media_type)} - ${html(item.duration)}</strong>
          <p>${html(item.script)}</p>
          <small>${html(item.accent)} - ${html(item.speed)} - no audio file in v0.2</small>
        </div>
      `).join("")}
      ${speaking.map((activity) => `
        <div class="media-mini">
          <p class="eyebrow">speaking widget placeholder</p>
          <strong>${html(activity.activity_id)}</strong>
          <p>${html(activity.instruction_ru)}</p>
          <small>${activity.target_phrases_en.map(html).join(" - ")}</small>
        </div>
      `).join("")}
    </div>
  `;
}

function renderTeacherNotes(lessonId) {
  const notes = getTeacherNotes(lessonId);
  const mistakes = getTypicalMistakes(lessonId);
  return `
    <div class="lesson-mini-grid">
      <div class="mini-card">
        <h4>Teacher notes</h4>
        ${notes.map((note) => `<p>${html(note.text)} <small>${html(note.priority)}</small></p>`).join("")}
      </div>
      <div class="mini-card">
        <h4>Typical mistakes</h4>
        ${mistakes.map((mistake) => `<p><strong>${html(mistake.mistake_en)}</strong> -> ${html(mistake.correction_en)}<br><small>${html(mistake.explanation_ru)}</small></p>`).join("")}
      </div>
    </div>
  `;
}

function renderExercisePlayer(lessonId = state.selectedLessonId, mode = state.selectedMode, options = {}) {
  const pool = mode === "homework" ? getHomeworkExercises(lessonId) : getClassworkExercises(lessonId);
  const fallback = pool[0] || getLessonExercises(lessonId)[0];
  const exercise = getExercise(state.selectedExerciseId) || fallback;
  if (!exercise) return `<p>No exercise selected.</p>`;

  state.selectedExerciseId = exercise.exercise_id;
  state.selectedMode = mode || exercise.mode;

  const exerciseState = getExerciseState(progress, exercise.exercise_id);

  return `
    <div class="exercise-player visual-exercise">
      ${options.compactHeader ? "" : `<div class="panel-heading">
        <div>
          <p class="eyebrow">${mode === "homework" ? "Домашняя практика" : "Задание с преподавателем"}</p>
          <h3>${html(humanExerciseType(exercise.exercise_type))}</h3>
        </div>
        ${pill(humanStatus(getExerciseStatus(progress, exercise.exercise_id)), statusTone(getExerciseStatus(progress, exercise.exercise_id)))}
      </div>`}
      ${renderFriendlyMeta(exercise, exerciseState, mode, options)}
      ${renderExerciseMediaNotice(exercise)}
      <p class="exercise-instruction">${html(exercise.instruction_ru)}</p>
      ${renderExerciseInput(exercise, exerciseState)}
      ${renderFeedback(exercise, exerciseState)}
      ${options.includeActions === false ? "" : renderExerciseActions(exercise, exerciseState)}
    </div>
  `;
}

function renderExerciseMediaNotice(exercise) {
  const refs = exercise.items.map((item) => item.media_ref).filter(Boolean);
  if (!refs.length) return "";
  const media = getAllMediaSpecifications().find((item) => item.media_id === refs[0]);
  if (!media) return "";
  return `
    <div class="audio-player-card">
      <button class="play-button" type="button" aria-label="Play">${icon("play")}</button>
      <div class="waveform" aria-hidden="true">${Array.from({ length: 28 }, (_, index) => `<span style="--h: ${18 + ((index * 7) % 30)}px"></span>`).join("")}</div>
      <span class="speed-pill">1x</span>
    </div>
  `;
}

function renderExerciseInput(exercise, exerciseState) {
  const draft = exerciseState.latestAnswer ?? "";
  const item = exercise.items[0] || {};

  if (exercise.exercise_type === "multiple_choice" || exercise.exercise_type === "listen_choose") {
    return `
      <div class="exercise-prompt">${html(item.prompt_en || exercise.learning_content_en)}</div>
      <div class="choice-grid">
        ${(item.options || []).map((option) => `
          <button class="choice-tile ${draft === option ? "selected" : ""}" type="button" value="${html(option)}" data-choice="${html(exercise.exercise_id)}">
            ${draft === option ? icon("check") : ""}
            <span>${html(option)}</span>
          </button>
        `).join("")}
      </div>
    `;
  }

  if (exercise.exercise_type === "matching") {
    const options = [...new Set(exercise.correct_answers.map((answer) => answer.value))];
    const current = typeof draft === "object" && !Array.isArray(draft) ? draft : {};
    return `
      <div class="matching-board">
        ${exercise.items.map((matchItem) => `
          <div class="match-row">
            <div class="match-prompt">${html(matchItem.prompt_en)}</div>
            <div class="match-options">
              ${options.map((option) => `<button class="${current[matchItem.item_id] === option ? "selected" : ""}" type="button" data-match-choice="${html(exercise.exercise_id)}" data-item="${html(matchItem.item_id)}" data-value="${html(option)}">${html(option)}</button>`).join("")}
            </div>
          </div>
        `).join("")}
      </div>
    `;
  }

  if (exercise.exercise_type === "word_order" || exercise.exercise_type === "drag_drop") {
    const placed = Array.isArray(draft) ? draft : [];
    const bank = item.word_bank || [];
    const available = bank.filter((word) => !placed.includes(word));
    return `
      <div class="word-order">
        <div class="drop-zone word-answer">
          ${placed.length ? placed.map((word, index) => `<button class="word-chip placed" type="button" data-remove-word="${html(exercise.exercise_id)}" data-index="${index}">${html(word)}</button>`).join("") : `<span>Соберите ответ здесь</span>`}
        </div>
        <div class="word-bank">
          ${available.map((word) => `<button class="word-chip" type="button" data-add-word="${html(exercise.exercise_id)}" data-word="${html(word)}">${html(word)}</button>`).join("")}
        </div>
      </div>
    `;
  }

  if (exercise.exercise_type === "fill_gap") {
    const result = exerciseState.latestResult || exerciseState.bestResult;
    const hasError = Boolean(result && !result.correct);
    const prompt = (item.prompt_en || exercise.learning_content_en).replace(/^Hello\.\s*___/, "Hello, ___");
    const pieces = prompt.split("___");
    if (pieces.length > 1) {
      return `
        <div class="dialogue-gap-card ${hasError ? "has-error" : ""}">
          <div class="dialogue-person" aria-hidden="true"><span></span></div>
          <label class="inline-gap speech-line">
            <span>${html(pieces[0])}</span>
            <input data-answer="${html(exercise.exercise_id)}" value="${html(typeof draft === "string" ? draft : "")}" placeholder="${html(gapPlaceholder(exercise, prompt))}" size="5" />
            <span>${html(pieces.slice(1).join("___"))}</span>
          </label>
        </div>
      `;
    }
  }

  if (exercise.exercise_type === "short_writing") {
    return `
      <div class="chat-writing">
        <div class="chat-bubble task">${html(exercise.learning_content_en)}</div>
        <label class="chat-response">
          <span>${html(item.prompt_en || "Write your answer.")}</span>
          <textarea data-answer="${html(exercise.exercise_id)}" rows="3" placeholder="Hello. I'm ...">${html(typeof draft === "string" ? draft : "")}</textarea>
        </label>
      </div>
    `;
  }

  return `
    <label class="single-answer">
      <span class="exercise-prompt">${html(item.prompt_en || exercise.learning_content_en)}</span>
      <input data-answer="${html(exercise.exercise_id)}" value="${html(typeof draft === "string" ? draft : "")}" placeholder="Type here" />
    </label>
  `;
}

function successExplanation(exercise, result) {
  if (formatCorrectAnswer(exercise).includes("I'm")) return "I’m — короткая форма I am.";
  return result?.item_results?.[0]?.explanation_ru || exercise.ai_explanation?.example_en || "Хорошо. Можно идти дальше.";
}

function gapPlaceholder(exercise, prompt) {
  if (exercise.exercise_id === "beg_u1_l1_ex1" || /^Hello,\s*___/.test(prompt)) return "I'm";
  return "...";
}

function renderFeedback(exercise, exerciseState) {
  const result = exerciseState.latestResult || exerciseState.bestResult;
  const blocks = [];

  if (result) {
    blocks.push(`
      <div class="feedback-card ${result.correct ? "correct" : result.partial ? "partial" : "incorrect"}">
        <strong>${icon(result.correct ? "check" : "hint")} ${html(result.correct ? "Правильно!" : result.partial ? "Почти получилось" : "Нужно чуть поправить")}</strong>
        <p>${html(result.correct ? successExplanation(exercise, result) : result.preliminary_feedback_ru || result.item_results?.[0]?.explanation_ru || "Посмотрите на подсказку и попробуйте снова.")}</p>
        ${result.correct ? "" : `<div class="feedback-actions"><button class="ghost-button" type="button">${icon("hint")} Подсказка</button><button class="ghost-button" type="button" data-clear-answer="${html(exercise.exercise_id)}">${icon("back")} Попробовать снова</button><button class="ghost-button" type="button" data-open-ai="${html(exercise.exercise_id)}">${icon("hint")} Разобрать ошибку</button></div>`}
      </div>
    `);
  } else if (exerciseState.latestAnswer) {
    blocks.push(`<p class="mode-note">${html(ui.saved)}.</p>`);
  }

  if (exerciseState.correctAnswerShown && !result?.correct) {
    blocks.push(`<div class="answer-card"><strong>Правильный вариант</strong><p>${html(formatCorrectAnswer(exercise))}</p></div>`);
  }

  if (exerciseState.aiExplanationOpened) {
    blocks.push(`
      <details class="ai-explanation-drawer" open>
        <summary>${icon("hint")} Разбор ошибки</summary>
        <div><span>Что не так</span><p>${html(exercise.ai_explanation.text_ru)}</p></div>
        <div><span>Как правильно</span><p>${html(formatCorrectAnswer(exercise))}</p></div>
        <div><span>Пример</span><p>${html(exercise.ai_explanation.example_en || formatCorrectAnswer(exercise))}</p></div>
      </details>
    `);
  }

  return blocks.join("");
}

function renderExerciseActions(exercise, exerciseState) {
  const attemptsLeft = Math.max(0, exercise.attempts_allowed - (exerciseState.attempts || 0));
  return `
    <div class="exercise-actions">
      <button class="primary-button" type="button" data-check-exercise="${html(exercise.exercise_id)}" ${attemptsLeft <= 0 ? "disabled" : ""}>${icon("check")} ${html(ui.check)}</button>
      <button class="ghost-button" type="button" data-show-answer="${html(exercise.exercise_id)}">${icon("check")} ${html(ui.showAnswer)}</button>
      <button class="ghost-button" type="button" data-open-ai="${html(exercise.exercise_id)}">${icon("hint")} Разобрать ошибку</button>
    </div>
  `;
}

function renderHomeworkMode() {
  const selectedLesson = currentLesson();
  const homeworkTasks = getHomeworkTasks();
  const selectedTask = getLessonHomework(selectedLesson.lesson_id) || homeworkTasks[0];
  const selectedExercises = getHomeworkExercises(selectedTask.lesson_id);
  const selectedStats = calculateExerciseProgress(progress, selectedExercises);
  const currentIndex = getCurrentExerciseIndex(selectedExercises);
  const currentExercise = selectedExercises[currentIndex] || selectedExercises[0];

  if (!state.homeworkStarted) {
    return `
      <section class="homework-start-screen">
        <div class="homework-hero-card">
          <div>
            <span class="soft-label">Домашка после урока ${selectedLesson.lesson_number}</span>
            <h1>${html(lessonShortTitle(selectedLesson))}</h1>
            <p>${html(selectedTask.purpose_ru)}</p>
            <div class="homework-facts">
              <span>${icon("calendar")} ${html(humanDeadlineForLesson(selectedLesson))}</span>
              <span>${icon("checklist")} ${selectedExercises.length} задания · около 12 минут</span>
            </div>
            <button class="primary-button large-cta" type="button" data-start-homework="${html(selectedLesson.lesson_id)}">${icon("arrow")} Начать домашку</button>
          </div>
          <div class="homework-illustration-card">
            <img src="${html(lessonIllustration(selectedLesson))}" alt="" />
            <strong>${selectedStats.percent === 0 ? "Вы ещё не начали" : `${selectedStats.completed} из ${selectedStats.total} заданий`}</strong>
            ${selectedStats.percent > 0 ? progressBar(selectedStats.percent) : ""}
          </div>
        </div>

        <details class="homework-history">
          <summary>Что внутри</summary>
          <div class="homework-route compact-homework-route">
            ${selectedExercises.map((exercise, index) => `
              <button class="homework-step-card" type="button" data-open-homework-exercise="${html(selectedLesson.lesson_id)}" data-exercise-id="${html(exercise.exercise_id)}">
                <span>${index + 1}</span>
                ${icon(index === 0 ? "cards" : index === 1 ? "book" : index === 2 ? "headphones" : "message")}
                <strong>${html(humanExerciseType(exercise.exercise_type))}</strong>
              </button>
            `).join("")}
          </div>
        </details>

        <details class="homework-history subtle-history">
          <summary>Другие домашки Unit 1</summary>
          <div class="homework-list compact">
            ${homeworkTasks.map((task) => {
              const lesson = getLesson(task.lesson_id);
              const stats = calculateExerciseProgress(progress, getHomeworkExercises(task.lesson_id));
              return `<button type="button" data-open-homework="${html(task.lesson_id)}"><strong>${html(task.title_ru)}</strong><span>${stats.percent}% · Урок ${lesson.lesson_number}</span></button>`;
            }).join("")}
          </div>
        </details>
      </section>
    `;
  }

  state.selectedExerciseId = currentExercise.exercise_id;
  state.selectedMode = "homework";
  const currentExerciseState = getExerciseState(progress, currentExercise.exercise_id);
  const currentResult = currentExerciseState.latestResult || currentExerciseState.bestResult;
  const homeworkActionBar = currentResult?.correct
    ? `<div class="lesson-action-bar success-only"><button class="primary-button" type="button" data-homework-next="true" ${currentIndex >= selectedExercises.length - 1 ? "data-open-homework=\"" + html(selectedLesson.lesson_id) + "\"" : ""}>${currentIndex >= selectedExercises.length - 1 ? "Готово" : "Далее"} ${icon("arrow")}</button></div>`
    : `<div class="lesson-action-bar">
        <button class="ghost-button" type="button" data-homework-prev="true" ${currentIndex <= 0 ? "disabled" : ""}>${icon("back")} Назад</button>
        <button class="ghost-button" type="button" data-show-answer="${html(currentExercise.exercise_id)}">${icon("check")} Показать ответ</button>
        <button class="primary-button" type="button" data-check-exercise="${html(currentExercise.exercise_id)}">${icon("check")} Проверить</button>
        <button class="ghost-button" type="button" data-homework-next="true" ${currentIndex >= selectedExercises.length - 1 ? "disabled" : ""}>Далее ${icon("arrow")}</button>
      </div>`;

  return `
    <section class="homework-player-screen">
      <div class="lesson-player-top">
        <button class="ghost-button compact" type="button" data-open-homework="${html(selectedLesson.lesson_id)}">${icon("back")} Домашка</button>
        <div>
          <span>Урок ${selectedLesson.lesson_number}</span>
          <strong>${html(selectedTask.title_ru)}</strong>
        </div>
        <div class="lesson-step-meter">
          <span>${currentIndex + 1} из ${selectedExercises.length} заданий</span>
          ${progressBar(((currentIndex + 1) / selectedExercises.length) * 100)}
        </div>
      </div>
      <article class="homework-stage">
        ${renderExercisePlayer(selectedLesson.lesson_id, "homework", { includeActions: false })}
      </article>
      ${homeworkActionBar}
    </section>
  `;
}

function renderReviewPractice() {
  const lesson = currentLesson();
  const exercises = getLessonExercises(lesson.lesson_id).filter((exercise) =>
    ["matching", "fill_gap", "word_order"].includes(exercise.exercise_type),
  );

  return `
    <section class="review-screen">
      <div class="screen-intro">
        <span class="soft-label">Повторение</span>
        <h1>Короткая практика перед следующим уроком</h1>
        <p>Повторите слова и фразы из ${html(lesson.title)}. Откройте любое задание, когда будет 5 минут.</p>
      </div>
      <div class="review-card-grid">
        <div class="review-words-card">
          ${icon("cards")}
          <h2>Слова</h2>
          <div class="phrase-bubbles">
            ${lesson.target_vocabulary.slice(0, 6).map((item) => `<span>${html(item)}</span>`).join("")}
          </div>
        </div>
        <div class="review-words-card mint">
          ${icon("microphone")}
          <h2>Сказать вслух</h2>
          <p>${html(lessonOutcome(lesson))}</p>
        </div>
        ${exercises.slice(0, 2).map((exercise) => `
          <button class="review-task-card" type="button" data-open-exercise="${html(exercise.exercise_id)}" data-mode="${html(exercise.mode)}">
            ${icon("checklist")}
            <span>${html(humanExerciseType(exercise.exercise_type))}</span>
            <strong>${html(exercise.instruction_ru)}</strong>
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function renderTeacherDashboard() {
  const students = getDemoStudentMetrics();
  const selected = students.find((student) => student.id === state.selectedStudentId) || students[0];
  const analyticsEvents = getAnalyticsEvents();
  const classStats = calculateExerciseProgress(progress, allExercises().filter((exercise) => exercise.mode === "classwork"));
  const homeworkStats = calculateHomeworkProgress(progress, getHomeworkTasks(), getHomeworkExercises);
  const unitStats = calculateUnitProgress(progress, allExercises());
  const riskStudents = students.filter((student) => student.retention === "risk" || student.missedHomework > 1);

  return `
    <section class="content-panel">
      <div class="panel-heading">
        <div><p class="eyebrow">Teacher Dashboard - desktop-first</p><h2>${html(course.group)}</h2></div>
        <button class="primary-button" type="button" data-open-live="${html(progress.currentLessonId)}">${icon("microphone")} Start live lesson</button>
      </div>
      <p>Local demo student reads progress from localStorage; other students are mock cohort data.</p>
    </section>

    <section class="metrics-grid">
      ${renderMetric("Group progress", `${Math.round(students.reduce((sum, student) => sum + student.progress, 0) / students.length)}%`, "mixed local/mock")}
      ${renderMetric("Local student", `${unitStats.percent}%`, `${classStats.percent}% classwork / ${homeworkStats.percent}% homework`)}
      ${renderMetric("Risk signals", riskStudents.length, "inactive days, missed homework, low depth")}
      ${renderMetric("Analytics events", analyticsEvents.length, "stored locally only")}
    </section>

    <section class="teacher-grid">
      <div class="content-panel teacher-table-panel">
        <div class="panel-heading"><h3>Students</h3>${pill("mock + local", "blue")}</div>
        <table class="data-table">
          <thead><tr><th>Name</th><th>Progress</th><th>Homework</th><th>Retention</th><th>Depth</th></tr></thead>
          <tbody>
            ${students.map((student) => `
              <tr class="${student.id === selected.id ? "selected-row" : ""}" data-student="${html(student.id)}">
                <td><button class="link-button" type="button" data-student="${html(student.id)}">${html(student.name)}</button><small>${html(student.source)}</small></td>
                <td>${html(student.progress)}%</td>
                <td>${html(student.homework)}%</td>
                <td>${pill(student.retention, statusTone(student.retention))}</td>
                <td>${html(student.depth)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>

      <div class="content-panel">
        <div class="panel-heading"><h3>Selected student</h3>${pill(selected.retention, statusTone(selected.retention))}</div>
        <p><strong>${html(selected.name)}</strong> - NPS ${html(selected.nps)} - inactive ${html(selected.inactiveDays)} days</p>
        ${progressBar(selected.progress)}
        <ul class="compact-list">
          <li><span>Classwork</span><strong>${html(selected.classwork)}%</strong></li>
          <li><span>Homework</span><strong>${html(selected.homework)}%</strong></li>
          <li><span>Risk clue</span><strong>${html(selected.mistake || "none")}</strong></li>
        </ul>
      </div>

      <div class="content-panel">
        <div class="panel-heading"><h3>Lesson readiness</h3>${pill("Unit 1", "green")}</div>
        <ul class="compact-list">
          ${lessons().map((lesson) => {
            const stats = calculateLessonProgress(progress, lesson.lesson_id, getLessonExercises);
            return `<li><span>${html(lesson.title)}</span><strong>${stats.percent}%</strong></li>`;
          }).join("")}
        </ul>
      </div>

      <div class="content-panel">
        <div class="panel-heading"><h3>Revizor / BI mock</h3>${pill("local events", "amber")}</div>
        <ul class="compact-list">
          <li><span>NPS</span><strong>8.2</strong></li>
          <li><span>Retention</span><strong>75%</strong></li>
          <li><span>Depth of usage</span><strong>${html(selected.depth)}</strong></li>
          <li><span>High error rate</span><strong>question_order</strong></li>
          <li><span>AI explanations used</span><strong>${analyticsEvents.filter((event) => event.event_name.includes("ai")).length}</strong></li>
        </ul>
      </div>
    </section>
  `;
}

function renderLiveLessonMode() {
  const lesson = getLesson(state.liveLessonId) || currentLesson();
  const classwork = getClassworkExercises(lesson.lesson_id);
  const selectedExercise = getExercise(state.liveExerciseId) || classwork[0] || getLessonExercises(lesson.lesson_id)[0];
  state.liveExerciseId = selectedExercise?.exercise_id || null;

  return `
    <section class="content-panel live-hero">
      <div class="panel-heading">
        <div><p class="eyebrow">Live Lesson Mode</p><h2>${html(lesson.title)}</h2></div>
        ${pill(state.liveLocked ? "locked" : "teacher controlled", state.liveLocked ? "danger" : "green")}
      </div>
      <p>${html(lesson.speaking_outcome?.can_do_statement_ru || lesson.lesson_goal)}</p>
    </section>

    <section class="live-classroom">
      <aside class="live-participants content-panel">
        <h3>Participants</h3>
        <ul class="live-student-list">
          ${getDemoStudentMetrics().map((student) => `<li><span>${html(student.name)}</span>${pill(student.id === DEMO_USER_ID ? "online" : student.retention, statusTone(student.retention))}</li>`).join("")}
        </ul>
      </aside>

      <main class="live-stage content-panel">
        <div class="shared-board">
          <span class="soft-label">${html(humanExerciseType(selectedExercise.exercise_type))}</span>
          <h3>${html(selectedExercise.learning_content_en)}</h3>
          <p>${html(selectedExercise.instruction_ru)}</p>
          ${renderExerciseInput(selectedExercise, getExerciseState(progress, selectedExercise.exercise_id))}
          ${state.liveShowAnswers ? `<div class="answer-card"><strong>Model</strong><p>${html(formatCorrectAnswer(selectedExercise))}</p></div>` : ""}
        </div>
      </main>

      <aside class="live-controls content-panel">
        <h3>Teacher controls</h3>
        <div class="teacher-actions vertical">
          <button class="ghost-button ${state.liveMode === "group" ? "active" : ""}" type="button" data-live-mode="group">${icon("users")} Group</button>
          <button class="ghost-button ${state.liveMode === "pair" ? "active" : ""}" type="button" data-live-mode="pair">${icon("message")} Pairs</button>
          <button class="ghost-button ${state.liveMode === "individual" ? "active" : ""}" type="button" data-live-mode="individual">${icon("profile")} Individual</button>
          <button class="ghost-button" type="button" data-live-toggle="hint">${icon("hint")} Send hint</button>
          <button class="ghost-button" type="button" data-live-toggle="answers">${icon("check")} Toggle answers</button>
          <button class="ghost-button" type="button" data-live-toggle="lock">${icon("settings")} Lock inputs</button>
        </div>
        <div class="lesson-list compact">
          ${classwork.map((exercise) => `<button class="${exercise.exercise_id === selectedExercise.exercise_id ? "active" : ""}" type="button" data-live-exercise="${html(exercise.exercise_id)}"><strong>${html(humanExerciseType(exercise.exercise_type))}</strong></button>`).join("")}
        </div>
      </aside>
    </section>
  `;
}

function renderMethodologistDashboard() {
  const filtered = state.methodStatusFilter === "all" ? methodMaterials : methodMaterials.filter((item) => item.status === state.methodStatusFilter);
  const selected = methodMaterials.find((item) => item.id === state.selectedMethodExerciseId) || methodMaterials[0];
  const selectedExercise = getExercise(selected.id);
  const media = getAllMediaSpecifications();

  return `
    <section class="content-panel">
      <div class="panel-heading">
        <div><p class="eyebrow">Methodologist Dashboard - content ops</p><h2>${html(unit.title)}</h2></div>
        ${pill("mock workflow", "amber")}
      </div>
      <p>All screens read from the Unit 1 data layer. Editing remains mock-only for v0.2.</p>
      <p><strong>Archived</strong> means the material is hidden from students but remains available to methodologists in history.</p>
    </section>

    <section class="methodologist-grid">
      <div class="content-panel">
        <h3>Status workflow</h3>
        <div class="status-filter-list">
          <button class="${state.methodStatusFilter === "all" ? "active" : ""}" type="button" data-method-status="all">all</button>
          ${statusWorkflow.map((status) => `<button class="${state.methodStatusFilter === status ? "active" : ""}" type="button" data-method-status="${html(status)}">${html(status)}</button>`).join("")}
        </div>
      </div>

      <div class="content-panel structure-panel">
        <div class="panel-heading"><h3>Materials</h3>${pill(`${filtered.length} shown`, "blue")}</div>
        <div class="material-list">
          ${filtered.map((item) => `
            <button class="${item.id === selected.id ? "selected" : ""}" type="button" data-method-exercise="${html(item.id)}">
              <span><strong>${html(item.id)}</strong><small>${html(item.title)}</small></span>
              ${pill(item.status, statusTone(item.status))}
            </button>
          `).join("")}
        </div>
      </div>

      <div class="content-panel">
        <h3>Selected material</h3>
        <p><strong>${html(selected.title)}</strong></p>
        <p>Status: ${pill(selected.status, statusTone(selected.status))}</p>
        <p>Owner: ${html(selected.owner)} - updated ${html(selected.updated)}</p>
        ${selectedExercise ? `<p>${html(selectedExercise.instruction_ru)}</p><p class="english-line">${html(selectedExercise.learning_content_en)}</p>` : "<p>Archived sample retained in history only.</p>"}
      </div>

      <div class="content-panel">
        <h3>Data model coverage</h3>
        <ul class="compact-list">
          <li><span>Unit</span><strong>1</strong></li>
          <li><span>Lessons</span><strong>${lessons().length}</strong></li>
          <li><span>Exercises</span><strong>${allExercises().length}</strong></li>
          <li><span>Media specs</span><strong>${media.length}</strong></li>
          <li><span>Analytics tags</span><strong>${new Set(allExercises().flatMap((exercise) => exercise.analytics_tags)).size}</strong></li>
        </ul>
      </div>

      <div class="content-panel structure-panel">
        <h3>Unit tree</h3>
        <div class="unit-tree">
          ${lessons().map((lesson) => `<div class="tree-unit"><strong>${html(lesson.title)}</strong>${getLessonExercises(lesson.lesson_id).map((exercise) => `<span>${html(exercise.exercise_id)} - ${html(exercise.exercise_type)} - ${html(exercise.mode)}</span>`).join("")}</div>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function getExercisePayload(exercise) {
  const exerciseState = getExerciseState(progress, exercise.exercise_id);
  const value = exerciseState.latestAnswer;
  if (exercise.exercise_type === "multiple_choice" || exercise.exercise_type === "listen_choose") {
    return value || "";
  }
  if (exercise.exercise_type === "matching") {
    return value && typeof value === "object" ? value : {};
  }
  if (exercise.exercise_type === "word_order" || exercise.exercise_type === "drag_drop") {
    return Array.isArray(value) ? value : [];
  }
  return value || "";
}

function handleClick(event) {
  const route = event.target.closest("[data-route]");
  if (route) {
    navigate(route.dataset.route);
    return;
  }

  const lessonStep = event.target.closest("[data-lesson-step]");
  if (lessonStep) {
    state.lessonStepIndex = Number(lessonStep.dataset.lessonStep);
    const step = buildLessonSteps(currentLesson())[state.lessonStepIndex];
    if (step?.exercise) {
      state.selectedExerciseId = step.exercise.exercise_id;
      state.selectedMode = step.exercise.mode;
      logEvent("exercise_started", { lesson_id: step.exercise.lesson_id, exercise_id: step.exercise.exercise_id, mode: step.exercise.mode });
    }
    render();
    return;
  }

  const nextStep = event.target.closest("[data-next-step]");
  if (nextStep) {
    const steps = buildLessonSteps(currentLesson());
    state.lessonStepIndex = Math.min(steps.length - 1, state.lessonStepIndex + 1);
    const step = steps[state.lessonStepIndex];
    if (step?.exercise) {
      state.selectedExerciseId = step.exercise.exercise_id;
      state.selectedMode = step.exercise.mode;
    }
    render();
    return;
  }

  const prevStep = event.target.closest("[data-prev-step]");
  if (prevStep) {
    const steps = buildLessonSteps(currentLesson());
    state.lessonStepIndex = Math.max(0, state.lessonStepIndex - 1);
    const step = steps[state.lessonStepIndex];
    if (step?.exercise) {
      state.selectedExerciseId = step.exercise.exercise_id;
      state.selectedMode = step.exercise.mode;
    }
    render();
    return;
  }

  const lessonButton = event.target.closest("[data-open-lesson]");
  if (lessonButton) {
    const lessonId = lessonButton.dataset.openLesson;
    state.selectedLessonId = lessonId;
    state.lessonStepIndex = 0;
    state.selectedExerciseId = null;
    state.homeworkStarted = false;
    progress = setCurrentLesson(progress, lessonId);
    logEvent("lesson_opened", { lesson_id: lessonId, mode: "classwork" });
    navigate("lesson", { lessonId });
    return;
  }

  const homeworkButton = event.target.closest("[data-open-homework]");
  if (homeworkButton) {
    const lessonId = homeworkButton.dataset.openHomework;
    state.selectedLessonId = lessonId;
    state.selectedMode = "homework";
    state.homeworkStarted = false;
    navigate("homework", { lessonId });
    return;
  }

  const startHomework = event.target.closest("[data-start-homework]");
  if (startHomework) {
    const lessonId = startHomework.dataset.startHomework;
    state.selectedLessonId = lessonId;
    state.selectedMode = "homework";
    state.homeworkStarted = true;
    state.selectedExerciseId = getHomeworkExercises(lessonId)[0]?.exercise_id || null;
    logEvent("homework_started", { lesson_id: lessonId, exercise_id: state.selectedExerciseId, mode: "homework" });
    render();
    return;
  }

  const homeworkExercise = event.target.closest("[data-open-homework-exercise]");
  if (homeworkExercise) {
    const lessonId = homeworkExercise.dataset.openHomeworkExercise;
    state.selectedLessonId = lessonId;
    state.selectedMode = "homework";
    state.homeworkStarted = true;
    state.selectedExerciseId = homeworkExercise.dataset.exerciseId || getHomeworkExercises(lessonId)[0]?.exercise_id || null;
    logEvent("exercise_started", { lesson_id: lessonId, exercise_id: state.selectedExerciseId, mode: "homework" });
    render();
    return;
  }

  const homeworkNext = event.target.closest("[data-homework-next]");
  if (homeworkNext) {
    const homeworkExercises = getHomeworkExercises(state.selectedLessonId);
    const index = getCurrentExerciseIndex(homeworkExercises);
    state.selectedExerciseId = homeworkExercises[Math.min(homeworkExercises.length - 1, index + 1)]?.exercise_id || state.selectedExerciseId;
    render();
    return;
  }

  const homeworkPrev = event.target.closest("[data-homework-prev]");
  if (homeworkPrev) {
    const homeworkExercises = getHomeworkExercises(state.selectedLessonId);
    const index = getCurrentExerciseIndex(homeworkExercises);
    state.selectedExerciseId = homeworkExercises[Math.max(0, index - 1)]?.exercise_id || state.selectedExerciseId;
    render();
    return;
  }

  const exerciseButton = event.target.closest("[data-open-exercise]");
  if (exerciseButton) {
    const exercise = getExercise(exerciseButton.dataset.openExercise);
    state.selectedLessonId = exercise.lesson_id;
    state.selectedExerciseId = exercise.exercise_id;
    state.selectedMode = exerciseButton.dataset.mode || exercise.mode;
    state.homeworkStarted = state.selectedMode === "homework";
    state.lessonStepIndex = lessonStepIndexForExercise(exercise.lesson_id, exercise.exercise_id);
    logEvent("exercise_started", { lesson_id: exercise.lesson_id, exercise_id: exercise.exercise_id, mode: state.selectedMode });
    navigate("exercise", { lessonId: exercise.lesson_id, exerciseId: exercise.exercise_id, mode: state.selectedMode });
    return;
  }

  const matchChoice = event.target.closest("[data-match-choice]");
  if (matchChoice) {
    const exercise = getExercise(matchChoice.dataset.matchChoice);
    const current = getExerciseState(progress, exercise.exercise_id).latestAnswer || {};
    progress = saveDraftAnswer(progress, exercise, { ...current, [matchChoice.dataset.item]: matchChoice.dataset.value });
    logEvent("exercise_answered", { lesson_id: exercise.lesson_id, exercise_id: exercise.exercise_id, mode: exercise.mode, metadata: { answer_type: "matching" } });
    render();
    return;
  }

  const choice = event.target.closest("[data-choice]");
  if (choice) {
    const exercise = getExercise(choice.dataset.choice);
    progress = saveDraftAnswer(progress, exercise, choice.value);
    logEvent("exercise_answered", { lesson_id: exercise.lesson_id, exercise_id: exercise.exercise_id, mode: exercise.mode, metadata: { answer_type: "choice" } });
    render();
    return;
  }

  const addWord = event.target.closest("[data-add-word]");
  if (addWord) {
    const exercise = getExercise(addWord.dataset.addWord);
    const current = getExerciseState(progress, exercise.exercise_id).latestAnswer;
    progress = saveDraftAnswer(progress, exercise, [...(Array.isArray(current) ? current : []), addWord.dataset.word]);
    logEvent("exercise_answered", { lesson_id: exercise.lesson_id, exercise_id: exercise.exercise_id, mode: exercise.mode, metadata: { answer_type: "word_order" } });
    render();
    return;
  }

  const removeWord = event.target.closest("[data-remove-word]");
  if (removeWord) {
    const exercise = getExercise(removeWord.dataset.removeWord);
    const current = getExerciseState(progress, exercise.exercise_id).latestAnswer;
    const next = Array.isArray(current) ? current.filter((_, index) => index !== Number(removeWord.dataset.index)) : [];
    progress = saveDraftAnswer(progress, exercise, next);
    render();
    return;
  }

  const check = event.target.closest("[data-check-exercise]");
  if (check) {
    const exercise = getExercise(check.dataset.checkExercise);
    const result = checkExercise(exercise, getExercisePayload(exercise));
    progress = recordExerciseCheck(progress, exercise, result);
    logEvent("exercise_checked", { lesson_id: exercise.lesson_id, exercise_id: exercise.exercise_id, mode: exercise.mode, metadata: { correct: result.correct, partial: result.partial } });
    if (exercise.mode === "homework" && result.completed) {
      logEvent("homework_completed", { lesson_id: exercise.lesson_id, exercise_id: exercise.exercise_id, mode: "homework" });
    }
    render();
    return;
  }

  const answer = event.target.closest("[data-show-answer]");
  if (answer) {
    const exercise = getExercise(answer.dataset.showAnswer);
    progress = markCorrectAnswerShown(progress, exercise.exercise_id);
    logEvent("correct_answer_shown", { lesson_id: exercise.lesson_id, exercise_id: exercise.exercise_id, mode: exercise.mode });
    render();
    return;
  }

  const ai = event.target.closest("[data-open-ai]");
  if (ai) {
    const exercise = getExercise(ai.dataset.openAi);
    progress = markAiExplanationOpened(progress, exercise.exercise_id);
    logEvent("ai_explanation_requested", { lesson_id: exercise.lesson_id, exercise_id: exercise.exercise_id, mode: exercise.mode });
    render();
    return;
  }

  const clearAnswer = event.target.closest("[data-clear-answer]");
  if (clearAnswer) {
    const exercise = getExercise(clearAnswer.dataset.clearAnswer);
    progress = saveDraftAnswer(progress, exercise, exercise.exercise_type === "matching" ? {} : exercise.exercise_type === "word_order" || exercise.exercise_type === "drag_drop" ? [] : "");
    render();
    return;
  }

  const reset = event.target.closest("[data-reset-progress]");
  if (reset && window.confirm("Reset v0.2 demo progress? v0.1.1 data is not deleted.")) {
    progress = resetDemoProgress();
    render();
    return;
  }

  const student = event.target.closest("[data-student]");
  if (student) {
    state.selectedStudentId = student.dataset.student;
    render();
    return;
  }

  const liveOpen = event.target.closest("[data-open-live]");
  if (liveOpen) {
    state.liveLessonId = liveOpen.dataset.openLive;
    state.liveExerciseId = getClassworkExercises(state.liveLessonId)[0]?.exercise_id || null;
    logEvent("live_session_started", { lesson_id: state.liveLessonId, exercise_id: state.liveExerciseId, mode: "live" });
    navigate("live", { lessonId: state.liveLessonId });
    return;
  }

  const liveLesson = event.target.closest("[data-live-lesson]");
  if (liveLesson) {
    state.liveLessonId = liveLesson.dataset.liveLesson;
    state.liveExerciseId = getClassworkExercises(state.liveLessonId)[0]?.exercise_id || null;
    render();
    return;
  }

  const liveExercise = event.target.closest("[data-live-exercise]");
  if (liveExercise) {
    state.liveExerciseId = liveExercise.dataset.liveExercise;
    logEvent("live_answer_updated", { lesson_id: state.liveLessonId, exercise_id: state.liveExerciseId, mode: "live" });
    render();
    return;
  }

  const liveMode = event.target.closest("[data-live-mode]");
  if (liveMode) {
    state.liveMode = liveMode.dataset.liveMode;
    render();
    return;
  }

  const liveToggle = event.target.closest("[data-live-toggle]");
  if (liveToggle) {
    if (liveToggle.dataset.liveToggle === "answers") state.liveShowAnswers = !state.liveShowAnswers;
    if (liveToggle.dataset.liveToggle === "lock") state.liveLocked = !state.liveLocked;
    if (liveToggle.dataset.liveToggle === "hint") logEvent("teacher_hint_sent", { lesson_id: state.liveLessonId, exercise_id: state.liveExerciseId, mode: "live" });
    render();
    return;
  }

  const methodStatus = event.target.closest("[data-method-status]");
  if (methodStatus) {
    state.methodStatusFilter = methodStatus.dataset.methodStatus;
    render();
    return;
  }

  const methodExercise = event.target.closest("[data-method-exercise]");
  if (methodExercise) {
    state.selectedMethodExerciseId = methodExercise.dataset.methodExercise;
    render();
  }
}

function handleInput(event) {
  const input = event.target.closest("[data-answer]");
  if (!input) return;
  const exercise = getExercise(input.dataset.answer);
  progress = saveDraftAnswer(progress, exercise, input.value);
  logEvent("exercise_answered", { lesson_id: exercise.lesson_id, exercise_id: exercise.exercise_id, mode: exercise.mode, metadata: { answer_type: "text" } });
}

function handleChange(event) {
  const match = event.target.closest("[data-match]");
  if (!match) return;
  const exercise = getExercise(match.dataset.match);
  const current = getExerciseState(progress, exercise.exercise_id).latestAnswer || {};
  progress = saveDraftAnswer(progress, exercise, { ...current, [match.dataset.item]: match.value });
  logEvent("exercise_answered", { lesson_id: exercise.lesson_id, exercise_id: exercise.exercise_id, mode: exercise.mode, metadata: { answer_type: "matching" } });
}

window.addEventListener("hashchange", () => {
  parseHash();
  render();
});

root.addEventListener("click", handleClick);
root.addEventListener("input", handleInput);
root.addEventListener("change", handleChange);

parseHash();
render();
