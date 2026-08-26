# Fixed Daily Exercises

Làm Day ID tương ứng rồi mới mở `EXERCISE_KEYS.md`. Review và Final nằm trong `ASSESSMENTS.md`.

## D02 — Sentence skeletons

Với mỗi câu, đánh dấu Subject, finite Verb, Object/Complement.

1. The agent reads the request.
2. The result is clear.
3. A small model predicts the next action.
4. The user needs a safe answer.
5. The system stores every event.
6. The files are available.
7. A worker sends the message.
8. The task has three steps.
9. The model uses past data.
10. The final report contains two tables.
11. The tool returns an error.
12. The new method reduces cost.
13. Human reviewers check the output.
14. The evidence supports the claim.
15. This limitation is important.

Sau đó nói 8 câu mới bằng các frames trong lesson.

## D03 — Noun phrases

Gạch head noun và khoanh modifiers:

`a tool`, `the final result`, `three safe actions`, `an evaluation method`, `the user request`, `a small language model`, `the model output`, `two failed tasks`, `the current system`, `an unclear tool response`, `a reliable agent`, `the average task cost`, `a local test environment`, `the main research question`, `a short verification checklist`, `the expected final state`, `the new file name`, `the task success rate`, `an independent human reviewer`, `the model training process`.

Viết 10 câu, mỗi câu dùng một phrase.

## D04 — Verbs, time and stance

Với mỗi câu, mark tense/modal và nói meaning về time/certainty.

1. The agent checks the file.
2. The agent checked the file yesterday.
3. The agent can read the file.
4. The agent must not publish without approval.
5. The result may change.
6. The team should repeat the test.
7. The model was trained on old data.
8. The system does not store passwords.
9. The error did not stop the worker.
10. The new version might reduce latency.
11. The experiment will start tomorrow.
12. If the check fails, the agent will stop.

Rewrite 8 câu với time/modal khác và giải thích meaning change.

## D05 — Questions and clarification

Chuyển thành câu hỏi rồi trả lời bằng một câu hoàn chỉnh:

1. The model uses three tools. (`How many...?`)
2. The agent stopped because the budget ended. (`Why...?`)
3. The file is in the workspace. (`Where...?`)
4. The test failed yesterday. (`When...?`)
5. The result may be wrong. (yes/no)
6. The authors trained the model. (`Who...?`)
7. The system needs approval. (`What...?`)
8. The task has finished. (yes/no)
9. The method works on small datasets. (`Which...?`)
10. Verification prevents duplicate actions. (`What does verification prevent?`)

Role-play thêm 5 câu bằng clarification frames.

## D06 — Pronunciation scripts

Audio IDs được tạo trong `audio/`.

### D06-A — Thought groups

1. The agent / reads the user request.
2. It chooses an action / and uses a tool.
3. The system / checks the final result.
4. A risky action / needs verification.
5. The worker stops / when the budget ends.

### D06-B — Final consonants

`safe–save`, `rice–rise`, `back–bag`, `worked–work`, `checks–check`, `cost–cause`.

### D06-C — Minimal contrast sentences

`The agent checked the file.` `The agent checks the file.` `The result is safe.` `The result is saved.`

## D07 — Review 1

Làm fixed `R1` trong `ASSESSMENTS.md`.

## D08 — Technical noun stacks

Tìm head, expand bằng `of/for/that`, rồi paraphrase:

1. agent task success rate
2. model output verification step
3. customer data access policy
4. long-running workflow state store
5. tool call error message
6. human approval service
7. test environment reset process
8. user request completion time
9. production model release gate
10. external action retry limit

Tạo thêm 5 stacks từ `PRACTICE_PAPER.md`.

## D09 — Passive voice

Ghi actor/action/object; đổi active↔passive khi actor đã biết.

1. The model was trained on synthetic tasks.
2. The worker writes an event.
3. The result is checked by a reviewer.
4. The system stores the operation ID.
5. The file was renamed after verification.
6. The team measured task success.
7. The request can be retried safely.
8. A human must approve publication.
9. The error was not recorded.
10. The agent may be stopped by the budget controller.

## D10 — Logic map

Mark every connector and draw proposition arrows.

> The agent received a success message, but the expected file did not exist. Therefore, the workflow did not continue. The worker first performed a read-only check. Because the check found no file, the system classified the action as failed. However, it did not retry immediately, because the original operation might still be running. After the operation timed out, the worker tried again with the same operation ID. As a result, the second request did not create a duplicate file.

Rewrite the paragraph as 6 numbered logical steps. Then replace two connectors without changing the relation.

## D11 — Clause surgery

Bracket subordinate/relative clauses; underline the main clause; paraphrase into short sentences.

1. The model that processed the longest tasks produced the most errors.
2. The results show that verification reduces duplicate actions.
3. Although the task completed, the agent reported a failure.
4. The file, which was created before the crash, remained available.
5. If the outcome is unclear, the worker should reconcile it before retrying.
6. The authors argue that a result is not reliable unless the final state is checked.
7. A method that works in simulation may fail when real interfaces change.
8. Because the dataset was small, the paper does not claim that the result will generalize.

## D12 — Word families

Điền noun/verb/adjective/adverb nếu tồn tại, rồi dùng đúng form trong câu:

`predict`, `evaluate`, `rely`, `verify`, `observe`, `compare`, `differ`, `signify`, `complete`, `ambiguity`.

Sau đó tìm 15 forms trong `PRACTICE_PAPER.md` và giải thích slot bằng grammar.

## D13 — Two-pass passage

First pass không dictionary; second pass tra tối đa 8 terms.

> A useful evaluation task must have a clear end state. If success depends only on the model saying “done,” the score may be unreliable. A stronger test checks the environment. For a file task, the evaluator can confirm that the file exists, has the expected name, and contains the required information. For a form task, the evaluator may look for a durable confirmation record. These checks are called postconditions because they describe what must be true after an action. Postconditions do not need to inspect every internal step. They focus on the result that matters to the user. However, a weak postcondition can still create a false success. Checking that a file exists is not enough when the task also requires correct contents. The evaluator must therefore connect each important requirement to an observable check. When no reliable check exists, the result should remain uncertain instead of being guessed.

Tasks: one-sentence guess; 5 blocking terms; main claim; two examples; limitation; 4-sentence English summary.

## D14 — Review 2

Làm fixed `R2` trong `ASSESSMENTS.md`.

## D15 — Paper anatomy

Không đọc `Paper map key`. Với `PRACTICE_PAPER.md`, viết một câu function cho Title, Abstract, Introduction, Method, Results, Discussion. Tìm một câu evidence cho mỗi function.

## D16 — Abstract moves

Annotate abstract của `PRACTICE_PAPER.md` bằng B–P–M–R–C. Viết lại mỗi move bằng một câu A2-level English. Thu summary 90 giây.

## D17 — Introduction argument

Trong Introduction, label từng paragraph `background`, `problem`, `risk`, `gap/question`, `contribution`. Quote tối đa 5 words làm evidence cho mỗi label. Viết một contribution sentence không overclaim.

## D18 — Method flow

Từ Method, tạo flowchart: task groups → agent conditions → checklist steps → budget → primary/secondary metrics. Liệt kê ba chi tiết cần để reproduce và hai chi tiết còn thiếu.

## D19 — Results and numbers

Tạo bảng gồm metric, baseline, checklist, absolute difference, interpretation. Phân biệt `percentage points` với `percent`. Viết ba câu result và một câu điều data chưa chứng minh.

## D20 — Claims and hedging

Xếp các claims trong Discussion lên ladder `proves / shows / suggests / may indicate`. Paraphrase 8 câu mà giữ nguyên strength. Tìm hai limitations và một generalization boundary.

## D21 — Review 3

Làm fixed `R3` trong `ASSESSMENTS.md`.

## D22 — Long-sentence surgery

Áp dụng five-step surgery cho 10 câu:

1. Although the checklist improved average success, the study, which used synthetic tasks, cannot show that the same gain will appear on changing websites.
2. The worker records an unknown outcome when a tool times out after the external service may have committed the requested action.
3. A verification rule that checks only whether a file exists may accept an output whose contents do not satisfy the user’s request.
4. Because repeated evaluation on the same tasks can leak information into development, the final release gate should include a hidden set.
5. The results suggest that explicit postconditions are useful, but they do not prove that every action requires the same level of checking.
6. When the model-facing context becomes too large, a discovery layer can reveal only the definitions that the current task requires.
7. The session store preserves events that the active model context may omit when the harness creates a compact summary.
8. If a publish request has an unknown outcome, retrying without an operation ID can create a duplicate external effect.
9. The evaluation reports both task success and extra steps so that a reliability gain is not considered without its cost.
10. A human reviewer who knows the expected transcript may overestimate how understandable a learner’s pronunciation is.

## D23 — Paragraph functions

Map four paragraphs: Abstract paragraph, Introduction paragraph 2, Results paragraph 1, Discussion paragraph 2. Label each sentence claim/evidence/explanation/contrast/limitation/transition; write a 6-word margin note.

## D24 — Faithful paraphrase

Paraphrase without copying 6 consecutive source words:

1. Tool responses do not always prove that the intended end state exists.
2. The checklist adds an average of 1.7 steps per task.
3. The largest improvement appears in ambiguous form submissions.
4. No claim about statistical significance is made.
5. A weak postcondition can confirm the wrong property.
6. The task set is synthetic and small.
7. Real interfaces change over time.
8. The current evidence does not prove universal effectiveness.

Audit modality, numbers, actor and causal strength after each paraphrase.

## D25 — PREML speaking

Use `PRACTICE_PAPER.md`. Prepare exactly 8 keywords, then record three takes: 60 seconds, 3 minutes with notes, 3 minutes without script. PREML must include one number and one limitation.

## D26 — Thought groups

### D26-A

1. The paper studies / a verification checklist / for small agents.
2. The checklist asks the agent / to predict the result / and inspect it afterward.
3. Verified success rises / from sixty-eight percent / to eighty-four percent.
4. Duplicate submissions fall / but the agent uses / more steps.
5. The environment is synthetic / so the result / may not generalize.
6. The evidence suggests a useful control / but it does not prove / universal success.

### D26-B

Record `success rises` with neutral stress, then stress `success`, then `rises`; explain the contrast created.

## D27 — Fixed Q&A

Answer each in 1–3 sentences; clarification counts only when the question is genuinely unclear.

1. What problem does the paper study?
2. What is the checklist?
3. How many tasks are used?
4. What is the primary metric?
5. What changes in verified success?
6. What happens to duplicate submissions?
7. What is the cost of the checklist?
8. Why is the evidence limited?
9. What should future work test?
10. Would you use this checklist for every action? Why or why not?

## D28 — Review 4

Làm fixed `R4` trong `ASSESSMENTS.md`.

## D29 — Full synthesis

Skim/read `PRACTICE_PAPER.md`, create paper map, eight-keyword notes and five-minute talk. Mỗi factual spoken claim phải có pointer `section + sentence/number`. Optional: repeat on your own paper.

## D30 — Final

Làm `Matched Form B` trước, sau đó `Locked Stretch Form` trong `ASSESSMENTS.md`. Không mở corresponding keys cho đến khi khóa answers/audio.
