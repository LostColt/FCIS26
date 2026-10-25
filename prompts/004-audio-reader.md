# Prompt 004: Audio reader (phase 4 of 6)

- **Date:** 2026-10-25
- **Written by:** David (drafted with Claude)
- **For:** Antigravity
- **Runs after:** phase 3 is reviewed and merged into `main`.
- **Goal:** the audio reader mockup. This one genuinely works.

---

Read first, in full: `BRIEF.md` (sections 7, 8 and 8a), `prompts/PHASES.md`, chapter 6 of `content/story.md`, `BUILDLOG.md`, and the shared files in `site/demos/shared/`.

This is **phase 4 only.**

## Why this tool exists (from David)

I built a PDF reader. You could upload a document or paste text and it would read it to you. It wasn't for me. It was for a student who was better with audio than with reading. Not even my student; a friend's student. That's when I learned building can also mean building for others.

## Steps (finish and save each one before the next)

1. **Layout.** Replace the stub at `site/demos/audio-reader/index.html`, using the shared styles, banner and reset button.
2. **Text in.** A large text box to paste into, a button to load a plain `.txt` file, and two short sample texts to try (invented: a paragraph of a mock student essay from `mock-data.js` and a short invented reading passage).
3. **Read aloud** with the browser's built-in speech (`speechSynthesis`). No network, no API, no key.
   - Play, pause, resume, stop
   - Speed: 0.75×, 1×, 1.25×, 1.5×
   - Voice picker from the voices the browser offers
4. **Follow along.** Highlight the sentence being read, and scroll it into view (respect `prefers-reduced-motion`).
5. **Honest notes.** One line: "The real tool also reads PDFs. This mockup reads pasted text and .txt files." If the browser has no speech support, say so plainly instead of failing silently.
6. **Accessibility first.** This is a tool for a learner, so it has to be the most accessible page on the site: large controls, keyboard shortcuts (space to play or pause), clear focus, readable at 200% zoom.
7. A link back to chapter 6.
8. **Check it:** read both samples, paste your own text, load a .txt file, change speed and voice mid-way, pause and resume, at phone width and with the keyboard only.

## Rules

Everything in `prompts/PHASES.md` applies. No PDF library, no external scripts.

## Before you commit

Log it in `BUILDLOG.md` with every file and its line count. Commit with `build: phase 4, audio reader` and push to branch `build/004`.
