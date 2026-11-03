# Slide 18 → 19 stacking transition — November 3, 2026

Scope: Only the slides 18–19 architecture/pathway visualization and its documentation. User requested the three words from slide 18 to rise into top-aligned columns on slide 19, with tool-specific values stacking underneath.

## Built
- Slide 18 retains three connected, staggered concepts—Interface, Storage, Hosting—but places them low in the presentation frame.
- Slide 19 presents the exact same three headings as a high, aligned column header, animated from below, before each of three full workflow rows settles into its corresponding columns.
- Gemini: Gemini Canvas / Google Sites draft / Google Sites.
- ChatGPT Sites: ChatGPT Sites / Managed with site / ChatGPT Sites.
- AI Studio, Claude Code, Codex or Antigravity / GitHub (source code) / Vercel.
- Descriptive sublines distinguish project files, saved code, hosting, and optional app databases. Google Sites follows Google Drive/Sites policies, but Google Drive is **not** a universal Gemini app backend. For Canvas app data, Firebase or another storage system may be involved.
- Gemini row has restrained emphasis because the next slide starts the Gemini live example.

## Source audit
- Executed all slide declarations in actual script order; exactly 31 slides, with 3 architecture blocks on slide 18 and 3 column headings + 3 workflow rows on slide 19.
- All 17 previous slides still use unchanged slide-a.js source.
- Slide 20 continues with `#gemini-idea` unchanged; no modification to the subsequent demonstration or later workshop slides.
- Added scoped animation rules, stage offsets and reduced-motion fallback. Timing: headings rise first, then the rows enter around 1.05s, 1.9s and 2.75s; Gemini focus appears at ~4 seconds.
- Verified labels against Google's October 19, 2026 direct Canvas-to-Google-Sites export announcement and Google privacy documentation for optional Canvas data.

## Pending visual review
- Confirm smooth perceptual handoff between slides on a laptop projector. These are two separate slide DOMs, so the perceived object continuity is an animation illusion rather than a literal shared-element transition.
- Confirm slide 19 rows fit at 1836×848 and 1440×900; CSS is responsive, but a full browser screenshot rehearsal is still necessary.
- Mobile/portrait optimization remains deferred at the user's request.
- Confirm actual account permissions for Gemini Sites export independently; no demo data access was tested.

References:
- https://workspaceupdates.googleblog.com/2026/10/publish-interactive-apps-from-gemini-app-to-Google-Sites.html
- https://support.google.com/gemini/answer/13594961
