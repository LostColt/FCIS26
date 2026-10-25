# Prompt 001: First build

- **Date:** 2026-10-25
- **Written by:** David (drafted with Claude)
- **For:** Antigravity
- **Goal:** a complete, rough first pass of the whole site, every chapter present, so it can be reviewed.

---

You are building a website from this repository. Before writing any code, read these files in full:

1. `BRIEF.md`: the rules. If anything here conflicts with it, the brief wins.
2. `content/story.md`: the text. Use it as written.
3. `BUILDLOG.md`: what has happened so far.

## Build

Build the site in `/site`, following `BRIEF.md` sections 5 to 8.

1. **All 13 chapters (0–12)** from `content/story.md`, in order, with their spine, "Say" text and doors.
2. **Content separate from layout.** Put all text in one file, `site/content.js`, that the page reads. Someone should be able to revise the talk by editing only that file.
3. **Reading mode** (the default) and **present mode** (`?present` or the `P` key), as described in section 7.
4. **Doors** as `<details>`/`<summary>`. A copy button on every prompt.
5. **A chapter index** reachable from anywhere on the page.
6. **Placeholders stay visible.** Show every `[DAVID: ...]` exactly as written, styled so it's obviously unfinished. Do not fill them in.
7. **Screenshots:** none exist yet. Use clearly labeled empty frames (for example "Screenshot: counseling tracker") with the right aspect ratio.
8. **Photos:** follow the "Photos" rules in `BRIEF.md` section 6. Use only the chapters that suggest one. If you can download from Pexels or Unsplash, save each photo to `site/assets/photos/`, resize it, and record it in `site/assets/photos/CREDITS.md`. If you can't download, leave a labeled empty frame and list your suggested photo URLs in `CREDITS.md` for David to approve.

## Design

Restraint. Read `BRIEF.md` section 6 twice. No theme, no decoration, no marketing language. It should feel like a thoughtful teacher sharing what they learned. When in doubt, take it out.

## Don't

- Rewrite David's text, or add text that isn't in `content/story.md` beyond labels and navigation.
- Add frameworks, build steps, analytics, live apps, API calls or API keys.
- Change `BRIEF.md`, `content/story.md`, or anything in `/prompts` or `/reviews`.

## When you're done

1. Check that `site/index.html` opens directly in a browser, and that it works at phone width and in present mode.
2. Add an entry to the top of `BUILDLOG.md`: the date, "Prompt 001: first build," what you built, and anything you couldn't do or weren't sure about.
3. Commit with the message: `build: prompt 001, first pass of all chapters`.
4. Push to a branch named `build/001` (not `main`), so it can be reviewed first.
