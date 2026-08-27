# Pedagogy Audit — English Technical Papers

Scope: toàn bộ challenge tại thời điểm trước remediation này. Audit đánh giá năng lực sử dụng tiếng Anh kỹ thuật trong thực tế, không đánh giá thẩm mỹ UI và không coi việc hoàn thành nội dung là competence.

## A. Executive Audit

### Philosophy hiện tại

Challenge đang dùng hướng **technical-reading-first**: xây sentence decoding, chuyển sang rhetorical reading của paper, rồi tích hợp paraphrase, speaking và Q&A. Nó đã tránh nhiều lỗi phổ biến: không ép speaking ở Day 1, dùng graded corpus, khóa key trước attempt, có D+2/D+7 retrieval, giới hạn workload và yêu cầu evidence.

### Điểm mạnh cần giữ

- Finish line đo reading, paraphrase, speaking, follow-up, chunks và intelligibility.
- `LESSONS.md`, `EXERCISES.md`, `PRACTICE_PAPER.md` tạo một progression nội dung hợp lý cho beginner.
- Reading Form A/B có anchor so sánh được; speaking được scaffold sau orientation.
- Chunk ledger, fixed input, protected keys và feedback–retry đã có nền tảng vận hành.
- Workload 60→120 phút và recovery rule không yêu cầu học bù gấp đôi.

### Bottleneck lớn nhất

Năng lực cuối ngày hiện được mô tả chủ yếu bằng **parse / mark / map / convert / quiz**. `SCAFFOLD_MAP.md` lặp một template thao tác bài học, nhưng không nói rõ tình huống sử dụng, interlocutor, phản ứng bất ngờ, mức hỗ trợ hoặc performance cuối ngày. Interaction thật bị dồn vào Day 27–30; clarification chunks nằm ngoài production requirement. Vì vậy người học có thể tiến bộ trong việc hoàn thành worksheet mà vẫn chưa chắc phản ứng được khi một đồng nghiệp hỏi lại.

### Khả năng tạo competence hiện tại

`PARTIAL`: mạnh về strategic reading và evidence discipline; trung bình về independent production; yếu về interaction, response latency, repair-in-conversation và systematic error recycling. Cấu trúc nguồn không cần rebuild. Cần thay lớp daily scaffold/contract và nâng review/final thành performance checkpoints.

## B. Global Architecture Changes

1. Giữ `LESSONS.md`, fixed exercises, graded paper, audio và workload làm input/practice authority.
2. Chuyển `SCAFFOLD_MAP.md` thành **Daily Mission Map** theo vòng `INPUT → NOTICE → IMITATE → RECALL → PRODUCE → INTERACT → FEEDBACK → RETRY → REUSE`.
3. Mỗi ngày kết thúc bằng một Mission Challenge có output quan sát được; worksheet chỉ là bước chuẩn bị.
4. Dùng bốn mức hỗ trợ: `S4 script/model`, `S3 sentence frames`, `S2 keywords`, `S1 no script + unexpected follow-up`.
5. Day 7/14/21/28 trở thành Boss Fight tích lũy; không thêm thời gian ngoài review timebox.
6. Chuyển một phần chunk bank bắt buộc sang clarification, repair và interaction; vẫn giữ tổng 40 ACTIVE.
7. Thêm error ledger với vòng `detect → model → immediate retry → D+1 → D+3 → Boss Fight`.
8. Đo competence bằng duration, latency, support, interaction turns, repair và meaning accuracy; time/streak chỉ là context.

## C. KEEP / IMPROVE / REPLACE / ADD Matrix

| Thành phần | Quyết định | Lý do |
|---|---|---|
| Primary outcome technical papers | KEEP | Cụ thể, phù hợp mục tiêu người học |
| Workload/recovery contract | KEEP | Có timebox và hard cap rõ |
| Graded passages, practice paper, fixed audio | KEEP | Input có kiểm soát và tái sử dụng được |
| Sentence/grammar lessons | IMPROVE | Giữ nội dung nhưng đặt sau communication need |
| Fixed exercises | IMPROVE | Dùng làm controlled practice, không dùng làm mission cuối |
| Daily scaffold lặp “2 items → key → remainder” | REPLACE | Không thể hiện real-world use, interaction hoặc fading support |
| Daily Applied Assessments tùy chọn | KEEP | Hữu ích cho transfer; không biến thành PASS gate ẩn |
| Chunk activation 1–40 chỉ thiên về paper description | IMPROVE | Cần đưa clarification/repair vào production set |
| Review assessments | IMPROVE | Thêm cumulative interaction và unexpected turn trong cùng timebox |
| Error tags trong progress | IMPROVE | Tag chưa tạo delayed recycling |
| Support-level map | ADD | Cần chứng minh independence tăng dần |
| Performance metrics | ADD | Cần đo use, không chỉ completion |

## D. Phase / Week Audit

| Phase | Current objective | Capability thực tế hiện tạo | Gap | Recommended change | Capability sau sửa |
|---|---|---|---|---|---|
| Days 1–7 · Foundations | Nhìn và nói câu cơ bản | Parse sentence, dùng vài frames, read-aloud ngắn | Ít turn-taking; bài tập grammar vẫn là đích | Mission là giải thích workflow đơn giản, hỏi lại và xử lý misunderstanding | Hoàn thành một technical micro-conversation 20–30 giây |
| Days 8–14 · Decode | Giải mã câu kỹ thuật | Phân tích noun stack/passive/logic/clause | Chưa buộc giải thích meaning cho người khác | Mỗi ngày có handoff/explanation + một follow-up không báo trước | Giải thích đoạn kỹ thuật 45–60 giây và clarify được |
| Days 15–21 · Paper functions | Đọc paper theo rhetorical move | Map section, method, result, limitation | Production vẫn là báo cáo chuẩn bị trước | Thêm evidence-bound Q&A và challenge overclaim/missing information | Brief abstract 60–90 giây và bảo vệ scope |
| Days 22–30 · Independence | Paraphrase, summary, Q&A | Có talk 3 phút và final integrated task | Independence/latency/repair chưa được đo liên tục | Fading S2→S1, audience switch, randomized Q&A, repair event | Trình bày 2–3 phút, phản ứng câu hỏi mới và tự repair |

## E. Day / Lesson Audit

Mọi lesson giữ nguyên input chuyên môn; phần cần thay là daily performance layer.

| Day | Current | Problem | Keep | Change / Add | Revised Mission | PASS signal |
|---:|---|---|---|---|---|---|
| 1 | Orientation + reading anchor | Chưa gắn reading với quyết định thực tế | Form A, no speaking | Thêm approval/safety decision note | Đọc workflow và chỉ ra việc nào cần dừng/approval | Topic + 2 limits + approval action đúng; giữ answer gốc |
| 2 | Parse S–V–O | Worksheet là đích | Frames và 15 câu | Dùng parse để giải thích agent làm gì | Giải thích một workflow 8 câu và trả lời 2 câu hỏi | ≥12/15 parse; 6/8 câu hiểu được; 2 answers liên quan |
| 3 | Noun phrases | Production không có interlocutor | Head/modifier practice | Mô tả component và resolve “which/how many” | Mô tả một hệ thống cho đồng đội | ≥80% agreement; listener chọn đúng component |
| 4 | Tense/modals | Chỉ đổi form | Time/certainty contrast | Status update + challenge certainty | Báo việc đã làm, đang làm, có thể xảy ra | Không đổi time/modality; sửa được một overclaim |
| 5 | Questions/clarification | Role-play chưa có outcome | Question forms, frames | 6-turn requirement clarification | Làm rõ yêu cầu mơ hồ trước khi hành động | ≥2 clarification turns; shared meaning đạt được |
| 6 | Pronunciation snapshot | Chủ yếu read-aloud | Audio, 20–30s baseline | One follow-up + repair khi bị nghe sai | Giải thích workflow đủ hiểu | Listener hiểu main idea; repair một misunderstanding |
| 7 | Review quiz | Chưa là weekly performance | R1 content | Boss Fight 1 cumulative, two-way | Brief workflow + 2 unseen follow-ups | Meaning ≥70%; hoàn thành interaction bằng frames |
| 8 | Noun stacks | Expand/compress chưa transfer | Stack pipeline | Explain ambiguity to a colleague | Làm rõ một technical noun stack | 5/6 interpretation đúng; xác nhận meaning |
| 9 | Passive | Conversion có thể thành mechanical | Actor/action/object | Procedure handoff + “who did it?” | Giải thích procedure không bịa actor | 7/8 đúng; unknown actor nói rõ |
| 10 | Connectors | Logic map chưa có live adaptation | Incident paragraph | Retell + changed-condition question | Giải thích vì sao workflow dừng/retry | Relation đúng; answer thích nghi giữ logic |
| 11 | Clauses | Split câu chưa chứng minh understanding | Clause surgery | Plain-English explanation + follow-up | Giải thích claim dài thành câu ngắn | Main claim/modality giữ nguyên |
| 12 | Word families | Dễ thành suffix quiz | Context-slot reasoning | Status message dùng đúng forms | Viết/nói update kỹ thuật ngắn | 7/8 forms đúng và update hiểu được |
| 13 | Two-pass reading | Summary chưa tương tác | Lookup rule, passage | Brief + one clarification | Báo main claim của service note | ≤8 lookups; 3 câu đúng nghĩa; answer source-bound |
| 14 | Review 2 | Speaking vẫn prepared | R2 passage | Boss Fight 2 + interruption/clarify | Giải thích incident note cho teammate | Reading ≥70%; 45–60s + 2 turns |
| 15 | Paper anatomy | Label section chưa thành task | Section functions | Route questions to correct sections | Hướng dẫn đồng đội tìm evidence trong paper | 5/6 section routes đúng |
| 16 | Abstract moves | Talk không có missing-move response | B–P–M–R–C | Follow-up về move thiếu | Brief abstract và nói điều chưa được nêu | Map đúng; 60s; không tự bịa missing move |
| 17 | Intro argument | Map có thể recite | Gap/contribution distinction | Challenge “does this prove it?” | Pitch research gap có giới hạn | Source pointers đầy đủ; không gọi importance là result |
| 18 | Methods flow | Flowchart một chiều | Input→steps→output | Listener flags missing instruction | Handoff procedure có thể kiểm tra | Không tự điền missing parameter; repair flow |
| 19 | Results | Viết result nhưng thiếu live defense | Numbers/baseline | Causality challenge | Brief một result cho stakeholder | Number/baseline đúng; reject causal overclaim |
| 20 | Hedging | Ladder chưa buộc lựa chọn giao tiếp | Claim strength | Correct an overclaim in conversation | Sửa claim quá mạnh và nêu limitation | Claim không mạnh hơn source; reason rõ |
| 21 | Review 3 | Một question chưa đủ Boss Fight | R3 abstract | Boss Fight 3 randomized defense | Research briefing 90s + 3 questions | Map ≥70%; source/inference boundary rõ |
| 22 | Sentence surgery | Meaning check chủ yếu self-check | Five-step pipeline | Listener restates; learner repairs mismatch | Chuyển câu dài thành explanation dễ hiểu | 4/5 giữ negation/modality/causality |
| 23 | Paragraph map | Chưa có negotiation of order | Function map | Defend/repair reordered paragraph | Giải thích argument flow | Summary đúng + order reasoning |
| 24 | Notes/paraphrase | Chưa có audience/delivery | Integrity audit | Send practical summary + challenge | Viết brief không chép, trả lời scope question | Không copy chain; five-field integrity pass |
| 25 | PREML talk | Ba take nhưng interaction ít | PREML, 8 keywords | Audience switch + follow-up | Brief cùng paper cho two audiences | 5 moves; factual consistency; answer one follow-up |
| 26 | Stress | ASR score có thể lấn communication | Thought groups, listener | Repair wrong-heard contrast | Làm người nghe nhận đúng contrast | ≥75% content words; repair mismatch |
| 27 | Fixed Q&A | Questions biết trước | Frames, evidence boundary | Random subset + one changing condition | Live paper Q&A | ≥5/6 relevant; clarify + insufficient-evidence response |
| 28 | Integrated review | Gần đạt nhưng cần Boss framing | Cold read/talk/5Q | Boss Fight 4, no script, latency tracking | Cold research briefing | Mỗi subscore ≥70%; 5 turns; one repair |
| 29 | Full synthesis | “Guided” còn nhiều support | Source tracing | S1 keywords only + 2 unseen questions | Brief một paper chưa thuộc lòng | 100% claims traceable; 3min; 2 adaptive answers |
| 30 | Final integrated | Mạnh nhưng repair/latency chưa explicit | Anchor B + final form | Add live misunderstanding and independence record | Independent technical-paper performance | Finish line + follow-ups + repair + support evidence |

## F. Progressive Difficulty Map

| Range | Support | Production | Interaction | Uncertainty |
|---|---|---|---|---|
| 1–6 | `S4→S3`: model + visible frames | labels → 20–30s | 0→2 short turns | predictable prompts |
| 7–14 | `S3`: frames + 6 keywords | 20–60s explanation | 2 follow-ups | one clarification/interruption |
| 15–21 | `S3→S2`: move map + keywords | 60–90s brief | 2–3 evidence questions | missing information/overclaim |
| 22–27 | `S2`: max 8 keywords | 90s→3min | 3–6 turns | randomized question/change |
| 28–30 | `S1`: no script, max 8 keywords | 2–3min integrated | 5 questions + repair | unseen input and unexpected turn |

Chỉ tăng 1–2 trục mỗi phase; không tăng đồng thời duration, input density, turn count và vocabulary load.

## G. Retrieval Map

- Mỗi ngày: 3–5 phút recall không nhìn tài liệu, gồm một chunk D+2/D+7 và error item đến hạn.
- `D+1`: sửa lại lỗi critical/repeated bằng input mới rất ngắn.
- `D+3`: dùng cùng function trong tình huống khác.
- Day 7/14/21/28: Boss Fight lấy một error cũ và một chunk cũ nhưng không báo trước item.
- Day 29/30: chỉ dùng chunks ACTIVE; unresolved errors phải được ghi là evidence, không che bằng script.

## H. Boss Fight Audit

| Checkpoint | Trước sửa | Sau sửa |
|---|---|---|
| Day 7 | Reading quiz + 1 frame answer | Workflow brief 20–30s, 2 unseen questions, one clarification/repair |
| Day 14 | Passage + prepared 45–60s | Incident explanation, interruption, 2 follow-ups, error recycle |
| Day 21 | Abstract map + trade-off | 90s research brief, 3 randomized questions, source/inference defense |
| Day 28 | Cold read + talk + Q&A | Giữ core, thêm response latency, unexpected misunderstanding và retry |

Tất cả vẫn nằm trong review timebox hiện có; không cộng một assessment mới.

## I. Final Challenge Audit

Final hiện đã đo comprehension, paper structure, paraphrase, 2–3 phút speaking và follow-up. Sau remediation, protocol phải ghi thêm: một câu hỏi cần clarification, một deliberate misunderstanding để learner repair, response latency, support used và distinction giữa source fact/inference. Không dùng script, translation hay AI hint trong attempt chính. Reading Anchor vẫn tách riêng để không đánh tráo baseline.

## J. Measurement System

| Metric | Evidence | Mốc dùng |
|---|---|---|
| Meaning accuracy | reading/mission rubric | hằng ngày |
| Fluency | longest continuous speaking + pauses >5s | speaking days |
| Response latency | giây trước khi bắt đầu answer | interaction days |
| Independence | S4/S3/S2/S1 + số lần mở help | hằng ngày |
| Interaction | completed turns / required turns | mission/Boss Fight |
| Repair | misunderstanding được nhận ra và sửa | interaction/Boss Fight |
| Accuracy | critical/repeated/minor errors; self-correction | hằng ngày |
| Range | functions đã PASS: describe, clarify, explain, summarize, defend | weekly review |
| Comprehension | first-listen/first-pass result; subtitle/dictionary use | input days |

Time spent và streak không phải competence score. Không ép metric không liên quan vào mọi ngày.

## Final validation trước remediation

| Câu hỏi | Status |
|---|---|
| Mỗi ngày có capability rõ | `PARTIAL` |
| Mỗi ngày có real-world mission | `FAIL` |
| Có independent production | `PARTIAL` |
| Có interaction | `FAIL` xuyên suốt |
| Có feedback → retry | `PASS` về contract, `PARTIAL` về delayed use |
| Lỗi cũ quay trở lại | `FAIL` |
| Knowledge cũ được retrieved | `PASS` cho chunks, `PARTIAL` cho skills/errors |
| Scaffolding giảm dần | `PARTIAL` |
| Boss Fight đo performance | `PARTIAL` |
| Day 30 độc lập hơn Day 1 | `PARTIAL`, chưa có support/latency evidence |

Verdict trước sửa: `REMEDIATION_REQUIRED`. Không cần rebuild UI hoặc corpus; cần sửa mission architecture, chunk production mix, checkpoints và evidence system.

## Final validation sau remediation

| Câu hỏi | Kết luận về thiết kế | Bằng chứng cần từ người học |
|---|---|---|
| 1. Mỗi ngày có capability rõ? | `PASS` — 30 Daily Missions nêu required ability và PASS criteria | `PENDING` cho tới khi có daily evidence |
| 2. Mỗi ngày có real-world mission? | `PASS` — output gắn với decision, handoff, explanation, briefing hoặc Q&A | `PENDING` cho tới khi learner thực hiện |
| 3. Có independent production? | `PASS` — mỗi ngày có Production và support giảm `S4→S1` | `PENDING` cho independence thực tế |
| 4. Có interaction? | `PASS` về kiến trúc — mỗi ngày quy định interaction hoặc ngoại lệ reading-only Day 1 | `PENDING` cho listener/partner evidence |
| 5. Có feedback → retry? | `PASS` — correction quan trọng bắt buộc produce lại | `PENDING` cho retry artifact |
| 6. Lỗi cũ quay trở lại? | `PASS` — `ERROR_LEDGER.md` dùng D+1, D+3 và Boss Fight | `PENDING` cho recycled-error result |
| 7. Knowledge cũ được retrieved? | `PASS` — chunks D+2/D+7, skills và errors được gọi lại | `PENDING` cho retrieval score |
| 8. Scaffolding giảm dần? | `PASS` — support contract đi từ `S4` đến `S1`, final tối đa `S2` | `PENDING` cho support level thực dùng |
| 9. Boss Fight đo performance? | `PASS` — Days 7/14/21/28 có production, unseen turns, repair và evidence | `PENDING` cho checkpoint scores |
| 10. Day 30 độc lập hơn Day 1? | `PASS` về progression — reading-only diagnostic tiến tới integrated talk/Q&A/repair | `PENDING` cho so sánh năng lực thật |

**Kết luận sau sửa:** `READY_FOR_LEARNER_VALIDATION`. Kiến trúc curriculum đã đáp ứng 10 điều kiện; không tuyên bố learner `PASS` trước khi có evidence trong `PROGRESS.md`, `CHUNK_LEDGER.md` và `ERROR_LEDGER.md`.
