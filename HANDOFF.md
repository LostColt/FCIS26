# Handoff: Stop Subscribing, Start Building

**Read this first.** It's the front door for any assistant (Claude, ChatGPT, Antigravity/Gemini) picking up this project. It says how David works, what the deck is today, where everything lives, and what's still open. Last updated 2026-11-03 by Claude (slides 21–28 polished at laptop size; slide 17 description corrected).

---

## 1. What this is

- A 55-minute FCIS professional development session by **David Tran** (AI Learning and Teaching Specialist, Gulliver Prep, Miami, FL), built as a website he presents from and attendees keep.
- The thesis: the real cost of a subscription isn't only money, it's adaptation, for teachers and students. Building your own small tools gives you speed, ownership and the freedom to keep changing them, and that time becomes presence with students.
- **Repo:** GitHub `LostColt/FCIS26` (private). **Live site:** fcis2026.vercel.app (Vercel, Root Directory `site`). **`main` is the live site.**
- Plain HTML, CSS and JavaScript. No framework, no build step. Open `site/index.html` through a local server to test.

## 2. How David works (read carefully)

- **He reviews slide by slide, in batches.** He names a slide number and says what he feels. Slide numbers are the deck's current order (see section 3), and they shift after cuts. Confirm which slide he means if unsure.
- **"Take no action," "just talk," "thoughts?" mean talk only.** Give your view, explain why, and recommend one option. Do not edit files until he says "build," "do it," "move forward," or similar.
- **He decides.** Offer options with reasons; don't make big calls for him. When you have a gut sense, say it and why.
- **When he can't picture something, build variants to compare.** Put them in the deck temporarily as extra slides with a small label ("Option A," "Option B"), let him pick, then make the winner the slide and remove the rest.
- **His voice.** Use his words. Never marketing language ("unlock," "supercharge," "game-changer"), never invented quotes or statistics. If you draft a line in his voice, tell him which words are yours so he can change them.
- **Design: restraint.** Typography carries the deck. Literata (serif) for story, IBM Plex Sans for practical text. Slate ink, blue for links, **red pen only for crossing out, highlighter only for what matters.** No gradients, stock icons, or decorative emoji. One-off visual jokes are fine on a single slide (the resume, the sticky notes), never as a theme.
- **What he likes, learned over many rounds:**
  - Slides that **play by themselves** once he arrives (timed reveals), rather than lots of presses. He often gives exact timings ("wait 2 seconds," "after 10 seconds").
  - **Speaking-size lines**, not huge headlines: "big for the sake of being big" is a complaint.
  - Fewer slides. He cuts anything that doesn't earn its place.
  - Centering a line to make a turn stand out.
  - For the tools: professional, "studio standard," with sample content always present (badged "Sample") and a home page/hub.
- **Shipping.** Claude has been pushing straight to `main` after each approved change because David reviews live. **Other assistants: work on a branch** (Vercel builds a preview link for every branch), and merge to `main` only when David approves or says "push to main." If he says push to main, push to main.
- **Answer his questions directly.** He sometimes asks "is it static or can I type?" style questions; answer plainly first, then fix.

## 3. The deck today: 28 slides

Each line: slide · what it says/does · how it moves. "Auto" means it plays by itself when the slide opens; "press" means the presenter's next press reveals something.

**0 · Stop subscribing, start building**
1. Cover: "Stop subscribing. Start building." Press: red pen strikes "Stop subscribing." (follows each line). QR code on the right, drawn from the site's own address (`js/qr.js`), hidden on phones.
2. `#about` "Who is David Tran?" Auto: five lines (15+ years; taught at Ole Miss, FCIS since 2017; English teacher, director, essay writing coach; AI Learning and Teaching Specialist at Gulliver Prep; BFA in Creative Writing from Bowling Green State University, MFA in Creative Writing from Ole Miss), then places on a timeline (Cleveland, OH → San Diego, CA → Ho Chi Minh, VN → Oxford, MS → Bradenton, FL → Miami, FL), then "A writing teacher first." fades in centered, large italic.

**1 · The shift**
3. "During COVID, we were all asked to be experts." Auto: a teacher's résumé fills itself in ("Every Teacher, 2020–2021 · Your classroom, and everyone's kitchen table"; seven jobs with one-line duties; Software list; "References available upon request."). A joke kept to this slide.
4. Auto: "Then COVID ended." → "The classroom didn't snap back like a rubber band. We still live in the era of tech." → "It wasn't a ~~band-aid~~. It was a **shift**." (centered).
5. Auto: "Supply costs became subscription costs." with Paper, Pencils, Markers; holds 5 seconds; then strikes and highlights, and Per month / Per seat / Per year arrive.
6. `#tally` The subscription tally, centered: tap tools you pay for (12 tools with October 2026 list prices in `js/tally.js`, including Gemini/Google AI Pro), pick teachers at your school, see totals.

**2 · 150 students**
7. Auto: 150 students, 800+ essays, 10–12 meetings a day count up and stay.
8. Auto: the college-counseling story; Notes, Appointments, Revisions, Meeting prep land; after 10 seconds the top fades and "So I looked into apps." comes up along the bottom.

**3 · The real cost**
9. Auto (~9s): browser tabs fill the top until they're slivers; lines: "Another subscription meant another system to learn." → "I'd be working the way the tool wanted, not the way I work." → "The real cost isn't only the money. It's adaptation." → centered "And students pay that cost too." with three cost cards → seven handwritten sticky notes (Caveat font) pile up on the right.

**4 · So I had it build it**
10. "Could I build it?" (big, alone).
11. Auto: "I didn't code. But I knew what I wanted." → "I could write. I could ask. I could imagine it." ("write" highlighted). Code types itself in a panel on the right, looping, only while the slide shows (`js/typing.js`).
12. Auto: "The apps I was already using" (10 cards spread out). Press: "Could I build my own app that combined them?" Notion and Padlet are pulled down from the top row (`js/pull.js`) and Google Sheets joins them.
13. Auto (~10s): "Teachers are used to being the experts in the room. It's hard to sit with being a novice." → Fear. Doubt. Time. Knowledge. struck one by one → "But remember, we're quick studies." (highlighted).
14. `#tracker` "So I built two small things." Two tool cards: Meeting tracker ("For my students"; "It molds to me, not the other way around.") and Script Room screenplay tool ("For me"). Each: picture, Open it, Download the HTML, Copy the code; "Start on top of the version I built."

**5 · Building for others**
15. `#reader` Auto (~6s): "Helping students is what first drew me toward technology." is read aloud on screen, each word highlighted in turn like the reader, "technology" stays marked; the line rises → "I kept looking for different ways to help them learn." → the reader story (a friend's student who found listening easier than reading) → the Reader card. No "learning differences" (David, Nov 2).
16. Auto (~9s): "I have my own shortcomings, too." / "Things I struggle to organize, keep up with, or remember." while five notification cards pile up on the right (Reminders, Mail, Calendar, Notes, Messages; mock text), then they clear → "I build small tools to help me work better, faster, and be more present." → "I'm not trying to ship or sell an app. These are tools for me and people in my orbit."

**6 · Build it** (teaches the shape, not the clicks: tools change, the shape doesn't)
17. `#build` Auto (~9s): no heading. Eight question cards fan in, two columns by four rows ("Where do my students get stuck?" … "What can I simplify?"), then stay; "What is one small thing worth fixing?" sits along the bottom. The questions are Claude's wording and the fuller lists are in `guide.html#questions`.
18. Auto: "Every build has the same shape." Prototype → Store → Host, one line each. "Buttons move. The shape doesn't."
19. `#ways` Auto (1s pause, rows over 2s): "Three ways to do it." Grid: All in ChatGPT / Inside Google Workspace / Own it end to end (AI Studio, GitHub, Vercel), by Prototype, Store, Host; each row has "See the steps" → `guide.html`.
20. `#dashboard` Auto: "A sheet you already keep can become a dashboard." A mini Google Sheet fills in → arrow → Assessment Calendar card.

**7 · Before you build**
21. "Build boldly. Not ~~carelessly~~." For you (four-item checklist: no student data unless the school approved the tool; check the content; name an owner; leave the gradebook and LMS alone) and For your school (a paid, school-managed account lets the school see the data, review it, decide; four questions: who owns the account, where the data lives, who reviews it, how we decide what we keep).

**8 · Your turn** (polished 2026-11-03; David hasn't reviewed it slide by slide yet)
22. Press: "One small tool. Built in Gemini." → "Everyone builds at once. You'll leave with a link that works on your phone."
23. `#gemini` Five steps in Gemini Canvas, share a link. Two plain notes under it: a shared link is a snapshot and public; if Gemini or sharing is blocked, use a personal account or pair with a neighbor (that fallback line is Claude's wording).
24. `#prompts` Four copyable prompts on the slide (flashcards, exit tickets, rubric check, your own idea), fitting one screen. All seven (plus slider simulation, Apps Script from a sheet, change an HTML file) are in `guide.html#prompts`.
25. Swap with a neighbor (four lines, speaking size, serif).
26. Press: "You just did what we ask students to do: try something, get feedback, revise." → "Build first. Then revise."

**9 · Keep building** (not yet reviewed)
27. Press: "Start small. It lives with you." → "One annoyance. One prompt. One colleague…"
28. Everything in one place: four columns (Build, The guide, The tools from the talk, Keep in touch), fits one laptop screen with no scrolling.

Presenter controls: arrows, space, clicker, swipe; **Start over** button (and Home key) returns to the cover; Slides menu; F for full screen. Every slide has a link (`#15`) and some have names (`#reader`).

## 4. Where things live

| File | What it holds |
|---|---|
| `site/index.html` | The shell. Loads the scripts in order: slides-a, steps, slides-b, deck, tally, pull, typing, vendor/qrcode, qr. |
| `site/js/slides-a.js` | Chapters list (`D.chapters`), helpers (`D.add`, `D.tool`, `D.TOOLS`), slides for chapters 0–5. |
| `site/js/steps.js` | Chapter 6 (Build it), plus shared helpers `D.prompt`, `D.promptBox`, `D.ui`, `D.link`. |
| `site/js/slides-b.js` | Chapters 7–9 (Before you build, Your turn, Keep building), including the seven workshop prompts. |
| `site/js/deck.js` | The engine: navigation, swipe, presses, copy buttons, and a `deckstep` event that `pull.js` and `typing.js` listen to. |
| `site/css/layers.css` | Almost all slide styling and timing. New styles are appended in sections; later rules win. |
| `site/demos/*.html` | The four tools, each **one self-contained file** (no libraries, works offline), with a `.png` picture beside it (1440×900 screenshot). |
| `site/guide.html` | "Build it: the guide." Every detailed step, prompt and link; dated; Save as PDF. **When a tool's buttons change, update this page.** |
| `content/story.md` | The record of David's words, chapter by chapter, including cut material marked as removed. |
| `BRIEF.md` | The original source of truth (thesis, rules, review rubric). Its chapter table and tool list are current; some history sections are older. |
| `BUILDLOG.md` | One entry per working session, newest first. |
| `COLLABORATION.md` | A small board where Claude and ChatGPT (or Antigravity) raise material questions for each other. Strict rules: one issue per thread, three messages at most, David decides, nothing gets built from the board alone. Read it at the start of a session. |

**How a slide is made:** `add(chapter, presses, html, { id, scroll, center })`.
- `data-step="n"` on an element hides it until the nth press.
- **Auto-play** (no press): inside `<div class="said auto-run">`, each `<p style="--t:2s">` slides in at its delay. Highlight a word later with `<span class="mark tlate" style="--mt:3s">`. A card arriving later: `<div class="late-card" style="--t:7s">`. Most slides have their own small CSS block in `layers.css` with `transition-delay` values; search for the slide's class name.
- Slides you've passed show their finished state instantly (the `.seen` class), so going back never replays.
- Everything respects reduced motion.

**Chapter numbers are positions in `D.chapters`.** Removing a chapter means renumbering every `add(n, …)` after it, in `slides-a.js`, `steps.js` and `slides-b.js`.

**Tool cards:** `D.tool(key, who, title, line)` reads the file from `D.TOOLS[key]` and shows its picture, Open it, Download the HTML and Copy the code. Copy uses `fetch`, so it needs the site served over http(s), not opened from a file.

## 5. The four tools

All four: one HTML file, sample content clearly invented and badged, saved in the browser, Export/Import backup, no AI, no internet. Each Google setup is optional and lives in a help panel inside the tool, with the Apps Script code embedded in a `<script type="text/plain" id="codegs">` block and copy buttons.

| Tool | File | Google option |
|---|---|---|
| Meeting tracker | `demos/tracker.html` | "Save to Google Sheets": one tab of students, one of meetings. |
| Script Room (film and TV screenplays; home page of scripts; slash menu and Element dropdown; PDF and Google Docs export) | `demos/screenplay.html` | "Save to Google Drive": a Script Room folder, one file per script, syncs both ways (newest wins; deletions carry). |
| Reader (library of texts; read aloud with each word highlighted; remembers where you stopped; display options) | `demos/reader.html` | None. PDFs: copy and paste the text in. |
| Assessment Calendar (department dashboard; flags crunch days) | `demos/dashboard.html` | "Use with Google Sheets": reads the first tab (Date, Grade, Course, Teacher, Type). Paste rows from Sheets; download a CSV to import. |

**The three Google setups were tested against stand-ins, not real Google accounts.** Try each once on a real account before the session.

## 6. Rules that don't bend

1. **Mock data only.** Invented students, invented scripts and texts, labeled. Never real student names, initials, essays or grades, blurred or not.
2. **The network boundary.** The deck and every tool, as served or downloaded, make **no network requests**: no `fetch` or XHR to outside services, no API keys, no analytics, no external scripts or fonts. (The deck's one `fetch`, behind "Copy the code," reads a tool file from the deck's own site. Ordinary outbound links are fine.) **One deliberate exception, which must stay:** when a teacher pastes a tool into *their own* Apps Script project and deploys it, Google serves the page and it saves to *that teacher's own* Sheet or Drive through `google.script.run`. The tools detect this mode themselves; there are no URLs, keys or tokens in the files. Don't remove this mode, and don't add any other connection. Fonts live in `site/assets/fonts/` (Literata, IBM Plex Sans, Caveat; SIL OFL). The QR library is vendored in `site/js/vendor/`.
3. **Student data.** "Mock data only" governs what the deck and the samples show. Once a teacher uses a tool, what they enter is theirs and their school's policy governs it; the Google help panels say so.
4. **The tools stay single files** that work offline when downloaded.
5. **Check every change** at laptop size (1440×900 or David's 1836×848) and phone size (390×844), with no console errors and nothing running off the side. Serve `site/` locally (`python3 -m http.server` inside `site/`) to test.
6. **Accessibility:** keyboard works, focus is visible, reduced motion holds everything still, contrast is readable.
7. **Keep `content/story.md` in step** when words on a slide change.
8. **Log every session** at the top of `BUILDLOG.md`: date · who · what changed · what's next. **Update this file's sections 3 and 7** if the deck or open items change.

## 7. Open items

- **ChatGPT Sites example** for the "All in ChatGPT" row: David may build one and share the link. `D.SITES` in `slides-a.js` is a leftover hook for ChatGPT Sites links; it's empty and nothing shows until a link is set.
- **Slides 22–28 (Your turn, Keep building)** were polished on Nov 3 (laptop sizes only) but haven't had David's slide-by-slide review. Likely next.
- **Workshop time and blocked accounts.** No timer on the Your turn slides (removed Oct 29), and some school accounts block Gemini or sharing. Slide 23 now says to use a personal account or pair up; David may want a time cue as well.
- **Phone layout** is parked on purpose: present on a laptop, or ask people to turn phones sideways. Slide 20's card is cut off on a phone; slide 28 and the prompts were checked at laptop sizes only.
- **Try the three Google setups** (tracker → Sheets, Script Room → Drive, dashboard → Sheets) on a real school account.
- **Recheck `guide.html`** and the Gemini workshop steps the week before the session; these interfaces change often. Update the "Checked" date.
- **Recheck tally prices** (`js/tally.js`) the week before.
- **Vercel's free plan** is for personal, non-commercial use: check it fits a school presentation, or use a school account.
- Optional ideas raised, not decided: page numbers and (MORE)/(CONT'D) in Script Room; motion explainer videos for each build path.

## 8. Gotchas

- The repo was renamed from `fcis26` to `FCIS26`; old remotes still work through GitHub's redirect.
- Mid-slide animations are mostly timing in CSS. If something "doesn't show," check its `transition-delay` and whether the slide has `.is-active`.
- `steps.js` keeps its old filename but now holds chapter 6.
- Earlier coded mockups and the dashboard/locked-browser slides are gone from the deck (still in git history).

## 9. Opening prompt for a new assistant

> You're picking up David Tran's FCIS presentation site in this repo. Read `HANDOFF.md` first, all of it, then `BUILDLOG.md`'s top entry and any open threads in `COLLABORATION.md`. Follow the rules there: talk only when I say "take no action"; use my words; restraint in design; mock data only; no network calls; keep the tools as single files; check laptop and phone sizes; work on a branch unless I say push to main; log what you did in `BUILDLOG.md` and update `HANDOFF.md` sections 3 and 7 when they change. Then tell me in two or three sentences where things stand, and wait for me.
