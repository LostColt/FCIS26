# FCIS26 one-screen prompt workbench audit · November 4, 2026

## Scope and direction
The workshop website had become too dense and felt like two pages. Retain the quiet presentation slide 22 unchanged. Make the website a calm single-screen prompt workbench, with selection/supports in a slim left third and the complete editable prompt in the larger right two thirds.

## Changes
- `site/prompt-library.html`: removed separate grade×subject matrix, learning-needs alternative browse, editor/picker transition, and explanatory sections. One grade and one subject selector, selected-tool label, starter from scratch, four primary improvement toggles and a discreet More options expansion. Always-visible prompt textarea and single Copy button.
- `site/js/prompt-workspace.js`: grade/subject choose from the original 12 curated learning tools; Learning support grade exposes the 3 specialist tools. Default middle school English, with deep-link `?tool=<id>` preserved. Selecting grade or subject immediately changes the prompt without navigation; drafts of different tools stay in tab memory. The original Gemini Canvas self-prompting build instruction and privacy language remain in the complete prompt. Thoughtful UI design is included by default; optional reading/language/focus supports and two extra options can be toggled. No animation steals text focus.
- `site/css/prompt-workspace.css`: replaced accumulated dense styling with a restrained page, generous whitespace, compact controls, one page and one editor, responsive stack on narrow viewports.
- Slide 22 and the rest of the 28-slide presentation were not edited.

## Checks
- Source syntax passed; all 12 grade×subject pairs and 3 specialist tools exist.
- One editor, two selectors, one copy button; required DOM IDs match JS.
- Simulated browser event check with controlled DOM: default design and Canvas instruction present; adding/removing Reading support reversible; switching to high-school Math and high-school History loads corresponding starters; Start from scratch works; clipboard receives the entire prompt.
- Existing privacy instruction remains always included.

## Limit
Device-specific visual testing on a classroom smartboard and a real clipboard permission prompt should still be checked.
