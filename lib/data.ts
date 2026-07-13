// lib/data.ts

export const profile = {
  name: "Rustam (Russ) Mukhtarov",
  firstName: "Russ",
  title: "ML/AI Engineer & M.S. Candidate in AI/Data Science",
  tagline: "I build deployable AI systems",
  summary:
    "I build practical AI/ML systems across RAG, computer vision, and medical imaging — and turn models into usable software: APIs, evaluation pipelines, Dockerized services, and clean interfaces.",
  status: "Open to ML/AI Engineer & Data Scientist roles — SF Bay Area / remote",
  location: "San Francisco, CA",
  email: "rmukhtarov@sfsu.edu",
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
  name: string;
  period: string;
  blurb: string;
  impact?: string;
  bullets: string[];
  tags: string[];
  links: ProjectLink[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "RAG Document Assistant",
    period: "Jul 2026",
    blurb:
      "Production-style RAG system for domain PDFs: FastAPI, ChromaDB, and Claude with schema-constrained generation. Answers are grounded in per-claim citations and the system abstains when the documents don't contain the answer.",
    impact: "0 fabricated facts · 100% abstention on unanswerable questions",
    bullets: [
      "Three-layer hallucination guard: grounding prompt contract, JSON-schema output enforcement, server-side citation validation.",
      "Evaluation harness over a 70-page report: 0.87 retrieval hit rate, 100% abstention accuracy, ~4s mean latency.",
      "29 offline tests with injected fake LLM/embedding clients; CI on every push; one-command Docker Compose deploy.",
    ],
    tags: ["RAG", "FastAPI", "ChromaDB", "Claude API", "Docker", "CI", "Evaluation"],
    links: [
      { label: "GitHub", href: "https://github.com/Rustam751/rag-document-assistant" },
    ],
    featured: true,
  },
  {
    name: "Medical Image Classifier API",
    period: "Jun 2026",
    blurb:
      "Production-style PyTorch image classification service: shared train/serve preprocessing, FastAPI inference with Grad-CAM explanations, and honest evaluation on a reproducible synthetic benchmark (non-clinical).",
    impact: "94% accuracy / 0.94 macro-F1 on reproducible benchmark",
    bullets: [
      "Self-describing model checkpoint + shared preprocessing pipeline to eliminate train/serve skew.",
      "REST API returns predicted class, full probability distribution, and Grad-CAM heatmaps with input validation.",
      "Docker + GitHub Actions CI with 20 automated tests and linting; plug-in ImageFolder interface for real datasets.",
    ],
    tags: ["PyTorch", "FastAPI", "Medical Imaging", "Grad-CAM", "Docker", "CI"],
    links: [
      { label: "GitHub", href: "https://github.com/Rustam751/medical-image-classifier" },
    ],
    featured: true,
  },
  {
    name: "DriveShare – App & Website",
    period: "Jan – May 2025",
    blurb:
      "Peer-to-peer parking marketplace: homeowners rent driveways; drivers book affordable spots.",
    impact: "Two-sided marketplace, web + mobile",
    bullets: [
      "Built website + mobile prototype with Next.js/Tailwind + PostgreSQL backend: listings, location-based search, bookings, payments.",
      "Designed driver/homeowner flows, Figma wireframes; iterative usability testing.",
    ],
    tags: ["Next.js", "Tailwind", "PostgreSQL", "Figma"],
    links: [
      { label: "Live demo", href: "https://driveshare-app.vercel.app/" },
      { label: "GitHub", href: "https://github.com/Rustam751/driveshare-app" },
    ],
    featured: true,
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
