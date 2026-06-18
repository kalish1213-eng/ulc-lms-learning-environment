# ULC LMS v0.2 Visual QA

## Scope

Visual QA for the v0.2 student learning experience redesign.

No methodology, content data, autocheck, or progress-store changes were included in this QA patch.

## Browser QA Results

| Screen | Viewport | Status | Issues Found | Fixes Made |
| --- | --- | --- | --- | --- |
| Student Dashboard | 1440 x 900 | Pass | No horizontal overflow. Student nav shows only four items. Technical labels hidden. | None needed. |
| Unit Map | 1440 x 900 | Pass | Six illustrations loaded. No data-model/guardrail text visible to student. | None needed. |
| Lesson Player | 1440 x 900 | Pass | Direct lesson route originally jumped to exercise step because old selected exercise was reused. | Route sync fixed so `#lesson/...` starts at Context and `#exercise/...` opens the exercise step. |
| Homework Start | 1440 x 900 | Pass | Main scenario shows current homework only. Other homework list is hidden in a details/history section. | None needed. |
| Lesson Player | 768 x 900 | Pass | No horizontal overflow. Sticky action bar works. | None needed. |
| Lesson Player | 390 x 844 | Pass | Inline fill-gap input initially extended beyond the sentence container. | Mobile input rules updated; input now wraps within viewport. |
| Homework Mode | 390 x 844 | Pass | No horizontal overflow. Main CTA and progress ring visible. | None needed. |

## Functional Visual Checks

| Check | Status | Notes |
| --- | --- | --- |
| Console errors | Pass | Browser console error log returned empty during QA. |
| Horizontal overflow | Pass | Checked 1440, 768, and 390; no viewport overflow after mobile input fix. |
| Multiple choice | Pass | Uses large clickable tiles; no visible radio controls. |
| Matching | Pass | Uses visual option cards; no select dropdowns. |
| Word order / drag-drop style | Pass | Uses large word chips and drop zone; click-to-add/remove preserves existing logic. |
| Listening | Pass | Uses visual audio player placeholder with waveform and speed pill; no script/media spec shown to student. |
| Short writing | Pass | Uses chat-like writing surface. |
| Autocheck | Pass | Correct answer checked successfully on `beg_u1_l1_ex1`. |
| Progress save/reload | Pass | Answer and feedback persisted after reload through existing progress-store. |
| Show correct answer | Pass | Button remains available with human label. |
| AI explanation | Pass | Student label changed to "Разобрать ошибку"; no "AI explanation mock" wording. |
| Role separation | Pass | Teacher/Live/Methodologist moved to profile demo menu and staff shell. |

## Screenshots

Saved to `/docs/screenshots/v0.2-visual/`:

- `student-dashboard-desktop.png`
- `unit-map-desktop.png`
- `lesson-player-desktop.png`
- `homework-desktop.png`
- `lesson-player-mobile.png`
- `homework-mobile.png`

## Remaining Design Notes

- Homework currently displays 2 exercises per lesson because the accepted v0.2 data layer has 12 homework exercises total. Showing 4 real tasks per lesson would require content/data expansion and is deferred.
- Full-page mobile screenshots are avoided because fixed bottom navigation repeats in browser full-page capture. Mobile QA screenshots use viewport captures.

