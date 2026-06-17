# Beginner Unit 1 Content Validation

Validation target: `src/data/beginner-unit-1.js`  
Schema reference: `docs/BEGINNER_UNIT_1_CONTENT_SCHEMA.md`  
Methodology reference: `docs/BEGINNER_UNIT_1_METHODOLOGY_SPEC.md`  
Audit reference: `docs/BEGINNER_UNIT_1_METHODOLOGY_AUDIT.md`  
Validation date: 2026-06-18

## Summary

Status: **Pass**

The v0.2 Beginner Unit 1 data file is ready to be connected to the UI in a later step. It is not connected to the current v0.1.1 application.

## Counts

| Item | Count |
|---|---:|
| Lessons | 6 |
| Main interactive exercises | 24 |
| Exercises per lesson | 4 |
| Homework tasks | 6 |
| Media specifications | 6 |
| Speaking activities | 6 |

## Exercise Type Distribution

| Exercise type | Count |
|---|---:|
| `fill_gap` | 5 |
| `multiple_choice` | 3 |
| `matching` | 4 |
| `short_writing` | 5 |
| `word_order` | 2 |
| `listen_type` | 3 |
| `listen_choose` | 1 |
| `drag_drop` | 1 |

## Classwork / Homework Balance

| Mode | Count |
|---|---:|
| `classwork` | 12 |
| `homework` | 12 |

Each lesson has:

- speaking outcome;
- classwork sections;
- homework task;
- 4 linked exercises;
- teacher notes;
- typical mistakes;
- AI explanation examples;
- analytics tags.

## Link and ID Checks

| Check | Status |
|---|---|
| All 6 lessons are present | Pass |
| Every lesson id is unique | Pass |
| Every exercise id is unique | Pass |
| Unit lesson references point to existing lessons | Pass |
| Unit exercise references point to existing exercises | Pass |
| Every exercise references an existing lesson | Pass |
| Every homework task references an existing lesson | Pass |
| Every homework task references existing exercises | Pass |
| Every lesson has a speaking outcome | Pass |
| Every lesson has classwork and homework | Pass |
| Every exercise includes required fields | Pass |
| JavaScript file imports without syntax errors | Pass |

## Language Checks

| Check | Status | Notes |
|---|---|---|
| Student instructions are in Russian | Pass | Every `instruction_ru` contains Russian text. |
| Learning content is in English | Pass | Every `learning_content_en` contains English learning material. |
| AI explanations are in Russian | Pass | Explanations are stored as beginner-friendly Russian support. |
| Dialogues/scripts are in English | Pass | Media scripts and transcripts are English. |

## Autocheck Readiness

Every exercise includes:

- `correct_answers`;
- `accepted_answers`;
- `normalization_rules`;
- `hints_ru`;
- `ai_explanation`;
- `attempts_allowed`;
- `show_correct_answer`;
- `autocheck`;
- `mode`;
- `analytics_tags`.

Normalization rules include:

- ignore case;
- trim whitespace;
- collapse multiple spaces;
- ignore terminal punctuation;
- normalize apostrophes;
- accept full and contracted forms such as `I am` / `I'm`;
- allow optional period/question mark where appropriate.

## Lesson 4 Scope Confirmation

Status: **Pass**

Lesson 4 production scope is limited to:

- numbers needed for phone numbers;
- spelling first name and last name;
- saying and writing a simple email;
- basic email symbols: `@` as `at` and `.` as `dot`.

Validation found no Lesson 4 learning content for:

- dates;
- ordinal numbers;
- prices;
- years;
- large numbers;
- complex mathematical operations;
- extended symbol vocabulary;
- parallel grammar topics.

The forbidden topics appear only in the explicit `production_scope.excluded` guardrail, not in Lesson 4 exercises, target language, classwork, or homework content.

## Media Check

Status: **Pass**

No real listening audio files were created. Listening tasks use `media_specifications` with:

- script;
- transcript;
- speakers;
- accent;
- speed;
- duration;
- audio generation prompt;
- comprehension answers;
- `asset_status: spec_only`.

Speaking widget is represented only as an integration placeholder.

## Found Problems

None blocking.

Notes for future implementation:

- Some short-writing accepted answers are model answers; a future checker should support student-specific names, cities, jobs, and contact details.
- Lesson 4 must stay narrow during UI implementation; do not add dates, prices, years, or large-number practice.
- Listening exercises require future audio generation or recording before production use.

## Ready to Connect to UI

Status: **Ready for UI connection in a later v0.2 implementation step.**

Do not connect this file to v0.1.1. The current work only prepares the data layer.
