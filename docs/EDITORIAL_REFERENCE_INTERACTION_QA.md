# Editorial Reference Interaction QA

Route: `#student-book-reference`

Branch: `design/student-book-editorial-v1`

## Summary

The editorial Student Book reference lesson remains isolated from the existing Unit 1 data layer, 6 lessons, 24 exercises, core autocheck, progress-store schema, and Teacher / Live / Methodologist modules.

## Mechanics

| Mechanic | Status | Test steps | Result | localStorage behavior | Mobile fallback | Known limitations |
|---|---|---|---|---|---|---|
| Student Mode header | Pass | Open route and inspect visible header text | Shows ULC, back to course, lesson progress, save, exit; no visible technical labels | No write except profile save | Compact header at 390px | Save is local prototype action |
| Skill labels | Pass | Inspect desktop and 390px view | Tags show G/V/P in one row; mobile uses horizontal scroll | None | Horizontal scroll | No expandable “Что изучим” drawer |
| Vocabulary photo choice | Pass | Select answer, check, retry | Selected state and Russian feedback appear | In-memory only | Tap buttons | No scoring persistence |
| Vocabulary matching | Pass | Select responses and check | Correct/retry feedback appears | In-memory only | Native selects | No drag matching |
| Pronunciation sorting | Pass | Choose Short/Full groups and check | Sorting state and hint visible | In-memory only | Tap segmented buttons | Audio remains visual control |
| Grammar word bank | Pass | Tap words into gaps and check | Tap-to-fill gaps, autocheck, feedback | In-memory only | Tap-to-fill | Drag not required for this activity |
| Grammar chart | Pass | Fill chart and check | Editable inputs and feedback work | In-memory only | Full-width inputs | No keyboard validation beyond check |
| Grammar multiple choice | Pass | Select options and check | Selected state and explanation visible | In-memory only | Tap buttons | Per-item feedback is summarized |
| Photo ordering | Pass | Assign numbers and check | Starts with A-E/scrambled photos; shows correct/retry feedback | In-memory only | Native number selects | Desktop drag reorder is prototype-level |
| Short answers | Pass | Fill four answers and check | One question per row on desktop; labels above inputs on mobile | In-memory only | Full-width inputs | Accepted-answer variants are limited |
| Listening gaps | Pass | Fill gaps and check | Feedback appears | In-memory only | Full-width inputs | No real audio file |
| Transcript gate | Pass | Try before completion, then complete a-c | Transcript is hidden before completion and visible after completion | In-memory only | Same behavior | Transcript appears automatically after completion |
| Speaking role cards | Pass | Switch Role A/B and start practice | Hidden information, role switch, timer and teacher-launch message visible | Profile data may feed Role A | Tap buttons | Real speaking widget is not connected |
| Profile card | Pass | Fill profile, save, reload | Profile restores after reload and appears in Role A | Uses `ulc_editorial_reference_profile` | One-column form | Prototype avatar uses generated photo |
| Useful phrases | Pass | Play, repeat, bookmark, mark learned | Bookmark/learned states visible | In-memory only | Buttons wrap | No real audio recording |
| Revise & Check | Pass | Complete activities and open tabs | Grammar, Vocabulary, Useful phrases scores and recommendations update | In-memory only | Tabs wrap/scroll as needed | Scores reset on full app reload |
| Teacher Mode | Pass | Open with `?teacherMode=1` or hidden switch | Teacher toolbar is hidden in Student Mode and available only in teacher mode | In-memory only | Hidden on mobile Student Mode | Toolbar actions are visual controls |

## Responsive QA

| Viewport | Status | Result |
|---|---|---|
| 1440px desktop | Pass | No horizontal overflow; dense two-spread layout |
| 768px tablet | Pass | Columns collapse safely; controls stay readable |
| 390px mobile | Pass | Compact header, title, goal, and first photo start are visible in first viewport |

## Console

Browser console error check: Pass, no errors observed during route load and interaction smoke test.
