# Integration Contracts v0.1

These contracts describe the intended boundaries for future backend/API work. The static v0.1.1 prototype uses mock data only and sends no real external requests.

## Current Status

All integrations: **mock only**.

## 1C

Purpose: import and synchronize schedule, groups, students, teachers, and lessons.

Data in:

- `groupId`
- `lessonId`
- `teacherId`
- schedule window

Data out:

- lesson schedule
- group roster
- teacher assignment
- student enrollment
- optional future `paymentStatus` field for acceptance coverage

Mock endpoint:

`GET /mock/1c/schedule?groupId=beg-a1-evening`

Example payload:

```json
{
  "groupId": "beg-a1-evening",
  "lessonId": "beg_u1_l2",
  "startsAt": "2026-06-18T19:00:00+03:00",
  "teacherId": "teacher_demo_102",
  "studentIds": ["student_demo_anna", "student_demo_maria"],
  "paymentStatus": "mock_not_connected"
}
```

Current status: **mock only**.

## Revizor / BI

Purpose: receive analytics events, power dashboards, calculate risk signals, and represent feedback/NPS.

Data in:

- analytics events from `docs/ANALYTICS_EVENTS_V0_1.md`
- NPS survey result
- homework and exercise events
- live mode usage events

Data out:

- dashboards
- risk signals
- high-error exercise list
- cohort retention and usage depth

Mock endpoint:

`POST /mock/revizor/events`

Example payload:

```json
{
  "event": "exercise_checked",
  "timestamp": "2026-06-18T18:12:20.000Z",
  "studentId": "student_demo_anna",
  "exerciseId": "ex_word_order_question",
  "correct": false,
  "riskSignal": "question_order"
}
```

Current status: **mock only**.

## Bitrix24

Purpose: create service/team tasks from learning risk signals and operational follow-up needs.

Data in:

- risk signal
- student id
- group id
- teacher note

Data out:

- team task id
- responsible person/team
- due date
- task status

Mock endpoint:

`POST /mock/bitrix/tasks`

Example payload:

```json
{
  "title": "Call student after missed homework",
  "studentId": "student_demo_irina",
  "groupId": "beg-a1-evening",
  "responsible": "service_team",
  "dueAt": "2026-06-19T12:00:00+03:00"
}
```

Current status: **mock only**.

## Telegram

Purpose: send student and teacher notifications.

Data in:

- recipient type
- recipient id
- template id
- template variables

Data out:

- message id
- delivery status
- error state if delivery fails

Mock endpoint:

`POST /mock/telegram/messages`

Example payload:

```json
{
  "chatType": "student",
  "studentId": "student_demo_anna",
  "template": "homework_deadline_reminder",
  "variables": {
    "lessonTitle": "Where are you from?",
    "deadline": "2026-06-21 20:00"
  }
}
```

Current status: **mock only**.

## Speaking Widget

Purpose: embed a future external speaking practice module without rebuilding it inside the LMS MVP.

Data in:

- student id
- lesson id
- speaking outcome
- target phrases

Data out:

- widget session id
- completion status
- optional speaking score
- optional teacher note

Mock endpoint:

`POST /mock/speaking-widget/session`

Example payload:

```json
{
  "studentId": "student_demo_anna",
  "lessonId": "beg_u1_l2",
  "mode": "external_embed",
  "speakingOutcome": "Ask and answer where you are from.",
  "targetPhrases": ["Where are you from?", "I'm from Minsk."]
}
```

Current status: **mock only**.
