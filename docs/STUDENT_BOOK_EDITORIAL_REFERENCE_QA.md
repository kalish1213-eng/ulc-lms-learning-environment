# Student Book Editorial Reference QA

## Scope

Route: `#student-book-reference`

Branch: `design/student-book-editorial-v1`

Goal: create one high-density digital Student Book reference lesson for ULC Beginner, without changing the existing Unit 1 data layer, 6 lessons, 24 exercises, autocheck, progress-store schema, Teacher Dashboard, Live Mode, or Methodologist Dashboard.

## Implementation Checks

| Check | Result |
|---|---|
| Separate route exists | Pass: `#student-book-reference` |
| Separate data file exists | Pass: `src/data/editorial-reference-lesson.js` |
| Existing Beginner Unit 1 data unchanged | Pass |
| Numbered Student Book sections | Pass: 7 sections plus review |
| Two connected editorial spreads | Pass |
| Photo-led layout | Pass: 14 rendered photo elements |
| Generated ULC photo assets stored in project | Pass |
| Audio controls | Pass: 3 controls with play/progress/speed/transcript states |
| Speaking outcome visible | Pass: role cards, pair mode, user-facing speaking practice block |
| Teacher toolbar | Pass: hidden/visible toolbar with teacher actions |
| Review block | Pass: Grammar / Vocabulary / Useful phrases tabs |
| Desktop first viewport density | Pass: 5 photos and 3 learning actions visible at 1440px |
| Horizontal overflow | Pass: none observed |
| Browser console errors | Pass: none observed |

## Screenshot Set

Stored in `docs/screenshots/student-book-editorial-v2/`:

- `spread-1-desktop-1440.png`
- `spread-2-desktop-1440.png`
- `full-lesson-desktop.png`
- `vocabulary-photo-task.png`
- `grammar-dialogue-task.png`
- `listening-photo-order-task.png`
- `speaking-role-cards.png`
- `useful-phrases-panel.png`
- `revise-and-check.png`
- `lesson-mobile-top.png`
- `lesson-mobile-middle.png`
- `lesson-mobile-speaking.png`
- `teacher-toolbar.png`
- `full-lesson-desktop-long.png`
- `full-lesson-mobile-long.png`
- `section-1-interaction.png`
- `section-2-pronunciation.png`
- `section-3-grammar.png`
- `section-4-photo-order-before.png`
- `section-4-photo-order-after.png`
- `section-5-role-a.png`
- `section-5-role-b.png`
- `section-6-profile-saved.png`
- `section-7-useful-phrases.png`
- `review-results.png`
- `student-mode-mobile-top.png`
- `teacher-mode-toolbar.png`

## Visual Direction

The lesson intentionally avoids:

- old dashboard-style lesson cards;
- stick-figure SVGs;
- a single isolated exercise on a large empty screen;
- copied English File text, photos, characters, or page design.

The lesson uses:

- original ULC-generated photography;
- two-column editorial composition on desktop;
- one-column continuous story on mobile;
- integrated photo tasks, grammar, listening, speaking, profile, useful phrases, and review.

## Known Limitations

- Photo assets are generated draft assets, not final commissioned photography.
- The current photo sprite should be replaced by separate optimized WebP files before production.
- Audio controls are visual only; no real audio files are loaded.
- This reference lesson is not yet mapped onto all six Unit 1 lessons by design.
- The current branch is for visual approval before applying the pattern to the full Unit.
