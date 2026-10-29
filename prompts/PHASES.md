# Build phases

## Round 3: David's slide review (2026-10-29)

David went through the 60-slide deck and wrote a long list of changes. Claude sorted the list into quick fixes and harder work.

**Quick fixes, done on branch `quick-fixes`:**
- Cover: a real QR code, drawn from the site's own address.
- Slide 4: centered.
- Slides 6–7: the story comes first, then 150 students, 800+ essays and 10–12 meetings a day. Notes, appointments, revisions and meeting prep land on their own.
- Slides 8–10: cut to two.
- The build chain: fans out on one press.
- "Could you build:": educator apps arrive like scattered texts.
- The dashboard mockup slide: removed.
- The Build small chapter (the locked browser, "People loved it"): removed.
- The brush-your-teeth slide: removed.
- The checklist: the topic shows first, then the list fades in.

The deck went from 60 slides to 53.

**The harder work was split into five phases.** Later the same day David took the coded mockups down (he's building his tools in ChatGPT Sites) and asked for the rest to be done. Status:

| Phase | What changed | Status |
|---|---|---|
| A | Screenplay mockup with slash commands, plus "Download the HTML" | **Replaced.** Mockups taken down; David builds them in ChatGPT Sites. Holding spots wait for the links (`D.SITES` in `site/js/slides-a.js`). The slash-command spec below is his brief for the screenplay site. |
| B | Faster "building for others" stretch, with his background with students with learning differences | **Done.** Chapter 5 is one slide; chapter 6 is four. David to check the line "I've worked with students with learning differences for a long time." It stays general (no school named). |
| C | Revision example | **Kept.** The story leads into it; one press and the versions play by themselves. Easy to cut later. |
| D | Three ways in | **Done.** 22 slides became 8: Before you start, then a flowchart and a "How to do it" for each path. |
| E | Workshop | **Done.** The timer is gone; the room builds in Gemini Canvas from seven ready prompts (including Apps Script and "change an HTML file") and shares a link. The ending is now "Build first. Then revise." |

The deck is now 38 slides and 63 presses. The plans below are kept as the record of what was asked for.

### A · Screenplay mockup and "take it home"

- **Screenplay tool (`demos/screenplay/`):** rebuild it around a slash-command editor. Type `/` at the start of a line and a small menu offers `scene`, `action`, `character`, `dialogue`, `parenthetical` and `transition`. Choosing one formats that line to screenplay rules: scene headings in caps, character names centered, dialogue indented, transitions flush right. Arrow keys plus Enter pick from the menu, and Tab cycles element types the way screenwriting software does. Remove every reference to AI, plus the prose-to-screenplay conversion. Keep the Courier page, the calm look and the mock-data footer. Keep the three examples, but as starting scripts.
- **Download the HTML:** every mockup still in the deck (tracker, screenplay, reader) gets a quiet "Download the HTML" button, and so does the slide that shows it. The cleanest way is to make each mockup a single `index.html`, with its CSS and JS inline. The button is then just `<a href="demos/<name>/index.html" download="<name>.html">`, and the file teachers get runs on its own when double-clicked. Add one line under the button: "Open it in any browser. Paste it into Gemini or ChatGPT and ask for changes."
- No full-screen request in the talk; the button is the takeaway.

### B · Narrative, slides 16–20

The current stretch has five slides ("Faster. In my system. Present.", the workflow paragraph, "Building for others", the PDF reader story, and the reader mockup). Make it move faster, in David's words:

1. "I was building tools for myself. But more than that, I wanted to build for others."
2. The reader story, short: a friend's student who was better with audio than with reading.
3. His background: years of working with students with learning differences. "Truth be told, it was really working with these students where I began to lean on technology."
4. The turn: "When I'm building, it's easy to look at myself. But as an educator, I'm always looking to the students: what can I build that can help them?"
5. The reader mockup, live.

That's four or five slides with fewer words on each. **Open question:** should slide 3 name where that work happened (for example, directing the Learning Lab at Country Day), or stay general?

### C · The revision example (slide 22)

Right now it jumps straight in. Options:
- **Keep it:** add a one-line lead-in, such as "Here's what revising looks like when a change takes a sentence." On the first press the four versions play by themselves, about a second apart, with the strikethrough and the new words appearing as if someone were typing.
- **Cut it:** slide 21 ("If we are edtech…") and slide 23 ("you adapt to the tool / the tool adapts to you") carry the idea without it.

David decides. If it stays, it's a small job.

### D · Three ways in, slides 24–45

Turn 22 one-step-per-slide slides into a short set that also works as a handout:

1. **Pick the path by the job:** the current comparison, kept as is.
2. **Before you start:** what a teacher needs, in plain words.
   - Accounts: Google (school or personal), GitHub (free) and a paid ChatGPT plan, each only if that path needs it.
   - Words they'll see: *prompt*, *preview*, *repository*, *deploy*, *Apps Script*, *canvas*, each in one line.
   - Links to every site.
3. **Then two slides per path.** Slide one is a flowchart (boxes and arrows in the deck's own type: Describe → Preview → Refine → Save → Publish → Share). Slide two is numbered instructions with links, the copyable prompt and the watch-outs. It scrolls on a phone and prints cleanly.
   - Own it: AI Studio → GitHub → Vercel
   - Ship it fast: ChatGPT Sites
   - Keep it protected: Sheets canvas, with Apps Script as the fallback. Include a short "What is Apps Script?" and its deploy steps (Deploy → New deployment → Web app, Execute as Me, access limited to the school).

That's 8 slides instead of 22. Recheck every step against current documentation in the same round (see the open question in `BRIEF.md` §11).

### E · The workshop, slides 47–53

Replace the timer with a guided build everyone does at once in Google Gemini:

1. **Open Gemini:** gemini.google.com, signed in with a school or personal Google account. Turn on Canvas.
2. **Pick a prompt:** a small menu of ready prompts, each with a copy button. Some build a plain HTML tool (flashcards, an exit-ticket randomizer, a rubric checker). One or two are Apps Script, for a sheet they already keep. A few could be "paste this HTML and change it," starting from the downloadable mockups in phase A.
3. **Watch it build, then ask for one change.**
4. **Publish and share:** Gemini's share link, so everyone opens their own tool on their phone.
5. **Swap:** keep a shorter version, or fold it into step 4 ("open your neighbor's link").
6. **Wrap-up (slides 52–53):** decide whether "Eat, then brush" still lands now that its setup slide is gone. Either bring it back here as the one place it appears, or drop it. "Everything in one place" stays, updated to match phase D.

**Before building:** check Gemini Canvas's current share and publish steps, and whether they work on school Workspace accounts. Ask David for the prompts he wants. **Side note from David:** he may build mockups in ChatGPT Sites and share them with teachers. If so, they become links in step 2 and in "Everything in one place."

---

## History: rounds 1–2

> **Update, 2026-10-25:** after phase 1, David changed direction. Claude rebuilt the presentation as a swipeable deck, now on `main`, which replaces phases 1 and 2. The mockups (phases 3–7) are now one open brief, `prompts/008-mockups.md`, run one mockup at a time. The table below is kept as history; the rules for every phase still apply.

| Phase | Prompt | What gets built | Branch |
|---|---|---|---|
| 1 | `001-spine.md` | **The spine:** every chapter's on-screen beats, reading and present modes, and labeled holding spots for everything else | `build/001` |
| 2 | `002-say-doors-photos.md` | Say text, doors, photos, the screenshot frame, and holding pages for the mockups | `build/002` |
| 3 | `003-counseling-tracker.md` | Shared mock data and styles, then the counseling tracker mockup | `build/003` |
| 4 | `004-dashboard.md` | The dashboard mockup | `build/004` |
| 5 | `005-audio-reader.md` | The audio reader mockup | `build/005` |
| 6 | `006-locked-browser.md` | The note tool → test → locked browser mockup | `build/006` |
| 7 | `007-screenplay.md` | The screenplay tool mockup | `build/007` |

## Rules for every phase (so nothing gets cut off)

1. **Do only this phase.** Don't start the next one, and don't change files that belong to other phases, except where the prompt says so.
2. **Write every file in full.** Never leave `...`, `// rest of code`, `/* same as before */`, `TODO: implement` or any other gap. If you can't finish something, stop and say so in `BUILDLOG.md` instead of leaving a gap.
3. **Keep files small.** No single file over about 400 lines. If one would be longer, split it into smaller files with clear names. (Vendored libraries, such as `site/js/vendor/qrcode.js`, and single-file mockups made downloadable in phase A are the exceptions.)
4. **Build in steps, and save after each step.** Each prompt lists its steps in order. Finish and save one step before starting the next.
5. **Check your own work before committing:** open the page, click through every control listed in the prompt, try it at phone width, and try it with the keyboard only.
6. **Log it.** Add an entry to the top of `BUILDLOG.md` with the date, the phase, what you built, a list of every file you created or changed with its line count, and anything you couldn't do or weren't sure about.
7. **Commit and push to that phase's branch,** never to `main`.
