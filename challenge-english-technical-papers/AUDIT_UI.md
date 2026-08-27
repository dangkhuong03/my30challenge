<!-- Hallmark · pre-emit critique: P5 H5 E4 S5 R5 V4 -->

# Audit UI — English Technical Papers

## Kết luận

`FAIL` — responsive sample không tràn ngang, nhưng trang vẫn ghép roadmap và lesson. Route ngày không tồn tại; Day 1 còn có lỗi sequencing nghiêm trọng: orientation/lesson cho beginner bị ẩn sau assessment gate. Visual “Playful + Editorial” mới chủ yếu nằm ở token/copy, chưa có macrostructure riêng so với DSA.

## Browser matrix

| Kiểm tra | Kết quả |
|---|---|
| Fresh tại 6 viewport | Không horizontal overflow; grid + lesson cùng view; fixed actionbar hiện; 30 buttons, 29 disabled |
| Chọn Day 2, refresh | Hash rỗng; từ “Sentence skeleton” nhảy sang Day 5 “Questions and clarification” |
| Seed Days 1–29 PASS | Day 30 và grid vẫn cùng view; hash rỗng |

Evidence: [`browser-results.json`](../audit-evidence/browser-results.json), [`fresh mobile`](../audit-evidence/english-technical-papers/fresh-375x900.png), [`fresh desktop`](../audit-evidence/english-technical-papers/fresh-1440x900.png), [`route refresh`](../audit-evidence/english-technical-papers/route-refresh-375x900.png), [`Day 30`](../audit-evidence/english-technical-papers/day30-375x900.png).

## Findings

### ENG-UI-001 — Overview và lesson nằm trong cùng một view

- **Tell:** `combined overview/detail canvas`
- **Severity:** `CRITICAL`
- **Status:** `FAIL`
- **Where:** `index.html:19`; browser fresh mọi viewport.
- **Evidence:** Một `learnPanel.workspace` chứa day grid, contract, lesson/exercises/resources và progress form.
- **Impact:** Người mới không có bước chọn ngày rõ; roadmap dày và bài đọc dài nối trên cùng canvas.
- **Fix direction:** Tách Overview 30 ngày khỏi Day Detail; Overview chỉ scan trạng thái/phase.
- **Acceptance:** Fresh route không render lesson dài; click unlocked day mở detail riêng không có full day grid.

### ENG-UI-002 — Không có deep-link và refresh làm mất ngày đang đọc

- **Tell:** `ephemeral selection state`
- **Severity:** `CRITICAL`
- **Status:** `FAIL`
- **Where:** `app.js:130,148-152,231,237`; route-refresh 375×900.
- **Evidence:** Click chỉ đổi `visibleDay`; hash rỗng. Refresh từ Day 2 mở Day 5 theo contiguous PASS state.
- **Impact:** Người học đọc paper dài dễ mất vị trí/ngữ cảnh và không dùng Back/Forward đúng kỳ vọng.
- **Fix direction:** Route Overview/Day Detail qua hash/history và lưu thêm anchor/scroll context hợp lệ.
- **Acceptance:** Refresh/Back/Forward giữ đúng day view; về Overview khôi phục vị trí roadmap.

### ENG-UI-003 — Day 1 khóa orientation phía sau diagnostic

- **Tell:** `gate reverses beginner prerequisite`
- **Severity:** `CRITICAL`
- **Status:** `FAIL`
- **Where:** `index.html:27,30-33`; `LESSONS.md:5-7`.
- **Evidence:** Day 1 là assessment gate và mọi lesson/exercise/resource có `postAssessment: true`; trong khi lesson Day 1 chính là orientation tiếng Việt hướng dẫn cách làm reading diagnostic và cho phép “I do not know”.
- **Impact:** Beginner phải làm assessment trước khi được xem hướng dẫn cần thiết để hiểu assessment, tạo premature/dead-end flow.
- **Fix direction:** Tách orientation khỏi post-assessment content; chỉ khóa feedback/key hoặc bài học thật sự cần attempt trước.
- **Acceptance:** Fresh Day 1 hiển thị orientation trước diagnostic; key/feedback vẫn khóa đúng rule và không lộ đáp án.

### ENG-UI-004 — English và DSA có macrostructure gần như giống hệt

- **Tell:** `default-attractor sameness / stamp lies`
- **Severity:** `CRITICAL`
- **Status:** `FAIL`
- **Where:** `app.css:1`, `index.html:14-33`, `app.js:14-237`; đối chiếu DSA.
- **Evidence:** English stamp ghi `Long Document / playful-editorial`, DSA ghi `Narrative Workflow / modern-minimal`; DOM, CSS và JS gần như cùng template, chỉ thay token/config/copy.
- **Impact:** Playful + Editorial không được thể hiện bằng reading rhythm, margin notes, paper navigation hay scaffold flow; khác biệt thị giác mang tính skin.
- **Fix direction:** Giữ progress engine chung nhưng tạo Overview editorial và Day Detail ưu tiên reading column, vocabulary/chunk margin và speaking checkpoints.
- **Acceptance:** Bỏ brand/màu vẫn nhận ra English qua macrostructure và interaction; stamp mô tả đúng render.

### ENG-UI-005 — Assessment gate dùng side-stripe card

- **Tell:** `side-stripe card`
- **Severity:** `MAJOR`
- **Status:** `FAIL`
- **Where:** `app.css:14` (`.assessment-gate`).
- **Evidence:** Gate là panel nền với border-inline-start 3px, không phải một sequence có prerequisite/attempt/feedback rõ.
- **Impact:** Người mới khó phân biệt hướng dẫn, cảnh báo và gate; decoration không giải thích bước tiếp theo.
- **Fix direction:** Biểu diễn gate như editorial checkpoint có thứ tự, trạng thái và action bằng text/structure.
- **Acceptance:** Gate nói rõ “đọc orientation → attempt → nộp evidence → mở feedback”; bỏ stripe làm tín hiệu chính.

### ENG-UI-006 — Hero và fixed actionbar làm loãng nhiệm vụ overview

- **Tell:** `oversized prelude + contextless fixed action`
- **Severity:** `MAJOR`
- **Status:** `FAIL`
- **Where:** `index.html:17,23`; fresh 320×800/375×900.
- **Evidence:** Intro/readout/tabs chiếm phần lớn first viewport; fixed “Ngày tiếp theo” đã xuất hiện trước khi vào một Day Detail.
- **Impact:** Roadmap không phải focal point của overview và action bar dễ che/đánh lạc hướng khi đọc dài.
- **Fix direction:** Compact overview header; chỉ mount day navigation trong detail và giữ safe-area padding.
- **Acceptance:** 320×800 thấy progress + hàng ngày đầu tiên ngay; overview không có next bar; detail không bị bar che footer/form.

### ENG-UI-007 — Locked days không có giải thích truy cập được

- **Tell:** `silent disabled control`
- **Severity:** `MAJOR`
- **Status:** `FAIL`
- **Where:** `app.js:148-152`; fresh state có 29 disabled buttons.
- **Evidence:** Button disabled chỉ có aria-label chứa status, không có focusable reason hoặc condition.
- **Impact:** Người dùng keyboard/screen reader khó biết cách mở ngày tiếp theo.
- **Fix direction:** Cho day item công bố trạng thái và unlock condition độc lập với disabled action.
- **Acceptance:** Lock reason đọc/nhìn được; ngày vẫn không mở nếu chưa PASS prerequisite.

## Verified/Pending gates

| Gate | Status | Evidence |
|---|---|---|
| Không horizontal overflow tại 6 viewport | `PASS` | Browser matrix |
| Fixed bar không cắt cuối trang trong sample | `PASS` (sampled) | `app.css:5-6,21`; screenshots |
| Audio play/pause | `PENDING` | Chưa chạy full audio interaction |
| Keyboard/reduced motion/long evidence | `PENDING` | Chưa đủ controlled-state evidence |
| Export/import/localStorage failure | `PENDING` | Chưa kiểm đủ trong browser run này |

