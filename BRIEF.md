# Brief: Stop Subscribing, Start Building

This is the source of truth for the site. Antigravity builds from it. Claude and ChatGPT review against it. David decides.

If anything in a prompt or a review contradicts this brief, the brief wins until David changes it.

---

## 1. What this is

A single website that scrolls vertically and does two jobs:

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

| # | Chapter | Minutes | Has a door? |
|---|---|---|---|
| 0 | Stop Subscribing, Start Building | 1 | No |
| 1 | The pile | 3 | No |
| 2 | 150 students | 3 | No |
| 3 | The real cost | 3 | No |
| 4 | So I had it build it | 5 | Yes: screenshots |
| 5 | Why I kept building | 3 | No |
| 6 | Building for someone else | 2 | Yes: screenshot |
| 7 | Build small | 3 | Yes: screenshots |
| 8 | Update your software | 3 | No |
| 9 | Three ways in | 8 | Yes: three walkthroughs |
| 10 | Before you build | 3 | Yes: checklist |
| 11 | Your turn | 15 | Yes: prompt template, steps |
| 12 | Keep building | 3 | Yes: every link in one place |
| | **Total** | **55** | |

## 5. The two layers

- **The spine** is what David scrolls through while presenting: one idea per screen, large type, few words.
- **Say** is David's talking points for each chapter. In reading mode it appears as a short paragraph under the spine, so attendees get the story later. In present mode it's hidden.
- **Doors** sit inside a chapter: walkthroughs, links, copyable prompts and screenshots that attendees open on their own device. A door is closed by default in present mode and can be opened by anyone.

An attendee should be able to follow every door without David in the room.

## 6. Design principles: restraint

David's words: personal, not performative. No fancy themes.

Do:
- Clean, readable type with generous space. One typeface for reading is enough; a second only for code and prompts.
- A light, quiet page. One accent color at most, used for links and doors.
- Real screenshots of real tools, shown plainly.
- Write like a teacher talking to colleagues.

Do not:
- Themes, metaphors or decoration as structure (no "release notes," "field notes," notebooks, planners).
- Gradients, glowing effects, floating shapes, stock icons, emoji as decoration.
- Marketing language: "unlock," "supercharge," "revolutionize," "the power of AI," "game-changer."
- Scroll-jacking or animations that make the reader wait.
- Invented statistics, quotes or testimonials.

The test: if David read the page aloud, would it sound like him?

### Photos

Free-license photos from Pexels or Unsplash are welcome, used with the same restraint.

- **Few and chosen.** A photo appears only where it helps the story land: a moment, a place, an object. Not every chapter needs one. Suggested searches are listed per chapter in `content/story.md`.
- **Real and ordinary.** Desks, notebooks, hallways, a laptop at the end of a long day, a teacher and student at a table, a phone full of apps. Natural light. Nothing staged to look "innovative."
- **Never:** robots, glowing brains, circuit boards, holograms, floating code, handshakes with machines, or AI-generated images.
- **No identifiable children.** Prefer hands, backs, objects and empty rooms over students' faces.
- **Stored locally,** never hot-linked: download each photo into `site/assets/photos/` and resize it to no more than 1600px wide (target under 300 KB).
- **Credit every photo** in `site/assets/photos/CREDITS.md` (file name, photographer, source URL, license) and in a small credits line in the final chapter. Pexels and Unsplash don't require attribution, but we credit anyway.
- Every photo gets real alt text describing what it shows.
- Screenshots of David's tools always take priority over stock photos.

## 7. Technical rules

- Plain HTML, CSS and JavaScript. No framework, no build step. It must open by double-clicking `site/index.html`.
- Everything the site needs lives in `/site`. Screenshots go in `site/assets/screenshots/`, photos in `site/assets/photos/`.
- **Content is kept separate from layout.** All text lives in one file the page reads: `site/content.js`. Revising the talk should mean editing text, not code.
- **`content/story.md` is the source.** `site/content.js` is built from it. When the story changes, it changes in `story.md` first, and the builder updates `content.js` to match in the same round. The two must never disagree.
- Vertical scroll. Each chapter is at least one screen tall on a laptop.
- **Present mode:** opened with `?present` in the URL or by pressing `P`. Larger type, doors closed, "Say" hidden. Arrow keys and space move to the next beat (each quote block in a spine), then the next chapter. Pressing `P` again returns to reading mode.
- **Reading mode** is the default: phone first, since attendees arrive from a QR code.
- Doors are native `<details>`/`<summary>` elements or equivalent, keyboard accessible.
- Every prompt in a door has a working copy button.
- A small chapter index (table of contents) is reachable from anywhere.
- Accessible: text contrast at least 4.5:1, visible focus states, alt text on every image, works with a keyboard alone, respects `prefers-reduced-motion`.
- **No live apps, no API calls, no API keys, no analytics, no trackers.** Screenshots only.
- No external scripts, embeds or requests except, optionally, one web font. The site should still read well if the font fails. Ordinary links to other sites are fine.
- Demo videos are linked, not embedded, until David decides where they're hosted.

## 8. Privacy

- No student names, grades, essays or identifying information anywhere in the site, including screenshots. Screenshots must be cleaned before they are added.
- David's own tools are shown as screenshots, never as working apps.

## 9. Review rubric

Every review in `/reviews` answers these:

1. **Thesis:** does this serve the thesis in section 3?
2. **Voice:** does it sound like David, not like marketing or an AI?
3. **Doors:** can an attendee follow every door without David?
4. **Restraint:** is anything decorative, performative or "AI slop"?
5. **Phone:** does it work at phone width?
6. **Present mode:** can David present from it with only the keyboard?
7. **Accuracy:** are the tool steps correct today?
8. **Privacy and accessibility:** anything that breaks section 7 or 8?

## 10. Out of scope (for now)

- Hosting. David will connect the repo to Vercel later.
- Any login, database or form.
- Making the repo public. It stays private until David decides.

## 11. Open questions for David

These are not decided. Builders should leave placeholders, not guess.

- Does the talk say outright that David still pays for an AI tool, and that the shift is from many single-purpose subscriptions to one general tool? (Suggested in conversation; David hasn't confirmed.)
- Will the final chapter show this repo (the prompts, reviews and build log) as a door? That would require making it public or sharing a copy.
- Which demo videos exist, and where are they hosted?
- Vercel's free plan is meant for personal, non-commercial use. Check whether that fits a school presentation, or whether the school has its own account.
- The tool steps in chapter 9 were checked on 2026-10-25. Recheck them the week before the session; these interfaces change often.
