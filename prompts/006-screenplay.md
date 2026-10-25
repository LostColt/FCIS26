# Prompt 006: Screenplay tool (phase 6 of 6)

- **Date:** 2026-10-25
- **Written by:** David (drafted with Claude)
- **For:** Antigravity
- **Runs after:** phase 5 is reviewed and merged into `main`.
- **Goal:** the screenplay tool mockup.

---

Read first, in full: `BRIEF.md` (sections 7, 8 and 8a), `prompts/PHASES.md`, chapter 4 of `content/story.md`, `BUILDLOG.md`, and the shared files in `site/demos/shared/`.

This is **phase 6 only.**

## Why this tool exists (from David)

I built a tool that turned my natural writing into screenplay writing.

## Steps (finish and save each one before the next)

1. **Layout.** Replace the stub at `site/demos/screenplay/index.html`, using the shared styles, banner and reset button. Two panes side by side on a laptop, stacked on a phone: **Prose** and **Screenplay**.
2. **Three samples.** Three short prose passages (one paragraph each), each with a matching screenplay version written out in full, ahead of time. Write them as plain, invented scenes, with nothing about real people. Store them in `site/demos/screenplay/samples.js`. Leave this comment at the top: `[DAVID: optional — replace a sample with a paragraph of your own writing and its screenplay version]`.
3. **Convert.** Choosing a sample shows its prose; pressing "Convert" reveals the screenplay version. A short line-by-line reveal is fine; skip it under `prefers-reduced-motion`.
4. **Screenplay format.** Standard layout in a monospace font: scene heading, action, character name, parenthetical, dialogue, transition, each styled correctly.
5. **Show how it maps.** A toggle that highlights which sentence of prose became which part of the screenplay (scene heading, action, dialogue), with labels, not color alone.
6. **Honest note,** always visible: "The real tool uses AI to convert any writing. This mockup shows pre-written examples, so it never calls an AI."
7. A link back to chapter 4.
8. **Check it:** try all three samples, convert, toggle the mapping, reset, at phone width and with the keyboard only.

## Rules

Everything in `prompts/PHASES.md` applies. No AI calls, no network.

## Before you commit

Log it in `BUILDLOG.md` with every file and its line count. Commit with `build: phase 6, screenplay tool` and push to branch `build/006`.
