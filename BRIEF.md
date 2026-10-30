# Brief: Stop Subscribing, Start Building

This is the source of truth for the site. Antigravity builds from it. Claude and ChatGPT review against it. David decides.

If anything in a prompt or a review contradicts this brief, the brief wins until David changes it.

---

## 1. What this is

A website built as a swipeable slide deck (typography only, no photos) that does two jobs:

1. **David presents from it** at an FCIS professional development session (55 minutes).
2. **Attendees keep it.** They open it from a QR code during the session and come back to it afterward.

The session is part talk, part workshop, part pedagogy.

- **The talk** is David's story: why he started building his own tools instead of subscribing.
- **The workshop** is the room building one small tool.
- **The pedagogy** is woven through the whole thing, not a separate section: what building teaches us about how we teach and how students receive information.

## 2. The audience

Mixed: classroom teachers with any level of comfort, tech and innovation leads, and possibly administrators. Assume many have never built anything.

## 3. The thesis

> The real cost of a subscription isn't only money. It's adaptation, for teachers and for students. Building your own tools gives you speed, ownership and consistency, and the freedom to keep changing them. That time becomes presence with students.

Supporting ideas, in David's own words where possible:

- After COVID, the classroom didn't snap back like a rubber band. We stayed electronic. Supply costs became subscription costs.
- Every new app means learning someone else's system and adapting to it. Students pay that cost too: yet another login.
- Building is really about building a workflow: repetition in how I work, and in how students receive information.
- With a subscription, you adapt to the tool. When you build, the tool adapts to you. It lives with you.
- Build small on purpose. You're building tools, not products.
- Teachers' resources go stagnant because they took so long to make. When building is fast, revising is fast. If we are edtech, we need to update our software too.
- Building can also mean building for others.
- "Do you brush your teeth while you eat chocolate? No. You eat, then brush." Build first, then revise.

## 4. The story structure

The full text is in `content/story.md`. Use that text; do not rewrite David's voice.

| # | Chapter | Minutes | Practical or interactive slides |
|---|---|---|---|
| 0 | Stop Subscribing, Start Building | 1 | QR code to the site |
| 1 | The shift | 3 | No |
| 2 | 150 students | 3 | No |
| 3 | The real cost | 3 | No |
| 4 | So I had it build it | 6 | Yes: links to two of David's tools |
| 5 | Why I kept building | 3 | No |
| 6 | Building for others | 3 | Yes: link to the reader |
| 7 | Update your software | 3 | No |
| 8 | Three ways in | 8 | Yes: three walkthroughs |
| 9 | Before you build | 3 | Yes: checklist |
| 10 | Your turn | 16 | Yes: build in Gemini Canvas from seven ready prompts, share a link |
| 11 | Keep building | 3 | Yes: every link in one place |
| | **Total** | **55** | |

## 5. How the deck works

- **Slides, not scrolling.** Each chapter is a short run of slides: the big line, then the story in David's words, then any interactive or practical slide. 38 slides and 63 presses as of 2026-10-29.
- **Moving through it:** swipe on a phone; arrow keys, space or a clicker on a laptop; a "Slides" menu jumps to any chapter; F is full screen. Every slide has its own link (`#15` is slide 15).
- **Lines arrive one press at a time** where the pause matters ("People loved it." … "I stopped anyway.").
- **A second layer moves underneath:** a red-pen strike and highlighter draw themselves, the pile drops in, 150 counts up, and a huge faint chapter word drifts behind every slide at its own pace.
- **Practical slides** (the tally, the instructions, the prompts, the links) scroll inside the slide on a phone, so nothing is crammed.
- **Chapter 8 teaches the build** with a getting-started slide (accounts and words), then a flowchart and an instructions slide for each of the three paths: Google AI Studio → GitHub → Vercel, ChatGPT Sites, and Google Sheets canvas with Apps Script as the fallback. They live in `site/js/steps.js`.

An attendee should be able to follow every practical slide without David in the room.

## 6. Design principles: restraint

David's words: personal, not performative. No fancy themes.

Do:
- Clean, readable type with generous space. One typeface for reading is enough; a second only for code and prompts.
- A light, quiet page. One accent color at most, used for links and doors.
- Real tools, shown plainly: links to David's tools, flowcharts and step-by-step instructions.
- Write like a teacher talking to colleagues.

Do not:
- Themes, metaphors or decoration as structure (no "release notes," "field notes," notebooks, planners).
- Gradients, glowing effects, floating shapes, stock icons, emoji as decoration.
- Marketing language: "unlock," "supercharge," "revolutionize," "the power of AI," "game-changer."
- Scroll-jacking or animations that make the reader wait.
- Invented statistics, quotes or testimonials.

The test: if David read the page aloud, would it sound like him?

### Type and color

No images. Typography carries the deck: Literata (a book serif) for the story, IBM Plex Sans for practical text. The colors come from a teacher's desk: slate ink, blue-pen links, red pen only for crossing out, highlighter only for what matters. Both fonts are stored in the repo (`site/assets/fonts/`, SIL Open Font License), so the deck works offline. A third, Caveat (handwriting, same license, stored the same way), is used only for the sticky notes on the real-cost slide.

## 7. Technical rules

- Plain HTML, CSS and JavaScript. No framework, no build step. It opens by double-clicking `site/index.html` and is hosted on Vercel with Root Directory set to `site`.
- Everything the site needs lives in `/site`: `index.html`, `css/`, `js/`, and `assets/fonts/`.
- **The words live in two files:** `site/js/slides-a.js` (chapters 0–6) and `site/js/slides-b.js` (7–11). `content/story.md` is the record of David's words; when the story changes, change it there and in the slide files in the same round.
- `site/js/deck.js` runs the deck; `qr.js` draws the cover's QR code from the deck's own address, using `js/vendor/qrcode.js` (MIT, stored in the repo, no network); `tally.js` runs the chapter 1 tally.
- Every prompt has a working copy button.
- Accessible: text contrast at least 4.5:1, visible focus states, works with a keyboard alone, slides off screen can't be tabbed into, and everything holds still under `prefers-reduced-motion`.
- **No network API calls, no API keys, no analytics, no trackers, no external scripts or fonts.** David's real tools are never connected; they appear as clickable mockups (section 8a). Built-in browser features that need no network or key, such as speech synthesis, are fine. Ordinary links to other sites are fine.
- Demo videos are linked, not embedded, until David decides where they're hosted.

## 8. Privacy

- **All student information is mock data.** Every screenshot, example and walkthrough uses invented students: made-up names, appointments, notes, essays and grades. Never real student data, and never real data that's been blurred or cropped. If a tool only exists with real data in it, load it with mock data before taking the screenshot.
- Mock names should be clearly fictional and varied (for example "Student A," or plain invented first names). Never use a real student's name, initials or essay topic.
- Any screenshot or mockup showing mock student data carries a small label: "Mock data."
- David's real tools are never connected to the site. They appear as links to versions built with mock data (section 8a).

## 8a. David's tools

**Built here, as single files teachers can take (since 2026-10-30).** Each tool is one self-contained HTML file in `site/demos/` (with a `.png` picture beside it), no libraries, no internet, sample students clearly invented. On slide 14 each gets Open it, Download the HTML and Copy the code. Set its file in `D.TOOLS` at the top of `site/js/slides-a.js`.

- **Meeting tracker** (`demos/tracker.html`): today's meetings, a prep card from last time's notes and next steps, notes for this meeting, draft stages, add students and meetings. Saves in the browser; Export/Import a backup; a "Save to Google Sheets" help panel gives the steps and the Code.gs, and the same file saves to the Sheet when pasted into Apps Script.
- **Screenplay tool** (`demos/screenplay.html`, "Script Room"): opens on a home page of all your scripts (new, open, duplicate, delete, export and import a backup); film or TV; type / at the start of a line for scene heading, action, character, dialogue, parenthetical, transition (and act break in TV); an Element menu in the toolbar shows and changes the current line (as in Final Draft); Enter moves to the next sensible type, Tab cycles; standard screenplay format (Courier 12pt, 1.5in left margin); autosaves in the browser, or, once set up through its "Save to Google Drive" help panel (Code.gs included), to a Script Room folder in the teacher's Drive with changes pulled and pushed both ways (newest wins; deletions carry across); Save as PDF (print) and Download for Google Docs (.doc that Drive converts). No AI.

A ChatGPT Sites example will also be built for the Ship it fast path.

### Earlier: links to ChatGPT Sites

The coded mockups were taken down on 2026-10-29 (they're in git history). David is building his tools in ChatGPT Sites and will share the links.

- **Where the links go:** `D.SITES` at the top of `site/js/slides-a.js`. Paste each link between the quotes. Until a link is there, its slide shows a dashed holding spot. Once it's there, the slide shows an "Open it" button and the link also appears on "Everything in one place."
- **Mock data only** on anything shown in the talk. Invented students, clearly fictional.

| Tool | Key in `D.SITES` | Slide name (`index.html#name`) |
|---|---|---|
| Counseling tracker | `tracker` | `#tracker` |
| Screenplay tool (slash commands for scene, action, character, dialogue; no AI) | `screenplay` | `#tracker` (same slide) |
| Reader | `reader` | `#reader` |

## 9. Review rubric

Every review in `/reviews` answers these:

1. **Thesis:** does this serve the thesis in section 3?
2. **Voice:** does it sound like David, not like marketing or an AI?
3. **Practical slides:** can an attendee follow every practical slide, and every set of instructions, without David?
4. **Restraint:** is anything decorative, performative or "AI slop"?
5. **Phone:** does it work at phone width?
6. **Presenting:** can David present from it with only a keyboard or clicker?
7. **Accuracy:** are the tool steps correct today?
8. **Privacy and accessibility:** anything that breaks section 7 or 8?

## 10. Out of scope (for now)

- Any login, database or form.
- Making the repo public. It stays private until David decides.

## 11. Open questions for David

These are not decided. Builders should leave placeholders, not guess.

- Does the talk say outright that David still pays for an AI tool, and that the shift is from many single-purpose subscriptions to one general tool? (Suggested in conversation; David hasn't confirmed.)
- Will the final chapter show this repo (the prompts, reviews and build log) as a door? That would require making it public or sharing a copy.
- Which demo videos exist, and where are they hosted?
- Vercel's free plan is meant for personal, non-commercial use. Check whether that fits a school presentation, or whether the school has its own account.
- The tool steps in chapter 8 were checked on 2026-10-25. Recheck them the week before the session; these interfaces change often.
