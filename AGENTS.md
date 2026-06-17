# ULC Digital Learning Environment - Codex Instructions

## Project Context

This project is for ULC.by, a language school focused on helping adult students speak confidently.

The first product target is a browser-based MVP for **Beginner English for Adults**. The system must support group learning, offline and online classes, homework, live teacher-led work, and measurable learning progress.

## Required Reading Before Work

Before implementing or changing product behavior, read these documents and treat them as the source of truth:

1. `docs/ULC_DIGITAL_LEARNING_ENVIRONMENT_SPEC.md`
2. `docs/ULC_BEGINNER_MVP_SPEC.md`
3. `docs/ULC_ACCEPTANCE_CRITERIA.md`

## Product Principles

- Build native interactive LMS pages, not a PDF viewer.
- Content must be original ULC content.
- Methodology should be comparable to English File / New English File in structure, pacing, exercise variety, and communicative progression, but must not copy texts, dialogues, exercises, images, audio, characters, workbook pages, or page design.
- The MVP is limited to Beginner English for Adults.
- Beginner student interface and task instructions must be in Russian.
- Learning examples, target phrases, dialogues, and language input must be in English, with Russian support where appropriate.
- The course must be speaking-first: every lesson should lead to a practical speaking outcome.
- Live lesson mode is a core feature.
- Homework mode must work independently from live lessons.
- A separate speaking widget already exists or will exist; design an integration surface for it, but do not rebuild it in this MVP.

## UX Principles

- Use a light, modern, ULC-style interface.
- Main accent color: `#3C4AF5`.
- Avoid visual noise and generic template screens.
- Student screens must make the next action obvious.
- Student homework must be mobile-friendly.
- Teacher and methodologist dashboards should be efficient on desktop.
- Exercise feedback must feel calm, supportive, and beginner-friendly.

## Technical Principles

- Keep the architecture platform-independent.
- Use mock data when real APIs are unavailable.
- Keep code API-ready for future integration with 1C, Revizor/BI, Bitrix24, Telegram, payment systems, schedule systems, NPS/feedback, and the speaking widget.
- Separate course content, exercise definitions, answer checking, progress state, analytics events, and UI rendering.
- The exercise engine must support multiple exercise types and be extensible.
- Live lesson mode should be designed around shared state and real-time updates, even if the first MVP simulates them.

## Acceptance Rule

A task is not complete unless it supports the product logic in the required docs and can be evaluated against `docs/ULC_ACCEPTANCE_CRITERIA.md`.
