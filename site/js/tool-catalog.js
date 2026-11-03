/* FCIS 2026: intentional classroom build starters.
   Each tool starts with an instructional problem, not a technical recipe.
   These are original example prompts, not evidence of validated interventions. */
(function () {
  "use strict";
  var tools = [
    {
      id:"build-trade",level:"lower",grade:"Grades 1–3",subject:"Math",
      title:"Build, Trade, Explain",need:"Place value and regrouping",
      tags:["math reasoning","visual learning","manipulatives"],
      description:"Represent a number with tens and ones; trade ten ones for a ten without changing its value.",
      prompt:"I want a place-value tool for grades 1–3. Students build two- and three-digit numbers using ones and tens, trade ten ones for one ten and reverse the trade. Show the quantity and numeral together. Before showing feedback, ask learners to explain why the value stays the same even as the blocks change. Let teachers set a target number and switch between guided and open practice. Include clear visuals, large drag or tap targets, optional spoken directions, and a way to respond without typing. Do not solve a student's problem automatically."
    },
    {
      id:"proportional",level:"middle",grade:"Grades 6–8",subject:"Math",
      title:"Proportional or Not?",need:"Additive versus multiplicative reasoning",
      tags:["math reasoning","visual learning","word problems"],
      description:"Compare fixed-fee and constant-rate situations using linked tables and graphs.",
      prompt:"I want a middle school tool that helps students tell proportional from non-proportional relationships. Present two situations: one with a fixed starting fee plus a unit rate and another with a constant rate through the origin. Students predict costs for quantities, then manipulate the values and compare a table, graph and double number line. Ask them to justify their classification using more than one representation. Do not tell them which is proportional before they decide. Offer optional read-aloud of word problems, highlight quantities and units without choosing operations, and let teachers edit the contexts and numbers."
    },
    {
      id:"model-fits",level:"high",grade:"Grades 9–12",subject:"Math",
      title:"Which Model Fits?",need:"Choosing and questioning mathematical models",
      tags:["data interpretation","math reasoning","modeling"],
      description:"Compare linear, quadratic and exponential models against a small dataset and its residuals.",
      prompt:"I want a high school algebra and statistics tool in which students explore a small fictional dataset and choose between linear, quadratic and exponential models. Show each graph, predictions and residuals so students can compare fit, not just select an equation. Ask what the model assumes and whether extrapolating beyond the observed data is defensible. Include teacher-editable datasets, clearly labeled axes and units, and a keyboard-accessible alternative to dragging. Do not declare a single model correct when the data do not support that conclusion."
    },
    {
      id:"sentence-lab",level:"lower",grade:"Grades 2–5",subject:"English",
      title:"Sentence Meaning Lab",need:"Making sentence choices purposeful",
      tags:["writing","literacy access","visual learning"],
      description:"Revise simple sentences and compare how word choices change meaning.",
      prompt:"I want a grades 2–5 sentence revision workshop. Give students a short sentence and optional word banks for vivid verbs, precise nouns and descriptive phrases. Let them add, move or replace words and compare the original and revised versions. Use a simple picture or scene that responds when the meaning changes. Ask which revision communicates the idea more clearly and why rather than rewarding longer sentences. Include optional read-aloud, word-by-word focus and the ability to dictate or select an explanation. Let teachers supply their own sentences."
    },
    {
      id:"evidence-interpretation",level:"middle",grade:"Grades 6–8",subject:"English",
      title:"Evidence to Interpretation",need:"Connecting a quotation to a claim",
      tags:["writing","evidence","literacy access"],
      description:"Select textual evidence, form an interpretation and explain the link between them.",
      prompt:"I want a middle school close-reading tool where a teacher pastes a short passage they have permission to use and an interpretive question. Students select a phrase, create a claim and explain how that evidence supports it. Show the distinction between what the passage explicitly states and what a reader infers. Offer a second plausible interpretation for students to evaluate without generating their own answer for them. Include optional synchronized text-to-speech where available, line focus, adjustable spacing and oral or typed responses. Keep student work local unless the teacher explicitly exports it."
    },
    {
      id:"argument-test",level:"high",grade:"Grades 9–12",subject:"English",
      title:"Argument Stress Test",need:"Revising arguments when evidence complicates them",
      tags:["writing","evidence","critical thinking"],
      description:"Build a claim, consider counterevidence and explain how the argument changes.",
      prompt:"I want a high school argument workshop. Students enter a claim, select or enter supporting evidence and write their reasoning. Present a teacher-provided counterargument or complication and ask them to qualify, strengthen, defend or revise the original claim. Keep the first and revised versions visible side by side, with a short reflection about what changed and why. The app must not write the argument or grade a student. Support text-to-speech for source passages, structured planning and oral drafting when appropriate. Allow teacher-controlled prompts and sources."
    },
    {
      id:"fair-test",level:"lower",grade:"Grades 3–5",subject:"Science",
      title:"Fair Test Designer",need:"Changing one variable while holding others steady",
      tags:["investigation","visual learning","literacy access"],
      description:"Plan a plant-growth investigation and decide what to change, measure and control.",
      prompt:"I want a science investigation planner for grades 3–5. Students investigate a question like whether sunlight changes plant growth. They choose the variable to change, what to measure and which conditions must stay the same. If they change sunlight and water together, ask what conclusion they could reasonably draw and let them revise their test. Show a simple visual setup and fictional observation table, then ask for a prediction and interpretation. Use optional spoken instructions, illustrated equipment, short steps and teacher-editable investigations. Do not imply the fictional data are real experimental results."
    },
    {
      id:"food-web",level:"middle",grade:"Grades 6–8",subject:"Science",
      title:"Food Web Stress Test",need:"Predicting effects within interconnected systems",
      tags:["investigation","systems thinking","visual learning"],
      description:"Predict what may happen when a species changes, then test a simplified food-web model.",
      prompt:"I want an interactive middle school food-web model using a small, scientifically plausible ecosystem curated by the teacher. Students predict how producers, herbivores and predators may respond if one population changes, then observe a transparent simplified model. Let students trace which feeding relationships connect their predictions to results. Explain assumptions and uncertainty clearly; avoid exact claims about real populations. Offer keyboard controls, text labels alongside arrows, optional read-aloud and adjustable motion. Let teachers swap species and revise relationships."
    },
    {
      id:"evidence-noise",level:"high",grade:"Grades 9–12",subject:"Science",
      title:"Evidence Under Noise",need:"Distinguishing patterns from variation",
      tags:["data interpretation","investigation","critical thinking"],
      description:"Analyze repeated measurements, sample size and uncertainty in fictional trials.",
      prompt:"I want a high school experimental evidence tool using explicitly synthetic measurements. Students compare conditions, change sample size, inspect spread and consider a possible confounding variable. Show a graph and accessible numerical table side by side. Ask students what the evidence supports, what remains uncertain and what follow-up investigation would be useful. Make the assumptions editable by the teacher and show why a single trial can mislead. Offer keyboard navigation, clear labels, optional spoken directions and no unsupported statistical claims."
    },
    {
      id:"then-now",level:"lower",grade:"Grades 3–5",subject:"History",
      title:"Then & Now Detective",need:"Separating observation from inference",
      tags:["evidence","visual learning","literacy access"],
      description:"Compare two dated community photos and distinguish what students see from what they infer.",
      prompt:"I want a grades 3–5 history inquiry tool where a teacher uploads or selects two authentic, appropriately attributed photographs of the same community from different years. Students mark details that changed or stayed the same and sort their statements into 'I see' and 'I think.' They can ask questions the pictures cannot answer, then use captions or source dates to reconsider a claim. Include enlarged image views, optional spoken captions, keyboard-accessible markers and oral response choices. Never fabricate historical photographs or pretend a student's inference is established fact."
    },
    {
      id:"corroboration",level:"middle",grade:"Grades 6–8",subject:"History",
      title:"Corroboration Desk",need:"Comparing sources with different perspectives",
      tags:["evidence","literacy access","critical thinking"],
      description:"Examine three sources for authorship, agreement, disagreement and gaps.",
      prompt:"I want a middle school historical source comparison desk. A teacher provides up to three authentic excerpts with author, date, context and attribution. Students examine who created each source and why, then mark points of agreement, disagreement and missing information. They build a tentative explanation supported by specific lines and identify a question they cannot yet answer. Use optional read-aloud, side-by-side text, a focus view and visual evidence tags. Do not invent primary sources, assign blanket credibility scores or write the conclusion for the student."
    },
    {
      id:"historical-lab",level:"high",grade:"Grades 9–12",subject:"History",
      title:"Historical Interpretation Lab",need:"Revising an interpretation as evidence changes",
      tags:["evidence","critical thinking","writing"],
      description:"Defend a historical interpretation, then respond to new evidence and contextual details.",
      prompt:"I want a high school historical interpretation workspace. Teachers add authentic, attributed documents and a historical question. Students assemble a claim, cite evidence and explain context and limitations. A teacher-controlled new document or perspective is revealed later, prompting students to decide whether to qualify, revise or defend their interpretation. Preserve the original and revised arguments for comparison, and distinguish uncertainty from unsupported certainty. Support optional audio for sources, clear annotation tools and non-typing response methods where appropriate. Do not generate fake historical sources."
    },
    {
      id:"word-navigator",level:"support",grade:"Adapt to grade",subject:"Learning support",
      title:"Word Problem Navigator",need:"Accessing mathematical language without revealing the operation",
      tags:["literacy access","math reasoning","word problems"],
      description:"Read and visually organize word problems while leaving the mathematical thinking to the student.",
      prompt:"I want a teacher-controlled math word-problem navigator for students who struggle with dense reading. Let teachers paste an age-appropriate problem. Offer optional read-aloud, short line-by-line presentation, highlighted quantities and units, visual diagrams and a place to organize relevant information. Do not suggest which operation to use or solve the problem. Let learners choose visual, spoken or written explanations. Include teacher controls for what reading help is enabled and make clear that accessibility support is not a substitute for explicit reading instruction."
    },
    {
      id:"investigation-navigator",level:"support",grade:"Adapt to grade",subject:"Learning support",
      title:"Investigation Navigator",need:"Accessing lab procedures without losing the science",
      tags:["literacy access","investigation","visual learning"],
      description:"Break a teacher-authored experiment into clear steps with optional audio and checkoffs.",
      prompt:"I want an accessible science investigation guide. A teacher enters a safe, approved procedure and materials list. Display one step at a time with optional spoken instructions, a simple diagram, checkoff controls and a persistent equipment list. Include an opportunity to predict what happens before each observation, while preserving the scientific question and any required safety warning. Do not invent safety procedures, assume unsupervised experiments, or collect student identities."
    },
    {
      id:"word-structure",level:"support",grade:"Adapt to grade",subject:"Learning support",
      title:"Word Structure Workbench",need:"Teacher-led phonics and morphology practice",
      tags:["literacy access","reading instruction","writing"],
      description:"Manipulate teacher-verified sound, spelling and word-part patterns with explicit feedback.",
      prompt:"I want a teacher-directed word-structure practice tool. Teachers select verified phonics patterns or morphology units and provide controlled word lists. Learners manipulate sound-to-letter mappings, syllables, prefixes, roots or suffixes appropriate to their current instruction. Give explicit, accurate feedback and allow cumulative practice, repetition and spoken examples. Keep decoding tasks distinct from optional read-aloud supports. Do not let AI invent word lists or rules without teacher review, diagnose dyslexia, or claim to provide treatment."
    }
  ];
  var shared = "Turn what I've described into a detailed build prompt for yourself. Include the specific learning objective, age-appropriate interactions, teacher controls, accessibility supports suited to the task, and any important details I missed. Then use that prompt to build a first working version in Gemini Canvas. Make it simple to test and revise, with readable controls and fictional sample information. Don't require a student login, store identifying student information, or complete thinking students should do themselves. Let me review the result and request changes.";
  window.FCIS_TOOLS = {tools:tools, shared:shared};
})();
