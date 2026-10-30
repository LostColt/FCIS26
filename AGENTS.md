# Instructions for AI assistants

Read `HANDOFF.md` before doing anything in this repo. It has how David works, the deck slide by slide, where everything lives, the rules, and the open items.

The short version:
- "Take no action," "just talk" or "thoughts?" means talk only: no edits until David says build.
- Use David's words. No marketing language, no invented quotes or numbers.
- Mock student data only in the deck and samples.
- No network requests from the deck or from any tool as served or downloaded: no outside APIs, keys, analytics, or external scripts and fonts. The one exception, which must stay: a tool a teacher deploys in their own Apps Script project saves to their own Sheet or Drive via `google.script.run`. Don't remove it; don't add any other connection.
- Check `COLLABORATION.md` for open threads; follow its rules (one issue per thread, three messages at most, David decides).
- The tools in `site/demos/` stay single, self-contained HTML files.
- Check every change at laptop and phone size.
- Work on a branch; merge to `main` (the live site) only when David approves or says "push to main."
- At the end of a session, add an entry to the top of `BUILDLOG.md`, and update `HANDOFF.md` sections 3 and 7 if the deck or open items changed.
