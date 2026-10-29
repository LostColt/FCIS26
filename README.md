# Stop Subscribing, Start Building

A website for an FCIS professional development session by David Tran, Gulliver Prep, Miami, FL. David presents from it; attendees keep it.

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
| `site/` | The deck (`index.html`, `css/`, `js/`). David's tools are links to ChatGPT Sites, set in `js/slides-a.js` |

## Rules of the road

- `main` is the live site. Builders work on a separate branch, and nothing lands on `main` until it's been reviewed.
- Reviews suggest. David decides.
- Private for now. Hosted on Vercel, with Root Directory set to `site`.
