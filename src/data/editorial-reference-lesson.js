const photoSprite = "./assets/photos/editorial-reference/editorial-contact-sheet.png";

function photo(id, title, alt, col, row, type = "scene") {
  return { id, title, alt, src: photoSprite, col, row, type };
}

const editorialReferenceLesson = {
  lesson_id: "editorial_u1_l1_reference",
  route: "student-book-reference",
  unit_label: "Unit 1",
  lesson_label: "1A",
  title_en: "Nice to meet you",
  context_ru: "Взрослые впервые встречаются на мероприятии языкового клуба ULC.",
  outcome_ru:
    "После урока вы сможете поздороваться, представиться, спросить имя, город и профессию и закончить короткий разговор.",
  skill_labels: [
    "G: verb be - I / you",
    "V: greetings and personal information",
    "P: contractions and sentence stress",
  ],
  source_note:
    "Original ULC reference lesson. English File is used only as a structural benchmark for density and variety.",
  characters: [
    { id: "anna", name: "Anna", age: 29, city: "Minsk", job: "designer", photo_id: "anna-portrait" },
    { id: "leo", name: "Leo", age: 32, city: "Warsaw", job: "product manager", photo_id: "leo-portrait" },
    { id: "maya", name: "Maya", age: 27, city: "Vilnius", job: "teacher", photo_id: "maya-portrait" },
  ],
  assets: {
    meeting_wide: {
      id: "meeting-wide",
      title: "Anna and Leo meet",
      src: "./src/assets/photos/editorial-reference/meeting-wide.png",
      alt: "Anna and Leo talking at a language club table.",
      type: "wide",
    },
    photos: [
      photo("club-wide", "Language club event", "Adults talking in a modern language club.", 1, 1, "wide"),
      photo("anna-portrait", "Anna", "Portrait of Anna.", 2, 1, "portrait"),
      photo("leo-portrait", "Leo", "Portrait of Leo.", 3, 1, "portrait"),
      photo("maya-portrait", "Maya", "Portrait of Maya.", 4, 1, "portrait"),
      photo("listening-1", "Anna arrives", "Anna arrives at the language club.", 1, 2),
      photo("listening-2", "Anna meets Leo", "Anna and Leo meet for the first time.", 2, 2),
      photo("listening-3", "Maya joins", "Maya joins Anna and Leo.", 3, 2),
      photo("listening-4", "City and work", "The group talks about city and work.", 4, 2),
      photo("listening-5", "Contact details", "Anna and Leo exchange contact details.", 1, 3),
      photo("speaking-1", "Language event", "Pair speaking prompt at a language event.", 2, 3),
      photo("speaking-2", "Coworking chat", "Pair speaking prompt in a coworking cafe.", 3, 3),
      photo("speaking-3", "Cafe table", "Pair speaking prompt at a cafe table.", 4, 3),
    ],
  },
  sections: [
    {
      id: "vocabulary",
      number: "1",
      label: "VOCABULARY",
      title_ru: "Meeting people",
      aim_ru: "Познакомьтесь с персонажами и выберите фразы для первой встречи.",
      photos: ["club-wide", "anna-portrait", "leo-portrait", "maya-portrait"],
      micro_activities: [
        {
          id: "vocab-a",
          letter: "a",
          type: "photo_choice",
          instruction_ru: "Посмотрите на фото. Какая фраза лучше начинает разговор?",
          prompt_en: "You meet a new person at a language club.",
          options_en: ["Hi, I'm Anna.", "Good night.", "I'm a coffee."],
          correct_en: "Hi, I'm Anna.",
        },
        {
          id: "vocab-b",
          letter: "b",
          type: "matching",
          instruction_ru: "Соедините приветствие и ответ.",
          pairs: [
            ["Nice to meet you.", "Nice to meet you, too."],
            ["What's your name?", "I'm Leo."],
            ["Where are you from?", "I'm from Minsk."],
          ],
        },
        {
          id: "vocab-c",
          letter: "c",
          type: "audio_placeholder",
          instruction_ru: "Прослушайте и проверьте ответы.",
          script_en: "Hi, I'm Anna. Nice to meet you.",
        },
      ],
    },
    {
      id: "pronunciation",
      number: "2",
      label: "PRONUNCIATION",
      title_ru: "Short forms and sentence stress",
      aim_ru: "Потренируйте короткие формы и ударение в первой реплике.",
      micro_activities: [
        {
          id: "pron-a",
          letter: "a",
          type: "pronunciation_sort",
          instruction_ru: "Разложите фразы в две колонки.",
          columns: [
            { title: "Short", items: ["I'm Anna.", "What's your name?", "You're Leo."] },
            { title: "Full", items: ["I am Anna.", "What is your name?", "You are Leo."] },
          ],
        },
        {
          id: "pron-b",
          letter: "b",
          type: "listen_repeat",
          instruction_ru: "Прослушайте, повторите и отметьте ударное слово.",
          phrases_en: ["I'm Anna.", "Nice to meet you.", "Where are you from?"],
        },
      ],
    },
    {
      id: "grammar",
      number: "3",
      label: "GRAMMAR",
      title_ru: "verb be in a real conversation",
      aim_ru: "Вставьте слова в диалог и соберите маленькую grammar chart.",
      hero_photo: "meeting-wide",
      dialogue: [
        ["Anna", "Hi, I'm Anna. Are you new here?"],
        ["Leo", "Yes, I am. I'm Leo."],
        ["Anna", "Nice to meet you, Leo."],
        ["Leo", "Nice to meet you, too."],
        ["Anna", "Are you from Minsk?"],
        ["Leo", "No, I'm from Warsaw."],
      ],
      word_bank: ["I'm", "Are", "am", "from", "you"],
      micro_activities: [
        {
          id: "grammar-a",
          letter: "a",
          type: "word_bank",
          instruction_ru: "Вставьте слова из word bank в пропуски диалога.",
          gaps_en: ["Hi, ___ Anna.", "___ you new here?", "Yes, I ___.", "I'm ___ Warsaw."],
        },
        {
          id: "grammar-b",
          letter: "b",
          type: "grammar_chart",
          instruction_ru: "Заполните chart короткими формами.",
          rows: [
            ["I am", "I'm"],
            ["you are", "you're"],
            ["Are you from Minsk?", "Yes, I am. / No, I'm not."],
          ],
        },
        {
          id: "grammar-c",
          letter: "c",
          type: "multiple_choice",
          instruction_ru: "Выберите правильную форму.",
          items: [
            ["___ Leo.", ["I'm", "Are", "You"], "I'm"],
            ["___ you from Warsaw?", ["Am", "Are", "Is"], "Are"],
            ["No, I'm ___.", ["not", "no", "am"], "not"],
          ],
        },
      ],
    },
    {
      id: "reading-listening",
      number: "4",
      label: "READING & LISTENING",
      title_ru: "A language club conversation",
      aim_ru: "Прочитайте, прослушайте и восстановите порядок событий.",
      photos: ["listening-1", "listening-2", "listening-3", "listening-4", "listening-5"],
      transcript_en:
        "Anna arrives at the ULC language club. She meets Leo. Maya joins them. They talk about their cities and jobs. At the end, Anna and Leo exchange contact details.",
      micro_activities: [
        {
          id: "listen-a",
          letter: "a",
          type: "listen_number",
          instruction_ru: "Расставьте фото в правильном порядке.",
        },
        {
          id: "listen-b",
          letter: "b",
          type: "short_answer",
          instruction_ru: "Ответьте коротко.",
          questions_en: ["Who meets Leo?", "Where is Leo from?", "Who joins the conversation?", "What do they exchange?"],
        },
        {
          id: "listen-c",
          letter: "c",
          type: "inline_gap",
          instruction_ru: "Прослушайте ещё раз и заполните пропуски.",
          gaps_en: ["I'm ___ Warsaw.", "Nice to meet you, ___.", "What's your ___?"],
        },
      ],
    },
    {
      id: "speaking",
      number: "5",
      label: "SPEAKING",
      title_ru: "First meeting role-play",
      aim_ru: "Проведите короткий разговор с партнёром и поменяйтесь ролями.",
      photos: ["speaking-1", "speaking-2", "speaking-3", "club-wide"],
      questions_en: ["What's your name?", "Where are you from?", "What do you do?", "Are you new here?"],
      role_cards: [
        { role: "A", name: "Anna", city: "Minsk", job: "designer", missing: "Leo's city and job" },
        { role: "B", name: "Leo", city: "Warsaw", job: "product manager", missing: "Anna's city and job" },
      ],
    },
    {
      id: "profile",
      number: "6",
      label: "YOUR PROFILE",
      title_ru: "Profile card",
      aim_ru: "Заполните карточку, чтобы использовать её в role-play.",
      fields: ["First name", "Surname", "City", "Country", "Job", "Email"],
    },
    {
      id: "phrases",
      number: "7",
      label: "USEFUL PHRASES",
      title_ru: "Keep these phrases",
      aim_ru: "Сохраните фразы, которые помогут начать разговор.",
      phrases_en: [
        "Hello.",
        "Hi, I'm...",
        "What's your name?",
        "Where are you from?",
        "What do you do?",
        "Nice to meet you.",
        "Nice to meet you, too.",
        "See you.",
        "Have a nice day.",
      ],
    },
  ],
  review: {
    title: "REVISE & CHECK",
    tabs: [
      { label: "Grammar", score: "3 / 4", items: ["I am -> I'm", "you are -> you're", "Are you...?"] },
      { label: "Vocabulary", score: "4 / 4", items: ["Hello", "city", "job", "email"] },
      { label: "Useful phrases", score: "Ready", items: ["Nice to meet you.", "See you."] },
    ],
    personal_questions: ["What's your name?", "Where are you from?"],
  },
};

export default editorialReferenceLesson;
