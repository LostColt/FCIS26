# FCIS26 classroom-tool prompt workshop audit
November 3, 2026

## Requested change
Remove the Google Sheets / Apps Script pathway and its Assessment Calendar example from the presentation. Move directly from the Gemini Canvas demonstration into age-appropriate instructional tools for lower, middle and high school Math, English, Science and History. Give teachers a place to choose a tool, **read and edit the actual idea**, read and edit the complete prompt, copy it, and open Gemini Canvas. The common tail must ask Gemini to expand the idea into its own build instructions and build a first version in Canvas. Include needs of students with dyslexia without treating every learner as identical.

## Implemented
- Slide 22 (`#tool-ideas`) has a 4-subject × 3-grade matrix of 12 linked, distinct learning tools instead of the dashboard. Each tile opens the correct editable prompt.
- Slide 24 (`#prompts`) no longer features generic flashcards, randomizers or a static prompt wall; it shows Choose → Change → Copy → Build, linking to the prompt workspace and learning supports.
- `site/js/tool-catalog.js` holds the 12 subject-grade prompts and three targeted learning-support starters (Word Problem Navigator, Investigation Navigator, Word Structure Workbench), each built around a specific instructional problem. Several mainstream tools also include appropriate listening, visual and non-typing response options.
- `site/prompt-library.html` is now a mobile-friendly editor with grade/subject and learning-need views, Start from scratch, editable teacher idea, separately editable complete Canvas prompt, Reset, Rebuild from idea, Copy complete prompt and Open Gemini. Prompts are processed locally in the page, not submitted to a backend.
- `site/guide.html` removes the standalone Sheets/Apps Script walkthrough and describes the editable classroom workflow.
- The end-of-talk resources no longer promote Apps Script or the Assessment Calendar; historical source files/demos remain in the repository, unmodified.

## Structural and content audit
- All slide/catalog/workspace JS parses.
- Existing slide builder evaluates to **28 slides**, with `#tool-ideas` at 22 and `#prompts` in the participation chapter; no `#dashboard` slide.
- Verified 12 matrix links and exact coverage of the 4 subjects × 3 grades, plus 3 additional learning-support starters.
- Verified shared Canvas instruction explicitly asks Gemini to elaborate its own build prompt then build a first version. All prompts use non-sensitive fictional data/no student account requirements.
- Verified editing fields, copy action, blank creation, learning-need filtering, refresh/reset, correct URL parameter selection, and updated resource links at source level.
- Mobile subject row headings are preserved; keyboard focus styles and clipboard error fallback are included.

## Limitations
The source checks do not substitute for an actual browser or smart-screen interaction test. The prompts are instructional design proposals for teacher review, not evidence-validated software interventions. Build outputs from Gemini will vary. No code was deleted from the legacy Assessment Calendar demo.
