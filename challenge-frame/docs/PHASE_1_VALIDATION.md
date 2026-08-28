# Phase 1 Frame Validation

**Status:** Ready for user review at Gate 1  
**Date:** 2026-08-28  
**Scope:** Frame implementation only; no Phase 2 lesson content

## Result Summary

The reusable frame passed the local static, responsive, interaction, keyboard, state, and visual checks listed below. This report does not grant Gate 1 approval; user approval remains required before Phase 2 may begin.

## Artifacts Under Test

- `challenge-frame/index.html`
- `challenge-frame/tokens.css`
- `challenge-frame/styles/frame.css`
- `challenge-frame/scripts/frame.js`
- `challenge-frame/data/frame-demo-data.js`
- `challenge-frame/docs/CHALLENGE_FRAME_SPEC.md`

The source learning specification, `ENGLISH_30_DAY_CHALLENGE_SPEC.md`, was treated as read-only and was not changed.

## Validation Matrix

| Area | Result | Evidence |
|---|---|---|
| JavaScript syntax | PASS | `node --check` passed for the data and frame scripts. |
| Required regions | PASS | Learn, Resources, Practice, Mission, Evidence, Feedback, and Progress exist at every tested viewport. |
| Challenge identity binding | PASS | Full title, compact title, duration mark, browser title, and accessible home label render from the challenge configuration. |
| Lesson section binding | PASS | Eight configured sections render in configuration order with synchronized labels, titles, descriptions, and local navigation. |
| Daily-session structure | PASS | Retrieval, Supported Listening, Phrase and Form, Practical Task Practice, Mission, Evidence, and Feedback/Retry have explicit frame slots. |
| Thirty-day structure | PASS | All 30 chronological day controls render in the persistent rail at tablet and desktop widths and in the mobile day dialog. |
| Day navigation | PASS | Resume opens Day 2; Next moves to Day 3; Today returns to Day 2. |
| UI states | PASS | Normal, loading, empty resources, evidence error, and completed states were exercised. |
| Evidence validation | PASS | Empty evidence submission sets `aria-invalid` and exposes a recovery message. |
| Mobile day dialog | PASS | The dialog fits the viewport and receives focus when opened. |
| Keyboard entry | PASS | The first Tab target is the skip link and its focus indicator is visible. |
| Touch targets | PASS | No visible interactive target below 44 by 44 CSS pixels was found. Checkbox and file-input labels provide the effective target area. |
| Horizontal overflow | PASS | Document scroll width equals viewport width at every tested size; no clipped controls were found. |
| Section navigation overflow | PASS | The local navigator scrolls internally, exposes a keyboard-accessible direction control, and reaches Feedback/Retry at every tested width. |
| Vertical reachability | PASS | The end of the document is reachable at every tested size. Side rails use bounded internal scrolling where required. |
| Runtime errors | PASS | No page exceptions or console errors were recorded. |
| WCAG contrast sample | PASS | All high-risk semantic color pairs passed their applicable 4.5:1 text or 3:1 focus threshold. |
| Hallmark slop audit | PASS | All 58 gates were reviewed; no open gate remains. |

## Responsive Test Sizes

Local Chrome headless validation used exact CSS-pixel viewports:

- 320 by 900;
- 375 by 900;
- 414 by 900;
- 768 by 900;
- 1280 by 900;
- 1280 by 800 for the standard laptop-fold check.

At 320, 375, and 414 pixels, the frame uses a single content column, a modal day map, an internally scrollable lesson-section navigator, and a fixed bottom day pager. At 768 pixels it uses the day rail plus lesson workspace. At 1280 pixels it uses the three-region workbench with day map, lesson workspace, and progress panel.

The post-audit regression pass also confirmed at every size that:

- the rendered challenge title matches `challenge.title`;
- the compact brand matches `challenge.shortTitle`;
- the accessible home label matches the configured challenge title;
- section order matches the `sections` array exactly;
- local navigation includes Feedback/Retry and reaches its target;
- every configured description is bound to its matching section;
- no visible interactive target is smaller than 44 by 44 CSS pixels;
- no runtime exception occurs.

## Contrast Measurements

Measured WCAG 2.1 ratios in Chrome:

| Pair | Ratio | Required |
|---|---:|---:|
| Ink / paper | 17.06:1 | 4.5:1 |
| Soft ink / paper | 11.17:1 | 4.5:1 |
| Muted ink / paper | 7.03:1 | 4.5:1 |
| Ink / raised paper | 17.61:1 | 4.5:1 |
| Soft ink / soft paper | 10.20:1 | 4.5:1 |
| Accent ink / accent | 5.65:1 | 4.5:1 |
| Focus / paper | 8.64:1 | 3:1 |
| Error / error surface | 5.86:1 | 4.5:1 |
| Success / success surface | 6.79:1 | 4.5:1 |

## Known Boundaries

- The prototype stores progress and evidence only in memory. Refreshing the page resets the demonstration.
- Resource rows are placeholders and intentionally contain no production links.
- Google Fonts are an optional network enhancement; declared fallback fonts keep the frame usable offline.
- The in-app browser control could not initialize because its runtime metadata did not provide the required sandbox policy. Browser checks therefore used an installed local Chrome headless instance. This is a tool-runtime limitation, not a PASS for in-app browser execution.
- Production persistence, uploads, privacy rules, final unlock behavior, and final content validation belong to later approved phases.

## Gate Decision

**Implementation status: READY FOR USER REVIEW.**

Phase 2 must remain unstarted until the user explicitly confirms `PASS PHASE 1`.
