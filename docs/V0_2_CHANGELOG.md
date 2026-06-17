# V0.2 Changelog

Date: 2026-06-18  
Build: static browser MVP at `http://127.0.0.1:4173/`  
Basis: `docs/ACCEPTANCE_AUDIT_V0_1.md`

## Summary

V0.2 upgrades the prototype from a shallow MVP demo into a fuller Beginner Unit 1 learning flow. The main changes address the v0.1 audit gaps around course depth, persisted homework progress, teacher visibility, live lesson depth, methodologist workflow states, and integration/analytics representation.

## Product Changes

- Expanded Beginner Unit 1 into **6 lessons**:
  - Lesson 1: Hello, I'm Anna.
  - Lesson 2: Where are you from?
  - Lesson 3: Jobs and numbers.
  - Lesson 4: My people.
  - Lesson 5: Coffee before class.
  - Lesson 6: Unit checkpoint.
- Added practical speaking outcomes, teacher notes, homework, target language, grammar, vocabulary, pronunciation focus, and lesson sections for every Unit 1 lesson.
- Added 24 original sample exercises across Unit 1.
- Preserved the original methodology direction: controlled practice -> semi-controlled practice -> freer speaking -> checkpoint.

## Student / Homework Changes

- Added a dedicated **Homework Mode** view.
- Added `localStorage` persistence under `ulc_mvp_v0_2_progress`.
- Persisted:
  - selected lesson;
  - active exercise;
  - exercise responses;
  - checked results;
  - attempts;
  - last saved timestamp.
- Student Dashboard now calculates Unit 1 progress and certificate progress from saved exercise state.
- Homework Mode shows completion per lesson and can reset local progress for testing.

## Exercise Player Changes

- Exercise Player now works across all six Unit 1 lessons.
- Required MVP exercise types remain represented:
  - fill-gap;
  - multiple-choice;
  - matching;
  - drag-drop;
  - word-order;
  - listen-choose;
  - listen-type;
  - short-writing.
- Auto-check continues to show:
  - correctness;
  - correct answer;
  - short Russian explanation;
  - beginner-friendly rule;
  - micro-practice.

## Teacher Dashboard Changes

- Teacher Dashboard now includes a deeper group monitor:
  - student rows;
  - homework percentage;
  - score percentage;
  - active lesson;
  - risk level;
  - common mistake;
  - next action.
- Added selectable student detail panel.
- Added analytics cards:
  - NPS pulse;
  - retention risk;
  - homework depth;
  - usage depth.
- Expanded integration queue to show service boundaries and mock endpoints.

## Live Lesson Mode Changes

- Live Lesson Mode now follows the selected lesson.
- Teacher can switch the active live exercise within the lesson.
- Added:
  - shared learning space labels;
  - classwork/homework stage indicator;
  - real-time group answer list;
  - pacing steps from lead-in to homework handoff;
  - external speaking widget API contract.
- Speaking widget is still not rebuilt; it remains an external integration surface.

## Methodologist Dashboard Changes

- Methodologist Dashboard now shows:
  - Unit -> 6 Lessons -> Sections -> Exercises structure;
  - teacher book notes for all six lessons;
  - exercise metadata for all 24 exercises;
  - content workflow filters;
  - quality signals;
  - integration adapter boundaries.
- Added visible content statuses:
  - draft;
  - review;
  - approved;
  - archived.
- Added an archived item for the replaced/non-native old PDF import.

## UI / Technical Changes

- Removed dependency on the external stock-style hero image.
- Kept ULC accent color `#3C4AF5`.
- Added responsive styles for:
  - six-lesson Unit map;
  - Homework Mode;
  - analytics cards;
  - integration cards;
  - methodologist filters.
- Kept the app as a no-build static prototype: `index.html`, `src/static-app.js`, `src/styles.css`.

## Known Remaining Limitations

- All data is still static mock data.
- Integration endpoints are visible contracts, not real network calls.
- The UI is more ULC-specific than v0.1 but still does not include official ULC brand assets.
- The localStorage model is browser-local and not multi-device.
- Live Lesson Mode simulates real-time behavior; it does not use WebSockets yet.
- Speaking widget integration is represented by API contract only.
