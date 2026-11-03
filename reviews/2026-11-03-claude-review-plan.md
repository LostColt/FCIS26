# FCIS26 — Review plan for Claude (November 3, 2026)

## Purpose
Review the **unmerged** first-pass final section in `fcis-final-section-first-pass`. Work from the actual source, not from an earlier October handoff alone. David wants a less-is-more 55-minute professional-development presentation, with a small number of practical demonstrations and tools teachers can take home. **Do not redesign or merge without David's direction.**

## Context and decisions
- Slides before 17 are David's personal narrative about the cost of adapting to commercial apps, and building tools that fit students and teachers. Preserve those.
- Slide 17's eight questions in a 2×4 layout are intentional, approved during the November 2 discussion. Keep them.
- Slides 18 onward were restructured around one accessible build. Short three-level orientation first, then a deeper Gemini Canvas demonstration: a reading companion, a working prompt, one targeted revision, sharing.
- After Gemini, show how an existing Google Sheet can become a useful interface. Distinguish the new Sheets canvas (availability dependent) from Apps Script (advanced, optional).
- ChatGPT Sites is another straightforward path. Google AI Studio, Codex, Claude Code and Antigravity are options for more sophisticated development; GitHub and Vercel are supporting services, **not** a second full workshop.
- The prompt library has 20 filterable starters from Pre-K–12 across subject areas, with optional reading supports and no real student information. Accessibility controls should offer individual choice and never be framed as a universal treatment for dyslexia.
- The user wants a full first pass built and audited, then a separate revision pass. Keep critiques actionable and avoid expanding the number of slides to solve every concern.

## Current deck (29 slides by source count)
17: eight-question board.
18: three levels of building.
19: reading-support problem.
20: Gemini Canvas starter prompt.
21: one revision; testing/sharing.
22: Google Sheet → assessment dashboard.
23: ChatGPT Sites and advanced route.
24: safety and school governance.
25: subject-area possibilities.
26: optional build or try the working sample Reader, with prompt library.
27: revise/feedback closing.
28: start small.
29: resource hub.

## Files to read
1. `HANDOFF.md`, `BRIEF.md`, `content/story.md`.
2. `reviews/2026-11-03-final-section-audits.md` (phase-by-phase audit).
3. `site/js/steps.js` and `site/js/slides-b.js`; `site/css/layers.css`.
4. `site/guide.html` and `site/prompt-library.html`.
5. Existing example `site/demos/reader.html` and `site/demos/dashboard.html`.

## What this revision pass changed
1. The practice slide and prompt library now link directly to the already-working sample Reader, rather than assuming participants can immediately generate a tool.
2. The guide distinguishes current provider documentation from procedures not yet tested on the actual school accounts.
3. The safety slide no longer implies that any paid school account automatically grants institutional data visibility; this depends on provider, plan and settings.
4. The guide identifies an additional Google Sites embed-code option and a Sheets canvas fallback.
5. Reading supports explicitly remain optional and supplementary to accommodations.
6. The repo audit is supplemented with these changes and outstanding tests.

## Claude's requested independent audit
**First, read before changing.** Then give David a concise, prioritized report:
- **Narrative:** Does 17 → 18 → Gemini feel natural? Are the slide 18/23 descriptions repetitive? Do slides 18–29 contain too much text or marketing language? Which lines don't sound like a practicing teacher?
- **Presentation:** Inspect at 1836×848 and 390×844; check slide overflow, tap targets, transitions, navigation, and reduced motion. Identify exact slide numbers and CSS selectors for any defects.
- **Functionality:** Use a real browser to test all internal links, prompt-library grade/subject/search filters, copy buttons, the Reader fallback, and the guide's Save as PDF.
- **Provider accuracy:** Recheck Gemini Canvas sharing, Google Sites embed limitations, Sheets canvas plan/account access, ChatGPT Sites publication permissions, and Google Apps Script steps. **Do not claim school-specific workflows work without actual school account tests.**
- **Classroom:** Test prompt examples for grades Pre-K–12, varied subjects, and reading supports, including dyslexia. Distinguish reasonable accessibility options from unsupported efficacy claims.
- **Rehearsal:** Time the 55-minute flow, ensure a realistic optional hands-on window, and identify segments that can be cut without losing the takeaway.

## Delivery request
Report issues as **blocking / material / optional polish**, including file, slide, evidence and suggested minimal change. Do not duplicate or reopen closed `COLLABORATION.md` threads. You can propose fixes, but only implement or merge if David explicitly directs you. The current draft PR is #2: https://github.com/LostColt/FCIS26/pull/2

## Acceptance conditions before main
- Visual and browser checks at laptop and phone sizes.
- Correct copy/filter behavior and navigation.
- Functional prompts, sample link, and printable guide.
- Account-specific live-sharing verification or an explicit onstage fallback.
- Script rehearsed to 55 minutes without rushing.
- David approves voice and visuals slide by slide.
