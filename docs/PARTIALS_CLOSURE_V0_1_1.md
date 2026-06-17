# Partials Closure v0.1.1

Source audit: `docs/ACCEPTANCE_AUDIT_V0_1.md`  
Patch scope: close the 10 Partial zones that can be addressed in a static clickable prototype without starting the full v0.2 Unit 1 build.

## Closure Table

| Criterion | What was Partial | What changed in v0.1.1 | Where implemented | Status |
|---:|---|---|---|---|
| 4 | Original content looked original, but provenance was not documented and the hero used an external stock-style visual. | Removed external hero dependency, documented original sample content and asset guardrails. | `src/static-app.js`, `src/styles.css`, `docs/CONTENT_PROVENANCE_V0_1_1.md` | Pass for static prototype |
| 5 | Methodology was represented, but not deeply validated across a full Beginner course. | Added clearer speaking-first method notes in Unit Map and lesson surfaces, without expanding into full six-lesson Unit 1. | `src/static-app.js`, `docs/CONTENT_PROVENANCE_V0_1_1.md` | Partial by design for static prototype |
| 14 | Exercises existed, but Homework Mode was not a separate persisted mode/state. | Added dedicated Homework Mode screen with current homework, Unit/Lesson, deadline, exercise statuses, percent, continue button, auto-check, correct answer, AI explanation, and Teacher Dashboard link. | `src/static-app.js` | Pass |
| 35 | Methodologist could see metadata, but edit/create controls were non-functional mock controls. | Added editable metadata mock form that saves draft fields to localStorage. | `src/static-app.js` | Pass for static prototype |
| 37 | `archived` styling existed, but no archived item was rendered. | Added explicit full workflow and visible archived material example with explanation. | `src/static-app.js` | Pass |
| 39 | Analytics concepts existed only in integration text. | Added dedicated Analytics / Revizor mockup with NPS, retention, usage depth, homework completion, active students, group/student progress, live usage, AI usage, high-error exercises, and risk signals. | `src/static-app.js`, `docs/ANALYTICS_EVENTS_V0_1.md` | Pass |
| 41 | Integrations were not complete for scheduling, feedback/NPS, payments, and visible adapter boundaries. | Added Integration Readiness screen and contracts for 1C, Revizor/BI, Bitrix24, Telegram, and Speaking widget; mapped scheduling, NPS/feedback, and future payment status in docs. | `src/static-app.js`, `docs/INTEGRATION_CONTRACTS_V0_1.md` | Partial by design for static prototype |
| 42 | Mock data existed, but boundaries were not clear enough. | Documented mock endpoints, event contracts, payloads, and “mock only” status; UI states that no real requests are sent. | `src/static-app.js`, `docs/ANALYTICS_EVENTS_V0_1.md`, `docs/INTEGRATION_CONTRACTS_V0_1.md` | Pass for static prototype |
| 43 | UI was clean but still generic and lacked ULC brand system specificity. | Added documented ULC brand tokens and wired core CSS variables into the interface. | `src/styles.css`, `docs/ULC_BRAND_TOKENS.md` | Pass for static prototype |
| 47 | Mobile width checks passed, but no explicit overlap QA table existed. | Added responsive QA pass for desktop/tablet/mobile with issues and fixes. | `docs/RESPONSIVE_QA_V0_1.md`, `src/styles.css` | Pass after QA |

## Remaining Honest Limits

- Criterion 5 remains **Partial by design for static prototype** because a deep methodology validation requires the full Beginner course content, which this patch intentionally does not create.
- Criterion 41 remains **Partial by design for static prototype** for real backend/API execution. UI readiness, mock endpoints, and payload contracts are present; real external integrations are intentionally not called.
