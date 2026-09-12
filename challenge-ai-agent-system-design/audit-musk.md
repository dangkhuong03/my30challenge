# Audit Brief: First-Principles 30-Day AI Agent System Design Challenge

## 1. Purpose

Audit the complete curriculum in `challenge-ai-agent-system-design` against the 100 practice questions in the root-level `de-luyen-tap` file.

The 100 questions are an outcome benchmark, not a lesson bank. The challenge must develop enough understanding and adaptability for the learner to solve:

- all 100 benchmark questions;
- unfamiliar questions that test the same underlying concepts;
- harder variants with changed contexts, constraints, terminology, or failure modes; and
- advanced questions that require synthesis, system design, trade-off analysis, debugging, or critical evaluation.

The audit must determine whether the 30-day challenge produces transferable competence rather than question-specific recall.

## 2. Day 30 Outcome

By the end of Day 30, the learner should be able to:

- solve the 100 benchmark questions independently;
- explain why the correct answer is correct and why competing answers are wrong;
- identify the principle, mechanism, assumption, and trade-off behind each question;
- solve structurally similar questions even when surface details change;
- handle harder, integrated, and previously unseen problems;
- design, analyze, debug, and critique AI agent systems instead of merely recalling definitions or answers; and
- communicate the reasoning clearly enough to teach it to another person.

Success means demonstrated transfer of learning. Topic exposure, question-ID coverage, and memorized answer accuracy alone do not prove mastery.

## 3. Curriculum Design Principles

The curriculum should follow a practical first-principles learning approach inspired by the publicly associated learning methods of Elon Musk. It must not claim to reproduce his private process exactly.

The intended methods are:

- **First-principles reasoning:** reduce a problem to foundational facts and rebuild the solution from them.
- **Learning tree:** establish the trunk and major branches before adding isolated details.
- **Reconstruction:** require learners to derive an explanation, solution, or system from core principles.
- **Aggressive questioning:** repeatedly ask why something works, which assumptions it relies on, and where it fails.
- **Cross-domain transfer:** apply one principle across different scenarios, industries, architectures, and constraints.
- **Build-test-feedback-iterate:** create something observable, test it, diagnose failure, and improve it.
- **Progressive difficulty:** gradually increase ambiguity, complexity, integration, and learner independence.

These principles must appear in the actual learning activities and assessments, not only in introductory prose.

## 4. Required Format for Each Day

Each day must be a coherent learning unit built around a capability or foundational principle. It must include:

1. **Daily capability outcome:** what the learner will be able to do by the end of the day.
2. **Required knowledge:** the concepts, mechanisms, vocabulary, and mental models needed that day.
3. **First-principles explanation:** why the mechanism works, its assumptions, and its limits.
4. **Original worked example:** a newly created example that is not copied from `de-luyen-tap`.
5. **Independent exercise:** a separate task that is not one of the 100 benchmark questions.
6. **Transfer exercise:** a changed domain, representation, constraint, or failure mode that tests flexible application.
7. **Hard or adversarial exercise:** a task containing ambiguity, misleading information, conflicting goals, edge cases, or trade-offs where appropriate.
8. **Observable completion criteria:** an explicit test for determining whether the day's work is complete.
9. **Required evidence:** an artifact such as a written explanation, diagram, design, implementation, test result, critique, or error analysis.
10. **Teach-back or reconstruction:** an activity that reveals whether the learner understands the mechanism without relying on memorized wording.
11. **Feedback and retry:** a way to diagnose errors, correct the underlying misconception, and attempt a changed problem again.
12. **Optional stretch work:** additional difficulty that does not become hidden mandatory scope.

The full challenge must also contain an early baseline, spaced retrieval, periodic integration, reviews at least every seven days, recovery paths, and a final assessment comparable with the baseline.

## 5. Independence from the 100 Benchmark Questions

Daily lessons and exercises must not be hard-coded to the questions in `de-luyen-tap`.

The curriculum must not:

- copy benchmark questions into daily exercises;
- reveal or repeatedly rehearse their exact answers before the final assessment;
- organize the 30 days as batches of question IDs to memorize;
- change only names or numbers and label the result a new exercise;
- treat mentioning a topic as evidence that the capability was taught;
- mark mastery based only on the number of correct multiple-choice answers;
- restrict instruction to concepts that happen to appear explicitly in the benchmark; or
- train surface-pattern recognition that fails when a problem is reworded or moved to a new context.

The benchmark may be used to identify required capabilities, concepts, misconceptions, reasoning patterns, and difficulty levels. Those requirements must then be taught through different examples and exercises.

## 6. Audit Method

Analyze each benchmark question individually, but evaluate the curriculum at the level of knowledge, reasoning, and practical capability.

For every question, determine:

- what knowledge or capability it actually tests;
- which foundational principle or mechanism supports the answer;
- which reasoning steps are required;
- which common misconception or distractor it exposes;
- where that capability is explicitly taught in the 30-day curriculum;
- whether the lesson contains an original worked example;
- whether the learner practices the capability independently;
- whether a materially changed transfer exercise exists;
- whether a harder or integrated variant exists where appropriate;
- whether the assessment method can distinguish understanding from memorization;
- whether completion criteria and learner-produced evidence exist; and
- whether the capability is retrieved, integrated, and reassessed later.

A range or label such as `M1-M100 covered` proves identifier coverage only. It does not prove semantic coverage, effective instruction, practice quality, transfer, retention, or mastery.

## 7. Additional Whole-Curriculum Checks

The audit must also assess:

- prerequisite ordering and progression from foundations to integration;
- gaps between the stated outcome and the actual daily work;
- duplicated material that consumes time without increasing capability;
- days that are overloaded, too shallow, or dependent on unstated prerequisites;
- the balance of explanation, retrieval, application, construction, debugging, and reflection;
- increasing difficulty and decreasing instructional support across the 30 days;
- feedback quality and opportunities to retry changed problems;
- spaced practice of important concepts;
- integration across multiple AI agent system components;
- readiness for novel, difficult, and advanced questions; and
- whether the final assessment measures independent performance under conditions that do not enable answer memorization.

## 8. Audit Status Definitions

Use the following statuses consistently:

- **PASS:** the capability is taught explicitly, practiced with independent examples, tested through transfer, and supported by observable evidence.
- **PARTIAL:** the topic appears, but instruction, practice, transfer, assessment, or evidence is insufficient for reliable performance on a new problem.
- **FAIL:** the capability is missing, incorrect, misleading, sequenced unusably, or trained primarily through benchmark-answer memorization.
- **UNKNOWN:** the available files do not provide enough evidence to reach a defensible conclusion.

Do not upgrade planned content, a topic heading, a question-ID reference, or an unverified claim to `PASS`.

## 9. Required Audit Deliverables

The completed audit should provide:

1. An executive conclusion stating whether the current challenge can credibly achieve the Day 30 outcome.
2. A semantic coverage matrix mapping each of the 100 questions to:
   - tested capability;
   - underlying principle;
   - required reasoning;
   - relevant day or days;
   - original lesson example;
   - independent exercise;
   - transfer exercise;
   - advanced variant, when appropriate;
   - assessment or evaluator; and
   - audit status with evidence.
3. A list of missing, weak, incorrect, duplicated, or poorly sequenced capabilities.
4. An analysis of whether the exercises are genuinely independent from the benchmark.
5. An analysis of readiness for similar, difficult, and advanced unseen questions.
6. A review of workload, progression, retrieval, feedback, recovery, and final assessment quality.
7. Root-cause findings rather than symptom-only observations.
8. The smallest evidence-based remediation recommendations needed to close each gap.

Recommendations must preserve sound existing work. The audit itself does not authorize curriculum edits, deletion of learner work, or replacement of the current challenge structure.

## 10. Acceptance Standard

The challenge passes this audit only if the evidence supports all of the following:

- all 100 benchmark questions map to explicitly taught capabilities rather than labels alone;
- the learner practices those capabilities through materially different examples;
- the curriculum tests transfer to unfamiliar contexts and representations;
- difficult and advanced work requires synthesis, diagnosis, design, or evaluation;
- daily completion is based on observable learner-produced evidence;
- misconceptions trigger correction and retry rather than answer exposure alone;
- knowledge is revisited and integrated across the challenge;
- difficulty and independence increase over time; and
- the final assessment provides credible evidence that the learner can solve the benchmark and novel variants without relying on a memorized answer key.

The governing question for every audit finding is:

> Does this curriculum build a reusable mental model and problem-solving capability, or does it merely increase familiarity with the existing question set?

## 11. Authorized Full-Rebuild Amendment

The user has explicitly authorized replacement of the current curriculum structure where necessary. The target is no longer gap-only remediation: every Day 1–30 must be semantically rebuilt or individually re-approved under `remediation/FULL_REBUILD_CONTRACT.md`. That contract supersedes the earlier preservation limitation for curriculum, plan, assessment and application learning-surface edits. Learner-owned evidence, benchmark sources, sealed-final isolation and append-only history remain protected.

Acceptance now also requires all `M1–M100` and `P1–P18`, day-level document/application synchronization, coherent daily learning journeys, progressive independence and the final-output gates defined in the rebuild contract.
