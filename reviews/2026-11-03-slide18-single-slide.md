# FCIS26 — slide 18 single-stage rebuild
Date: November 3, 2026.

## Scope
Consolidated the prior slides 18 and 19 into **one animated slide 18**. Slides 1–17 and all subsequent content remain unchanged; former slide 20 is now slide 19. Full deck: 30 slides.

## Composition and energy
- The architecture first appears as open editorial headings rather than bordered boxes. Serif headings, counters, vertical rules, and angular rule endpoints echo the deck's earlier graphic language.
- Hold the framework for roughly three seconds; then the SAME headings move upward within one slide. No separate slide transition is involved.
- Gemini appears as linked, angular cut-corner modules. ChatGPT Sites appears as one integrated ribbon spanning all three functions. Advanced tools show four smaller sources converging into distinct GitHub and Vercel destinations.
- Three rows arrive sequentially and end with emphasis on Gemini Canvas, leading into the next slide's natural-language demo.
- Timing is automatic, rather than dependent on multiple clicker presses. Changing slides pauses/reset sequence via the slide-active CSS scope. Reduced-motion preference presents the completed end-state directly.
- Project-storage terminology remains qualified: Google Sites draft is the saved/published project path; Firebase or another store may be needed for runtime data, while GitHub stores code and Vercel hosts.

## Technical audit
- All slides compile through actual JavaScript declaration order. 30 slide definitions.
- Slides 1–17 unchanged from main, as verified by matching the `site/js/slides-a.js` content.
- Slide 18 contains 3 headings, 3 Gemini modules, 3 integrated ChatGPT functions and 2 advanced destination modules.
- Former slide 19 removed; slide 19 is now `#gemini-idea`.
- JavaScript syntax passed; stage keyframes and reduced-motion fallback exist.
- Updated `HANDOFF.md`, `content/story.md`, `BRIEF.md`, `BUILDLOG.md`.

## Remaining
The final animation needs a visual look at 1836×848 and 1440×900 in the presentation browser. No pixel-level screenshot or physical clicker rehearsal was possible in this pass. The original visual system has many overlapping historical CSS rules; this implementation isolates new styles beneath `.anatomy-scene` and is designed for the standard laptop aspect ratio. Fine-tuning typography/spacing should follow David's direct visual reaction.
