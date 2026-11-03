# FCIS26 integrated live review — November 3, 2026

**Purpose:** Merge Claude's laptop-presentation polish with the revised slide-18-onward teaching plan. David explicitly authorized publication to `main` and will then review each slide. No changes to slides 1–17 were made in the integration branch.

## Approved teaching sequence
- 17: Eight questions (2×4 board), ending with the invitation to fix one small thing
- 18: Three levels of building, briefly
- 19–21: Concrete reading-companion need, Gemini Canvas prompt, and one improvement
- 22: Assessment Calendar from fictional Google Sheet information
- 23: Short ChatGPT Sites and advanced coding options
- 24: School safety and privacy responsibilities
- 25: Claude's four copyable workshop prompts, with a link to the 20-example grade/subject library
- 26: Optional pair activity using Gemini or an existing sample Reader; no forced login/publication
- 27: Build first, then revise
- 28: Start small, keep changing it
- 29: Four-column resource hub, retaining Claude's arrangement

## Integration preserved
- Slides 1–17 unchanged, including slide 17's question-card animation
- Claude's legible safety layout, prompt-menu CSS, speaking-size workshop typography, and four-column closing slide
- Current self-contained sample demos (tracker, screenplay, Reader, Assessment Calendar)
- Standalone site, self-hosted font assets and no analytics or third-party script requests

## Take-home materials
- `site/prompt-library.html`: 20 cross-grade and cross-subject examples, filters, copy buttons and optional reading-support follow-up
- `site/guide.html`: Gemini Canvas, sharing/Google Sites, Google Sheets/Apps Script, ChatGPT Sites, advanced coding/GitHub/Vercel, student-data cautions
- Live Reader fallback linked from workshop and companion materials

## Checks completed before merging
- Executed the actual JavaScript slide-definition files in order with their minimal window environment; exactly 29 slides compile across chapters 0–9.
- Verified JavaScript syntax for the slide sources and scripts in the two companion HTML pages.
- Checked each slide's internal `guide.html#anchor` target against actual guide IDs; none missing.
- Verified all four linked self-contained demo HTML files exist in the integration branch.
- Confirmed the 2×4 question board and all earlier slide definitions remain unchanged from the prior `main`.

## Not yet verified
- Full real-browser screenshots at 1836×848 and 1440×900 for the **combined** build; earlier Claude checks were on a different version.
- Actual generated Gemini app, school account access and sharing, Google Sites URL embedding, Sheets canvas availability and ChatGPT Sites audience settings.
- Clipboard/filter actions in an actual browser, full clicker navigation, reduced-motion and accessibility testing, printed guide pagination, timed 55-minute rehearsal.
- Mobile portrait layout is deferred per David's instruction.

This is a complete integration for David's slide-by-slide review, **not a claim that the listed live tests have passed**.
