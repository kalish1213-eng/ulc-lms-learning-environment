# Analytics Events v0.1

Purpose: define the mock event vocabulary for ULC LMS v0.1.1. Events are not sent to a real Revizor / BI backend in the static prototype. They are represented in UI and can be stored locally for demo purposes.

## Event Principles

- Every event includes `event`, `timestamp`, `userId`, and relevant context ids.
- Student-facing event names are product-neutral and can be reused by future web/mobile clients.
- No personally sensitive payload is required for MVP analytics; ids can be mapped server-side later.
- Current status: **mock only**.

## Events

### lesson_opened

```json
{
  "event": "lesson_opened",
  "timestamp": "2026-06-18T18:10:00.000Z",
  "userId": "student_demo_anna",
  "courseId": "beginner-adults",
  "unitId": "unit-1",
  "lessonId": "beg_u1_l2",
  "source": "student_dashboard"
}
```

### exercise_started

```json
{
  "event": "exercise_started",
  "timestamp": "2026-06-18T18:11:00.000Z",
  "userId": "student_demo_anna",
  "lessonId": "beg_u1_l2",
  "exerciseId": "ex_word_order_question",
  "exerciseType": "word-order"
}
```

### exercise_answered

```json
{
  "event": "exercise_answered",
  "timestamp": "2026-06-18T18:12:00.000Z",
  "userId": "student_demo_anna",
  "exerciseId": "ex_fill_from",
  "answerType": "text",
  "answerLength": 4
}
```

### exercise_checked

```json
{
  "event": "exercise_checked",
  "timestamp": "2026-06-18T18:12:20.000Z",
  "userId": "student_demo_anna",
  "exerciseId": "ex_fill_from",
  "correct": true,
  "attempt": 1
}
```

### correct_answer_shown

```json
{
  "event": "correct_answer_shown",
  "timestamp": "2026-06-18T18:13:00.000Z",
  "userId": "student_demo_anna",
  "exerciseId": "ex_word_order_question",
  "lessonId": "beg_u1_l2"
}
```

### ai_explanation_requested

```json
{
  "event": "ai_explanation_requested",
  "timestamp": "2026-06-18T18:13:30.000Z",
  "userId": "student_demo_anna",
  "exerciseId": "ex_word_order_question",
  "reason": "mistake_after_check",
  "language": "ru"
}
```

### homework_started

```json
{
  "event": "homework_started",
  "timestamp": "2026-06-18T18:14:00.000Z",
  "userId": "student_demo_anna",
  "homeworkId": "hw_u1_l2",
  "unitId": "unit-1",
  "lessonId": "beg_u1_l2"
}
```

### homework_completed

```json
{
  "event": "homework_completed",
  "timestamp": "2026-06-18T18:45:00.000Z",
  "userId": "student_demo_anna",
  "homeworkId": "hw_u1_l2",
  "percent": 100,
  "completedExerciseCount": 8
}
```

### live_session_started

```json
{
  "event": "live_session_started",
  "timestamp": "2026-06-18T19:00:00.000Z",
  "teacherId": "teacher_demo_102",
  "groupId": "beg-a1-evening",
  "lessonId": "beg_u1_l2",
  "mode": "teacher_led"
}
```

### live_answer_updated

```json
{
  "event": "live_answer_updated",
  "timestamp": "2026-06-18T19:05:00.000Z",
  "userId": "student_demo_anna",
  "liveSessionId": "live_mock_001",
  "promptId": "where_are_you_from",
  "answerPreview": "I'm from Minsk."
}
```

### teacher_hint_sent

```json
{
  "event": "teacher_hint_sent",
  "timestamp": "2026-06-18T19:06:00.000Z",
  "teacherId": "teacher_demo_102",
  "studentId": "student_demo_anna",
  "liveSessionId": "live_mock_001",
  "hint": "Use I'm from + city."
}
```

### student_risk_signal_created

```json
{
  "event": "student_risk_signal_created",
  "timestamp": "2026-06-18T19:07:00.000Z",
  "studentId": "student_demo_irina",
  "riskType": "missed_homework",
  "severity": "high",
  "recommendedAction": "telegram_reminder_and_teacher_review"
}
```
