<!-- Hallmark · pre-emit critique: P5 H5 E4 S5 R5 V4 -->

# Audit tổng hợp — 3 challenge

## Executive verdict

`FAIL` ở cả ba ứng dụng theo workflow mới. Lỗi chung lớn nhất là kiến trúc: cả ba vẫn render roadmap và nội dung ngày trong cùng một view, không có route Overview ↔ Day Detail. Browser test còn chứng minh click ngày không cập nhật URL và refresh làm mất ngày đang xem.

Audit không sửa source, logic hay progress. Evidence browser nằm tại [`audit-evidence/browser-results.json`](audit-evidence/browser-results.json) và 24 screenshot theo challenge/viewport.

## Báo cáo riêng

| Challenge | Content | UI | Kết luận chính |
|---|---|---|---|
| AI Agent System Design | [`AUDIT_CONTENT.md`](challenge-ai-agent-system-design/AUDIT_CONTENT.md) | [`AUDIT_UI.md`](challenge-ai-agent-system-design/AUDIT_UI.md) | Timebox conflict; coverage chưa nối evaluator; không có two-view route |
| Data Structures & Algorithms | [`AUDIT_CONTENT.md`](challenge-data-structures-algorithms/AUDIT_CONTENT.md) | [`AUDIT_UI.md`](challenge-data-structures-algorithms/AUDIT_UI.md) | Lesson under-taught; Graph/DP nén; setup gate không được UI enforce |
| English Technical Papers | [`AUDIT_CONTENT.md`](challenge-english-technical-papers/AUDIT_CONTENT.md) | [`AUDIT_UI.md`](challenge-english-technical-papers/AUDIT_UI.md) | Beginner scaffold mỏng; Day 1 gate đảo prerequisite; macrostructure trùng DSA |

## Findings dùng chung

### CROSS-UI-001 — Ba app chưa có hợp đồng Overview ↔ Day Detail

- **Severity:** `CRITICAL`
- **Status:** `FAIL`
- **Where:** AI `index.html:372-451`; DSA `index.html:17`; English `index.html:19`; browser matrix mọi viewport.
- **Evidence:** Full day grid và full lesson/evidence form cùng tồn tại trong learn view.
- **Impact:** Không đáp ứng architecture đã khóa trong workflow; navigation và lesson hierarchy lẫn nhau.
- **Fix direction:** Chuẩn hóa state machine `overview | day-detail(day)` nhưng giữ macrostructure riêng cho từng môn.
- **Acceptance:** Overview chỉ roadmap/status; click unlocked day mở detail riêng; detail không chứa full grid.

### CROSS-UI-002 — Day selection không có URL state

- **Severity:** `CRITICAL`
- **Status:** `FAIL`
- **Where:** AI `index.html:638,742,952-954`; DSA `app.js:129,151,230`; English `app.js:130,152,231`.
- **Evidence:** Tất cả dùng `visibleDay` runtime; browser chọn Day 2 vẫn hash rỗng và refresh chuyển sang Day 5 khi Days 1–4 PASS.
- **Impact:** Refresh/Back/Forward/deep-link không thể đạt acceptance.
- **Fix direction:** Dùng cùng route contract và guard, không nhất thiết dùng cùng DOM/template.
- **Acceptance:** `#day/02` khôi phục Day 2; Back trả Overview đúng vị trí; locked deep-link bị chặn có lý do.

### CROSS-UI-003 — Overview mang action bar của detail

- **Severity:** `MAJOR`
- **Status:** `FAIL`
- **Where:** AI `index.html:484-488`; DSA `index.html:21`; English `index.html:23`.
- **Evidence:** Fixed next-day bar được mount ở root và hiển thị ngay fresh state.
- **Impact:** Action không đúng context; tạo nguy cơ che nội dung và làm mờ ranh giới hai màn hình.
- **Fix direction:** Chỉ render previous/next bar trong Day Detail.
- **Acceptance:** Overview không có day-detail action; detail bar không che heading/form/footer ở mobile/desktop.

### CROSS-UI-004 — Locked status thiếu reason có thể truy cập

- **Severity:** `MAJOR`
- **Status:** `FAIL`
- **Where:** day-button render của cả ba app; fresh browser có 29 disabled days.
- **Evidence:** Disabled button không có focusable/visible unlock explanation.
- **Impact:** Người học không biết điều kiện mở ngày; keyboard user không thể khám phá reason.
- **Fix direction:** Chuẩn hóa status semantics và accessible lock reason trên Overview.
- **Acceptance:** Mỗi locked item công bố prerequisite; click/keyboard vẫn không vượt gate.

### CROSS-UI-005 — DSA và English là template đổi skin

- **Severity:** `CRITICAL`
- **Status:** `FAIL`
- **Where:** Hai bộ `index.html`, `app.css`, `app.js`; Hallmark stamps ở đầu CSS.
- **Evidence:** DOM/event/CSS gần như trùng nhau dù một app tự nhận Narrative Workflow và một app Long Document/Playful Editorial.
- **Impact:** Không đạt Gate 6 “cùng dễ dùng nhưng không trông như template đổi màu”.
- **Fix direction:** Chỉ dùng chung data/persistence/router contract; tách macrostructure DSA execution và English editorial reading.
- **Acceptance:** Blind comparison không cần brand/màu vẫn phân biệt được nhiệm vụ và cấu trúc của hai app.

## Khác biệt bắt buộc phải giữ

| Challenge | Overview nên ưu tiên | Day Detail nên ưu tiên |
|---|---|---|
| AI Agent | reasoning map, domain coverage, evidence readiness | assumptions, derivation, architecture flow, failure/trade-off |
| DSA | phase/pattern readiness, implementation/retrieval coverage | invariant, hand trace, code/test, complexity, interview explanation |
| English | editorial roadmap, reading/speaking ramp, chunk due state | reading column, Vietnamese scaffold, guided practice, recording/repair |

## Remediation backlog đề xuất — chưa triển khai

1. **Resolve authority blockers:** AI timebox conflict; DSA setup fields; English Day 1 orientation/gate ordering.
2. **Tạo router/state contract dùng chung:** Overview, Day Detail, deep-link, locked guard, Back/Forward, refresh và overview scroll restoration.
3. **Tách render views trong từng app:** không thay source learning content; bảo toàn localStorage/event history/drafts.
4. **Thiết kế macrostructure riêng:** AI reasoning, DSA execution, English editorial; loại bỏ template sameness và side-stripe gate.
5. **Sửa content architecture:** đặt Learn → Practice → Check → Record đúng dependency; không dùng màu để che sequencing.
6. **Sửa chuyên môn sau khi duyệt riêng:** AI worked reasoning/coverage evidence; DSA lesson depth/Graph-DP spacing; English guided feedback/D-2/D-7 ledger.
7. **Re-run acceptance:** đủ viewports, terminal states, Day 30, long content, keyboard, audio, export/import và localStorage failure.

## Verification boundary

| Hạng mục | Status |
|---|---|
| Source → payload byte integrity | `PASS` tĩnh: AI 8/8 + 3/3; DSA 8/8 + 3/3; English 12/12 + 3/3 |
| Browser responsive sample, horizontal overflow | `PASS` tại 6 viewport/challenge |
| Two-view architecture và routing | `FAIL` trên cả 3 |
| Day 2 refresh context | `FAIL` trên cả 3 |
| Day 30 route/detail isolation | `FAIL` trên cả 3 |
| Keyboard-only, audio, long evidence, export/import, storage failure | `PENDING`; không nâng kiểm tra tĩnh thành browser PASS |

## Definition-of-done status

- Sáu báo cáo riêng và một báo cáo tổng hợp: `PASS`.
- Finding có evidence/fix/acceptance: `PASS`.
- Payload/source integrity có ranh giới rõ: `PASS` tĩnh.
- Viewports fresh, route-refresh và Day 30: `PASS` về việc đã chạy; các acceptance tương ứng có `FAIL` nêu trên.
- Toàn bộ interaction/status matrix: `PENDING` cho các mục được liệt kê; audit không tuyên bố hoàn tất browser coverage vượt quá evidence.
- Không sửa source challenge trong pha audit: `PASS` theo phạm vi thay đổi của lượt audit.

