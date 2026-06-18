# v0.2 Exercise State Regression

## Status

Pass.

This regression document covers the P0 Exercise Player state bug found during internal review of the v0.2 RC.

## Reported bug

Exercise:

- `beg_u1_l6_ex1`
- Prompt: `A: Nice to meet you. B: ...`
- Correct option: `Nice to meet you, too.`

Observed before fix:

- after a previous wrong answer, selecting the correct option could still show stale incorrect feedback;
- the correct answer card could remain visible after changing the answer;
- retry and AI buttons could remain visible after the correct option was selected and checked;
- bottom action buttons `Проверить` / `Показать ответ` could remain visible in a completed correct state.

## Cause

The UI treated the latest stored result as active even after the draft answer changed. Multiple choice answers were also stored only as display text, so the player had no stable selected option identity to compare against the result that had actually been checked.

This made these states drift apart:

- current draft answer;
- answer that was checked;
- latest feedback result;
- correct answer reveal state;
- AI explanation state;
- bottom action controls.

## Changed files

- `src/services/autocheck.js`
- `src/services/progress-store.js`
- `src/services/content-service.js`
- `src/static-app.js`
- `index.html`

## Fixed state machine

### Draft answer changed

When the student changes the answer:

- `latestAnswer` is updated;
- stale `latestResult` is cleared;
- stale `checkedAnswer` is cleared;
- stale `correctAnswerShown` is cleared;
- stale `aiExplanationOpened` is cleared;
- attempts history is preserved.

### Check answer

When the student checks the answer:

- the submitted answer is copied into `checkedAnswer`;
- the check result is stored as `latestResult`;
- the result also records `submittedAnswer` and `checkedAt`;
- attempts history receives the checked answer and result;
- a correct result clears answer reveal and AI explanation flags.

### Render feedback

The Exercise Player now renders feedback only when the active result belongs to the current `latestAnswer`.

If the student changes the draft answer after a wrong check, old incorrect feedback is hidden until the new answer is checked.

### Choice answer identity

For `multiple_choice` and `listen_choose`, the selected answer now stores:

- `itemId`;
- `selectedOptionId`;
- `selectedValue`.

Autocheck compares `selectedOptionId` with the computed correct option id. Legacy text answers are still normalized for compatibility.

## Checked exercises

| Scenario | Exercise | Expected result | Status |
|---|---|---|---|
| Multiple choice correct after retry | `beg_u1_l6_ex1` | Correct option selected, success feedback shown, no stale error, no answer card, no retry/AI buttons, no bottom check/show-answer controls | Pass |
| Multiple choice correct after reload | `beg_u1_l6_ex1` | Correct state persists after reload without stale error | Pass |
| Multiple choice correct first attempt | `beg_u1_l3_ex1` | Correct feedback shown, no stale error, no answer card, no retry/AI buttons | Pass |
| Choice wrong answer | `beg_u1_l4_ex1` | Incorrect feedback shown, retry/AI available, no bottom check/show-answer controls | Pass |
| Correct answer reveal | `beg_u1_l4_ex1` | Correct answer card shown, no stale feedback, no bottom check/show-answer controls | Pass |
| Fill gap autocheck | service smoke test | Correct answer still accepted | Pass |
| Matching autocheck | service smoke test | Correct matching answers still accepted | Pass |
| Word order autocheck | service smoke test | UI array payload now checks against sentence answer | Pass |
| Drag/drop autocheck | service smoke test | Correct ordered array still accepted | Pass |
| Listen type autocheck | service smoke test | Correct typed listening answer still accepted | Pass |
| Short writing autocheck | service smoke test | Still returns preliminary submitted state | Pass |

## Screenshots

Stored in `docs/screenshots/v0.2-exercise-state-regression/`:

- `mc-correct-first-attempt.png`
- `mc-wrong-answer.png`
- `mc-retry-correct.png`
- `mc-reload-correct.png`
- `mc-answer-revealed.png`

## QA results

| Check | Result |
|---|---|
| Correct selected option removes stale error state | Pass |
| Correct state hides retry and AI buttons | Pass |
| Correct state hides bottom `Проверить` / `Показать ответ` controls | Pass |
| Wrong state shows retry and AI actions | Pass |
| Wrong state hides bottom `Проверить` / `Показать ответ` controls | Pass |
| Correct answer reveal does not keep stale incorrect feedback | Pass |
| Reload keeps correct checked state without stale error | Pass |
| Console errors | Pass: none observed |
| Horizontal overflow on checked mobile viewport | Pass: none observed |
| Progress persists after reload | Pass: checked state persisted through browser reload |

## Limitations

- This remains a static browser prototype using localStorage, not a production backend state machine.
- Real multi-device progress synchronization is out of scope for v0.2 RC.
- Speaking widget and external analytics delivery are still mocked.
- Screenshots were captured against the local dev server, not GitHub Pages.
