const commonNormalizationRules = {
  ignore_case: true,
  trim_whitespace: true,
  collapse_multiple_spaces: true,
  ignore_terminal_punctuation: true,
  normalize_apostrophes: true,
  accept_contractions: true,
  accepted_contraction_pairs: [
    ["I am", "I'm"],
    ["you are", "you're"],
    ["what is", "what's"],
    ["I am not", "I'm not"],
  ],
  allow_period_optional: true,
  allow_question_mark_optional: true,
};

const beginnerUnit1 = {
  unit: {
    unit_id: "beginner_u1",
    course_id: "beginner_english_for_adults",
    level: "Beginner",
    title: "Unit 1. Nice to meet you",
    title_ru: "Unit 1. Знакомство",
    goal_ru:
      "Студент Beginner может представиться, назвать имя, страну/город, профессию, телефон/email, задать простые вопросы, понять короткий диалог знакомства и поддержать минимальный разговор при первой встрече.",
    status: "v0_2_data_preparation",
    content_policy: {
      original_ulc_content: true,
      no_coursebook_copying:
        "Do not copy English File / New English File texts, tasks, dialogues, characters, illustrations, audio, workbook pages, or design.",
    },
    language_policy: {
      student_instructions: "ru",
      learning_content: "en",
      beginner_explanations: "ru",
    },
    lessons: [
      "beg_u1_l1",
      "beg_u1_l2",
      "beg_u1_l3",
      "beg_u1_l4",
      "beg_u1_l5",
      "beg_u1_l6",
    ],
    exercise_ids: [
      "beg_u1_l1_ex1",
      "beg_u1_l1_ex2",
      "beg_u1_l1_ex3",
      "beg_u1_l1_ex4",
      "beg_u1_l2_ex1",
      "beg_u1_l2_ex2",
      "beg_u1_l2_ex3",
      "beg_u1_l2_ex4",
      "beg_u1_l3_ex1",
      "beg_u1_l3_ex2",
      "beg_u1_l3_ex3",
      "beg_u1_l3_ex4",
      "beg_u1_l4_ex1",
      "beg_u1_l4_ex2",
      "beg_u1_l4_ex3",
      "beg_u1_l4_ex4",
      "beg_u1_l5_ex1",
      "beg_u1_l5_ex2",
      "beg_u1_l5_ex3",
      "beg_u1_l5_ex4",
      "beg_u1_l6_ex1",
      "beg_u1_l6_ex2",
      "beg_u1_l6_ex3",
      "beg_u1_l6_ex4",
    ],
    homework_task_ids: [
      "beg_u1_l1_hw",
      "beg_u1_l2_hw",
      "beg_u1_l3_hw",
      "beg_u1_l4_hw",
      "beg_u1_l5_hw",
      "beg_u1_l6_hw",
    ],
    speaking_widget_placeholder: {
      integration_id: "speaking_widget_unit_1",
      status: "placeholder_only",
      purpose:
        "Future external speaking practice for short self-introduction and first-meeting role-play.",
      expected_payload: {
        unit_id: "beginner_u1",
        lesson_id: "dynamic",
        speaking_outcome_id: "dynamic",
        target_phrases: [],
      },
    },
    analytics_tags: [
      "unit_1_first_meeting",
      "beginner_speaking_first",
      "homework_completion",
      "teacher_risk_signals",
    ],
  },

  lessons: [
    {
      lesson_id: "beg_u1_l1",
      unit_id: "beginner_u1",
      lesson_number: 1,
      title: "Lesson 1: Hello! I'm...",
      lesson_goal_ru:
        "Студент понимает и использует базовые приветствия, называет имя и реагирует на знакомство.",
      speaking_outcome: {
        outcome_id: "beg_u1_l1_outcome",
        lesson_id: "beg_u1_l1",
        can_do_statement_ru:
          "Студент может поздороваться, назвать имя и сказать, что ему приятно познакомиться.",
        sample_output_en: "Hello. I'm Anna. Nice to meet you.",
        assessment_signals: [
          "Uses Hello/Hi appropriately",
          "Uses I'm + name",
          "Responds to Nice to meet you",
        ],
        speaking_activity_ids: ["beg_u1_l1_speak_1"],
      },
      target_vocabulary: ["hello", "hi", "good morning", "good evening", "name", "nice", "meet", "too"],
      target_grammar: ["I am ...", "I'm ...", "Nice to meet you.", "Nice to meet you, too."],
      pronunciation_focus: [
        "Sentence stress in I'm Anna.",
        "Linked rhythm in Nice to meet you.",
        "Clear final sound in meet.",
      ],
      listening_dialogue: "beg_u1_l1_media_dialogue",
      reading_writing_support: ["Read name cards.", "Write one mini-introduction: Hello. I'm ..."],
      sections: [
        section("beg_u1_l1_sec_lead", "beg_u1_l1", "lead_in", "Приветствие", "Выберите, какая фраза подходит для начала знакомства.", "Activate greeting chunks.", ["Hello", "Hi", "Good evening"], "5 min", "classwork"),
        section("beg_u1_l1_sec_input", "beg_u1_l1", "language_input", "Языковой фокус", "Повторите фразы и обратите внимание на I'm.", "Introduce I am / I'm as chunks.", ["I'm Anna.", "Nice to meet you."], "8 min", "classwork"),
        section("beg_u1_l1_sec_practice", "beg_u1_l1", "controlled_practice", "Практика", "Выполните короткие задания и проверьте ответы.", "Stabilize form before speaking.", ["Hello. I'm Dima.", "Nice to meet you, too."], "12 min", "both"),
        section("beg_u1_l1_sec_speaking", "beg_u1_l1", "freer_speaking", "Говорение", "Поздоровайтесь и назовите имя трём людям.", "Move from form to short real exchange.", ["Hello. I'm ...", "Nice to meet you."], "12 min", "classwork"),
      ],
      classwork_flow: [
        "Lead-in with greeting cards.",
        "Listen and repeat the short dialogue.",
        "Focus on I am / I'm as chunks.",
        "Controlled practice with greeting replies.",
        "Pair speaking with name exchange.",
      ],
      homework_task_ids: ["beg_u1_l1_hw"],
      exercise_ids: ["beg_u1_l1_ex1", "beg_u1_l1_ex2", "beg_u1_l1_ex3", "beg_u1_l1_ex4"],
      teacher_notes: [
        teacherNote("beg_u1_l1_tn1", "beg_u1_l1", "lesson", "Keep pace slow and confident; avoid a full explanation of be.", "P1"),
        teacherNote("beg_u1_l1_tn2", "beg_u1_l1", "speaking", "Drill chunks as whole phrases before showing grammar.", "P2"),
      ],
      typical_mistakes: [
        mistake("beg_u1_l1_m1", "beg_u1_l1", "I Anna", "I'm Anna.", "После I нужен am: I am Anna или I'm Anna.", ["beg_u1_l1_ex1"], ["missing_be"]),
        mistake("beg_u1_l1_m2", "beg_u1_l1", "Nice meet you", "Nice to meet you.", "В этой фразе нужен to: Nice to meet you.", ["beg_u1_l1_ex2"], ["missing_to"]),
      ],
      ai_explanations: [
        ai("beg_u1_l1_ai1", "missing_be", "В английском нужно маленькое слово am: I am Anna или коротко I'm Anna.", "I'm Anna."),
        ai("beg_u1_l1_ai2", "missing_to", "Запоминайте фразу целиком: Nice to meet you.", "Nice to meet you."),
      ],
      analytics_tags: ["lesson_1_greetings", "missing_be", "missing_to", "speaking_intro"],
      acceptance_criteria: [
        "Student chooses the correct reply to Nice to meet you.",
        "Student completes I'm ... with their name.",
        "Student can say a 2-line introduction without reading every word.",
      ],
    },
    {
      lesson_id: "beg_u1_l2",
      unit_id: "beginner_u1",
      lesson_number: 2,
      title: "Lesson 2: Where are you from?",
      lesson_goal_ru: "Студент спрашивает и отвечает, откуда он или другой человек.",
      speaking_outcome: {
        outcome_id: "beg_u1_l2_outcome",
        lesson_id: "beg_u1_l2",
        can_do_statement_ru: "Студент может спросить и ответить, из какого он города или страны.",
        sample_output_en: "Where are you from? I'm from Minsk.",
        assessment_signals: ["Asks Where are you from?", "Answers with I'm from ...", "Recognizes city/country in dialogue"],
        speaking_activity_ids: ["beg_u1_l2_speak_1"],
      },
      target_vocabulary: ["country", "city", "Belarus", "Poland", "Lithuania", "Minsk", "Warsaw", "Vilnius", "from"],
      target_grammar: ["Where are you from?", "I'm from ...", "Are you from ...?", "Yes, I am.", "No, I'm not."],
      pronunciation_focus: ["Weak form of are in Where are you from?", "Stress on place name: I'm from Minsk."],
      listening_dialogue: "beg_u1_l2_media_dialogue",
      reading_writing_support: ["Read simple profile cards with name and city.", "Write one profile line: I'm from ..."],
      sections: [
        section("beg_u1_l2_sec_lead", "beg_u1_l2", "lead_in", "Город и страна", "Посмотрите на карточки городов и стран.", "Activate place vocabulary.", ["Minsk", "Belarus", "Warsaw"], "5 min", "classwork"),
        section("beg_u1_l2_sec_input", "beg_u1_l2", "language_input", "Вопрос Where are you from?", "Повторите вопрос как одну фразу.", "Build question chunk before analysis.", ["Where are you from?", "I'm from Minsk."], "8 min", "classwork"),
        section("beg_u1_l2_sec_practice", "beg_u1_l2", "controlled_practice", "Порядок слов", "Соберите вопрос и ответ.", "Practice question order.", ["Where / are / you / from"], "12 min", "both"),
        section("beg_u1_l2_sec_speaking", "beg_u1_l2", "freer_speaking", "Мини-интервью", "Спросите 4 людей: Where are you from?", "Controlled repetition in real pair work.", ["Where are you from?", "I'm from ..."], "12 min", "classwork"),
      ],
      classwork_flow: [
        "Lead-in with city/country cards.",
        "Listen for city names in the dialogue.",
        "Focus on question order.",
        "Controlled practice with gap-fill and word order.",
        "Pair speaking: ask and answer with four classmates.",
      ],
      homework_task_ids: ["beg_u1_l2_hw"],
      exercise_ids: ["beg_u1_l2_ex1", "beg_u1_l2_ex2", "beg_u1_l2_ex3", "beg_u1_l2_ex4"],
      teacher_notes: [
        teacherNote("beg_u1_l2_tn1", "beg_u1_l2", "lesson", "Drill the question as one sound group before showing word order.", "P1"),
        teacherNote("beg_u1_l2_tn2", "beg_u1_l2", "lesson", "Keep he/she partner-introduction as optional teacher stretch only.", "P2"),
      ],
      typical_mistakes: [
        mistake("beg_u1_l2_m1", "beg_u1_l2", "Where you from?", "Where are you from?", "В вопросе нужно are: Where are you from?", ["beg_u1_l2_ex2"], ["question_order"]),
        mistake("beg_u1_l2_m2", "beg_u1_l2", "I from Minsk.", "I'm from Minsk.", "После I нужен am: I am from Minsk или I'm from Minsk.", ["beg_u1_l2_ex1"], ["missing_be"]),
      ],
      ai_explanations: [
        ai("beg_u1_l2_ai1", "question_order", "В вопросе порядок такой: Where + are + you + from?", "Where are you from?"),
        ai("beg_u1_l2_ai2", "missing_be", "В ответе нужен am: I am from Minsk или I'm from Minsk.", "I'm from Minsk."),
      ],
      analytics_tags: ["lesson_2_origin", "question_order", "from_phrase", "city_country"],
      acceptance_criteria: [
        "Student asks Where are you from?",
        "Student answers with I'm from ...",
        "Student identifies city/country in a short dialogue.",
      ],
    },
    {
      lesson_id: "beg_u1_l3",
      unit_id: "beginner_u1",
      lesson_number: 3,
      title: "Lesson 3: What's your job?",
      lesson_goal_ru: "Студент называет простую профессию и спрашивает о профессии собеседника.",
      speaking_outcome: {
        outcome_id: "beg_u1_l3_outcome",
        lesson_id: "beg_u1_l3",
        can_do_statement_ru: "Студент может назвать профессию и спросить о профессии собеседника.",
        sample_output_en: "I'm a manager. What's your job?",
        assessment_signals: ["Uses I'm a/an + job", "Asks What's your job?", "Chooses a/an in controlled examples"],
        speaking_activity_ids: ["beg_u1_l3_speak_1"],
      },
      target_vocabulary: ["manager", "teacher", "driver", "doctor", "student", "designer", "job", "work"],
      target_grammar: ["I'm a/an ...", "What's your job?", "Are you a/an ...?"],
      pronunciation_focus: ["Stress in manager, designer.", "Natural rhythm: What's your job?"],
      listening_dialogue: "beg_u1_l3_media_dialogue",
      reading_writing_support: ["Read simple job badges.", "Write: I'm a/an ... I'm from ..."],
      sections: [
        section("beg_u1_l3_sec_lead", "beg_u1_l3", "lead_in", "Профессии", "Выберите знакомые профессии.", "Introduce adult-relevant job words.", ["manager", "teacher", "driver"], "5 min", "classwork"),
        section("beg_u1_l3_sec_input", "beg_u1_l3", "language_input", "I'm a/an ...", "Повторите фразы с профессиями.", "Introduce a/an without over-explaining.", ["I'm a manager.", "I'm an engineer."], "8 min", "classwork"),
        section("beg_u1_l3_sec_practice", "beg_u1_l3", "controlled_practice", "a или an", "Выберите a или an.", "Practice article before job nouns.", ["I'm ___ designer."], "12 min", "both"),
        section("beg_u1_l3_sec_speaking", "beg_u1_l3", "freer_speaking", "Мини-нетворкинг", "Спросите имя, город и профессию.", "Combine lessons 1-3 in speaking.", ["What's your job?", "I'm a manager."], "12 min", "classwork"),
      ],
      classwork_flow: [
        "Lead-in with simple job cards.",
        "Vocabulary input with 6 core jobs and optional student job support.",
        "Grammar focus on a/an as a practical pattern.",
        "Listening: identify job and city.",
        "Mini-networking speaking task.",
      ],
      homework_task_ids: ["beg_u1_l3_hw"],
      exercise_ids: ["beg_u1_l3_ex1", "beg_u1_l3_ex2", "beg_u1_l3_ex3", "beg_u1_l3_ex4"],
      teacher_notes: [
        teacherNote("beg_u1_l3_tn1", "beg_u1_l3", "lesson", "Prioritize 5-6 core jobs; add personal jobs only with support.", "P2"),
        teacherNote("beg_u1_l3_tn2", "beg_u1_l3", "exercise", "Correct a/an gently; speaking confidence remains the main goal.", "P2"),
      ],
      typical_mistakes: [
        mistake("beg_u1_l3_m1", "beg_u1_l3", "I'm manager.", "I'm a manager.", "Перед профессией нужен a или an.", ["beg_u1_l3_ex1"], ["article_missing"]),
        mistake("beg_u1_l3_m2", "beg_u1_l3", "What your job?", "What's your job?", "В вопросе нужен is в короткой форме: What's your job?", ["beg_u1_l3_ex2"], ["missing_is"]),
      ],
      ai_explanations: [
        ai("beg_u1_l3_ai1", "article_missing", "Перед профессией в единственном числе нужен a или an: I'm a manager.", "I'm a manager."),
        ai("beg_u1_l3_ai2", "missing_is", "What's = What is. В вопросе нужна форма is.", "What's your job?"),
      ],
      analytics_tags: ["lesson_3_jobs", "article_a_an", "job_question", "adult_relevance"],
      acceptance_criteria: [
        "Student uses I'm a/an ... with at least one job.",
        "Student asks What's your job?",
        "Student can make a 3-line oral profile.",
      ],
    },
    {
      lesson_id: "beg_u1_l4",
      unit_id: "beginner_u1",
      lesson_number: 4,
      title: "Lesson 4: Numbers, Phone Numbers and Spelling",
      lesson_goal_ru:
        "Студент диктует и записывает имя, фамилию, номер телефона и простой email.",
      production_scope: {
        included: [
          "numbers needed for phone numbers",
          "spelling first name and last name",
          "saying and writing a simple email",
          "basic email symbols: @ and dot",
        ],
        excluded: [
          "dates",
          "ordinal numbers",
          "prices",
          "years",
          "large numbers",
          "complex mathematical operations",
          "extended symbol vocabulary",
          "parallel grammar topics",
        ],
      },
      speaking_outcome: {
        outcome_id: "beg_u1_l4_outcome",
        lesson_id: "beg_u1_l4",
        can_do_statement_ru:
          "Студент может продиктовать и записать имя, фамилию, номер телефона и простой email.",
        sample_output_en: "My name is Anna Kovaleva. My phone number is 29 14 08. My email is anna dot k at example dot com.",
        assessment_signals: ["Spells first/last name", "Says a short phone number", "Says @ and dot in a simple email"],
        speaking_activity_ids: ["beg_u1_l4_speak_1"],
      },
      target_vocabulary: ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "phone number", "email", "at", "dot", "spell", "first name", "last name"],
      target_grammar: ["My phone number is ...", "My email is ...", "How do you spell it?"],
      pronunciation_focus: ["Clear digit groups in phone numbers.", "Letter sounds for common name/email spelling.", "Pronouncing @ as at and . as dot."],
      listening_dialogue: "beg_u1_l4_media_dialogue",
      reading_writing_support: ["Read a simple contact card.", "Write first name, last name, phone, and email."],
      sections: [
        section("beg_u1_l4_sec_lead", "beg_u1_l4", "lead_in", "Контактная карточка", "Посмотрите на имя, телефон и email.", "Frame contact details without adding new topics.", ["first name", "last name", "phone number", "email"], "5 min", "classwork"),
        section("beg_u1_l4_sec_input", "beg_u1_l4", "language_input", "Телефон и email", "Повторите короткие фразы для контактов.", "Teach only practical contact chunks.", ["My phone number is ...", "My email is ..."], "8 min", "classwork"),
        section("beg_u1_l4_sec_practice", "beg_u1_l4", "controlled_practice", "Запишите контакт", "Прослушайте mock-контакт и заполните поля.", "Controlled listening/type practice.", ["Anna Kovaleva", "29 14 08", "anna.k@example.com"], "12 min", "both"),
        section("beg_u1_l4_sec_speaking", "beg_u1_l4", "freer_speaking", "Продиктуйте контакт", "Продиктуйте имя, фамилию, телефон и email партнёру.", "Practical speaking output with scaffold.", ["My phone number is ...", "My email is ..."], "12 min", "classwork"),
      ],
      classwork_flow: [
        "Lead-in with simple contact card.",
        "Practice digits 0-9 in short phone groups.",
        "Practice spelling first and last name.",
        "Practice @ as at and . as dot in a simple email.",
        "Pair dictation with mock-safe contact details.",
      ],
      homework_task_ids: ["beg_u1_l4_hw"],
      exercise_ids: ["beg_u1_l4_ex1", "beg_u1_l4_ex2", "beg_u1_l4_ex3", "beg_u1_l4_ex4"],
      teacher_notes: [
        teacherNote("beg_u1_l4_tn1", "beg_u1_l4", "lesson", "Keep this lesson narrow: no dates, prices, years, big numbers, or extra symbols.", "P1"),
        teacherNote("beg_u1_l4_tn2", "beg_u1_l4", "homework", "Use mock contact details for privacy.", "P1"),
      ],
      typical_mistakes: [
        mistake("beg_u1_l4_m1", "beg_u1_l4", "My phone is 29 14 08.", "My phone number is 29 14 08.", "Так можно понять, но точнее: My phone number is ...", ["beg_u1_l4_ex2"], ["contact_chunk"]),
        mistake("beg_u1_l4_m2", "beg_u1_l4", "anna dog example dot com", "anna at example dot com", "Символ @ по-английски читается at.", ["beg_u1_l4_ex3"], ["email_symbol_at"]),
      ],
      ai_explanations: [
        ai("beg_u1_l4_ai1", "contact_chunk", "Для телефона используйте готовый chunk: My phone number is ...", "My phone number is 29 14 08."),
        ai("beg_u1_l4_ai2", "email_symbol_at", "Символ @ читается at, а точка в email - dot.", "anna at example dot com"),
      ],
      analytics_tags: ["lesson_4_contact_details", "phone_digits", "name_spelling", "email_at_dot", "scope_limited"],
      acceptance_criteria: [
        "Student writes a short phone number from dictation.",
        "Student spells first name and last name with support.",
        "Student says a simple email using at and dot.",
      ],
    },
    {
      lesson_id: "beg_u1_l5",
      unit_id: "beginner_u1",
      lesson_number: 5,
      title: "Lesson 5: Personal Information",
      lesson_goal_ru:
        "Студент объединяет имя, город/страна, профессию, телефон/email в короткую анкету и мини-разговор.",
      speaking_outcome: {
        outcome_id: "beg_u1_l5_outcome",
        lesson_id: "beg_u1_l5",
        can_do_statement_ru: "Студент может спросить и ответить на простые вопросы о личной информации.",
        sample_output_en: "What's your first name? Where are you from? What's your job?",
        assessment_signals: ["Asks 4 personal information questions", "Answers in short chunks", "Uses form as speaking support"],
        speaking_activity_ids: ["beg_u1_l5_speak_1"],
      },
      target_vocabulary: ["first name", "last name", "country", "city", "job", "phone number", "email"],
      target_grammar: ["What's your name?", "Where are you from?", "What's your job?", "What's your phone number?"],
      pronunciation_focus: ["Rising intonation in Are you from Minsk?", "Falling intonation in What's your job?"],
      listening_dialogue: "beg_u1_l5_media_dialogue",
      reading_writing_support: ["Read a simple registration form.", "Complete a personal information form.", "Write a 4-line personal profile."],
      sections: [
        section("beg_u1_l5_sec_lead", "beg_u1_l5", "lead_in", "Анкета", "Найдите поля в простой анкете.", "Use form fields as speaking support.", ["first name", "city", "job", "email"], "5 min", "classwork"),
        section("beg_u1_l5_sec_input", "beg_u1_l5", "language_input", "Вопросы анкеты", "Повторите вопросы для каждого поля.", "Review and connect Unit 1 questions.", ["What's your first name?", "What's your job?"], "8 min", "classwork"),
        section("beg_u1_l5_sec_practice", "beg_u1_l5", "controlled_practice", "Заполните форму", "Выберите правильный вопрос и заполните поле.", "Controlled form + question matching.", ["First name - What's your first name?"], "12 min", "both"),
        section("beg_u1_l5_sec_speaking", "beg_u1_l5", "freer_speaking", "Интервью", "Задайте вопросы партнёру и заполните карточку.", "Make form-filling a speaking task.", ["Where are you from?", "What's your phone number?"], "12 min", "classwork"),
      ],
      classwork_flow: [
        "Identify fields on a simple form.",
        "Review name, from, job, phone, and email questions.",
        "Listening: complete missing form details.",
        "Controlled question-field matching.",
        "Partner interview and short partner introduction.",
      ],
      homework_task_ids: ["beg_u1_l5_hw"],
      exercise_ids: ["beg_u1_l5_ex1", "beg_u1_l5_ex2", "beg_u1_l5_ex3", "beg_u1_l5_ex4"],
      teacher_notes: [
        teacherNote("beg_u1_l5_tn1", "beg_u1_l5", "lesson", "Keep the form as a speaking scaffold, not paperwork.", "P2"),
        teacherNote("beg_u1_l5_tn2", "beg_u1_l5", "homework", "Allow mock contact details for privacy.", "P2"),
      ],
      typical_mistakes: [
        mistake("beg_u1_l5_m1", "beg_u1_l5", "What your name?", "What's your name?", "В вопросе нужен is: What's your name?", ["beg_u1_l5_ex2"], ["missing_is"]),
        mistake("beg_u1_l5_m2", "beg_u1_l5", "I from Belarus, manager.", "I'm from Belarus. I'm a manager.", "Лучше сделать две короткие фразы.", ["beg_u1_l5_ex4"], ["sentence_chunks"]),
      ],
      ai_explanations: [
        ai("beg_u1_l5_ai1", "missing_is", "What's = What is. В вопросе нужна форма is.", "What's your name?"),
        ai("beg_u1_l5_ai2", "sentence_chunks", "Для Beginner лучше две короткие фразы: I'm from Belarus. I'm a manager.", "I'm from Belarus. I'm a manager."),
      ],
      analytics_tags: ["lesson_5_personal_info", "form_as_speaking_support", "question_review", "partner_interview"],
      acceptance_criteria: [
        "Student completes a simple personal information form.",
        "Student asks at least 4 personal information questions.",
        "Student can introduce a partner using form notes.",
      ],
    },
    {
      lesson_id: "beg_u1_l6",
      unit_id: "beginner_u1",
      lesson_number: 6,
      title: "Lesson 6: Practical English: Meeting a New Person",
      lesson_goal_ru: "Студент собирает материал Unit 1 в практический диалог первой встречи.",
      speaking_outcome: {
        outcome_id: "beg_u1_l6_outcome",
        lesson_id: "beg_u1_l6",
        can_do_statement_ru:
          "Студент может поддержать короткий разговор при первой встрече: имя, город/страна, профессия, контакт и вежливое завершение.",
        sample_output_en:
          "Hi. I'm Max. Nice to meet you. Where are you from? What's your job? How do you spell your email?",
        assessment_signals: ["Completes at least 6 dialogue turns", "Asks at least 3 Unit 1 questions", "Gives one contact detail"],
        speaking_activity_ids: ["beg_u1_l6_speak_1"],
      },
      target_vocabulary: ["review greetings", "review cities/countries", "review jobs", "phone number", "email", "Great", "Thanks", "See you"],
      target_grammar: ["I'm ...", "I'm from ...", "I'm a/an ...", "What's your ...?", "Where are you from?", "How do you spell it?"],
      pronunciation_focus: ["Conversation rhythm and turn-taking.", "Polite intonation in short replies.", "Clear chunking in Nice to meet you and See you."],
      listening_dialogue: "beg_u1_l6_media_dialogue",
      reading_writing_support: ["Read a model first-meeting dialogue.", "Complete missing chunks.", "Write a 6-line personal meeting dialogue."],
      sections: [
        section("beg_u1_l6_sec_lead", "beg_u1_l6", "lead_in", "Диалог по порядку", "Расположите реплики знакомства в правильном порядке.", "Activate Unit 1 dialogue flow.", ["Hi. I'm Max.", "Nice to meet you."], "5 min", "classwork"),
        section("beg_u1_l6_sec_input", "beg_u1_l6", "language_input", "Фразы первой встречи", "Повторите ключевые фразы Unit 1.", "Review chunks, not new grammar.", ["What about you?", "See you."], "8 min", "classwork"),
        section("beg_u1_l6_sec_practice", "beg_u1_l6", "controlled_practice", "Checkpoint", "Заполните пропуски в диалоге.", "Mixed controlled practice.", ["Where are you ___?", "What's your ___?"], "12 min", "both"),
        section("beg_u1_l6_sec_speaking", "beg_u1_l6", "freer_speaking", "Первая встреча", "Поговорите с новым человеком по карточке роли.", "Final practical speaking outcome.", ["Hi. I'm ...", "Where are you from?", "What's your job?"], "15 min", "classwork"),
      ],
      classwork_flow: [
        "Order dialogue cards.",
        "Listen for name, city, job, and contact.",
        "Complete missing dialogue chunks.",
        "Rehearse with natural pauses.",
        "Role-play meeting a new person with reduced support.",
      ],
      homework_task_ids: ["beg_u1_l6_hw"],
      exercise_ids: ["beg_u1_l6_ex1", "beg_u1_l6_ex2", "beg_u1_l6_ex3", "beg_u1_l6_ex4"],
      teacher_notes: [
        teacherNote("beg_u1_l6_tn1", "beg_u1_l6", "lesson", "This is practical consolidation, not a grammar test.", "P1"),
        teacherNote("beg_u1_l6_tn2", "beg_u1_l6", "speaking", "Allow phone/name spelling alternative if email is too difficult for weaker students.", "P2"),
      ],
      typical_mistakes: [
        mistake("beg_u1_l6_m1", "beg_u1_l6", "Where you from?", "Where are you from?", "Даже в живом диалоге нужен are.", ["beg_u1_l6_ex2"], ["question_order"]),
        mistake("beg_u1_l6_m2", "beg_u1_l6", "I'm a Minsk.", "I'm from Minsk.", "Minsk - город. Для города используем from.", ["beg_u1_l6_ex4"], ["from_vs_job"]),
      ],
      ai_explanations: [
        ai("beg_u1_l6_ai1", "question_order", "В вопросе Where are you from? слово are обязательно.", "Where are you from?"),
        ai("beg_u1_l6_ai2", "from_vs_job", "Для города используем from: I'm from Minsk. Для профессии: I'm a designer.", "I'm from Minsk."),
      ],
      analytics_tags: ["lesson_6_practical_english", "unit_checkpoint", "first_meeting_dialogue", "reduced_support_speaking"],
      acceptance_criteria: [
        "Student completes a first-meeting dialogue with at least 6 turns.",
        "Student asks at least 3 questions from Unit 1.",
        "Student gives name, city/country, job, and one contact detail.",
      ],
    },
  ],

  media_specifications: [
    media("beg_u1_l1_media_dialogue", "beg_u1_l1", "A: Hello. I'm Dima.\nB: Hi, Dima. I'm Kate.\nA: Nice to meet you.\nB: Nice to meet you, too.", ["Dima", "Kate"], "neutral international", "slow_beginner", "18 sec", "Generate a warm, clear two-speaker beginner dialogue with pauses after each line.", { name: "Kate", reply: "Nice to meet you, too." }),
    media("beg_u1_l2_media_dialogue", "beg_u1_l2", "A: Hi, I'm Lena.\nB: Hello, Lena. I'm Pavel.\nA: Where are you from?\nB: I'm from Grodno. And you?\nA: I'm from Minsk.", ["Lena", "Pavel"], "neutral international", "slow_beginner", "22 sec", "Generate a clear beginner dialogue about city/country with soft pauses.", { cities: ["Grodno", "Minsk"] }),
    media("beg_u1_l3_media_dialogue", "beg_u1_l3", "A: What's your job?\nB: I'm a designer.\nA: Are you from Minsk?\nB: No, I'm from Brest.", ["Speaker A", "Speaker B"], "neutral international", "slow_beginner", "20 sec", "Generate a short job and city dialogue with clear stress on designer and Brest.", { job: "designer", city: "Brest" }),
    media("beg_u1_l4_media_dialogue", "beg_u1_l4", "A: What's your phone number?\nB: It's 29 14 08.\nA: How do you spell your last name?\nB: K-O-V-A-L-E-V-A.\nA: What's your email?\nB: anna dot k at example dot com.", ["Speaker A", "Speaker B"], "neutral international", "slow_beginner", "30 sec", "Generate a careful contact-detail dialogue with digit pairs, spelling, at, and dot only.", { phone: "29 14 08", last_name: "KOVALEVA", email_spoken: "anna dot k at example dot com" }),
    media("beg_u1_l5_media_dialogue", "beg_u1_l5", "A: What's your first name?\nB: Nina.\nA: What's your job?\nB: I'm a teacher.\nA: What's your email?\nB: nina at example dot com.", ["Form assistant", "Nina"], "neutral international", "slow_beginner", "24 sec", "Generate a simple form-completion dialogue for adult beginners.", { first_name: "Nina", job: "teacher", email_spoken: "nina at example dot com" }),
    media("beg_u1_l6_media_dialogue", "beg_u1_l6", "A: Hi. I'm Max.\nB: Hello, Max. I'm Alina.\nA: Nice to meet you, Alina. Where are you from?\nB: I'm from Minsk. What about you?\nA: I'm from Gomel. What's your job?\nB: I'm a designer.\nA: Great. See you.\nB: See you.", ["Max", "Alina"], "neutral international", "careful_natural", "35 sec", "Generate a friendly first-meeting dialogue with natural but beginner-safe pauses.", { names: ["Max", "Alina"], cities: ["Minsk", "Gomel"], job: "designer" }),
  ],

  exercises: [
    exercise("beg_u1_l1_ex1", "beg_u1_l1", "beg_u1_l1_sec_practice", "fill_gap", "Впишите пропущенное слово.", "Hello. ___ Anna.", [item("i1", "Hello. ___ Anna.")], [answer("a1", "i1", "I'm", "I'm", "Короткая форма I'm = I am.")], [accepted("a1", ["I'm", "I am", "I’m"], "Full and contracted forms are both correct.")], "3 min", 2, true, true, "classwork", ["Watch for missing be."], ["missing_be", "autocheck"]),
    exercise("beg_u1_l1_ex2", "beg_u1_l1", "beg_u1_l1_sec_practice", "multiple_choice", "Выберите лучший ответ.", "A: Nice to meet you. B: ...", [item("i1", "A: Nice to meet you. B: ...", "", ["Nice to meet you, too.", "I'm coffee.", "From Minsk?"])], [answer("a1", "i1", "Nice to meet you, too.", "Nice to meet you, too.", "too показывает взаимность.")], [accepted("a1", ["Nice to meet you too", "Nice to meet you, too."], "Comma and final period are optional.")], "3 min", 2, true, true, "classwork", ["Check if students memorize the whole chunk."], ["greeting_reply"]),
    exercise("beg_u1_l1_ex3", "beg_u1_l1", "beg_u1_l1_sec_practice", "matching", "Соедините фразу и значение.", "Match the greeting phrases.", [item("i1", "Hello", "Приветствие"), item("i2", "Nice to meet you", "Приятно познакомиться"), item("i3", "too", "тоже")], [answer("a1", "i1", "Приветствие", "Hello = Приветствие", "Hello is a greeting."), answer("a2", "i2", "Приятно познакомиться", "Nice to meet you = Приятно познакомиться", "This is a fixed polite phrase."), answer("a3", "i3", "тоже", "too = тоже", "too adds 'also'.")], [accepted("a1", ["приветствие", "привет"], "Russian wording variants accepted."), accepted("a2", ["приятно познакомиться"], "Case-insensitive."), accepted("a3", ["тоже"], "Case-insensitive.")], "4 min", 2, true, true, "homework", ["Homework reinforces classwork phrases."], ["homework_vocab"]),
    exercise("beg_u1_l1_ex4", "beg_u1_l1", "beg_u1_l1_sec_speaking", "short_writing", "Напишите 2 короткие фразы о себе.", "Hello. I'm ... Nice to meet you.", [item("i1", "Write two short lines about yourself.")], [answer("a1", "i1", "Hello. I'm Anna. Nice to meet you.", "Hello. I'm Anna. Nice to meet you.", "Two simple chunks are enough.")], [accepted("a1", ["Hello I'm Anna Nice to meet you", "Hello. I am Anna. Nice to meet you."], "Punctuation and I am/I'm variants accepted.")], "5 min", 2, true, true, "homework", ["Accept different real student names."], ["short_writing", "speaking_prep"]),

    exercise("beg_u1_l2_ex1", "beg_u1_l2", "beg_u1_l2_sec_practice", "fill_gap", "Впишите слово.", "I'm ___ Minsk.", [item("i1", "I'm ___ Minsk.")], [answer("a1", "i1", "from", "from", "Use from for city/country.")], [accepted("a1", ["from"], "Case-insensitive.")], "3 min", 2, true, true, "classwork", ["Useful for from phrase analytics."], ["from_phrase"]),
    exercise("beg_u1_l2_ex2", "beg_u1_l2", "beg_u1_l2_sec_practice", "word_order", "Соберите вопрос.", "Where / are / you / from", [item("i1", "Соберите вопрос: Откуда вы?", "", [], [], ["Where", "are", "you", "from"])], [answer("a1", "i1", "Where are you from?", "Where are you from?", "Question order: Where + are + you + from.")], [accepted("a1", ["Where are you from", "where are you from?"], "Question mark and case are normalized.")], "4 min", 2, true, true, "classwork", ["High-value risk signal for question order."], ["question_order"]),
    exercise("beg_u1_l2_ex3", "beg_u1_l2", "beg_u1_l2_sec_practice", "matching", "Соедините city/country.", "Match place type.", [item("i1", "Minsk", "city"), item("i2", "Belarus", "country"), item("i3", "Vilnius", "city")], [answer("a1", "i1", "city", "Minsk = city", "Minsk is a city."), answer("a2", "i2", "country", "Belarus = country", "Belarus is a country."), answer("a3", "i3", "city", "Vilnius = city", "Vilnius is a city.")], [accepted("a1", ["city"], "English label only."), accepted("a2", ["country"], "English label only."), accepted("a3", ["city"], "English label only.")], "4 min", 2, true, true, "homework", ["Keeps homework linked to classwork vocabulary."], ["city_country", "homework_vocab"]),
    exercise("beg_u1_l2_ex4", "beg_u1_l2", "beg_u1_l2_sec_practice", "listen_type", "Напечатайте услышанную фразу.", "Audio spec: I'm from Vilnius.", [item("i1", "Type the sentence you hear.", "", [], [], [], "beg_u1_l2_media_dialogue")], [answer("a1", "i1", "I'm from Vilnius.", "I'm from Vilnius.", "Use I'm from + city.")], [accepted("a1", ["I'm from Vilnius", "I am from Vilnius", "I’m from Vilnius."], "I am/I'm and punctuation variants accepted.")], "5 min", 2, true, true, "homework", ["No real audio yet; use media spec."], ["listening", "from_phrase"]),

    exercise("beg_u1_l3_ex1", "beg_u1_l3", "beg_u1_l3_sec_practice", "multiple_choice", "Выберите правильный артикль.", "I'm ___ engineer.", [item("i1", "I'm ___ engineer.", "", ["a", "an", "-"])], [answer("a1", "i1", "an", "an", "Use an before vowel sound.")], [accepted("a1", ["an"], "Case-insensitive.")], "3 min", 2, true, true, "classwork", ["Do not over-explain article theory."], ["article_a_an"]),
    exercise("beg_u1_l3_ex2", "beg_u1_l3", "beg_u1_l3_sec_practice", "word_order", "Соберите вопрос.", "What's / your / job", [item("i1", "Соберите вопрос: Какая у вас профессия?", "", [], [], ["What's", "your", "job"])], [answer("a1", "i1", "What's your job?", "What's your job?", "What's = What is.")], [accepted("a1", ["What's your job", "What is your job?", "what's your job?"], "Full form and punctuation variants accepted.")], "4 min", 2, true, true, "classwork", ["Useful for missing is analytics."], ["job_question", "missing_is"]),
    exercise("beg_u1_l3_ex3", "beg_u1_l3", "beg_u1_l3_sec_practice", "matching", "Соедините job и русский перевод.", "Match jobs.", [item("i1", "teacher", "учитель"), item("i2", "driver", "водитель"), item("i3", "manager", "менеджер")], [answer("a1", "i1", "учитель", "teacher = учитель", "Teacher is a job."), answer("a2", "i2", "водитель", "driver = водитель", "Driver is a job."), answer("a3", "i3", "менеджер", "manager = менеджер", "Manager is a job.")], [accepted("a1", ["учитель", "преподаватель"], "Russian synonyms accepted."), accepted("a2", ["водитель"], "Case-insensitive."), accepted("a3", ["менеджер"], "Case-insensitive.")], "4 min", 2, true, true, "homework", ["Keep job list short."], ["jobs_vocab"]),
    exercise("beg_u1_l3_ex4", "beg_u1_l3", "beg_u1_l3_sec_speaking", "short_writing", "Напишите 3 строки о себе.", "I'm ... I'm from ... I'm a/an ...", [item("i1", "Write three short profile lines.")], [answer("a1", "i1", "I'm Anna. I'm from Minsk. I'm a manager.", "I'm Anna. I'm from Minsk. I'm a manager.", "Use three short chunks.")], [accepted("a1", ["I am Anna. I am from Minsk. I am a manager.", "I'm Anna I'm from Minsk I'm a manager"], "I am/I'm and punctuation variants accepted.")], "6 min", 2, true, true, "homework", ["Accept student name/city/job variants in future checker."], ["short_writing", "profile"]),

    exercise("beg_u1_l4_ex1", "beg_u1_l4", "beg_u1_l4_sec_practice", "listen_choose", "Выберите услышанный номер.", "Audio spec: 29 14 08.", [item("i1", "Choose the phone number you hear.", "", ["29 14 08", "19 40 08", "29 04 18"], [], [], "beg_u1_l4_media_dialogue")], [answer("a1", "i1", "29 14 08", "29 14 08", "Phone digits are grouped in pairs.")], [accepted("a1", ["29 14 08", "291408", "29-14-08"], "Spaces and hyphens accepted.")], "4 min", 2, true, true, "classwork", ["Scope limited to phone-number digits."], ["phone_digits", "lesson_4_scope_limited"]),
    exercise("beg_u1_l4_ex2", "beg_u1_l4", "beg_u1_l4_sec_practice", "listen_type", "Напечатайте имя и фамилию по буквам.", "Audio spec: A-N-N-A K-O-V-A-L-E-V-A.", [item("i1", "Type the first and last name you hear.", "", [], [], [], "beg_u1_l4_media_dialogue")], [answer("a1", "i1", "Anna Kovaleva", "Anna Kovaleva", "Name spelling creates the full name.")], [accepted("a1", ["Anna Kovaleva", "ANNA KOVALEVA", "anna kovaleva"], "Case-insensitive name accepted.")], "5 min", 2, true, true, "classwork", ["Do not add full alphabet test."], ["name_spelling"]),
    exercise("beg_u1_l4_ex3", "beg_u1_l4", "beg_u1_l4_sec_practice", "fill_gap", "Впишите email символы словами: at или dot.", "anna ___ k ___ example ___ com", [item("i1", "anna ___ k ___ example ___ com")], [answer("a1", "i1", "dot at dot", "anna dot k at example dot com", "Use dot for . and at for @.")], [accepted("a1", ["dot at dot"], "Only at and dot are in scope.")], "4 min", 2, true, true, "homework", ["Email symbols limited to at and dot only."], ["email_at_dot", "lesson_4_scope_limited"]),
    exercise("beg_u1_l4_ex4", "beg_u1_l4", "beg_u1_l4_sec_speaking", "short_writing", "Заполните короткую contact card.", "First name: Anna. Last name: Kovaleva. Phone: 29 14 08. Email: anna.k@example.com.", [item("i1", "Write a mock contact card with first name, last name, phone, and email.")], [answer("a1", "i1", "First name: Anna. Last name: Kovaleva. Phone: 29 14 08. Email: anna.k@example.com.", "First name: Anna. Last name: Kovaleva. Phone: 29 14 08. Email: anna.k@example.com.", "Use simple contact fields.")], [accepted("a1", ["Anna Kovaleva 29 14 08 anna.k@example.com", "First name Anna Last name Kovaleva Phone 291408 Email anna.k@example.com"], "Labels and spacing can vary.")], "6 min", 2, true, true, "homework", ["Mock contact details only; no real personal data required."], ["contact_card", "homework"]),

    exercise("beg_u1_l5_ex1", "beg_u1_l5", "beg_u1_l5_sec_practice", "matching", "Соедините поле формы и вопрос.", "Match form field and question.", [item("i1", "First name", "What's your first name?"), item("i2", "Job", "What's your job?"), item("i3", "Phone number", "What's your phone number?")], [answer("a1", "i1", "What's your first name?", "First name - What's your first name?", "This question asks for first name."), answer("a2", "i2", "What's your job?", "Job - What's your job?", "This question asks for job."), answer("a3", "i3", "What's your phone number?", "Phone number - What's your phone number?", "This question asks for phone number.")], [accepted("a1", ["What's your first name?", "What is your first name?"], "Full and short forms accepted."), accepted("a2", ["What's your job?", "What is your job?"], "Full and short forms accepted."), accepted("a3", ["What's your phone number?", "What is your phone number?"], "Full and short forms accepted.")], "5 min", 2, true, true, "classwork", ["Form fields are speaking prompts."], ["form_questions"]),
    exercise("beg_u1_l5_ex2", "beg_u1_l5", "beg_u1_l5_sec_practice", "fill_gap", "Впишите пропущенное слово.", "What's your ___ number?", [item("i1", "What's your ___ number?")], [answer("a1", "i1", "phone", "phone", "The full phrase is phone number.")], [accepted("a1", ["phone"], "Case-insensitive.")], "3 min", 2, true, true, "classwork", ["Reinforces Lesson 4 without new complexity."], ["phone_number"]),
    exercise("beg_u1_l5_ex3", "beg_u1_l5", "beg_u1_l5_sec_practice", "listen_type", "Заполните поле из mock-аудио.", "Audio spec: nina at example dot com.", [item("i1", "Type the email you hear.", "", [], [], [], "beg_u1_l5_media_dialogue")], [answer("a1", "i1", "nina@example.com", "nina@example.com", "at = @, dot = .")], [accepted("a1", ["nina@example.com", "nina at example dot com"], "Typed email or spoken-form text accepted.")], "5 min", 2, true, true, "homework", ["Recycles Lesson 4 email in a form context."], ["email_at_dot", "homework"]),
    exercise("beg_u1_l5_ex4", "beg_u1_l5", "beg_u1_l5_sec_speaking", "short_writing", "Напишите 4 строки о себе.", "Name. From. Job. Contact.", [item("i1", "Write four short lines about yourself.")], [answer("a1", "i1", "I'm Anna. I'm from Minsk. I'm a manager. My email is anna@example.com.", "I'm Anna. I'm from Minsk. I'm a manager. My email is anna@example.com.", "Short chunks are enough.")], [accepted("a1", ["I am Anna. I am from Minsk. I am a manager. My email is anna@example.com.", "I'm Anna I'm from Minsk I'm a manager My email is anna@example.com"], "I am/I'm and punctuation variants accepted.")], "6 min", 2, true, true, "homework", ["Accept mock contact details."], ["short_writing", "personal_profile"]),

    exercise("beg_u1_l6_ex1", "beg_u1_l6", "beg_u1_l6_sec_practice", "multiple_choice", "Выберите лучшую реплику в диалоге.", "A: Nice to meet you. B: ...", [item("i1", "A: Nice to meet you. B: ...", "", ["Nice to meet you, too.", "I am job.", "Phone at dot."])], [answer("a1", "i1", "Nice to meet you, too.", "Nice to meet you, too.", "This is the polite reply.")], [accepted("a1", ["Nice to meet you too", "Nice to meet you, too."], "Comma optional.")], "3 min", 2, true, true, "classwork", ["Checkpoint of Lesson 1 chunk."], ["unit_review", "greeting_reply"]),
    exercise("beg_u1_l6_ex2", "beg_u1_l6", "beg_u1_l6_sec_practice", "fill_gap", "Вставьте слово.", "Where are you ___?", [item("i1", "Where are you ___?")], [answer("a1", "i1", "from", "from", "Здесь нужен предлог from.")], [accepted("a1", ["from"], "Case-insensitive.")], "3 min", 2, true, true, "classwork", ["Checkpoint of Lesson 2 question."], ["unit_review", "question_order"]),
    exercise("beg_u1_l6_ex3", "beg_u1_l6", "beg_u1_l6_sec_practice", "drag_drop", "Соберите диалог по порядку.", "Greeting, name, from, job, close.", [item("i1", "Order the dialogue.", "", [], [], ["Hi. I'm Max.", "Nice to meet you.", "I'm from Gomel.", "I'm a designer.", "See you."])], [answer("a1", "i1", ["Hi. I'm Max.", "Nice to meet you.", "I'm from Gomel.", "I'm a designer.", "See you."], "Hi. I'm Max. Nice to meet you. I'm from Gomel. I'm a designer. See you.", "This is a logical first-meeting order.")], [accepted("a1", [["Hi. I'm Max.", "Nice to meet you.", "I'm from Gomel.", "I'm a designer.", "See you."]], "Exact order expected for drag-drop.")], "6 min", 2, true, true, "homework", ["Dialogue ordering prepares final role-play."], ["dialogue_order", "homework"]),
    exercise("beg_u1_l6_ex4", "beg_u1_l6", "beg_u1_l6_sec_speaking", "short_writing", "Напишите 6 строк диалога первой встречи.", "Include greeting, name, from, job, and one contact detail.", [item("i1", "Write a six-line first-meeting dialogue.")], [answer("a1", "i1", "A: Hi. I'm Max. B: Hello, Max. I'm Alina. A: Where are you from? B: I'm from Minsk. A: What's your job? B: I'm a designer.", "A short first-meeting dialogue with six turns.", "Use Unit 1 chunks.")], [accepted("a1", ["Hi I'm Max Hello Max I'm Alina Where are you from I'm from Minsk What's your job I'm a designer"], "Speaker labels and punctuation optional.")], "8 min", 2, true, true, "homework", ["Final homework can feed speaking widget later."], ["first_meeting_dialogue", "unit_checkpoint"]),
  ],

  homework_tasks: [
    homework("beg_u1_l1_hw", "beg_u1_l1", "Домашка: Hello! I'm...", "Закрепить приветствия и короткое представление.", ["beg_u1_l1_ex3", "beg_u1_l1_ex4"], ["beg_u1_l1_speak_1"], "12 min"),
    homework("beg_u1_l2_hw", "beg_u1_l2", "Домашка: Where are you from?", "Закрепить вопрос и ответ про город/страну.", ["beg_u1_l2_ex3", "beg_u1_l2_ex4"], ["beg_u1_l2_speak_1"], "12 min"),
    homework("beg_u1_l3_hw", "beg_u1_l3", "Домашка: What's your job?", "Закрепить профессии, a/an и короткий профиль.", ["beg_u1_l3_ex3", "beg_u1_l3_ex4"], ["beg_u1_l3_speak_1"], "12 min"),
    homework("beg_u1_l4_hw", "beg_u1_l4", "Домашка: Contact details", "Закрепить имя, фамилию, телефон и простой email без новых тем.", ["beg_u1_l4_ex3", "beg_u1_l4_ex4"], ["beg_u1_l4_speak_1"], "12 min"),
    homework("beg_u1_l5_hw", "beg_u1_l5", "Домашка: Personal information", "Закрепить вопросы анкеты и короткий личный профиль.", ["beg_u1_l5_ex3", "beg_u1_l5_ex4"], ["beg_u1_l5_speak_1"], "12 min"),
    homework("beg_u1_l6_hw", "beg_u1_l6", "Домашка: First meeting dialogue", "Закрепить практический диалог первой встречи.", ["beg_u1_l6_ex3", "beg_u1_l6_ex4"], ["beg_u1_l6_speak_1"], "15 min"),
  ],

  speaking_activities: [
    speakingActivity("beg_u1_l1_speak_1", "beg_u1_l1", "Поздоровайтесь и назовите имя трём людям.", ["Hello.", "I'm ...", "Nice to meet you."]),
    speakingActivity("beg_u1_l2_speak_1", "beg_u1_l2", "Спросите четырёх людей, откуда они.", ["Where are you from?", "I'm from ..."]),
    speakingActivity("beg_u1_l3_speak_1", "beg_u1_l3", "Проведите мини-нетворкинг: имя, город, профессия.", ["What's your job?", "I'm a/an ..."]),
    speakingActivity("beg_u1_l4_speak_1", "beg_u1_l4", "Продиктуйте партнёру mock contact card.", ["My phone number is ...", "My email is ...", "How do you spell it?"]),
    speakingActivity("beg_u1_l5_speak_1", "beg_u1_l5", "Возьмите интервью у партнёра по короткой анкете.", ["What's your first name?", "Where are you from?", "What's your job?"]),
    speakingActivity("beg_u1_l6_speak_1", "beg_u1_l6", "Сыграйте диалог первой встречи с новой ролью.", ["Hi. I'm ...", "Nice to meet you.", "See you."]),
  ],
};

const fromQuestionCheckpoint = beginnerUnit1.exercises.find((exerciseItem) => exerciseItem.exercise_id === "beg_u1_l6_ex2");
if (fromQuestionCheckpoint) {
  fromQuestionCheckpoint.hints_ru = [
    {
      hint_id: "beg_u1_l6_ex2_hint_1",
      trigger: "after_wrong_attempt",
      text_ru: "В вопросе о городе или стране используйте from: Where are you from?",
      target: "fill_gap",
    },
  ];
  fromQuestionCheckpoint.ai_explanation = {
    ...fromQuestionCheckpoint.ai_explanation,
    text_ru:
      "Слово job означает «работа» или «профессия». В вопросе о городе или стране нужен предлог from. Как правильно: Where are you from?",
    linked_target_language_en: "Where are you from?",
    example_en: "I'm from Minsk.",
  };
}

function section(section_id, lesson_id, section_type, title_ru, student_instruction_ru, teacher_purpose, target_language_en, estimated_time, mode) {
  return { section_id, lesson_id, section_type, title_ru, student_instruction_ru, teacher_purpose, target_language_en, estimated_time, mode };
}

function teacherNote(note_id, lesson_id, scope, text, priority) {
  return { note_id, lesson_id, scope, text, priority };
}

function mistake(mistake_id, lesson_id, mistake_en, correction_en, explanation_ru, linked_exercise_ids, analytics_tag_ids) {
  return { mistake_id, lesson_id, mistake_en, correction_en, explanation_ru, linked_exercise_ids, analytics_tag_ids };
}

function ai(explanation_id, trigger, text_ru, linked_target_language_en) {
  return { explanation_id, trigger, text_ru, linked_target_language_en, tone: "supportive_beginner" };
}

function media(media_id, lesson_id, script, speakers, accent, speed, duration, audio_generation_prompt, comprehension_answers) {
  return {
    media_id,
    lesson_id,
    media_type: "dialogue_audio",
    script,
    transcript: script,
    speakers: speakers.map((name) => ({ name, role: "dialogue_speaker" })),
    accent,
    speed,
    duration,
    audio_generation_prompt,
    comprehension_answers,
    asset_status: "spec_only",
  };
}

function item(item_id, prompt_en, prompt_ru = "", options = [], pairs = [], word_bank = [], media_ref = null) {
  return { item_id, prompt_en, prompt_ru, options, pairs, word_bank, media_ref, answer_key_ref: item_id.replace(/^i/, "a") };
}

function answer(answer_id, item_id, value, display_en, explanation_ru) {
  return { answer_id, item_id, value, display_en, explanation_ru };
}

function accepted(answer_id, variants, reason) {
  return { answer_id, variants, reason, normalization_applies: true };
}

function exercise(
  exercise_id,
  lesson_id,
  section,
  exercise_type,
  instruction_ru,
  learning_content_en,
  items,
  correct_answers,
  accepted_answers,
  estimated_time,
  attempts_allowed,
  show_correct_answer,
  autocheck,
  mode,
  teacher_notes,
  analytics_tags,
) {
  return {
    exercise_id,
    lesson_id,
    section,
    exercise_type,
    instruction_ru,
    learning_content_en,
    items,
    correct_answers,
    accepted_answers,
    normalization_rules: { ...commonNormalizationRules },
    hints_ru: [
      {
        hint_id: `${exercise_id}_hint_1`,
        trigger: "after_wrong_attempt",
        text_ru: "Посмотрите на пример и проверьте порядок слов.",
        target: exercise_type,
      },
    ],
    ai_explanation: {
      explanation_id: `${exercise_id}_ai`,
      trigger: exercise_id,
      text_ru: correct_answers[0]?.explanation_ru || "Сравните ответ с правильным вариантом.",
      linked_target_language_en: correct_answers[0]?.display_en || learning_content_en,
      tone: "supportive_beginner",
    },
    estimated_time,
    attempts_allowed,
    show_correct_answer,
    autocheck,
    mode,
    teacher_notes: teacher_notes.map((text, index) => ({
      note_id: `${exercise_id}_tn_${index + 1}`,
      lesson_id,
      scope: "exercise",
      text,
      priority: "P2",
    })),
    analytics_tags,
  };
}

function homework(homework_id, lesson_id, title_ru, purpose_ru, exercise_ids, speaking_activity_ids, estimated_time) {
  return {
    homework_id,
    lesson_id,
    title_ru,
    purpose_ru,
    exercise_ids,
    speaking_activity_ids,
    estimated_time,
    deadline_rule: "before_next_lesson",
    teacher_visibility: ["completion_status", "exercise_results", "needs_retry", "ai_explanation_usage"],
    completion_rule: "All linked exercises checked or submitted.",
    does_not_introduce_new_complex_topic: true,
  };
}

function speakingActivity(activity_id, lesson_id, instruction_ru, target_phrases_en) {
  return {
    activity_id,
    lesson_id,
    instruction_ru,
    target_phrases_en,
    mode: "speaking_practice",
    widget_integration: {
      status: "placeholder_only",
      future_endpoint: "/mock/speaking-widget/session",
    },
  };
}

if (typeof globalThis !== "undefined") {
  globalThis.ULC_BEGINNER_UNIT_1 = beginnerUnit1;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = beginnerUnit1;
}

export { beginnerUnit1 };
export default beginnerUnit1;
