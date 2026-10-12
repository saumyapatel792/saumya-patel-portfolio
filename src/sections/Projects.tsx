import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectVisual } from '../components/ProjectVisual';
import { ProjectModal } from '../components/ProjectModal';
import { Sparkles, Layers, Github, ExternalLink, CheckCircle2 } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'NLP & GenAI', 'AI/ML', 'Data Analytics & BI', 'MLOps & Systems'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} /> Technical Portfolio
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">AI &amp; Data Projects</span>
          </h2>
          <p className="section-subtitle">
            Rigorous applied machine learning, NLP triage pipelines, interactive enterprise dashboards, and MLOps architectures with verified evaluation results.
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={filterTabsWrapperStyle}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              style={filterTabButtonStyle(activeFilter === category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div style={projectsGridStyle}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1.75rem',
                border: project.id === 'aegis-ai-grievance-triage' ? '1px solid rgba(56, 189, 248, 0.35)' : '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div>
                {/* Card Top Category & Note */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem', flexWrap: 'wrap', gap: '0.4rem' }}>
                  <span className="badge badge-cyan">{project.category}</span>
                  {project.badgeNote && (
                    <span style={{ fontSize: '0.725rem', color: '#cbd5e1', background: 'rgba(255,255,255,0.05)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                      {project.badgeNote}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', marginBottom: '0.35rem' }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1.1rem' }}>
                  {project.tagline}
                </p>

                {/* Technical Visual Diagram */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <ProjectVisual type={project.visualType} />
                </div>

                {/* Problem Statement Snippet */}
                <div style={{ marginBottom: '1.1rem' }}>
                  <h4 style={{ fontSize: '0.8rem', fontWeight: 700, color: '#f8fafc', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.35rem' }}>
                    Problem Statement
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.55 }}>
                    {project.problemStatement}
                  </p>
                </div>

                {/* Highlights */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <h4 style={{ fontSize: '0.8rem', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.4rem' }}>
                    Key Engineering Highlights
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {project.myContribution.slice(0, 2).map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.84rem', color: '#cbd5e1' }}>
                        <CheckCircle2 size={14} color="#10b981" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  {project.techStack.map((tech) => (
                    <span key={tech} className="badge" style={{ fontSize: '0.75rem' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={cardActionsBarStyle}>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="btn btn-primary"
                  style={{ flex: 1, padding: '0.55rem 0.9rem', fontSize: '0.85rem' }}
                >
                  <Layers size={15} />
                  <span>View Case Study</span>
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    aria-label={`View ${project.title} source code`}
                    style={{ padding: '0.55rem 0.8rem', fontSize: '0.85rem' }}
                  >
                    <Github size={15} />
                  </a>
                )}

                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    aria-label={`View ${project.title} live demo`}
                    style={{ padding: '0.55rem 0.8rem', fontSize: '0.85rem' }}
                  >
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal View */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};

// Styles
const filterTabsWrapperStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.6rem',
  marginBottom: '2.5rem',
};

const filterTabButtonStyle = (active: boolean): React.CSSProperties => ({
  padding: '0.5rem 1.1rem',
  borderRadius: '999px',
  fontSize: '0.85rem',
  fontWeight: 600,
  transition: 'all 0.2s ease',
  backgroundColor: active ? '#0284c7' : 'rgba(255, 255, 255, 0.04)',
  color: active ? '#ffffff' : '#cbd5e1',
  border: active ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.08)',
  cursor: 'pointer',
});

const projectsGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
  gap: '2rem',
};

const cardActionsBarStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
  marginTop: '1.2rem',
  paddingTop: '1.1rem',
  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
};
