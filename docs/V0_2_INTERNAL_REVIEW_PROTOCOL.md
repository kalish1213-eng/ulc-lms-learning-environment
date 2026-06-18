# ULC LMS V0.2 Internal Review Protocol

Version: v0.2 release candidate  
Status: internal review protocol  
Merge restriction: do not merge until this protocol is complete and P0 issues are closed

## Purpose

This protocol is used to review ULC LMS v0.2 RC before merge or publication. It covers student, teacher, methodologist, and product-owner perspectives.

## Scenario A - Student

Reviewer completes:

1. Open Student Dashboard.
2. Open Unit 1.
3. Open all 6 lessons.
4. Complete at least one classwork exercise in every lesson.
5. Give one intentionally incorrect answer.
6. Open AI explanation.
7. Show the correct answer.
8. Test accepted answer: `I am` / `I'm`.
9. Reload the browser.
10. Confirm progress restoration.
11. Open Homework Mode.
12. Complete one homework task.
13. Check mobile viewport 390px.

Reviewer evaluates from 1 to 5:

| Criterion | Score | Notes |
|---|---:|---|
| It is clear what to do next |  |  |
| Beginner student instructions are understandable |  |  |
| Content matches Beginner level |  |  |
| Mistake explanation is useful |  |  |
| Homework is connected to the lesson |  |  |
| Interface is not overloaded |  |  |
| Progress is visible |  |  |
| Learning feels speaking-first |  |  |

## Scenario B - Teacher

Reviewer completes:

1. Open Teacher Dashboard.
2. Review schedule/readiness information.
3. Open group overview.
4. Open individual student.
5. Review classwork progress.
6. Review homework progress.
7. Review typical errors.
8. Review low-engagement signals.
9. Start Demo Live Lesson.
10. Select lesson.
11. Switch active exercise.
12. Send teacher hint.
13. Show and hide answers.
14. Test lock/unlock.
15. Switch individual/pair/group mode.
16. Assign or open homework flow.

Reviewer evaluates from 1 to 5:

| Criterion | Score | Notes |
|---|---:|---|
| Teacher understands group state |  |  |
| Student dynamics are visible |  |  |
| It is visible who is not doing homework |  |  |
| Live Mode helps conduct the lesson |  |  |
| Lesson control is understandable |  |  |
| Interface does not feel like a heavy admin panel |  |  |
| Teacher understands which data is mock |  |  |

## Scenario C - Methodologist

Reviewer completes:

1. Open Methodologist Dashboard.
2. Confirm 6 lessons.
3. Confirm 24 exercises.
4. Confirm 12/12 classwork-homework balance.
5. Open exercises from different lessons.
6. Review instructions.
7. Review answers and accepted answers.
8. Review AI explanations.
9. Review teacher notes.
10. Review listening specifications.
11. Review workflow statuses.
12. Confirm archived state.
13. Review Lesson 4 scope.

Reviewer evaluates from 1 to 5:

| Criterion | Score | Notes |
|---|---:|---|
| Course structure is clear |  |  |
| Lessons are methodologically connected |  |  |
| Exercises match the level |  |  |
| Speaking outcome is visible |  |  |
| Lesson volume is realistic |  |  |
| Lesson 4 is not overloaded |  |  |
| Materials can evolve into a content studio |  |  |
| There is no obvious copying from English File |  |  |

## Scenario D - Product Owner

Reviewer checks:

1. ULC branding.
2. Speaking-first positioning.
3. NPS representation.
4. Retention representation.
5. Depth of usage representation.
6. Integration readiness.
7. Clear distinction between real local data and mock data.
8. Product scalability to other languages.
9. Main user journey.
10. Overall readiness for internal demonstration.

Reviewer evaluates from 1 to 5:

| Criterion | Score | Notes |
|---|---:|---|
| Product value is clear |  |  |
| ULC visual direction feels appropriate |  |  |
| Analytics mockup supports management decisions |  |  |
| Integration readiness is understandable |  |  |
| Mock and real-local data are clearly separated |  |  |
| Prototype is ready for internal demonstration |  |  |

## Issue Classification

### P0

- App or screen does not open.
- Console error breaks a scenario.
- Progress is lost.
- Auto-check gives an incorrect result.
- Data from one lesson appears in another lesson.
- Main user scenario cannot be completed.
- Critical methodology error.
- Interface is unusable on mobile.

### P1

- Instruction is unclear.
- Exercise is weakly connected to speaking outcome.
- Lesson is overloaded.
- Teacher flow is inconvenient.
- Mistake explanation is inaccurate.
- Homework status is incorrect.
- Mock data looks like real production data.

### P2

- Copy/text improvements.
- Visual alignment.
- Small UX improvements.
- Secondary states.
- Cosmetic changes.

## Merge Admission Conditions

V0.2 can be merged only when:

- 0 open P0 issues remain.
- All P1 issues are fixed or explicitly accepted in writing by the owner.
- Review is completed by at least one methodologist.
- Review is completed by at least one active teacher.
- Student Scenario is completed.
- Lesson 4 is rechecked.
- Responsive review is completed.
- Product Owner gives final `Approved` status.

## Review Summary

| Role | Reviewer | Date | Status | P0 | P1 | P2 | Notes |
|---|---|---|---|---:|---:|---:|---|
| Student |  |  |  |  |  |  |  |
| Teacher |  |  |  |  |  |  |  |
| Methodologist |  |  |  |  |  |  |  |
| Product Owner |  |  |  |  |  |  |  |
