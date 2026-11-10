// lib/data.ts

// The public address of the site. Used for canonical links, the sitemap,
// share previews and structured data.
export const siteUrl = "https://mukhtarov.dev";

export const profile = {
  name: "Rustam (Russ) Mukhtarov",
  firstName: "Russ",
  title: "ML/AI Engineer & M.S. Candidate in AI/Data Science",
  tagline: "I build deployable AI systems",
  summary:
    "I build practical AI/ML systems across RAG, computer vision, and medical imaging — and turn models into usable software: APIs, evaluation pipelines, Dockerized services, and clean interfaces.",
  status: "Open to ML/AI Engineer & Data Scientist roles — SF Bay Area / remote",
  location: "San Francisco, CA",
  email: "rustam@mukhtarov.dev",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/russmukhtar" },
    { label: "GitHub", href: "https://github.com/Rustam751" },
    { label: "Resume (PDF)", href: "/resume/Russ_Mukhtar_CV.pdf" },
  ],
  headshot: "/headshot.jpg",
};

// Headline numbers for the hero / about
export const stats = [
  { value: "2", label: "Production-style AI services (Docker + CI)" },
  { value: "49", label: "Automated tests passing in CI" },
  { value: "1st", label: "Place, Int'l UAV competition" },
  { value: "30+", label: "Students supported as a TA" },
];

export const skills = {
  "LLM & GenAI": [
    "RAG Pipelines",
    "Claude API",
    "LangChain",
    "LlamaIndex",
    "Hugging Face",
    "ChromaDB",
    "FAISS",
    "Prompt Engineering",
    "Fine-tuning (LoRA/QLoRA)",
    "LLM Evaluation",
  ],
  "AI / ML": [
    "PyTorch",
    "TensorFlow",
    "Scikit-learn",
    "MONAI",
    "Computer Vision",
    "OpenCV",
    "YOLO",
    "Transfer Learning",
    "3D U-Net",
    "Grad-CAM Explainability",
  ],
  "Engineering & MLOps": [
    "Python",
    "TypeScript",
    "C++",
    "SQL",
    "FastAPI",
    "Flask",
    "Next.js",
    "React",
    "PostgreSQL",
    "Docker",
    "GitHub Actions (CI)",
    "pytest",
    "Git",
    "Linux",
  ],
  Languages: [
    "English (Fluent)",
    "Russian (Fluent)",
    "Turkish (Fluent)",
    "Azerbaijani (Fluent)",
    "Spanish (Beginner)",
  ],
};

export const experience = [
  {
    role: "Graduate Researcher — Medical Imaging (Thesis)",
    company: "San Francisco State University",
    location: "San Francisco, CA",
    period: "Aug 2025 – Present",
    bullets: [
      "Developing a 3D deep learning pipeline (PyTorch, MONAI) for automated segmentation of micro-CT data; targeting ≥0.85 Dice with a custom 3D U-Net.",
      "Extracting medial-axis centerlines with curvature, radius, and torsion descriptors using VTK, VMTK, and SciPy.",
      "Building a Python shape-analysis toolkit for segment classification and biomechanical modeling; reproducible, simulation-ready dataset.",
    ],
  },
  {
    role: "Teaching Assistant — Theory of Computing",
    company: "San Francisco State University",
    location: "San Francisco, CA",
    period: "Aug 2024 – Dec 2024",
    bullets: [
      "Supported 30+ students in automata, formal languages, and computational complexity.",
      "Led Python setup/tutorials; assisted with grading workflows and course materials.",
    ],
  },
  {
    role: "AI Team Lead",
    company: "RevSolz Corp.",
    location: "Calgary, AB (Remote)",
    period: "Jul 2020 – Jul 2023",
    bullets: [
      "Led a team of 4 data science interns building and deploying ML pipelines for oil-industry operational data; 98% accuracy in efficiency identification.",
      "Designed end-to-end pipelines (preprocessing, feature engineering, training, deployment) — cut deployment time by 20%.",
      "Mentored interns in ML best practices; 2 received part-time offers based on their contributions.",
    ],
    link: "https://revsolz.com/",
  },
];

export const education = [
  {
    degree: "M.S., Artificial Intelligence & Data Science (in progress)",
    school: "San Francisco State University",
    location: "San Francisco, CA",
    period: "Expected Dec 2026",
    details: [
      "Graduate Thesis: AI-Assisted Medial-Axis Modeling of the Human Fallopian Tube (Advisor: Prof. Kazunori Okada)",
      "Building a 3D U-Net (PyTorch/MONAI) and a Python analysis toolkit (VTK/VMTK/SciPy)",
    ],
  },
  {
    degree: "B.S., Mechatronics Engineering",
    school: "Yildiz Technical University",
    location: "Istanbul, Turkey",
    period: "Jun 2023",
    details: [
      "Digital Holographic Microscope (Raspberry Pi 4 + PyQt5); received faculty recognition",
    ],
  },
];

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  // Set a slug to give the project its own page at /projects/<slug>.
  // The page text lives in lib/case-studies.ts under the same slug. The two
  // must match, or the site stops with an error that names the missing half.
  slug?: string;
  name: string;
  period: string;
  blurb: string;
  impact?: string;
  // Not shown anywhere on the site at the moment (cards show the name,
  // period, impact, blurb, tags and links). The text is still sent in the
  // page source, so keep it accurate.
  bullets: string[];
  tags: string[];
  links: ProjectLink[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "rag-document-assistant",
    name: "RAG Document Assistant",
    period: "Jul 2026",
    blurb:
      "Production-style RAG system for domain PDFs: FastAPI, ChromaDB, and Claude with schema-constrained generation. Answers are grounded in per-claim citations and the system abstains when the documents don't contain the answer.",
    impact: "Abstained on 5/5 unanswerable questions; 13/15 retrieval hits (20-question eval)",
    bullets: [
      "Three-layer hallucination guard: grounding prompt contract, JSON-schema output enforcement, server-side citation resolution.",
      "Evaluation harness over a 70-page report: 0.87 retrieval hit rate, 100% abstention accuracy, ~4s mean latency.",
      "29 offline tests with injected fake LLM/embedding clients; CI on every push; one-command Docker Compose deploy.",
    ],
    tags: ["RAG", "FastAPI", "ChromaDB", "Claude API", "Docker", "CI", "Evaluation", "LLM"],
    links: [
      { label: "GitHub", href: "https://github.com/Rustam751/rag-document-assistant" },
      { label: "Docs", href: "https://rag.mukhtarov.dev" },
    ],
    featured: true,
  },
  {
    slug: "medical-image-classifier",
    name: "Medical Image Classifier API",
    period: "Jun 2026",
    blurb:
      "Production-style PyTorch image classification service: shared train/serve preprocessing, FastAPI inference with Grad-CAM explanations, and honest evaluation on a reproducible synthetic benchmark (non-clinical).",
    impact: "94% accuracy / 0.94 macro-F1 on 135 synthetic test images",
    bullets: [
      "Self-describing model checkpoint + shared preprocessing pipeline to eliminate train/serve skew.",
      "REST API returns predicted class, full probability distribution, and Grad-CAM heatmaps with input validation.",
      "Docker + GitHub Actions CI with 20 automated tests and linting; plug-in ImageFolder interface for real datasets.",
    ],
    tags: ["PyTorch", "FastAPI", "Medical Imaging", "Grad-CAM", "Docker", "CI"],
    links: [
      { label: "GitHub", href: "https://github.com/Rustam751/medical-image-classifier" },
      { label: "Docs", href: "https://classifier.mukhtarov.dev" },
    ],
    featured: true,
  },
  {
    slug: "driveshare",
    name: "DriveShare",
    period: "Fall 2025",
    blurb:
      "Concept and prototype for a peer-to-peer parking marketplace: homeowners rent out driveways and drivers reserve them. A four-person HCI course project that went from student interviews to Figma prototypes. I built the project website.",
    impact: "Team project: three prototype rounds and a 3-participant think-aloud test",
    bullets: [
      "Front-end developer on a four-person team: built the project website with Next.js, React, TypeScript and Tailwind CSS.",
      "The team ran student interviews, made a paper prototype and then mid-fi and hi-fi Figma prototypes, and tested the mid-fi version with three think-aloud participants.",
    ],
    tags: ["Next.js", "Tailwind", "Figma", "HCI"],
    links: [
      { label: "Project site", href: "https://driveshare.mukhtarov.dev/" },
      { label: "GitHub", href: "https://github.com/Rustam751/driveshare-app" },
    ],
    featured: true,
  },
  {
    name: "Job Search Agent",
    period: "Sep 2026 – Present",
    blurb:
      "A daily pipeline for my own job search, built with Claude Code. A Python script queries about 300 public job boards. LLM agents score the postings against my résumé and draft tailored applications. Nothing is submitted until I approve that exact draft.",
    impact: "Every claim in a tailored résumé must trace back to my master résumé",
    bullets: [
      "A deterministic guard rejects numbers, skills and dates in the tailored résumé that are not in the master résumé; an adversarial LLM fact-check looks for what rules cannot catch.",
      "My approval is stored with a hash of the checked application. If the drafted content changes afterwards, the submit gate refuses until I approve again.",
      "The submit agent is told to stop at visible CAPTCHAs, account creation, passwords and verification codes. On portals that need an account, I apply myself.",
    ],
    tags: ["LLM", "Agents", "Claude Code", "Python", "Guardrails"],
    links: [
      { label: "GitHub", href: "https://github.com/Rustam751/job-search-agent" },
      { label: "Docs", href: "https://jobs.mukhtarov.dev" },
    ],
  },
  {
    name: "Raspberry Pi Homelab",
    period: "May 2026 – Present",
    blurb:
      "A Raspberry Pi running Docker hosts Home Assistant and a handful of self-hosted apps on a private subnet. Web services sit behind a Caddy reverse proxy and are reachable remotely only over Tailscale. Watchdogs, integrity-checked backups and docs that regenerate their live sections every night keep it maintainable.",
    impact: "No ports opened to the internet",
    bullets: [],
    tags: ["Self-hosting", "Docker", "Linux", "Networking", "Home Assistant", "Tailscale"],
    links: [],
  },
  {
    name: "Alzheimer's PET Classification",
    period: "Aug – Dec 2024",
    blurb:
      "Transfer-learning pipelines (VGG16, InceptionV3, ResNet50) for staging Alzheimer's from PET scans.",
    impact: "Up to 95% classification accuracy",
    bullets: [
      "Rigorous preprocessing, augmentation, and evaluation protocols across 4 disease stages.",
      "Schedulers & gradient clipping for efficient, stable training under class imbalance.",
    ],
    tags: ["PyTorch", "TensorFlow", "Medical Imaging"],
    links: [
      { label: "GitHub", href: "https://github.com/Abdoul1996/Alzheimer_Classification" },
    ],
  },
  {
    name: "DroneX (UAV Team)",
    period: "Sep 2022 – Jun 2023",
    blurb:
      "Real-time YOLOv4-tiny detection & avoidance for autonomous UAVs, validated in simulation and field.",
    impact: "1st place — International UAV competition",
    bullets: [
      "Field data collection + Gazebo simulations; tuned detection accuracy.",
      "Integrated detection with DroneKit flight control for live avoidance.",
    ],
    tags: ["YOLO", "Gazebo", "DroneKit"],
    links: [
      { label: "Instagram", href: "https://www.instagram.com/dronex_uav/" },
    ],
  },
  {
    name: "AI Chatbot Web App",
    period: "Jan 2025 – Present",
    blurb:
      "Full-stack conversational AI web app focused on UI/interaction quality over model complexity.",
    bullets: [
      "Backend in Flask; integrated Google's Gemma for dynamic responses via the Generative AI API.",
      "Custom HTML/CSS/JS front-end with conversation pacing, emotional tone feedback, and visual cues.",
    ],
    tags: ["Flask", "Gemma", "Web UI", "LLM"],
    links: [],
  },
];
