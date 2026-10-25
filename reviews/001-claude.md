# Review 001: Claude

- Date: 2026-10-25
- Reviewed: branch `build/001`, commit `5b9b559` ("build: phase 1, spine")
- Read: BRIEF.md, prompts/PHASES.md, prompts/001-spine.md, content/story.md, BUILDLOG.md, and all four files in `site/`
- How: read every file; compared the site's text to `content/story.md` with a script; opened the page in a real browser (Chromium) at laptop (1366×768), projector (1920×1080) and phone (390×844) sizes; presented the whole talk with the keyboard, forward and back; checked color contrast numerically.

## Verdict

A strong, honest first pass. The text is exactly David's, the page is genuinely restrained, and present mode works end to end with the keyboard. One real layout bug needs fixing before phase 2: the spine lines wrap far too short, which is most visible on a projector. Two small keyboard fixes as well.

## Rubric

1. **Thesis:** Yes. The spine alone carries the arc: the pile → 150 students → the real cost → build → why → others → small → update → three ways in → your turn.
2. **Voice:** Yes. All 13 chapters match `content/story.md` word for word (checked by script). Nothing was added beyond titles, labels and navigation.
3. **Doors and mockups:** Not in this phase. The holding spots are correct for every chapter, with the right phase numbers from `BRIEF.md` section 8a.
4. **Restraint:** Yes. No theme, no effects, no decoration, no marketing language. A quiet page with large words. This is the right direction.
5. **Phone:** Mostly. No horizontal scrolling, and the text reads well. Minor issues are below.
6. **Present mode:** Works. `?present` and `P` both work; arrows, space and Page Up/Down move beat by beat across all 13 chapters and back (20 beats total); holding spots are hidden. Fails on a projector because of the line-length bug (must fix 1).
7. **Accuracy:** No tool steps yet. Not applicable.
8. **Privacy and accessibility:** No student data, no network requests, no console errors. Contrast passes easily: body text 16.4:1, muted text 5.8:1, holding-spot text 5.3:1, links 6.4:1. Skip link, focus outlines, `aria-live` status and reduced-motion handling are all present. One keyboard gap (must fix 2).

## Must fix

1. **Spine lines wrap far too short.** `site/styles.css` sets `max-width: 38ch` on `.spine` (and `34ch` in present mode). `ch` is measured at the `.spine` element's own font size (the 16px body size), not the beats' large size, so the column is only about 300px wide. Result: on a 1920×1080 projector, "Another subscription meant another system to learn." breaks into six lines in the left third of the screen, and on a laptop most beats are squeezed into a narrow strip. Fix: put the measure on `.beat` itself (so `ch` uses the beat's size), for example around 20–24ch, or use `rem`. Then recheck at 1366×768 and 1920×1080 in present mode.
2. **Escape doesn't close the chapter menu in reading mode.** `site/present.js` `onKeyDown` returns early when not in present mode, before the Escape handling. A keyboard user who opens "Chapters" can't close it with Escape. Fix: handle Escape for the menu in both modes. While there, close the menu when clicking outside it.

## Should consider

1. **The cover repeats itself.** Chapter 0 shows "Chapter 0 / Stop Subscribing, Start Building" directly above "Stop subscribing. Start building." Hide the chapter header on the cover.
2. **The top bar shows on the projector.** In present mode the audience sees "Chapters," "Ch 3/12 · Beat 1/2" and "Reading mode (P)." Consider hiding the bar in present mode (it could reappear on mouse movement), or at least making it much quieter. David's call; see questions.
3. **Phone height.** `.chapter` uses `min-height: 100vh`, which on phones includes the area behind the browser's address bar. `100svh` (with `100vh` as a fallback) fits better.
4. **Present mode on a phone** wraps the top bar onto two lines ("Reading mode (P)"). It isn't a real use case, so the simplest fix is a shorter label at narrow widths.
5. **No text without JavaScript.** All content is drawn by script, so if scripts are blocked the page shows only "Chapters" and "Present (P)." A one-line `<noscript>` note would do.
6. **Typeface varies by machine.** The system font stack looks different on the presenting laptop (Windows: Segoe UI; Mac: San Francisco). That's acceptable under the brief, but if the look matters on the day, one web font would make it consistent. Optional.

## Questions for David

1. **Beats that might want a pause.** Some spines are written as one quote block, so they appear all at once. The build is correct to the story, but a few may land better split into separate beats, revealed one press at a time:
   - Chapter 5: "Faster. / In my system. / So I could be more present." (three beats?)
   - Chapter 7: "People loved it. / I stopped anyway." (the pause before "I stopped anyway" is the moment)
   - Chapter 0: the title and the subtitle

   If you want any of these split, change it in `content/story.md` first, and the next phase updates `content.js` to match.
2. **Chapter labels on screen.** Each slide shows "Chapter N" and the chapter title above the words. Keep them on the projector, or show only the words while presenting?
3. **The top bar while presenting** (should consider 2): hide it, or keep it visible?

## Suggested next step

A small fix round before phase 2: must fix 1–2, should consider 1, 3, 4 and 5, plus whatever David decides on the questions. Re-review, merge `build/001`, then run phase 2.
