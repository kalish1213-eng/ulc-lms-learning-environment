# V0.2 Changelog

Version: v0.2 release candidate  
Branch: `feature/v0.2-unit-1`  
Status: implemented locally, not published to GitHub Pages

## Summary

V0.2 connects the validated Beginner Unit 1 content layer to the static browser prototype. The app remains a static site with no build step and no real backend/API calls.

## Added

- ES module app entry via `index.html`.
- Data-driven UI connected to `src/data/beginner-unit-1.js`.
- Services:
  - `src/services/content-service.js`
  - `src/services/autocheck.js`
  - `src/services/progress-store.js`
  - `src/services/analytics-service.js`
- Full Beginner Unit 1 surface:
  - Student Dashboard
  - Beginner Unit Map with 6 lessons
  - Lesson Page
  - Exercise Player
  - Homework Mode
  - Teacher Dashboard
  - Live Lesson Mode mockup
  - Methodologist Dashboard mockup
- Local progress storage under `ulc_lms_progress_v0_2`.
- Local analytics event storage under `ulc_lms_analytics_v0_2`.
- Safe legacy detection for v0.1.1 progress key without deleting old data.
- Reset demo progress action with confirmation.

## Changed

- UI no longer uses hardcoded course content from `static-app.js`.
- Lesson/exercise rendering now reads from content-service accessors.
- Exercise Player supports the prepared Unit 1 exercise types:
  - fill gap
  - multiple choice
  - matching
  - word order
  - listen/type and listen/choose placeholders
  - drag/drop-style ordering
  - short writing submission
- Lesson 4 remains limited to contact details: phone digits, spelling first/last name, simple email, `at`, and `dot`.
- CSS received responsive fixes for mobile Lesson Page, Exercise Player, Homework Mode, Teacher Dashboard, Live Mode, and Methodologist Dashboard.

## Verification

- Node syntax check: `src/static-app.js` passed.
- Service import check: data/content/progress/autocheck modules passed.
- Data validation:
  - 6 lessons
  - 24 exercises
  - 12 classwork exercises
  - 12 homework exercises
  - unique lesson IDs
  - unique exercise IDs
  - no missing exercise-to-lesson references
- Auto-check smoke:
  - case normalization accepted `FROM` for `from`
  - full form accepted `I am` for `I'm`
  - punctuation/question normalization accepted
  - ordered array answer accepted
  - progress stored as `done`
- Browser route smoke passed for all main screens.
- Responsive QA passed at 1440, 768, and 390 widths.

## Not Included

- No publishing to production GitHub Pages.
- No merge.
- No real backend/API/WebSocket.
- No real audio files.
- No real AI calls.
- No real speaking widget implementation.
