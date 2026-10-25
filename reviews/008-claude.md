# Review 008: Claude, on the five mockups

- Date: 2026-10-25
- Reviewed: branch `mockups`, commits `855d7ae` to `36d398e`
- Read: prompts/008-mockups.md, BUILDLOG.md, and every file in the five mockup folders
- How: checked every file for outside requests, gaps and the required label; opened each mockup in a real browser (Chromium) at 1440×900 and 390×844; tabbed through each with the keyboard; checked the thumbnails.

## Verdict

Strong work, and exactly what the open brief was for. Each tool has its own character and feels like something a teacher actually built: the 30-second pre-meeting prep card, the 152-tile caseload map, the reader's sentence-and-word highlighting, the three-stage tool that turns into a proctored kiosk, the prose-to-Courier screenplay table. All five work offline with no outside requests, no console errors and no sideways scrolling on a phone; each has the honest label, a reset, a link back and a 1600×1000 thumbnail. Nothing was changed outside the mockup folders.

Five things need fixing before merging, mostly about honesty: a couple of places put words in David's mouth or describe his real tools in ways he never did.

## Must fix

1. **An invented quote attributed to David.** `locked-browser/index.html` line 142 and `locked-browser/locked.js` line 69 put a quotation in David's voice ("Supporting 30 Chromebooks, OS updates, edge-case lockouts, and proctor logs…") that he never said. Use his actual words instead: “People loved it. But I wasn’t trying to ship a product. I was trying to build smaller things. What it would mean to build something like that, to support it and maintain it, was too much at the time.”
2. **Invented facts about David's real tools.** The one-line notes say how the real tools worked, which David never described:
   - `counseling-tracker/index.html` line 21: "changes persisted in browser storage across the school year"
   - `dashboard/index.html` line 21: "read live rows from a local spreadsheet export"
   - `audio-reader/index.html` line 21: "parsed multi-page PDF uploads directly"
   - `screenplay/index.html` line 21: "used an AI model to adapt David's prose"

   Keep each note to what the mockup itself does or fakes (for example "Runs on invented data in your browser; reloading starts fresh"). The brief's own wording caused part of this: it said the real screenplay tool used AI, which David hasn't confirmed either.
3. **A real person's name.** "Maya Lin" (counseling tracker, three places) is a well-known real person. Every name must be clearly invented; rename her and keep the rest of her story.
4. **David written as a character, in first person.** The screenplay mockup's "natural writing" is presented as David's own notebook ("I reached across the desk…"), and the script casts "DAVID (30s)" opposite a 17-year-old student. That's invented personal writing in his name. Either label the passages clearly as invented examples and use a fictional coach, or leave a slot for a real paragraph from David (`ASSETS.md` already lists this as optional).
5. **Three links back go to the wrong slide.** The counseling tracker, dashboard and screenplay link to `../../index.html#14`, which is "Do I have to pay anymore?". "What I built" is slide `#15`. (Audio reader `#19` and locked browser `#22` are correct.)

## Should consider

1. **File size.** Several files are well over the "about 400 lines" rule in `prompts/PHASES.md` (`tracker.css` 791, `dashboard.css` 620, `locked.css` 612, `reader.css` 606). They work, so this only matters for future edits; split them if there's another round.
2. **Invented timeline.** The locked browser labels its stages "Sept / Nov / Jan." Fine as mock detail, but David didn't give those months; drop them or keep them clearly fictional.
3. **Density on the dashboard.** It's impressive, but there's a lot on one screen for a room seeing it for a few seconds. One fewer panel would make the main point (every student visible at once) land faster.

## What I would not change

The design choices themselves. Each mockup made confident, specific decisions without being told to, which is what David asked for. The fixes above are about honesty and accuracy, not taste.

## Questions for David

1. Did the real screenplay tool use AI to convert your writing? If not, the mockup's note (and the deck's line about it) should change.
2. Do you want to give one paragraph of your own writing for the screenplay mockup, or keep invented examples labeled as such?
