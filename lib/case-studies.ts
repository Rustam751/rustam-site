// lib/case-studies.ts
// The long text for project pages (/projects/<slug>).
//
// A project gets its own page when its entry in lib/data.ts has a `slug`
// and `caseStudies` below has an entry with the same key. The two must
// match: a slug with no entry here (or an entry here with no slug) stops
// the site with an error that names the missing half.
// To add a page: copy one of the entries here under a new key and rewrite
// it, then set that key as the project's slug in lib/data.ts.
//
// Every number on these pages was checked against the project's own repo.
// If you change one, change it in the repo README too, so the two agree.

import { projects, type Project } from "./data";

export type CaseStudyStep = {
  title: string; // short stage name
  text: string; // one or two sentences
};

export type CaseStudySection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type CaseStudyFigure = {
  src: string; // a file in the public folder, without "public": public/projects/x.png is "/projects/x.png"
  alt: string; // what the picture shows, for screen readers
  caption: string;
  width: number; // real pixel size of the file
  height: number;
  light?: boolean; // true for charts with a white background
  wide?: boolean; // true to use the full page width
};

export type CaseStudyExchange = {
  question: string;
  answer: string;
  sources?: string[];
  abstained?: boolean; // true when the system declined to answer
};

export type CaseStudy = {
  // For Google and link previews. Keep it near 150 characters.
  metaDescription: string;
  // One or two sentences under the page title.
  intro: string;
  // Shown next to the date, e.g. "Personal project".
  role: string;
  // false for team projects.
  solo: boolean;
  // Headline numbers, shown as a row of tiles. Use 3 or 4.
  highlights: { value: string; label: string }[];
  // An honest caveat shown in a box near the top (optional).
  note?: string;
  // An example of the system in use (optional).
  demo?: {
    heading: string;
    intro: string;
    exchanges: CaseStudyExchange[];
    footnote?: string;
  };
  // "How it works": the stages, in order.
  steps: { heading: string; items: CaseStudyStep[] };
  figures?: CaseStudyFigure[];
  sections: CaseStudySection[];
  stack: { group: string; items: string[] }[];
};

export const caseStudies: Record<string, CaseStudy> = {
  "rag-document-assistant": {
    metaDescription:
      "Case study: a question-answering service for PDFs built with FastAPI, ChromaDB and Claude. Cited answers, abstention, a 20-question eval, tests, CI and Docker.",
    intro:
      "I built a question-answering service for PDFs. Claude is told to answer only from retrieved passages. The server attaches the file and page behind every citation, and an answer that comes back without citations is flagged as not grounded.",
    role: "Personal project",
    solo: true,
    highlights: [
      { value: "13/15", label: "answerable eval questions where the right page was retrieved" },
      { value: "5/5", label: "unanswerable eval questions counted as abstentions" },
      { value: "4.1 s", label: "mean time per answer in the eval run" },
      { value: "29", label: "offline tests, run in CI" },
    ],
    note:
      "The first three numbers come from one eval run: 20 questions about a single 70-page report. Read them as a sanity check, not a benchmark.",
    demo: {
      heading: "What an answer looks like",
      intro:
        "Two exchanges from the demo recording in the README, asked against a 70-page engineering report. The first answer cites its pages. The second question is not covered by the report, so the assistant says so instead of guessing.",
      exchanges: [
        {
          question:
            "What camera module was selected for the microscope, and what is its resolution in megapixels?",
          answer:
            "The Raspberry Pi HQ Camera was selected for the microscope. It has a high resolution of 12.3 megapixels.",
          sources: ["dhm_report.pdf, p. 38", "dhm_report.pdf, p. 63"],
        },
        {
          question: "What's the capital of Mongolia?",
          answer:
            "The provided sources do not contain any information about the capital of Mongolia.",
          abstained: true,
        },
      ],
    },
    steps: {
      heading: "How it works",
      items: [
        {
          title: "Ingest",
          text: "pypdf extracts the text page by page. Each page is split into overlapping chunks of up to 1,200 characters that keep their file name and page number.",
        },
        {
          title: "Index",
          text: "Chunks are embedded locally with all-MiniLM-L6-v2 and stored in a persistent ChromaDB collection that searches by cosine distance.",
        },
        {
          title: "Retrieve",
          text: "For each question the closest chunks (10 by default) are retrieved and numbered as sources.",
        },
        {
          title: "Generate",
          text: "Claude is instructed to use only those sources and to back every claim with a citation and a short quote. The reply must match a JSON schema.",
        },
        {
          title: "Resolve",
          text: "The server maps each citation number to the file and page of the retrieved chunk. An answer with no citations is flagged as not grounded.",
        },
        {
          title: "Serve",
          text: "A FastAPI service handles upload, listing, deletion and questions. A Streamlit chat UI calls it and shows the citations under each answer.",
        },
      ],
    },
    sections: [
      {
        title: "The problem",
        paragraphs: [
          "Long documents such as clinical guidelines, contracts and papers are risky to summarize from memory. A language model answering from its own knowledge can invent a dosage or a clause.",
          "I wanted a service that answers from the uploaded documents and shows where each answer came from, so a reader can check it. When the documents do not hold the answer, it should say so.",
        ],
      },
      {
        title: "Keeping answers grounded",
        paragraphs: ["Three layers keep answers tied to the documents."],
        bullets: [
          "Prompt contract. Claude may use only the numbered sources, must cite one for every claim, and must say so when the sources are not enough.",
          "Structured output. The reply has to match a JSON schema with an answer and a list of citations, so the server never parses free text.",
          "Server-side resolution. Citation numbers are mapped to real files and pages. If nothing is retrieved, the service returns a not-grounded message without calling the model.",
        ],
      },
      {
        title: "Results",
        paragraphs: [
          "I tested it on 20 questions about one 70-page engineering report, which I co-wrote for my undergraduate Digital Holographic Microscope project. The report answers 15 of them and does not answer the other 5.",
          "For 13 of the 15 answerable questions the expected page was among the retrieved chunks. All 5 unanswerable questions were counted as abstentions: the answer came back with no citations or said the sources did not state the fact. Mean time per answer was 4.1 seconds.",
          "The two misses taught me the most. In one, the chunk with the answer ranked 11th because an unrelated paragraph at its start dominated its embedding. In the other, the model answered confidently, with valid citations, from a background passage about an alternative setup that the project did not use. Grounded means the answer came from the document. It does not mean it came from the right passage.",
        ],
      },
      {
        title: "Testing and delivery",
        paragraphs: [
          "29 tests cover chunking, the vector store, the LLM contract and the API. They swap in a deterministic embedding and a fake Claude client, so they run offline with no API key and no model download.",
          "GitHub Actions runs Ruff and pytest on every push to main and on pull requests. Docker Compose starts the API and the UI with one command and keeps the data in a named volume.",
        ],
      },
      {
        title: "Limits and next steps",
        bullets: [
          "Scanned PDFs are rejected. There is no OCR step.",
          "Chunking is by characters, not by tokens or layout, so tables and headers get no special handling.",
          "The quote inside a citation is written by the model and is not yet string-checked against the chunk.",
          "One shared index with no sign-in or per-user isolation. It is a demo, not a multi-tenant service.",
          "The eval is small and hand-built: 20 questions about one document.",
          "Next: quote verification, hybrid BM25 plus dense retrieval with reranking, OCR fallback, streaming answers and LLM-as-judge scoring.",
        ],
      },
    ],
    stack: [
      { group: "Model", items: ["Claude (Anthropic SDK)", "JSON-schema output", "all-MiniLM-L6-v2 embeddings"] },
      { group: "Retrieval and data", items: ["ChromaDB", "pypdf"] },
      { group: "API and UI", items: ["FastAPI", "Pydantic", "Uvicorn", "Streamlit"] },
      { group: "Tooling", items: ["pytest", "Ruff", "GitHub Actions", "Docker Compose"] },
    ],
  },

  "medical-image-classifier": {
    metaDescription:
      "Case study: a PyTorch image classifier served with FastAPI, with shared train/serve preprocessing, Grad-CAM, tests, CI and Docker. Trained on synthetic data.",
    intro:
      "I built an image classification service with PyTorch and FastAPI that returns a prediction, a score for each class and a Grad-CAM heatmap. It is trained on synthetic brain-phantom images and is not for clinical use.",
    role: "Personal project",
    solo: true,
    highlights: [
      { value: "127/135", label: "synthetic test images classified correctly (94%)" },
      { value: "0.94", label: "macro-F1 on the same synthetic test split" },
      { value: "20", label: "automated tests, run in CI" },
      { value: "97,779", label: "model parameters in a 0.4 MB checkpoint" },
    ],
    note:
      "Demo only, not a diagnostic tool. The model is trained and tested on procedurally generated images, not real scans, because the scans from the original project (ADNI PET) are access-restricted. The numbers show that the pipeline works. They say nothing about clinical accuracy.",
    steps: {
      heading: "How it works",
      items: [
        {
          title: "Generate data",
          text: "A seeded generator draws grayscale brain-phantom images in three classes that differ by how much one region is dimmed. The default set is 810 images.",
        },
        {
          title: "Preprocess",
          text: "Grayscale, resize to 128 by 128, percentile scaling, then standardization. Training and serving call the same function.",
        },
        {
          title: "Train",
          text: "A small CNN with four convolution blocks trains on CPU with Adam and early stopping on validation loss.",
        },
        {
          title: "Package",
          text: "The checkpoint stores the weights together with the class order and the normalization statistics, so the server reads them from the file.",
        },
        {
          title: "Predict",
          text: "FastAPI checks each upload, then POST /predict returns the predicted class, a confidence score and a score for every class.",
        },
        {
          title: "Explain",
          text: "A separate POST /explain call returns a Grad-CAM overlay as a PNG, showing which region drove the prediction.",
        },
      ],
    },
    figures: [
      {
        src: "/projects/medical-image-classifier/demo-preview.png",
        alt: "Three panels: a synthetic input image, a bar chart of class scores with Alzheimer's Disease at 96.6 percent, and a Grad-CAM heatmap over the lower region of the image.",
        caption:
          "Output of the committed model on a bundled synthetic sample, rendered with Matplotlib by a script in the repo. The input is a generated phantom, not a real scan.",
        width: 1495,
        height: 598,
        light: true,
        wide: true,
      },
      {
        src: "/projects/medical-image-classifier/confusion-matrix.png",
        alt: "Confusion matrix on the synthetic test set. Cognitively Normal: 45 of 45 correct. Mild Cognitive Impairment: 39 correct, 3 predicted as normal, 3 as Alzheimer's Disease. Alzheimer's Disease: 43 correct, 2 predicted as Mild Cognitive Impairment.",
        caption:
          "Confusion matrix on the 135-image synthetic test split. All 8 errors are between neighboring classes.",
        width: 660,
        height: 600,
        light: true,
      },
    ],
    sections: [
      {
        title: "The problem",
        paragraphs: [
          "This project grew out of an earlier Alzheimer's PET classification project (also on this site) that trained transfer-learning models and stopped at the notebook stage. It does not reuse that data or those models. It builds the part the notebook lacked: a service someone else can run.",
          "The real scans (ADNI) are access-restricted and cannot be redistributed, so the repo generates its own data. The three classes carry the names Cognitively Normal, Mild Cognitive Impairment and Alzheimer's Disease. In this data they differ only by how much one region of the image is dimmed.",
        ],
      },
      {
        title: "What I built",
        paragraphs: [
          "A small PyTorch CNN with a FastAPI service around it. The part I cared about most is consistency between training and serving. Both call the same preprocessing function, and the normalization statistics and class order travel inside the checkpoint, so the server never hard-codes them.",
        ],
        bullets: [
          "POST /predict returns the predicted class, a confidence score, a score for each of the three classes and a disclaimer.",
          "POST /explain returns a Grad-CAM overlay as a PNG. Grad-CAM is implemented with PyTorch hooks, without an external library.",
          "Bad uploads are rejected before inference: wrong type (415), empty file (400), over 10 MB (413) or not a readable image (422).",
          "The API, a command-line script and a Streamlit demo all go through the same Predictor class.",
        ],
      },
      {
        title: "Results",
        paragraphs: [
          "On the held-out synthetic test split (135 images from the same generator, never used in training) the committed model gets 127 right. That is 94% accuracy and a macro-F1 of 0.94, from a single training run with a fixed seed.",
          "Mild Cognitive Impairment, the middle class, is the hardest, with a recall of 0.87. All 8 errors are between neighboring classes. That is expected, because the generator separates the classes along one dimming factor with random jitter that makes neighbors overlap.",
          "These are generated shapes, not real scans. The numbers show that the pipeline works end to end and say nothing about clinical performance.",
        ],
      },
      {
        title: "Testing and delivery",
        paragraphs: [
          "20 pytest tests cover the API, preprocessing, the model and checkpoint, and the predictor with Grad-CAM. The API and predictor tests run against a small untrained checkpoint, so the suite checks shapes, response contracts and error handling, not accuracy. The training and evaluation code is not covered by tests.",
          "GitHub Actions runs Ruff and pytest on Python 3.10 and 3.11 on every push to main and on pull requests, and a second job builds the Docker image. The image runs as a non-root user and has a health check.",
        ],
      },
      {
        title: "Limits and next steps",
        bullets: [
          "Not a diagnostic tool. The model is not clinically validated.",
          "Trained on synthetic data, so the metrics will not transfer to real scans.",
          "The 94% figure comes from one training run on 135 test images, and CI does not re-run training.",
          "Softmax scores are not calibrated probabilities.",
          "Nothing here handles differences between scanners, sites or populations.",
          "Not built yet: transfer-learning backbones, cloud deployment, authentication and rate limiting.",
        ],
      },
    ],
    stack: [
      { group: "Model", items: ["PyTorch", "Custom CNN", "Grad-CAM"] },
      { group: "Data and evaluation", items: ["NumPy", "Pillow", "scikit-learn", "Matplotlib"] },
      { group: "API and demo", items: ["FastAPI", "Pydantic", "Uvicorn", "Streamlit"] },
      { group: "Tooling", items: ["pytest", "Ruff", "GitHub Actions", "Docker"] },
    ],
  },

  driveshare: {
    metaDescription:
      "Case study: DriveShare, a four-person HCI course project for a peer-to-peer parking marketplace. Interviews, Figma prototypes, usability testing and a Next.js site.",
    intro:
      "DriveShare is a concept for a peer-to-peer parking marketplace: homeowners rent out driveways and drivers reserve them. It was a four-person HCI course project. I was the front-end developer and built the project website.",
    role: "Team of four · front-end developer",
    solo: false,
    highlights: [
      { value: "3", label: "prototype rounds: lo-fi, mid-fi and hi-fi" },
      { value: "3", label: "participants in the think-aloud test" },
      { value: "10", label: "Nielsen heuristics in the team's own review" },
      { value: "4", label: "personas: two students and two driveway owners" },
    ],
    note:
      "This is a design project, not a working marketplace. The app exists as Figma prototypes and the website presents the research and design work. The website has no database, booking or payment code.",
    steps: {
      heading: "How the project ran",
      items: [
        {
          title: "Interviews",
          text: "The team ran semi-structured interviews with commuting students. Safety and reliability came out as important as price.",
        },
        {
          title: "Themes and personas",
          text: "Interview notes were grouped into four themes: safety, convenience, interaction and current issues. The team also wrote four personas (two students and two driveway owners), an empathy map and an experience map.",
        },
        {
          title: "Lo-fi prototype",
          text: "The first round was low-fidelity: an early paper prototype and a flow map in Figma. It mainly validated the concept and the task flow.",
        },
        {
          title: "Mid-fi prototype",
          text: "A medium-fidelity Figma prototype for mobile supported the renter side in full and the homeowner listing flow in part.",
        },
        {
          title: "Think-aloud test",
          text: "Three participants, two student commuters and one homeowner, used the prototype while thinking aloud. One change, showing driveway photos earlier in the flow, went straight into the prototype.",
        },
        {
          title: "Hi-fi prototype",
          text: "Before the final version the team reviewed the design against Nielsen's 10 usability heuristics and recorded one issue per heuristic with its fixes. The report says all ten were addressed in the high-fidelity Figma prototype, which has separate renter and homeowner flows.",
        },
      ],
    },
    sections: [
      {
        title: "The problem",
        paragraphs: [
          "Drivers waste time circling for parking while many homeowners have driveway space that sits unused. In the team's interviews, commuting students reported spending roughly 10 to 30 minutes looking for a spot before class.",
          "The idea: homeowners list driveway space for set time windows and drivers reserve a slot. Time-boxed reservations are meant to reduce conflicts and overstays.",
        ],
      },
      {
        title: "My part",
        paragraphs: [
          "I was the front-end developer on a four-person team. I built the project website with Next.js, React, TypeScript and Tailwind CSS, and contributed to the driver and host flow design and the HCI write-ups.",
        ],
        bullets: [
          "A landing page that explains the idea, the three-step journey (search, reserve, park) and the safety approach.",
          "An analysis page with the interview themes, the four personas, the empathy map and the experience map.",
          "A features page with 12 captioned tiles, 6 for drivers and 6 for homeowners.",
          "A deliverables page that links six course documents, the FigJam board and two videos, and a team page with a profile for each member.",
        ],
      },
      {
        title: "What testing changed",
        paragraphs: [
          "The think-aloud sessions produced one immediate change and a list of refinement goals: buffer and extension time after booking, in-app messaging, safety verification indicators, multiple photos per listing and pricing suggestions.",
          "The high-fidelity prototype's README lists smart pricing suggestions and enhanced safety and verification among its additions. The prototype also gives homeowners a full flow: list a driveway, upload photos, add safety tags, set availability and pricing, and view a dashboard.",
        ],
      },
      {
        title: "Limits",
        bullets: [
          "This is a design project. Prototype functionality is not real: nothing is saved, booked or paid for.",
          "The landing and features pages describe the intended product, including in-app payment and host payouts. The website itself takes no payments. Its listings are placeholder text and the request-demo form does not submit anywhere.",
          "The feature images are generated concept images, not screenshots of an app.",
          "Usability testing was small and qualitative. The documented think-aloud round had three participants.",
          "The heuristic review was done by the team itself, not by outside evaluators.",
        ],
      },
    ],
    stack: [
      { group: "Website", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Biome"] },
      { group: "Design and research", items: ["Figma", "FigJam", "Paper prototyping", "Think-aloud testing", "Heuristic evaluation"] },
    ],
  },
};

export type CaseStudyEntry = {
  project: Project & { slug: string };
  study: CaseStudy;
};

// Every project that has both a slug and a case study, in the order of
// the projects list in lib/data.ts.
export function caseStudyList(): CaseStudyEntry[] {
  return projects.flatMap((project) => {
    const study = project.slug ? caseStudies[project.slug] : undefined;
    return project.slug && study
      ? [{ project: { ...project, slug: project.slug }, study }]
      : [];
  });
}

export function getCaseStudy(slug: string): CaseStudyEntry | null {
  return caseStudyList().find((e) => e.project.slug === slug) ?? null;
}

// Stop the build if the two files disagree, instead of publishing a card
// that links to a page that does not exist.
for (const p of projects) {
  if (p.slug && !caseStudies[p.slug]) {
    throw new Error(`lib/case-studies.ts has no entry for the project slug "${p.slug}"`);
  }
}
for (const slug of Object.keys(caseStudies)) {
  if (!projects.some((p) => p.slug === slug)) {
    throw new Error(`lib/case-studies.ts has "${slug}", but no project in lib/data.ts uses that slug`);
  }
}
