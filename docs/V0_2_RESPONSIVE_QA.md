# V0.2 Responsive QA

Version: v0.2 release candidate  
Date: 2026-06-18  
Method: browser viewport checks in the in-app browser on local `127.0.0.1:4173`

## Summary

All required screens passed at desktop 1440px, tablet 768px, and mobile 390px after CSS fixes for language chips and Teacher Dashboard table layout.

## QA Table

| Screen | Viewport | Status | Issues found | Fixes made |
|---|---:|---|---|---|
| Student Dashboard | 1440x900 | Pass | None | None |
| Unit Map | 1440x900 | Pass | None | None |
| Lesson Page | 1440x900 | Pass | None | None |
| Exercise Player | 1440x900 | Pass | None | None |
| Homework Mode | 1440x900 | Pass | None | None |
| Teacher Dashboard | 1440x900 | Pass | None | None |
| Live Lesson Mode | 1440x900 | Pass | None | None |
| Methodologist Dashboard | 1440x900 | Pass | None | None |
| Student Dashboard | 768x1024 | Pass | None | None |
| Unit Map | 768x1024 | Pass | None | None |
| Lesson Page | 768x1024 | Pass | None | None |
| Exercise Player | 768x1024 | Pass | None | None |
| Homework Mode | 768x1024 | Pass | None | None |
| Teacher Dashboard | 768x1024 | Pass | None | None |
| Live Lesson Mode | 768x1024 | Pass | None | None |
| Methodologist Dashboard | 768x1024 | Pass | None | None |
| Student Dashboard | 390x844 | Pass | None | None |
| Unit Map | 390x844 | Pass | None | None |
| Lesson Page | 390x844 | Pass | Language focus chips created horizontal overflow in first mobile pass | Added wrapping and `min-width: 0` to `.language-focus` children |
| Exercise Player | 390x844 | Pass | Language focus chips created horizontal overflow in first mobile pass | Same language-focus fix |
| Homework Mode | 390x844 | Pass | None | None |
| Teacher Dashboard | 390x844 | Pass | Table created slight page overflow in first mobile pass | Added fixed table layout and aggressive text wrapping |
| Live Lesson Mode | 390x844 | Pass | None | None |
| Methodologist Dashboard | 390x844 | Pass | None | None |

## Final Metrics

- Horizontal page scroll: none on all checked screens.
- Offscreen elements: 0 on all checked screens.
- Replacement character `�`: not present.
- Browser console errors: none observed during final sweep.

## Notes

- Teacher Dashboard remains desktop-first by product intent, but the mobile view no longer breaks layout.
- Homework Mode is mobile-friendly and keeps the exercise player usable at 390px.
- Exercise Player textarea, choices, matching controls, and word-order controls fit within the mobile viewport.
