import { Project, Experience, Education, SkillCategory, Certification, Achievement } from '../types';

export const personalInfo = {
  name: "Saumya Alpesh Patel",
  shortName: "Saumya Patel",
  title: "Data Science | Artificial Intelligence | Machine Learning | Generative AI",
  headline: "Building Intelligent Solutions with Data & AI.",
  subHeadline: "I'm Saumya Patel, a Data Science postgraduate student passionate about machine learning, NLP, Generative AI, and transforming data into practical, impactful applications.",
  location: "Bengaluru, Karnataka, India",
  email: "psaumya567@gmail.com",
  phone: "+91 9137676144",
  phoneFormatted: "+91 91376 76144",
  github: "https://github.com/saumyapatel792",
  linkedin: "https://linkedin.com/in/saumya-patel-dev",
  medium: "https://medium.com/@psaumya567",
  resumePath: "/Saumya_Patel_Resume.pdf",
  availabilityStatement: "Open to Data Science, Machine Learning, AI Engineering, and Data Analytics opportunities.",
  aboutStory: `I am pursuing an M.Sc. in Data Science at Alliance University, Bengaluru. My interests span machine learning, deep learning, natural language processing, Generative AI, and data analytics. Through internships and hands-on projects, I have explored the complete process of working with data—from preprocessing and exploratory analysis to model development, evaluation, API integration, and interactive applications.

I enjoy solving practical problems, experimenting with new technologies, and building systems that make data more useful for real-world decisions. I am looking for opportunities where I can contribute, collaborate, and grow as an AI and Data Science professional.`,
  languages: [
    { language: "English", proficiency: "Advanced (C1)" },
    { language: "Hindi", proficiency: "Advanced (C1)" },
    { language: "Gujarati", proficiency: "Advanced (C1)" }
  ]
};

export const projectsData: Project[] = [
  {
    id: "aegis-ai-grievance-triage",
    title: "Aegis AI: Civic Grievance & Sentiment Triage",
    subtitle: "AI Government Grievance & Sentiment Triage Platform",
    category: "NLP & GenAI",
    featured: true,
    tagline: "Multi-department NLP complaint routing with real-time sentiment polarity urgency scoring.",
    problemStatement: "Civic governance departments receive tens of thousands of unstructured citizen grievances daily. Manual triage creates resolution bottlenecks, departmental misrouting, and delayed interventions for urgent civic hazards.",
    projectObjective: "Engineer a high-throughput, automated NLP triage engine that classifies complaints into responsible municipal departments, scores urgency via real-time sentiment polarity, and exposes RESTful APIs for citizen, officer, and auditor roles.",
    myContribution: [
      "Built the end-to-end NLP preprocessing and feature extraction pipeline using TF-IDF vectorization.",
      "Trained and tuned a multi-class Logistic Regression classifier evaluated against departmental test sets.",
      "Implemented a real-time sentiment polarity engine using compound polarity metrics to flag critical urgency cases.",
      "Architected a three-tier stakeholder workflow (Citizen filing, Officer triage & resolution, Auditor oversight).",
      "Deployed scalable FastAPI endpoints with sub-100ms response latency paired with an interactive Streamlit triage application."
    ],
    dataset: "Curated civic grievance complaints dataset categorized across 5 municipal departments with multi-severity tagging.",
    techStack: ["Python", "NLP", "TF-IDF", "Logistic Regression", "FastAPI", "Streamlit", "Scikit-learn"],
    methodology: "Text Preprocessing (Regex sanitization, Tokenization, Lemmatization, Stopword removal) -> TF-IDF Vectorization with n-gram weighting -> Multi-class Logistic Regression with class-balance calibration -> Compound sentiment polarity scoring -> FastAPI service routing -> Streamlit interactive console.",
    keyImplementationDetails: [
      "5-Department classification: Public Works, Water Supply, Sanitation, Power/Electricity, and Public Health.",
      "Urgency triage matrix: Combines negative sentiment intensity and emergency keyword triggers to auto-escalate priority.",
      "FastAPI REST endpoints: /predict_department, /analyze_urgency, and /health status endpoints.",
      "Role-based UI: Streamlit views tailored for Citizen grievance submission, Officer case resolution, and Auditor governance metrics."
    ],
    resultsAndMetrics: [
      {
        label: "Classification Accuracy",
        value: "92%",
        detail: "Achieved across 5 government department categories (project-reported benchmark)."
      },
      {
        label: "Turnaround Time Reduction",
        value: "40%",
        detail: "Projected reduction in grievance routing latency via automated triage."
      },
      {
        label: "Inference Latency",
        value: "<80ms",
        detail: "FastAPI REST endpoint response time per incoming complaint payload."
      }
    ],
    whatILearned: [
      "Strategies for text normalization and handling sparse matrix representations in production TF-IDF pipelines.",
      "Techniques for calibrating probability outputs in multi-class linear classifiers.",
      "Best practices for designing decoupled machine learning microservices with FastAPI and interactive UI prototypes in Streamlit."
    ],
    githubUrl: "https://github.com/saumyapatel792",
    visualType: "grievance",
    badgeNote: "Primary Featured Case Study (Project-Reported Results)"
  },
  {
    id: "sleep-apnea-decision-support",
    title: "Obstructive Sleep Apnea Decision Support",
    subtitle: "Interpretable Clinical ML Screening & SHAP Diagnostic Insights",
    category: "AI/ML",
    featured: true,
    tagline: "Clinical risk prediction framework leveraging Random Forest and SHAP feature-level attribution.",
    problemStatement: "In-laboratory polysomnography is resource-intensive, expensive, and subject to prolonged wait times. Clinicians need interpretable preliminary risk estimation tools to prioritize high-risk patients without relying on opaque 'black-box' predictions.",
    projectObjective: "Develop a robust, interpretable decision-support machine learning framework to estimate Obstructive Sleep Apnea (OSA) severity and risk, substantiated with patient-level SHAP explanation plots for clinician confidence.",
    myContribution: [
      "Performed data cleansing, missing value imputation, and correlation analysis on patient physiological features.",
      "Formulated and benchmarked ensemble classification architectures comparing Random Forest and GradientBoostingClassifier.",
      "Engineered clinical features capturing non-linear interactions between BMI, neck circumference, and respiratory indicators.",
      "Integrated SHAP (TreeExplainer) to generate both global feature rankings and individual patient waterfall explanations.",
      "Constructed an intuitive clinician-facing Streamlit application featuring live parameter inputs and instant explanation visuals."
    ],
    dataset: "Clinical sleep study patient cohort dataset containing demographic, anthropometric, and physiological screening features.",
    techStack: ["Python", "Scikit-learn", "Random Forest", "Gradient Boosting", "SHAP", "Streamlit", "Pandas", "NumPy"],
    methodology: "Data Cleaning & Imputation -> Standardized Scaling -> Stratified K-Fold Cross-Validation -> Hyperparameter Optimization -> Ensemble Model Selection -> SHAP TreeExplainer calculation -> Streamlit interactive clinical portal.",
    keyImplementationDetails: [
      "Comparative modeling: Random Forest achieved superior sensitivity while Gradient Boosting balanced precision.",
      "SHAP diagnostic transparency: Visualizes exact positive and negative SHAP force values for each clinical factor per patient.",
      "Clinical risk tiering: Flags Mild, Moderate, and Severe OSA risk zones with corresponding probability confidence intervals.",
      "Clinician note: Explicitly designed as an educational decision-support tool, never a substitute for certified medical diagnosis."
    ],
    resultsAndMetrics: [
      {
        label: "F1-Score",
        value: "89%",
        detail: "Attained across validated patient test cohorts (project-reported metric)."
      },
      {
        label: "Model Architecture",
        value: "Ensemble",
        detail: "Random Forest & Gradient Boosting tuned with Stratified K-Fold."
      },
      {
        label: "Explainability",
        value: "SHAP",
        detail: "Feature-level Shapley additive explanations for every inference."
      }
    ],
    whatILearned: [
      "Rigorous evaluation practices in medical AI where false negatives carry critical clinical consequence.",
      "How to explain complex tree ensembles to domain practitioners using SHAP summary and waterfall plots.",
      "Designing responsive diagnostic web interfaces that present probabilistic predictions with clear caveats and transparency."
    ],
    githubUrl: "https://github.com/saumyapatel792",
    visualType: "sleep-apnea",
    badgeNote: "Clinical Decision Support Prototype"
  },
  {
    id: "insurance-interactive-dashboard",
    title: "Executive Insurance BI Intelligence Hub",
    subtitle: "Enterprise Portfolio Performance & Claims Analytics",
    category: "Data Analytics & BI",
    featured: true,
    tagline: "Multi-KPI executive intelligence platform monitoring $10M+ in policies, premium cashflow, and settlement velocity.",
    problemStatement: "Insurance leadership previously relied on fragmented, static monthly spreadsheets, resulting in a 2-to-3 week reporting delay and lack of granular drill-downs into loss ratios, branch performance, and pending claim bottlenecks.",
    projectObjective: "Architect an end-to-end Power BI business intelligence dashboard powered by 25+ customized DAX measures to provide executive stakeholders with real-time portfolio tracking across $10M+ in policy volume.",
    myContribution: [
      "Designed an optimized dimensional star schema model connecting transactional policy tables, claims registries, and demographic dimensions.",
      "Authored 25+ customized DAX formulas for complex time intelligence, cumulative premium runs, loss ratios, and claim settlement velocities.",
      "Created dynamic visual layouts featuring KPI summary cards, time-series trend projections, and interactive heatmaps.",
      "Implemented seamless cross-filtering, slicer hierarchies, and drill-through pages for regional branch managers and underwriters."
    ],
    dataset: "Multi-year enterprise insurance transactional data encompassing policy issuance, premium schedules, claims logs, and branch records.",
    techStack: ["Power BI", "DAX", "Data Modeling", "Star Schema", "Power Query", "Excel / CSV Analytics"],
    methodology: "Data Ingestion via Power Query -> Dimensional Star Schema Modeling -> Calculation of 25+ DAX Measures -> UI/UX Design of Executive Viewports -> Interactive Slicers & Tooltips -> Executive Validation.",
    keyImplementationDetails: [
      "25+ Advanced DAX Measures: Period-over-Period growth, Claim Settlement Velocity (days to settle), Net Loss Ratio, Active In-force Policies.",
      "Executive Dashboard View: High-level KPI banner showing total written premiums, settled claims, and overall loss ratio.",
      "Claims Deep-Dive View: Distribution of claim causes, approval percentages, and backlog aging distribution.",
      "Geographic & Branch View: Heatmap of policy distribution across metropolitan and rural markets."
    ],
    resultsAndMetrics: [
      {
        label: "Portfolio Monitored",
        value: "$10M+",
        detail: "In policy issuance, premium collections, and active risk liabilities."
      },
      {
        label: "DAX Measures",
        value: "25+",
        detail: "Customized measures for time-intelligence, settlement velocity, and loss ratios."
      },
      {
        label: "Reporting Latency Reduction",
        value: "65%",
        detail: "Eliminated static manual reporting cycles in favor of interactive BI tracking."
      }
    ],
    whatILearned: [
      "Advanced DAX patterns including CALCULATE context transition, FILTER iteration, and dynamic time-intelligence logic.",
      "Dimensional modeling best practices (fact vs dimension tables) to maximize Power BI vertipaq engine performance.",
      "User-centric dashboard visual design principles tailored for C-suite and regional operations leaders."
    ],
    githubUrl: "https://github.com/saumyapatel792",
    visualType: "insurance",
    badgeNote: "Enterprise Business Intelligence Showcase"
  },
  {
    id: "india-ogd-data-analysis",
    title: "India Open Government Data (OGD) Audit",
    subtitle: "Public Sector Transparency & Sectoral Disparity Analysis",
    category: "Data Analytics & BI",
    featured: true,
    tagline: "Large-scale analytical exploration of 500+ datasets across 12 sectors on data.gov.in.",
    problemStatement: "While India's Open Government Data portal hosts thousands of public resources, transparency advocates and researchers struggle with inconsistent reporting frequencies, metadata gaps, and unequal sector distribution.",
    projectObjective: "Audit 500+ datasets across 12 sectors on India's Open Government Data portal to uncover distribution patterns, identify critical data coverage gaps, and present governance insights in an interactive web interface.",
    myContribution: [
      "Ingested, cleaned, and standardized metadata catalogs for 500+ datasets across 12 key ministries and sectors.",
      "Conducted exploratory data analysis in Python and Pandas to evaluate publish frequency, missingness, and format standardization.",
      "Uncovered significant sector-level reporting disparities (e.g., transport vs public health dataset availability).",
      "Built an interactive React frontend showcasing transparency benchmarks, interactive charts, and actionable data governance insights."
    ],
    dataset: "Metadata and public catalog records for 500+ datasets across 12 governance sectors harvested from data.gov.in.",
    techStack: ["Python", "Pandas", "Data Analytics", "React", "Data Visualization", "JSON / REST"],
    methodology: "Data Collection & Metadata Extraction -> Quality Assessment & Schema Normalization -> Sector-wise Disparity Modeling -> Statistical Summarization -> React Visual Presentation Interface.",
    keyImplementationDetails: [
      "Coverage analysis: Evaluated sectors including Agriculture, Health, Transportation, Education, Finance, and Rural Development.",
      "Disparity identification: Surfaced 25% sector-wise variance in update cadence and data completeness.",
      "React analytical UI: Provided sector filtering, metadata freshness counters, and interactive distribution visualizations."
    ],
    resultsAndMetrics: [
      {
        label: "Datasets Evaluated",
        value: "500+",
        detail: "Across 12 core governance sectors on India's Open Government portal."
      },
      {
        label: "Sector Disparities",
        value: "25%",
        detail: "Identified reporting and update discrepancies across public domains."
      },
      {
        label: "Frontend Stack",
        value: "React",
        detail: "Interactive interface for data governance exploration and transparency."
      }
    ],
    whatILearned: [
      "Hands-on experience auditing real-world open civic data structures and metadata schemas.",
      "Techniques for identifying systematic bias and reporting latency in public sector disclosures.",
      "Translating exploratory data analysis findings into an interactive, public-facing web product."
    ],
    githubUrl: "https://github.com/saumyapatel792",
    visualType: "india-ogd",
    badgeNote: "Open Governance Data Analytics Study"
  },
  {
    id: "end-to-end-mlops-predictive-pipeline",
    title: "End-to-End MLOps & Model Pipeline",
    subtitle: "Automated ML Lifecycle: ZenML, MLflow & Containerized Deployment",
    category: "MLOps & Systems",
    featured: true,
    tagline: "Production-oriented ML pipeline architecture with experiment tracking, orchestration, and Docker packaging.",
    problemStatement: "Experimental machine learning workflows often remain isolated in Jupyter notebooks, lacking version control for model artifacts, parameter tracking, reproducible environment configurations, and continuous deployment workflows.",
    projectObjective: "Engineer a standardized, reproducible MLOps pipeline implementing automated data validation, Scikit-learn model training, experiment tracking with MLflow, orchestration DAGs with ZenML, and containerized Docker delivery.",
    myContribution: [
      "Architected clean, modular Python source modules separating data ingestion, feature transformation, training, and evaluation.",
      "Integrated MLflow tracking to log hyperparameters, loss curves, confusion matrices, and serialized model artifacts.",
      "Structured pipeline execution steps using ZenML to guarantee reproducibility across local and cloud runs.",
      "Packaged the inference environment inside a lightweight Docker container with isolated runtime dependencies.",
      "Configured automated evaluation gates ensuring candidate models meet baseline validation thresholds before deployment."
    ],
    dataset: "Standardized benchmark tabular datasets for predictive classification, risk scoring, and regression modeling.",
    techStack: ["Python", "Scikit-learn", "MLflow", "ZenML", "Docker", "Git", "GitHub"],
    methodology: "Data Validation Step -> ZenML Pipeline Orchestration -> Hyperparameter Tuning & Training -> MLflow Metric & Artifact Logging -> Model Evaluation Gate -> Docker Container Packaging.",
    keyImplementationDetails: [
      "Decoupled pipeline steps: ZenML steps for data extraction, preprocessing, model fitting, and metric reporting.",
      "MLflow tracking server: Real-time logging of runs, comparative metric tables, and versioned model artifact storage.",
      "Dockerized inference: Reproducible container environment exposing lightweight prediction endpoints.",
      "Configuration management: YAML-based configuration for hyperparameter grids and pipeline parameters."
    ],
    resultsAndMetrics: [
      {
        label: "Pipeline Reproducibility",
        value: "100%",
        detail: "Guaranteed across environments via ZenML DAGs and Docker containerization."
      },
      {
        label: "Experiment Tracking",
        value: "MLflow",
        detail: "Comprehensive parameter, metric, and artifact logging per training run."
      },
      {
        label: "Deployment Unit",
        value: "Docker",
        detail: "Lightweight containerized inference image ready for cloud or local hosting."
      }
    ],
    whatILearned: [
      "The engineering distinction between standalone ML scripting and disciplined MLOps pipeline architecture.",
      "How to set up and manage MLflow experiment tracking registries for versioned model iterations.",
      "Containerization strategies for machine learning runtimes to prevent dependency drift."
    ],
    githubUrl: "https://github.com/saumyapatel792",
    visualType: "mlops",
    badgeNote: "MLOps Engineering & Pipeline Architecture"
  }
];

export const experiencesData: Experience[] = [
  {
    id: "prodigy-infotech",
    role: "Data Science Intern",
    company: "Prodigy InfoTech",
    location: "Remote",
    period: "03/2026 – 04/2026",
    type: "Internship",
    highlights: [
      "Engineered predictive machine learning models using Python and R across 50K+ records, enhancing forecast accuracy by 18% and minimizing variance.",
      "Built 6 interactive Tableau dashboards to track key performance trends, accelerating cross-departmental decision cycles by 25%.",
      "Streamlined end-to-end data cleaning and preprocessing pipelines, eliminating 95% of data anomalies and missing records prior to modeling.",
      "Collaborated with cross-functional engineering teams of 6+ members to integrate analytics modules into production workflows.",
      "Spearheaded weekly sprint reviews and technical syncs, delivering milestone updates and aligning model metrics with stakeholder objectives."
    ],
    skills: ["Python", "R", "Predictive Modeling", "Tableau", "Data Preprocessing", "Feature Engineering", "Agile Sprints"]
  },
  {
    id: "cognifyz-technologies",
    role: "Data Analyst Intern",
    company: "Cognifyz Technologies",
    location: "Remote",
    period: "06/2025 – 07/2025",
    type: "Internship",
    highlights: [
      "Processed and transformed 20+ enterprise datasets containing 75K+ transactions, resolving 98% of schema discrepancies for downstream analytics.",
      "Analyzed operational and revenue metrics to uncover core sales drivers, developing interactive Python (Plotly/Dash) dashboards that surfaced 15+ vital KPIs to guide leadership decisions."
    ],
    skills: ["Python", "Plotly", "Dash", "Data Cleaning", "KPI Dashboards", "Schema Normalization", "Revenue Analytics"]
  }
];

export const educationData: Education[] = [
  {
    id: "msc-data-science",
    degree: "M.Sc. in Data Science",
    institution: "Alliance University",
    location: "Bengaluru, Karnataka, India",
    period: "Expected May 2027",
    gpa: "9.6",
    details: [
      "Specializing in Machine Learning, Deep Learning, Natural Language Processing, and Applied Generative AI.",
      "Maintained top-tier academic standing with a current cumulative GPA of 9.6.",
      "Winner, DATA BLITZ – The Excel Challenge 2026, Alliance University."
    ]
  },
  {
    id: "bsc-it",
    degree: "B.Sc. in Information Technology",
    institution: "Lok Jagruti University",
    location: "Ahmedabad, Gujarat, India",
    period: "Graduated April 2025",
    gpa: "8.71",
    details: [
      "Comprehensive curriculum in Computer Science foundations, Databases, Object-Oriented Programming, and Web Technologies.",
      "Graduated with First Class with Distinction (GPA: 8.71 / 10.0).",
      "Author of published conference research on IoT in Payment Systems (IFERP/ICRAECA)."
    ]
  }
];

export const skillCategoriesData: SkillCategory[] = [
  {
    id: "prog-analysis",
    title: "Programming & Data Analysis",
    iconName: "Code2",
    skills: [
      { name: "Python", isPrimary: true },
      { name: "SQL", isPrimary: true },
      { name: "R" },
      { name: "Pandas", isPrimary: true },
      { name: "NumPy", isPrimary: true },
      { name: "Matplotlib" },
      { name: "Seaborn" }
    ]
  },
  {
    id: "ml-ai",
    title: "Machine Learning & AI",
    iconName: "BrainCircuit",
    skills: [
      { name: "Supervised Learning", isPrimary: true },
      { name: "Unsupervised Learning" },
      { name: "Regression & Classification", isPrimary: true },
      { name: "Random Forest", isPrimary: true },
      { name: "XGBoost", isPrimary: true },
      { name: "Scikit-learn", isPrimary: true },
      { name: "TensorFlow" },
      { name: "CNNs" },
      { name: "Hyperparameter Tuning" },
      { name: "Feature Engineering", isPrimary: true },
      { name: "SHAP & Explainable AI", isPrimary: true }
    ]
  },
  {
    id: "nlp-genai",
    title: "NLP & Generative AI",
    iconName: "Sparkles",
    skills: [
      { name: "Natural Language Processing (NLP)", isPrimary: true },
      { name: "TF-IDF Vectorization", isPrimary: true },
      { name: "Text Classification", isPrimary: true },
      { name: "Sentiment Analysis", isPrimary: true },
      { name: "Prompt Engineering" },
      { name: "Generative AI Fundamentals", isPrimary: true }
    ]
  },
  {
    id: "bi-viz",
    title: "Data Visualization & Business Intelligence",
    iconName: "BarChart3",
    skills: [
      { name: "Power BI", isPrimary: true },
      { name: "DAX (25+ Measures)", isPrimary: true },
      { name: "Tableau", isPrimary: true },
      { name: "Exploratory Data Analysis (EDA)", isPrimary: true },
      { name: "KPI Dashboards", isPrimary: true },
      { name: "Statistical Hypothesis Testing" },
      { name: "Plotly & Dash" }
    ]
  },
  {
    id: "tools-dev",
    title: "Deployment, MLOps & Developer Tools",
    iconName: "Server",
    skills: [
      { name: "FastAPI", isPrimary: true },
      { name: "Streamlit", isPrimary: true },
      { name: "Git & GitHub", isPrimary: true },
      { name: "Docker", isPrimary: true },
      { name: "MySQL", isPrimary: true },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "MLflow" },
      { name: "ZenML" }
    ]
  }
];

export const certificationsData: Certification[] = [
  {
    id: "ms-pl300",
    title: "Microsoft Power BI Data Analyst Associate (PL-300)",
    issuer: "Microsoft",
    category: "Cloud & Analytics",
    verified: true
  },
  {
    id: "ms-ai900",
    title: "Microsoft Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
    category: "AI & Machine Learning",
    verified: true
  },
  {
    id: "deeplearning-spec",
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    category: "AI & Machine Learning",
    verified: true
  },
  {
    id: "google-ai-essentials",
    title: "Google AI Essentials",
    issuer: "Google",
    category: "AI & Machine Learning",
    verified: true
  },
  {
    id: "sql-ucdavis",
    title: "SQL for Data Science",
    issuer: "UC Davis",
    category: "Data & Programming",
    verified: true
  },
  {
    id: "google-data-foundations",
    title: "Foundations: Data, Data, Everywhere",
    issuer: "Google",
    category: "Cloud & Analytics",
    verified: true
  },
  {
    id: "google-data-prep",
    title: "Prepare Data for Exploration",
    issuer: "Google",
    category: "Cloud & Analytics",
    verified: true
  },
  {
    id: "google-data-decisions",
    title: "Ask Questions to Make Data-Driven Decisions",
    issuer: "Google",
    category: "Cloud & Analytics",
    verified: true
  },
  {
    id: "ms-ba-fundamentals",
    title: "Business Analysis Fundamentals",
    issuer: "Microsoft",
    category: "Cloud & Analytics",
    verified: true
  },
  {
    id: "infosys-data-modeling",
    title: "Multidimensional Data Modeling",
    issuer: "Infosys",
    category: "Cloud & Analytics",
    verified: true
  },
  {
    id: "ml-fundamentals",
    title: "Machine Learning Fundamentals",
    issuer: "Coursera",
    category: "AI & Machine Learning",
    verified: true
  },
  {
    id: "python-data-science",
    title: "Python for Data Science",
    issuer: "Coursera",
    category: "Data & Programming",
    verified: true
  },
  {
    id: "intro-bi",
    title: "Introduction to Business Intelligence",
    issuer: "Coursera",
    category: "Cloud & Analytics",
    verified: true
  }
];

export const achievementsData: Achievement[] = [
  {
    id: "data-blitz-2026",
    title: "Competition Winner — DATA BLITZ: The Excel Challenge 2026",
    category: "Award",
    organization: "Alliance University, Bengaluru",
    date: "January 2026",
    description: "Secured 1st Place in university-wide advanced analytical challenge testing data modeling, statistical formulas, automated macros, and dynamic dashboard synthesis under strict time constraints."
  },
  {
    id: "iot-payment-publication",
    title: "Research Publication: Analysis of Internet of Things in Payment",
    category: "Research Publication",
    organization: "IFERP (ICRAECA Conference), LJ University, Gujarat",
    date: "January 2025",
    description: "Peer-reviewed conference paper investigating secure transaction protocols, contactless RFID/NFC architectures, and encrypted IoT automated micro-payment frameworks."
  }
];

export const technicalWritingData = {
  heading: "Learning, Building, and Sharing Ideas in AI",
  description: "I write technical breakdowns about applied machine learning, practical Generative AI workflows, NLP engineering, and lessons learned from deploying data-driven applications.",
  mediumProfileUrl: "https://medium.com/@psaumya567",
  topics: [
    "Applied Machine Learning & Evaluation Best Practices",
    "Natural Language Processing & Real-World Sentiment Triage",
    "Explainable AI: Demystifying Models with SHAP",
    "Generative AI Concepts & Prompt Engineering Strategies",
    "Enterprise BI: Translating Complex Data into DAX Measures"
  ]
};
