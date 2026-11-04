# Prompt-builder side-by-side editor audit · 2026-11-04

Scope: Only the prompt builder site and project notes. Slide 22 stays unchanged.

## User requirements
- Desktop editor: left third is the learning assistant; right two-thirds is the prompt.
- Selecting a left-side instruction directly changes the visible prompt, rather than stacking buttons above it.
- Organize adjustments by Learning access, Visual design, and For the classroom.
- Keep one editable prompt and one Copy complete prompt action.
- Keep age-appropriate, non-generic educational UI design guidance.
- Respect manually edited text when an add-on is deselected.

## Implementation
- `site/prompt-library.html`: creates a single `builder-layout` with an assistant `aside` and right-side `prompt-main`. Moved existing seven controls into sidebar. The original `textarea#prompt` is still the sole editable/copy source.
- `site/css/prompt-workspace.css`: desktop `grid-template-columns:minmax(240px,1fr) minmax(0,2fr)`, one page scrollbar, sticky sidebar, responsive stack under 780px.
- `site/js/prompt-workspace.js`: seven controls grouped under clear headings; thoughtful age-aware UI design added by default. Each new instruction is inserted into the prompt before the shared Gemini Canvas build instruction, selected to show the exact change, and accompanied by a brief editor emphasis. Removal is allowed only while the inserted wording is unchanged; edited wording is protected.
- Existing 12 grade-subject tools, 3 specialist support tools and Canvas build instruction remain.

## Source audit
- JavaScript parses successfully.
- Deck still comprises 28 slides, with slide 22 id `tool-ideas`.
- One textarea and one copy action.
- 1:2 desktop grid rule and mobile breakpoint present.
- Seven add-ons and all three group headings present.
- Default-design selection, insertion-text highlighting, preservation of edited add-on instructions and Copy complete prompt behavior confirmed at code level.

## Remaining visual checks
- Actual browser rendering, clipboard permissions and smartboard touch/scroll are not confirmed by static inspection.
