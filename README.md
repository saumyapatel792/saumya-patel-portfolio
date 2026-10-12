# Saumya Alpesh Patel — Professional AI & Data Science Portfolio Website

[![Live Demo](https://img.shields.io/badge/Live%20Demo-saumya--patel--portfolio.vercel.app-0070f3.svg?style=flat-square&logo=vercel)](https://saumya-patel-portfolio.vercel.app/)
[![React](https://img.shields.io/badge/React-18.3-61dafb.svg?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6.svg?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.1-646cff.svg?style=flat-square&logo=vite)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

> **"Building Intelligent Solutions with Data & AI."**  
> Complete personal portfolio of **Saumya Alpesh Patel**, Data Science postgraduate student at Alliance University, Bengaluru. Showcasing applied machine learning architectures, NLP triage systems, clinical decision-support algorithms, enterprise Power BI analytics, and end-to-end MLOps pipelines.

**Live Website:** [https://saumya-patel-portfolio.vercel.app/](https://saumya-patel-portfolio.vercel.app/)

---

## Key Sections & Features

1. **Hero & Dynamic AI Network Canvas**: Interactive 2D neural network canvas built on HTML5 Canvas API, featuring real-time node interconnectivity, availability status, and resume download triggers.
2. **About Me**: Verified background narrative, academic standing (M.Sc. GPA 9.6, B.Sc. GPA 8.71), co-authored IFERP conference research, and validated C1 language proficiencies.
3. **Curated Technical Skills**: Structured into 5 functional domains (Programming & Data Analysis, Machine Learning & AI, NLP & Generative AI, BI & Analytics, Deployment & Tools) with zero artificial percentage bars.
4. **Professional Experience**: Detailed timelines for internships at **Prodigy InfoTech** and **Cognifyz Technologies**, highlighting forecast improvements, 6 Tableau dashboards, and 15+ core sales KPIs.
5. **Interactive Project Case Studies & System Visuals**:
   - **Aegis AI**: Multi-department civic grievance NLP routing platform with real-time sentiment polarity scoring (92% accuracy across 5 departments, 40% turnaround reduction).
   - **Obstructive Sleep Apnea Decision Support**: Clinical risk prediction framework using Random Forest & Gradient Boosting with SHAP feature-level explainability (89% F1-score).
   - **Executive Insurance BI Intelligence Hub**: Enterprise Power BI dashboard monitoring $10M+ in policy volume powered by 25+ customized DAX measures.
   - **India Open Government Data (OGD) Audit**: Metadata and coverage exploration of 500+ public datasets across 12 sectors.
   - **End-to-End MLOps Pipeline**: Reproducible pipeline using ZenML DAG orchestration, MLflow experiment tracking, and Docker containerization.
6. **Academic Pedigree & Certifications**:
   - M.Sc. Data Science (Alliance University) & B.Sc. IT (Lok Jagruti University).
   - DATA BLITZ Excel Challenge 2026 Winner.
   - Verified credentials: Microsoft PL-300, AI-900, DeepLearning.AI Deep Learning Specialization, Google AI Essentials, SQL for Data Science (UC Davis), and Infosys Data Modeling.
7. **Thought Leadership**: Medium writing portal (`@psaumya567`) detailing applied AI concepts and lessons from production systems.
8. **Curriculum Vitae**: Dedicated resume viewing and download section powered by the actual `Saumya_Patel_Resume.pdf`.
9. **Direct Contact**: Interactive communication interface featuring one-click email copying and direct mail message generation without exposing secret API keys.

---

## Tech Stack & Architecture

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite 6 (sub-second HMR and optimized production bundles)
- **Styling Architecture**: Tailored modern CSS design system with CSS custom properties, dark-theme surfaces, glassmorphism, responsive grids, and reduced-motion accessibility
- **Icons**: Lucide React
- **Micro-Interactions**: Canvas Confetti & HTML5 Canvas

---

## Running Locally

### Prerequisites
- Node.js (v18.0.0 or later, v24+ recommended)
- npm (v9.0.0 or later)

### Steps
```bash
# 1. Clone repository
git clone https://github.com/saumyapatel792/saumya-patel-portfolio.git
cd saumya-patel-portfolio

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Open in browser
# http://localhost:5173
```

### Production Build & Preview
```bash
# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## How to Update Content & Resume

### 1. Update Project Information, Skills, or Certifications
All portfolio data is centrally maintained in:
`src/data/portfolioData.ts`
Edit projects, metrics, or personal details in this single file, and the entire website updates automatically.

### 2. Update Resume PDF
Replace the file at:
`public/Saumya_Patel_Resume.pdf`
The download links and embedded viewers in the site reference this path.

---

## Live Deployment on Vercel

The portfolio is deployed live on Vercel with automated CI/CD continuous deployment:

- **Production URL**: [https://saumya-patel-portfolio.vercel.app/](https://saumya-patel-portfolio.vercel.app/)
- **Repository**: [https://github.com/saumyapatel792/saumya-patel-portfolio](https://github.com/saumyapatel792/saumya-patel-portfolio)

Whenever you commit and push updates to the `main` branch, Vercel automatically rebuilds and redeploys the site worldwide within seconds.
