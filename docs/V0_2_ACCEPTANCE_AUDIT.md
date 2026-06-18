# V0.2 Acceptance Audit

Version: v0.2 release candidate  
Date: 2026-06-18  
Scope: static browser prototype on `feature/v0.2-unit-1`  
Public deployment: not updated

## Sources Checked

- `AGENTS.md`
- `docs/ULC_ACCEPTANCE_CRITERIA.md`
- `docs/BEGINNER_UNIT_1_METHODOLOGY_SPEC.md`
- `docs/BEGINNER_UNIT_1_METHODOLOGY_AUDIT.md`
- `docs/BEGINNER_UNIT_1_CONTENT_SCHEMA.md`
- `docs/BEGINNER_UNIT_1_CONTENT_VALIDATION.md`
- `src/data/beginner-unit-1.js`
- v0.2 app implementation and services

## Result

| Area | Status | Evidence | Notes |
|---|---|---|---|
| Static app remains browser-openable | Pass | Python static server on `127.0.0.1:4173`; no npm/build required | ES modules are served directly |
| Not a PDF viewer | Pass | Lesson Page renders native sections, cards, exercises, media specs | No PDF iframe/viewer added |
| Original ULC content | Pass | Unit 1 data is original and data-driven | No copied English File/New English File text |
| MVP scope is Beginner English for Adults | Pass | Unit 1 title and all dashboards are Beginner Unit 1 focused | No extra level/course scope added |
| Beginner Unit 1 has 6 lessons | Pass | `getLessons('beginner_u1').length === 6` | Lessons 1-6 present |
| Unit has 24 exercises | Pass | `getAllExercises('beginner_u1').length === 24` | 4 core exercises per lesson |
| Classwork/homework balance | Pass | 12 classwork / 12 homework | Matches prepared validation target |
| Data layer connected to UI | Pass | UI imports content through `content-service.js` | No copied learning content in `static-app.js` |
| Lesson Page | Pass | Renders lesson goal, speaking outcome, vocabulary, grammar, pronunciation, sections, exercises, media specs, teacher notes | Uses data schema fields |
| Exercise Player | Pass | Supports current Unit 1 exercise types, auto-check, correct answer, hints, AI explanation mock | Short writing is submitted for teacher review |
| Auto-check normalization | Pass | Smoke tests passed for case, punctuation, `I am`/`I'm`, arrays | Real NLP checking is out of scope |
| Homework Mode | Pass | Separate screen with current task, Unit/Lesson, deadline, exercise statuses, percentage, continue action | Uses localStorage progress |
| Student Dashboard | Pass | Shows current lesson, next lesson, unit progress, homework, reset progress | Demo-only student |
| Teacher Dashboard | Pass | Shows cohort table, selected student, class/homework metrics, risk signals, Revizor/BI mock | Mock cohort plus local demo student |
| Live Lesson Mode | Partial by design for static prototype | Teacher controls, lesson queue, exercise stage, shared board, participant mock | No WebSocket or real multi-user sync |
| Methodologist Dashboard | Pass | Workflow statuses, materials list, archived sample, unit tree, data model coverage | Editing is mock-only |
| Analytics / Revizor readiness | Partial by design for static prototype | Local analytics events logged to `ulc_lms_analytics_v0_2`; dashboard mock visible | No BI backend or event pipeline |
| API-ready integrations | Partial by design for static prototype | Existing integration docs/contracts remain; app performs no external requests | Real endpoints not implemented |
| Speaking widget | Pass | Speaking activities include placeholder integration | Widget is not rebuilt |
| Russian student instructions | Pass | Exercise and section instructions read from `instruction_ru` / `student_instruction_ru` | Teacher/operator labels can be bilingual |
| English learning content | Pass | Target language, prompts, answers, scripts are English | Russian used for instructions/explanations |
| Lesson 4 limited scope | Pass | Production exercise content has no dates, ordinals, prices, years, big numbers, math operations, or expanded symbol list | Excluded topics are stored only as guardrails |
| Responsive QA | Pass | 1440, 768, 390 checks passed on all main screens | See `V0_2_RESPONSIVE_QA.md` |
| Published app unchanged | Pass | No push/merge/publish performed | v0.1.1 public baseline remains separate |

## Verification Notes

- Browser route smoke passed for:
  - Student Dashboard
  - Unit Map
  - Lesson Page
  - Exercise Player
  - Homework Mode
  - Teacher Dashboard
  - Live Lesson Mode
  - Methodologist Dashboard
- Browser console errors: none observed during route and responsive checks.
- `static-app.js` is ASCII-only after the final hygiene pass.
- Data file contains valid ES module export while preserving previous global/CommonJS compatibility guards.

## Verdict

Ready for internal v0.2 RC review and ready to publish as a static prototype after a separate explicit publish command.

Not ready as a production LMS because backend, auth, real integrations, real audio, real AI, and WebSocket sync are intentionally out of scope.
