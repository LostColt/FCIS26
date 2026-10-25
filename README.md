# Stop Subscribing, Start Building

A website for an FCIS professional development session by David [last name]. David presents from it; attendees keep it.

This repo also records how the site gets made: every prompt, every review, every revision.

## How it works

```
David writes a prompt  →  Antigravity builds  →  Claude and ChatGPT review  →  David writes the next prompt
```

| Where | What |
|---|---|
| `BRIEF.md` | The source of truth: thesis, story structure, design rules, review rubric |
| `content/story.md` | The site's text, chapter by chapter, in David's words |
| `prompts/PHASES.md` | The six build phases, and the rules every phase follows |
| `prompts/` | Every instruction given to the builder, numbered and dated |
| `reviews/` | Every review, numbered to match its prompt |
| `BUILDLOG.md` | One line per round, in plain language |
| `ASSETS.md` | Screenshots and photos still needed |
| `site/` | The website itself |

## Rules of the road

- The builder works on a branch (`build/001`, `build/002`, ...). Nothing lands on `main` until David says so.
- Reviews suggest. David decides.
- Private for now. Vercel later.
