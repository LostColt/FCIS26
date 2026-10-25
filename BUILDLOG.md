# Build log

One entry per round, newest first. Git keeps the exact timestamps; this keeps the story.

Format: date · who · what happened · what's next

---

**2026-10-25 · Claude** · Rebuilt the site on branch `build/claude` after David found the phase 1 spine lifeless, with no story and no images. The story now leads every chapter in David's words, with free-license Unsplash photos, an interactive subscription tally (chapter 1), a build chain (4), a revision example (8), the three paths with walkthroughs (9), a workshop timer (11), doors with copyable prompts, and a present mode with photos. Fonts are bundled so it works offline. Files: site/index.html (50 lines), site/css/fonts.css (40), base.css (98), story.css (198), figures.css (181), present.css (81), site/js/content-a.js (169), content-b.js (222), render.js (165), tally.js (73), timer.js (87), present.js (147), five mockup holding pages. Mockups still to come. Photos load from images.unsplash.com for now (this session can't download them). · Next: David reviews the preview; then the five mockups.

**2026-10-25 · David, with Claude** · Removed the essay login entirely. Build the presentation spine first: phase 1 is now only the on-screen beats and present mode, with labeled holding spots for everything else. Say, doors and photos moved to phase 2; mockups are now phases 3–7. · Next: Antigravity runs `prompts/001-spine.md` on branch `build/001`.

**2026-10-25 · David, with Claude** · Decided David's tools become clickable mockups (coded, no APIs, mock data) instead of screenshots: counseling tracker, dashboard, audio reader, locked browser, screenplay tool. The essay login stays a screenshot. Split the build into six phases, one prompt each, so nothing gets cut off (`prompts/PHASES.md`). · Next: Antigravity runs prompt 001 (phase 1) on branch `build/001`.

**2026-10-25 · David, with Claude** · Decided all student information is mock data: every screenshot and example uses invented students, never real or blurred data. Updated the brief (section 8), the story and the assets list. · Next: unchanged.

**2026-10-25 · David, with Claude** · Set up the repo. Wrote the brief, the story draft and prompt 001. Nothing built yet. · Next: Antigravity runs prompt 001 on branch `build/001`.
