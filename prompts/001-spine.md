# Prompt 001: The spine (phase 1 of 7)

- **Date:** 2026-10-25
- **Written by:** David (drafted with Claude)
- **For:** Antigravity
- **Goal:** the presentation itself. Every chapter's spine, presentable from start to finish, with labeled holding spots for everything that comes later.

---

You are building a website from this repository. Before writing any code, read these files in full:

1. `BRIEF.md`: the rules. If anything here conflicts with it, the brief wins.
2. `prompts/PHASES.md`: how the build is split up, and the rules for every phase. Follow them exactly.
3. `content/story.md`: the text. In this phase you use only the chapter titles and the **Spine** of each chapter.
4. `BUILDLOG.md`: what has happened so far.

This is **phase 1 only.** Build the spine and nothing else. No "Say" text, no doors, no photos, no screenshots, no mockups. Those come in later phases.

## Why the spine comes first

David wants to see, rehearse and adjust the talk itself before anything gets added around it. If the spine works on its own, the rest can be layered in. The look you set here is the look of the whole site, so take the most care with it.

## Steps (finish and save each one before the next)

1. **Content file.** Create `site/content.js` with, for each of the 13 chapters (0–12): its number, its title, and its spine beats (each quote block in the spine is one beat), copied exactly from `content/story.md`. Also record, per chapter, which holding spots it needs (see step 4). Nothing else.
2. **Page.** Create `site/index.html` and `site/styles.css`. All 13 chapters in order, read from `content.js`, scrolling vertically, each at least one screen tall on a laptop.
3. **Modes.** In its own file, `site/present.js`:
   - **Reading mode** (the default): phone first, normal scrolling, a small chapter index reachable from anywhere.
   - **Present mode** (`?present` in the URL, or press `P`): large type, holding spots hidden. Arrow keys and space reveal the next beat, then move to the next chapter; the left arrow goes back. `P` returns to reading mode.
4. **Holding spots.** In reading mode only, each chapter shows small, quiet, clearly unfinished labels for what's coming, so David can see the whole shape:
   - "Say: phase 2" for every chapter that has a **Say** section in `story.md`
   - "Door: <name>: phase 2" for every door
   - "Photo: phase 2" where a photo is suggested
   - "Screenshot: <name>: phase 2" for the one screenshot
   - "Mockup: <name>: phase N" for each mockup, using the phase from `BRIEF.md` section 8a
   They take up little space, and are plainly placeholders, not design.
5. **Placeholders stay visible.** Any `[DAVID: ...]` in a spine (chapter 0 has some) shows exactly as written, styled as unfinished.

## Design

Restraint. Read `BRIEF.md` section 6 twice. The spine is mostly large, well-set words on a quiet page. Get the type right: size, line length, spacing, and how a beat appears. No theme, no decoration, no effects. When in doubt, take it out.

## Don't

- Rewrite David's text, or add any text beyond chapter titles, holding-spot labels and navigation.
- Add frameworks, build steps, analytics, network API calls or keys.
- Change `BRIEF.md`, `content/story.md`, or anything in `/prompts` or `/reviews`.

## Before you commit

Follow `prompts/PHASES.md` rules 5–7:
- Open `site/index.html` directly in a browser. Present the whole talk from chapter 0 to 12 with the keyboard only, beat by beat, and back again. Check reading mode and the chapter index at laptop and phone width.
- Log it in `BUILDLOG.md`, with every file and its line count.
- Commit with `build: phase 1, spine` and push to branch `build/001`.
