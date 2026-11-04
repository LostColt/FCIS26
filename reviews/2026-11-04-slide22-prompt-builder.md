# FCIS 2026 · Slide 22 + prompt-builder revision
Date: 2026-11-04

## Intent
Slide 22 remains a slide rather than a complete application interface. It shows a large invitation, three grade-level entry points and one CTA to the separate workshop. The separate website owns tool selection, accessible customization and assembling one editable prompt for Gemini Canvas.

## Changes
- Slide 22: removed the 12-tool grid in favor of Lower/Middle/High columns with compact subject line and one link opening the prompt workshop in a new tab.
- Workshop: the 12-tool matrix, learning-need browsing, 3 learning-support starters and blank start remain available when browsing. Selecting an idea hides the catalog and focuses the single prompt editor; Back returns to choices.
- One editable prompt replaces separate idea and full-prompt columns. Its core instruction asks Gemini to expand the idea into a detailed build prompt and then build in Canvas.
- Seven optional sections add reading access, language, focus/step-by-step, alternative response modes, thoughtful graphic/UI design, teacher controls and privacy. Design guidance explicitly discourages generic AI-generated visual clutter and considers grade level and task.
- Clicking an add-on again removes it only if the original inserted section is unchanged. If the user edited it, the site explains that it was preserved instead of deleting their edits.
- One copy button copies the entire resulting editor. Clipboard failure selects the text for manual copying.

## Source checks
- All slide and workspace JavaScript parses.
- 28 slides remain; #tool-ideas is slide 22. It contains no tool matrix and exactly one external workshop link.
- 12 grade×subject entries, 3 specialist learning-support starters, and 7 add-ons verified.
- Workspace contains one textarea, explicit copy action, visual-design guidance, deep-link selection, blank start, and browse/editor transitions.
- New CSS includes shorter-screen slide tuning and responsive prompt controls.

## Visual testing limitations
Static source checks do not establish projected appearance or end-to-end clipboard behavior in a user's browser. A presenter smartboard and mobile rehearsal remain appropriate.
