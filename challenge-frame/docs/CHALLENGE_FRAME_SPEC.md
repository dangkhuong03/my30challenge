# Reusable Challenge Frame Specification

**Status:** Phase 1 review candidate  
**Version:** 1.0  
**Scope:** Content-independent HTML frame for time-boxed learning challenges  

## 1. Purpose

This document defines a reusable interface frame for a structured learning challenge. The current demonstration uses 30 days, but the frame treats duration, title, lesson data, resources, evidence, and completion criteria as configuration rather than fixed UI copy.

The frame and the learning content are separate products:

- the **frame** owns layout, navigation, state presentation, interaction patterns, accessibility, and responsive behavior;
- the **content layer** owns learning goals, lesson text, resources, practice, missions, assessments, evidence requirements, and PASS criteria;
- the **integration layer** maps approved content into frame slots and connects persistence.

## 2. Scope and Non-Goals

### Included in the frame

- application shell;
- responsive desktop and mobile layouts;
- challenge navigation;
- complete day index;
- selected-day workspace;
- lesson section slots;
- resources, practice, mission, evidence, feedback, and progress surfaces;
- day and submission states;
- keyboard-accessible controls;
- an in-memory demonstration of navigation and evidence submission;
- design tokens and reusable UI rules.

### Not included in Phase 1

- final lesson content;
- content research;
- production resource links;
- content-specific assessment logic;
- server upload;
- authentication;
- production persistence;
- final unlock policy;
- changes to the original learning specification.

## 3. File Structure

```text
challenge-frame/
├── index.html
├── tokens.css
├── styles/
│   └── frame.css
├── scripts/
│   └── frame.js
├── data/
│   └── frame-demo-data.js
└── docs/
    ├── CHALLENGE_FRAME_SPEC.md
    └── PHASE_1_VALIDATION.md
```

The prototype uses browser globals rather than ES modules so it can be opened directly from the filesystem or served by a basic static server.

## 4. Layout Architecture

### 4.1 Unified challenge header

The persistent top header is one visual shell with two levels. Its primary row contains:

- challenge identity rendered from `challenge.shortTitle`;
- links to Today, the complete day map, and Progress;
- a mobile “All days” trigger;
- a Resume action that returns to the configured current day.

Its subordinate row contains the generated lesson-section navigation. Both rows must remain inside one bordered and elevated shell. The subordinate row uses a quiet surface and a single dividing rule; it must not appear as a second floating card, pill, or independently sticky header.

The unified header remains available while the learner scrolls. It is deliberately content-sized on larger screens and compact on mobile.

The full `challenge.title` appears in the selected-day header and supplies the browser document title and accessible home label. The duration mark is rendered from `challenge.durationDays`; none of these identity values may be hard-coded in the frame.

### 4.2 Desktop workbench

At wide desktop sizes, the primary layout has three regions:

```text
┌──────────────┬────────────────────────────┬──────────────────┐
│ Day map      │ Selected lesson workspace  │ Progress panel   │
│ sticky       │ document scroll            │ sticky           │
└──────────────┴────────────────────────────┴──────────────────┘
```

- The **day map** provides orientation and direct navigation.
- The **lesson workspace** is the primary reading and action surface.
- The **progress panel** keeps capability and completion evidence visible without interrupting the lesson.

### 4.3 Tablet

At medium widths, the layout becomes two columns:

- day map on the left;
- lesson workspace on the right;
- progress follows the lesson below its primary content.

### 4.4 Mobile

Mobile uses one document column:

- day map moves into a native modal dialog;
- a fixed bottom pager exposes Previous and Next actions;
- the selected day remains visible between pager buttons;
- progress appears in document flow;
- lesson section navigation becomes an internally scrollable horizontal row;
- document-level horizontal scrolling is prohibited.

## 5. Component and Section Inventory

### `app-nav`

Persistent challenge orientation and lesson navigation in one shell. `app-nav__main` owns challenge-level actions; its direct `section-nav-wrap` child owns the subordinate lesson destinations.

Required behaviors:

- Resume selects the configured current day;
- anchor links move to Today, day map, and Progress;
- All days opens the mobile day dialog;
- all controls retain a minimum 44-by-44-pixel touch target.

### `day-rail`

Desktop representation of the complete challenge timeline.

Contains:

- configured map title and day count;
- compact day grid;
- state legend;
- Phase 1 state-preview control.

The state-preview control is a development surface. It should be disabled or removed in production through configuration, not mixed with learner content.

### `day-grid`

Ordered list of every configured day. A day button communicates:

- day number;
- state through text available to assistive technology;
- current selection with `aria-current="step"`;
- locked state with `aria-disabled="true"` and an explanatory title;
- completed state through both color and a check mark.

The visual layout may change by breakpoint, but the DOM order must remain chronological.

### `lesson-hero`

Displays the selected day’s:

- day label;
- estimated time;
- current state;
- lesson title;
- observable objective;
- daily-check count.

It must never invent an outcome. Every value comes from the content or progress layer.

### `section-nav`

Subordinate navigation inside `app-nav`. It remains fixed only because the unified header is fixed; it must not create its own floating or sticky shell. Links are generated from the ordered `sections` configuration, so navigation labels, rendered section order, and available destinations cannot drift apart. The Functional English demonstration exposes:

- Recall;
- Listen;
- Phrases;
- Resources;
- Practice;
- Mission;
- Evidence.
- Retry.

Labels must remain on one line. When the list exceeds the available width, it scrolls horizontally and an adjacent “More steps” control moves keyboard, mouse, and touch users through the hidden destinations.

### `retrieval`

Slot for delayed recall prompts from earlier challenge days. The frame supplies the section structure only; the content layer selects the phrases and delay schedule.

### `listening`

Slot for the supported listening sequence, including the approved audio or model and its transcript. Media controls and transcripts are supplied during content integration.

### `learning-content`

Slot for:

- model or short audio transcript;
- reusable phrases;
- one focused explanation;
- optional preparation notes.

The frame must not assume English-learning-specific field names in its data adapter. Another challenge may place a recipe, code sample, reading passage, or demonstration here.

### `resources`

Ordered resource rows showing:

- resource name;
- source or provider;
- format;
- access note;
- selection reason;
- external link when supplied.

An empty resource state must explain why nothing appears. The frame must not render dead links or fabricated URLs.

### `practice`

Sequence of attempts or exercises. The demonstration uses three support levels, but the frame accepts any ordered list.

Each practice item may include:

- instruction;
- prompt;
- support level;
- response surface;
- feedback;
- completion state.

### `mission-panel`

High-priority action surface containing:

- one observable action;
- required evidence;
- PASS criteria.

The mission is visually distinct because it is the day’s required outcome. Its content remains challenge-specific.

### `evidence-form`

Default evidence surface with:

- visible text-area label;
- note input;
- file-selection control;
- helper or error message;
- save action;
- inline success result.

The frame provides presentation and local interaction only. The integration layer owns file restrictions, upload, persistence, privacy policy, and content-specific evidence validation.

### `feedback-section`

Holds feedback and a retry route. The default frame presents two correction slots, but their labels and number are configurable.

The Retry action returns the learner to Practice. Challenge content determines what must be repeated.

### `progress-panel`

Contains:

- overall completion percentage;
- completed-day count;
- support or independence level;
- latest evidence pointer;
- daily completion checklist;
- concise completion rule.

The frame renders progress. A progress adapter must calculate authoritative values.

### `lesson-pager` and `mobile-pager`

Previous, Today, and Next navigation. Boundary buttons become disabled on the first or last configured day.

The frame may preview a locked day through sequential navigation for UI review, but production navigation must use the challenge’s approved unlock policy.

### `frame-footer`

Single-line frame identity and phase label. This is a restrained closure, not a sitemap.

## 6. Data Contract

The demonstration data is assigned to `window.CHALLENGE_FRAME_DATA` before `frame.js` loads.

```js
{
  challenge: {
    id: "challenge-id",
    title: "Challenge title",
    shortTitle: "Short title",
    description: "Challenge description",
    mapTitle: "Thirty days",
    durationDays: 30,
    currentDay: 2
  },
  navigation: [
    { label: "Today", target: "lesson-workspace" }
  ],
  days: [
    {
      id: "day-01",
      number: 1,
      label: "Day 1",
      state: "completed",
      title: "Lesson title",
      objective: "Observable outcome",
      estimatedMinutes: 35
    }
  ],
  sections: [
    {
      id: "retrieval",
      label: "Recall",
      title: "Retrieval",
      description: "Recall previously learned language before looking at notes."
    }
  ]
}
```

### Required invariants

- Day numbers are unique positive integers.
- Day order is chronological.
- `durationDays` equals the number of supplied day records.
- `currentDay` identifies one supplied day.
- Challenge identity is rendered from `challenge`; the document, visual title, short brand, and accessible label must remain synchronized.
- Section IDs are unique and identify supported frame section renderers.
- The DOM order and local navigation order match the supplied `sections` order.
- Section labels, titles, and descriptions come from `sections`, not duplicated HTML copy.
- Required learner-facing text is supplied by content, not generated by UI code.
- Resource URLs are omitted when no verified link exists.
- Progress values come from the progress adapter, not from lesson copy.

### Lesson-kind extension

The reusable frame supports two content shapes without duplicating the layout:

- `kind: "lesson"` supplies primary and maintenance skills, Recall, Input, Language, Resources, a practice ladder, Mission, Evidence/pass, Feedback/changed retry, daily score, and next retrieval;
- `kind: "assessment"` supplies assessment type, validity conditions, Briefing, component instructions, Evidence, Score, Review/remediation, daily score, and next retrieval.

The same semantic regions are relabelled for an assessment day, and the section navigation is regenerated from the active kind. Challenge-specific component names and completion rules remain configuration/adapter responsibilities rather than fixed frame copy.

## 7. Navigation Model

### Direct day navigation

Selecting an unlocked day:

1. updates selected-day state;
2. rerenders the lesson header;
3. updates `aria-current` in every day map;
4. closes the mobile dialog when open;
5. focuses the lesson heading without an initial scroll jump;
6. announces the selected day and state.

### Locked day navigation

Direct selection of a locked day does not navigate. The frame communicates the lock and retains the current selection.

The actual unlock rule is configurable. Common policies include:

- sequential completion;
- calendar date;
- instructor release;
- unrestricted browsing with completion restrictions.

### Previous and next

- Navigation is bounded by the first and last day.
- Disabled buttons remain visible so the layout does not shift.
- Labels are short and remain on one line.

### Today and Resume

Both return to `challenge.currentDay` and restore the selected-day workspace.

## 8. UI State Model

### Day states

| State | Meaning | Interaction |
|---|---|---|
| `locked` | Learner cannot start under the current unlock policy | Direct selection blocked; explanation available |
| `available` | Learner may open the lesson | Selectable |
| `active` | Configured current or in-progress lesson | Selectable; visually prominent |
| `completed` | Completion criteria were satisfied | Selectable; check mark and status text |

### Content states

| State | Required frame behavior |
|---|---|
| `loading` | Preserve expected geometry with a skeleton; announce loading |
| `ready` | Render supplied content |
| `empty` | Explain what is empty and why; provide a recovery action when one exists |
| `error` | Name the failed action and tell the learner what to do |
| `success` | Show the visible result quietly without a celebratory toast |

### Control states

Interactive components define:

- default;
- hover when hover is available;
- visible keyboard focus;
- active/pressed;
- disabled;
- loading;
- error;
- success.

Focus rings appear immediately and never animate. Border thickness remains stable between states.

## 9. Progress and Evidence Model

### Progress presentation

The frame exposes the following renderable values:

- completed days;
- total days;
- percentage;
- daily checks;
- current support or independence level;
- latest accepted evidence.

The circular indicator is decorative presentation backed by a text percentage and an accessible label.

### Evidence lifecycle

```text
empty → validating → saving → saved
               ↘ error → retry
```

The Phase 1 prototype keeps state in memory. Refreshing the page resets it. A production adapter may use local storage or a remote service only after the persistence behavior is explicitly approved.

The current IELTS integration uses browser `localStorage` for completion metadata only. Normal lessons require their mandatory outcome/evidence/retry checks plus the configured minimum count; assessment days may require every configured component. This is an adapter policy and must not be assumed by another challenge.

### Privacy boundary

The frame must not upload recordings, files, names, or other personal data by default. Integration must identify:

- storage destination;
- retention duration;
- accepted file types and limits;
- user deletion controls;
- consent or policy requirements.

## 10. Responsive Behavior

### Required verification widths

- 320 px;
- 375 px;
- 414 px;
- 768 px;
- desktop baseline at 1280 px or wider.

### Mobile rules

- No document-level horizontal scrolling.
- `html` and `body` use `overflow-x: clip`.
- The two-level header remains one compact visual shell and never overlaps the lesson.
- Complete day navigation moves into a native dialog.
- Bottom day pager remains reachable above safe-area insets.
- Clickable labels do not wrap.
- Touch targets are at least 44 by 44 CSS pixels.
- Lesson content stays in one readable column.

### Tablet rules

- Day map becomes a visible sticky left rail.
- Progress moves below the lesson.
- The content column retains `min-width: 0` to prevent overflow.

### Desktop rules

- The unified header contains challenge-level and lesson-level navigation without a duplicate floating bar.
- Day map and progress are independently sticky.
- The lesson remains the dominant, flexible column.
- Side panels use their own vertical scrolling when viewport height is constrained.
- The maximum canvas width prevents excessively long lines.

## 11. Design Tokens

All reusable visual values are defined in `tokens.css`.

### Token groups

- `--color-*`: surfaces, text, rules, accent, focus, semantic states;
- `--font-*`: display and body families;
- `--space-*`: four-point-derived spacing scale;
- `--text-*`: typography scale;
- `--radius-*`: control and surface radii;
- `--rule-*`: border thickness;
- `--ease-*` and `--dur-*`: motion language;
- `--z-*`: stacking levels;
- layout tokens such as `--page-max`, `--page-gutter`, and `--control-height`.

### Token rules

- Component CSS references named tokens rather than raw color or font values.
- Accent use is restrained and primarily communicates focus, selection, or required action.
- Text and control contrast must remain readable when themes change.
- A new challenge may override semantic tokens but must not bypass component contracts.

## 12. Accessibility Contract

- Semantic landmarks: header, navigation, main, article, aside, sections, and footer.
- One page-level `h1`; heading levels do not skip.
- Skip link targets the lesson workspace.
- Native buttons, form fields, checkboxes, file input, and dialog are used.
- Day navigation is an ordered list.
- Current day selection uses `aria-current="step"`.
- Locked days expose `aria-disabled` and an explanation.
- Status changes use a polite live region.
- Evidence errors use `aria-invalid` and associated helper text.
- Keyboard focus remains visible.
- Dialog closes through Escape, backdrop selection, and an explicit close control.
- Reduced-motion preferences remove spatial motion and preserve functional changes.
- Color is never the only day-state or error-state signal.

## 13. Fixed and Variable Responsibilities

| Frame-owned and fixed | Challenge-owned and variable |
|---|---|
| Responsive application shell | Challenge title and description |
| Day-map component | Number and labels of days |
| Selected-day routing | Unlock policy |
| Supported section renderers | Section order, labels, titles, descriptions, and content |
| Resource-row renderer | Verified resources and selection reasons |
| Practice container | Exercise types and prompts |
| Mission surface | Mission wording and PASS criteria |
| Evidence interaction pattern | Required evidence type and validation |
| Progress surfaces | Metrics and authoritative values |
| Loading, empty, error, and success patterns | Content-specific messages |
| Focus, keyboard, and responsive rules | Optional theme token overrides |

## 14. Reuse for Other Challenges

To reuse the frame:

1. Provide a new challenge configuration.
2. Supply an ordered day or unit list.
3. Map challenge content to the standard slots.
4. Define unlock and completion policies.
5. Define evidence types and validation.
6. Connect an approved persistence adapter.
7. Override semantic tokens only when a different visual identity is required.
8. Run the responsive and accessibility validation matrix.

The frame can support challenges shorter or longer than 30 days. The day grid automatically renders the supplied list, but very long challenges may need grouped navigation or pagination rather than a single compact grid.

## 15. Phase Boundaries

### Phase 1 — Frame

May change layout, components, navigation, states, responsive behavior, tokens, and frame documentation. Uses placeholder content only.

### Phase 2 — Content research and learning design

May create or update the content/data layer. Must not redesign or break the approved frame.

### Phase 3 — Integration and validation

May bind approved content, progress, evidence, and PASS criteria to the approved frame. Must not silently rewrite either approved source.

## 16. Frame Acceptance Criteria

The frame is ready for Gate 1 review when:

1. all 30 demo days render in chronological order;
2. browser, visual, compact, and accessible challenge titles are synchronized from the challenge configuration;
3. configured sections render in the same order as their generated local navigation;
4. direct, previous, today, and next navigation work;
5. locked, available, active, and completed states are distinguishable without color alone;
6. retrieval, listening, learning, resource, practice, mission, evidence, feedback, and progress regions exist;
7. loading, empty, error, and success states can be inspected;
8. evidence validation and retry are keyboard-accessible;
9. no final learning content or unverified resource link is embedded;
10. the content data is separate from UI rendering logic;
11. the original learning specification remains unchanged;
12. mobile and desktop layouts pass overflow, scrolling, keyboard, and visibility checks;
13. the documentation is sufficient to replace the current challenge data without redesigning the frame.
