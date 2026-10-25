# Reviews

Feedback lives here as files, so it stays with the repo and any tool can read it.

## Naming

`<prompt number>-<reviewer>.md`, matching the prompt being reviewed.

- `001-claude.md`
- `001-chatgpt.md`

## Who looks at what

Both reviewers use the full rubric in `BRIEF.md` section 9, but each leads on different things so the feedback doesn't overlap:

- **Claude** leads on story, voice, clarity, the accuracy of the tool walkthroughs, privacy and accessibility.
- **ChatGPT** leads on visual design, restraint, code quality, phone layout and present mode.

## Format

```
# Review 001: <reviewer>

- Date:
- Reviewed: branch / commit
- Read: BRIEF.md, content/story.md, prompts/001-spine.md, BUILDLOG.md

## Verdict
One or two sentences.

## Rubric
1. Thesis:
2. Voice:
3. Doors:
4. Restraint:
5. Phone:
6. Present mode:
7. Accuracy:
8. Privacy and accessibility:

## Must fix
Numbered. File and line or chapter for each.

## Should consider
Numbered.

## Questions for David
Anything only David can decide.
```

## Rules

- Review the build against `BRIEF.md`, not against personal taste.
- Don't edit the site, the brief or the story. Reviews only suggest; David decides.
- Be specific. "Chapter 7 spine has three lines; brief says few words" beats "too wordy."
- Quote David's words when they're being changed or lost.
