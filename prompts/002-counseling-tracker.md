# Prompt 002: Shared mock data + counseling tracker (phase 2 of 6)

- **Date:** 2026-10-25
- **Written by:** David (drafted with Claude)
- **For:** Antigravity
- **Runs after:** phase 1 is reviewed and merged into `main`.
- **Goal:** the shared mock data and styles every mockup uses, and the first mockup: the counseling tracker.

---

Read first, in full: `BRIEF.md` (especially sections 7, 8 and 8a), `prompts/PHASES.md`, chapter 2 and chapter 4 of `content/story.md`, and `BUILDLOG.md`.

This is **phase 2 only.**

## Why this tool exists (from David)

I was a college essay writing coach with over 150 students. I needed to track my notes, track appointments, track revisions, and prepare for back-to-back meetings. So I had it build me a tool.

The mockup should make an attendee think: *I could have one of these for my own students.*

## Steps (finish and save each one before the next)

### 1. Shared mock data: `site/demos/shared/mock-data.js`

Every mockup in later phases reads from this file, so get it right.

- **12 students.** Invented first name plus last initial (for example "Marisol T."), clearly fictional, varied. All seniors. Never a real person.
- Each student has:
  - `id`, `name`
  - `essayType`: "Personal statement" or "Supplemental"
  - `topic`: a short, invented, generic essay topic (for example "Learning to cook with my grandmother")
  - `status`: one of "Brainstorming," "Drafting," "Revising," "Final review," "Submitted"
  - `draftNumber`: 0–6
  - `deadline`: "Early" (Nov 1) or "Regular" (Jan 1)
  - `nextMeeting`: a date and time, or none
  - `notes`: 2–4 dated coaching notes, a sentence or two each, in a coach's voice (for example "Strong opening image. Push her to cut the last paragraph and end on the kitchen.")
  - `revisions`: one entry per draft, each with a date and a one-line summary of what changed
- **Fixed mock calendar:** all dates fall in October–November 2026, with a "today" of **Monday, Nov 2, 2026**. Several students have meetings that day, back to back.
- A comment at the top of the file: "All data is invented. No real students."

### 2. Shared styles: `site/demos/shared/demo.css`

Plain and functional: readable type, clear tables and lists, visible focus states, phone-first. Include the persistent banner style ("Mockup · mock data · nothing is saved"). This file is shared by every later mockup.

### 3. Shared helpers: `site/demos/shared/demo.js`

Only small, shared pieces: drawing the banner, a reset button that reloads the clean state, and date formatting. Keep it short.

### 4. The tracker: `site/demos/counseling-tracker/`

Replace the phase 1 stub. Three views, switched with tabs:

- **Today:** Monday's meetings in time order, back to back. Each meeting is a prep card: student, status, draft number, the latest note, and the last revision summary, so the coach can walk in prepared.
- **Students:** all 12, searchable by name, filterable by status. Selecting one opens their detail: topic, status, deadline, every note, revision history and next meeting.
- **Add a note:** on a student's detail, the coach can type a note and add it. It appears immediately and disappears on reload, as the banner says.

Plus the banner, the reset button, and a link back to chapter 4 of the main site.

### 5. Check it

Click through every view, search, filter, open three students, add a note, reset. Try it at phone width and with the keyboard only.

## Rules

Everything in `prompts/PHASES.md` applies, especially: write every file in full, no file over about 400 lines, no network calls, no libraries.

## Before you commit

Log it in `BUILDLOG.md` with every file and its line count. Commit with `build: phase 2, mock data and counseling tracker` and push to branch `build/002`.
