# FCIS26 final section — first-pass audits
Date: 2026-11-03
Branch: `fcis-final-section-first-pass` (main untouched)
Scope: slide 18 onward, plus companion guide and classroom prompt library.
Decision: finish the whole first pass, preserve findings, and revise on the next human review.

## Phase 1 — Restructure
**Built:** Replaced Prototype → Store → Host and the repeated tutorial with a short orientation, one Gemini demonstration, a Sheets extension, and an optional advanced path. Retained slide 17's eight-question 2×4 board and the existing safety slide.
**Audit:** The first pass is shorter and keeps the workshop close to take-home resources. Slide 17 preserved. New links and styling were initially missing; scheduled for later phases and completed. Voice is provisional and should be read aloud by David.
**Next pass:** Decide if slide 18 needs fewer words and whether the transition from 17 feels natural.

## Phase 2 — Gemini demonstration
**Built:** Classroom reading-companion problem → concrete prompt → one focused accessibility revision. Linked Gemini and the guide. Added restrained responsive CSS without new external assets.
**Audit:** Clear, repeatable demo with a fallback prompt even if the live generation stalls. Example mirrors the earlier Reader story and does not imply all users benefit from the same accessibility settings.
**Next pass:** Demonstrate using a real account, check generated app behavior on Chromebook and phone, and film a backup if helpful. The generated live tool itself is **not included** in this commit.

## Phase 3 — Classroom prompt library
**Built:** `site/prompt-library.html` with 20 prompt starters across Pre-K–12, seven subject categories, grade/subject/search filters, copy controls, plus an adjustable reading-support follow-up. Uses fictional content and no external scripts.
**Audit:** Examples cover a range of disciplines and grade bands without twenty new presentation slides; every item asks for student-data restraint. Filter logic and labels inspected in source. Clipboard behavior needs an actual browser check. The generated AI tools are not assumed to be accurate or accessible until tested.
**Next pass:** Check examples with teachers across grade bands; add or swap examples, not slides. Confirm early-childhood fit and school accommodations.

## Phase 4 — Other pathways
**Built:** Sheets canvas vs. Apps Script differentiated; ChatGPT Sites publishing and privacy described; coding tools, GitHub and Vercel introduced as optional further reading.
**Audit:** Avoids falsely stating Gemini Canvas embeds will always work in Google Sites. Notes that some URLs cannot be embedded, that Sheets canvas availability is plan/account dependent, and that ChatGPT Sites publishing is permission-dependent.
**Next pass:** Test embedding from a school account, verify Sheets canvas account eligibility, and check a real student-safe ChatGPT Site share before presenting.

## Phase 5 — Companion guide
**Built:** Rewrote `site/guide.html` for one-page paths, copyable Gemini and Sites prompts, sample dashboard, provider links, security and accessibility cautions, and Save as PDF.
**Audit:** Guide has matching anchors for `#gemini`, `#share`, `#sheets`, `#chatgpt` and `#advanced`. Original, outdated sections were intentionally replaced.
**Next pass:** Walk each instruction against actual school accounts. Check printed PDF pagination. Existing sample Apps Script integration must be tested with a real account, per handoff.

## Phase 6 — Structural checks and presentation audit
**Checks completed:** Fetched the updated files from the branch after writes; verified both changed slide JS files parse with a JavaScript syntax check. Confirmed seven slide definitions in `steps.js`, six in `slides-b.js` including safety/closing. Corrected outdated closing links to the new guide anchors and library. Preserved early chapters in `slides-a.js`, the deck engine and standalone demos. No new external scripts, API keys, or student records.
**Not yet verified:** A full local browser run, console logs, screenshot review at 1836×848 and 390×844, clicker flow, responsive horizontal overflow, real account integrations, Google Sites embed behavior, live demo timing, printed guide, or accessibility testing with actual users. These require browser/account testing; code inspection is not a substitute.
**Content audit:** Roughly 29 slides by source count, not a locked slide count until browser review. The six-phase first pass is built, **not production-approved**.
**Next pass with David:** First review slides 18–23 in the presentation, then prompts and the ending; tune voice, motion and amount of information. Rehearse to fit 55 minutes.

## External reference checks (November 3, 2026)
- Gemini Canvas: https://support.google.com/gemini/answer/16047321
- Gemini Canvas data safety: https://support.google.com/gemini/answer/16419134
- Google Sites embed limitations: https://support.google.com/sites/answer/90569
- Sheets canvas access: https://support.google.com/docs/answer/17035851
- ChatGPT Sites: https://help.openai.com/en/articles/20001339-creating-and-using-chatgpt-sites
- Apps Script web apps: https://developers.google.com/apps-script/guides/web

## Editorial constraint
Proposed slide language is the assistant's first-pass draft, not David's quoted voice. Do not present provisional content as his statements until he approves it. Leave the audit notes intact for the revision pass.


## Audit-driven revision pass — 2026-11-03 (second commit set)

**Fixes applied**
- Phase 1/2: The optional practice slide now links to the existing offline sample Reader, giving the audience a fallback when Gemini generation or sharing is unavailable. The guide now links to this sample too.
- Phase 3: The prompt library links to that example and explicitly says reading settings are individual choices, not universal dyslexia solutions; accommodations remain in force.
- Phase 4: School-account copy clarified. Having a paid school account does not by itself guarantee administrators can see information; oversight depends on the service, account configuration and permissions. Google Sites URL embed and optional embed-code paths differentiated; Sheets canvas has an explicit fallback.
- Phase 5: The guide now describes its interface instructions as documentation-based; real school-account operation is **still untested**. Removed ambiguous language that suggested the instructions had already been verified end to end.
- Phase 6: Created `reviews/2026-11-03-claude-review-plan.md` for independent review and acceptance criteria, including visual and functional checks.

**Source checks:** Google Gemini Canvas, Sheets canvas, Google Sites embed help, and OpenAI ChatGPT Sites documentation were rechecked on November 3. These confirm that provider availability, embed eligibility and publication permissions can vary. They do **not** verify conference account access.

**Remaining blockers for production approval:** real-browser screenshots and overflow, prompt-filter/copy/print tests, current school-account Canvas and Sites sharing, timed rehearsal, and David's review of wording and density. Keep `main` untouched until those checks and explicit approval.
