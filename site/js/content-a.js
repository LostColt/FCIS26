/* The story, chapters 0–6. Text comes from content/story.md; change it there first.
   Photos are free-license Unsplash images, credited in site/assets/photos/CREDITS.md. */

(function () {
  var U = function (id) {
    return "https://images.unsplash.com/" + id + "?w=1600&q=72&auto=format&fit=crop";
  };

  window.STORY = window.STORY || {};

  window.STORY.cover = {
    title: ["Stop subscribing.", "Start building."],
    lede: "How I started making the tools I needed, and what it taught me about teaching.",
    byline: "David [DAVID: last name] · [DAVID: title, school] · FCIS [DAVID: date]",
    photo: {
      src: U("photo-1757193714692-44cdf07a5377"),
      alt: "An empty classroom with desks and chairs by tall windows",
      credit: "Allen Y",
      link: "https://unsplash.com/photos/rkH8YVmjQ4w"
    }
  };

  window.STORY.chapters = [
    {
      n: 1,
      id: "the-pile",
      title: "The pile",
      beats: [
        ["After COVID, the classroom didn't snap back like a rubber band."],
        ["Supply costs became subscription costs."]
      ],
      say: [
        "We all became edtech. Zoom, Teams, Google Classroom, several apps linked together. eLearning days. Virtual school. We accommodated. And when we came back, we didn't go back to pencil and paper. We stayed electronic.",
        "But keeping up with the times started costing teachers and schools a lot. We're not talking about paper and pencils anymore. We're talking about subscriptions."
      ],
      photo: {
        src: U("photo-1762769189106-cc314711e4ed"),
        alt: "A phone screen crowded with app icons",
        credit: "Amanz",
        link: "https://unsplash.com/photos/6j_WS-RhE3I"
      },
      figure: '<div data-figure="tally"></div>'
    },
    {
      n: 2,
      id: "150-students",
      title: "150 students",
      beats: [["150 students. Back-to-back meetings."]],
      say: [
        "I was working in college counseling as a college essay writing coach. I had over 150 students.",
        "I needed to track my notes, track appointments, track revisions, and prepare for back-to-back meetings. So I looked into apps."
      ],
      photo: {
        src: U("photo-1583521214690-73421a1829a9"),
        alt: "Stacks of paper documents and file folders",
        credit: "Wesley Tingey",
        link: "https://unsplash.com/photos/snNHKZ-mGfE"
      }
    },
    {
      n: 3,
      id: "the-real-cost",
      title: "The real cost",
      beats: [
        ["Another subscription meant another system to learn."],
        ["The real cost isn't only the money. It's adaptation."]
      ],
      say: [
        "Every app meant another subscription. But more than that, it meant I had to learn how to use it, and adapt to another system. I'd be working the way the tool wanted, not the way I work.",
        "And students pay that cost too. It's hard having students log into yet another app. Every new platform is another login, another interface, another set of rules to learn before they get to the actual learning."
      ],
      photo: {
        src: U("photo-1751200065697-4461cc2b43cb"),
        alt: "A desk late at night, lit by a lamp behind a laptop, papers scattered",
        credit: "Zoshua Colah",
        link: "https://unsplash.com/photos/IUKdnYUlDco"
      },
      figure:
        '<div class="compare">' +
        '<section><h3>What it costs me</h3><ul><li>Another subscription</li><li>Learning how to use it</li><li>Adapting to another system</li></ul></section>' +
        '<section><h3>What it costs students</h3><ul><li>Another login</li><li>Another interface</li><li>Another set of rules before the learning starts</li></ul></section>' +
        "</div>"
    },
    {
      n: 4,
      id: "so-i-had-it-build-it",
      title: "So I had it build it",
      beats: [
        ["So I had it build it."],
        ["Could you build Notion? Could you build Padlet? Could you build Trello?"],
        ["Do I have to pay anymore?"]
      ],
      say: [
        "I wanted to embed a slide deck into a website, but it didn't look right. So I had it build a slide I could embed. Then I had it build a website. Then I had it build me a dashboard so I could track things.",
        "I started asking it to build the tools I was already using. And the information was stored locally. That's when I began to wonder: do I have to pay anymore?",
        "[DAVID: decide whether to add: \"I still pay for one AI tool. But instead of paying for a dozen tools that each do one thing, I pay for one that builds the specific ones I need.\"]"
      ],
      figure:
        '<ol class="steps" aria-label="How one build led to the next">' +
        '<li><div class="sketch off" aria-hidden="true"><i class="dark"></i><i></i><i class="short"></i></div><h3>A slide deck</h3><p>I wanted to embed it in a website. It didn\'t look right.</p></li>' +
        '<li><div class="sketch" aria-hidden="true"><i class="dark"></i><i class="blue"></i><i></i></div><h3>A slide I could embed</h3><p>So I had it build one.</p></li>' +
        '<li><div class="sketch" aria-hidden="true"><i class="dark"></i><i></i><i></i><i class="short"></i><i class="blue"></i></div><h3>A website</h3><p>Then I had it build a website.</p></li>' +
        '<li><div class="sketch" aria-hidden="true"><i class="dark"></i><div class="bars"><b style="height:40%"></b><b style="height:75%"></b><b style="height:55%"></b><b style="height:90%"></b></div></div><h3>A dashboard</h3><p>Then a dashboard, so I could track things.</p></li>' +
        "</ol>",
      doors: [
        {
          title: "What I built",
          hint: "Click around in mockups of my tools. Mock data only; nothing connects to the real ones.",
          body:
            '<div class="mockups">' +
            '<a class="mockup-link" href="demos/counseling-tracker/"><strong>Counseling tracker</strong><span>Notes, appointments, revisions.</span></a>' +
            '<a class="mockup-link" href="demos/dashboard/"><strong>Dashboard</strong><span>So I could track things.</span></a>' +
            '<a class="mockup-link" href="demos/screenplay/"><strong>Screenplay tool</strong><span>Turns my natural writing into screenplay format.</span></a>' +
            "</div>" +
            "<h4>The slide and the website</h4>" +
            '<div class="shot-frame">Screenshot: the embedded slide and the website <span class="todo">[DAVID: screenshot]</span></div>'
        }
      ]
    },
    {
      n: 5,
      id: "why-i-kept-building",
      title: "Why I kept building",
      beats: [["Faster.", "In my system.", "So I could be more present."]],
      say: [
        "The aim was to work faster and build presentations faster. But more than that, it was about being more present. If I built things faster, and in my own system, I'd have more time to work with students. And if I needed to change something, or create another version, that would be faster too.",
        "I'm creating things that help me move faster so I can give more one-on-one time.",
        "Building apps is really about building a workflow: creating repetition, not just in how I do things, but in how students receive the information."
      ],
      photo: {
        src: U("photo-1785780224428-1e71ec3a1199"),
        alt: "Two people working together at a wooden table",
        credit: "Nathan Dumlao",
        link: "https://unsplash.com/photos/JZXGFdD6UDk"
      },
      figure:
        '<div class="reasons">' +
        "<div><h3>Faster</h3><p>Work faster, build presentations faster.</p></div>" +
        "<div><h3>In my system</h3><p>If I need to change something or make another version, that's faster too.</p></div>" +
        "<div><h3>More present</h3><p>More one-on-one time with students.</p></div>" +
        "</div>"
    },
    {
      n: 6,
      id: "building-for-someone-else",
      title: "Building for someone else",
      beats: [["Building can also mean building for others."]],
      say: [
        "I built a PDF reader. You could upload a document or paste text and it would read it aloud. It wasn't for me. It was for a student I was working with who was better with audio than with reading. Not even my student; a friend's student.",
        "That's when I learned building isn't only for me."
      ],
      photo: {
        src: U("photo-1491595065476-b7e475407e20"),
        alt: "Headphones resting on a book",
        credit: "Jarek Ceborski",
        link: "https://unsplash.com/photos/RSXfg4ckUAA"
      },
      doors: [
        {
          title: "The reader",
          hint: "Paste text and hear it read aloud. This one really works.",
          body:
            "<p>Start from what one learner does well, and build around it.</p>" +
            '<div class="mockups"><a class="mockup-link" href="demos/audio-reader/"><strong>Audio reader</strong><span>Paste text and hear it read aloud.</span></a></div>'
        }
      ]
    }
  ];
})();
