# Release v0.1.1 Baseline

## Release Identity

- version: `v0.1.1`
- status: accepted static prototype baseline
- public URL: `https://kalish1213-eng.github.io/ulc-lms-learning-environment/`
- release type: static clickable browser prototype
- accepted as: baseline version before v0.2 planning and implementation

## Purpose of This Version

v0.1.1 fixes the accepted baseline for the ULC Digital Learning Environment static prototype. It is intended to demonstrate the core product direction, learning flow, dashboards, homework logic, analytics readiness, and integration boundaries before deeper course production begins.

This version is a reference point for future work: v0.2 should build from this baseline rather than re-opening v0.1.1 scope.

## Implemented Features

- Native interactive LMS pages, not a PDF viewer.
- Beginner English for Adults scope.
- Russian UI and student instructions for Beginner learners.
- English learning content with Russian scaffolding where needed.
- Student Dashboard.
- Beginner Unit Map for compact demo scope.
- Native Lesson Page.
- Exercise Player with required MVP exercise types represented.
- Auto-check, correct answer, and short AI explanation mock.
- Separate Homework Mode with localStorage progress.
- Teacher Dashboard with group, student, homework, mistake, and risk visibility.
- Live Lesson Mode mockup with shared learning space and co-presence concept.
- Methodologist Dashboard with explicit content workflow and archived material.
- Analytics / Revizor mockup with NPS, retention, usage depth, homework completion, progress, live usage, AI usage, high-error exercises, and risk signals.
- Integration Readiness cards for 1C, Revizor / BI, Bitrix24, Telegram, and external Speaking widget.
- ULC brand tokens and light LMS visual style.
- Responsive QA documentation for desktop, tablet, and mobile.

## Known Limitations

- Static prototype only; no real backend.
- Mock data only; no real student records, schedules, analytics, or notifications.
- localStorage is used only for demo progress persistence.
- No real authentication, roles, permissions, or tenant separation.
- No real WebSocket/live collaboration infrastructure.
- No real 1C, Revizor / BI, Bitrix24, Telegram, payment, scheduling, NPS, or speaking widget requests.
- Methodological depth is represented but not yet validated across a full Beginner course.
- Listening and speaking media are mock placeholders; no production audio or speaking scoring is included.
- The prototype is not a production LMS.

## Explicitly Out of Scope

- Building v0.2 features in this release.
- Expanding Beginner Unit 1 to six complete lessons.
- Creating the full Beginner course.
- Implementing backend/API services.
- Implementing real-time WebSocket live mode.
- Rebuilding the external speaking widget.
- Importing or displaying PDFs as the learning experience.
- Copying English File / New English File content, design, exercises, audio, characters, or workbook pages.
- Production-grade assessment, certification, billing, CRM, and reporting workflows.

## Next Planned Version

`v0.2`

v0.2 is planned as the next implementation step. It should expand the accepted baseline into a fuller Beginner Unit 1 with six lessons, deeper methodology, lesson-by-lesson exercises, teacher book materials, homework packs, methodology audit, progress persistence, and preparation for future backend/API/WebSocket architecture.
