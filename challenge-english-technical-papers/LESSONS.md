# Lessons — English for Technical Papers

## Phase 1 — Build sentences you can see and say

### Ngày 1 — Baseline

Không học trước. Làm `Baseline` trong `ASSESSMENTS.md`, ghi cả điều bạn đoán và điều bạn chắc. Speaking recording không được xóa hoặc thu lại.

### Ngày 2 — Sentence skeleton

- English clause thường có **Subject + Verb + Object/Complement**: “The agent uses a tool.”
- `be` nối subject với identity/state: “The result is reliable.”
- Khi câu dài, tìm finite verb trước rồi hỏi “ai/cái gì thực hiện hoặc ở trạng thái này?”.
- Frames: `X is Y.` `X uses Y.` `X causes Y.` `X depends on Y.`

### Ngày 3 — Noun phrases

- Head noun mang identity; từ trước/sau bổ nghĩa: `a reliable evaluation system` → head là `system`.
- `a/an` cho một countable item chưa xác định; `the` cho item đã xác định; plural thường không dùng `a`.
- Khi đọc phrase dài, đọc từ head ngược ra modifiers thay vì dịch trái→phải.
- Frames: `The main problem is ...` `This method has two steps.`

### Ngày 4 — Time and stance

- Present simple mô tả fact/process; past simple mô tả experiment đã làm.
- `can` ability/possibility, `must` requirement, `may/might` uncertainty, `should` recommendation.
- Verb tense cho biết thời điểm; modal cho biết độ chắc/chủ ý. Không dịch tất cả thành “sẽ”.

### Ngày 5 — Questions and clarification

- Yes/no: `Do/Does/Did + subject + base verb?`; với `be/modal`, đảo chúng lên trước.
- Clarification frames: `What does X mean?` `Could you repeat that more slowly?` `Do you mean that ...?`
- Answer survival frame: `I am not sure, but I think ... because ...`

### Ngày 6 — Pronunciation for intelligibility

- Ưu tiên content words, final consonants và word stress; accent bản địa không phải mục tiêu.
- Chia thought groups bằng `/`: `The model / uses past data / to predict failure.`
- Shadowing: nghe `audio/d06_thought_groups.mp3` → pause → bắt chước rhythm → record → so sánh.

### Ngày 7 — Review

Retrieve frames không nhìn tài liệu, đọc một đoạn mới và nói 60 giây. Chỉ thêm recovery drills cho lỗi xuất hiện ít nhất hai lần.

## Phase 2 — Decode technical sentences

### Ngày 8 — Technical noun stacks

- Tìm head noun cuối cụm trước: `agent task success rate` → rate của success, thuộc task, của agent.
- Prepositional phrase sau noun thường giới hạn meaning: `evaluation of models on unseen tasks`.
- Viết lại bằng `of/that` để kiểm tra meaning rồi mới rút gọn.

### Ngày 9 — Passive voice

- `be + past participle`: `The model was trained on logs.` Focus đặt vào object/result, actor có thể bị ẩn.
- Khi đọc, phục hồi ba slot: actor (nếu biết), action, affected object.
- Passive không tự động vô trách nhiệm; trong Methods nó giúp giữ focus trên procedure.

### Ngày 10 — Logic connectors

- Addition: `also, moreover`; contrast: `however, whereas`; cause: `because, therefore`; condition: `if, unless`; example: `for example`.
- Connector là arrow giữa propositions. Vẽ `A → B`, `A ↔ contrast B` trước khi dịch.
- `although A, B` đặt concession ở A nhưng main claim thường là B.

### Ngày 11 — Clauses

- Relative clause mô tả noun: `a model that predicts failures`.
- Complement clause là nội dung claim: `The results show that X improves Y.`
- Đặt ngoặc quanh clause phụ, đọc main clause trước, sau đó gắn details lại.

### Ngày 12 — Word families

- `predict` verb, `prediction` noun, `predictive` adjective, `predictably` adverb.
- Suffix giúp đoán slot: `-tion/-ment` noun; `-ive/-al` adjective; `-ly` thường adverb.
- Prefix giúp polarity/degree: `un-, non-, over-, under-, pre-, post-`.
- Luôn kiểm tra bằng vị trí trong câu, không đoán chỉ từ suffix.

### Ngày 13 — Two-pass reading

1. First pass: title, first/last sentence, repeated terms; không tra từ.
2. Viết one-sentence guess.
3. Second pass: chỉ tra từ chặn main meaning hoặc lặp ≥3 lần.
4. Đọc lại và sửa summary. Mục tiêu là meaning, không phải 100% vocabulary.

### Ngày 14 — Review

Passage mới 150–180 từ: chunk noun phrases, mark verbs/connectors/passives, rồi nói 90 giây bằng 6 keywords.

## Phase 3 — Read a paper by rhetorical function

### Ngày 15 — Paper anatomy

- Title: topic/scope. Abstract: whole story compressed.
- Introduction: context → problem/gap → contribution.
- Methods: data/materials → procedure/model → evaluation.
- Results: observations/numbers. Discussion: interpretation, limitations, implications.
- Conclusion không thay việc đọc evidence.

### Ngày 16 — Abstract five-move map

Đánh dấu `B-P-M-R-C`: Background, Problem, Method, Result, Conclusion. Không phải abstract nào cũng đủ hoặc theo đúng thứ tự; missing move cũng là information.

Summary frame: `This paper studies __. The problem is __. The authors use __. They find __. This matters because __.`

### Ngày 17 — Introduction argument

- Background nói điều đã biết; gap nói điều chưa biết/không đủ; contribution nói paper làm gì.
- Signals: `however`, `little is known`, `we propose`, `our contributions are`.
- Không nhầm importance claim với evidence rằng method hiệu quả.

### Ngày 18 — Methods as a flow

Biến prose thành `Input → Processing/Model → Training/Procedure → Output → Evaluation`. Mark quantities, datasets, comparison groups và reproducibility details. Nếu một arrow thiếu parameter/data source, ghi question thay vì tự điền.

### Ngày 19 — Results and numbers

- Tách direction, magnitude và uncertainty: tăng/giảm bao nhiêu, so với gì, có interval/error bar không.
- `associated with` không bằng `caused`; `statistically significant` không tự động meaningful.
- Figure reading: axes → units → groups → pattern → exception.

### Ngày 20 — Hedging and limitations

- Strength ladder: `proves` > `shows` > `suggests` > `may indicate`.
- Hedging bảo vệ claim theo evidence; paraphrase không được làm claim mạnh hơn.
- Limitation frames: `The study is limited by __.` `The result may not generalize to __.`

### Ngày 21 — Review

Map một abstract lạ, giải thích từng move và nói 2 phút. Chấm meaning trước grammar; grammar chỉ bị trừ mạnh khi làm đổi meaning.

## Phase 4 — Turn reading into speaking

### Ngày 22 — Long-sentence surgery

Quy trình: khoanh connectors → gạch finite verbs → tìm main subject/verb → đóng ngoặc clauses → rút noun stacks → paraphrase thành 2–3 câu ngắn. Không cắt ở mọi dấu phẩy vì có thể làm mất quan hệ logic.

### Ngày 23 — Paragraph map

Gán function cho từng câu: claim, evidence, explanation, contrast, limitation, transition. Viết margin note 3–6 từ. Paragraph summary phải phản ánh main claim và evidence relation, không liệt kê mọi câu.

### Ngày 24 — Notes and paraphrase

- Notes dùng keywords/arrows, không chép câu.
- Paraphrase đổi structure và wording nhưng giữ actors, modality, numbers và causality.
- Check: có thay `may` thành chắc chắn? có bỏ comparison baseline? có thêm nguyên nhân không có trong source?

### Ngày 25 — PREML speaking map

`P`roblem → `R`elevance → `E`vidence/method → `M`ain result → `L`imitation. Mỗi move 1–3 câu ngắn. Dùng signposts: `First`, `The authors then`, `The main result is`, `One limitation is`.

### Ngày 26 — Thought groups and stress

Mark `/` sau một idea unit. Shadow `audio/d26_paper_summary.mp3`. Stress nouns, main verbs, numbers và contrast; giảm function words. Thu ba take: slow accuracy, natural chunks, final no-script. Self-transcript chỉ tìm lỗi; listener độc lập hoặc fixed ASR mới chấm intelligibility.

### Ngày 27 — Paper Q&A

Frames:

- `The paper focuses on ...`
- `The authors used ... because ...`
- `The evidence supports ..., but it does not prove ...`
- `I did not understand X. Could you rephrase the question?`
- `Based on the paper, I would answer ...`

### Ngày 28 — Review

Cold read 220 từ, 8-keyword notes, 3-minute talk và five-question Q&A. So với baseline bằng cùng rubric, không bằng cảm giác.

### Ngày 29 — Guided paper synthesis

Skim toàn paper → đọc abstract/introduction/conclusion → chọn một Methods và một Results subsection → tạo paper map → trace mỗi spoken claim về section/figure. Không cần hiểu mọi sentence để có grounded summary.

### Ngày 30 — Final

Làm Matched Form B rồi Locked Stretch trong `ASSESSMENTS.md`. Giữ annotations, notes, recording, self-transcript chẩn đoán và listener/ASR result độc lập làm evidence.
