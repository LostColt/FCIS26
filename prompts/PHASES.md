# Build phases

The site is built in seven phases, one prompt each. Each phase is small enough to finish completely in one run. **Run one phase at a time.** After each phase, Claude and ChatGPT review it and David merges it before the next one starts.

| Phase | Prompt | What gets built | Branch |
|---|---|---|---|
| 1 | `001-spine.md` | **The spine:** every chapter's on-screen beats, reading and present modes, and labeled holding spots for everything else | `build/001` |
| 2 | `002-say-doors-photos.md` | Say text, doors, photos, the screenshot frame, and holding pages for the mockups | `build/002` |
| 3 | `003-counseling-tracker.md` | Shared mock data and styles, then the counseling tracker mockup | `build/003` |
| 4 | `004-dashboard.md` | The dashboard mockup | `build/004` |
| 5 | `005-audio-reader.md` | The audio reader mockup | `build/005` |
| 6 | `006-locked-browser.md` | The note tool → test → locked browser mockup | `build/006` |
| 7 | `007-screenplay.md` | The screenplay tool mockup | `build/007` |

## Rules for every phase (so nothing gets cut off)

1. **Do only this phase.** Don't start the next one, and don't change files that belong to other phases, except where the prompt says so.
2. **Write every file in full.** Never leave `...`, `// rest of code`, `/* same as before */`, `TODO: implement` or any other gap. If you can't finish something, stop and say so in `BUILDLOG.md` instead of leaving a gap.
3. **Keep files small.** No single file over about 400 lines. If one would be longer, split it into smaller files with clear names.
4. **Build in steps, and save after each step.** Each prompt lists its steps in order. Finish and save one step before starting the next.
5. **Check your own work before committing:** open the page, click through every control listed in the prompt, try it at phone width, and try it with the keyboard only.
6. **Log it.** Add an entry to the top of `BUILDLOG.md` with the date, the phase, what you built, a list of every file you created or changed with its line count, and anything you couldn't do or weren't sure about.
7. **Commit and push to that phase's branch,** never to `main`.
