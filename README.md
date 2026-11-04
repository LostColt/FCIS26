# Stop Subscribing, Start Building

**Picking this up? Read [`HANDOFF.md`](HANDOFF.md) first.** It's the current front door for any assistant or collaborator.

A website for an FCIS professional development session by David Tran, Gulliver Prep, Miami, FL. David presents from it; attendees can open the tools, download the HTML, and use the original work for educational and other noncommercial purposes.

**[Public resource hub](https://fcis2026.vercel.app/resources.html)** · [Classroom prompt builder](https://fcis2026.vercel.app/prompt-library.html) · [Reuse terms](LICENSE.md)

Original software is source-available under the [PolyForm Noncommercial License 1.0.0](LICENSE.md), excluding third-party materials. Commercial rights are not granted.

This repo also records how the site gets made: every prompt, every review, every revision.

## How it works

```
David writes a prompt  →  Antigravity builds  →  Claude and ChatGPT review  →  David writes the next prompt
```

| Where | What |
|---|---|
| `BRIEF.md` | The source of truth: thesis, story structure, design rules, review rubric |
| `content/story.md` | The site's text, chapter by chapter, in David's words |
| `prompts/PHASES.md` | How the build was split up (history), and the rules every round follows |
| `prompts/` | Every instruction given to the builder, numbered and dated |
| `reviews/` | Every review, numbered to match its prompt |
| `BUILDLOG.md` | One line per round, in plain language |
| `ASSETS.md` | Screenshots, demo videos and placeholders still needed |
| `site/` | The deck (`index.html`, `css/`, `js/`), the guide (`guide.html`) and the four tools (`demos/`) |
| `HANDOFF.md`, `AGENTS.md`, `CLAUDE.md` | How to pick up the project, for people and AI assistants |

## Rules of the road

- `main` is the live site. Builders work on a separate branch, and nothing lands on `main` until it's been reviewed.
- Reviews suggest. David decides.
- Private for now. Hosted on Vercel, with Root Directory set to `site`.
