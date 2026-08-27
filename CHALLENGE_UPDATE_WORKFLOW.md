<!-- Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V5 -->

# Workflow update 3 challenge theo kết quả audit

## 1. Mục tiêu và ranh giới

Workflow này chuyển các finding trong `AUDIT_CROSS_CHALLENGE.md` và sáu báo cáo riêng thành các pha sửa có kiểm soát cho:

1. `challenge-ai-agent-system-design`
2. `challenge-data-structures-algorithms`
3. `challenge-english-technical-papers`

Kết quả cuối cần đạt:

- Trang tổng quan 30 ngày và trang chi tiết ngày là hai view riêng.
- URL/hash, Back/Forward và refresh giữ đúng ngữ cảnh ngày.
- Progress, draft, assessment unlock và append-only history không bị mất.
- Contract, lesson flow và assessment không còn conflict/dead-end đã ghi trong audit.
- Ba ứng dụng dùng chung semantics nhưng có macrostructure chuyên môn khác nhau.

Workflow không cho phép sửa đồng loạt cả ba app ngay từ đầu. Thực hiện **AI Agent pilot → re-audit → DSA → re-audit → English → re-audit → cross-challenge verification**.

## 2. Nguồn authority và nguyên tắc thay đổi

Thứ tự authority:

1. Contract/finish line trong `CHALLENGE.md`.
2. Lịch và workload trong `PLAN.md`.
3. Nội dung dạy trong lesson/exercise/chunk files.
4. Assessment và protected keys.
5. Progress/evidence của người học.
6. Payload JS chỉ là bản sao để render, không phải nguồn nội dung mới.

Quy tắc bắt buộc:

- Không sửa evidence cũ hoặc nâng status thành `PASS`.
- Không đổi localStorage key/schema nếu chưa có migration tương thích ngược.
- Không sửa payload trước source markdown; payload được rebuild sau cùng.
- Không tự chọn giá trị khi authority đang conflict hoặc `PENDING`.
- Không mở protected answer/key trước điều kiện hiện tại.
- Không thêm, bớt hoặc đổi mục tiêu roadmap khóa nếu chưa có duyệt riêng.
- Mỗi pha chỉ sửa file nằm trong allowlist của pha đó.
- Không commit, push hoặc triển khai trong workflow này nếu chưa được yêu cầu riêng.

## 3. Deliverables

Trong khi triển khai, tạo hoặc cập nhật:

- `UPDATE_DECISIONS.md`: quyết định đã được người dùng duyệt, đặc biệt conflict và setup.
- `<challenge>/REMEDIATION_LOG.md`: finding → file thay đổi → test → trạng thái.
- `<challenge>/REAUDIT_UI.md`: kết quả browser sau khi sửa UI.
- `<challenge>/REAUDIT_CONTENT.md`: kết quả sau khi sửa content/contract.
- `REAUDIT_CROSS_CHALLENGE.md`: kiểm tra thống nhất cuối cùng.
- `audit-evidence/update/<challenge>/`: screenshot và browser-result của lần update.

Không ghi đè các file `AUDIT_*.md`; chúng là baseline trước sửa.

## 4. Mapping finding → pha sửa

| Finding | Pha xử lý | Gate bắt buộc |
|---|---:|---|
| `AI-CONTENT-001` timebox conflict | 1 | Người dùng chốt authority/value |
| `DSA-CONTENT-005`, `DSA-UI-003` setup gate | 1 và 4 | Bốn setup field được xác nhận |
| `ENG-UI-003` Day 1 đảo prerequisite | 1 và 6 | Orientation mở trước diagnostic, key vẫn khóa |
| `CROSS-UI-001`, `CROSS-UI-002` | 2–5 | Router contract + browser acceptance |
| `CROSS-UI-003`, `CROSS-UI-004` | 2–5 | Action/lock semantics đúng view |
| `CROSS-UI-005` template sameness | 3–5 | Blind structural comparison |
| AI lesson/coverage findings | 6A | Content approval + evidence map |
| DSA lesson/DP/Graph/retrieval findings | 6B | Giữ nguyên 15 nhóm/44 mục |
| English scaffold/D-2/D-7 findings | 6C | Giữ beginner workload và source intent |
| Browser items đang `PENDING` | 7 | Chạy đủ interaction matrix |

## 5. Pha 0 — Freeze, backup và baseline

1. Ghi `git status --short`; đánh dấu file đã bẩn trước update.
2. Hash toàn bộ authority file và payload hiện tại.
3. Export một fixture progress cho từng app gồm:
   - fresh;
   - Day 1 có draft;
   - `IN_PROGRESS`, `PARTIAL`, `BLOCKED`, `SKIPPED`, `PASS`;
   - assessment unlock;
   - 29 ngày PASS, đang ở Day 30.
4. Ghi current localStorage keys và schema version.
5. Chụp baseline các viewport `320`, `375`, `414`, `768`, `1280×720`, `1440×900`.
6. Ghi lại exact finding IDs sẽ sửa trong run.

**Gate 0:** có thể phục hồi progress fixture byte-for-byte và phân biệt thay đổi có sẵn với thay đổi do update.

## 6. Pha 1 — Resolve blocker trước khi sửa UI

### 6.1 AI Agent: khóa timebox authority

Trình người dùng bảng conflict:

- Day 1: `210` hay `120` phút.
- Review 7/14/21/28: tổng Target và thời lượng assessment nằm trong hay ngoài Target.
- Day 30: `210` phút hay hard cap khác.

Chỉ sau khi người dùng chốt mới đồng bộ `PLAN.md`, `ASSESSMENTS.md`, contract hiển thị và payload.

### 6.2 DSA: khóa setup gate

Yêu cầu người dùng xác nhận:

- `LANGUAGE`
- `PROBLEM_SOURCE`
- `SESSION_TYPE`
- `NORMAL_MINUTES`

Trong UI, thiết kế setup state nhưng không tự điền bốn giá trị. Day 1 chỉ `AVAILABLE` sau khi setup hợp lệ.

### 6.3 English: đóng băng Day 1 sequence

Thứ tự bắt buộc:

1. Orientation tiếng Việt.
2. Reading Diagnostic Form A.
3. Ghi attempt/evidence.
4. Feedback/key được mở theo rule.
5. Không thêm speaking vào Day 1.

**Gate 1:** không còn `BLOCKING_CONFLICT`; mọi giá trị chưa được người dùng xác nhận vẫn là `PENDING` và chặn phần phụ thuộc.

## 7. Pha 2 — Định nghĩa contract dùng chung, không dùng chung template

Chỉ chuẩn hóa data/navigation semantics:

### 7.1 Route states

- `#overview`: trang tổng quan.
- `#day/01` … `#day/30`: chi tiết ngày.
- Route rỗng được normalize về `#overview` bằng `replaceState`, không tạo history entry thừa.
- Route ngày không hợp lệ quay về overview và thông báo lỗi ngắn.
- Route ngày bị khóa không render lesson; overview focus đúng day item và giải thích prerequisite.

### 7.2 Navigation rules

- Click unlocked day: push Day Detail route.
- “Tất cả ngày”: quay Overview và restore scroll/focus của day item.
- Back/Forward: render đúng view, không ghi đè draft.
- Refresh Day Detail: giữ đúng ngày nếu vẫn hợp lệ.
- Previous/next nằm trong Day Detail; Overview không có fixed next-day bar.
- Next chỉ active theo unlock contract hiện tại.

### 7.3 Shared status semantics

Chuẩn hóa:

- `LOCKED`
- `AVAILABLE`
- `IN_PROGRESS`
- `PARTIAL`
- `BLOCKED`
- `SKIPPED`
- `PASS`

Mỗi status có visible label, accessible name và lock reason; không chỉ dựa vào màu. `disabled` không được làm mất khả năng đọc lý do.

### 7.4 Persistence contract

- Giữ nguyên event history append-only.
- Draft được lưu trước mọi route change.
- Route/scroll/focus state tách khỏi learning evidence.
- Import cũ vẫn hoạt động.
- Migration phải idempotent: chạy hai lần không tạo duplicate event/unlock.
- Parse/storage failure không được xóa state đang có.

**Gate 2:** contract có test cases độc lập; chưa chỉnh visual hoặc lesson content.

## 8. Pha 3 — AI Agent pilot

### 8.1 File allowlist

- `challenge-ai-agent-system-design/index.html`
- `challenge-ai-agent-system-design/tokens.css`
- Chỉ khi Pha 1 đã chốt: `PLAN.md`, `ASSESSMENTS.md`, `content-data.js`.
- Có thể thêm một file JS/CSS mới nếu việc tách khỏi `index.html` làm ownership rõ hơn; phải ghi trước trong `UPDATE_DECISIONS.md`.

### 8.2 Overview macrostructure — reasoning index

Overview ưu tiên:

- current day, total PASS và phase;
- roadmap 30 ngày;
- domain/coverage readiness;
- status và lock reason;
- một hành động chính: mở ngày hiện tại.

Không render lesson, resources, assessment, evidence form hoặc fixed next bar.

### 8.3 Day Detail macrostructure — system reasoning workbench

Thứ tự:

1. Back to overview + day/phase/status/timebox.
2. Việc cần làm ngay.
3. Concept/mechanism/assumptions.
4. Worked reasoning hoặc architecture flow.
5. Trade-offs/failure/observability/evaluation.
6. Transfer practice và assessment gate.
7. Evidence form.
8. Previous/next compact navigation.

Không dùng full day grid, card-in-card hoặc side-stripe gate.

### 8.4 Pilot acceptance

- `#overview ↔ #day/NN` qua click, Back, Forward và refresh.
- Draft Day 2 giữ nguyên khi đi–về.
- Locked deep-link không lộ content.
- Day 30 hoạt động với 29 PASS.
- Không horizontal overflow ở sáu viewport.
- 320×800 thấy progress và hàng ngày đầu mà không cuộn qua hero dài.

**Gate 3:** AI pilot phải `PASS` re-audit UI trước khi áp dụng router contract cho app khác. Không sao chép macrostructure AI sang DSA/English.

## 9. Pha 4 — DSA implementation

### 9.1 File allowlist

- `challenge-data-structures-algorithms/index.html`
- `challenge-data-structures-algorithms/app.js`
- `challenge-data-structures-algorithms/app.css`
- `challenge-data-structures-algorithms/tokens.css`
- Setup values chỉ được ghi vào authority file đã duyệt; không tự sửa `PROGRESS.md` như completed evidence.

### 9.2 Overview macrostructure — execution roadmap

Ưu tiên:

- setup gate trước Day 1;
- phase và topic coverage;
- first-learn/retrieval/implementation readiness;
- trạng thái từng ngày và blocker;
- mở current available day.

### 9.3 Day Detail macrostructure — trace/code/test

Thứ tự:

1. Problem signal và outcome.
2. WHY/WHEN.
3. Representation/invariant.
4. Hand trace.
5. Complexity.
6. Implementation/blank-editor attempt.
7. Tests và edge cases.
8. Interview explanation.
9. Evidence + previous/next.

Không lấy reading-column macrostructure của English hoặc reasoning map của AI làm template.

### 9.4 DSA acceptance

- Setup PENDING chặn Day 1, nhưng vẫn giải thích được bốn field.
- Sau setup, route và progress migration đạt Gate 2.
- Code/pre/table không gây horizontal page scroll; overflow chỉ nằm ở code/table container có chủ đích.
- Blind comparison không cần brand/màu vẫn nhận ra DSA từ trace/code/test hierarchy.

**Gate 4:** `DSA-UI-001` đến `DSA-UI-006` được re-audit riêng; inventory 15 nhóm/44 mục không đổi.

## 10. Pha 5 — English implementation

### 10.1 File allowlist

- `challenge-english-technical-papers/index.html`
- `challenge-english-technical-papers/app.js`
- `challenge-english-technical-papers/app.css`
- `challenge-english-technical-papers/tokens.css`
- Không sửa lesson/exercise/chunk files trong pha UI.

### 10.2 Overview macrostructure — playful editorial calendar

Ưu tiên:

- reading/speaking phase;
- current day và tiến độ;
- 30 ngày dễ quét;
- chunk due/backlog summary;
- status/lock reason bằng text, không chỉ màu.

Không dùng hero dài; typography editorial không được biến thành italic heading hoặc eyebrow lặp lại.

### 10.3 Day Detail macrostructure — guided reading desk

Thứ tự:

1. Back + day/timebox.
2. Mục tiêu nhỏ bằng tiếng Việt.
3. Mẫu ngắn/noticing.
4. Guided practice.
5. Independent attempt.
6. Feedback/error repair.
7. Audio/speaking checkpoint khi đúng ngày.
8. Chunk retrieval due.
9. Evidence + previous/next.

Day 1 phải dùng sequence đã khóa tại Gate 1.

### 10.4 English acceptance

- Day 1 orientation đọc được trước diagnostic; key vẫn protected.
- Audio Day 6/16/26 phát, pause và có target/transcript đúng ngày.
- Long paper có anchor/progressive disclosure nhưng chỉ một page scroll owner trên mobile.
- Blind comparison không cần brand/màu vẫn phân biệt được với DSA.

**Gate 5:** `ENG-UI-001` đến `ENG-UI-007` được re-audit riêng trước khi sửa content.

## 11. Pha 6 — Sửa content architecture và nội dung chuyên môn

Pha này cần duyệt riêng vì thay đổi source học tập, không gộp vào UI refactor.

### 11A. AI Agent System Design

Sửa theo `AI-CONTENT-001` đến `AI-CONTENT-004`:

- đồng bộ timebox đã chốt;
- giảm overload Day 6/13 bằng phân bổ lại trong 30 ngày, không tăng finish-line scope;
- bổ sung worked reasoning phù hợp loại claim;
- mở rộng coverage map thành `requirement → lesson/day → evaluator → evidence` và reverse mapping.

Gate: M1–M100/P1–P18 vẫn đủ một lần; mọi evaluator trỏ được hai chiều.

### 11B. Data Structures & Algorithms

Sửa theo `DSA-CONTENT-001` đến `DSA-CONTENT-004`:

- mở rộng lesson anatomy mà không đổi 15 nhóm/44 mục;
- thêm hand trace, guided implementation và error repair;
- tạo delayed DP retrieval và thêm vòng Graph qua consolidation/review;
- có ledger chứng minh first-learn + hai retrieval artifacts cho 44/44 mục.

Gate: exact inventory text/order không đổi nếu chưa có duyệt; workload vẫn trong cap đã khóa.

### 11C. English Technical Papers

Sửa theo `ENG-CONTENT-001` đến `ENG-CONTENT-003`:

- tổ chức lesson theo scaffold beginner;
- phân core/guided/independent/stretch từ ngữ liệu hiện có;
- đưa D-2/D-7 due-list và evidence vào daily flow;
- không thêm speaking vào Day 1 hoặc tăng workload ngoài authority.

Gate: Form A/B vẫn comparable; speaking ramp 20–30 giây → 2–3 phút; chunk bank vẫn tách production/recognition/backlog.

### 11D. Rebuild payload

Sau khi source markdown đã PASS:

1. Rebuild `content-data.js`/`supplemental-data.js` bằng quy trình hiện có.
2. Kiểm tra byte-for-byte từng file.
3. Compile JS và kiểm tra selector đủ 30 ngày.
4. Không chỉnh payload thủ công để che source mismatch.

**Gate 6:** sáu content finding groups được re-audit; mọi điểm chưa xác minh vẫn là `PENDING`.

## 12. Pha 7 — Browser, accessibility và persistence verification

Chạy cả ba app tại:

- `320×800`, `375×900`, `414×896`, `768×900`, `1280×720`, `1440×900`.
- Fresh, draft, từng terminal status, assessment locked/unlocked, Day 30.
- Long title, long evidence, long code/table và long paper.

Test bắt buộc:

1. Overview → unlocked day → Overview.
2. Back/Forward/refresh/deep-link.
3. Locked deep-link và lock reason.
4. Draft preservation qua route/tab/reload.
5. PASS validation và append-only history.
6. Previous/next unlock rule.
7. Export → clear → import và migration từ fixture cũ.
8. Invalid import/localStorage failure không xóa dữ liệu cũ.
9. Keyboard-only, focus-visible, focus restoration.
10. Reduced motion.
11. English audio play/pause.
12. Không clipping, unreachable content hoặc horizontal page scroll.

Mỗi browser finding phải có challenge, route, state, viewport, reproduction và screenshot.

**Gate 7:** không còn `CRITICAL`; `MAJOR` chỉ được chấp nhận khi người dùng duyệt defer bằng ID. Static PASS không thay browser PASS.

## 13. Pha 8 — Cross-challenge re-audit

Kiểm tra phần được phép giống nhau:

- status semantics;
- PASS/evidence rule;
- storage/import/export/recovery;
- routing và unlock contract;
- responsive/accessibility baseline.

Kiểm tra phần bắt buộc khác nhau:

- Overview hierarchy.
- Day Detail lesson anatomy.
- Loại evidence.
- Assessment presentation.
- Density/rhythm của reasoning, code và paper.

Blind structural test:

1. Ẩn logo, tên challenge và accent color.
2. Chụp Overview và Day Detail của mỗi app.
3. Người đánh giá phải phân biệt đúng AI Agent, DSA và English từ macrostructure/task flow.

**Gate 8:** không còn `CROSS-UI-001` đến `CROSS-UI-005`; ba app không phải cùng template đổi skin.

## 14. Rollback và bảo vệ dữ liệu

- Mỗi challenge là một remediation unit độc lập.
- Nếu migration/storage test fail, dừng challenge đó; không tiếp tục app kế tiếp.
- Rollback UI không được rollback authority/progress của người học.
- Không xóa log cũ; state mới phải đọc được fixture cũ.
- Nếu source/payload lệch, source thắng và build dừng ở `BLOCKED`.
- Nếu quyết định timebox/setup thay đổi finish line, dừng và xin duyệt contract mới.

## 15. Definition of done

Update hoàn tất khi:

- Mọi finding `CRITICAL` và `MAJOR` trong phạm vi đã duyệt có trạng thái re-audit rõ.
- Overview và Day Detail tách thật sự ở cả ba app.
- Route/hash, Back/Forward, refresh và locked deep-link đạt browser test.
- Progress/draft/unlock/history cũ được bảo toàn qua migration.
- AI timebox đã thống nhất; DSA setup được khóa; English Day 1 đúng prerequisite.
- UI ba challenge có macrostructure chuyên môn khác nhau.
- Source/payload integrity PASS sau mọi content edit.
- Browser matrix, accessibility, audio và persistence có evidence.
- Không có `PENDING` bị ghi thành `PASS` chỉ để đóng workflow.
- Báo cáo re-audit và remediation log đủ để truy ngược finding → change → test → evidence.

## 16. Điểm phê duyệt trước khi bắt đầu implementation

Người dùng cần duyệt riêng:

1. Pha 1: quyết định timebox AI và bốn setup field DSA.
2. Pha 3: AI Agent là pilot cho router/two-view contract.
3. Pha 6: quyền sửa source nội dung chuyên môn.
4. Danh sách file add/delete nếu implementation cần tách JS/CSS; mặc định không xóa file.

Cho tới khi bốn điểm trên được xử lý theo dependency, workflow này chỉ là kế hoạch update và không tự cấp quyền sửa ứng dụng.
