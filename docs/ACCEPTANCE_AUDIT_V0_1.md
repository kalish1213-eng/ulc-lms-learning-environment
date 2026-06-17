# Acceptance Audit v0.1

Audit date: 2026-06-17  
Audited build: static browser MVP at `http://127.0.0.1:4173/`  
Source criteria: `docs/ULC_ACCEPTANCE_CRITERIA.md`  
Scope: audit only. No product/code fixes were made during this audit.

## Summary

Overall status: **conditionally acceptable as an MVP prototype, with gaps**.

- Pass: 40 / 50
- Partial: 10 / 50
- Fail: 0 / 50

Key gaps:

- Original ULC content is only partially proven: learning samples appear original, but the hero uses an external stock-style image and there is no provenance record.
- Methodology is represented, but not deeply validated across a full Beginner course.
- Homework exists through lesson exercises, but there is no distinct persisted Homework Mode.
- Methodologist workflow does not visibly include an `archived` content item.
- Analytics and integrations are conceptually represented, but not complete for payments, scheduling, feedback/NPS, and adapter boundaries.
- UI is clean and usable, but not yet fully ULC-branded.
- Mobile width checks passed, but no pixel-level overlap audit was performed.

## Browser Evidence

Browser checks were run against `http://127.0.0.1:4173/`.

- Page title: `ULC Learning Environment`.
- CSS loaded; primary accent observed as `rgb(60, 74, 245)`, matching `#3C4AF5`.
- Russian UI text rendered correctly in the browser; no mojibake was observed in browser text.
- Console errors: none observed.
- Desktop screenshot captured successfully; screenshot was non-empty.
- Main views verified by browser text checks:
  - Student Dashboard
  - Beginner Unit Map
  - Lesson Page / Exercise Player
  - Teacher Dashboard
  - Live Lesson Mode mockup
  - Methodologist Dashboard
- Exercise Player checks:
  - Required exercise types were visible: `fill-gap`, `multiple-choice`, `matching`, `drag-drop`, `word-order`, `listen-choose`, `listen-type`, `short-writing`.
  - Multiple choice correct-answer path showed `Верно`, `Correct answer`, and `AI explanation`.
  - Fill-gap accepted uppercase `FROM`.
  - Short writing accepted `I am Anna. I am from Minsk.`
- Mobile viewport check at `390x844`:
  - Student Dashboard: no horizontal overflow observed.
  - Teacher Dashboard: no horizontal overflow observed.
  - Methodologist Dashboard: no horizontal overflow observed.

## Criteria Audit

| # | Criterion | Status | Evidence / Notes |
|---:|---|---|---|
| 1 | Product is not a PDF viewer. | Pass | No PDF viewer or embedded PDF flow observed. App uses native HTML views. |
| 2 | Lessons are native interactive web pages. | Pass | Lesson Page and Exercise Player render native sections, controls, inputs, buttons, and feedback. |
| 3 | MVP is limited to Beginner English for Adults. | Pass | App title/sidebar and content consistently target `Beginner English for Adults`. |
| 4 | Content is original ULC content. | Partial | Learning samples appear original; however there is no provenance record and the hero image is external stock-style media, not original ULC content. |
| 5 | Methodological logic comparable to English File / New English File, without copying. | Partial | Unit/Lesson/Exercise, speaking outcomes, controlled practice, and review logic are represented. No full methodology/copyright validation was performed. |
| 6 | Learning model is speaking-first. | Pass | Each lesson has `speakingOutcome`; Lesson Page foregrounds Speaking outcome. |
| 7 | Every lesson has a practical speaking outcome. | Pass | All mock lessons in Units 1-2 include a speaking outcome. |
| 8 | Beginner interface and task instructions are in Russian. | Pass | Browser text checks confirm Russian UI/instructions render correctly. |
| 9 | English learning content remains in English with Russian support. | Pass | Target language, prompts, and sample dialogues are English; instructions/support are Russian. |
| 10 | Student Dashboard exists. | Pass | `личный кабинет студента` view exists. |
| 11 | Student can see course, level, unit, lesson, homework, and progress. | Pass | Student dashboard shows course, level, active Unit/Lesson, homework, progress, and certificate progress. |
| 12 | Student has a clear next action. | Pass | Primary action `Продолжить урок` is visible. |
| 13 | Student can use native lesson pages. | Pass | Lesson view is reachable and rendered as native HTML sections. |
| 14 | Student can complete homework mode. | Partial | Exercises can be completed and checked, but there is no separate persisted Homework Mode/state. |
| 15 | Student can see progress and certificate progress. | Pass | Unit progress and Beginner certificate progress are visible. |
| 16 | Student can review vocabulary or weak areas. | Pass | Dashboard includes weekly vocabulary and weak/error areas. |
| 17 | Exercise Player exists. | Pass | Lesson view includes `Exercise Player`. |
| 18 | Required MVP exercise types are represented. | Pass | All required exercise type labels are visible in Exercise Player. |
| 19 | Exercises support answer -> auto-check -> correct answer -> explanation. | Pass | Browser-verified with multiple choice path. |
| 20 | Accepted answer logic supports reasonable Beginner variants. | Pass | Browser-verified uppercase `FROM` and `I am` writing variant; code also normalizes punctuation/spacing. |
| 21 | AI mistake explanations are available in Russian. | Pass | Feedback includes `AI explanation`; Russian explanation content is shown. |
| 22 | AI explanations are short, beginner-friendly, and tied to current lesson. | Pass | Static explanations are short and lesson-specific for current exercise. |
| 23 | External speaking widget is not rebuilt, but integration point exists. | Pass | Live screen shows `POST /api/speaking-sessions` contract and states the widget is external. |
| 24 | Teacher Dashboard exists. | Pass | `кабинет преподавателя` view exists. |
| 25 | Teacher can see groups. | Pass | Teacher view shows `Beginner A1 Evening`. |
| 26 | Teacher can see individual students. | Pass | Student rows for Anna/Maria/Irina/Ekaterina are visible. |
| 27 | Teacher can see homework completion. | Pass | Teacher table shows homework percentages. |
| 28 | Teacher can see exercise results and typical mistakes. | Pass | Teacher table shows score percentages and common mistakes. |
| 29 | Live Lesson Mode exists. | Pass | `Live Lesson Mode mockup` view exists. |
| 30 | Live Lesson Mode shows simulated/real real-time answer visibility. | Pass | Live view shows student answer status and a sample `Student input`. |
| 31 | Live Lesson Mode includes shared learning space concept. | Pass | Live view includes `shared learning space` and teacher-led labels. |
| 32 | Two-cursor/co-presence mockup is present. | Pass | Live canvas shows Teacher and Anna cursors. |
| 33 | Methodologist Dashboard exists. | Pass | `кабинет методиста` view exists. |
| 34 | Methodologist can see course/unit/lesson/section/exercise structure. | Pass | Course tree and exercise library are visible. |
| 35 | Methodologist can see or edit exercise metadata. | Partial | Exercise metadata is visible; edit/create buttons are non-functional mock controls. |
| 36 | Teacher book notes are represented. | Pass | Methodologist and Lesson views show teacher book notes. |
| 37 | Content status supports draft, review, approved, archived. | Partial | `draft`, `review`, `approved` are visible; `archived` styling exists in CSS but no archived content item is rendered. |
| 38 | Progress tracking exists. | Pass | Progress bars and completion percentages appear for student, unit, exercises, and certificate. |
| 39 | Analytics include NPS, retention, homework completion, depth of usage concepts. | Partial | Revizor/BI integration text includes retention, NPS, homework depth; there is no dedicated analytics dashboard or calculated metrics view. |
| 40 | Risk signals are represented. | Pass | Teacher dashboard includes `Risk signals`, inactivity/missed homework style rows, and risk coloring. |
| 41 | Architecture is API-ready for all named integrations. | Partial | 1C, Revizor/BI, Bitrix24, Telegram, and speaking widget are visible. Payments, scheduling, and feedback/NPS are not visible in the prototype UI. |
| 42 | Mock data acceptable only when real APIs unavailable and boundaries clear. | Partial | Mock data exists in static JS and integration placeholders are visible; adapter/service boundaries are not separated in code. |
| 43 | UI looks like a ULC learning product, not generic template. | Partial | UI is clean, adult-oriented, and learning-focused. It still lacks real ULC brand assets/design-system specificity and uses a generic `U` mark plus external hero image. |
| 44 | Main accent color is `#3C4AF5`. | Pass | CSS variable `--accent: #3c4af5`; browser observed `rgb(60, 74, 245)`. |
| 45 | Student homework is mobile-friendly. | Pass | Mobile viewport `390x844` showed Student Dashboard with no horizontal overflow and visible next action. |
| 46 | Teacher and Methodologist dashboards are desktop-friendly. | Pass | Desktop layouts are table/grid oriented and browser-verified as accessible views. |
| 47 | Exercise text, inputs, buttons, and feedback do not overlap on mobile or desktop. | Partial | No horizontal overflow was observed in tested viewports; no pixel-level overlap/visual diff audit was performed. |
| 48 | Interface avoids visual noise and keeps next action clear. | Pass | Primary actions are clear; layout is restrained and scan-friendly. |
| 49 | Feature can be tested in browser or verified non-visually. | Pass | Current features were browser-tested or verified through source inspection. |
| 50 | Implementation task checked against this document before considered done. | Pass | This audit maps the implementation to all 50 criteria. |

## Recommended Follow-Up Order

1. Add a visible `archived` item/state to the Methodologist workflow.
2. Add a dedicated Homework Mode route/state with completion persistence.
3. Expand integration placeholders to include payments, scheduling, and feedback/NPS.
4. Add a small Analytics/Revizor panel with NPS, retention, homework depth, and usage depth.
5. Replace generic/stock visual branding with ULC-owned visual assets or a documented approved asset source.
6. Run a visual overlap pass on desktop and mobile after the next UI iteration.
