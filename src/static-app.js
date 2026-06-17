const STORAGE_KEY = "ulc_mvp_v0_2_progress";

const COURSE = {
  title: "Beginner English for Adults",
  level: "Beginner",
  group: "Beginner A1 Evening",
  unitTitle: "Unit 1. Nice to meet you",
};

const lessons = [
  {
    id: "beg_u1_l1",
    number: "1",
    title: "Lesson 1. Hello, I'm Anna",
    theme: "Greetings, names, first contact",
    goalRu: "Научиться поздороваться, назвать имя и спросить имя собеседника.",
    speakingOutcome:
      "Student can greet a new person, say their name, and ask: What is your name?",
    targetLanguage: ["Hello", "Hi", "I'm Anna", "What is your name?", "Nice to meet you"],
    grammarFocus: ["I am / I'm", "you are / you're"],
    vocabularyFocus: ["hello", "hi", "name", "nice", "meet"],
    pronunciationFocus: ["short friendly intonation", "name spelling"],
    teacherNotes:
      "Keep correction light. The goal is confidence and a natural first exchange.",
    homework: "Finish exercises 1A-1D and prepare a 15-second intro.",
    sections: [
      ["Lead-in", "Посмотрите на мини-ситуацию и выберите фразы для первой встречи.", "A: Hello, I'm Anna. B: Hi, I'm Max. Nice to meet you."],
      ["Vocabulary", "Соедините приветствия с естественными ответами.", "Hello. Hi. Nice to meet you. What's your name?"],
      ["Grammar discovery", "Заметьте короткую форму: I am -> I'm.", "I am Anna. I'm Anna. You are Max. You're Max."],
      ["Speaking", "Скажите короткий диалог вслух. Speaking-виджет подключается отдельно.", "A: Hello, I'm Anna. What's your name? B: I'm Max. Nice to meet you."],
    ],
  },
  {
    id: "beg_u1_l2",
    number: "2",
    title: "Lesson 2. Where are you from?",
    theme: "Countries, cities, simple origin questions",
    goalRu: "Научиться назвать страну и город, а также спросить собеседника.",
    speakingOutcome:
      "Student can say where they are from and ask a partner the same question.",
    targetLanguage: ["I'm from Minsk", "Where are you from?", "I'm from Poland"],
    grammarFocus: ["Where are you from?", "I am from ..."],
    vocabularyFocus: ["Belarus", "Poland", "Italy", "Minsk", "Warsaw", "Rome"],
    pronunciationFocus: ["word stress in country names"],
    teacherNotes:
      "Use maps only as support. The output is a short exchange, not geography recall.",
    homework: "Complete country/city tasks and write two sentences about yourself.",
    sections: [
      ["Lead-in", "Прочитайте короткий диалог и найдите вопрос о стране.", "A: Hi, I'm Leo. I'm from Warsaw. Where are you from? B: I'm from Minsk."],
      ["Vocabulary", "Повторите страны и города, затем используйте их в предложениях.", "Belarus, Poland, Lithuania, Italy, Minsk, Warsaw, Vilnius, Rome."],
      ["Grammar", "Соберите вопрос. В английском порядок слов важен.", "Where are you from? I am from Minsk."],
      ["Listening", "Нажмите Listen и выберите, откуда человек.", "I'm Marta. I'm from Poland, but I live in Minsk."],
      ["Speaking", "Спросите партнера о стране и городе.", "Where are you from? What city are you from?"],
    ],
  },
  {
    id: "beg_u1_l3",
    number: "3",
    title: "Lesson 3. Jobs and numbers",
    theme: "Jobs, numbers 0-20, phone details",
    goalRu: "Научиться назвать профессию и понять простой номер телефона.",
    speakingOutcome:
      "Student can say their job and slowly give a short phone number.",
    targetLanguage: ["I'm a designer", "I'm a manager", "My number is 8029", "How do you spell it?"],
    grammarFocus: ["a/an with jobs", "my/your"],
    vocabularyFocus: ["designer", "manager", "teacher", "student", "numbers 0-20"],
    pronunciationFocus: ["teen numbers vs ten", "job word stress"],
    teacherNotes:
      "Numbers are functional support for contact exchange. Use short, repeated practice.",
    homework: "Complete job vocabulary and listen-and-type number practice.",
    sections: [
      ["Lead-in", "Выберите карточку профессии и скажите короткое предложение.", "I'm a designer. I'm a teacher. I'm a student."],
      ["Vocabulary", "Сопоставьте профессии с простыми ситуациями.", "manager, teacher, designer, student, barista."],
      ["Listening", "Прослушайте короткий номер и впишите цифры.", "My number is eight, zero, two, nine."],
      ["Speaking", "Представьтесь и добавьте профессию.", "Hi, I'm Anna. I'm a designer. Nice to meet you."],
    ],
  },
  {
    id: "beg_u1_l4",
    number: "4",
    title: "Lesson 4. My people",
    theme: "Family, friends, he/she, simple descriptions",
    goalRu: "Научиться представить близкого человека одной-двумя простыми фразами.",
    speakingOutcome:
      "Student can introduce a friend or family member with name, relation, and city.",
    targetLanguage: ["This is my sister", "She is from Minsk", "He is a teacher"],
    grammarFocus: ["he/she is", "my"],
    vocabularyFocus: ["friend", "sister", "brother", "mother", "father"],
    pronunciationFocus: ["he / she contrast", "sentence stress"],
    teacherNotes:
      "Avoid complex family trees. Keep the task personal, simple, and speakable.",
    homework: "Write three simple sentences about one person you know.",
    sections: [
      ["Lead-in", "Посмотрите на короткое представление человека.", "This is my friend Leo. He is from Warsaw. He is a manager."],
      ["Vocabulary", "Повторите слова для близких людей.", "friend, sister, brother, mother, father, colleague."],
      ["Grammar", "Заметьте: he is для мужчины, she is для женщины.", "He is Max. She is Anna."],
      ["Speaking", "Представьте одного человека из вашей жизни.", "This is my friend. She is from Minsk."],
    ],
  },
  {
    id: "beg_u1_l5",
    number: "5",
    title: "Lesson 5. Coffee before class",
    theme: "Cafe English, prices, polite requests",
    goalRu: "Научиться заказать простой напиток и спросить цену.",
    speakingOutcome:
      "Student can order a drink politely and ask: How much is it?",
    targetLanguage: ["Can I have a coffee?", "How much is it?", "It's four rubles"],
    grammarFocus: ["Can I have ...?", "How much is it?"],
    vocabularyFocus: ["coffee", "tea", "water", "sandwich", "rubles"],
    pronunciationFocus: ["polite rising tone", "can I linking"],
    teacherNotes:
      "This is Practical English. Prioritize fluent chunks over grammar explanation.",
    homework: "Complete the cafe dialogue and prepare one order for class.",
    sections: [
      ["Lead-in", "Послушайте короткую ситуацию перед уроком.", "A: Can I have a coffee? B: Sure. A: How much is it? B: Four rubles."],
      ["Vocabulary", "Выберите напиток или еду и составьте просьбу.", "coffee, tea, water, sandwich."],
      ["Practical English", "Соберите диалог заказа.", "Can I have a tea, please? How much is it?"],
      ["Speaking", "Сыграйте мини-роль: студент и бариста.", "A: Can I have a coffee? B: Sure. Four rubles."],
    ],
  },
  {
    id: "beg_u1_l6",
    number: "6",
    title: "Lesson 6. Unit checkpoint",
    theme: "First-meeting conversation checkpoint",
    goalRu: "Проверить, можете ли вы начать короткий разговор при знакомстве.",
    speakingOutcome:
      "Student can complete a first-meeting role-play with name, city, country, job, and one polite cafe phrase.",
    targetLanguage: ["Hello, I'm ...", "I'm from ...", "I'm a ...", "Can I have ...?"],
    grammarFocus: ["be", "question order", "short personal answers"],
    vocabularyFocus: ["review: greetings, countries, jobs, family, cafe"],
    pronunciationFocus: ["clear short phrases"],
    teacherNotes:
      "Use checkpoint results to choose revision blocks. Keep it supportive, not exam-like.",
    homework: "Finish the checkpoint and prepare a 30-second self-introduction.",
    sections: [
      ["Review", "Повторите ключевые фразы Unit 1.", "Hello. I'm Anna. I'm from Minsk. I'm a designer. Nice to meet you."],
      ["Checkpoint", "Сделайте мини-проверку и повторите ошибки.", "Introduce yourself and ask two questions."],
      ["Speaking", "Подготовьте финальный мини-диалог.", "A: Hello, I'm Anna. B: Nice to meet you. Where are you from?"],
    ],
  },
];

const exercises = [
  ex("beg_u1_l1_ex01", "beg_u1_l1", "matching", "1A. Greetings and replies", "Vocabulary", "Соедините приветствие с ответом.", "Выберите естественный ответ.", {
    items: [["Hello", "Hi"], ["Nice to meet you", "Nice to meet you too"], ["What's your name?", "I'm Anna"]],
    correctAnswer: { Hello: "Hi", "Nice to meet you": "Nice to meet you too", "What's your name?": "I'm Anna" },
    hintRu: "Ответ должен звучать как начало короткого знакомства.",
    explanationRu: "Hello -> Hi; Nice to meet you -> Nice to meet you too; What's your name? -> I'm Anna.",
    microPractice: "Скажите вслух: Hello, I'm Anna.",
  }),
  ex("beg_u1_l1_ex02", "beg_u1_l1", "fill-gap", "1B. Short form", "Grammar", "Впишите короткую форму.", "I am Anna. = ___ Anna.", {
    correctAnswer: "I'm",
    acceptedAnswers: ["I’m", "Im"],
    hintRu: "I am часто сокращается до I'm.",
    explanationRu: "Правильно: I'm Anna. Это короткая естественная форма.",
    microPractice: "Напишите: I'm Max.",
  }),
  ex("beg_u1_l1_ex03", "beg_u1_l1", "word-order", "1C. Make a question", "Grammar", "Нажмите слова в правильном порядке.", "Соберите: Как вас зовут?", {
    words: ["What", "is", "your", "name?"],
    correctAnswer: "What is your name?",
    hintRu: "Вопрос начинается с What.",
    explanationRu: "Правильный порядок: What is your name?",
    microPractice: "Спросите вслух: What is your name?",
  }),
  ex("beg_u1_l1_ex04", "beg_u1_l1", "short-writing", "1D. Introduce yourself", "Writing", "Напишите одно короткое предложение о себе.", "Use: I'm ...", {
    correctAnswer: ["i'm"],
    acceptedAnswers: ["i am"],
    hintRu: "Можно написать: I'm Anna.",
    explanationRu: "Для Beginner достаточно короткого предложения: I'm + name.",
    microPractice: "Добавьте: Nice to meet you.",
  }),

  ex("beg_u1_l2_ex01", "beg_u1_l2", "multiple-choice", "2A. Find the question", "Lead-in", "Выберите вопрос о стране или городе.", "Leo says: I'm from Warsaw. What can Anna ask next?", {
    options: ["Where are you from?", "What is your job?", "How old are you?"],
    correctAnswer: "Where are you from?",
    hintRu: "Ищите вопрос со словом from.",
    explanationRu: "Where are you from? означает Откуда вы?",
    microPractice: "Ответьте: I'm from Minsk.",
  }),
  ex("beg_u1_l2_ex02", "beg_u1_l2", "fill-gap", "2B. Complete the sentence", "Grammar", "Впишите пропущенное слово.", "I'm ___ Minsk.", {
    correctAnswer: "from",
    acceptedAnswers: ["from"],
    hintRu: "После I'm используем from, когда говорим о городе или стране.",
    explanationRu: "Правильно: I'm from Minsk. From показывает, откуда человек.",
    microPractice: "Дополните: I'm from ____.",
  }),
  ex("beg_u1_l2_ex03", "beg_u1_l2", "matching", "2C. Countries and cities", "Vocabulary", "Соедините страну с городом.", "Выберите правильный город для каждой страны.", {
    items: [["Belarus", "Minsk"], ["Poland", "Warsaw"], ["Italy", "Rome"]],
    correctAnswer: { Belarus: "Minsk", Poland: "Warsaw", Italy: "Rome" },
    hintRu: "Вспомните города из блока Vocabulary.",
    explanationRu: "Belarus - Minsk, Poland - Warsaw, Italy - Rome.",
    microPractice: "Скажите: I'm from Belarus. I'm from Minsk.",
  }),
  ex("beg_u1_l2_ex04", "beg_u1_l2", "listen-choose", "2D. Listen and choose", "Listening", "Нажмите Listen и выберите страну.", "Where is Marta from?", {
    audioText: "Hi, I'm Marta. I'm from Poland, but I live in Minsk.",
    options: ["Belarus", "Poland", "Italy"],
    correctAnswer: "Poland",
    hintRu: "Слушайте фразу I'm from ...",
    explanationRu: "Marta says: I'm from Poland.",
    microPractice: "Ответьте: Marta is from Poland.",
  }),

  ex("beg_u1_l3_ex01", "beg_u1_l3", "multiple-choice", "3A. Choose the job", "Vocabulary", "Выберите профессию по описанию.", "I work with students. I am a ...", {
    options: ["teacher", "city", "coffee"],
    correctAnswer: "teacher",
    hintRu: "Students обычно связаны с teacher.",
    explanationRu: "Teacher - преподаватель. Правильно: I am a teacher.",
    microPractice: "Скажите: I'm a teacher.",
  }),
  ex("beg_u1_l3_ex02", "beg_u1_l3", "word-order", "3B. Build the job sentence", "Grammar", "Соберите предложение.", "Я менеджер.", {
    words: ["I'm", "a", "manager"],
    correctAnswer: "I'm a manager",
    acceptedAnswers: ["I am a manager"],
    hintRu: "Для профессии в единственном числе нужен a/an.",
    explanationRu: "Правильно: I'm a manager.",
    microPractice: "Скажите: I'm a student.",
  }),
  ex("beg_u1_l3_ex03", "beg_u1_l3", "listen-type", "3C. Listen and type", "Listening", "Нажмите Listen и напишите цифры.", "Type the number you hear.", {
    audioText: "My number is eight zero two nine.",
    correctAnswer: "8029",
    acceptedAnswers: ["8 0 2 9", "eight zero two nine"],
    hintRu: "Слушайте четыре цифры.",
    explanationRu: "Вы услышали: eight zero two nine. Ответ: 8029.",
    microPractice: "Прочитайте свой короткий номер по цифрам.",
  }),
  ex("beg_u1_l3_ex04", "beg_u1_l3", "short-writing", "3D. Name and job", "Writing", "Напишите 2 коротких предложения: имя и профессия.", "Use: I'm ... / I'm a ...", {
    correctAnswer: ["i'm", "a"],
    acceptedAnswers: ["i am"],
    hintRu: "Пример: I'm Anna. I'm a designer.",
    explanationRu: "Ответ должен содержать имя и профессию с I'm a/an.",
    microPractice: "Добавьте: Nice to meet you.",
  }),

  ex("beg_u1_l4_ex01", "beg_u1_l4", "matching", "4A. People words", "Vocabulary", "Соедините слово и простое значение.", "Match people words.", {
    items: [["mother", "мама"], ["brother", "брат"], ["friend", "друг/подруга"]],
    correctAnswer: { mother: "мама", brother: "брат", friend: "друг/подруга" },
    hintRu: "Это слова для близких людей.",
    explanationRu: "Mother - мама, brother - брат, friend - друг/подруга.",
    microPractice: "Скажите: This is my friend.",
  }),
  ex("beg_u1_l4_ex02", "beg_u1_l4", "fill-gap", "4B. This is my ...", "Grammar", "Впишите пропущенное слово.", "This is ___ sister.", {
    correctAnswer: "my",
    acceptedAnswers: ["my"],
    hintRu: "My означает мой/моя.",
    explanationRu: "Правильно: This is my sister.",
    microPractice: "Скажите: This is my friend.",
  }),
  ex("beg_u1_l4_ex03", "beg_u1_l4", "multiple-choice", "4C. He or she", "Grammar", "Выберите правильное слово.", "Anna is from Minsk. ___ is a designer.", {
    options: ["She", "He", "It"],
    correctAnswer: "She",
    hintRu: "Anna - женское имя, используем she.",
    explanationRu: "Правильно: She is a designer.",
    microPractice: "Скажите: She is from Minsk.",
  }),
  ex("beg_u1_l4_ex04", "beg_u1_l4", "short-writing", "4D. Introduce a person", "Writing", "Напишите 2 предложения о знакомом человеке.", "Use: This is my ... / He is ... / She is ...", {
    correctAnswer: ["this is", "is"],
    acceptedAnswers: ["he is", "she is"],
    hintRu: "Пример: This is my friend. She is from Minsk.",
    explanationRu: "Хороший ответ: короткое представление человека с This is my ...",
    microPractice: "Добавьте профессию: He is a manager.",
  }),

  ex("beg_u1_l5_ex01", "beg_u1_l5", "listen-choose", "5A. Cafe order", "Listening", "Нажмите Listen и выберите заказ.", "What does Anna want?", {
    audioText: "Can I have a coffee, please?",
    options: ["coffee", "tea", "water"],
    correctAnswer: "coffee",
    hintRu: "Слушайте слово после have a.",
    explanationRu: "Anna says: Can I have a coffee, please?",
    microPractice: "Скажите: Can I have a tea, please?",
  }),
  ex("beg_u1_l5_ex02", "beg_u1_l5", "drag-drop", "5B. Build a polite request", "Practical English", "Нажмите слова, чтобы собрать просьбу.", "Можно мне кофе?", {
    words: ["Can", "I", "have", "a", "coffee?"],
    correctAnswer: "Can I have a coffee?",
    hintRu: "Начните с Can I have ...",
    explanationRu: "Правильно: Can I have a coffee?",
    microPractice: "Замените coffee на tea.",
  }),
  ex("beg_u1_l5_ex03", "beg_u1_l5", "fill-gap", "5C. Price question", "Grammar", "Впишите пропущенное слово.", "How ___ is it?", {
    correctAnswer: "much",
    acceptedAnswers: ["much"],
    hintRu: "How much is it? - Сколько это стоит?",
    explanationRu: "Правильно: How much is it?",
    microPractice: "Спросите вслух: How much is it?",
  }),
  ex("beg_u1_l5_ex04", "beg_u1_l5", "short-writing", "5D. Mini cafe dialogue", "Writing", "Напишите короткий заказ в кафе.", "Use: Can I have ...? / How much is it?", {
    correctAnswer: ["can i have", "how much"],
    acceptedAnswers: ["can i get"],
    hintRu: "Пример: Can I have a coffee? How much is it?",
    explanationRu: "В ответе должна быть просьба и вопрос о цене.",
    microPractice: "Скажите заказ вслух перед следующим уроком.",
  }),

  ex("beg_u1_l6_ex01", "beg_u1_l6", "multiple-choice", "6A. Check the best reply", "Checkpoint", "Выберите лучший ответ.", "A: Nice to meet you. B: ...", {
    options: ["Nice to meet you too.", "I'm coffee.", "How much from?"],
    correctAnswer: "Nice to meet you too.",
    hintRu: "Нужен естественный ответ на знакомство.",
    explanationRu: "Nice to meet you too - естественный ответ.",
    microPractice: "Скажите ответ с дружелюбной интонацией.",
  }),
  ex("beg_u1_l6_ex02", "beg_u1_l6", "word-order", "6B. Check the question", "Checkpoint", "Соберите вопрос.", "Откуда вы?", {
    words: ["Where", "are", "you", "from?"],
    correctAnswer: "Where are you from?",
    hintRu: "Вопрос начинается с Where.",
    explanationRu: "Правильный порядок: Where are you from?",
    microPractice: "Задайте этот вопрос партнеру.",
  }),
  ex("beg_u1_l6_ex03", "beg_u1_l6", "short-writing", "6C. Self-introduction", "Checkpoint", "Напишите 4 коротких предложения о себе.", "Include name, city/country, job, and one polite cafe phrase.", {
    correctAnswer: ["i'm", "from", "a", "can i have"],
    acceptedAnswers: ["i am"],
    hintRu: "Пример: I'm Anna. I'm from Minsk. I'm a designer. Can I have a coffee?",
    explanationRu: "Финальный ответ должен соединять темы Unit 1 в простой речи.",
    microPractice: "Прочитайте этот текст вслух 2 раза.",
  }),
  ex("beg_u1_l6_ex04", "beg_u1_l6", "short-writing", "6D. Teacher review note", "Checkpoint", "Напишите, что было самым сложным.", "Use Russian or simple English.", {
    correctAnswer: [" "],
    acceptedAnswers: ["from", "question", "сложно", "трудно", "нормально"],
    hintRu: "Можно написать: Question order was difficult.",
    explanationRu: "Reflection помогает преподавателю выбрать повторение.",
    microPractice: "Попросите преподавателя повторить одну тему.",
  }),
];

const students = [
  studentRow("stu_001", "Анна", 88, 81, "beg_u1_l5", "12 минут назад", "low", "question order", "Готова к checkpoint"),
  studentRow("stu_002", "Мария", 54, 66, "beg_u1_l3", "2 дня назад", "medium", "from + city", "Нужен короткий reminder"),
  studentRow("stu_003", "Ирина", 22, 49, "beg_u1_l2", "7 дней назад", "high", "missed homework twice", "Передать сигнал в сервис"),
  studentRow("stu_004", "Екатерина", 96, 91, "beg_u1_l6", "сейчас", "low", "country stress", "Можно дать extra speaking"),
  studentRow("stu_005", "Ольга", 71, 74, "beg_u1_l4", "1 час назад", "medium", "he/she", "Повторить family block"),
];

const integrations = [
  ["1C", "contracts, payment status, course access", "ready", "GET /students/{id}/billing"],
  ["Revizor / BI", "retention, NPS, homework depth, usage depth", "ready", "POST /analytics/events"],
  ["Bitrix24", "service tasks, renewal signals, manager handoff", "mock", "POST /crm/tasks"],
  ["Telegram", "homework reminders and teacher notifications", "mock", "POST /telegram/reminders"],
  ["Payments", "paid/unpaid status and access guard", "planned", "GET /payments/status"],
  ["Scheduling", "next class, room, online link", "planned", "GET /schedule/group"],
  ["Feedback / NPS", "lesson feedback, negative signal, NPS trend", "mock", "POST /feedback/nps"],
  ["Speaking widget", "external speaking practice and teacher review", "planned", "POST /api/speaking-sessions"],
];

const contentItems = [
  ["Unit 1. Nice to meet you", "unit", "approved", "Methodist team", "beginner, speaking-first, original-content"],
  ["Lesson 2. Where are you from?", "lesson", "approved", "ULC Methodology", "countries, be-from, question-order"],
  ["Lesson 5. Coffee before class", "lesson", "review", "Teacher book editor", "practical-english, cafe, prices"],
  ["6C. Self-introduction", "exercise", "draft", "Content AI pipeline", "checkpoint, writing, ai-feedback"],
  ["Old PDF import: greetings page", "exercise", "archived", "Migration review", "not-native, replaced, do-not-use"],
];

const qualitySignals = [
  ["High error rate", "Lesson 2 / word order", "38% need hint", "review"],
  ["Abandonment", "Lesson 5 / cafe dialogue", "12% stop before writing", "draft"],
  ["Strong outcome", "Lesson 1 / intro writing", "91% complete", "approved"],
  ["Teacher request", "Lesson 4 / he-she", "needs extra micro-practice", "review"],
];

function ex(id, lessonId, type, title, section, instructionRu, prompt, extra) {
  return {
    id,
    lessonId,
    type,
    title,
    section,
    instructionRu,
    prompt,
    estimatedTimeMinutes: extra.estimatedTimeMinutes || 3,
    skill: extra.skill || inferSkill(type, section),
    grammarTag: extra.grammarTag || [],
    vocabularyTag: extra.vocabularyTag || [],
    ...extra,
  };
}

function studentRow(id, name, homeworkPercent, scorePercent, lessonId, lastActivity, risk, commonMistake, nextAction) {
  return { id, name, homeworkPercent, scorePercent, lessonId, lastActivity, risk, commonMistake, nextAction };
}

function inferSkill(type, section) {
  if (type.startsWith("listen")) return ["listening"];
  if (type === "short-writing") return ["writing", "speaking_support"];
  if (section === "Vocabulary") return ["vocabulary"];
  if (section === "Grammar") return ["grammar"];
  return ["speaking_support"];
}

function defaultProgress() {
  return {
    selectedLessonId: "beg_u1_l1",
    selectedExerciseId: "beg_u1_l1_ex01",
    responses: {},
    results: {},
    attempts: {},
    notes: {},
    lastOpenedAt: new Date().toISOString(),
  };
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress();
    return { ...defaultProgress(), ...JSON.parse(raw) };
  } catch {
    return defaultProgress();
  }
}

const state = {
  view: "student",
  exerciseIndex: 0,
  live: true,
  liveExerciseId: "beg_u1_l1_ex01",
  selectedStudentId: "stu_001",
  selectedContentStatus: "all",
  progress: loadProgress(),
};

const app = document.getElementById("root");

function saveProgress() {
  state.progress.lastOpenedAt = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
}

function selectedLesson() {
  return lessons.find((lesson) => lesson.id === state.progress.selectedLessonId) || lessons[0];
}

function lessonExercises(lessonId = selectedLesson().id) {
  return exercises.filter((exercise) => exercise.lessonId === lessonId);
}

function lessonCompletion(lessonId) {
  const items = lessonExercises(lessonId);
  if (!items.length) return 0;
  const checked = items.filter((exercise) => state.progress.results[exercise.id]).length;
  return Math.round((checked / items.length) * 100);
}

function lessonScore(lessonId) {
  const items = lessonExercises(lessonId);
  const checked = items.filter((exercise) => state.progress.results[exercise.id]);
  if (!checked.length) return 0;
  const correct = checked.filter((exercise) => state.progress.results[exercise.id].isCorrect).length;
  return Math.round((correct / checked.length) * 100);
}

function unitCompletion() {
  const total = exercises.length;
  const checked = exercises.filter((exercise) => state.progress.results[exercise.id]).length;
  return Math.round((checked / total) * 100);
}

function currentCertificateProgress() {
  return Math.min(100, Math.round(unitCompletion() * 0.7 + averageScore() * 0.3));
}

function averageScore() {
  const checked = exercises.filter((exercise) => state.progress.results[exercise.id]);
  if (!checked.length) return 0;
  const correct = checked.filter((exercise) => state.progress.results[exercise.id].isCorrect).length;
  return Math.round((correct / checked.length) * 100);
}

function normalize(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[.,!?]/g, "")
    .replace(/\s+/g, " ")
    .replaceAll("i am", "i'm")
    .replaceAll("i’m", "i'm");
}

function answerText(answer) {
  if (Array.isArray(answer)) return answer.join(", ");
  if (typeof answer === "object") {
    return Object.entries(answer).map(([left, right]) => `${left} - ${right}`).join("; ");
  }
  return answer;
}

function checkExercise(exercise, response) {
  let isCorrect = false;
  if (exercise.type === "matching") {
    isCorrect = Object.entries(exercise.correctAnswer).every(
      ([left, right]) => normalize(response?.[left]) === normalize(right),
    );
  } else if (exercise.type === "short-writing") {
    const text = normalize(response);
    const required = Array.isArray(exercise.correctAnswer) ? exercise.correctAnswer : [exercise.correctAnswer];
    isCorrect = required.every((token) => text.includes(normalize(token))) ||
      (exercise.acceptedAnswers || []).some((token) => text.includes(normalize(token)));
  } else {
    const responseText = Array.isArray(response) ? response.join(" ") : response;
    const accepted = [exercise.correctAnswer, ...(exercise.acceptedAnswers || [])];
    isCorrect = accepted.map(normalize).includes(normalize(responseText));
  }

  return {
    isCorrect,
    checkedAt: new Date().toISOString(),
    correctAnswer: answerText(exercise.correctAnswer),
    explanationRu: isCorrect
      ? "Верно. Ответ подходит к задаче урока и уровню Beginner."
      : exercise.explanationRu,
    beginnerFriendlyRuleRu: isCorrect
      ? "Сохраните эту короткую фразу и используйте ее в speaking outcome."
      : exercise.hintRu,
    microPractice: exercise.microPractice,
  };
}

function setView(view) {
  state.view = view;
  render();
}

function setLesson(lessonId, view = "lesson") {
  state.progress.selectedLessonId = lessonId;
  state.exerciseIndex = 0;
  const firstExercise = lessonExercises(lessonId)[0];
  if (firstExercise) {
    state.liveExerciseId = firstExercise.id;
    state.progress.selectedExerciseId = firstExercise.id;
  }
  saveProgress();
  setView(view);
}

function icon(name) {
  return `<span class="ui-icon" aria-hidden="true">${name}</span>`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function progressTrack(value) {
  return `<span class="progress-track"><span style="width:${value}%"></span></span>`;
}

function pill(text, tone = "blue") {
  return `<span class="tag ${tone}">${text}</span>`;
}

function render() {
  const views = {
    student: studentDashboard,
    units: unitMap,
    lesson: lessonPage,
    homework: homeworkMode,
    teacher: teacherDashboard,
    live: liveLesson,
    methodologist: methodologistDashboard,
  };
  app.innerHTML = shell(views[state.view]());
  bindEvents();
}

function shell(content) {
  const nav = [
    ["student", "Сегодня", "Student Dashboard"],
    ["units", "Карта курса", "Beginner Unit 1"],
    ["lesson", "Урок", "Lesson Page"],
    ["homework", "Домашка", "Persisted Homework Mode"],
    ["teacher", "Преподаватель", "Teacher Dashboard"],
    ["live", "Live lesson", "Shared learning space"],
    ["methodologist", "Методист", "Content and teacher book"],
  ];
  return `
    <div class="app-shell">
      <aside class="sidebar" aria-label="Главная навигация">
        <div class="brand-block">
          <div class="brand-mark" aria-hidden="true">ULC</div>
          <div>
            <p class="eyebrow">ULC.by</p>
            <h1>Learning Environment v0.2</h1>
          </div>
        </div>
        <nav class="nav-list">
          ${nav.map(([key, label, title]) => `
            <button class="nav-item ${state.view === key ? "active" : ""}" data-view="${key}" title="${title}" type="button">
              ${icon("•")}<span>${label}</span>
            </button>`).join("")}
        </nav>
        <div class="sidebar-status">
          <p class="eyebrow">localStorage progress</p>
          <strong>${unitCompletion()}% Unit 1 complete</strong>
          <span>Responses, checks, attempts and selected lesson persist locally.</span>
        </div>
      </aside>
      <main class="workspace">
        <header class="topbar">
          <div>
            <p class="eyebrow">цифровая среда обучения</p>
            <h2>${COURSE.title}</h2>
          </div>
          <div class="topbar-actions" aria-label="Статусы прототипа">
            <span class="status-pill">${icon("U1")} 6 lessons</span>
            <span class="status-pill">${icon("LS")} saved progress</span>
            <span class="status-pill">${icon("BI")} analytics-ready</span>
          </div>
        </header>
        ${content}
        <footer class="footer-note">
          ${icon("OK")} v0.2: native pages, original ULC sample content, external speaking widget only.
        </footer>
      </main>
    </div>`;
}

function studentDashboard() {
  const lesson = selectedLesson();
  const weakAreas = wrongExercises().slice(0, 4);
  return `
    <section class="screen-grid">
      <div class="hero-panel v02-hero">
        <div>
          <p class="eyebrow">личный кабинет студента</p>
          <h2>${studentName()}, продолжим ${lesson.title}</h2>
          <p class="hero-copy">${lesson.goalRu}</p>
        </div>
        <div class="hero-actions">
          <button class="primary-button" data-view="lesson" type="button">${icon("▶")} Продолжить урок</button>
          <button class="ghost-button" data-view="homework" type="button">${icon("HW")} Домашка</button>
        </div>
      </div>
      <div class="metric-strip" aria-label="Учебный прогресс">
        ${metric("Курс", COURSE.title)}
        ${metric("Уровень", COURSE.level)}
        ${metric("Unit 1", `${unitCompletion()}%`)}
        ${metric("Certificate", `${currentCertificateProgress()}%`)}
      </div>
      <div class="content-panel progress-panel">
        <div class="section-heading">
          <div><p class="eyebrow">текущий урок</p><h3>${lesson.title}</h3></div>
          <span class="progress-number">${lessonCompletion(lesson.id)}%</span>
        </div>
        ${progressTrack(lessonCompletion(lesson.id))}
        <div class="lesson-line">
          <div><strong>${lesson.speakingOutcome}</strong><span>${lesson.homework}</span></div>
          ${icon("→")}
        </div>
      </div>
      <div class="content-panel homework-panel">
        <div class="section-heading">
          <div><p class="eyebrow">homework mode</p><h3>Сохраняется в браузере</h3></div>
          ${pill("localStorage", "green")}
        </div>
        <ul class="clean-list">
          ${lessons.map((item) => `
            <li>
              ${icon(lessonCompletion(item.id) === 100 ? "✓" : "□")}
              <span>${item.number}. ${item.title}</span>
              <small>${lessonCompletion(item.id)}%</small>
            </li>`).join("")}
        </ul>
      </div>
      <div class="content-panel">
        <div class="section-heading">
          <div><p class="eyebrow">словарь Unit 1</p><h3>Повторение слов</h3></div>
          ${pill("SRS mock", "amber")}
        </div>
        <div class="word-grid">
          ${["hello", "from", "job", "friend", "coffee", "price"].map((word) => `<span>${word}</span>`).join("")}
        </div>
      </div>
      <div class="content-panel">
        <div class="section-heading">
          <div><p class="eyebrow">ошибки</p><h3>AI объяснение</h3></div>
          ${icon("AI")}
        </div>
        <ul class="clean-list">
          ${(weakAreas.length ? weakAreas : ["Пока нет проверенных ошибок"]).map((area) => `
            <li><span class="dot ${weakAreas.length ? "danger" : "ready"}"></span><span>${typeof area === "string" ? area : area.title}</span></li>`).join("")}
        </ul>
      </div>
      <div class="content-panel certificate-panel">
        <div class="section-heading">
          <div><p class="eyebrow">сертификат</p><h3>Beginner Unit 1 readiness</h3></div>
          <strong>${currentCertificateProgress()}%</strong>
        </div>
        ${progressTrack(currentCertificateProgress())}
        <p>Certificate progress combines checked homework depth and correct-answer score.</p>
      </div>
    </section>`;
}

function metric(label, value) {
  return `<div class="metric-item">${icon("•")}<span>${label}</span><strong>${value}</strong></div>`;
}

function studentName() {
  return "Анна";
}

function wrongExercises() {
  return exercises.filter((exercise) => state.progress.results[exercise.id] && !state.progress.results[exercise.id].isCorrect);
}

function unitMap() {
  return `
    <section class="wide-stack">
      <div class="screen-title">
        <div><p class="eyebrow">Beginner Unit 1</p><h2>6 уроков: от знакомства к короткому реальному диалогу</h2></div>
        <button class="primary-button" data-view="homework" type="button">${icon("HW")} Открыть домашку</button>
      </div>
      <div class="unit-overview">
        <div class="content-panel">
          <p class="eyebrow">communicative goal</p>
          <h3>Student can introduce themselves, ask simple questions, speak about city, job, people, and make a polite cafe request.</h3>
        </div>
        <div class="content-panel">
          <p class="eyebrow">methodology</p>
          <h3>controlled practice -> semi-controlled practice -> freer speaking -> checkpoint</h3>
        </div>
      </div>
      <div class="unit-map">
        <article class="unit-band">
          <div class="unit-summary">
            <span class="unit-index">01</span>
            <div>
              <p class="eyebrow">original ULC sample program</p>
              <h3>${COURSE.unitTitle}</h3>
              <p>Every lesson has a practical speaking outcome, teacher notes, homework, and analytics tags.</p>
            </div>
            <div class="mini-progress"><strong>${unitCompletion()}%</strong>${progressTrack(unitCompletion())}</div>
          </div>
          <div class="lesson-rail six-lessons">
            ${lessons.map((lesson) => `
              <button class="lesson-node ${lesson.id === selectedLesson().id ? "active" : ""}" data-lesson="${lesson.id}" data-open-view="lesson" type="button">
                ${icon(lessonCompletion(lesson.id) === 100 ? "✓" : lesson.id === selectedLesson().id ? "●" : "○")}
                <span>${lesson.number}. ${lesson.title}</span>
                <small>${lesson.speakingOutcome}</small>
                <strong>${lessonCompletion(lesson.id)}%</strong>
              </button>`).join("")}
          </div>
        </article>
      </div>
    </section>`;
}

function lessonPage() {
  const lesson = selectedLesson();
  return `
    <div class="lesson-workspace">
      <section class="lesson-page">
        <div class="lesson-header">
          <div>
            <p class="eyebrow">${COURSE.unitTitle}</p>
            <h2>${lesson.title}</h2>
            <p>${lesson.goalRu}</p>
          </div>
          <div class="speaking-outcome">
            ${icon("SO")}<span>Speaking outcome</span><strong>${lesson.speakingOutcome}</strong>
          </div>
        </div>
        <div class="lesson-picker">
          ${lessons.map((item) => `
            <button class="${item.id === lesson.id ? "selected" : ""}" data-lesson="${item.id}" data-open-view="lesson" type="button">
              ${item.number}
            </button>`).join("")}
        </div>
        <div class="language-focus">
          <div>
            <p class="eyebrow">target language</p>
            <div class="phrase-row">${lesson.targetLanguage.map((phrase) => `<span>${phrase}</span>`).join("")}</div>
          </div>
          <div>
            <p class="eyebrow">teacher book note</p>
            <p>${lesson.teacherNotes}</p>
          </div>
        </div>
        <div class="lesson-sections">
          ${lesson.sections.map(([title, instruction, content]) => `
            <article class="lesson-section">
              ${icon("§")}
              <div>
                <span class="tag blue">${title}</span>
                <h3>${instruction}</h3>
                <p class="english-line">${content}</p>
              </div>
            </article>`).join("")}
        </div>
      </section>
      ${exercisePlayer(lesson.id)}
    </div>`;
}

function homeworkMode() {
  const lesson = selectedLesson();
  return `
    <section class="wide-stack">
      <div class="screen-title">
        <div><p class="eyebrow">Homework Mode</p><h2>Домашка сохраняется между сессиями</h2></div>
        <button class="ghost-button" data-reset-progress type="button">${icon("↺")} Сбросить progress</button>
      </div>
      <p class="mode-note">Сохраняется в браузере через localStorage: ответы, проверки, попытки и активное упражнение.</p>
      <div class="homework-grid">
        <div class="content-panel">
          <div class="section-heading"><div><p class="eyebrow">Unit 1 homework pack</p><h3>6 lessons / ${exercises.length} exercises</h3></div>${pill(`${unitCompletion()}%`, "green")}</div>
          <div class="homework-list">
            ${lessons.map((item) => `
              <button class="${item.id === lesson.id ? "selected" : ""}" data-lesson="${item.id}" data-open-view="homework" type="button">
                <strong>${item.number}. ${item.title}</strong>
                <span>${item.homework}</span>
                ${progressTrack(lessonCompletion(item.id))}
              </button>`).join("")}
          </div>
        </div>
        <div class="content-panel">
          <p class="eyebrow">saved state</p>
          <h3>${lesson.title}</h3>
          <p>Checked: ${checkedCount(lesson.id)} / ${lessonExercises(lesson.id).length}. Score: ${lessonScore(lesson.id)}%.</p>
          <p>Last saved: ${formatTime(state.progress.lastOpenedAt)}.</p>
        </div>
      </div>
      ${exercisePlayer(lesson.id)}
    </section>`;
}

function checkedCount(lessonId) {
  return lessonExercises(lessonId).filter((exercise) => state.progress.results[exercise.id]).length;
}

function formatTime(value) {
  try {
    return new Date(value).toLocaleString("ru-RU");
  } catch {
    return "not saved yet";
  }
}

function exercisePlayer(lessonId) {
  const items = lessonExercises(lessonId);
  const savedIndex = items.findIndex((item) => item.id === state.progress.selectedExerciseId);
  const activeIndex = savedIndex >= 0 ? savedIndex : Math.min(state.exerciseIndex, items.length - 1);
  const exercise = items[activeIndex] || items[0];
  const completion = lessonCompletion(lessonId);
  return `
    <section class="exercise-player">
      <div class="player-header">
        <div><p class="eyebrow">Exercise Player</p><h2>${selectedLesson().title}: practice</h2></div>
        <div class="player-progress"><strong>${completion}%</strong>${progressTrack(completion)}</div>
      </div>
      <div class="exercise-tabs" aria-label="Упражнения урока">
        ${items.map((item, index) => {
          const result = state.progress.results[item.id];
          return `
              <button class="exercise-tab ${item.id === exercise.id ? "active" : ""}" data-exercise-index="${index}" type="button">
              ${icon(result?.isCorrect ? "✓" : result ? "!" : "□")}<span>${item.title.split(".")[0]}</span><small>${item.type}</small>
            </button>`;
        }).join("")}
      </div>
      <div class="type-strip" aria-label="All Unit 1 exercise types">
        ${[...new Set(exercises.map((item) => item.type))].map((type) => `<span>${type}</span>`).join("")}
      </div>
      <article class="exercise-surface">
        <div class="exercise-copy">
          <span class="tag blue">${exercise.type}</span>
          <h3>${exercise.title}</h3>
          <p>${exercise.instructionRu}</p>
          <strong class="prompt">${exercise.prompt}</strong>
        </div>
        ${exerciseInput(exercise)}
        <div class="exercise-actions">
          ${exercise.audioText ? `<button class="ghost-button" data-audio="${exercise.id}" title="Проиграть учебную аудио-реплику" type="button">${icon("▶")} Listen</button>` : ""}
          <button class="primary-button" data-check="${exercise.id}" type="button">${icon("✓")} Проверить</button>
          <button class="icon-button" data-reset="${exercise.id}" title="Сбросить ответ" type="button">${icon("↺")}</button>
        </div>
        ${state.progress.results[exercise.id] ? feedback(state.progress.results[exercise.id]) : ""}
      </article>
    </section>`;
}

function exerciseInput(exercise) {
  const response = state.progress.responses[exercise.id];
  if (exercise.type === "multiple-choice" || exercise.type === "listen-choose") {
    return `<div class="choice-grid">${exercise.options.map((option) => `
      <button class="choice-option ${response === option ? "selected" : ""}" data-response="${exercise.id}" data-value="${escapeHtml(option)}" type="button">${option}</button>`).join("")}</div>`;
  }
  if (exercise.type === "matching") {
    const current = response || {};
    const choices = exercise.items.map((item) => item[1]);
    return `<div class="matching-grid">${exercise.items.map(([left]) => `
      <label>
        <span>${left}</span>
        <select data-match="${exercise.id}" data-left="${escapeHtml(left)}">
          <option value="">Выберите ответ</option>
          ${choices.map((choice) => `<option value="${escapeHtml(choice)}" ${current[left] === choice ? "selected" : ""}>${choice}</option>`).join("")}
        </select>
      </label>`).join("")}</div>`;
  }
  if (exercise.type === "drag-drop" || exercise.type === "word-order") {
    const selected = Array.isArray(response) ? response : [];
    const available = exercise.words.filter((word) => !selected.includes(word));
    return `
      <div class="word-builder">
        <div class="drop-zone" aria-label="Собранное предложение">
          ${selected.length ? selected.map((word, index) => `<button class="word-chip placed" data-remove-word="${exercise.id}" data-word-index="${index}" type="button">${word}</button>`).join("") : "<span>Нажмите слова ниже</span>"}
        </div>
        <div class="word-bank">
          ${available.map((word) => `<button class="word-chip" draggable="true" data-add-word="${exercise.id}" data-value="${escapeHtml(word)}" type="button">${word}</button>`).join("")}
        </div>
      </div>`;
  }
  if (exercise.type === "short-writing") {
    return `<textarea class="writing-area" data-text="${exercise.id}" placeholder="Напишите короткий ответ">${escapeHtml(response || "")}</textarea>`;
  }
  return `<input class="answer-input" data-text="${exercise.id}" placeholder="Введите ответ" value="${escapeHtml(response || "")}" />`;
}

function feedback(result) {
  return `
    <div class="feedback ${result.isCorrect ? "correct" : "needs-work"}">
      <div class="feedback-title">${icon(result.isCorrect ? "✓" : "?")}<strong>${result.isCorrect ? "Верно" : "Нужно поправить"}</strong></div>
      <p>${result.explanationRu}</p>
      <div class="answer-line"><span>Correct answer</span><strong>${result.correctAnswer}</strong></div>
      <div class="ai-note">
        ${icon("AI")}
        <div>
          <strong>AI explanation</strong>
          <p>${result.beginnerFriendlyRuleRu}</p>
          <small>${result.microPractice}</small>
        </div>
      </div>
    </div>`;
}

function teacherDashboard() {
  const selected = students.find((item) => item.id === state.selectedStudentId) || students[0];
  const groupHomework = Math.round(students.reduce((sum, item) => sum + item.homeworkPercent, 0) / students.length);
  const groupScore = Math.round(students.reduce((sum, item) => sum + item.scorePercent, 0) / students.length);
  const risks = students.filter((item) => item.risk !== "low").length;
  return `
    <section class="teacher-grid">
      <div class="screen-title full-width">
        <div><p class="eyebrow">кабинет преподавателя v0.2</p><h2>${COURSE.group}</h2></div>
        <button class="primary-button" data-view="live" type="button">${icon("▶")} Открыть Live lesson</button>
      </div>
      <div class="metric-strip full-width">
        ${metric("Студенты", students.length)}
        ${metric("Домашка", `${groupHomework}%`)}
        ${metric("Средний score", `${groupScore}%`)}
        ${metric("Risk signals", risks)}
      </div>
      <div class="content-panel teacher-table-panel">
        <div class="section-heading">
          <div><p class="eyebrow">group monitor</p><h3>Домашка, score, риск и next action</h3></div>
          ${pill("Revizor-ready", "green")}
        </div>
        <div class="student-table" role="table" aria-label="Студенты группы">
          <div role="row" class="table-head"><span>Студент</span><span>Домашка</span><span>Score</span><span>Урок</span><span>Риск / действие</span></div>
          ${students.map((item) => `
            <button role="row" class="student-row ${item.id === selected.id ? "selected" : ""}" data-student="${item.id}" type="button">
              <strong>${item.name}</strong>
              ${tableProgress(item.homeworkPercent)}
              ${tableProgress(item.scorePercent)}
              <span>${lessonShort(item.lessonId)}</span>
              <span class="risk ${item.risk}">${item.commonMistake}<small>${item.nextAction}</small></span>
            </button>`).join("")}
        </div>
      </div>
      <div class="content-panel">
        <div class="section-heading">
          <div><p class="eyebrow">student detail</p><h3>${selected.name}</h3></div>
          ${pill(selected.risk, selected.risk === "high" ? "danger" : selected.risk === "medium" ? "amber" : "green")}
        </div>
        <div class="detail-grid">
          <span>Active lesson</span><strong>${lessonTitle(selected.lessonId)}</strong>
          <span>Last activity</span><strong>${selected.lastActivity}</strong>
          <span>Typical mistake</span><strong>${selected.commonMistake}</strong>
          <span>Next action</span><strong>${selected.nextAction}</strong>
        </div>
        <div class="teacher-actions">
          <button class="ghost-button" type="button">${icon(">")} Reminder</button>
          <button class="ghost-button" type="button">${icon("+")} Extra practice</button>
        </div>
      </div>
      <div class="content-panel">
        <div class="section-heading"><div><p class="eyebrow">analytics</p><h3>NPS, retention, depth</h3></div>${icon("BI")}</div>
        <div class="analytics-grid">
          ${analyticsMetric("NPS pulse", "+54", "2 negative comments need review")}
          ${analyticsMetric("Retention risk", "2", "students with declining activity")}
          ${analyticsMetric("Homework depth", `${groupHomework}%`, "checked exercises / assigned")}
          ${analyticsMetric("Usage depth", "4.2", "avg sessions per week")}
        </div>
      </div>
      <div class="content-panel full-width">
        <div class="section-heading"><div><p class="eyebrow">integration queue</p><h3>API-ready service signals</h3></div>${pill("mock adapters", "blue")}</div>
        <div class="integration-grid">
          ${integrations.map(([name, purpose, status, endpoint]) => `
            <div class="integration-card"><span class="dot ${status}"></span><strong>${name}</strong><span>${purpose}</span><code>${endpoint}</code></div>`).join("")}
        </div>
      </div>
    </section>`;
}

function lessonShort(lessonId) {
  const lesson = lessons.find((item) => item.id === lessonId);
  return lesson ? `L${lesson.number}` : "-";
}

function lessonTitle(lessonId) {
  const lesson = lessons.find((item) => item.id === lessonId);
  return lesson ? lesson.title : "-";
}

function tableProgress(value) {
  return `<span class="table-progress">${progressTrack(value)}<strong>${value}%</strong></span>`;
}

function analyticsMetric(label, value, note) {
  return `<div class="analytics-card"><span>${label}</span><strong>${value}</strong><small>${note}</small></div>`;
}

function liveLesson() {
  const lesson = selectedLesson();
  const liveItems = lessonExercises(lesson.id);
  const active = liveItems.find((item) => item.id === state.liveExerciseId) || liveItems[0];
  const stage = lessonCompletion(lesson.id) < 50 ? "Classwork" : "Homework handoff";
  return `
    <section class="live-grid">
      <div class="screen-title full-width">
        <div><p class="eyebrow">Live Lesson Mode v0.2</p><h2>${lesson.title}</h2></div>
        <button class="${state.live ? "primary-button live-on" : "ghost-button"}" data-live-toggle type="button">${icon("L")} ${state.live ? "Live sync on" : "Live sync off"}</button>
      </div>
      <div class="shared-space">
        <div class="shared-toolbar">
          ${pill("shared learning space", "green")}
          ${pill(stage, "blue")}
          ${pill("co-presence", "amber")}
        </div>
        <div class="lesson-canvas">
          <div class="teacher-cursor">${icon("↖")} Teacher</div>
          <div class="student-cursor">${icon("↖")} Anna</div>
          <p class="eyebrow">${active.section}</p>
          <h3>${active.title}</h3>
          <p>${active.instructionRu}</p>
          <strong>${active.prompt}</strong>
          <div class="live-answer-demo"><span>Student input visible to teacher</span><strong>${sampleLiveAnswer(active)}</strong></div>
        </div>
      </div>
      <div class="content-panel">
        <div class="section-heading"><div><p class="eyebrow">teacher control</p><h3>Управление заданием</h3></div>${icon("□")}</div>
        <div class="exercise-control-list">
          ${liveItems.map((item) => `<button class="control-row ${item.id === active.id ? "selected" : ""}" data-focus-exercise="${item.id}" type="button"><span>${item.title}</span><small>${item.type}</small></button>`).join("")}
        </div>
      </div>
      <div class="content-panel">
        <div class="section-heading"><div><p class="eyebrow">real-time group</p><h3>Ответы студентов</h3></div>${icon("G")}</div>
        <ul class="live-student-list">
          ${students.map((student, index) => `<li>${icon(index < 3 ? "✓" : "○")}<strong>${student.name}</strong><span>${index < 3 ? "answered" : "thinking"}</span></li>`).join("")}
        </ul>
      </div>
      <div class="content-panel">
        <div class="section-heading"><div><p class="eyebrow">lesson pacing</p><h3>Переход classwork -> homework</h3></div>${icon("→")}</div>
        <div class="pacing-steps">
          ${["Lead-in", "Controlled practice", "Freer speaking", "Homework handoff"].map((step, index) => `<span class="${index <= 1 ? "done" : ""}">${step}</span>`).join("")}
        </div>
      </div>
      <div class="content-panel">
        <div class="section-heading"><div><p class="eyebrow">speaking widget</p><h3>External API contract</h3></div>${icon("API")}</div>
        <div class="api-contract"><code>POST /api/speaking-sessions</code><code>student_id</code><code>lesson_id</code><code>prompt_id</code><code>result_url</code><code>teacher_review_status</code></div>
      </div>
    </section>`;
}

function sampleLiveAnswer(exercise) {
  if (exercise.type === "word-order" || exercise.type === "drag-drop") return Array.isArray(exercise.words) ? exercise.words.join(" ") : "I'm from Minsk";
  if (exercise.type === "matching") return "Belarus -> Minsk";
  if (exercise.type === "short-writing") return "I'm Anna. I'm from Minsk.";
  return answerText(exercise.correctAnswer);
}

function methodologistDashboard() {
  const statusFilter = state.selectedContentStatus;
  const visibleContent = statusFilter === "all" ? contentItems : contentItems.filter((item) => item[2] === statusFilter);
  return `
    <section class="methodologist-grid">
      <div class="screen-title full-width">
        <div><p class="eyebrow">кабинет методиста v0.2</p><h2>Unit 1 content operations</h2></div>
        <button class="primary-button" type="button">${icon("+")} Create exercise draft</button>
      </div>
      <div class="content-panel structure-panel">
        <div class="section-heading"><div><p class="eyebrow">course structure</p><h3>Unit -> 6 Lessons -> Sections -> Exercises</h3></div>${icon("⇄")}</div>
        <div class="content-tree">
          <div class="tree-unit">
            <strong>${COURSE.unitTitle}</strong>
            ${lessons.map((lesson) => `<span>${lesson.number}. ${lesson.title} - ${lesson.sections.length} sections / ${lessonExercises(lesson.id).length} exercises</span>`).join("")}
          </div>
        </div>
      </div>
      <div class="content-panel">
        <div class="section-heading"><div><p class="eyebrow">teacher book</p><h3>Методические заметки</h3></div>${icon("T")}</div>
        <ul class="clean-list">
          ${lessons.map((lesson) => `<li><span class="dot ready"></span><span><strong>L${lesson.number}</strong> ${lesson.teacherNotes}</span></li>`).join("")}
        </ul>
      </div>
      <div class="content-panel full-width">
        <div class="section-heading"><div><p class="eyebrow">content workflow</p><h3>Draft / review / approved / archived</h3></div>${icon("≡")}</div>
        <div class="status-filter">
          ${["all", "draft", "review", "approved", "archived"].map((status) => `<button class="${statusFilter === status ? "selected" : ""}" data-status-filter="${status}" type="button">${status}</button>`).join("")}
        </div>
        <div class="content-status-grid">
          ${visibleContent.map(([title, type, status, owner, tags]) => `
            <article class="status-row">
              <div><span class="tag ${status}">${status}</span><h4>${title}</h4><p>${type} - ${owner}</p></div>
              <div class="tag-cloud">${tags.split(", ").map((tag) => `<span>${tag}</span>`).join("")}</div>
            </article>`).join("")}
        </div>
      </div>
      <div class="content-panel">
        <div class="section-heading"><div><p class="eyebrow">exercise metadata</p><h3>${exercises.length} exercises</h3></div>${icon("#")}</div>
        <div class="exercise-metadata-list">
          ${exercises.map((exercise) => `<div class="metadata-row"><strong>${exercise.title}</strong><span>${exercise.type}</span><small>${exercise.section} / ${exercise.skill.join(", ")}</small></div>`).join("")}
        </div>
      </div>
      <div class="content-panel">
        <div class="section-heading"><div><p class="eyebrow">quality signals</p><h3>Материалы для ревизии</h3></div>${icon("BI")}</div>
        <div class="exercise-metadata-list">
          ${qualitySignals.map(([label, target, metric, status]) => `<div class="metadata-row"><strong>${label}</strong><span>${target}</span><small>${metric} / ${status}</small></div>`).join("")}
        </div>
      </div>
      <div class="content-panel full-width">
        <div class="section-heading"><div><p class="eyebrow">integration boundaries</p><h3>Adapters ready for real services</h3></div>${icon("DB")}</div>
        <div class="integration-grid">
          ${integrations.map(([name, purpose, status, endpoint]) => `<div class="integration-card"><span class="dot ${status}"></span><strong>${name}</strong><span>${purpose}</span><code>${endpoint}</code></div>`).join("")}
        </div>
      </div>
    </section>`;
}

function bindEvents() {
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });
  document.querySelectorAll("[data-lesson]").forEach((button) => {
    button.addEventListener("click", () => setLesson(button.dataset.lesson, button.dataset.openView || state.view));
  });
  document.querySelectorAll("[data-exercise-index]").forEach((button) => {
    button.addEventListener("click", () => {
      state.exerciseIndex = Number(button.dataset.exerciseIndex);
      const activeItems = lessonExercises(selectedLesson().id);
      const activeExercise = activeItems[state.exerciseIndex];
      if (activeExercise) {
        state.progress.selectedExerciseId = activeExercise.id;
        saveProgress();
      }
      render();
    });
  });
  document.querySelectorAll("[data-response]").forEach((button) => {
    button.addEventListener("click", () => {
      state.progress.responses[button.dataset.response] = button.dataset.value;
      saveProgress();
      render();
    });
  });
  document.querySelectorAll("[data-match]").forEach((select) => {
    select.addEventListener("change", () => {
      const id = select.dataset.match;
      state.progress.responses[id] = { ...(state.progress.responses[id] || {}), [select.dataset.left]: select.value };
      saveProgress();
      render();
    });
  });
  document.querySelectorAll("[data-add-word]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.addWord;
      state.progress.responses[id] = [...(state.progress.responses[id] || []), button.dataset.value];
      saveProgress();
      render();
    });
  });
  document.querySelectorAll("[data-remove-word]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.removeWord;
      const index = Number(button.dataset.wordIndex);
      state.progress.responses[id] = (state.progress.responses[id] || []).filter((_, itemIndex) => itemIndex !== index);
      saveProgress();
      render();
    });
  });
  document.querySelectorAll("[data-text]").forEach((input) => {
    input.addEventListener("input", () => {
      state.progress.responses[input.dataset.text] = input.value;
      saveProgress();
    });
  });
  document.querySelectorAll("[data-check]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.check;
      const exercise = exercises.find((item) => item.id === id);
      state.progress.attempts[id] = (state.progress.attempts[id] || 0) + 1;
      state.progress.results[id] = checkExercise(exercise, state.progress.responses[id]);
      saveProgress();
      render();
    });
  });
  document.querySelectorAll("[data-reset]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.reset;
      delete state.progress.responses[id];
      delete state.progress.results[id];
      saveProgress();
      render();
    });
  });
  document.querySelectorAll("[data-audio]").forEach((button) => {
    button.addEventListener("click", () => {
      const exercise = exercises.find((item) => item.id === button.dataset.audio);
      playAudio(exercise?.audioText);
    });
  });
  document.querySelectorAll("[data-live-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      state.live = !state.live;
      render();
    });
  });
  document.querySelectorAll("[data-focus-exercise]").forEach((button) => {
    button.addEventListener("click", () => {
      state.liveExerciseId = button.dataset.focusExercise;
      render();
    });
  });
  document.querySelectorAll("[data-student]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedStudentId = button.dataset.student;
      render();
    });
  });
  document.querySelectorAll("[data-status-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedContentStatus = button.dataset.statusFilter;
      render();
    });
  });
  document.querySelectorAll("[data-reset-progress]").forEach((button) => {
    button.addEventListener("click", () => {
      localStorage.removeItem(STORAGE_KEY);
      state.progress = defaultProgress();
      state.exerciseIndex = 0;
      render();
    });
  });
}

function playAudio(text) {
  if (!text || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.86;
  window.speechSynthesis.speak(utterance);
}

render();
