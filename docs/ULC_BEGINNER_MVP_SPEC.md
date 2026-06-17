# ULC Beginner English MVP Specification

## MVP Summary

The first MVP is **Beginner English for Adults** for Russian-speaking adult students. It must demonstrate the core ULC learning experience: native lesson pages, interactive homework, teacher-led live lesson mode, progress tracking, auto-check, and AI explanations of mistakes.

Do not build the full A1-C1 program in the MVP. Build enough structure and sample content to prove the product model.

## MVP Scope

The MVP must include:

- Beginner course structure;
- 1-2 complete Units;
- 6-12 lessons total;
- Student Dashboard;
- Teacher Dashboard;
- Methodologist Dashboard;
- native lesson pages;
- Exercise Player;
- Homework Mode;
- Live Lesson Mode;
- shared learning space mockup;
- auto-check;
- show correct answers;
- AI explanation of mistakes;
- vocabulary trainer;
- progress tracking;
- checkpoint or mini-test;
- certificate progress logic;
- API-ready integration architecture for 1C, Revizor/BI, Bitrix24, Telegram, and the external speaking widget.

## Explicit Non-Scope

Do not include these in the first implementation:

- full A1-C1 content;
- a complete video generation pipeline;
- a newly built speaking widget;
- perfect pronunciation scoring;
- content marketplace;
- heavy gamification;
- copied workbook pages;
- PDF lesson pages.

The speaking widget is external. The MVP should provide a place, data contract, and UI state for integration, but should not implement the widget itself.

## Beginner Course Goal

The Beginner course should help students stop being afraid of English and start using simple phrases in real situations.

By the end of the Beginner course, a student should be able to:

- introduce themselves;
- ask and answer simple questions;
- talk about name, city, country, job, and family;
- describe daily routines;
- order something in a cafe;
- ask for a price;
- arrange a meeting;
- describe a simple situation;
- understand short beginner dialogues;
- write a simple message.

## First Demo Unit Direction

The first demo unit can use the theme **Nice to meet you**, but all content must be original.

Example Unit 1 goal:

The student can introduce themselves, say their name, country, city, and job, ask simple questions, spell names, use numbers 0-20, and maintain a short beginner-level dialogue.

Possible language focus:

- `be`: `I am`, `you are`;
- subject pronouns;
- greetings;
- names;
- countries and nationalities;
- jobs;
- spelling;
- numbers 0-20;
- simple questions;
- short introductions.

## Lesson Requirements

Each MVP lesson must include:

- a clear student-facing goal;
- Russian instructions;
- English learning content;
- lead-in;
- vocabulary or grammar input;
- controlled practice;
- listening, reading, dialogue, or short context;
- pronunciation or awareness task when useful;
- semi-controlled speaking;
- freer speaking or practical output;
- homework link;
- teacher notes;
- analytics tags.

Each lesson must end with a practical speaking outcome.

## Required MVP Exercise Types

The MVP must implement or visibly prototype:

- fill in the gaps;
- multiple choice;
- matching;
- drag-and-drop;
- word order;
- listen and choose;
- listen and type;
- short writing;
- auto-check;
- show correct answers;
- AI explanation of mistakes.

Additional exercise types may be represented as planned states, but the required types above must be testable or clearly demonstrated.

## Student Experience

Student screens must include:

- current course, level, unit, lesson, and homework;
- obvious "continue learning" action;
- progress by unit;
- homework status;
- vocabulary review;
- recent mistakes;
- AI explanation entry point;
- certificate progress.

For Beginner:

- interface language: Russian;
- instructions: Russian;
- learning examples and target language: English;
- explanations and hints: Russian;
- English-only instruction can be introduced later for higher levels.

## Teacher Experience

Teacher screens must include:

- group list;
- student list;
- homework completion;
- exercise results;
- typical mistakes;
- individual student detail;
- live lesson mode;
- simulated real-time answer visibility;
- option to leave a comment or assign extra practice.

Teacher dashboard is desktop-first.

## Methodologist Experience

Methodologist screens must include:

- course/unit/lesson content structure;
- exercise library;
- exercise metadata;
- teacher book notes;
- content status: draft, review, approved, archived;
- quality and analytics signals;
- readiness for original ULC content generation.

## Data and Integration Readiness

The MVP should use mock data where real services are unavailable, but keep clear boundaries for:

- content structure;
- exercise definitions;
- attempts and answers;
- progress state;
- AI feedback;
- teacher comments;
- analytics events;
- risk signals;
- integration adapters.

Prepare API-ready placeholders for:

- 1C;
- Revizor/BI;
- Bitrix24;
- Telegram;
- schedule data;
- payment status;
- NPS/feedback;
- external speaking widget.

## UI Direction

The UI should feel like ULC:

- light;
- modern;
- friendly;
- clean;
- adult-oriented;
- not childish;
- not a generic SaaS template;
- primary accent `#3C4AF5`;
- mobile-friendly for students;
- efficient desktop layouts for teachers and methodologists.
