import React from 'react';
import { educationData } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="section" style={{ backgroundColor: 'rgba(10, 14, 23, 0.5)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} /> Academic Pedigree
          </div>
          <h2 className="section-title">
            Higher <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">
            Formal foundations in Data Science, Machine Learning, Computational Mathematics, and Information Technology.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div style={educationGridStyle}>
          {educationData.map((edu) => (
            <div key={edu.id} className="glass-card" style={educationCardStyle}>
              {/* Header */}
              <div style={eduHeaderStyle}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.78rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Calendar size={13} /> {edu.period}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <MapPin size={13} /> {edu.location}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>
                    {edu.degree}
                  </h3>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#38bdf8', marginTop: '0.15rem' }}>
                    {edu.institution}
                  </h4>
                </div>

                {/* GPA Badge */}
                <div style={gpaBadgeStyle}>
                  <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: '#94a3b8', fontWeight: 600 }}>Cumulative GPA</span>
                  <strong style={{ fontSize: '1.45rem', fontWeight: 800, color: '#38bdf8' }}>{edu.gpa}</strong>
                </div>
              </div>

              {/* Details & Highlights */}
              {edu.details && (
                <div style={{ marginTop: '1.3rem' }}>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                    {edu.details.map((detail, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.88rem', color: '#cbd5e1' }}>
                        <CheckCircle2 size={15} color="#10b981" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Styles
const educationGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
  gap: '1.75rem',
};

const educationCardStyle: React.CSSProperties = {
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const eduHeaderStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  gap: '1rem',
};

const gpaBadgeStyle: React.CSSProperties = {
  background: 'rgba(56, 189, 248, 0.08)',
  border: '1px solid rgba(56, 189, 248, 0.25)',
  padding: '0.5rem 0.9rem',
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minWidth: '85px',
};
