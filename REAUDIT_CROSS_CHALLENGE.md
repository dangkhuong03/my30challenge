<!-- Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V5 -->

# Cross-challenge re-audit — Gate 8

## Verdict

`PASS`. Ba ứng dụng cùng giữ navigation/status/persistence contract, nhưng Overview và Day Detail có macrostructure theo đúng loại kỹ năng. Browser matrix tổng đạt `99/99` (`33 AI + 33 DSA + 36 English`) tại sáu viewport.

| Finding | Status | Evidence sau sửa |
|---|---|---|
| `CROSS-UI-001` | `PASS` | Cả ba có `#overview` chỉ để chọn ngày và `#day/NN` chỉ để học ngày; detail không lặp full day grid. |
| `CROSS-UI-002` | `PASS` | Back/Forward, refresh, deep-link hợp lệ/locked và draft preservation chạy trong browser cho cả ba. |
| `CROSS-UI-003` | `PASS` | Action bar ẩn ở Overview và chỉ hiện ở Day Detail. |
| `CROSS-UI-004` | `PASS` | Mỗi locked day có visible `LOCKED`, vẫn focus/click được để đọc reason, nhưng không mở lesson. |
| `CROSS-UI-005` | `PASS` | Blind structural inspection phân biệt được AI reasoning index/workbench, DSA phase catalogue/component playground và English editorial calendar/guided reading desk mà không cần dựa vào accent color. |

## Shared contract đã xác minh

- Status: `LOCKED`, `AVAILABLE`, `IN_PROGRESS`, `PARTIAL`, `BLOCKED`, `SKIPPED`, `PASS` có label bằng text.
- PASS cần Done test, evidence và self-verification; planned work không tự thành PASS.
- Event history append-only; import merge không xóa log; invalid import và storage failure không xóa dữ liệu hiện có.
- Export → clear → import khôi phục đúng event count; reload không duplicate event.
- Route ngày khóa quay Overview có lý do; 29 PASS mở Day 30.
- Không horizontal page overflow ở `320×800`, `375×900`, `414×896`, `768×900`, `1280×720`, `1440×900`.
- Keyboard focus và reduced-motion đạt; English audio Day 6/16/26 play rồi pause được.

## Khác biệt bắt buộc đã giữ

| Challenge | Overview | Day Detail | Evidence trọng tâm |
|---|---|---|---|
| AI Agent | Reasoning map và readiness | System reasoning workbench | assumptions, derivation/flow, boundary, verification |
| DSA | Phase/execution catalogue | RUN NOW → invariant/trace/code/test | implementation, test, complexity, explanation |
| English | Editorial calendar + chunk plan | Reading desk + beginner scaffold | meaning, repair, chunk retrieval, audio/recording |

## Evidence boundary

Gate 8 xác nhận ứng dụng và curriculum architecture, không xác nhận người học đã đạt finish line. AI learner artifacts vẫn `PENDING`, DSA ledger vẫn `UNSEEN`, và English daily evidence vẫn `PENDING` cho tới khi có attempt thực tế.

Browser result authority: `audit-evidence/update/phase7-browser-results.json`; screenshot sets nằm trong `audit-evidence/update/<challenge>/phase7/`.
