import React from 'react';
import { technicalWritingData } from '../data/portfolioData';
import { BookOpen, ExternalLink, Sparkles, ArrowRight } from 'lucide-react';

export const TechnicalWriting: React.FC = () => {
  return (
    <section id="writing" className="section" style={{ backgroundColor: 'rgba(10, 14, 23, 0.5)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <BookOpen size={14} /> Knowledge Sharing
          </div>
          <h2 className="section-title">
            Technical Writing &amp; <span className="gradient-text">Thought Leadership</span>
          </h2>
          <p className="section-subtitle">
            Documenting architectural decisions, engineering workflows, and practical insights across machine learning and Generative AI.
          </p>
        </div>

        {/* Medium Profile Card */}
        <div className="glass-card" style={writingCardStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
                <span className="badge badge-purple">
                  <Sparkles size={13} /> Medium Publication Hub
                </span>
                <span style={{ fontSize: '0.78rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                  @psaumya567
                </span>
              </div>

              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff', marginBottom: '0.8rem' }}>
                {technicalWritingData.heading}
              </h3>

              <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {technicalWritingData.description}
              </p>

              <a
                href={technicalWritingData.mediumProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ padding: '0.65rem 1.3rem' }}
              >
                <span>Read Articles on Medium</span>
                <ExternalLink size={16} />
              </a>
            </div>

            {/* Core Discussion Themes */}
            <div style={topicsBoxStyle}>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#f8fafc', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                Core Writing &amp; Research Themes
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {technicalWritingData.topics.map((topic, idx) => (
                  <div key={idx} style={topicItemStyle}>
                    <ArrowRight size={14} color="#38bdf8" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                    <span style={{ fontSize: '0.88rem', color: '#cbd5e1' }}>{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Styles
const writingCardStyle: React.CSSProperties = {
  padding: '2.5rem',
  border: '1px solid rgba(168, 85, 247, 0.25)',
};

const topicsBoxStyle: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.02)',
  border: '1px solid rgba(255, 255, 255, 0.06)',
  borderRadius: '12px',
  padding: '1.5rem',
};

const topicItemStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '0.6rem',
};
