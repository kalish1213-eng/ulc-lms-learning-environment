const VERSION = "v0.1.1";
const STORAGE_KEY = "ulc_mvp_v0_1_1_progress";

const COURSE = {
  title: "Beginner English for Adults",
  school: "ULC.by",
  group: "Beginner A1 Evening",
  level: "Beginner",
  currentUnit: "Unit 1",
  currentLessonId: "beg_u1_l2",
  certificateTarget: 70,
};

const lessons = [
  {
    id: "beg_u1_l1",
    unit: "Unit 1",
    lessonNo: "1.1",
    title: "Hello, I'm Anna",
    status: "published",
    duration: "45 min",
    focus: "be: I am / you are",
    summary: "Первый контакт: имя, приветствие, короткая вежливая реакция.",
    speakingOutcome: "Студент может поздороваться, назвать имя и ответить на Nice to meet you.",
    targetLanguage: ["Hello, I'm Anna.", "Nice to meet you.", "I'm from Minsk."],
    teacherNote: "Начать с парной практики: name cards, slow model, repeat with confidence.",
  },
  {
    id: "beg_u1_l2",
    unit: "Unit 1",
    lessonNo: "1.2",
    title: "Where are you from?",
    status: "published",
    duration: "50 min",
    focus: "be: am / are + from",
    summary: "Страна, город, короткий диалог знакомства.",
    speakingOutcome: "Студент может спросить и ответить, откуда он или другой человек.",
    targetLanguage: ["Where are you from?", "I'm from Belarus.", "Are you from Poland?"],
    teacherNote: "Следить, чтобы students did not translate every word; use chunks.",
  },
  {
    id: "beg_u1_l3",
    unit: "Unit 1",
    lessonNo: "1.3",
    title: "My job, my city",
    status: "draft",
    duration: "50 min",
    focus: "a / an + jobs",
    summary: "Профессия, город и простая мини-презентация.",
    speakingOutcome: "Студент может сказать профессию и задать короткий вопрос партнеру.",
    targetLanguage: ["I'm a manager.", "Are you a teacher?", "I work in Minsk."],
    teacherNote: "Draft lesson: needs methodist and language review before publishing.",
  },
  {
    id: "beg_u1_l4",
    unit: "Unit 1",
    lessonNo: "1.4",
    title: "Cafe English",
    status: "review",
    duration: "45 min",
    focus: "Can I have ...?",
    summary: "Практичная мини-сцена в кафе без перегруза грамматикой.",
    speakingOutcome: "Студент может заказать напиток и вежливо уточнить цену.",
    targetLanguage: ["Can I have tea, please?", "How much is it?", "Here you are."],
    teacherNote: "Review lesson: check pacing and keep the role-play short.",
  },
];

const exerciseTypes = [
  "fill-gap",
  "multiple-choice",
  "matching",
  "drag-drop",
  "word-order",
  "listen-choose",
  "listen-type",
  "short-writing",
];

const exercises = [
  {
    id: "ex_fill_from",
    lessonId: "beg_u1_l2",
    type: "fill-gap",
    title: "1A. Complete the sentence",
    skill: "Grammar",
    instruction: "Впишите пропущенное слово.",
    prompt: "I am ___ Minsk.",
    correct: "from",
    ai: "После am используем from, когда говорим, откуда человек: I am from Minsk.",
  },
  {
    id: "ex_choice_meet",
    lessonId: "beg_u1_l2",
    type: "multiple-choice",
    title: "1B. Choose the reply",
    skill: "Functional language",
    instruction: "Выберите лучший ответ.",
    prompt: "A: Nice to meet you. B: ...",
    options: ["I'm coffee.", "Nice to meet you, too.", "From Minsk?"],
    correct: "Nice to meet you, too.",
    ai: "Фраза too показывает взаимность: Nice to meet you, too = мне тоже приятно познакомиться.",
  },
  {
    id: "ex_match_words",
    lessonId: "beg_u1_l2",
    type: "matching",
    title: "1C. Match words",
    skill: "Vocabulary",
    instruction: "Соедините английские слова с русскими значениями.",
    prompt: "Match the words.",
    pairs: [
      ["city", "город"],
      ["country", "страна"],
      ["name", "имя"],
    ],
    choices: ["имя", "город", "страна"],
    correct: { city: "город", country: "страна", name: "имя" },
    ai: "Country - это страна, city - город. В вопросе Where are you from? можно назвать и страну, и город.",
  },
  {
    id: "ex_drag_chunk",
    lessonId: "beg_u1_l2",
    type: "drag-drop",
    title: "1D. Build the chunk",
    skill: "Sentence chunk",
    instruction: "Нажимайте слова в правильном порядке.",
    prompt: "Соберите фразу: Я из Беларуси.",
    words: ["Belarus", "from", "I'm"],
    correct: "I'm from Belarus",
    ai: "В английском порядок фиксированный: I'm + from + place.",
  },
  {
    id: "ex_word_order_question",
    lessonId: "beg_u1_l2",
    type: "word-order",
    title: "1E. Make a question",
    skill: "Grammar",
    instruction: "Соберите вопрос.",
    prompt: "Откуда вы?",
    words: ["you", "Where", "from", "are"],
    correct: "Where are you from",
    ai: "В вопросе с are порядок такой: Where + are + you + from?",
  },
  {
    id: "ex_listen_choose",
    lessonId: "beg_u1_l2",
    type: "listen-choose",
    title: "1F. Listen and choose",
    skill: "Listening",
    instruction: "Аудио пока mock: прочитайте реплику и выберите смысл.",
    prompt: "Audio mock: 'I'm from Vilnius.'",
    options: ["The person says a city.", "The person says a job.", "The person asks a question."],
    correct: "The person says a city.",
    ai: "Vilnius - город. Фраза I'm from Vilnius сообщает, откуда человек.",
  },
  {
    id: "ex_listen_type",
    lessonId: "beg_u1_l2",
    type: "listen-type",
    title: "1G. Listen and type",
    skill: "Listening",
    instruction: "Аудио пока mock: напечатайте услышанную фразу.",
    prompt: "Audio mock: 'Hello'",
    correct: "Hello",
    ai: "Hello пишется с двойной l. Регистр не важен для проверки.",
  },
  {
    id: "ex_short_intro",
    lessonId: "beg_u1_l2",
    type: "short-writing",
    title: "1H. Write a mini-introduction",
    skill: "Writing to speaking",
    instruction: "Напишите 2 коротких предложения о себе.",
    prompt: "Use: I'm ... / I'm from ...",
    mustInclude: ["I'm", "from"],
    correct: "I'm Anna. I'm from Minsk.",
    ai: "Для Beginner достаточно двух коротких фраз: имя и место. Потом это можно сказать вслух.",
  },
];

const homeworkAssignment = {
  id: "hw_u1_l2",
  title: "Homework: Where are you from?",
  unit: "Unit 1",
  lessonId: "beg_u1_l2",
  deadline: "2026-06-21 20:00",
  teacherVisible: true,
  exerciseIds: exercises.map((exercise) => exercise.id),
};

const students = [
  { id: "stu_001", name: "Анна", progress: 46, score: 82, homework: 75, risk: "low", lastSeen: "сегодня", mistake: "from / are order" },
  { id: "stu_002", name: "Мария", progress: 28, score: 64, homework: 38, risk: "medium", lastSeen: "2 дня назад", mistake: "question order" },
  { id: "stu_003", name: "Ирина", progress: 18, score: 51, homework: 20, risk: "high", lastSeen: "6 дней назад", mistake: "missed homework" },
  { id: "stu_004", name: "Екатерина", progress: 52, score: 88, homework: 90, risk: "low", lastSeen: "сегодня", mistake: "country/city stress" },
];

const workflowStatuses = [
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

const contentItems = [
  { title: "Lesson 1.2 exercise pack", type: "Exercise set", status: "published", owner: "Methodist", note: "Active student homework" },
  { title: "Lesson 1.3 job cards", type: "Vocabulary", status: "draft", owner: "AI + methodist", note: "Needs examples for adult students" },
  { title: "Cafe role-play", type: "Live lesson slide", status: "UX review", owner: "Teacher team", note: "Check mobile readability" },
  { title: "Country/city listening set", type: "Listening", status: "language review", owner: "Language editor", note: "Check pronunciation script" },
  { title: "Old PDF import: greetings page", type: "Legacy material", status: "archived", owner: "Methodist", note: "Hidden from students; kept in history" },
];

const analyticsMetrics = [
  ["NPS", "62", "+8 vs pilot"],
  ["Retention", "84%", "4-week cohort"],
  ["Depth of usage", "3.8 screens/session", "Student + homework"],
  ["Homework completion", "71%", "current group"],
  ["Active students", "18", "last 7 days"],
  ["Group progress", "43%", "Unit 1 demo"],
  ["Student progress", "46%", "Anna mock profile"],
  ["Live mode usage", "6 sessions", "teacher-led lessons"],
  ["AI explanation usage", "24 requests", "after mistakes"],
];

const highErrorExercises = [
  ["1E. Make a question", "48% error rate", "Where + are + you + from"],
  ["1C. Match words", "31% error rate", "city / country"],
  ["1H. Mini-introduction", "27% needs retry", "missing from"],
];

const riskSignals = [
  ["Ирина", "missed homework + 6 days inactive", "high"],
  ["Мария", "low homework completion", "medium"],
  ["Анна", "question order errors", "low"],
];

const integrationCards = [
  {
    name: "1C",
    purpose: "schedule, groups, students, teachers, lessons",
    endpoint: "GET /mock/1c/schedule",
    status: "mock only",
    payload: { groupId: "beg-a1-evening", lessonId: "beg_u1_l2", teacherId: "t_102" },
  },
  {
    name: "Revizor / BI",
    purpose: "analytics events, dashboards, risk signals",
    endpoint: "POST /mock/revizor/events",
    status: "mock only",
    payload: { event: "exercise_checked", correct: false, riskSignal: "question_order" },
  },
  {
    name: "Bitrix24",
    purpose: "tasks for service/team",
    endpoint: "POST /mock/bitrix/tasks",
    status: "mock only",
    payload: { title: "Call student after missed homework", responsible: "service_team" },
  },
  {
    name: "Telegram",
    purpose: "student/teacher notifications",
    endpoint: "POST /mock/telegram/messages",
    status: "mock only",
    payload: { chatType: "student", template: "homework_deadline_reminder" },
  },
  {
    name: "Speaking widget",
    purpose: "future embedded speaking practice",
    endpoint: "POST /mock/speaking-widget/session",
    status: "mock only",
    payload: { lessonId: "beg_u1_l2", mode: "external_embed" },
  },
];

const defaultProgress = {
  answers: {},
  results: {},
  correctShown: {},
  aiRequested: {},
  metadataDraft: {},
  events: [],
};

const state = {
  view: "student",
  selectedLessonId: COURSE.currentLessonId,
  exerciseIndex: 0,
  statusFilter: "all",
  selectedStudentId: "stu_001",
};

const root = document.getElementById("root");
let progress = loadProgress();

function loadProgress() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? { ...defaultProgress, ...JSON.parse(stored) } : { ...defaultProgress };
  } catch {
    return { ...defaultProgress };
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function trackEvent(name, payload = {}) {
  progress.events = [
    {
      event: name,
      timestamp: new Date().toISOString(),
      userId: "student_demo_anna",
      ...payload,
    },
    ...(progress.events || []),
  ].slice(0, 30);
  saveProgress();
}

function icon(label) {
  return `<span class="ui-icon" aria-hidden="true">${label}</span>`;
}

function pill(text, tone = "blue") {
  return `<span class="tag ${tone}">${text}</span>`;
}

function getLesson(id = state.selectedLessonId) {
  return lessons.find((lesson) => lesson.id === id) || lessons[1];
}

function getLessonExercises(lessonId = state.selectedLessonId) {
  return exercises.filter((exercise) => exercise.lessonId === lessonId);
}

function getCurrentExercises() {
  const lessonExercises = getLessonExercises();
  return lessonExercises.length ? lessonExercises : exercises;
}

function getCurrentExercise() {
  const currentExercises = getCurrentExercises();
  return currentExercises[Math.min(state.exerciseIndex, currentExercises.length - 1)];
}

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/[?.!,]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function hasAnswer(exercise) {
  const answer = progress.answers[exercise.id];
  if (Array.isArray(answer)) return answer.length > 0;
  if (answer && typeof answer === "object") return Object.keys(answer).length > 0;
  return String(answer || "").trim().length > 0;
}

function isCorrect(exercise, answer = progress.answers[exercise.id]) {
  if (exercise.type === "matching") {
    return Object.entries(exercise.correct).every(([key, value]) => normalize(answer?.[key]) === normalize(value));
  }

  if (exercise.type === "short-writing") {
    const normalized = normalize(answer);
    return exercise.mustInclude.every((chunk) => normalized.includes(normalize(chunk)));
  }

  if (exercise.type === "drag-drop" || exercise.type === "word-order") {
    return normalize(Array.isArray(answer) ? answer.join(" ") : answer) === normalize(exercise.correct);
  }

  return normalize(answer) === normalize(exercise.correct);
}

function correctAnswerText(exercise) {
  if (exercise.type === "matching") {
    return Object.entries(exercise.correct).map(([key, value]) => `${key} = ${value}`).join("; ");
  }
  return exercise.correct;
}

function exerciseStatus(exercise) {
  const result = progress.results[exercise.id];
  if (result?.correct) return "done";
  if (result && !result.correct) return "needs retry";
  if (hasAnswer(exercise)) return "in progress";
  return "not started";
}

function homeworkPercent() {
  const homeworkExercises = homeworkAssignment.exerciseIds.map((id) => exercises.find((exercise) => exercise.id === id));
  const done = homeworkExercises.filter((exercise) => exercise && exerciseStatus(exercise) === "done").length;
  return Math.round((done / homeworkExercises.length) * 100);
}

function certificatePercent() {
  return Math.min(100, Math.round((homeworkPercent() * 0.55) + 18));
}

function checkHomeworkCompletion() {
  if (homeworkPercent() === 100) {
    trackEvent("homework_completed", { homeworkId: homeworkAssignment.id, percent: 100 });
  }
}

function render() {
  root.innerHTML = renderShell(renderCurrentView());
}

function renderShell(content) {
  const navItems = [
    ["student", "Студент", "Dashboard"],
    ["units", "Unit Map", "Beginner"],
    ["lesson", "Lesson", "Native page"],
    ["homework", "Homework", "localStorage"],
    ["teacher", "Teacher", "Dashboard"],
    ["live", "Live", "Lesson Mode"],
    ["methodologist", "Methodist", "Workflow"],
    ["analytics", "Analytics", "Revizor mock"],
    ["integrations", "API", "Readiness"],
  ];

  return `
    <div class="app-shell">
      <aside class="sidebar">
        <div class="brand-block">
          <div class="brand-mark">ULC</div>
          <div>
            <p class="eyebrow">Digital LMS ${VERSION}</p>
            <h1>${COURSE.title}</h1>
          </div>
        </div>
        <nav class="nav-list" aria-label="Primary navigation">
          ${navItems.map(([view, label, hint]) => `
            <button class="nav-item ${state.view === view ? "active" : ""}" type="button" data-view="${view}">
              ${icon(label.slice(0, 2))}
              <span><strong>${label}</strong><small>${hint}</small></span>
            </button>
          `).join("")}
        </nav>
        <div class="sidebar-status">
          <strong>${homeworkPercent()}% homework</strong>
          <span>Mock progress is stored in localStorage and visible in Teacher Dashboard.</span>
        </div>
      </aside>
      <main class="workspace">
        <div class="topbar">
          <div>
            <p class="eyebrow">ULC static clickable prototype</p>
            <h2>${COURSE.group}</h2>
          </div>
          <div class="topbar-actions">
            ${pill("not a PDF viewer", "green")}
            ${pill("original demo content", "blue")}
            ${pill("mock APIs only", "amber")}
          </div>
        </div>
        ${content}
        <div class="footer-note">
          ${icon("i")} Russian UI for Beginner students; English content for learning tasks. No real external requests are sent.
        </div>
      </main>
    </div>
  `;
}

function renderCurrentView() {
  if (state.view === "units") return renderUnitMap();
  if (state.view === "lesson") return renderLessonPage();
  if (state.view === "homework") return renderHomeworkMode();
  if (state.view === "teacher") return renderTeacherDashboard();
  if (state.view === "live") return renderLiveLessonMode();
  if (state.view === "methodologist") return renderMethodologistDashboard();
  if (state.view === "analytics") return renderAnalyticsView();
  if (state.view === "integrations") return renderIntegrationsView();
  return renderStudentDashboard();
}

function renderStudentDashboard() {
  const lesson = getLesson(COURSE.currentLessonId);
  return `
    <section class="screen-grid">
      <article class="hero-panel ulc-hero">
        <div>
          <p class="eyebrow">личный кабинет студента</p>
          <h2>Сегодня учимся говорить: “Where are you from?”</h2>
          <p class="hero-copy">Короткие задания ведут к разговору: сначала chunks, потом auto-check, затем практика вслух через внешний speaking widget.</p>
        </div>
        <div class="hero-actions">
          <button class="primary-button" type="button" data-view="lesson">${icon("▶")} Продолжить урок</button>
          <button class="ghost-button hero-ghost" type="button" data-view="homework">${icon("HW")} Открыть домашку</button>
        </div>
      </article>
      <aside class="metric-strip">
        ${renderMetric("Unit progress", `${homeworkPercent()}%`, "Homework-based mock")}
        ${renderMetric("Certificate", `${certificatePercent()}%`, "target 70%")}
        ${renderMetric("Weak area", "Question order", "Where are you from?")}
        ${renderMetric("Next live", "Thu 19:00", "from 1C mock")}
      </aside>
      <article class="content-panel progress-panel">
        <div class="section-heading">
          <div><p class="eyebrow">current lesson</p><h3>${lesson.lessonNo}. ${lesson.title}</h3></div>
          ${pill(lesson.status, lesson.status === "published" ? "green" : "amber")}
        </div>
        <p>${lesson.summary}</p>
        <div class="lesson-line">
          <div><strong>Speaking outcome</strong><span>${lesson.speakingOutcome}</span></div>
          <button class="ghost-button" type="button" data-view="lesson">${icon("→")} Lesson Page</button>
        </div>
      </article>
      <article class="content-panel homework-panel">
        <div class="section-heading">
          <div><p class="eyebrow">homework mode</p><h3>${homeworkAssignment.title}</h3></div>
          ${pill(`${homeworkPercent()}%`, homeworkPercent() >= 70 ? "green" : "amber")}
        </div>
        <p>Deadline: ${homeworkAssignment.deadline}. Статусы упражнений сохраняются в localStorage и видны в Teacher Dashboard mock.</p>
        <span class="progress-track"><span style="width:${homeworkPercent()}%"></span></span>
        <div class="hero-actions panel-actions">
          <button class="primary-button" type="button" data-view="homework">${icon("HW")} Продолжить домашку</button>
          <button class="ghost-button" type="button" data-view="teacher">${icon("T")} Teacher link</button>
        </div>
      </article>
      <article class="content-panel">
        <p class="eyebrow">vocabulary review</p>
        <h3>Chunks for today</h3>
        <div class="word-grid">
          ${lesson.targetLanguage.map((phrase) => `<span>${phrase}</span>`).join("")}
        </div>
      </article>
      <article class="content-panel certificate-panel">
        <div class="section-heading">
          <div><p class="eyebrow">risk and support</p><h3>Мягкая помощь после ошибок</h3></div>
          ${pill("AI explanations", "blue")}
        </div>
        <ul class="clean-list">
          <li><span class="dot medium"></span><span>Если ответ неверный, студент видит короткое объяснение на русском.</span></li>
          <li><span class="dot ready"></span><span>Correct answer доступен по кнопке, чтобы ученик мог сравнить без PDF.</span></li>
          <li><span class="dot low"></span><span>Teacher Dashboard получает mock signal по домашке и ошибкам.</span></li>
        </ul>
      </article>
    </section>
  `;
}

function renderMetric(label, value, note) {
  return `
    <div class="metric-item">
      <span>${label}</span>
      <strong>${value}</strong>
      <small>${note}</small>
    </div>
  `;
}

function renderUnitMap() {
  return `
    <section class="unit-map">
      <div class="screen-title">
        <div><p class="eyebrow">Beginner Unit Map</p><h2>Unit 1 demo scope: 4 native lessons</h2></div>
        ${pill("no six-lesson expansion yet", "amber")}
      </div>
      <article class="unit-band">
        <div class="unit-summary">
          <div class="unit-index">U1</div>
          <div>
            <h3>First contacts</h3>
            <p>v0.1.1 keeps a compact clickable scope: enough to audit learning flow, homework, live mode and dashboards without starting the full six-lesson Unit 1 build.</p>
          </div>
          <div class="mini-progress">
            <strong>${homeworkPercent()}%</strong>
            <span class="progress-track"><span style="width:${homeworkPercent()}%"></span></span>
          </div>
        </div>
        <div class="lesson-rail">
          ${lessons.map((lesson) => `
            <button class="lesson-node ${state.selectedLessonId === lesson.id ? "active" : ""}" type="button" data-lesson="${lesson.id}" data-open-lesson="true">
              ${pill(lesson.status, lesson.status === "published" ? "green" : lesson.status === "draft" ? "draft" : "amber")}
              <small>${lesson.lessonNo} · ${lesson.duration}</small>
              <h3>${lesson.title}</h3>
              <span>${lesson.focus}</span>
              <strong>Open native lesson</strong>
            </button>
          `).join("")}
        </div>
      </article>
      <article class="content-panel full-width">
        <div class="section-heading">
          <div><p class="eyebrow">methodology note</p><h3>Speaking-first, original ULC sample material</h3></div>
          ${pill("English File-like pacing, no copied content", "green")}
        </div>
        <p>Each lesson moves from short English chunks to controlled practice and a practical speaking outcome. No PDF viewer, no copied workbook page, no external stock hero image.</p>
      </article>
    </section>
  `;
}

function renderLessonPage() {
  const lesson = getLesson();
  return `
    <section class="lesson-workspace">
      <article class="lesson-page">
        <div class="lesson-header">
          <div>
            <p class="eyebrow">Lesson Page · native interactive page</p>
            <h2>${lesson.lessonNo}. ${lesson.title}</h2>
            <p>${lesson.summary}</p>
          </div>
          <div class="speaking-outcome">
            <span>Speaking outcome</span>
            <strong>${lesson.speakingOutcome}</strong>
          </div>
        </div>
        <div class="language-focus">
          <div>
            <p class="eyebrow">Target language</p>
            <div class="phrase-row">${lesson.targetLanguage.map((phrase) => `<span>${phrase}</span>`).join("")}</div>
          </div>
          <div>
            <p class="eyebrow">Teacher book note</p>
            <p>${lesson.teacherNote}</p>
          </div>
        </div>
        <div class="lesson-sections">
          <div class="lesson-section">${icon("1")}<div><h3>Warm-up</h3><p>Русская инструкция, английские фразы. Студент отвечает коротко и уверенно.</p></div></div>
          <div class="lesson-section">${icon("2")}<div><h3>Practice</h3><p>Auto-check, correct answer, AI explanation after mistake.</p></div></div>
          <div class="lesson-section">${icon("3")}<div><h3>Speak</h3><p class="english-line">Ask your partner: Where are you from?</p></div></div>
          <div class="lesson-section">${icon("4")}<div><h3>Speaking widget</h3><p>Внешний модуль будет встроен позже; здесь только integration point.</p></div></div>
        </div>
      </article>
      ${renderExercisePlayer()}
    </section>
  `;
}

function renderExercisePlayer() {
  const currentExercises = getCurrentExercises();
  const exercise = getCurrentExercise();
  const completed = currentExercises.filter((item) => exerciseStatus(item) === "done").length;
  const percent = Math.round((completed / currentExercises.length) * 100);

  return `
    <article class="exercise-player">
      <div class="player-header">
        <div>
          <p class="eyebrow">Exercise Player</p>
          <h2>${exercise.title}</h2>
        </div>
        <div class="player-progress">
          <strong>${percent}%</strong>
          <span class="progress-track"><span style="width:${percent}%"></span></span>
        </div>
      </div>
      <div class="type-strip">
        ${exerciseTypes.map((type) => `<span>${type}</span>`).join("")}
      </div>
      <div class="exercise-tabs">
        ${currentExercises.map((item, index) => `
          <button class="exercise-tab ${index === state.exerciseIndex ? "active" : ""}" type="button" data-ex-tab="${index}">
            ${icon(String(index + 1))}
            <span>${item.type}</span>
            <small>${exerciseStatus(item)}</small>
          </button>
        `).join("")}
      </div>
      <div class="exercise-surface">
        <div class="exercise-copy">
          <p class="eyebrow">${exercise.skill} · ${exercise.type}</p>
          <h3>${exercise.instruction}</h3>
          <strong class="prompt">${exercise.prompt}</strong>
        </div>
        ${renderExerciseInput(exercise)}
        <div class="exercise-actions">
          <button class="primary-button" type="button" data-check="${exercise.id}">${icon("✓")} Auto-check</button>
          <button class="ghost-button" type="button" data-show-answer="${exercise.id}">${icon("A")} Show correct answer</button>
          <button class="ghost-button" type="button" data-ai="${exercise.id}" ${progress.results[exercise.id] && !progress.results[exercise.id].correct ? "" : "disabled"}>${icon("AI")} AI explanation</button>
        </div>
        ${renderFeedback(exercise)}
      </div>
    </article>
  `;
}

function renderExerciseInput(exercise) {
  const answer = progress.answers[exercise.id];

  if (exercise.type === "multiple-choice" || exercise.type === "listen-choose") {
    return `
      <div class="choice-grid">
        ${exercise.options.map((option) => `
          <button class="choice-option ${answer === option ? "selected" : ""}" type="button" data-choice="${exercise.id}" data-value="${option}">
            ${option}
          </button>
        `).join("")}
      </div>
    `;
  }

  if (exercise.type === "matching") {
    const selected = answer || {};
    return `
      <div class="matching-grid">
        ${exercise.pairs.map(([left]) => `
          <label>
            <span>${left}</span>
            <select data-match-key="${left}" data-exercise="${exercise.id}">
              <option value="">Выберите значение</option>
              ${exercise.choices.map((choice) => `<option value="${choice}" ${selected[left] === choice ? "selected" : ""}>${choice}</option>`).join("")}
            </select>
          </label>
        `).join("")}
      </div>
    `;
  }

  if (exercise.type === "drag-drop" || exercise.type === "word-order") {
    const placed = Array.isArray(answer) ? answer : [];
    const available = exercise.words.filter((word) => !placed.includes(word));
    return `
      <div class="word-builder">
        <div class="drop-zone">
          ${placed.length ? placed.map((word, index) => `<button class="word-chip placed" type="button" data-remove-word="${exercise.id}" data-index="${index}">${word}</button>`).join("") : "<span>Нажмите слова ниже</span>"}
        </div>
        <div class="word-bank">
          ${available.map((word) => `<button class="word-chip" type="button" data-word="${exercise.id}" data-value="${word}">${word}</button>`).join("")}
        </div>
      </div>
    `;
  }

  if (exercise.type === "short-writing") {
    return `<textarea class="writing-area" data-answer="${exercise.id}" placeholder="I'm ...">${answer || ""}</textarea>`;
  }

  return `<input class="answer-input" data-answer="${exercise.id}" value="${answer || ""}" placeholder="Введите ответ" />`;
}

function renderFeedback(exercise) {
  const result = progress.results[exercise.id];
  const showCorrect = progress.correctShown[exercise.id];
  const showAi = progress.aiRequested[exercise.id] || (result && !result.correct);

  if (!result && !showCorrect) {
    return `<div class="mode-note">Введите ответ, затем нажмите Auto-check. Correct answer и AI explanation доступны как отдельные действия.</div>`;
  }

  return `
    <div class="feedback ${result?.correct ? "correct" : "needs-work"}">
      ${result ? `<div class="feedback-title">${icon(result.correct ? "OK" : "!")}<strong>${result.correct ? "Верно" : "Нужно повторить"}</strong></div>` : ""}
      ${showCorrect ? `<div class="answer-line"><strong>Correct answer</strong><span>${correctAnswerText(exercise)}</span></div>` : ""}
      ${showAi ? `<div class="ai-note">${icon("AI")}<p><strong>AI explanation:</strong> ${exercise.ai}<small>Короткое объяснение на русском, привязанное к текущему заданию.</small></p></div>` : ""}
    </div>
  `;
}

function renderHomeworkMode() {
  const lesson = getLesson(homeworkAssignment.lessonId);
  const homeworkExercises = homeworkAssignment.exerciseIds.map((id) => exercises.find((exercise) => exercise.id === id));
  const percent = homeworkPercent();

  return `
    <section class="wide-stack">
      <div class="screen-title">
        <div><p class="eyebrow">Homework Mode</p><h2>${homeworkAssignment.title}</h2></div>
        ${pill(`${percent}% complete`, percent >= 70 ? "green" : "amber")}
      </div>
      <div class="homework-grid">
        <article class="content-panel">
          <div class="section-heading">
            <div><p class="eyebrow">current homework</p><h3>${homeworkAssignment.unit} · ${lesson.lessonNo}. ${lesson.title}</h3></div>
            ${pill("deadline " + homeworkAssignment.deadline, "blue")}
          </div>
          <p>Отдельный режим домашки: статусы упражнений, auto-check, correct answer и AI explanation after mistake сохраняются в localStorage.</p>
          <span class="progress-track"><span style="width:${percent}%"></span></span>
          <div class="hero-actions panel-actions">
            <button class="primary-button" type="button" data-continue-homework="true">${icon("▶")} Продолжить домашку</button>
            <button class="ghost-button" type="button" data-view="teacher">${icon("T")} Связь с Teacher Dashboard</button>
          </div>
          <div class="homework-proof">
            <span>${icon("✓")} Auto-check: включен</span>
            <span>${icon("A")} Show correct answer: доступен</span>
            <span>${icon("AI")} AI explanation after mistake: доступен</span>
          </div>
        </article>
        <article class="content-panel">
          <div class="section-heading">
            <div><p class="eyebrow">teacher visibility</p><h3>Как это видит преподаватель</h3></div>
            ${pill("mock localStorage sync", "amber")}
          </div>
          <p>В статическом прототипе Teacher Dashboard читает тот же локальный прогресс: ${percent}% по домашке, статусы и последние ошибки.</p>
          <ul class="clean-list">
            <li><span class="dot low"></span><span>done: ${homeworkExercises.filter((exercise) => exerciseStatus(exercise) === "done").length}</span></li>
            <li><span class="dot medium"></span><span>in progress: ${homeworkExercises.filter((exercise) => exerciseStatus(exercise) === "in progress").length}</span></li>
            <li><span class="dot danger"></span><span>needs retry: ${homeworkExercises.filter((exercise) => exerciseStatus(exercise) === "needs retry").length}</span></li>
          </ul>
        </article>
      </div>
      <article class="content-panel full-width">
        <div class="section-heading">
          <div><p class="eyebrow">exercise list</p><h3>Статусы домашнего задания</h3></div>
          <button class="ghost-button" type="button" data-reset-progress="true">${icon("↺")} Reset local progress</button>
        </div>
        <div class="homework-list">
          ${homeworkExercises.map((exercise, index) => `
            <button type="button" data-homework-ex="${index}" class="${state.exerciseIndex === index ? "selected" : ""}">
              <strong>${exercise.title}</strong>
              <span>${exercise.type} · status: ${exerciseStatus(exercise)}</span>
            </button>
          `).join("")}
        </div>
      </article>
      ${renderExercisePlayer()}
    </section>
  `;
}

function renderTeacherDashboard() {
  const percent = homeworkPercent();
  const selected = students.find((student) => student.id === state.selectedStudentId) || students[0];
  const localNeedsRetry = exercises.filter((exercise) => exerciseStatus(exercise) === "needs retry").map((exercise) => exercise.title);

  return `
    <section class="teacher-grid">
      <article class="content-panel full-width">
        <div class="section-heading">
          <div><p class="eyebrow">Teacher Dashboard</p><h2>${COURSE.group}</h2></div>
          <div class="teacher-actions">
            ${pill("desktop-first", "blue")}
            ${pill("homework linked", "green")}
            ${pill("mock data", "amber")}
          </div>
        </div>
        <p>Преподаватель видит группу, домашку, типичные ошибки, risk signals и локальный прогресс текущего студента из Homework Mode.</p>
      </article>
      <article class="content-panel teacher-table-panel">
        <div class="section-heading">
          <div><p class="eyebrow">group roster</p><h3>Students and homework</h3></div>
          ${pill(`${percent}% local student homework`, percent >= 70 ? "green" : "amber")}
        </div>
        <div class="student-table">
          <div class="table-head"><span>Student</span><span>Progress</span><span>Homework</span><span>Risk</span><span>Typical mistake</span></div>
          ${students.map((student) => `
            <button class="student-row ${state.selectedStudentId === student.id ? "selected" : ""}" type="button" data-student="${student.id}">
              <strong>${student.name}</strong>
              <span class="table-progress"><span class="progress-track"><span style="width:${student.progress}%"></span></span><small>${student.progress}%</small></span>
              <span>${student.id === "stu_001" ? percent : student.homework}%</span>
              <span class="risk ${student.risk}">${student.risk}<small>${student.lastSeen}</small></span>
              <span>${student.id === "stu_001" && localNeedsRetry.length ? localNeedsRetry.join(", ") : student.mistake}</span>
            </button>
          `).join("")}
        </div>
      </article>
      <article class="content-panel">
        <p class="eyebrow">selected student</p>
        <h3>${selected.name}</h3>
        <div class="detail-grid">
          <span>Group</span><strong>${COURSE.group}</strong>
          <span>Homework</span><strong>${selected.id === "stu_001" ? percent : selected.homework}%</strong>
          <span>Score</span><strong>${selected.score}%</strong>
          <span>Risk</span><strong>${selected.risk}</strong>
          <span>Next action</span><strong>${selected.risk === "high" ? "Telegram reminder + service task" : "Review weak area in live lesson"}</strong>
        </div>
      </article>
      <article class="content-panel">
        <div class="section-heading">
          <div><p class="eyebrow">homework mode connection</p><h3>Local progress bridge</h3></div>
          ${pill("static prototype", "amber")}
        </div>
        <ul class="clean-list">
          ${exercises.slice(0, 5).map((exercise) => `<li><span class="dot ${exerciseStatus(exercise) === "done" ? "low" : exerciseStatus(exercise) === "needs retry" ? "danger" : "medium"}"></span><span>${exercise.title}</span><small>${exerciseStatus(exercise)}</small></li>`).join("")}
        </ul>
      </article>
      <article class="content-panel full-width">
        <div class="section-heading">
          <div><p class="eyebrow">teacher actions</p><h3>Support queue</h3></div>
          ${pill("Bitrix24 task mock", "blue")}
        </div>
        <div class="analytics-grid">
          <div class="analytics-card"><span>Missed homework</span><strong>1</strong><small>Create service task if repeated.</small></div>
          <div class="analytics-card"><span>High error exercise</span><strong>1E</strong><small>Use live board for question order.</small></div>
          <div class="analytics-card"><span>AI explanations requested</span><strong>${Object.keys(progress.aiRequested).length}</strong><small>Shows where students need simpler explanations.</small></div>
          <div class="analytics-card"><span>Correct answers shown</span><strong>${Object.keys(progress.correctShown).length}</strong><small>Good signal for self-review.</small></div>
        </div>
      </article>
    </section>
  `;
}

function renderLiveLessonMode() {
  const lesson = getLesson(COURSE.currentLessonId);
  return `
    <section class="live-grid">
      <article class="shared-space">
        <div class="section-heading">
          <div><p class="eyebrow">Live Lesson Mode mockup</p><h2>${lesson.title}</h2></div>
          ${pill("shared learning space", "green")}
        </div>
        <div class="shared-toolbar">
          <button class="primary-button live-on" type="button">${icon("●")} Session live</button>
          <button class="ghost-button" type="button" data-send-hint="true">${icon("→")} Send teacher hint</button>
          <button class="ghost-button" type="button" data-view="integrations">${icon("API")} Speaking widget contract</button>
        </div>
        <div class="lesson-canvas">
          <span class="teacher-cursor">Teacher cursor</span>
          <span class="student-cursor">Anna cursor</span>
          <p class="eyebrow">Board prompt</p>
          <h3>Where are you from?</h3>
          <p>Students update answers in a shared space. Teacher sees live answer state and can send a hint.</p>
          <div class="live-answer-demo">
            <span>Student input</span>
            <strong>I'm from Minsk.</strong>
            <small>Updated 4 seconds ago · live_answer_updated</small>
          </div>
        </div>
      </article>
      <article class="content-panel">
        <p class="eyebrow">student answer visibility</p>
        <h3>Live answers</h3>
        <ul class="live-student-list">
          <li><span>Анна</span>${pill("ready", "green")}</li>
          <li><span>Мария</span>${pill("typing", "amber")}</li>
          <li><span>Ирина</span>${pill("needs hint", "danger")}</li>
        </ul>
      </article>
      <article class="content-panel">
        <p class="eyebrow">lesson pacing</p>
        <h3>Teacher flow</h3>
        <div class="pacing-steps">
          <span class="done">1. Warm-up: hello chunks</span>
          <span class="done">2. Board: Where are you from?</span>
          <span>3. Pair speaking</span>
          <span>4. External speaking widget</span>
        </div>
      </article>
      <article class="content-panel full-width">
        <div class="api-contract">
          <code>POST /mock/live-sessions</code>
          <code>POST /mock/speaking-widget/session</code>
          <span>Widget is external: MVP shows an embed point and event contract only.</span>
        </div>
      </article>
    </section>
  `;
}

function renderMethodologistDashboard() {
  const filtered = state.statusFilter === "all" ? contentItems : contentItems.filter((item) => item.status === state.statusFilter);
  const currentExercise = getCurrentExercise();

  return `
    <section class="methodologist-grid">
      <article class="content-panel full-width">
        <div class="section-heading">
          <div><p class="eyebrow">Methodologist Dashboard</p><h2>Content workflow and metadata</h2></div>
          ${pill("archived visible", "green")}
        </div>
        <p>Workflow is explicit from draft to published and archived. Archived material is hidden from students, but remains available to methodologists in history.</p>
      </article>
      <article class="content-panel structure-panel">
        <div class="section-heading">
          <div><p class="eyebrow">status workflow</p><h3>Full material lifecycle</h3></div>
          ${pill("10 statuses", "blue")}
        </div>
        <div class="workflow-grid">
          ${workflowStatuses.map((status, index) => `<span class="workflow-step ${status === "archived" ? "archived-step" : ""}"><strong>${index + 1}</strong>${status}</span>`).join("")}
        </div>
        <div class="status-filter">
          ${["all", ...workflowStatuses].map((status) => `<button class="${state.statusFilter === status ? "selected" : ""}" type="button" data-status-filter="${status}">${status}</button>`).join("")}
        </div>
        <div class="content-status-grid">
          ${filtered.map((item) => `
            <div class="status-row">
              <div>
                ${pill(item.status, statusTone(item.status))}
                <h4>${item.title}</h4>
                <p>${item.type} · ${item.owner} · ${item.note}</p>
              </div>
              <button class="ghost-button" type="button">${icon("M")} History</button>
            </div>
          `).join("") || `<div class="status-row"><p>No materials with this status in mock data.</p></div>`}
        </div>
      </article>
      <article class="content-panel">
        <p class="eyebrow">archived rule</p>
        <h3>Что значит archived</h3>
        <p>Archived = материал скрыт от студентов и преподавательского live flow, но доступен методисту в истории для аудита, миграции и сравнения версий.</p>
        <div class="tag-cloud">
          <span>student hidden</span>
          <span>methodist history</span>
          <span>no PDF reuse</span>
        </div>
      </article>
      <article class="content-panel">
        <p class="eyebrow">editable metadata mock</p>
        <h3>${currentExercise.title}</h3>
        <div class="metadata-form">
          <label>Type <input data-meta-field="type" value="${progress.metadataDraft.type || currentExercise.type}" /></label>
          <label>Skill <input data-meta-field="skill" value="${progress.metadataDraft.skill || currentExercise.skill}" /></label>
          <label>Status
            <select data-meta-field="status">
              ${workflowStatuses.map((status) => `<option value="${status}" ${(progress.metadataDraft.status || "methodist review") === status ? "selected" : ""}>${status}</option>`).join("")}
            </select>
          </label>
          <button class="primary-button" type="button" data-meta-save="true">${icon("✓")} Save metadata mock</button>
        </div>
        <p class="mode-note">Mock edit writes to localStorage only; no backend request is sent.</p>
      </article>
      <article class="content-panel full-width">
        <div class="section-heading">
          <div><p class="eyebrow">course structure</p><h3>Course / Unit / Lesson / Exercise</h3></div>
          ${pill("native pages", "green")}
        </div>
        <div class="content-tree">
          <div class="tree-unit"><strong>${COURSE.title}</strong><span>${COURSE.currentUnit}</span>${lessons.map((lesson) => `<span>${lesson.lessonNo} ${lesson.title} · ${lesson.status}</span>`).join("")}</div>
          <div class="tree-unit"><strong>Lesson 1.2 exercises</strong>${exercises.map((exercise) => `<span>${exercise.title} · ${exercise.type} · ${exercise.skill}</span>`).join("")}</div>
        </div>
      </article>
    </section>
  `;
}

function statusTone(status) {
  if (["approved", "published"].includes(status)) return "green";
  if (["draft", "AI-generated"].includes(status)) return "draft";
  if (status === "archived") return "archived";
  if (status === "needs revision") return "danger";
  return "amber";
}

function renderAnalyticsView() {
  return `
    <section class="wide-stack">
      <div class="screen-title">
        <div><p class="eyebrow">Analytics / Revizor mockup</p><h2>Learning analytics without real BI calls</h2></div>
        ${pill("mock data", "amber")}
      </div>
      <article class="content-panel">
        <div class="section-heading">
          <div><p class="eyebrow">dashboard metrics</p><h3>NPS, retention, depth and progress</h3></div>
          <button class="ghost-button" type="button" data-view="integrations">${icon("API")} Event contracts</button>
        </div>
        <div class="analytics-grid analytics-grid-wide">
          ${analyticsMetrics.map(([label, value, note]) => `
            <div class="analytics-card">
              <span>${label}</span>
              <strong>${value}</strong>
              <small>${note}</small>
            </div>
          `).join("")}
        </div>
      </article>
      <div class="homework-grid">
        <article class="content-panel">
          <div class="section-heading">
            <div><p class="eyebrow">exercises with high error rate</p><h3>Teacher-methodist loop</h3></div>
            ${pill("Revizor / BI", "blue")}
          </div>
          <ul class="clean-list">
            ${highErrorExercises.map(([name, rate, note]) => `<li><span class="dot danger"></span><span>${name}</span><small>${rate} · ${note}</small></li>`).join("")}
          </ul>
        </article>
        <article class="content-panel">
          <div class="section-heading">
            <div><p class="eyebrow">students with risk signals</p><h3>Risk queue</h3></div>
            ${pill("teacher + service", "amber")}
          </div>
          <ul class="clean-list">
            ${riskSignals.map(([name, signal, risk]) => `<li><span class="dot ${risk}"></span><span>${name}</span><small>${signal}</small></li>`).join("")}
          </ul>
        </article>
      </div>
      <article class="content-panel">
        <div class="section-heading">
          <div><p class="eyebrow">recent local events</p><h3>Events stored for demo</h3></div>
          ${pill(`${(progress.events || []).length} events`, "blue")}
        </div>
        <div class="event-log">
          ${(progress.events || []).slice(0, 8).map((event) => `<code>${event.timestamp} · ${event.event}</code>`).join("") || "<p>No local events yet. Try an exercise check or homework action.</p>"}
        </div>
      </article>
    </section>
  `;
}

function renderIntegrationsView() {
  return `
    <section class="wide-stack">
      <div class="screen-title">
        <div><p class="eyebrow">Integration Readiness</p><h2>API-ready contracts, no real requests</h2></div>
        ${pill("mock only", "amber")}
      </div>
      <article class="content-panel">
        <p>Cards show integration boundaries for future backend work. Current status for every connector is mock only; the static prototype never calls external systems.</p>
        <div class="integration-grid readiness-grid">
          ${integrationCards.map((card) => `
            <div class="integration-card">
              <span>${card.name}</span>
              <strong>${card.purpose}</strong>
              <code>${card.endpoint}</code>
              ${pill(card.status, "amber")}
              <small>Example payload: ${JSON.stringify(card.payload)}</small>
            </div>
          `).join("")}
        </div>
      </article>
      <article class="content-panel">
        <div class="section-heading">
          <div><p class="eyebrow">coverage note</p><h3>Acceptance integrations mapped</h3></div>
          ${pill("static boundary", "blue")}
        </div>
        <ul class="integration-list">
          <li><span class="dot ready"></span><strong>Scheduling</strong><span>1C schedule mock</span></li>
          <li><span class="dot ready"></span><strong>Feedback / NPS</strong><span>Revizor / BI metrics and events</span></li>
          <li><span class="dot mock"></span><strong>Payments</strong><span>future 1C/Bitrix24 account status field, documented as mock only</span></li>
          <li><span class="dot ready"></span><strong>Speaking</strong><span>external widget embed point, not rebuilt</span></li>
        </ul>
      </article>
    </section>
  `;
}

function handleClick(event) {
  const viewButton = event.target.closest("[data-view]");
  if (viewButton) {
    state.view = viewButton.dataset.view;
    if (state.view === "homework") trackEvent("homework_started", { homeworkId: homeworkAssignment.id });
    if (state.view === "live") trackEvent("live_session_started", { lessonId: COURSE.currentLessonId });
    render();
    return;
  }

  const lessonButton = event.target.closest("[data-lesson]");
  if (lessonButton) {
    state.selectedLessonId = lessonButton.dataset.lesson;
    state.exerciseIndex = 0;
    if (lessonButton.dataset.openLesson) state.view = "lesson";
    trackEvent("lesson_opened", { lessonId: state.selectedLessonId });
    render();
    return;
  }

  const tabButton = event.target.closest("[data-ex-tab]");
  if (tabButton) {
    state.exerciseIndex = Number(tabButton.dataset.exTab);
    trackEvent("exercise_started", { exerciseId: getCurrentExercise().id });
    render();
    return;
  }

  const homeworkExercise = event.target.closest("[data-homework-ex]");
  if (homeworkExercise) {
    state.exerciseIndex = Number(homeworkExercise.dataset.homeworkEx);
    state.selectedLessonId = homeworkAssignment.lessonId;
    trackEvent("exercise_started", { exerciseId: getCurrentExercise().id, homeworkId: homeworkAssignment.id });
    render();
    return;
  }

  const continueHomework = event.target.closest("[data-continue-homework]");
  if (continueHomework) {
    state.view = "lesson";
    state.selectedLessonId = homeworkAssignment.lessonId;
    state.exerciseIndex = Math.max(0, exercises.findIndex((exercise) => exerciseStatus(exercise) !== "done"));
    if (state.exerciseIndex >= exercises.length) state.exerciseIndex = 0;
    trackEvent("homework_started", { homeworkId: homeworkAssignment.id, action: "continue" });
    render();
    return;
  }

  const choice = event.target.closest("[data-choice]");
  if (choice) {
    const exerciseId = choice.dataset.choice;
    progress.answers[exerciseId] = choice.dataset.value;
    trackEvent("exercise_answered", { exerciseId, answerType: "choice" });
    saveProgress();
    render();
    return;
  }

  const word = event.target.closest("[data-word]");
  if (word) {
    const exerciseId = word.dataset.word;
    const placed = Array.isArray(progress.answers[exerciseId]) ? progress.answers[exerciseId] : [];
    progress.answers[exerciseId] = [...placed, word.dataset.value];
    trackEvent("exercise_answered", { exerciseId, answerType: "word-order" });
    saveProgress();
    render();
    return;
  }

  const removeWord = event.target.closest("[data-remove-word]");
  if (removeWord) {
    const exerciseId = removeWord.dataset.removeWord;
    const placed = Array.isArray(progress.answers[exerciseId]) ? progress.answers[exerciseId] : [];
    progress.answers[exerciseId] = placed.filter((_, index) => index !== Number(removeWord.dataset.index));
    saveProgress();
    render();
    return;
  }

  const checkButton = event.target.closest("[data-check]");
  if (checkButton) {
    const exercise = exercises.find((item) => item.id === checkButton.dataset.check);
    progress.results[exercise.id] = {
      correct: isCorrect(exercise),
      checkedAt: new Date().toISOString(),
    };
    trackEvent("exercise_checked", { exerciseId: exercise.id, correct: progress.results[exercise.id].correct });
    if (!progress.results[exercise.id].correct) {
      trackEvent("student_risk_signal_created", { exerciseId: exercise.id, signal: "needs_retry" });
    }
    checkHomeworkCompletion();
    saveProgress();
    render();
    return;
  }

  const showAnswer = event.target.closest("[data-show-answer]");
  if (showAnswer) {
    progress.correctShown[showAnswer.dataset.showAnswer] = true;
    trackEvent("correct_answer_shown", { exerciseId: showAnswer.dataset.showAnswer });
    saveProgress();
    render();
    return;
  }

  const aiButton = event.target.closest("[data-ai]");
  if (aiButton) {
    progress.aiRequested[aiButton.dataset.ai] = true;
    trackEvent("ai_explanation_requested", { exerciseId: aiButton.dataset.ai });
    saveProgress();
    render();
    return;
  }

  const statusFilter = event.target.closest("[data-status-filter]");
  if (statusFilter) {
    state.statusFilter = statusFilter.dataset.statusFilter;
    render();
    return;
  }

  const studentButton = event.target.closest("[data-student]");
  if (studentButton) {
    state.selectedStudentId = studentButton.dataset.student;
    render();
    return;
  }

  const metaSave = event.target.closest("[data-meta-save]");
  if (metaSave) {
    progress.metadataDraft = {
      type: document.querySelector('[data-meta-field="type"]').value,
      skill: document.querySelector('[data-meta-field="skill"]').value,
      status: document.querySelector('[data-meta-field="status"]').value,
      savedAt: new Date().toISOString(),
    };
    saveProgress();
    render();
    return;
  }

  const resetProgress = event.target.closest("[data-reset-progress]");
  if (resetProgress) {
    progress = { ...defaultProgress };
    saveProgress();
    render();
    return;
  }

  const sendHint = event.target.closest("[data-send-hint]");
  if (sendHint) {
    trackEvent("teacher_hint_sent", { lessonId: COURSE.currentLessonId, hint: "Use I'm from + city." });
    render();
  }
}

function handleInput(event) {
  const answerInput = event.target.closest("[data-answer]");
  if (answerInput) {
    progress.answers[answerInput.dataset.answer] = answerInput.value;
    trackEvent("exercise_answered", { exerciseId: answerInput.dataset.answer, answerType: "text" });
    saveProgress();
    return;
  }

  const matchSelect = event.target.closest("[data-match-key]");
  if (matchSelect) {
    const exerciseId = matchSelect.dataset.exercise;
    progress.answers[exerciseId] = {
      ...(progress.answers[exerciseId] || {}),
      [matchSelect.dataset.matchKey]: matchSelect.value,
    };
    trackEvent("exercise_answered", { exerciseId, answerType: "matching" });
    saveProgress();
  }
}

root.addEventListener("click", handleClick);
root.addEventListener("input", handleInput);
root.addEventListener("change", handleInput);

render();
