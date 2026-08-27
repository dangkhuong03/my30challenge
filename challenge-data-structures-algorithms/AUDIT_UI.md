<!-- Hallmark · pre-emit critique: P5 H5 E4 S5 R5 V4 -->

# Audit UI — Data Structures & Algorithms

## Kết luận

`FAIL` — app không tràn ngang trong browser sample, nhưng không có hai màn hình Overview/Day Detail và không thực thi setup gate của chính challenge. Macrostructure gần như trùng English app dù stamp tuyên bố một layout khác; DSA chưa có execution/trace/code hierarchy riêng.

## Browser matrix

| Kiểm tra | Kết quả |
|---|---|
| Fresh tại 6 viewport | Không horizontal overflow; grid + lesson cùng view; fixed actionbar hiện; 30 buttons, 29 disabled |
| Chọn Day 2, refresh | Hash rỗng; từ “Hiểu RAM…” nhảy sang Day 5 “Hiểu Hash Implementation” |
| Seed Days 1–29 PASS | Day 30 và grid vẫn cùng view; hash rỗng |

Evidence: [`browser-results.json`](../audit-evidence/browser-results.json), [`fresh mobile`](../audit-evidence/data-structures-algorithms/fresh-375x900.png), [`fresh desktop`](../audit-evidence/data-structures-algorithms/fresh-1440x900.png), [`route refresh`](../audit-evidence/data-structures-algorithms/route-refresh-375x900.png), [`Day 30`](../audit-evidence/data-structures-algorithms/day30-375x900.png).

## Findings

### DSA-UI-001 — Overview và lesson bị ghép trong một màn hình

- **Tell:** `combined overview/detail canvas`
- **Severity:** `CRITICAL`
- **Status:** `FAIL`
- **Where:** `index.html:17`; browser fresh mọi viewport.
- **Evidence:** Cùng `learnPanel.workspace` chứa day grid, contract, daily sources, audio và evidence form.
- **Impact:** Không có transition chọn ngày → học ngày; roadmap và execution flow tranh hierarchy.
- **Fix direction:** Tách Overview và Day Detail thành hai route/view độc lập.
- **Acceptance:** Overview không render lesson/form; click unlocked day mở detail không lặp full day grid.

### DSA-UI-002 — Route ngày không tồn tại và refresh làm mất context

- **Tell:** `ephemeral selection state`
- **Severity:** `CRITICAL`
- **Status:** `FAIL`
- **Where:** `app.js:129,147-151,230,236`; browser route-refresh 375×900.
- **Evidence:** `visibleDay` chỉ nằm trong memory; không có `location.hash`/History API. Chọn Day 2 rồi refresh mở Day 5.
- **Impact:** Back/Forward, refresh và deep-link không đáng tin; draft/context ngày có thể bị hiểu sai.
- **Fix direction:** Route state theo `#day/NN`, validate unlock trước render và khôi phục overview position.
- **Acceptance:** Click, refresh, Back và Forward đều giữ đúng view/day; locked deep-link không vượt gate.

### DSA-UI-003 — UI cho bắt đầu Day 1 dù setup gate còn PENDING

- **Tell:** `contract gate omitted from interface`
- **Severity:** `CRITICAL`
- **Status:** `FAIL`
- **Where:** `CHALLENGE.md:3,9,23-27`; `index.html:17`; fresh browser state.
- **Evidence:** Contract cấm bắt đầu trước khi khóa 4 setup fields; fresh UI vẫn mở Day 1 lesson/assessment và form progress, trong khi không có setup gate UI.
- **Impact:** Evidence có thể được tạo với language/source/session/timebox chưa xác định, làm assessment không nhất quán.
- **Fix direction:** Đặt setup view trước Overview/Day 1 và persist bốn field theo authority.
- **Acceptance:** Day 1 bị chặn đến khi bốn field hợp lệ; sau refresh setup vẫn giữ và có thể audit/export.

### DSA-UI-004 — DSA và English là cùng template đổi nhãn/token

- **Tell:** `default-attractor sameness / stamp lies`
- **Severity:** `CRITICAL`
- **Status:** `FAIL`
- **Where:** `app.css:1`, `index.html:14-31`, `app.js:14-236`; đối chiếu cùng file của English.
- **Evidence:** DSA stamp ghi `Narrative Workflow`, English ghi `Long Document`, nhưng DOM, event flow và gần như toàn bộ CSS/app JS giống nhau; khác biệt chủ yếu là config, token và copy.
- **Impact:** DSA không ưu tiên code, trace, invariant và complexity như visual language riêng; ba challenge có nguy cơ trông như template đổi màu.
- **Fix direction:** Sau khi tách hai view, thiết kế Day Detail DSA quanh execution trace/code/test/complexity, giữ logic progress chung ở tầng dữ liệu.
- **Acceptance:** Blind comparison nhận ra macrostructure DSA từ bố cục/chức năng chứ không cần brand/màu; stamp khớp render thực.

### DSA-UI-005 — Assessment gate dùng side-stripe card rập khuôn

- **Tell:** `side-stripe card`
- **Severity:** `MAJOR`
- **Status:** `FAIL`
- **Where:** `app.css:14` (`.assessment-gate`).
- **Evidence:** Gate được biểu diễn bằng panel nền và border-inline-start 3px, một Hallmark tell đã nêu đích danh; nó không diễn đạt execution sequence hoặc locked state theo ngôn ngữ DSA.
- **Impact:** Trạng thái quan trọng bị biến thành decoration quen thuộc, khó phân biệt với note/callout.
- **Fix direction:** Dùng explicit gate step/status trong execution flow, không dựa vào stripe để tạo hierarchy.
- **Acceptance:** Gate có tên bước, prerequisite, trạng thái và action rõ; bỏ side-stripe decoration.

### DSA-UI-006 — Fixed actionbar tồn tại trên overview và locked day không có lý do

- **Tell:** `contextless fixed action + silent disabled control`
- **Severity:** `MAJOR`
- **Status:** `FAIL`
- **Where:** `index.html:21`; `app.css:21`; `app.js:147-151`.
- **Evidence:** Fresh page có next-day bar dù chưa vào detail; 29 ngày disabled không có focusable unlock explanation.
- **Impact:** Người học thấy action không đúng context và không biết vì sao roadmap bị khóa.
- **Fix direction:** Chuyển actionbar vào detail; overview thể hiện lock reason trong day item/status legend.
- **Acceptance:** Overview không có next actionbar; locked item công bố điều kiện mở nhưng không thể truy cập lesson.

## Verified/Pending gates

| Gate | Status | Evidence |
|---|---|---|
| Không horizontal overflow tại 6 viewport | `PASS` | Browser matrix |
| Body padding tránh fixed bar che cuối trang | `PASS` (sampled) | `app.css:5-6,21`; screenshots |
| Keyboard, long code/table, long evidence | `PENDING` | Chưa chạy đủ controlled state |
| Export/import/localStorage error | `PENDING` | Chưa chạy đủ interaction matrix |

