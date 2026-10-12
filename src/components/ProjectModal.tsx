import React, { useEffect } from 'react';
import { Project } from '../types';
import { ProjectVisual } from './ProjectVisual';
import { X, ExternalLink, Github, CheckCircle2, AlertCircle, Sparkles, BookOpen, Layers } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      style={modalOverlayStyle}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div style={modalCardStyle}>
        {/* Header Bar */}
        <div style={modalHeaderStyle}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
              <span className="badge badge-cyan">{project.category}</span>
              {project.badgeNote && (
                <span style={{ fontSize: '0.75rem', color: '#cbd5e1', background: 'rgba(255,255,255,0.06)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                  {project.badgeNote}
                </span>
              )}
            </div>
            <h2 id="modal-project-title" style={{ fontSize: '1.6rem', color: '#fff', fontWeight: 700 }}>
              {project.title}
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '0.2rem' }}>
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            style={closeButtonStyle}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div style={modalBodyStyle}>
          {/* Visual Architecture Feature */}
          <div style={{ marginBottom: '1.8rem' }}>
            <h4 style={sectionHeaderMiniStyle}>
              <Layers size={16} color="#38bdf8" /> System Architecture &amp; Execution Visual
            </h4>
            <ProjectVisual type={project.visualType} />
          </div>

          {/* Problem & Objective Grid */}
          <div style={gridTwoColStyle}>
            <div style={contentBlockStyle}>
              <h4 style={blockHeadingStyle('#ef4444')}>
                <AlertCircle size={16} /> Problem Statement
              </h4>
              <p style={paragraphStyle}>{project.problemStatement}</p>
            </div>
            <div style={contentBlockStyle}>
              <h4 style={blockHeadingStyle('#38bdf8')}>
                <Sparkles size={16} /> Project Objective
              </h4>
              <p style={paragraphStyle}>{project.projectObjective}</p>
            </div>
          </div>

          {/* My Engineering Contribution */}
          <div style={{ ...contentBlockStyle, marginTop: '1.2rem' }}>
            <h4 style={blockHeadingStyle('#10b981')}>
              <CheckCircle2 size={16} /> My Contribution &amp; Responsibilities
            </h4>
            <ul style={bulletListStyle}>
              {project.myContribution.map((item, idx) => (
                <li key={idx} style={bulletItemStyle}>
                  <span style={bulletDotStyle} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Dataset & Tech Stack */}
          <div style={{ ...gridTwoColStyle, marginTop: '1.2rem' }}>
            <div style={contentBlockStyle}>
              <h4 style={blockHeadingStyle('#a855f7')}>Dataset &amp; Data Source</h4>
              <p style={paragraphStyle}>{project.dataset}</p>
            </div>
            <div style={contentBlockStyle}>
              <h4 style={blockHeadingStyle('#38bdf8')}>Technology Stack</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.5rem' }}>
                {project.techStack.map((tech) => (
                  <span key={tech} className="badge badge-indigo">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Methodology & Architecture */}
          <div style={{ ...contentBlockStyle, marginTop: '1.2rem' }}>
            <h4 style={blockHeadingStyle('#6366f1')}>Methodology &amp; Workflow</h4>
            <p style={{ ...paragraphStyle, fontFamily: 'var(--font-mono)', fontSize: '0.85rem', background: 'rgba(0,0,0,0.3)', padding: '0.8rem', borderRadius: '8px' }}>
              {project.methodology}
            </p>
          </div>

          {/* Key Implementation Details */}
          <div style={{ ...contentBlockStyle, marginTop: '1.2rem' }}>
            <h4 style={blockHeadingStyle('#38bdf8')}>Key Implementation Details</h4>
            <ul style={bulletListStyle}>
              {project.keyImplementationDetails.map((detail, idx) => (
                <li key={idx} style={bulletItemStyle}>
                  <span style={bulletDotStyle} />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Results & Evaluation Metrics */}
          <div style={{ ...contentBlockStyle, marginTop: '1.2rem', borderColor: 'rgba(56, 189, 248, 0.25)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h4 style={blockHeadingStyle('#38bdf8')}>Results &amp; Evaluation Metrics</h4>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8', background: 'rgba(56,189,248,0.08)', padding: '0.2rem 0.6rem', borderRadius: '4px', border: '1px solid rgba(56,189,248,0.2)' }}>
                Project-Reported Results
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.8rem' }}>
              {project.resultsAndMetrics.map((metric, idx) => (
                <div key={idx} style={metricCardStyle}>
                  <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>{metric.label}</span>
                  <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#38bdf8' }}>{metric.value}</span>
                  <span style={{ fontSize: '0.78rem', color: '#cbd5e1' }}>{metric.detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What I Learned */}
          <div style={{ ...contentBlockStyle, marginTop: '1.2rem' }}>
            <h4 style={blockHeadingStyle('#f59e0b')}>
              <BookOpen size={16} /> What I Learned
            </h4>
            <ul style={bulletListStyle}>
              {project.whatILearned.map((learned, idx) => (
                <li key={idx} style={bulletItemStyle}>
                  <span style={{ ...bulletDotStyle, background: '#f59e0b' }} />
                  <span>{learned}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div style={modalFooterStyle}>
          <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ fontSize: '0.88rem', padding: '0.6rem 1.1rem' }}
              >
                <Github size={16} /> View Source Code
              </a>
            ) : (
              <span style={{ fontSize: '0.85rem', color: '#94a3b8', padding: '0.6rem 0.8rem' }}>
                Repository coming soon
              </span>
            )}

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ fontSize: '0.88rem', padding: '0.6rem 1.1rem' }}
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="btn btn-ghost"
            style={{ fontSize: '0.88rem' }}
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};

// Styles
const modalOverlayStyle: React.CSSProperties = {
  position: 'fixed',
  inset: 0,
  zIndex: 1000,
  backgroundColor: 'rgba(3, 7, 18, 0.85)',
  backdropFilter: 'blur(8px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1.5rem',
  overflowY: 'auto',
};

const modalCardStyle: React.CSSProperties = {
  width: '100%',
  maxWidth: '850px',
  maxHeight: '90vh',
  backgroundColor: '#0a0e1a',
  border: '1px solid rgba(255, 255, 255, 0.12)',
  borderRadius: '16px',
  boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(56, 189, 248, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  position: 'relative',
};

const modalHeaderStyle: React.CSSProperties = {
  padding: '1.5rem 1.75rem',
  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  backgroundColor: 'rgba(15, 23, 42, 0.6)',
};

const closeButtonStyle: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.06)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  color: '#94a3b8',
  borderRadius: '8px',
  padding: '0.45rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.2s ease',
};

const modalBodyStyle: React.CSSProperties = {
  padding: '1.75rem',
  overflowY: 'auto',
  flex: 1,
};

const modalFooterStyle: React.CSSProperties = {
  padding: '1.25rem 1.75rem',
  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'rgba(15, 23, 42, 0.6)',
  flexWrap: 'wrap',
  gap: '1rem',
};

const sectionHeaderMiniStyle: React.CSSProperties = {
  fontSize: '0.85rem',
  fontWeight: 600,
  color: '#cbd5e1',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  marginBottom: '0.75rem',
};

const gridTwoColStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '1rem',
};

const contentBlockStyle: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.02)',
  border: '1px solid rgba(255, 255, 255, 0.06)',
  borderRadius: '10px',
  padding: '1.1rem',
};

const blockHeadingStyle = (color: string): React.CSSProperties => ({
  fontSize: '0.9rem',
  fontWeight: 700,
  color,
  display: 'flex',
  alignItems: 'center',
  gap: '0.45rem',
  marginBottom: '0.5rem',
});

const paragraphStyle: React.CSSProperties = {
  fontSize: '0.9rem',
  color: '#cbd5e1',
  lineHeight: 1.6,
};

const bulletListStyle: React.CSSProperties = {
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  marginTop: '0.4rem',
};

const bulletItemStyle: React.CSSProperties = {
  fontSize: '0.88rem',
  color: '#cbd5e1',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '0.6rem',
  lineHeight: 1.55,
};

const bulletDotStyle: React.CSSProperties = {
  width: '6px',
  height: '6px',
  borderRadius: '50%',
  background: '#38bdf8',
  marginTop: '0.5rem',
  flexShrink: 0,
};

const metricCardStyle: React.CSSProperties = {
  background: 'rgba(0, 0, 0, 0.3)',
  border: '1px solid rgba(56, 189, 248, 0.2)',
  borderRadius: '8px',
  padding: '0.8rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.2rem',
};
