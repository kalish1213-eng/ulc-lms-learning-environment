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

function html(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function icon(label) {
  return `<span class="icon-circle" aria-hidden="true">${html(label)}</span>`;
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

  if (["student", "unit", "teacher", "methodologist"].includes(view)) {
    state.view = view;
  }

  if (view === "lesson" && getLesson(lessonId)) {
    state.view = "lesson";
    state.selectedLessonId = lessonId;
  }

  if (view === "homework" && getLesson(lessonId)) {
    state.view = "homework";
    state.selectedLessonId = lessonId;
    state.selectedMode = "homework";
  }

  if (view === "exercise" && getLesson(lessonId) && getExercise(exerciseId)) {
    state.view = "lesson";
    state.selectedLessonId = lessonId;
    state.selectedExerciseId = exerciseId;
    state.selectedMode = mode || getExercise(exerciseId).mode || "classwork";
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
  const navItems = [
    ["student", ui.student, "Dashboard"],
    ["unit", ui.unitMap, "6 lessons"],
    ["lesson", ui.lesson, "Lesson page"],
    ["homework", ui.homework, "Homework"],
    ["teacher", ui.teacher, "Teacher"],
    ["live", "Live", "Session"],
    ["methodologist", ui.methodologist, "Data layer"],
  ];

  const stats = calculateUnitProgress(progress, allExercises());

  return `
    <div class="app-shell">
      <aside class="sidebar">
        <div class="brand">
          <div class="brand-mark">ULC</div>
          <div>
            <strong>ULC LMS</strong>
            <span>${html(VERSION)}</span>
          </div>
        </div>
        <nav class="nav-list" aria-label="Main navigation">
          ${navItems
            .map(([view, label, meta]) => {
              const active = state.view === view || (view === "lesson" && state.view === "exercise");
              return `<button class="${active ? "active" : ""}" type="button" data-route="${view}">${icon(label.slice(0, 1))}<span>${html(label)}<small>${html(meta)}</small></span></button>`;
            })
            .join("")}
        </nav>
        <div class="sidebar-card">
          <small>${html(ui.progress)} Unit 1</small>
          <strong>${stats.percent}%</strong>
          ${progressBar(stats.percent)}
          <span>${stats.completed}/${stats.total} exercises - ${html(STORAGE_KEY)}</span>
        </div>
      </aside>
      <main class="workspace">
        <div class="topbar">
          <div>
            <p class="eyebrow">ULC v0.2 release candidate - data layer connected</p>
            <h2>${html(unit.title)}</h2>
          </div>
          <div class="topbar-actions">
            ${pill("6 lessons", "green")}
            ${pill("24 exercises", "blue")}
            ${pill("12/12 classwork/homework", "amber")}
          </div>
        </div>
        ${content}
        <div class="footer-note">
          ${icon("i")} Static prototype: mock backend, localStorage progress, prepared AI explanations, and speaking-widget placeholder. No external requests.
        </div>
      </main>
    </div>
  `;
}

function renderCurrentView() {
  if (state.view === "unit") return renderUnitMap();
  if (state.view === "lesson") return renderLessonPage();
  if (state.view === "homework") return renderHomeworkMode();
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
  const homeworkStats = calculateHomeworkProgress(progress, getHomeworkTasks(), getHomeworkExercises);
  const classworkStats = calculateExerciseProgress(progress, allExercises().filter((exercise) => exercise.mode === "classwork"));

  return `
    <section class="hero-panel dashboard-hero">
      <div>
        <p class="eyebrow">${html(ui.student)} - ${html(course.group)}</p>
        <h1>${html(course.title)}</h1>
        <p>${html(unit.unit_goal_ru)}</p>
        <div class="hero-actions">
          <button class="primary-button" type="button" data-open-lesson="${html(lesson.lesson_id)}">${icon(">")} ${html(ui.continueLesson)}</button>
          <button class="ghost-button hero-ghost" type="button" data-open-homework="${html(homework.lesson_id)}">${icon("HW")} ${html(ui.continueHomework)}</button>
        </div>
      </div>
      <div class="hero-progress">
        <strong>${unitStats.percent}%</strong>
        <span>Unit 1 progress</span>
        ${progressBar(unitStats.percent)}
      </div>
    </section>

    <section class="metrics-grid">
      ${renderMetric(ui.currentLesson, lesson.title, lesson.speaking_outcome?.can_do_statement_ru || "")}
      ${renderMetric(ui.nextLesson, next.title, next.lesson_goal)}
      ${renderMetric("Classwork", `${classworkStats.completed}/${classworkStats.total}`, "interactive lesson exercises")}
      ${renderMetric("Homework", `${homeworkStats.percent}%`, "visible Homework Mode with auto-check")}
    </section>

    <section class="content-panel">
      <div class="panel-heading">
        <div><p class="eyebrow">Beginner Unit 1</p><h3>${html(ui.unitMap)}</h3></div>
        <button class="ghost-button" type="button" data-route="unit">${icon("U")} Open map</button>
      </div>
      <div class="lesson-rail six-lessons">
        ${lessons().map(renderLessonTile).join("")}
      </div>
    </section>

    <section class="two-column">
      <div class="content-panel homework-panel">
        <div class="panel-heading">
          <div><p class="eyebrow">${html(ui.homework)}</p><h3>${html(homework.title_ru)}</h3></div>
          ${pill(`${homeworkStats.percent}%`, homeworkStats.percent > 60 ? "green" : "amber")}
        </div>
        <p>${html(homework.purpose_ru)}</p>
        <ul class="compact-list">
          ${homework.exercise_ids.map((id) => {
            const exercise = getExercise(id);
            return `<li><span>${html(exercise.exercise_type)} - ${html(exercise.estimated_time)}</span>${pill(getExerciseStatus(progress, id), statusTone(getExerciseStatus(progress, id)))}</li>`;
          }).join("")}
        </ul>
        <button class="primary-button" type="button" data-open-homework="${html(homework.lesson_id)}">${icon(">")} ${html(ui.continueHomework)}</button>
      </div>

      <div class="content-panel">
        <div class="panel-heading">
          <div><p class="eyebrow">localStorage</p><h3>Demo progress</h3></div>
          ${pill(progress.legacy.detected ? "v0.1.1 detected" : "v0.2 store", progress.legacy.detected ? "amber" : "green")}
        </div>
        <p>Progress is stored locally and is not synced to a backend in this static prototype.</p>
        <p><strong>Last activity:</strong> ${html(getLastActivity(progress))}</p>
        <button class="ghost-button" type="button" data-reset-progress="true">${icon("R")} ${html(ui.reset)}</button>
      </div>
    </section>
  `;
}

function renderLessonTile(lesson) {
  const stats = calculateLessonProgress(progress, lesson.lesson_id, getLessonExercises);
  const active = lesson.lesson_id === state.selectedLessonId;
  const counts = getExerciseModeCounts(lesson.lesson_id);

  return `
    <button class="lesson-card ${active ? "active" : ""}" type="button" data-open-lesson="${html(lesson.lesson_id)}">
      <span>Lesson ${lesson.lesson_number}</span>
      <strong>${html(lesson.title)}</strong>
      <small>${html(lesson.lesson_goal)}</small>
      ${progressBar(stats.percent)}
      <em>${stats.percent}% - ${counts.classwork} classwork / ${counts.homework} homework</em>
    </button>
  `;
}

function renderUnitMap() {
  const stats = getUnitStats(UNIT_ID);
  const lesson4 = getLesson("beg_u1_l4");

  return `
    <section class="content-panel">
      <div class="panel-heading">
        <div><p class="eyebrow">${html(unit.unit_id)} - data model</p><h3>${html(unit.title)}</h3></div>
        ${pill(`${stats.lessons} lessons / ${stats.exercises} exercises`, "green")}
      </div>
      <p>${html(unit.unit_goal_ru)}</p>
      <div class="lesson-rail six-lessons">
        ${lessons().map(renderLessonTile).join("")}
      </div>
    </section>

    <section class="content-panel">
      <div class="panel-heading">
        <div><p class="eyebrow">Lesson 4 guardrail</p><h3>${html(lesson4.title)}</h3></div>
        ${pill("scope limited", "green")}
      </div>
      <div class="language-focus">
        <div><strong>Included</strong>${lesson4.production_scope.included.map((item) => `<span>${html(item)}</span>`).join("")}</div>
        <div><strong>Excluded</strong>${lesson4.production_scope.excluded.map((item) => `<span>${html(item)}</span>`).join("")}</div>
      </div>
    </section>
  `;
}

function renderLessonPage() {
  const lesson = currentLesson();
  const classwork = getClassworkExercises(lesson.lesson_id);
  const homework = getHomeworkExercises(lesson.lesson_id);
  const stats = calculateLessonProgress(progress, lesson.lesson_id, getLessonExercises);

  if (!state.selectedExerciseId || !getExercise(state.selectedExerciseId) || getExercise(state.selectedExerciseId).lesson_id !== lesson.lesson_id) {
    state.selectedExerciseId = classwork[0]?.exercise_id || homework[0]?.exercise_id || null;
    state.selectedMode = getExercise(state.selectedExerciseId)?.mode || "classwork";
  }

  return `
    <section class="content-panel lesson-overview">
      <div class="panel-heading">
        <div><p class="eyebrow">Lesson Page - Lesson ${lesson.lesson_number}</p><h2>${html(lesson.title)}</h2></div>
        ${pill(`${stats.percent}% complete`, stats.percent > 60 ? "green" : "amber")}
      </div>
      <p>${html(lesson.lesson_goal)}</p>
      <p><strong>Speaking outcome:</strong> ${html(lesson.speaking_outcome?.can_do_statement_ru || lesson.speaking_outcome)}</p>
      <div class="language-focus">
        <div><strong>Vocabulary</strong>${lesson.target_vocabulary.map((item) => `<span>${html(item)}</span>`).join("")}</div>
        <div><strong>Grammar</strong>${lesson.target_grammar.map((item) => `<span>${html(item)}</span>`).join("")}</div>
        <div><strong>Pronunciation</strong>${lesson.pronunciation_focus.map((item) => `<span>${html(item)}</span>`).join("")}</div>
      </div>
    </section>

    <section class="lesson-workspace">
      <div class="content-panel structure-panel">
        <div class="panel-heading">
          <div><p class="eyebrow">Native lesson sections</p><h3>Class flow</h3></div>
          <button class="ghost-button" type="button" data-open-live="${html(lesson.lesson_id)}">${icon("L")} Live mode</button>
        </div>
        <div class="lesson-sections">
          ${(lesson.sections || []).map((section) => `
            <div>
              <span>${html(section.section_type)}</span>
              <strong>${html(section.title_ru)}</strong>
              <p>${html(section.student_instruction_ru)}</p>
              <small>${html(section.estimated_time)} - ${html(section.mode)}</small>
            </div>
          `).join("")}
        </div>

        <div class="exercise-card-grid">
          ${classwork.map((exercise) => renderExerciseCard(exercise, "classwork")).join("")}
          ${homework.map((exercise) => renderExerciseCard(exercise, "homework")).join("")}
        </div>

        ${renderMediaSpecs(lesson.lesson_id)}
        ${renderTeacherNotes(lesson.lesson_id)}
      </div>

      <div class="content-panel exercise-panel">
        ${renderExercisePlayer(lesson.lesson_id, state.selectedMode)}
      </div>
    </section>
  `;
}

function renderExerciseCard(exercise, mode) {
  const status = getExerciseStatus(progress, exercise.exercise_id);
  const selected = exercise.exercise_id === state.selectedExerciseId;
  return `
    <button class="exercise-card ${selected ? "selected" : ""}" type="button" data-open-exercise="${html(exercise.exercise_id)}" data-mode="${html(mode)}">
      <span>${html(mode)} - ${html(exercise.exercise_type)}</span>
      <strong>${html(exercise.instruction_ru)}</strong>
      <small>${html(exercise.estimated_time)} - attempts ${exercise.attempts_allowed}</small>
      ${pill(status, statusTone(status))}
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

function renderExercisePlayer(lessonId = state.selectedLessonId, mode = state.selectedMode) {
  const pool = mode === "homework" ? getHomeworkExercises(lessonId) : getClassworkExercises(lessonId);
  const fallback = pool[0] || getLessonExercises(lessonId)[0];
  const exercise = getExercise(state.selectedExerciseId) || fallback;
  if (!exercise) return `<p>No exercise selected.</p>`;

  state.selectedExerciseId = exercise.exercise_id;
  state.selectedMode = mode || exercise.mode;

  const exerciseState = getExerciseState(progress, exercise.exercise_id);
  const attemptsLeft = Math.max(0, exercise.attempts_allowed - (exerciseState.attempts || 0));

  return `
    <div class="exercise-player">
      <div class="panel-heading">
        <div>
          <p class="eyebrow">Exercise Player - ${html(mode)}</p>
          <h3>${html(exercise.exercise_type)}</h3>
        </div>
        ${pill(getExerciseStatus(progress, exercise.exercise_id), statusTone(getExerciseStatus(progress, exercise.exercise_id)))}
      </div>
      <div class="exercise-meta">
        <span>${html(exercise.estimated_time)}</span>
        <span>attempts left ${attemptsLeft}</span>
        <span>autocheck ${exercise.autocheck ? "on" : "off"}</span>
        <span>show correct answer ${exercise.show_correct_answer ? "on" : "off"}</span>
      </div>
      ${renderExerciseMediaNotice(exercise)}
      <p class="instruction-ru">${html(exercise.instruction_ru)}</p>
      <p class="english-line">${html(exercise.learning_content_en)}</p>
      ${renderExerciseInput(exercise, exerciseState)}
      <div class="exercise-actions">
        <button class="primary-button" type="button" data-check-exercise="${html(exercise.exercise_id)}" ${attemptsLeft <= 0 ? "disabled" : ""}>${icon("?")} ${html(ui.check)}</button>
        <button class="ghost-button" type="button" data-show-answer="${html(exercise.exercise_id)}">${icon("A")} ${html(ui.showAnswer)}</button>
        <button class="ghost-button" type="button" data-open-ai="${html(exercise.exercise_id)}">${icon("AI")} AI explanation</button>
      </div>
      ${renderFeedback(exercise, exerciseState)}
      <div class="hint-list">
        ${exercise.hints_ru.map((hint) => `<span>${html(hint.text_ru || hint)}</span>`).join("")}
      </div>
    </div>
  `;
}

function renderExerciseMediaNotice(exercise) {
  const refs = exercise.items.map((item) => item.media_ref).filter(Boolean);
  if (!refs.length) return "";
  const media = getAllMediaSpecifications().find((item) => item.media_id === refs[0]);
  if (!media) return "";
  return `
    <div class="mock-audio-controls">
      ${icon("AU")}
      <span>Audio spec only: ${html(media.duration)} - ${html(media.speed)} - ${html(media.accent)}</span>
    </div>
  `;
}

function renderExerciseInput(exercise, exerciseState) {
  const draft = exerciseState.latestAnswer ?? "";
  const item = exercise.items[0] || {};

  if (exercise.exercise_type === "multiple_choice" || exercise.exercise_type === "listen_choose") {
    return `
      <div class="choice-grid">
        ${(item.options || []).map((option) => `
          <label class="choice-card">
            <input type="radio" name="${html(exercise.exercise_id)}" value="${html(option)}" data-choice="${html(exercise.exercise_id)}" ${draft === option ? "checked" : ""} />
            <span>${html(option)}</span>
          </label>
        `).join("")}
      </div>
    `;
  }

  if (exercise.exercise_type === "matching") {
    const options = exercise.correct_answers.map((answer) => answer.value);
    const current = typeof draft === "object" && !Array.isArray(draft) ? draft : {};
    return `
      <div class="matching-list">
        ${exercise.items.map((matchItem) => `
          <label>
            <span>${html(matchItem.prompt_en)}</span>
            <select data-match="${html(exercise.exercise_id)}" data-item="${html(matchItem.item_id)}">
              <option value="">${html(ui.choose)}</option>
              ${options.map((option) => `<option value="${html(option)}" ${current[matchItem.item_id] === option ? "selected" : ""}>${html(option)}</option>`).join("")}
            </select>
          </label>
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
        <div class="word-bank">
          ${available.map((word) => `<button class="word-chip" type="button" data-add-word="${html(exercise.exercise_id)}" data-word="${html(word)}">${html(word)}</button>`).join("")}
        </div>
        <div class="word-answer">
          ${placed.length ? placed.map((word, index) => `<button class="word-chip placed" type="button" data-remove-word="${html(exercise.exercise_id)}" data-index="${index}">${html(word)}</button>`).join("") : `<span>${html(ui.answer)}</span>`}
        </div>
      </div>
    `;
  }

  return `
    <label class="answer-field">
      <span>${html(ui.answer)}</span>
      <textarea data-answer="${html(exercise.exercise_id)}" rows="4" placeholder="${html(exercise.items[0]?.prompt_en || "")}">${html(typeof draft === "string" ? draft : "")}</textarea>
    </label>
  `;
}

function renderFeedback(exercise, exerciseState) {
  const result = exerciseState.latestResult || exerciseState.bestResult;
  const blocks = [];

  if (result) {
    blocks.push(`
      <div class="feedback-card ${result.correct ? "correct" : result.partial ? "partial" : "incorrect"}">
        <strong>${html(result.correct ? "Correct" : result.status === "submitted" ? "Submitted" : result.partial ? "Partly correct" : "Needs retry")}</strong>
        <p>${html(result.preliminary_feedback_ru || result.item_results?.[0]?.explanation_ru || "Review the model answer and try again.")}</p>
        ${result.score !== null && result.score !== undefined ? `<small>score ${Math.round(result.score * 100)}%</small>` : ""}
      </div>
    `);
  } else if (exerciseState.latestAnswer) {
    blocks.push(`<p class="mode-note">${html(ui.saved)}. Click Auto-check when ready.</p>`);
  }

  if (exerciseState.correctAnswerShown) {
    blocks.push(`<div class="answer-card"><strong>Correct answer</strong><p>${html(formatCorrectAnswer(exercise))}</p></div>`);
  }

  if (exerciseState.aiExplanationOpened || (result && !result.correct)) {
    blocks.push(`
      <div class="ai-card">
        <strong>AI explanation mock</strong>
        <p>${html(exercise.ai_explanation.text_ru)}</p>
        <small>Prepared methodology response. No real AI call in v0.2.</small>
      </div>
    `);
  }

  return blocks.join("");
}

function renderHomeworkMode() {
  const selectedLesson = currentLesson();
  const homeworkTasks = getHomeworkTasks();
  const selectedTask = getLessonHomework(selectedLesson.lesson_id) || homeworkTasks[0];
  const selectedExercises = getHomeworkExercises(selectedTask.lesson_id);
  const selectedStats = calculateExerciseProgress(progress, selectedExercises);

  return `
    <section class="homework-grid">
      <div class="content-panel">
        <div class="panel-heading">
          <div><p class="eyebrow">Homework Mode - Unit 1</p><h2>${html(ui.homework)}</h2></div>
          ${pill(`${selectedStats.percent}%`, selectedStats.percent > 60 ? "green" : "amber")}
        </div>
        <div class="homework-list">
          ${homeworkTasks.map((task) => {
            const lesson = getLesson(task.lesson_id);
            const stats = calculateExerciseProgress(progress, getHomeworkExercises(task.lesson_id));
            const active = task.lesson_id === selectedTask.lesson_id;
            return `
              <button class="${active ? "selected" : ""}" type="button" data-open-homework="${html(task.lesson_id)}">
                <strong>${html(task.title_ru)}</strong>
                <span>Unit 1 / Lesson ${lesson.lesson_number} - deadline ${html(deadlineForLesson(lesson))}</span>
                ${progressBar(stats.percent)}
                ${pill(`${stats.percent}%`, stats.percent > 60 ? "green" : "amber")}
              </button>
            `;
          }).join("")}
        </div>
      </div>

      <div class="content-panel">
        <div class="panel-heading">
          <div><p class="eyebrow">Current homework</p><h3>${html(selectedTask.title_ru)}</h3></div>
          ${pill(`deadline ${deadlineForLesson(selectedLesson)}`, "amber")}
        </div>
        <p>${html(selectedTask.purpose_ru)}</p>
        <ul class="compact-list">
          ${selectedExercises.map((exercise) => `<li><span>${html(exercise.exercise_type)} - ${html(exercise.estimated_time)}</span>${pill(getExerciseStatus(progress, exercise.exercise_id), statusTone(getExerciseStatus(progress, exercise.exercise_id)))}</li>`).join("")}
        </ul>
        <button class="primary-button" type="button" data-open-homework-exercise="${html(selectedLesson.lesson_id)}">${icon(">")} ${html(ui.continueHomework)}</button>
        <button class="ghost-button" type="button" data-route="teacher">${icon("T")} Teacher Dashboard link</button>
      </div>
    </section>

    <section class="lesson-workspace">
      <div class="content-panel structure-panel">
        <h3>Homework proof points</h3>
        <div class="homework-proof">
          <span>auto-check: ${selectedExercises.every((exercise) => exercise.autocheck) ? "on" : "mixed"}</span>
          <span>show correct answer: ${selectedExercises.every((exercise) => exercise.show_correct_answer) ? "on" : "mixed"}</span>
          <span>AI explanation after mistake: prepared per exercise</span>
        </div>
      </div>
      <div class="content-panel exercise-panel">
        ${renderExercisePlayer(selectedLesson.lesson_id, "homework")}
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
        <button class="primary-button" type="button" data-open-live="${html(progress.currentLessonId)}">${icon("L")} Start live lesson</button>
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
        <div><p class="eyebrow">Live Lesson Mode mockup</p><h2>${html(lesson.title)}</h2></div>
        ${pill(state.liveLocked ? "locked" : "teacher controlled", state.liveLocked ? "danger" : "green")}
      </div>
      <p>${html(lesson.speaking_outcome?.can_do_statement_ru || lesson.lesson_goal)}</p>
      <div class="teacher-actions">
        <button class="ghost-button ${state.liveMode === "group" ? "active" : ""}" type="button" data-live-mode="group">${icon("G")} Group</button>
        <button class="ghost-button ${state.liveMode === "pair" ? "active" : ""}" type="button" data-live-mode="pair">${icon("P")} Pairs</button>
        <button class="ghost-button ${state.liveMode === "individual" ? "active" : ""}" type="button" data-live-mode="individual">${icon("I")} Individual</button>
        <button class="ghost-button" type="button" data-live-toggle="hint">${icon("H")} Send hint</button>
        <button class="ghost-button" type="button" data-live-toggle="answers">${icon("A")} Toggle answers</button>
        <button class="ghost-button" type="button" data-live-toggle="lock">${icon("L")} Lock inputs</button>
      </div>
    </section>

    <section class="live-grid">
      <div class="content-panel">
        <h3>Lesson queue</h3>
        <div class="lesson-list">
          ${lessons().map((item) => `<button class="${item.lesson_id === lesson.lesson_id ? "active" : ""}" type="button" data-live-lesson="${html(item.lesson_id)}"><strong>${html(item.title)}</strong><span>Lesson ${item.lesson_number}</span></button>`).join("")}
        </div>
      </div>

      <div class="content-panel">
        <h3>Exercise stage</h3>
        <div class="lesson-list">
          ${classwork.map((exercise) => `<button class="${exercise.exercise_id === selectedExercise.exercise_id ? "active" : ""}" type="button" data-live-exercise="${html(exercise.exercise_id)}"><strong>${html(exercise.exercise_type)}</strong><span>${html(exercise.instruction_ru)}</span></button>`).join("")}
        </div>
      </div>

      <div class="content-panel shared-space">
        <div class="shared-board">
          <p class="eyebrow">Shared learning space</p>
          <h3>${html(selectedExercise.learning_content_en)}</h3>
          <p>${html(selectedExercise.instruction_ru)}</p>
          ${state.liveShowAnswers ? `<div class="answer-card"><strong>Model</strong><p>${html(formatCorrectAnswer(selectedExercise))}</p></div>` : ""}
          <div class="live-answer-demo"><span>Simulated live answer - no real WebSocket</span><strong>${html(selectedExercise.items[0]?.prompt_en || selectedExercise.learning_content_en)}</strong><small>${html(state.liveMode)} mode</small></div>
        </div>
      </div>

      <div class="content-panel">
        <h3>Participants</h3>
        <ul class="live-student-list">
          ${getDemoStudentMetrics().map((student) => `<li><span>${html(student.name)}</span>${pill(student.id === DEMO_USER_ID ? "online local" : student.retention, statusTone(student.retention))}</li>`).join("")}
        </ul>
      </div>
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

  const lessonButton = event.target.closest("[data-open-lesson]");
  if (lessonButton) {
    const lessonId = lessonButton.dataset.openLesson;
    state.selectedLessonId = lessonId;
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
    state.selectedExerciseId = getHomeworkExercises(lessonId)[0]?.exercise_id || null;
    logEvent("homework_started", { lesson_id: lessonId, exercise_id: state.selectedExerciseId, mode: "homework" });
    navigate("homework", { lessonId });
    return;
  }

  const homeworkExercise = event.target.closest("[data-open-homework-exercise]");
  if (homeworkExercise) {
    const lessonId = homeworkExercise.dataset.openHomeworkExercise;
    state.selectedLessonId = lessonId;
    state.selectedMode = "homework";
    state.selectedExerciseId = getHomeworkExercises(lessonId)[0]?.exercise_id || null;
    logEvent("exercise_started", { lesson_id: lessonId, exercise_id: state.selectedExerciseId, mode: "homework" });
    render();
    return;
  }

  const exerciseButton = event.target.closest("[data-open-exercise]");
  if (exerciseButton) {
    const exercise = getExercise(exerciseButton.dataset.openExercise);
    state.selectedLessonId = exercise.lesson_id;
    state.selectedExerciseId = exercise.exercise_id;
    state.selectedMode = exerciseButton.dataset.mode || exercise.mode;
    logEvent("exercise_started", { lesson_id: exercise.lesson_id, exercise_id: exercise.exercise_id, mode: state.selectedMode });
    navigate("exercise", { lessonId: exercise.lesson_id, exerciseId: exercise.exercise_id, mode: state.selectedMode });
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
if (!state.selectedExerciseId) {
  state.selectedExerciseId = getClassworkExercises(state.selectedLessonId)[0]?.exercise_id || null;
}
render();
