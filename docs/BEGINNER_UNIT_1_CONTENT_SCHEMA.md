# Beginner Unit 1 Content Schema

Purpose: define the v0.2 data shape for **Beginner Unit 1: Nice to meet you** before connecting it to the UI.

Status: planning/data preparation only. The v0.1.1 application is not connected to this schema yet.

## Design Principles

- Course content must live in data, not be hardcoded inside UI rendering.
- Student instructions are stored in Russian.
- Learning content, target phrases, dialogue scripts, and expected student output are stored in English.
- Correct answers and accepted answers are separate.
- Listening media is represented as specification only; no real audio files are required yet.
- Speaking widget is represented as an integration placeholder only.
- Data should be easy to map later to API resources and analytics events.

## Unit

Represents one course unit.

Required fields:

- `unit_id`: stable unique id, e.g. `beginner_u1`
- `course_id`: parent course id
- `level`: `Beginner`
- `title`: English unit title
- `title_ru`: Russian support title if needed
- `goal_ru`: unit goal in Russian
- `status`: content lifecycle status
- `content_policy`: originality and copyright guardrails
- `language_policy`: Russian UI/instructions, English learning content
- `lessons`: ordered list of lesson ids
- `exercise_ids`: all exercise ids in the unit
- `homework_task_ids`: all homework task ids in the unit
- `speaking_widget_placeholder`: integration placeholder object
- `analytics_tags`: unit-level tags

## Lesson

Represents one lesson inside a unit.

Required fields:

- `lesson_id`: stable unique id
- `unit_id`: parent unit id
- `lesson_number`: number inside unit
- `title`: lesson title in English
- `lesson_goal_ru`: student-facing goal in Russian
- `speaking_outcome`: `SpeakingOutcome`
- `target_vocabulary`: English vocabulary items with optional Russian support
- `target_grammar`: English target grammar/chunks
- `pronunciation_focus`: pronunciation or pronunciation-awareness notes
- `listening_dialogue`: `MediaSpecification`
- `reading_writing_support`: short support list
- `sections`: ordered `LessonSection` list
- `classwork_flow`: short ordered classwork steps
- `homework_task_ids`: linked homework ids
- `exercise_ids`: linked exercise ids
- `teacher_notes`: `TeacherNote` list
- `typical_mistakes`: `TypicalMistake` list
- `ai_explanations`: `AIExplanation` examples linked to common mistakes
- `analytics_tags`: lesson-level `AnalyticsTag` list
- `acceptance_criteria`: measurable lesson acceptance criteria

## LessonSection

Represents a pedagogical block inside a lesson.

Required fields:

- `section_id`: stable id
- `lesson_id`: parent lesson id
- `section_type`: one of `lead_in`, `language_input`, `controlled_practice`, `listening`, `pronunciation`, `speaking_preparation`, `freer_speaking`, `homework`
- `title_ru`: Russian section title for UI/teacher planning
- `student_instruction_ru`: Russian instruction
- `teacher_purpose`: short teacher-facing purpose
- `target_language_en`: English target phrases or examples
- `estimated_time`: time estimate, e.g. `6 min`
- `mode`: `classwork`, `homework`, or `both`

## Exercise

Represents one interactive exercise.

Required fields:

- `exercise_id`: stable unique id
- `lesson_id`: parent lesson id
- `section`: section id or semantic section name
- `exercise_type`: e.g. `fill_gap`, `multiple_choice`, `matching`, `drag_drop`, `word_order`, `listen_choose`, `listen_type`, `short_writing`
- `instruction_ru`: student instruction in Russian
- `learning_content_en`: English prompt/content
- `items`: `ExerciseItem` list
- `correct_answers`: `CorrectAnswer` list
- `accepted_answers`: `AcceptedAnswer` list
- `normalization_rules`: answer normalization settings
- `hints_ru`: `Hint` list
- `ai_explanation`: `AIExplanation`
- `estimated_time`: time estimate
- `attempts_allowed`: number
- `show_correct_answer`: boolean
- `autocheck`: boolean
- `mode`: `classwork`, `homework`, or `both`
- `teacher_notes`: `TeacherNote` list
- `analytics_tags`: `AnalyticsTag` list

## ExerciseItem

Represents one sub-item inside an exercise.

Required fields:

- `item_id`: stable id unique within exercise
- `prompt_en`: English prompt or stimulus
- `prompt_ru`: optional Russian support if needed
- `options`: optional answer options
- `pairs`: optional matching pairs
- `word_bank`: optional word-order/drag-drop word list
- `media_ref`: optional media specification id for listening items
- `answer_key_ref`: id linking to correct/accepted answer

## CorrectAnswer

Canonical answer shown as "Correct answer".

Required fields:

- `answer_id`: stable id
- `item_id`: linked exercise item id
- `value`: canonical answer string, array, or object
- `display_en`: answer shown to student
- `explanation_ru`: short Russian explanation

## AcceptedAnswer

Additional answer variants accepted by autocheck.

Required fields:

- `answer_id`: linked correct answer id
- `variants`: list of accepted variants
- `reason`: why the variant is accepted
- `normalization_applies`: boolean

Examples:

- `I am Anna` and `I'm Anna`
- case-insensitive variants
- punctuation-tolerant variants
- whitespace-normalized variants

## Hint

Short Russian support before or after an attempt.

Required fields:

- `hint_id`: stable id
- `trigger`: `before_attempt`, `after_wrong_attempt`, or `teacher_assigned`
- `text_ru`: hint text in Russian
- `target`: grammar/vocabulary/pronunciation point

## AIExplanation

Beginner-friendly explanation shown after a mistake.

Required fields:

- `explanation_id`: stable id
- `trigger`: mistake type or exercise id
- `text_ru`: short Russian explanation
- `linked_target_language_en`: English phrase/chunk
- `tone`: `supportive_beginner`

## HomeworkTask

Represents lesson homework.

Required fields:

- `homework_id`: stable unique id
- `lesson_id`: parent lesson id
- `title_ru`: student-facing title
- `purpose_ru`: why this homework exists
- `exercise_ids`: linked exercise ids
- `speaking_activity_ids`: optional speaking/rehearsal task ids
- `estimated_time`: time estimate
- `deadline_rule`: relative due rule, e.g. `before_next_lesson`
- `teacher_visibility`: what teacher can see
- `completion_rule`: how completion is calculated
- `does_not_introduce_new_complex_topic`: boolean

## TeacherNote

Teacher-facing methodological support.

Required fields:

- `note_id`: stable id
- `lesson_id`: parent lesson id
- `scope`: `lesson`, `section`, `exercise`, or `homework`
- `text`: teacher note in English or Russian
- `priority`: `P0`, `P1`, or `P2`

## TypicalMistake

Common Russian-speaking Beginner student issue.

Required fields:

- `mistake_id`: stable id
- `lesson_id`: parent lesson id
- `mistake_en`: example incorrect English
- `correction_en`: preferred correction
- `explanation_ru`: short Russian explanation
- `linked_exercise_ids`: related exercises
- `analytics_tag_ids`: related analytics tags

## SpeakingOutcome

Practical speaking target.

Required fields:

- `outcome_id`: stable id
- `lesson_id`: parent lesson id
- `can_do_statement_ru`: Russian can-do statement
- `sample_output_en`: English sample output
- `assessment_signals`: measurable evidence
- `speaking_activity_ids`: linked speaking activities

## MediaSpecification

Specification for future audio/video generation or sourcing.

Required fields:

- `media_id`: stable id
- `lesson_id`: parent lesson id
- `media_type`: `listening_audio`, `dialogue_audio`, or `speaking_widget_placeholder`
- `script`: English script
- `transcript`: English transcript
- `speakers`: speaker metadata
- `accent`: accent target
- `speed`: `slow_beginner`, `careful_natural`, or similar
- `duration`: estimated duration
- `audio_generation_prompt`: prompt for future audio generation
- `comprehension_answers`: expected answers
- `asset_status`: `spec_only`

## AnalyticsTag

Small metadata object for progress, risk, and BI events.

Required fields:

- `tag_id`: stable id
- `category`: e.g. `grammar`, `vocabulary`, `pronunciation`, `listening`, `speaking`, `homework`, `risk_signal`
- `label`: human-readable tag
- `event_names`: related event names, e.g. `exercise_started`, `exercise_checked`, `ai_explanation_requested`
- `dashboard_use`: `student`, `teacher`, `methodologist`, `revizor_bi`, or list of these

## Normalization Rules

Recommended fields:

- `ignore_case`: boolean
- `trim_whitespace`: boolean
- `collapse_multiple_spaces`: boolean
- `ignore_terminal_punctuation`: boolean
- `normalize_apostrophes`: boolean
- `accept_contractions`: boolean
- `accepted_contraction_pairs`: list, e.g. `["I am", "I'm"]`
- `allow_period_optional`: boolean
- `allow_question_mark_optional`: boolean

## Validation Rules for v0.2 Data

- Exactly 6 lessons for Unit 1.
- Every lesson has one speaking outcome.
- Every lesson has classwork and homework.
- Exercise ids are unique.
- Lesson ids are unique.
- Every exercise references an existing lesson.
- Every homework task references an existing lesson and existing exercises.
- Student instructions are Russian.
- Learning content is English.
- Lesson 4 stays within limited production scope:
  phone-number numbers, spelling first/last name, simple email, `@`, and `dot`.
- Listening media uses `MediaSpecification`; no audio files are required yet.
- Speaking widget remains an integration placeholder.
