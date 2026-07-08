# Rustam Mukhtarov — Personal Portfolio

This is my personal portfolio website showcasing my work in applied machine learning, computer vision, AI product engineering, and human-AI interaction.

Live Site: https://rustam-site.vercel.app/  
GitHub Profile: https://github.com/Rustam751  
LinkedIn: https://www.linkedin.com/in/russmukhtar/

---

## About

I am Rustam “Russ” Mukhtarov, an M.S. candidate in Artificial Intelligence & Data Science at San Francisco State University.

My work focuses on:

- Applied machine learning
- Computer vision
- Medical imaging
- UAV / robotics systems
- Human-AI product prototypes
- Full-stack AI applications

This portfolio is designed to present my projects, technical background, experience, and contact information in one place.

---

## Featured Work

### RAG Document Assistant
Production-style retrieval-augmented generation system for medical, legal, and academic PDFs. Every answer is grounded in cited sources (file + page + verbatim quote), and the model abstains instead of guessing when documents don't contain the answer.

Stack: Python, FastAPI, ChromaDB, Anthropic Claude API, Streamlit, Docker, GitHub Actions
Focus: RAG, grounded generation, hallucination guards, LLM evaluation, API engineering
Results: 0.87 retrieval hit rate, 100% abstention on unanswerable questions, and zero fabricated facts on a 20-question benchmark — with documented failure analysis of the two retrieval misses
Solo project: designed, built, tested (29 offline tests + CI), evaluated, and deployed end-to-end

Repository: https://github.com/Rustam751/rag-document-assistant

### Alzheimer’s PET Classification

Deep learning project for classifying Alzheimer’s disease stages from PET images using transfer learning models such as VGG16, InceptionV3, and ResNet50.

Repository: https://github.com/Abdoul1996/Alzheimer_Classification

---

### DriveShare

A peer-to-peer driveway rental marketplace prototype where homeowners can list unused driveway space and drivers can reserve affordable parking.

Live Demo: https://driveshare-app.vercel.app/  
Repository: https://github.com/Rustam751/driveshare-app

---

### DroneHunter / UAV Detection

Computer vision and UAV robotics project involving object detection, tracking, and autonomous mission support.

Repository: https://github.com/keremtatlici/dronehunter_teknofest2023

---

### Tennis Court Line Detection

Image-processing project for detecting tennis court lines using computer vision algorithms.

Repository: https://github.com/mucahitkalebasi/tennis-line-detection-img-processing

---

## Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **Frontend:** React, Tailwind CSS
- **Animation:** Framer Motion
- **Deployment:** Vercel

---

## Project Structure

```text
rustam-site/
├── app/
│   ├── components/
│   ├── projects/
│   ├── experience/
│   ├── about/
│   └── page.tsx
├── lib/
│   └── data.ts
├── public/
│   ├── headshot.jpg
│   └── resume/
├── package.json
└── README.md
