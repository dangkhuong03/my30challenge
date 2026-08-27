# Locked Assessments

Không đọc assessment trước ngày sử dụng. Không mở `ASSESSMENT_KEYS.md` trước khi khóa answers và audio.

Workload gate: `RESOLVED`. Số phút trong tiêu đề từng assessment là thời gian làm bài locked, không phải tổng workload của ngày. Review 7/14/21/28 có tổng target tối đa 90/120/135/150 phút; thời gian còn lại dùng để chấm, phân loại lỗi và retrieval. Ngày 30 có 120 phút locked tests và tối đa 60 phút cho evidence/debrief, nhưng tổng ngày không vượt hard cap 180 phút.

## Shared reading-anchor protocol

Form A và Form B đều có 55–75 từ, cùng task types và cùng rubric. Đây là reading anchor cho beginner; không kiểm tra speaking ở Ngày 1. First pass không dictionary và người học được phép ghi `I do not know`.

Tasks:

1. Chọn/viết topic bằng một cụm ngắn.
2. Khoanh từ/cụm đã nhận ra; đánh dấu tối đa năm từ chặn meaning.
3. Mark subject + finite verb của hai câu được chỉ định; `I do not know` được chấp nhận như evidence.
4. Trả lời hai meaning questions bằng tiếng Việt hoặc simple English.
5. Viết một câu main meaning bằng tiếng Việt hoặc simple English.

Rubric 100: topic 15; recognized vocabulary/chunks 15; sentence decoding 20; meaning questions 30; one-sentence main meaning 20. Không có speaking subscore.

## Shared Boss Fight interaction protocol

Phần interaction dưới đây **thay thế** speaking task cũ trong cùng timebox, không cộng thêm workload. Partner có thể là người thật hoặc AI voice/text có lưu transcript. Partner chưa được xem script đáp án, phải hỏi từ nội dung vừa học và không sửa câu thay cho người học trước attempt đầu.

Mỗi Boss Fight ghi vào `PROGRESS.md`: meaning score, support level, response latency, số turns và repair result. Khi người học không hiểu, phải dùng clarification chunk; khi partner hiểu sai có chủ đích, người học phải sửa meaning rồi trả lời lại. Một lượt chỉ tính khi câu trả lời liên quan và giữ đúng nghĩa nguồn.

## Reading Diagnostic Form A — Ngày 1, 30 phút

> An AI agent receives a task. It uses a tool and checks the result. The agent has a time limit and a step limit. It must stop when the limit ends. A human approves actions that publish information or spend money. If a result is unclear, the agent waits and checks again. These rules help the system avoid unsafe repeated actions.

- Sentence decoding: sentences 1 and 2.
- Meaning Q1: What two limits does the agent have?
- Meaning Q2: Which actions require human approval?
- Không thu audio. 30 phút còn lại của Ngày 1 dùng cho setup, ghi error tags và làm quen giao diện.

## R1 — Ngày 7, 75 phút

> A small workflow reads a document and saves a summary. First, the system checks the file type. It can read text files, but it cannot read damaged files. Next, the agent finds the main topic and writes three short sentences. A reviewer then checks the summary. If an important fact is missing, the reviewer sends the task back. The agent may try again, but it must stop after two attempts. Finally, the system stores the accepted summary and the review result. This process uses a clear limit because repeated attempts cost time. It also uses human review because a fluent sentence may still contain a wrong fact. The stored review also helps the team find common errors in later tasks.

Tasks: mark S/V/O in sentences 1, 4, 7; mark nouns/articles/modals; order five process steps; write three frame-based sentences. Boss Fight: brief 20–30 giây, nhận hai câu hỏi chưa xem trước, dùng ít nhất một clarification/repair turn rồi retry câu trả lời. Support tối đa `S3`; không yêu cầu retell 60 giây.

## R2 — Ngày 14, 90 phút

> A tool response can be useful without being complete. For example, a storage service may report that an upload request was accepted. However, this message does not always mean that the final file is available. The service may still be processing the data, or the operation may fail later. A reliable workflow therefore checks a postcondition. It may ask whether the file exists, whether its size is correct, and whether the user can open it. These checks focus on the result instead of the internal steps. They also help the workflow classify an outcome as confirmed, failed, or unclear. If the outcome is unclear, the workflow should wait or reconcile the operation before retrying. This rule is especially important for actions that cannot be safely repeated. A second payment or publication can create harm even when the software is working as designed. Verification adds time, but the extra cost may be reasonable when the possible effect is expensive or irreversible. For low-risk reads, the workflow may accept a cheaper check because a repeated read does not change external state directly.

Tasks: first-pass main idea; second pass max 8 terms; mark passives/connectors/clauses; six-keyword notes; 3-sentence summary. Boss Fight: giải thích 45–60 giây, partner ngắt một lần bằng câu hỏi clarification, sau đó hỏi hai câu chưa xem trước; người học phải nêu limitation của việc chỉ kiểm tra file existence và repair nếu partner diễn giải sai. Support tối đa `S3`.

## R3 — Ngày 21, 105 phút

> **Abstract — A Small Study of Retry Labels.** Automated workflows often treat every timeout as a failure and immediately repeat the action. This behavior is safe for some read operations, but it can duplicate messages, payments, or publications. We evaluate a three-state outcome label—confirmed, failed, and unknown—in a simulated order-processing workflow. The baseline system uses two labels and retries all apparent failures. The new system reconciles unknown outcomes by querying the operation ID before it decides to retry. Across 200 simulated orders, duplicate charges decrease from 14 to 2, while unresolved orders increase from 1 to 6. Average completion time rises by 9 percent because reconciliation requires an additional request. These results suggest that an explicit unknown state can reduce duplicate effects. However, the simulation assumes that the payment provider supports lookup by operation ID. The method may be less useful when a provider offers no idempotency key or reconciliation endpoint. The comparison uses identical tasks and the same twenty-step budget for both systems. No statistical significance claim is made, and each order is evaluated once, so run-to-run reliability remains unknown in this small example.

Tasks: map B–P–M–R–C; mark numbers and hedging; five simple-English sentences theo move map. Boss Fight: talk tối đa 90 giây rồi nhận ba prompt theo thứ tự ngẫu nhiên: clarify một thuật ngữ, justify trade-off, extrapolate sang một tình huống mới. Support tối đa `S2`; phải giữ đúng số liệu và uncertainty.

## R4 — Ngày 28, 110 phút

> Teams that evaluate an agent on the same tasks every week may believe that the agent is improving. Some improvement can be real, but repeated use of one test set creates a hidden feedback channel. Developers inspect failures, change prompts, and select models based on those tasks. Over time, the system becomes specialized for the evaluation even when the task answers are never placed directly in the training data. A stronger program separates regression and capability evaluation. Regression tasks protect behavior that should remain solved. Capability tasks measure difficult behavior and should change when they no longer provide useful information. A final hidden set is used less often and is not available for routine debugging. The program also repeats important tasks because agent outputs can vary across runs. It reports both the chance of at least one success and the chance of repeated success. Human review is added for qualities that deterministic checks cannot measure, such as whether a summary preserves the source’s meaning. This design costs more than one fixed test set. It also requires careful ownership so that hidden tasks do not slowly become ordinary development examples. Nevertheless, the separation makes release evidence more honest and helps the team detect whether apparent progress transfers beyond familiar tasks. It also reveals when a capability task has become too easy.

Tasks: paragraph map; identify problem, mechanism, design and limitation; 8-keyword notes. Boss Fight: talk 2–3 phút và trả lời năm câu hỏi về test reuse, suite types, hidden set, repeated runs và human review. Trong năm lượt, partner phải có một deliberate misunderstanding; người học phải phát hiện, sửa claim và tiếp tục. Support tối đa `S2`; ít nhất một repair không dùng frame.

## Reading Anchor Form B — Ngày 30, 30 phút

> An AI workflow receives a request. It calls a tool and records the result. The workflow has a cost limit and a step limit. It must stop when the budget ends. A human approves actions that send messages or change customer data. If an outcome is unclear, the workflow checks its operation ID. These controls help prevent unsafe repeated actions.

- Sentence decoding: sentences 1 and 2.
- Meaning Q1: What two limits does the workflow have?
- Meaning Q2: Which actions require human approval?

## Final Integrated Form — Ngày 30, 90 phút

> Long-running agents may work for hours, pause for approval, and continue on another worker. A large context window does not solve every recovery problem. If a system stores only the latest prompt, it may lose earlier decisions, tool results, and evidence about external actions. A durable session keeps events, files, approvals, operation IDs, and goal state. The active context is smaller. It contains only the information needed for the next model call, such as a summary, recent errors, and links to files. Before an external action, the worker records an intent and an operation ID. After the call, it records a confirmed result or an unknown outcome. If the worker crashes, another worker can inspect these records before trying again. The system also keeps version information so later workers can interpret old records correctly. This design can reduce lost work and duplicate effects. However, it adds storage, coordination, and recovery cost. It also does not give the agent new authority. A recovered agent still needs human approval before it publishes information or spends money. Durable storage preserves history, context policy manages attention, and approval controls risky actions.

Tasks: first pass 20 minutes; topic/purpose/main idea; annotate problem, mechanism, benefit and limitation; mark connectors, passive and hedging; paraphrase five key sentences; 8-keyword PREML talk 2–3 phút; answer five follow-ups. Năm follow-ups bắt buộc gồm clarification, deliberate misunderstanding/repair, justification, extrapolation và responsibility boundary; thứ tự được randomize. Ghi response latency, support và repair result. Support tối đa `S2`, không dùng full script.

Integrated rubric 100: topic/purpose 15; mechanism/responsibility boundaries 25; sentence/logic decoding 15; faithful paraphrase 15; spoken organization 15; follow-ups 5; independent intelligibility 5; grammar/chunks 5.

Speaking component chỉ đạt khi meaning đúng, hoàn thành đủ interaction turns và sửa được deliberate misunderstanding. Tốc độ nói hoặc phát âm trôi chảy không bù cho claim sai; clarification hợp lệ không bị coi là thất bại.

## Final decision

- Reading Anchor Form B phải đạt ≥70 và không thấp hơn Reading Diagnostic Form A quá 5 điểm.
- Final Integrated Form phải đạt ≥70, Reading ≥49/70 và Speaking ≥21/30.
- Finish-line chunk and pronunciation evidence in `CHALLENGE.md` is also required.
- 5-minute no-script talk là Stretch thật sự: tùy chọn và không ảnh hưởng `PASS`.
