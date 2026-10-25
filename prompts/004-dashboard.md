# Prompt 004: Dashboard (phase 4 of 7)

- **Date:** 2026-10-25
- **Written by:** David (drafted with Claude)
- **For:** Antigravity
- **Runs after:** phase 3 is reviewed and merged into `main`.
- **Goal:** the dashboard mockup.

---

Read first, in full: `BRIEF.md` (sections 7, 8 and 8a), `prompts/PHASES.md`, chapter 4 of `content/story.md`, `BUILDLOG.md`, and the shared files from phase 3: `site/demos/shared/mock-data.js`, `demo.css` and `demo.js`.

This is **phase 4 only.** Don't change the shared files unless something is missing; if you must, add to them and note it in the log.

## Why this tool exists (from David)

I had it build me a dashboard so I could track things.

## Steps (finish and save each one before the next)

1. **Layout.** Replace the holding spot at `site/demos/dashboard/index.html`, using the shared styles, banner and reset button.
2. **Numbers at the top:** total students, meetings today, drafts in "Final review," essays submitted.
3. **Status chart:** how many students are at each status, as a plain SVG bar chart with labels on the bars (not color alone).
4. **Who needs attention:** students with no meeting in the last 14 days of the mock calendar, and students whose deadline is "Early" but who aren't yet in "Final review."
5. **Upcoming deadlines:** a simple table, sorted by date.
6. **Filter:** by essay type (all / personal statement / supplemental). Everything on the page updates.
7. **Links:** each student name opens that student in the counseling tracker (`../counseling-tracker/?student=<id>`); add that small URL handling to the tracker if it isn't there. A link back to chapter 4.
8. **Check it:** use the filter, follow three student links, reset, at phone width and with the keyboard only.

## Rules

Everything in `prompts/PHASES.md` applies. Charts are hand-drawn SVG; no chart libraries. Numbers must come from `mock-data.js`, never typed in by hand.

## Before you commit

Log it in `BUILDLOG.md` with every file and its line count. Commit with `build: phase 4, dashboard` and push to branch `build/004`.
