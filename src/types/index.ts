export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI/ML' | 'NLP & GenAI' | 'Data Analytics & BI' | 'MLOps & Systems';
  featured: boolean;
  tagline: string;
  problemStatement: string;
  projectObjective: string;
  myContribution: string[];
  dataset: string;
  techStack: string[];
  methodology: string;
  keyImplementationDetails: string[];
  resultsAndMetrics: {
    label: string;
    value: string;
    detail: string;
  }[];
  whatILearned: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  visualType: 'grievance' | 'sleep-apnea' | 'insurance' | 'india-ogd' | 'mlops';
  badgeNote?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  highlights: string[];
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
  details?: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  skills: {
    name: string;
    level?: string;
    isPrimary?: boolean;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: 'Microsoft' | 'Google' | 'DeepLearning.AI' | 'UC Davis' | 'Infosys' | 'Coursera';
  category: 'AI & Machine Learning' | 'Cloud & Analytics' | 'Data & Programming';
  credentialUrl?: string;
  verified: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  category: 'Award' | 'Research Publication';
  organization: string;
  date: string;
  description: string;
  link?: string;
}
