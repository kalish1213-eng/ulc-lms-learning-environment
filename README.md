# ULC Digital Learning Environment

Static browser prototype for **ULC Beginner English for Adults**.

Current version: **v0.1.1**  
Status: **accepted static prototype baseline**

This is a clickable static prototype, not a production LMS. It demonstrates the intended product direction, native lesson pages, homework mode, dashboards, analytics readiness, and integration boundaries before deeper v0.2 course work begins.

## Open locally

```bash
python -m http.server 4173 --bind 127.0.0.1
```

Then open `http://127.0.0.1:4173/`.

## GitHub Pages

Published prototype:

`https://kalish1213-eng.github.io/ulc-lms-learning-environment/`

The repository is served from the root via GitHub Pages.

## Source of Truth

Core product and acceptance documents:

- `AGENTS.md`
- `docs/ULC_DIGITAL_LEARNING_ENVIRONMENT_SPEC.md`
- `docs/ULC_BEGINNER_MVP_SPEC.md`
- `docs/ULC_ACCEPTANCE_CRITERIA.md`
- `docs/RELEASE_V0_1_1_BASELINE.md`

Supporting v0.1.1 release documents:

- `docs/V0_1_1_CHANGELOG.md`
- `docs/PARTIALS_CLOSURE_V0_1_1.md`
- `docs/RESPONSIVE_QA_V0_1.md`
- `docs/ANALYTICS_EVENTS_V0_1.md`
- `docs/INTEGRATION_CONTRACTS_V0_1.md`
- `docs/ULC_BRAND_TOKENS.md`
- `docs/NEXT_VERSION_V0_2_PLAN.md`

## Scope

- Native interactive LMS pages, not a PDF viewer.
- v0.1.1 static clickable scope for Beginner Unit 1 demo lessons.
- Separate Homework Mode with localStorage progress.
- Student, Teacher, Live Lesson, Methodologist, Analytics, and Integration Readiness screens.
- Original ULC sample content.
- External speaking widget represented only as an integration contract.

## Not Production

v0.1.1 uses mock data and localStorage only. It has no real backend, authentication, WebSocket live state, CRM integration, BI integration, Telegram integration, payment flow, or production data model.
