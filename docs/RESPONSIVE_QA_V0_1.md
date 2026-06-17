# Responsive QA v0.1.1

QA date: 2026-06-18  
Test target: `http://127.0.0.1:4173/`  
Scope: manual/browser-assisted responsive and overlap check for the v0.1.1 static prototype.

## Checks

- No document-level horizontal scroll.
- Inputs, selects, textareas, and buttons do not clip visible text.
- Cards and grids collapse without breaking layout.
- Teacher Dashboard remains readable on desktop.
- Homework Mode is usable on mobile.
- Exercise Player remains stable on mobile.

## Results

| Screen | Viewport | Status | Issues found | Fixes made |
|---|---|---|---|---|
| Teacher Dashboard | 1440x900 desktop | Pass | No horizontal scroll; roster table readable; controls not clipped. | Kept desktop-first grid and internal table scrolling. |
| Methodologist Dashboard | 1440x900 desktop | Pass | No horizontal scroll; workflow/status grid readable. | Added workflow grid, status wrapping, and stable card spacing. |
| Analytics / Revizor | 1440x900 desktop | Pass | No horizontal scroll; metric cards readable. | Added responsive analytics grid. |
| Integration Readiness | 1440x900 desktop | Pass | No horizontal scroll; mock endpoints wrap correctly. | Added `overflow-wrap` for code/payload text. |
| Lesson Page / Exercise Player | 1440x900 desktop | Pass | No overlap; exercise controls stable. | Reused fixed player surface and responsive tabs. |
| Student Dashboard | 768x1024 tablet | Pass | No horizontal scroll; cards collapse cleanly. | Existing tablet breakpoint retained. |
| Homework Mode | 768x1024 tablet | Pass | No horizontal scroll; homework proof cards collapse. | Added responsive `homework-proof` grid. |
| Lesson Page / Exercise Player | 768x1024 tablet | Pass | No input or button clipping. | Existing two-column lesson sections collapse. |
| Teacher Dashboard | 768x1024 tablet | Pass | No document-level horizontal scroll; table uses internal scroll if needed. | Preserved internal `.student-table` overflow. |
| Student Dashboard | 390x844 mobile | Pass | No horizontal scroll; next action visible. | Mobile breakpoint keeps single-column layout. |
| Homework Mode | 390x844 mobile | Pass | No horizontal scroll; “Продолжить домашку” visible; statuses readable. | Homework list and proof cards collapse to one column. |
| Lesson Page / Exercise Player | 390x844 mobile | Pass | No field overlap; Exercise Player remains usable. | Choice grid, word grid, matching labels, and headers collapse to one column. |

## Browser Evidence Summary

- Console errors: none.
- Local persistence verified through reload: completed exercise answer and feedback restored from localStorage.
- Horizontal overflow checks passed for all tested views: document `scrollWidth` did not exceed `clientWidth`.
- Control clipping checks passed: visible inputs/selects/textareas and buttons did not report text/control overflow.

## Remaining Limits

This is not a pixel-diff visual regression suite. It is a manual/browser-assisted QA pass appropriate for the static v0.1.1 prototype.
