# Prompt 005: Note tool → test → locked browser (phase 5 of 6)

- **Date:** 2026-10-25
- **Written by:** David (drafted with Claude)
- **For:** Antigravity
- **Runs after:** phase 4 is reviewed and merged into `main`.
- **Goal:** one mockup that shows how the tool grew in three stages.

---

Read first, in full: `BRIEF.md` (sections 7, 8 and 8a), `prompts/PHASES.md`, chapter 7 of `content/story.md`, `BUILDLOG.md`, and the shared files in `site/demos/shared/`.

This is **phase 5 only.**

## Why this tool exists (from David)

I built a tool where students could put in notes. I built it as a classroom first. Then it became ready for taking tests. Then it went into a locked browser, so students couldn't copy and paste or use AI. People loved it. But I wasn't trying to ship a product. I stopped there.

The mockup shows the growth, so an attendee can feel how one small tool kept getting bigger.

## Steps (finish and save each one before the next)

1. **Layout.** Replace the stub at `site/demos/locked-browser/index.html`, using the shared styles, banner and reset button. Three stages as tabs, in order: **1 · Classroom**, **2 · Test**, **3 · Locked**. Each tab has one line explaining what changed from the stage before.
2. **Stage 1, Classroom:** a short invented reading passage and a notes area where a student types notes under headings. Notes stay while switching tabs, and clear on reload.
3. **Stage 2, Test:** the same passage with five invented questions (mix of multiple choice and short answer), a visible timer, and a submit button that shows a simple summary of answers. No grading of short answers.
4. **Stage 3, Locked:** the test from stage 2, plus:
   - Copy, cut, paste and right-click are blocked inside the test, with a short message when someone tries.
   - A "Start test" button asks for full screen.
   - Leaving the tab or window is noticed and logged on screen ("You left the test at 10:42").
5. **Honest note** on stage 3, always visible: "A web page can't truly lock a browser. Real lockdown needs managed devices or dedicated software. This shows the idea."
6. A link back to chapter 7.
7. **Check it:** take notes, switch tabs, take the test, submit, try copy and paste in stage 3, switch away and back, exit full screen, reset, at phone width and with the keyboard only.

## Rules

Everything in `prompts/PHASES.md` applies. Blocking copy and paste must never trap a keyboard user: Tab, Escape and the browser's own controls always work.

## Before you commit

Log it in `BUILDLOG.md` with every file and its line count. Commit with `build: phase 5, locked browser` and push to branch `build/005`.
