# Prompt 008: The mockups. Your call.

- **Date:** 2026-10-25
- **Written by:** David (drafted with Claude)
- **For:** Antigravity
- **Replaces:** prompts 003–007. The main site is now the deck on `main`; don’t change it.

---

## What this is

David is giving a talk at FCIS called *Stop Subscribing, Start Building*. It's about how he stopped paying for classroom tools and started building his own with AI. The talk is a swipeable deck (on `main`). At a few points in it, people can open a clickable mockup of a tool David actually built.

You're building those mockups. **David is deliberately not giving you a design.** His best tools came from describing the problem and letting the builder decide. So: the problems are below, in his words. How each tool looks, feels and works is up to you. Make choices. Surprise him.

## The five tools

Build them **one per run, in this order**, so each one gets your full attention and nothing gets cut short:

1. **Counseling tracker** → `site/demos/counseling-tracker/`
   > "I was working in college counseling as a college essay writing coach. I had over 150 students. I needed to track my notes, track appointments, track revisions, and prepare for back-to-back meetings."

2. **Dashboard** → `site/demos/dashboard/`
   > "I had it build me a dashboard so I could track things."
   (It's the at-a-glance view of the same caseload as the tracker. Share its mock data if you like.)

3. **Audio reader** → `site/demos/audio-reader/`
   > "I built a PDF reader. You could upload a document or paste text and it would read it aloud. It wasn't for me. It was for a student who was better with audio than with reading."
   (The browser's built-in speech synthesis needs no network or key, so this one can really work.)

4. **Notes → test → locked browser** → `site/demos/locked-browser/`
   > "I built a tool where students could put in notes. I built it as a classroom first. Then it became ready for taking tests. Then it went into a locked browser, so students couldn't copy and paste or use AI. People loved it."
   (Show how one small tool grew in stages. A web page can't truly lock a browser, so say that plainly somewhere.)

5. **Screenplay tool** → `site/demos/screenplay/`
   > "I built a tool that turned my natural writing into screenplay writing."
   (The real one used AI. Yours can't call AI, so use written-ahead examples, and say so in one line.)

## The few rules (everything else is yours)

- **Self-contained.** Everything for a mockup lives in its own folder. Replace the holding page that's already at `index.html`. Use as many of your own files in the folder as you like.
- **No network.** No API calls, no keys, no external scripts, libraries, fonts or images. It has to work offline on a conference projector. (If you want the deck's fonts, they're at `site/assets/fonts/`, free to use, but you don't have to match the deck.)
- **Mock data only.** Every student, note, essay and grade is invented and clearly fictional. Never real people.
- **Honest.** A small, always-visible label: "Mockup · mock data · nothing is saved." Changes can last until reload; a reload starts fresh. Where the mockup fakes something the real tool did differently, say so in one line.
- **Works for everyone.** Usable on a phone and with a keyboard alone, readable contrast, and alt text where it matters.
- **A way back.** A link back to the talk: `../../index.html`.
- **A picture for the deck.** Save `thumb.png` in the mockup's folder: a 1600×1000 screenshot of the mockup at its most telling moment, real content showing. The deck picks it up automatically and shows it on the link card.
- **Stay in your folder.** Don't change anything outside `site/demos/<name>/`, except your entry in `BUILDLOG.md`.

## Each run

1. Branch from `main` (first run), then keep working on branch `mockups`.
2. Build the one mockup completely: no `...`, no "rest of code here", no TODOs. If you can't finish something, stop and say so in the log instead.
3. Click through all of it at laptop and phone width, and with the keyboard only. Take the `thumb.png`.
4. Add an entry to the top of `BUILDLOG.md`: date, which mockup, what you decided and why (a sentence or two on your design choices), and every file with its line count.
5. Commit as `mockup: <name>` and push to `mockups`.

Then stop. David will look, Claude will review, and the next run builds the next tool.
