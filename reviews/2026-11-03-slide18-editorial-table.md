# Slide 18 editorial table and original highlighter — November 3, 2026

## Objective
David supplied screenshots showing that slide 18's completed state was crowded and inconsistent with slides 1–17. He asked for prominent, consistent shapes at the top, a simple table underneath, and the presentation's *existing* yellow highlight on the Gemini Canvas table entry as the final presenter-controlled action.

## Implementation
- Retained one slide (#18) and the original three terms: Interface, Storage, Hosting.
- Replaced decorative L-rules with three equal clipped-paper-tab headings, matching the editorial/slate/serif language used elsewhere.
- Kept the headings themselves on screen for about three seconds and animated them upward without changing slides.
- Removed the three separate styling systems (blue angular connected cards, rounded Sites ribbon, individual advanced chips) and replaced them with **one 3x3 comparison table** with low-contrast horizontal separators and uniform column alignment.
- Row 1: Gemini Canvas / Google Sites draft / Google Sites.
- Row 2: ChatGPT Sites / managed with the site / ChatGPT Sites.
- Row 3: AI Studio, Claude Code, Codex and Antigravity / GitHub / Vercel.
- Final sentence appears after the rows settle: “Today, we’ll build in Gemini Canvas.”
- Exactly **one NEXT press** triggers the *same* yellow `.mark` sweep already in use elsewhere in the deck, on **Gemini Canvas** inside table row one. The press uses `data-at="1"` and `steps=1` rather than a new highlighter implementation. Next press advances to slide 19.
- Supports reduced-motion by presenting the complete table without animation, still permitting the click-to-highlight.
- No content changes to slides 1–17 or 19 onward.

## Structural QA
- Slide declarations executed: 30 slides total.
- Slide 18 contains exactly three headings, three table rows, one highlighted target, and has exactly one presenter step.
- Actual existing deck engine advances steps before changing slides; verified this is compatible with `data-at="1"`.
- Existing `.mark.on` class and its yellow background sweep were confirmed in `site/css/layers.css`.
- JavaScript syntax passed in all slide and presentation engine files.
- Earlier slides 1–17 sources unchanged.
- Source-of-truth `content/story.md`, `HANDOFF.md` and `BUILDLOG.md` updated.

## Visual QA limitation
Browser screenshot rehearsal and real projector review at 1836x848 or 1440x900 were not carried out in this source-level pass. Review the initial stage, moving headings, final table and highlighted state in the live deck before accepting the typography and pacing as final.
