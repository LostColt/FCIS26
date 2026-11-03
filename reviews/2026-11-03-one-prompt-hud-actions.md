# Review · Slides 19–20: one prompt and portable HUD
November 3, 2026

## Requested
- Make slide 19 **one continuous user prompt**, revealed in three sections; do not invent Gemini responses or separate messages.
- Explain the three sections in the neighboring column; keep the full workflow on the companion resource page.
- On the interactive HUD slide, show useful fallback actions to copy the actual code, download it, or open the app. Remove the "How the build works" slide link.

## Implementation
- Slide 19 still has two presenter-controlled internal reveals: initial description; swipe adds the request that Gemini elaborate a technical prompt; swipe adds the instruction to use that expanded prompt in Canvas. The next swipe advances to slide 20.
- Canvas displays SELECTED before the single user message. The single uninterrupted bubble has paragraphs with stage reveal classes and a changing right-side explanation. There are no fabricated Gemini replies, fake send buttons, or invented build statuses.
- Slide 20 links to `demos/jarvis-hud.html` for Open app and Download HTML, and uses `js/hud-actions.js` to fetch and copy the actual same-origin HTML source with failure feedback.
- Instructions, troubleshooting, full one-piece copyable prompt, and existing demo distinction are in `site/guide.html#gemini`. The guide's presentation link now opens slide 19 rather than the removed `#ways` reference.
- No slide numbering change; 28 slides.

## Checks
- All modified and existing slide/engine/action JavaScript parses.
- Slide declarations execute to 28 entries. Slide 19 contains exactly one user-message container and exactly one each `data-step=1` and `data-step=2`.
- Canvas badge is before the user prompt. There are no model reply bubbles.
- Three synchronized explanations have matching CSS stage selectors.
- Slide 20 includes Copy code, Download HTML, Open app. It no longer includes the explanation link.
- The functional copy action uses the checked-in HTML file, not a synthetic code excerpt; the HTML download href and standalone link use that same file.
- The index loads the copy handler and removes the obsolete chat scroller.

## Limitations
A full browser screenshot review of all three stages at presentation/projector dimensions and a physical clipboard/download click-through test were not possible in this source-level pass. Verify actual browser clipboard permission and download behavior; if clipboard access is blocked the UI directs attendees to Download HTML. The example HUD remains existing user-supplied material, not a promise of Gemini's response to this exact prompt.
