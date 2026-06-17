# v0.1.1 Changelog

Patch goal: close the 10 Partial zones from `docs/ACCEPTANCE_AUDIT_V0_1.md` without starting the full v0.2 Unit 1 build.

## Product Surface

- Renamed the active prototype surface to `v0.1.1`.
- Kept a compact Beginner Unit 1 demo scope instead of expanding to six lessons.
- Removed old v0.2 markers from the active app and README.
- Removed the premature `docs/V0_2_CHANGELOG.md` artifact.

## Homework Mode

- Added a dedicated Homework Mode screen.
- Added current homework, Unit/Lesson, deadline, exercise list, status per exercise, overall percent, and “Продолжить домашку”.
- Connected Homework Mode progress to localStorage.
- Added visible auto-check, correct answer, AI explanation after mistake, and Teacher Dashboard link.

## Methodologist Workflow

- Added visible status workflow:
  draft, AI-generated, methodist review, language review, UX review, pilot, approved, published, needs revision, archived.
- Added status filter/list.
- Added archived material example.
- Added explanation that archived material is hidden from students but available in methodologist history.
- Added editable metadata mock saved to localStorage.

## Analytics / Revizor

- Added dedicated Analytics / Revizor mockup.
- Added mock metrics for NPS, retention, usage depth, homework completion, active students, group progress, student progress, live mode usage, and AI explanation usage.
- Added high-error exercises and students with risk signals.
- Added `docs/ANALYTICS_EVENTS_V0_1.md`.

## Integrations

- Added Integration Readiness screen.
- Added cards for 1C, Revizor / BI, Bitrix24, Telegram, and Speaking widget.
- Added `docs/INTEGRATION_CONTRACTS_V0_1.md`.
- No real external requests are made.

## ULC Branding

- Added documented brand tokens in `docs/ULC_BRAND_TOKENS.md`.
- Added CSS variables:
  `--ulc-blue`, `--ulc-bg`, `--ulc-card-bg`, `--ulc-radius`, `--ulc-shadow`, `--ulc-text`, `--ulc-muted`.
- Replaced the stock-style hero dependency with a native ULC-branded UI block.

## QA and Audit

- Added `docs/CONTENT_PROVENANCE_V0_1_1.md`.
- Added `docs/PARTIALS_CLOSURE_V0_1_1.md`.
- Added responsive QA documentation in `docs/RESPONSIVE_QA_V0_1.md`.
- Browser QA status is recorded separately in the responsive QA file.
