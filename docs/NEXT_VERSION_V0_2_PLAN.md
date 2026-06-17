# Next Version Plan: v0.2

This file is a planning document only. It does not change the current v0.1.1 application.

## Goal

Build on the accepted v0.1.1 static baseline and move toward a fuller Beginner Unit 1 prototype with stronger methodology, lesson content, teacher support, homework, progress persistence, and future backend readiness.

## Planned Scope

### Beginner Unit 1 on 6 Lessons

- Define a complete Unit 1 arc for Beginner English for Adults.
- Create 6 connected lessons with a clear communicative progression.
- Keep every lesson speaking-first.
- Keep Russian UI and instructions for Beginner students.
- Keep English as the learning content language.
- Avoid copying English File / New English File materials.

### Full Methodological Structure

- Define Unit goals.
- Define lesson goals.
- Define vocabulary, grammar, pronunciation, listening, reading, writing, and speaking outcomes.
- Make lesson pacing comparable to a modern communicative adult English course without copying any protected source.
- Add clear review and recycle points across the unit.

### Exercises for Every Lesson

- Add lesson-specific exercise sets.
- Include the required MVP exercise types across the unit:
  fill in the gaps, multiple choice, matching, drag-and-drop, word order, listen and choose, listen and type, and short writing.
- Preserve answer -> auto-check -> correct answer -> AI explanation flow.
- Add reasonable Beginner answer tolerance rules where needed.

### Teacher Book for Every Lesson

- Add teacher notes for each lesson.
- Include lesson aims, timing, board plan, anticipated mistakes, correction tips, and speaking setup.
- Add guidance for live lesson use.
- Add notes for when to use external speaking widget integration.

### Homework Pack

- Create a homework pack for each lesson.
- Keep Homework Mode separate from Lesson Page.
- Track per-exercise status.
- Show completion percent.
- Keep teacher visibility into homework completion and retry needs.

### Methodology Audit

- Audit the six-lesson Unit 1 for:
  speaking-first flow,
  Beginner load,
  adult relevance,
  originality,
  pacing,
  progression,
  review logic,
  teacher usability,
  homework fit.

### Progress Persistence

- Preserve localStorage persistence for the static prototype.
- Prepare the progress model so it can later move to backend persistence.
- Track lesson progress, homework progress, exercise results, attempts, correct-answer views, and AI explanation usage.

### Future Backend/API/WebSocket Preparation

- Prepare clean boundaries for:
  course content,
  exercise definitions,
  answer checking,
  progress state,
  analytics events,
  integrations,
  live lesson shared state.
- Keep API-readiness for:
  1C,
  Revizor / BI,
  Bitrix24,
  Telegram,
  external speaking widget,
  future scheduling/payment/feedback flows.
- Prepare Live Lesson Mode for future WebSocket/shared-state implementation without building the real backend in v0.2 unless explicitly approved.

## Out of Scope for This Plan

- No v0.2 implementation in the release hygiene step.
- No UI changes to v0.1.1.
- No new screens in v0.1.1.
- No backend/API/WebSocket implementation yet.
- No production LMS readiness claim.
