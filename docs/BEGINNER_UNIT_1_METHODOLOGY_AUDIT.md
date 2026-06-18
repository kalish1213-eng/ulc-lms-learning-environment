# Beginner Unit 1 Methodology Audit

Audit target: `docs/BEGINNER_UNIT_1_METHODOLOGY_SPEC.md`  
Audit scope: methodology document only. No app, UI, `src`, `index.html`, or styles changes.  
Unit: **Unit 1. Nice to meet you**  
Audit result date: 2026-06-18

## Executive Summary

The Unit 1 methodology spec is strong enough to become the basis for v0.2 implementation. It has a clear communicative progression, every lesson leads to a speaking outcome, and the content is original ULC sample material rather than copied coursebook text.

Main caution: Lesson 4 is the only lesson that risks overload for true Beginner students because it combines numbers, phone numbers, spelling, alphabet awareness, and email. It is still usable, but implementation should keep alphabet/email work tightly scaffolded.

Overall verdict: **Ready for implementation with P1/P2 fixes during v0.2 content build**.

## Per-Lesson Audit Table

| Lesson | Status | Strengths | Problems | Required fixes | Priority |
|---|---|---|---|---|---|
| Lesson 1: Hello! I'm... | Pass | Clear lesson goal; concrete speaking outcome; Beginner-safe chunks; Russian instructions; English target language; vocabulary, grammar, pronunciation, dialogue, homework, teacher notes, typical mistakes, AI examples, and acceptance criteria are all present. | Minor: classwork mentions formal/informal greetings, which could distract if over-taught. | Keep formal/informal distinction as quick recognition only; preserve main chunk focus: `Hello`, `I'm`, `Nice to meet you`. | P2 |
| Lesson 2: Where are you from? | Pass | Strong progression from Lesson 1; clear question/answer outcome; good question-order focus; classwork and homework are connected; typical Russian-speaker errors are well predicted. | Optional stretch `This is ... He/She is from ...` introduces extra grammar not in the lesson spine. | Keep partner introduction as teacher-only optional stretch; do not require `he/she` for acceptance in core implementation. | P2 |
| Lesson 3: What's your job? | Pass | Useful adult topic; manageable grammar focus on `I'm a/an ...`; speaking task is practical; `a/an` mistakes are covered; homework supports classwork. | Eight jobs are acceptable but close to the upper limit for Beginner if unsupported. | In implementation, use visual cards and allow students to add their own job only when it is simple and high-frequency. | P2 |
| Lesson 4: Numbers, Phone Numbers and Spelling | Partial | Very practical lesson; clear contact-detail speaking outcome; pronunciation awareness is useful; homework is directly tied to classwork; privacy and pacing notes are good. | Highest overload risk: numbers 0-20, phone numbers, spelling, alphabet letters, email, and contact card in one lesson. Email spelling may be too heavy for some Beginner groups. | Limit production scope to numbers 0-20, simple name spelling, and one short mock phone number. Treat email as recognition/support unless group is ready. Keep contact details mock-safe. | P1 |
| Lesson 5: Personal Information | Pass | Good consolidation lesson; links previous content into forms and interviews; supports live lesson mode well; clear speaking outcome and practical homework. | Could become form-heavy if implemented as paperwork rather than speaking support. | Keep the form as a speaking scaffold; require oral partner interview and short partner intro as the main success measure. | P2 |
| Lesson 6: Practical English: Meeting a New Person | Pass | Strong unit consolidation; practical dialogue; clear final speaking task; includes reduced-support repetition; acceptance criteria are communicative and measurable. | Dialogue includes `What about you?` and email chunking, which may need careful pre-teaching. | Keep `What about you?` as a useful fixed phrase; scaffold email with visual support or allow phone/name spelling alternative. | P2 |

## 20-Criterion Lesson Check

Legend: **Pass** = present and suitable; **Partial** = present but needs implementation care; **Fail** = missing or unsuitable.

| Criterion | L1 | L2 | L3 | L4 | L5 | L6 |
|---|---|---|---|---|---|---|
| 1. Clear lesson goal | Pass | Pass | Pass | Pass | Pass | Pass |
| 2. Concrete speaking outcome | Pass | Pass | Pass | Pass | Pass | Pass |
| 3. Beginner-level material | Pass | Pass | Pass | Partial | Pass | Pass |
| 4. Not overloaded | Pass | Pass | Pass | Partial | Pass | Pass |
| 5. Student instructions in Russian | Pass | Pass | Pass | Pass | Pass | Pass |
| 6. Learning material in English | Pass | Pass | Pass | Pass | Pass | Pass |
| 7. Vocabulary focus | Pass | Pass | Pass | Pass | Pass | Pass |
| 8. Grammar focus | Pass | Pass | Pass | Pass | Pass | Pass |
| 9. Pronunciation focus/awareness | Pass | Pass | Pass | Pass | Pass | Pass |
| 10. Listening/dialogue task | Pass | Pass | Pass | Pass | Pass | Pass |
| 11. Speaking preparation | Pass | Pass | Pass | Pass | Pass | Pass |
| 12. Freer/practical speaking | Pass | Pass | Pass | Pass | Pass | Pass |
| 13. Homework | Pass | Pass | Pass | Pass | Pass | Pass |
| 14. Homework linked to classwork | Pass | Pass | Pass | Pass | Pass | Pass |
| 15. Teacher notes | Pass | Pass | Pass | Pass | Pass | Pass |
| 16. Typical Russian-speaker mistakes | Pass | Pass | Pass | Pass | Pass | Pass |
| 17. AI explanation examples | Pass | Pass | Pass | Pass | Pass | Pass |
| 18. Acceptance criteria | Pass | Pass | Pass | Pass | Pass | Pass |
| 19. Low risk of copying English File wording | Pass | Pass | Pass | Pass | Pass | Pass |
| 20. Usable with adult ULC Beginner group | Pass | Pass | Pass | Partial | Pass | Pass |

## Unit-Level Audit

| Unit Criterion | Status | Notes |
|---|---|---|
| 1. Logical progression from Lesson 1 to Lesson 6 | Pass | The unit moves naturally from greeting/name to origin, job, contact details, personal information, and a practical first-meeting dialogue. |
| 2. Leads to a real speaking outcome | Pass | The final outcome is a realistic first-meeting conversation with name, city/country, job, and contact detail. |
| 3. Not too large | Partial | Unit size is appropriate overall, but Lesson 4 should be constrained during implementation. |
| 4. Not too little practice | Pass | Each lesson includes controlled practice, pair speaking, homework, and a practical output. |
| 5. Balance of vocabulary / grammar / pronunciation / listening / speaking / homework | Pass | The balance is visible across all six lessons, with speaking as the spine. |
| 6. Enough material for Live Lesson Mode | Pass | Pair work, role cards, board prompts, dialogue ordering, and live answer visibility can be derived from the spec. |
| 7. Enough material for Homework Mode | Pass | Each lesson has a homework flow and exercise list suitable for Homework Mode. |
| 8. Basis for Teacher Dashboard | Pass | Teacher notes, typical mistakes, acceptance criteria, homework tasks, and error patterns provide dashboard signals. |
| 9. Basis for Methodologist Dashboard | Pass | Lesson structure, exercise lists, content policy, teacher notes, and criteria can become methodologist metadata. |
| 10. Structure convertible to data model | Pass | Unit, lesson, vocabulary, grammar, pronunciation, dialogue, classwork, homework, exercises, mistakes, AI explanations, and criteria are separable entities. |

## Strengths Across the Unit

- The unit has a coherent adult Beginner journey.
- Every lesson ends in a practical speaking outcome.
- The classwork flow follows a familiar communicative lesson rhythm without copying protected materials.
- Russian instructions and English learning content are consistently separated.
- Homework is connected to classwork in all lessons.
- Teacher notes and Russian-speaker mistake patterns are useful for ULC teachers.
- AI explanations are short, Russian, and beginner-friendly.
- The spec already supports future Lesson Page, Homework Mode, Teacher Dashboard, Methodologist Dashboard, analytics tags, and data modeling.

## Problems and Required Fixes Before/During Implementation

| Priority | Problem | Required Fix |
|---|---|---|
| P1 | Lesson 4 may overload true Beginner learners with numbers, spelling, phone, email, alphabet awareness, and contact card output. | Limit the production outcome: numbers 0-20, simple name spelling, and one short mock phone number. Treat email as supported recognition or optional output. |
| P2 | Lesson 2 optional partner-introduction stretch introduces `he/she`, which is outside the core Unit 1 language spine. | Keep as optional teacher stretch only; do not make it part of student acceptance criteria. |
| P2 | Lesson 3 vocabulary set may be heavy if all 8 jobs are taught equally. | Prioritize 5-6 core jobs, then allow student-specific jobs with support. |
| P2 | Lesson 5 can become form-filling rather than speaking if implemented too literally. | Make the form a scaffold for partner interview and oral introduction. |
| P2 | Lesson 6 final dialogue includes extra useful chunks such as `What about you?` and email spelling. | Pre-teach as fixed chunks and provide substitution cards; allow phone/name spelling alternative for weaker groups. |

## English File / New English File Similarity Risk

Status: **Pass**

The spec uses a common communicative Beginner sequence, but no specific coursebook text, task wording, dialogue, character set, page structure, visual design, or workbook activity is copied. Phrases like `Nice to meet you`, `Where are you from?`, and `What's your job?` are generic Beginner English and are safe as language targets.

Implementation caution: keep all future dialogues, images, examples, audio scripts, exercise wording, and page layouts ULC-original.

## Data Model Readiness

The spec can be converted into a structured content model with these entities:

- `unit`
- `lesson`
- `lessonGoal`
- `speakingOutcome`
- `targetVocabulary`
- `targetGrammar`
- `pronunciationFocus`
- `dialogue`
- `readingWritingSupport`
- `classworkFlow`
- `homeworkFlow`
- `exercise`
- `teacherNote`
- `typicalMistake`
- `aiExplanationExample`
- `acceptanceCriterion`

Recommended v0.2 implementation step: convert this document into mock data before building UI changes, so Lesson Page, Homework Mode, Teacher Dashboard, Methodologist Dashboard, analytics events, and future API contracts use the same source structure.

## Final Verdict

**Ready for implementation.**

Condition: address the P1 overload risk in Lesson 4 during v0.2 content implementation. The remaining fixes are P2 refinements and do not block implementation.
