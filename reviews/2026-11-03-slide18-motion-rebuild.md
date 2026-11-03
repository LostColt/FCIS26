# FCIS26 motion-first rebuild — November 3, 2026

Branch: `slide18-motion-gemini-hud-20261103`
Scope: replace the material immediately after slide 17 with a visually distinct build architecture and Gemini demonstration. **User authorized merging to main when completed.** Later teaching/workshop and closing slides were left substantively unchanged, but renumbered to 25–31.

## Phase 1 — Architecture and building paths
**Changed:** Slide 18 assembles Interface → Storage → Hosting using staggered rising panels and connecting arrows. Slide 19 branches into three routes, one after another: Gemini Canvas → Google Sites; ChatGPT Sites (eligible paid plan, one service for build/publish); AI Studio, Claude Code, Codex or Antigravity → GitHub → Vercel. Gemini remains the focus at the end.
**Audit:** The three-part distinction can describe a simple tool without claiming that separate databases/hosts are mandatory. “Storage” can be optional for a purely static app. Distinct animations use scoped CSS. The prior eight-question slide 17 is untouched.

## Phase 2 — Show David's actual prompting process
**Changed:** Slide 20 starts with an ordinary request to create a JARVIS-style interactive particle HUD. Slide 21 asks Gemini to develop a build prompt for itself from that request. Slide 22 asks Gemini to **use the prompt it produced** in Canvas. The verbal demonstration emphasizes describing, testing and revising, not prompt engineering.
**Audit:** Expanded prompt details on slide 21 and the Canvas preview on slide 22 are explicitly **illustrations**. This avoids falsely presenting them as actual Gemini output or a guaranteed one-shot result. Each slide has a different motion treatment: conversation reveal, staggered requirements and a growing preview.

## Phase 3 — Interactive existing HTML outcome
**Changed:** `site/demos/jarvis-hud.html` contains David's uploaded interactive 5,600-particle HTML HUD. Slide 23 presents it as a working existing example, with a full-screen/open link, and an on-demand iframe preview. `site/js/hud-preview.js` only loads that iframe on the active slide and unloads it on navigation, so its animation loop is not continuously active behind later slides.
**Audit:** Sanitized hardcoded location and coordinates from the original sample. Replaced external Tailwind CDN and Google Fonts dependencies with local utility CSS and monospace fallback, for conference Wi-Fi resilience. Preserved core mouse/touch interactions, animations, terminal text and particle physics. No student data added. Runtime pointer behavior needs a real-browser visual test.

## Phase 4 — Export to Google Sites and publish
**Changed:** Slide 24 shows the Canvas app flowing into a **new private Google Sites draft**, followed by publishing and opening the visitor-facing link. The companion guide now includes David's three conversational prompts and the actual Export → Google Sites route.
**Audit:** Grounded in Google's October 19, 2026 feature announcement: https://workspaceupdates.googleblog.com/2026/10/publish-interactive-apps-from-gemini-app-to-Google-Sites.html . Only works if Google Sites is enabled and account is allowed to create/edit sites; still check permissions and visitor access. Export alone does not make the app public. Verified documentation, **not** the specific school account.

## Phase 5 — Structural and handoff audit
- Ran JavaScript syntax checks on the deck scripts, new HUD preview controller, all inline scripts in the guide and original interactive HUD. All passed.
- Executed the actual slide declaration scripts in order and counted 31 slide definitions, with 9 slides in chapter 6.
- Checked guide anchor links referenced by slides. No missing anchors.
- Confirmed slides 1–17 use the same source as main. No new build-path implementation changes after slide 25; later sections are merely renumbered.
- Kept the existing Google Sheets example in slide 25 and subsequent safety, practice and closing slides for David's later review.
- Updated `HANDOFF.md`, `BRIEF.md`, `content/story.md` and `BUILDLOG.md` with new sequence and provisional character of the examples.

## Open items for David's slide-by-slide review
1. View slides 18–24 at 1836×848 and 1440×900 on the projector/laptop. Adjust pacing, panel fit and any motion that distracts from spoken explanation.
2. Try mouse/touch interaction with the HUD preview and full-screen demo. Confirm the on-demand iframe unloads when leaving slide 23.
3. Run the actual Gemini self-prompt → Canvas → Export → Google Sites flow on David's account. If its UI or policies differ, show the tested alternate or the prebuilt demo, never promise a button that is missing.
4. Keep the language of slide 21 natural. The example expansion should remain clearly labeled illustrative.
5. Decide whether the subsequent Sheets demo and workshop should be reduced or shifted; not part of this pass.
6. Verify reduced-motion settings and keyboard/presenter clicker navigation in a real browser.

**Important QA limitation:** Source validation is complete but a full visual browser rehearsal on the combined branch has not been performed. Do not report untested visual or account behavior as verified.
