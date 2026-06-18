# ULC LMS v0.2 Visual Redesign

## Status

Patch prepared for internal review on branch `feature/v0.2-unit-1`.

PR #1 remains Draft. No merge, tag, GitHub Pages publish, methodology changes, content data changes, autocheck changes, or progress-store changes were made.

## Goal

Make the v0.2 student experience feel like a modern adult learning app instead of a dense document, CRM, or technical admin screen.

The redesign keeps Unit 1 methodology and the validated data layer intact.

## Removed From Student Screens

- Visible `v0.2 RC` / data-layer labels.
- localStorage and storage-key language.
- Mock backend / static prototype notes.
- AI explanation mock wording.
- media specification text.
- exercise_id / lesson_id / analytics tags.
- autocheck and show-correct-answer technical toggles.
- 12/12 classwork/homework service metrics.
- Teacher, Live, Methodologist, Analytics, and Integrations from primary student navigation.
- Letter pseudo-icons such as `HW`, `AI`, `L`, `U`, `R`.

Technical/admin context remains available only in the hidden profile demo menu and staff shell.

## What Became Stepwise

- Lesson Page is now a Lesson Player.
- Lesson Player shows one current step at a time: Context, New phrases, Mini practice, Grammar, Listening/Practice, Speaking practice, Summary.
- Student no longer sees all sections, all exercises, homework, teacher notes, media specs, or typical mistakes at once.
- Homework Mode starts with one calm task screen and then opens one homework exercise at a time.
- Exercise feedback is compact: correct state, short mistake state, "Разобрать ошибку", "Попробовать ещё раз", and prepared explanation drawer/card.

## Student Experience Changes

- Student shell has only: Сегодня, Курс, Домашка, Повторение.
- Dashboard first viewport has one hero, one primary CTA, three compact cards, and a visual Unit path.
- Unit Map is now a visual route with six lesson scenes.
- Exercise Player uses large clickable tiles, inline gap fields, visual matching cards, word chips, waveform-style listening placeholder, and chat-like writing.
- Homework Mode uses a progress ring, one primary CTA, and a short route of the current homework.

## Illustrations Added

Created original SVG placeholders in `/src/assets/illustrations/`:

- `unit-1-cover.svg`
- `lesson-1-meeting.svg`
- `lesson-2-countries.svg`
- `lesson-3-jobs.svg`
- `lesson-4-contacts.svg`
- `lesson-5-profile.svg`
- `lesson-6-practical.svg`

The style is light editorial vector, with ULC blue, mint, peach, lilac, and adult communication scenes.

## Features Preserved

- 6 lessons.
- 24 exercises.
- 12 classwork / 12 homework exercises in the data layer.
- Existing Unit 1 structure and content.
- Existing autocheck and accepted answers.
- Existing localStorage progress-store.
- Reload restoration.
- Show correct answer.
- Prepared AI explanations.
- Homework Mode.
- Teacher Dashboard.
- Live Lesson Mode mockup.
- Methodologist Dashboard.

## Known Limitations

- Homework screens show the current validated v0.2 data shape: 2 homework exercises per lesson, preserving 12 homework exercises total. The requested "4 задания" pattern is treated as a future content expansion because changing it now would change exercise count.
- Listening still uses a visual player placeholder; no real audio files are generated in this patch.
- Speaking widget remains a future integration placeholder.
- Staff screens were visually separated but not fully redesigned to the same depth as student screens.
- No real backend, BI, WebSocket, or external AI calls are added.

