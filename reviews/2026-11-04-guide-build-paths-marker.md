# FCIS26 walkthrough and slide 18 audit — November 4, 2026

## Scope agreed
- Slides 12 and 16 unchanged.
- Slide 18: retain all content/layout/sequence; replace solid yellow first-row fill with marker-like left-to-right motion resembling early highlighter cues.
- Upper-left chrome: zero-based chapter index not a slide number; hide it while retaining chapter titles and the bottom slide counter. Final chapter names updated to Recap and Resources & contact.
- Companion `site/guide.html` only: date updated, Prototype → Store → Host matrix and concise routes for Gemini Canvas, ChatGPT Work/Sites, Google AI Studio, Claude/Claude Code, OpenAI Codex, Google Antigravity; official getting-started/download links plus GitHub and Vercel account and setup links. The public `site/resources.html` is untouched.

## Reasoning / design review
The guide is an optional take-home walkthrough, not an in-presentation coding assignment. The reader should be able to distinguish prototyping an interface, preserving the application's source, and hosting a site. The distinction between saving code and storing user data is explicit. ChatGPT Site creation starts in Work rather than an ordinary text chat; Codex is OpenAI/ChatGPT's coding agent; Antigravity is Google's Gemini-family coding environment, not the Gemini chat interface. More complicated workflows recommend a desktop application, local project folder, GitHub and optional Vercel.

## Source audit
- 25 slides / 9 chapters, slide 18 still id=architecture, last chapter names corrected.
- Slides 12 and 16 source unchanged; `site/resources.html` unchanged.
- Earlier `.mark` highlighter treatment inspected. Slide 18 retains the 9.3-second sweep but uses a translucent imperfect-edge band instead of filling the entire row. Reduced-motion users get a static highlight.
- `site/guide.html` shows November 4, 2026 in header and footer; self-anchors resolve, and its existing Gemini/Google Sites sections remain.
- The guide has official links for ChatGPT Sites, Google AI Studio Build/Deploy, Claude Code, Antigravity, GitHub and Vercel.
- JavaScript for the deck parses cleanly.

## Limitations
Visual browser/smartboard rendering and external account-specific workflows have not been tested in the user's exact conference environment. Provider features, billing and availability can change and should be checked using official links. No source code or real student data should be shared without a school privacy review.
