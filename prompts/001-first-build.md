# Prompt 001: The main site (phase 1 of 6)

- **Date:** 2026-10-25
- **Written by:** David (drafted with Claude)
- **For:** Antigravity
- **Goal:** the complete main site, every chapter present, with stub pages where the mockups will go.

---

You are building a website from this repository. Before writing any code, read these files in full:

1. `BRIEF.md`: the rules. If anything here conflicts with it, the brief wins.
2. `prompts/PHASES.md`: how the build is split up, and the rules for every phase. Follow them exactly.
3. `content/story.md`: the text. Use it as written.
4. `BUILDLOG.md`: what has happened so far.

This is **phase 1 only.** Don't build any mockups yet; phases 2–6 do that.

## Steps (finish and save each one before the next)

1. **Content file.** Create `site/content.js` holding every chapter from `content/story.md` (spine beats, "Say" text, doors, photo notes). Nothing else.
2. **Page structure.** Create `site/index.html` and `site/styles.css`: all 13 chapters (0–12) in order, read from `content.js`, plus the chapter index.
3. **Doors.** `<details>`/`<summary>` doors, with a working copy button on every prompt.
4. **Modes.** Reading mode (the default) and present mode (`?present` or `P`), as described in `BRIEF.md` section 7. Put this script in its own file, `site/present.js`.
5. **Mockup stubs.** For each mockup in `BRIEF.md` section 8a, create `site/demos/<name>/index.html` as a short, plain page: the mockup's name, "This mockup is built in phase N," and a link back to its chapter. Link each door to its stub. Later phases replace these stubs.
6. **Screenshots.** Only two remain (see `ASSETS.md`): use clearly labeled empty frames with the right aspect ratio.
7. **Photos.** Follow the "Photos" rules in `BRIEF.md` section 6. If you can download from Pexels or Unsplash, save each photo to `site/assets/photos/`, resize it, and record it in `site/assets/photos/CREDITS.md`. If you can't, leave a labeled empty frame and list suggested photo URLs in `CREDITS.md` for David to approve.

## Rules

- **Placeholders stay visible.** Show every `[DAVID: ...]` exactly as written, styled so it's obviously unfinished. Don't fill them in.
- **Design is restraint.** Read `BRIEF.md` section 6 twice. No theme, no decoration, no marketing language. When in doubt, take it out.
- Don't rewrite David's text or add text beyond labels and navigation.
- Don't add frameworks, build steps, analytics, network API calls or keys.
- Don't change `BRIEF.md`, `content/story.md`, or anything in `/prompts` or `/reviews`.

## Before you commit

Follow `prompts/PHASES.md` rules 5–7:
- Open `site/index.html` directly in a browser. Check reading mode, present mode, every door, every copy button, the chapter index and every stub link, at laptop and phone width, and with the keyboard only.
- Log it in `BUILDLOG.md`, with every file and its line count.
- Commit with `build: phase 1, main site` and push to branch `build/001`.
