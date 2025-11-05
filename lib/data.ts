// lib/data.ts

export const profile = {
  name: "Rustam (Russ) Mukhtarov",
  title: "AI Product Engineer & M.S. Candidate in AI/Data Science",
  summary:
    "I build human–AI products and fast prototypes. I care about usable, delightful interfaces, tight iteration loops, and shipping things that help people do more with AI.",
  location: "San Francisco, CA",
  email: "rmukhtarov@sfsu.edu",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/russmukhtar" },
    { label: "GitHub", href: "https://github.com/Rustam751" },
    { label: "Resume (PDF)", href: "/resume/Russ_Mukhtar_CV.pdf" },
  ],
  headshot: "/headshot.jpg",
};

export const skills = {
  core: [
    "Product Prototyping",
    "Full-Stack Development",
    "Human-AI Interaction",
    "UX Design",
    "Rapid Iteration",
    "AI Integration",
  ],
  ai: ["Deep Learning", "PyTorch", "TensorFlow", "Computer Vision", "OpenCV", "YOLO", "Transfer Learning"],
  programming: ["Python", "JavaScript", "TypeScript", "C++", "SQL", "HTML/CSS", "Bash", "Git", "Docker", "Linux"],
  tools: ["Flask", "React", "Next.js", "TailwindCSS", "MATLAB", "Gazebo", "Ansys", "PyQt5", "Raspberry Pi"],
  languages: ["English (Fluent)", "Russian (Fluent)", "Turkish (Fluent)", "Azerbaijani (Fluent)", "Spanish (Beginner)"],
};

export const experience = [
  {
    role: "Teaching Assistant",
    company: "San Francisco State University",
    location: "San Francisco, CA",
    period: "Aug 2024 – Present",
    bullets: [
      "Led Python setup/tutorials for Theory of Computing; improved course readiness.",
      "Provided lab support and clarifications on theoretical concepts.",
      "Helped create materials and grading workflows for 30+ students.",
    ],
  },
  {
    role: "AI Team Lead",
    company: "RevSolz Corp.",
    location: "Calgary, AB (Remote)",
    period: "Jul 2020 – Jul 2023",
    bullets: [
      "Led data science interns analyzing oil-industry data; 98% accuracy on ops signals.",
      "Built ML pipelines that increased accuracy and reduced deployment time by 20%.",
      "Mentored interns; two received part-time offers based on performance.",
    ],
    link: "https://revsolz.com/",
  },
];

export const education = [
  {
    degree: "M.S., Artificial Intelligence & Data Science (in progress)",
    school: "San Francisco State University",
    location: "San Francisco, CA",
    period: "Expected May 2026",
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
    details: ["Digital Holographic Microscope (Raspberry Pi 4 + PyQt5); received faculty recognition"],
  },
];

export const projects = [
  {
    name: "AI Chatbot Web App",
    period: "May 2025 – Present",
    blurb:
      "Full-stack conversational AI web app focused on UI/interaction quality over model complexity.",
    bullets: [
      "Backend in Flask; integrated Google’s Gemma for dynamic responses.",
      "Custom HTML/CSS/JS front-end with conversation pacing and visual cues.",
    ],
    tags: ["Flask", "Gemma", "Web UI", "LLM"],
    link: "#",
  },
  {
    name: "DriveShare – App & Website",
    period: "May 2025 – Present",
    blurb:
      "Peer-to-peer parking: homeowners rent driveways; drivers book affordable spots.",
    bullets: [
      "Built website + mobile prototype with Next.js/Tailwind + PostgreSQL backend.",
      "Designed driver/homeowner flows, Figma wireframes; iterative usability testing.",
    ],
    tags: ["Next.js", "Tailwind", "PostgreSQL", "Figma"],
    link: "https://driveshare-app.vercel.app/",
  },
  {
    name: "Alzheimer’s PET Classification",
    period: "Aug 2024 – Dec 2024",
    blurb: "Transfer-learning (VGG16, InceptionV3, ResNet50) on PET scans; up to 98% accuracy.",
    bullets: [
      "Rigorous preprocessing, augmentation, and evaluation protocols.",
      "Schedulers & gradient clipping for efficient training.",
    ],
    tags: ["PyTorch", "TensorFlow", "Medical Imaging"],
    link: "https://github.com/Abdoul1996/Alzheimer_Classification",
  },
  {
    name: "DroneX (UAV Team)",
    period: "Sep 2022 – Jun 2023",
    blurb:
      "YOLOv4-tiny real-time detection/avoidance; 1st place in International UAV competition.",
    bullets: ["Field data collection + Gazebo simulations; tuned detection accuracy."],
    tags: ["YOLO", "Gazebo", "DroneKit"],
    link: "https://www.instagram.com/dronex_uav/",
  },
];
