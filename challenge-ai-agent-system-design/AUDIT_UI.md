<!-- Hallmark · pre-emit critique: P5 H5 E4 S5 R5 V4 -->

# Audit UI — AI Agent System Design

## Kết luận

`FAIL` — giao diện responsive không bị tràn ngang ở sáu viewport, nhưng vi phạm kiến trúc bắt buộc Overview ↔ Day Detail. Day selection chỉ đổi biến JS trong cùng canvas; URL, Back/Forward và refresh không giữ ngữ cảnh ngày.

## Browser matrix

| Kiểm tra | Kết quả |
|---|---|
| Fresh: 320×800, 375×900, 414×896, 768×900, 1280×720, 1440×900 | Không horizontal overflow; 30 day buttons; Day 1 mở, 29 ngày khóa |
| Chọn Day 2 sau khi seed Days 1–4 PASS | Title đổi sang Day 2 nhưng hash vẫn rỗng |
| Refresh tại Day 2 | Nhảy sang Day 5; không khôi phục Day 2 |
| Seed Days 1–29 PASS, mở Day 30 | Day 30 render nhưng day grid vẫn cùng view; hash rỗng |

Evidence: [`browser-results.json`](../audit-evidence/browser-results.json), [`fresh mobile`](../audit-evidence/ai-agent-system-design/fresh-375x900.png), [`route refresh`](../audit-evidence/ai-agent-system-design/route-refresh-375x900.png), [`Day 30`](../audit-evidence/ai-agent-system-design/day30-375x900.png).

## Findings

### AI-UI-001 — Overview và lesson nằm trong cùng application view

- **Tell:** `combined overview/detail canvas`
- **Severity:** `CRITICAL`
- **Status:** `FAIL`
- **Where:** `index.html:372-451`; browser fresh ở mọi viewport.
- **Evidence:** Một `learnPanel.workspace` chứa đồng thời `day-rail/dayGrid` và `article.lesson-panel` với contract, lesson, resources, assessment và evidence form.
- **Impact:** Người học không có màn hình tổng quan để quét roadmap rồi chủ động đi vào một ngày; hai nhiệm vụ có hierarchy lẫn nhau.
- **Fix direction:** Tách state/render thành Overview chỉ có roadmap và Day Detail chỉ có nội dung ngày.
- **Acceptance:** Fresh route chỉ render overview; click ngày hợp lệ chuyển sang detail riêng; detail không chứa full day grid.

### AI-UI-002 — Không có URL/deep-link cho ngày đang mở

- **Tell:** `ephemeral selection state`
- **Severity:** `CRITICAL`
- **Status:** `FAIL`
- **Where:** `index.html:638,742,952-954,982`; browser route-refresh 375×900.
- **Evidence:** `visibleDay` chỉ là biến runtime; click gọi `render()` và next tăng biến. Không có hash/history routing. Browser chọn Day 2 có hash rỗng; refresh mở Day 5 theo contiguous progress.
- **Impact:** Refresh và Back/Forward làm mất context; không thể bookmark/chia sẻ hoặc quay về đúng ngày.
- **Fix direction:** Định nghĩa route `overview` và `#day/NN`, đồng bộ selection với History API và guard ngày khóa.
- **Acceptance:** Day 2 tạo URL ngày; refresh/Back/Forward giữ đúng Day 2; deep-link locked day quay overview kèm lý do.

### AI-UI-003 — Fixed next action xuất hiện cả khi đang ở overview

- **Tell:** `contextless fixed action`
- **Severity:** `MAJOR`
- **Status:** `FAIL`
- **Where:** `index.html:484-488`; screenshot fresh mobile/desktop.
- **Evidence:** Action bar luôn thuộc root document, không thuộc Day Detail; fresh page đã hiển thị “Ngày 1 · NOT_STARTED / Ngày tiếp theo”.
- **Impact:** Nó ngụ ý người học đang ở detail dù giao diện đồng thời là overview, làm flow và trạng thái khó hiểu.
- **Fix direction:** Chỉ mount action bar trong Day Detail; overview dùng day cards/status để điều hướng.
- **Acceptance:** Overview không có next-day bar; detail có previous/next đúng unlock rule và không che content.

### AI-UI-004 — Hero trì hoãn roadmap trên màn hình thấp

- **Tell:** `oversized introductory prelude`
- **Severity:** `MAJOR`
- **Status:** `FAIL`
- **Where:** fresh 320×800 và 375×900 screenshots.
- **Evidence:** Phần giới thiệu + tabs chiếm phần lớn first viewport; người học phải cuộn mới quét đủ roadmap dù overview có nhiệm vụ chọn ngày.
- **Impact:** Hành động chính “chọn/học ngày hôm nay” không hiện sớm trên mobile.
- **Fix direction:** Ở Overview mobile, rút intro về compact progress header và ưu tiên roadmap trong first viewport.
- **Acceptance:** Ở 320×800, header, progress và ít nhất hàng ngày đầu tiên đều thấy mà không cuộn; không cắt nội dung.

### AI-UI-005 — Ngày khóa không giải thích điều kiện mở

- **Tell:** `silent disabled control`
- **Severity:** `MAJOR`
- **Status:** `FAIL`
- **Where:** day button render `index.html:732-742`; fresh state có 29 disabled days.
- **Evidence:** Ngày khóa là disabled button; không có focusable description hoặc interaction giải thích unlock condition.
- **Impact:** Người dùng keyboard/mobile chỉ thấy control mờ, không biết cần PASS ngày nào hay cách phục hồi.
- **Fix direction:** Giữ guard nhưng cung cấp status/reason có thể đọc và focus trên overview.
- **Acceptance:** Mỗi locked day công bố lý do và điều kiện mở qua visible text/accessible description; vẫn không mở detail trái rule.

## Verified/Pending gates

| Gate | Status | Evidence |
|---|---|---|
| Không horizontal overflow tại 6 viewport | `PASS` | Browser matrix |
| Fixed bar có body padding chống che footer/content | `PASS` (sampled) | CSS `index.html:17,25`; screenshots |
| Keyboard-only/focus order toàn flow | `PENDING` | Chưa chạy full keyboard matrix |
| Export/import và localStorage failure | `PENDING` | Chưa mô phỏng đủ trong browser run này |

