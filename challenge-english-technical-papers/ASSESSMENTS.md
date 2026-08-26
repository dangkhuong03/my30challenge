# Locked Assessments

Không đọc assessment trước ngày sử dụng. Không mở `ASSESSMENT_KEYS.md` trước khi khóa answers và audio.

Workload gate: `RESOLVED`. Số phút trong tiêu đề từng assessment là thời gian làm bài locked, không phải tổng workload của ngày. Theo `CHALLENGE.md`, mỗi review day có tổng target 150 phút; thời gian còn lại dùng để chấm, phân loại lỗi và retrieval. Ngày 30 có 120 phút locked tests và tối đa 60 phút cho evidence/debrief, nhưng tổng ngày không vượt hard cap 180 phút.

## Shared matched-form protocol

Form A và Form B đều có 95–110 từ, cùng task types và cùng rubric. First pass không dictionary.

Tasks:

1. Topic/purpose bằng một câu.
2. Mark subject + finite verb của ba câu được chỉ định.
3. Trả lời hai meaning questions.
4. Liệt kê ba key details/controls.
5. Viết English summary 2–3 câu.
6. Record: 30-second introduction, 60-second passage explanation, một follow-up.

Rubric 100: main meaning 20; sentence decoding 15; detail accuracy 15; English summary 15; spoken meaning 15; follow-up 5; independent intelligibility 10; grammar/chunks supporting meaning 5.

## Baseline Matched Form A — Ngày 1, 60 phút

> An AI agent receives a goal from a user. It chooses an action, uses a tool, and observes the result. A safe agent does not continue forever. The system limits its time, cost, and number of steps. It also checks whether an action really worked. If the result is unclear, the agent should not repeat a risky action without verification. These controls help the agent complete useful work without causing unexpected effects. A human must approve actions that publish information or spend money. The session stores earlier decisions so another worker can continue after a crash.

- Sentence decoding: sentences 1, 3 and 6.
- Meaning Q1: Why should the agent not repeat an unclear risky action?
- Meaning Q2: Which actions require human approval?
- Follow-up: `Why is verification important?`

## R1 — Ngày 7, 75 phút

> A small workflow reads a document and saves a summary. First, the system checks the file type. It can read text files, but it cannot read damaged files. Next, the agent finds the main topic and writes three short sentences. A reviewer then checks the summary. If an important fact is missing, the reviewer sends the task back. The agent may try again, but it must stop after two attempts. Finally, the system stores the accepted summary and the review result. This process uses a clear limit because repeated attempts cost time. It also uses human review because a fluent sentence may still contain a wrong fact. The stored review also helps the team find common errors in later tasks.

Tasks: mark S/V/O in sentences 1, 4, 7; mark nouns/articles/modals; write 5-sentence summary; speak 60 seconds; explain why both a limit and human review are used.

## R2 — Ngày 14, 90 phút

> A tool response can be useful without being complete. For example, a storage service may report that an upload request was accepted. However, this message does not always mean that the final file is available. The service may still be processing the data, or the operation may fail later. A reliable workflow therefore checks a postcondition. It may ask whether the file exists, whether its size is correct, and whether the user can open it. These checks focus on the result instead of the internal steps. They also help the workflow classify an outcome as confirmed, failed, or unclear. If the outcome is unclear, the workflow should wait or reconcile the operation before retrying. This rule is especially important for actions that cannot be safely repeated. A second payment or publication can create harm even when the software is working as designed. Verification adds time, but the extra cost may be reasonable when the possible effect is expensive or irreversible. For low-risk reads, the workflow may accept a cheaper check because a repeated read does not change external state directly.

Tasks: first-pass main idea; second pass max 8 terms; mark passives/connectors/clauses; six-keyword notes; 90-second explanation; name one limitation of checking only file existence.

## R3 — Ngày 21, 105 phút

> **Abstract — A Small Study of Retry Labels.** Automated workflows often treat every timeout as a failure and immediately repeat the action. This behavior is safe for some read operations, but it can duplicate messages, payments, or publications. We evaluate a three-state outcome label—confirmed, failed, and unknown—in a simulated order-processing workflow. The baseline system uses two labels and retries all apparent failures. The new system reconciles unknown outcomes by querying the operation ID before it decides to retry. Across 200 simulated orders, duplicate charges decrease from 14 to 2, while unresolved orders increase from 1 to 6. Average completion time rises by 9 percent because reconciliation requires an additional request. These results suggest that an explicit unknown state can reduce duplicate effects. However, the simulation assumes that the payment provider supports lookup by operation ID. The method may be less useful when a provider offers no idempotency key or reconciliation endpoint. The comparison uses identical tasks and the same twenty-step budget for both systems. No statistical significance claim is made, and each order is evaluated once, so run-to-run reliability remains unknown in this small example.

Tasks: map B–P–M–R–C; mark numbers and hedging; 100-word simple-English summary; two-minute talk; explain the reliability/cost trade-off.

## R4 — Ngày 28, 110 phút

> Teams that evaluate an agent on the same tasks every week may believe that the agent is improving. Some improvement can be real, but repeated use of one test set creates a hidden feedback channel. Developers inspect failures, change prompts, and select models based on those tasks. Over time, the system becomes specialized for the evaluation even when the task answers are never placed directly in the training data. A stronger program separates regression and capability evaluation. Regression tasks protect behavior that should remain solved. Capability tasks measure difficult behavior and should change when they no longer provide useful information. A final hidden set is used less often and is not available for routine debugging. The program also repeats important tasks because agent outputs can vary across runs. It reports both the chance of at least one success and the chance of repeated success. Human review is added for qualities that deterministic checks cannot measure, such as whether a summary preserves the source’s meaning. This design costs more than one fixed test set. It also requires careful ownership so that hidden tasks do not slowly become ordinary development examples. Nevertheless, the separation makes release evidence more honest and helps the team detect whether apparent progress transfers beyond familiar tasks. It also reveals when a capability task has become too easy.

Tasks: paragraph map; identify problem, mechanism, design and limitation; 8-keyword notes; three-minute talk; answer five questions about test reuse, suite types, hidden set, repeated runs and human review.

## Final Matched Form B — Ngày 30, 60 phút

> An AI workflow receives a request from a user. It divides the request into steps, calls a tool, and records each result. A reliable workflow does not trust every success message. The system checks the expected final state, total cost, and remaining time. It also stores an operation ID before a risky external action. If the outcome is unknown, the workflow looks up that ID before it tries again. These controls help the system resume after a crash without silently repeating an effect. A human must approve actions that send messages or change customer data.

- Sentence decoding: sentences 1, 3 and 6.
- Meaning Q1: Why does the workflow store an operation ID?
- Meaning Q2: Which actions require human approval?
- Follow-up: `Why is an unknown outcome different from a failure?`

## Locked Stretch Form — Ngày 30, 60 phút

> Long-running agents need more than a large context window. A task may continue for hours, pause for human approval, and resume after the original worker has disappeared. If the system stores only the latest prompt, it may lose earlier decisions, tool results, and evidence about external actions. A durable session solves a different problem from an active model context. The session keeps events, files, approvals, operation identifiers, and goal state. The context policy selects a smaller representation for the next model call. This representation may contain a summary, recent errors, and links to relevant artifacts, but it is not the source of truth. In a simple design, a worker obtains a lease before continuing a session. It reads the durable state, builds the active context, and records an intent before calling an external service. After the call, it records a confirmed result or an unknown outcome. If the worker crashes, another worker can inspect the same records and reconcile the operation. This design reduces lost work and duplicate effects, although it introduces storage, coordination, and recovery costs. It also does not remove the need for human authority. A restored agent should not gain permission to publish or spend money merely because it has recovered its previous context. Because models and prompting strategies may change, durable records should remain readable by later workers. A compact summary can be rebuilt from those records, while missing history cannot be recovered after original events are replaced. The evidence supports a separation of responsibilities: durable storage preserves history, context policy manages attention, and approval controls irreversible actions.

Tasks: first pass 20 minutes; topic/purpose/main idea; annotate problem, mechanism, result/benefit, limitation/trade-off; mark connectors, passive and hedging; paraphrase five key sentences; 8-keyword PREML talk for three minutes; answer five follow-ups.

Stretch rubric 100: topic/purpose 15; mechanism/responsibility boundaries 25; sentence/logic decoding 15; faithful paraphrase 15; spoken organization 15; follow-ups 5; independent intelligibility 5; grammar/chunks 5.

## Final decision

- Matched Form B must score ≥70 and may not fall more than 5 points below Form A.
- Stretch Form must score ≥70, Reading ≥49/70 and Speaking ≥21/30.
- Finish-line chunk and pronunciation evidence in `CHALLENGE.md` is also required.
