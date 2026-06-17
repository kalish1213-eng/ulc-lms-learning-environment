# ULC Digital Learning Environment - Product and Methodology Specification

## Purpose

Create a digital learning environment for ULC.by that helps adult language students study between lessons, complete homework, work with a teacher in a shared live space, and see measurable progress.

The product is not an electronic textbook and not a PDF viewer. It is a native interactive learning environment with structured lessons, exercises, dashboards, feedback, progress tracking, and integration-ready architecture.

## Audience and Product Context

- Brand: ULC, site `ULC.by`.
- Core audience: adults, mostly Russian-speaking, with a strong segment of women aged 25-35.
- Main product: General English.
- Formats: group and individual, online and offline.
- Long-term language scope: English, German, Spanish, French, Italian, Chinese, Turkish, and other ULC languages.
- MVP language scope: English only, Beginner level for adults.

## Methodology

The learning model should be methodically comparable to English File / New English File:

- clear Unit / Lesson / Section structure;
- grammar, vocabulary, pronunciation, and skills balance;
- speaking-first communicative outcomes;
- controlled practice -> semi-controlled practice -> freer practice;
- workbook-style repetition and consolidation;
- practical English blocks;
- review sections and checkpoint tests;
- teacher book logic and teacher notes.

All ULC materials must be original. Do not copy English File / New English File texts, dialogues, exercise wording, answer keys, characters, images, audio, video, workbook pages, or visual design.

## Core Roles

### Student

The student must be able to:

- see the current course, level, unit, lesson, homework, and progress;
- continue learning from the most relevant next action;
- complete interactive exercises;
- receive auto-check feedback and correct answers;
- get simple AI explanations of mistakes;
- review vocabulary and repeated weak points;
- work independently in homework mode;
- participate in teacher-led live lesson mode.

### Teacher

The teacher must be able to:

- see groups and individual students;
- monitor homework completion and exercise results;
- review typical mistakes by group and student;
- see written answers and speaking-widget results when integrated;
- use live lesson mode where student answers are visible in real time;
- assign extra practice or leave comments;
- identify students at risk of low engagement or dropout.

### Methodologist

The methodologist must be able to:

- manage course, unit, lesson, section, and exercise content;
- create and review exercises;
- manage grammar, vocabulary, pronunciation, skills, and CEFR tags;
- maintain teacher book notes;
- version materials through draft, review, approved, and archived states;
- inspect exercise quality and analytics signals.

### School / Admin

The school must be able to:

- measure homework depth, retention, NPS, activity, and learning progress;
- connect learning data with Revizor/BI;
- prepare integrations with 1C, Bitrix24, Telegram, payments, scheduling, and feedback systems;
- standardize quality while reducing manual teacher and service workload.

## Course Structure

The content hierarchy must support:

- target language;
- native language;
- course;
- level;
- unit;
- lesson;
- section;
- exercise;
- attempt;
- progress;
- teacher notes;
- analytics events.

Each Unit should include:

- `unit_id`;
- title;
- real-life theme;
- communicative goal;
- grammar focus;
- vocabulary focus;
- pronunciation focus;
- speaking outcome;
- listening outcome;
- reading outcome;
- writing outcome;
- practical English block;
- review block;
- mini-test or checkpoint;
- homework pack;
- teacher book notes;
- AI support prompts;
- analytics tags.

Each Lesson should include:

- `lesson_id`;
- title;
- practical lesson goal;
- target language;
- target vocabulary;
- target grammar;
- target pronunciation;
- lead-in;
- context;
- vocabulary input and practice;
- grammar discovery and clarification;
- controlled practice;
- listening, dialogue, or video;
- pronunciation work;
- semi-controlled speaking;
- freer speaking;
- error correction;
- reflection;
- homework;
- teacher notes;
- analytics tags.

Every lesson must end with a practical speaking result. For example, not "students studied to be", but "students can introduce themselves and ask five simple questions".

## Exercise System

The exercise player must render native interactive blocks. Required exercise types across the product include:

- fill in the gaps;
- multiple choice;
- matching;
- drag-and-drop;
- word order;
- sentence completion;
- sentence transformation;
- error correction;
- choose the correct word;
- listen and choose;
- listen and type;
- listen and repeat;
- pronunciation awareness;
- dialogue completion;
- role-play card;
- speaking prompt;
- reading comprehension;
- short writing;
- vocabulary review;
- grammar review;
- practical English task;
- mini-test;
- unit checkpoint.

Each exercise should store:

```json
{
  "exercise_id": "beg_u1_l1_ex01",
  "target_language": "en",
  "native_language": "ru",
  "course": "General English",
  "level": "Beginner",
  "unit": "Unit 1",
  "lesson": "Lesson 1",
  "section": "Vocabulary",
  "exercise_number": "1A",
  "exercise_type": "matching",
  "skill": ["vocabulary", "speaking_support"],
  "grammar_tag": [],
  "vocabulary_tag": ["greetings", "names"],
  "pronunciation_tag": [],
  "instruction_ru": "Соедините приветствия с ответами.",
  "prompt": "...",
  "items": [],
  "correct_answers": [],
  "accepted_answers": [],
  "hints_ru": [],
  "explanations_ru": [],
  "estimated_time_minutes": 4,
  "difficulty": 1,
  "attempts_allowed": 2,
  "show_correct_answer": true,
  "autocheck": true,
  "teacher_notes": "",
  "analytics_tags": []
}
```

## Auto-Check and Feedback

The system must support:

- exact answers;
- accepted answer variants;
- contractions such as `I am` and `I'm`;
- case, spacing, and punctuation tolerance where appropriate;
- partial correctness;
- hints;
- correct answer display;
- short explanations in Russian for Beginner students.

Feedback should show what is correct, what is incorrect, why the error happened, the correct answer, and one small next practice step.

## AI Assistant

For the MVP, the AI assistant focuses on explaining mistakes. It must:

- explain in Russian;
- respect Beginner level;
- avoid long grammar lectures;
- use simple examples;
- stay inside the current lesson topic;
- show the correct answer when allowed;
- offer one short micro-practice item;
- support the teacher, not replace the teacher.

Preferred AI response shape:

```json
{
  "student_answer": "...",
  "is_correct": false,
  "correct_answer": "...",
  "short_explanation_ru": "...",
  "beginner_friendly_rule_ru": "...",
  "example_en": "...",
  "micro_practice": {
    "instruction_ru": "...",
    "item": "...",
    "answer": "..."
  }
}
```

## Live Lesson Mode

Live lesson mode must support the idea of a shared learning space:

- teacher-led lesson page;
- student participation on their own device;
- simulated or real real-time answer visibility;
- two-cursor or co-presence mockup in MVP;
- teacher view of student progress during an exercise;
- clear transition between classwork and homework.

## Analytics

The system must collect product and learning signals:

- active students;
- homework completion by group, teacher, course, and lesson;
- average exercise score;
- common grammar, vocabulary, and pronunciation errors;
- vocabulary trainer activity;
- progress by unit and level;
- students without recent activity;
- students with declining activity;
- dropout risk;
- relationship between homework, retention, renewal, and NPS;
- exercises with unusually high error or abandonment rates;
- teacher dashboard usage;
- methodologist quality signals.

Risk and action signals should include:

- student has not opened LMS for 7 days;
- student missed 2 homework assignments in a row;
- student repeatedly fails one topic;
- group has low homework completion;
- material causes abnormal errors;
- student leaves negative feedback;
- student may be ready for renewal or upsell.

## Integrations

The architecture must be ready for:

- current ULC LMS;
- 1C;
- Bitrix24;
- Telegram bots;
- Revizor / BI;
- payments;
- scheduling;
- feedback / NPS;
- external speaking widget;
- audio, image, and generated media storage.
