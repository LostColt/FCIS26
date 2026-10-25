# ChatGPT review 001 — Phase 1 spine

**Date:** 2026-10-25  
**Reviewer:** ChatGPT (independent review alongside Claude)  
**Branch reviewed:** `build/001`  
**Files read:** `BRIEF.md`, `content/story.md`, `prompts/PHASES.md`, `prompts/001-spine.md`, `site/index.html`, `site/content.js`, `site/styles.css`, `site/present.js`, `BUILDLOG.md`.  
**Scope:** Source inspection only. No live browser, mobile device, screen reader, or end-to-end testing performed.

## Overall assessment

Phase 1 is a sensible, restrained foundation. The 13 chapters are present, content lives separately from layout, the table of contents exists, reading and presentation modes are implemented, and the styling largely respects the brief. Keep the phase-based approach; do not use this review to accelerate unrelated phases.

**Recommendation: revise and retest Phase 1 before merging.** The items below are specific, modest changes, not a redesign. David makes the final decision.

## Required before Phase 1 is considered reviewed

1. **Preserve keyboard focus rather than unconditionally blurring it.** `site/present.js` → `updatePresentView()` currently calls `document.activeElement.blur()` on every presentation update. This can strand keyboard and assistive-technology users after activating a button or chapter link. Remove the forced blur and use a deliberate focus strategy where needed (e.g. focus a chapter heading or section with appropriate `tabindex`, taking care not to disrupt routine slide advances). Test chapter-index navigation, mode toggle, and keyboard-only navigation.

2. **Make the presentation’s initial/next beat semantics match the source.** The phase prompt says each separate quoted spine block is a beat. `site/content.js` represents the cover byline as an additional beat, though it is metadata outside the quote in `content/story.md`. Treat the byline as metadata rather than requiring another keyboard advance, or explicitly record David’s decision if its reveal is intentional. Compare every chapter’s beat boundaries with `story.md` and avoid silently reinterpreting them.

3. **Record actual verification evidence.** `BUILDLOG.md` says everything was tested and completed, but lists no observed results. Perform a browser test with `site/index.html` opened directly (the no-build requirement), including: start/end of presentation; forward/back across chapter boundaries; `?present`; switching back to reading; TOC clicks; phone-width layout; keyboard tab/focus; reduced motion. Record pass/fail and any limitations honestly. Do not claim a screen reader or mobile-device test unless performed.

## Recommended usability improvements (do not block the larger project by themselves)

4. **Investigate reserved space for unrevealed beats.** `site/styles.css` uses `visibility:hidden` for later beats, which leaves their layout space in place. That may create confusing vertical gaps on projected screens, especially with multiple large beats. Check the actual visual behavior before changing it. A height-stable reveal can be intentional, but it should be a conscious design decision.

5. **Keep the speaking experience and reading experience distinct.** The current separation is promising: large sparse spine during presentation, complete material later. When Phase 2 adds `Say` and doors, ensure chapter anchors and reading navigation still work, and present mode doesn't accidentally expose long paragraphs or interactive content. Test transitions rather than assuming the Phase 1 implementation generalizes.

6. **Check heading semantics and responsive overflow.** Inspect chapter titles, the large beat text, the menu at narrow widths, and zoomed text at 200%. Do not add decoration to solve spacing problems. Favor clear reading and reliable keyboard use over effects.

## For the future phases — proposals, not implementation instructions yet

A. **Workshop fallback for first-time builders (Chapter 11).** The 15-minute exercise (pick 2 / build 9 / swap 4) is ambitious for novices. Offer one optional prewritten starter prompt or sample tool that participants can revise instead of building from a blank screen. Keep the same 15-minute structure.

B. **Show a genuine before/after revision (Chapters 4 or 8).** In addition to the finished mockups, show one small tool before and after a change, with the actual prompt or request that changed it. This demonstrates the central claim—software can adapt to the teacher—more clearly than an additional polished demo. Use mock data only and do not invent a historical prompt.

C. **Clarify the line between a personal tool and maintained software (Chapters 7 and 10).** Use the locked-browser story to ask: who maintains the tool, what happens when it breaks, does it require credentials or student data, and what stays in the approved school systems? This distinction supports the existing `Build tools, not products` message without turning the session into a compliance lecture.

D. **Reverify the 'three ways in' walkthrough shortly before presenting.** Product interfaces, account eligibility, sharing policies and hosting terms can change. In particular, qualify claims about privacy, Google Workspace access, deployment and free-plan suitability. Avoid implying that school data stays entirely within one environment merely because a Google Sheet is the starting point; configurations and external services matter.

E. **Make the finished resource self-sufficient for attendees.** The QR-linked reading experience should tell a teacher what to do without David in the room. Ensure prompt copy buttons, links, and demo doors all work on a phone. Clearly distinguish coded mockups from connected live applications.

## What I would not change

- Do not introduce a JavaScript framework, backend, analytics, accounts, or real student data.
- Do not rewrite David’s speaking voice or introduce a flashy visual theme.
- Do not build future-phase mockups during Phase 1 remediation.
- Do not merge directly to `main` without David’s decision.
- Do not turn every suggestion into a requirement; protect the 55-minute session and the project’s restrained scope.

## Handoff to Claude and Antigravity

**Claude:** Please assess the three required items against the brief and the exact source files. Challenge or refine the recommendations where you disagree, especially the focus strategy and cover-byline treatment. Keep David’s voice intact.

**Antigravity (only once David authorizes another implementation round):** Apply the accepted Phase 1 fixes on the designated build branch, run the verification checklist, document the outcomes in `BUILDLOG.md`, and return the changed-file list. Do not start Phase 2 on your own.

**David:** The most useful decision is whether Phase 1 should be fixed and rehearsed now or whether some nonblocking refinements can wait. No change in direction is recommended.
