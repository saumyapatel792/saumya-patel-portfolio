import React from 'react';
import { experiencesData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section" style={{ backgroundColor: 'rgba(10, 14, 23, 0.5)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} /> Career Milestones
          </div>
          <h2 className="section-title">
            Industry <span className="gradient-text">Internship Experience</span>
          </h2>
          <p className="section-subtitle">
            Hands-on data science and business analytics internships delivering predictive models, schema transformations, and decision dashboards.
          </p>
        </div>

        {/* Timeline Layout */}
        <div style={timelineContainerStyle}>
          {experiencesData.map((exp, idx) => (
            <div key={exp.id} className="glass-card" style={experienceCardStyle}>
              {/* Card Header */}
              <div style={cardHeaderStyle}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
                    <span className="badge badge-indigo">
                      {exp.type}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Calendar size={13} /> {exp.period}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <MapPin size={13} /> {exp.location}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>
                    {exp.role}
                  </h3>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#38bdf8', marginTop: '0.15rem' }}>
                    {exp.company}
                  </h4>
                </div>

                <div style={experienceIndexBadgeStyle}>
                  0{idx + 1}
                </div>
              </div>

              {/* Responsibilities & Achievements */}
              <div style={{ marginTop: '1.4rem' }}>
                <h5 style={{ fontSize: '0.85rem', fontWeight: 600, color: '#cbd5e1', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.8rem' }}>
                  Key Contributions &amp; Metric Highlights
                </h5>
                <ul style={highlightsListStyle}>
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} style={highlightItemStyle}>
                      <CheckCircle2 size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                      <span style={{ fontSize: '0.92rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skill Badges */}
              <div style={skillsFooterStyle}>
                <span style={{ fontSize: '0.78rem', color: '#94a3b8', fontWeight: 600 }}>Applied Stack:</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                  {exp.skills.map((skill) => (
                    <span key={skill} className="badge" style={{ fontSize: '0.75rem' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Styles
const timelineContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
};

const experienceCardStyle: React.CSSProperties = {
  padding: '2.2rem 2rem',
  border: '1px solid rgba(255, 255, 255, 0.08)',
};

const cardHeaderStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  gap: '1rem',
};

const experienceIndexBadgeStyle: React.CSSProperties = {
  fontSize: '2rem',
  fontWeight: 900,
  color: 'rgba(255, 255, 255, 0.08)',
  fontFamily: 'var(--font-mono)',
};

const highlightsListStyle: React.CSSProperties = {
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
};

const highlightItemStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '0.75rem',
};

const skillsFooterStyle: React.CSSProperties = {
  marginTop: '1.6rem',
  paddingTop: '1.25rem',
  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  flexWrap: 'wrap',
};
