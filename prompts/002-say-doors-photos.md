# Prompt 002: Say, doors, photos (phase 2 of 7)

- **Date:** 2026-10-25
- **Written by:** David (drafted with Claude)
- **For:** Antigravity
- **Runs after:** phase 1 is reviewed and merged into `main`.
- **Goal:** fill every phase 2 holding spot, so the site works fully for attendees, apart from the mockups.

---

Read first, in full: `BRIEF.md`, `prompts/PHASES.md`, `content/story.md`, `ASSETS.md`, `BUILDLOG.md`, and the phase 1 files in `site/`.

This is **phase 2 only.** Keep the spine, its look and present mode exactly as they are, unless something here requires a change; note any change in the log.

## Steps (finish and save each one before the next)

1. **Say.** Add each chapter's **Say** text from `content/story.md` to `site/content.js`, exactly as written. Show it in reading mode under the spine; hide it in present mode. Replace the "Say" holding spots.
2. **Doors.** Add every door from `content/story.md` to `content.js` and build them as `<details>`/`<summary>`, closed in present mode. Every prompt gets a working copy button. This includes the three walkthroughs in chapter 9, the checklist in chapter 10, the workshop steps in chapter 11, and the links in chapter 12. Replace the "Door" holding spots.
3. **Mockup links.** Inside the doors, each mockup is a link to `site/demos/<name>/`. Create a short holding page at each of those folders: the mockup's name, "This mockup is built in phase N" (from `BRIEF.md` section 8a), and a link back to its chapter. The mockup phases replace these pages.
4. **Screenshot.** The one screenshot in `ASSETS.md` doesn't exist yet: show a labeled empty frame with the right aspect ratio.
5. **Photos.** Follow the "Photos" rules in `BRIEF.md` section 6. If you can download from Pexels or Unsplash, save each photo to `site/assets/photos/`, resize it, and record it in `site/assets/photos/CREDITS.md`. If you can't, leave a labeled empty frame and list suggested photo URLs in `CREDITS.md` for David to approve. Add the credits line to chapter 12.
6. **Clean up.** Every phase 2 holding spot is gone. Mockup holding spots stay until their phase.

## Rules

Everything in `prompts/PHASES.md` applies. Placeholders (`[DAVID: ...]`) stay visible. Don't rewrite David's text.

## Before you commit

- Open `site/index.html` directly. Open every door, use every copy button, follow every link and mockup holding page, at laptop and phone width and with the keyboard only. Present the whole talk once more to confirm present mode still works.
- Log it in `BUILDLOG.md` with every file and its line count.
- Commit with `build: phase 2, say, doors and photos` and push to branch `build/002`.
