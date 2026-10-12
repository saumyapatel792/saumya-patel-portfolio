import React, { useState } from 'react';
import { achievementsData, certificationsData } from '../data/portfolioData';
import { Award, BookOpen, ShieldCheck, Filter } from 'lucide-react';

export const Achievements: React.FC = () => {
  const [certFilter, setCertFilter] = useState<string>('All');

  const certCategories = ['All', 'AI & Machine Learning', 'Cloud & Analytics', 'Data & Programming'];

  const filteredCerts = certFilter === 'All'
    ? certificationsData
    : certificationsData.filter((c) => c.category === certFilter);

  return (
    <section id="certifications" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Award size={14} /> Credentials &amp; Recognition
          </div>
          <h2 className="section-title">
            Achievements &amp; <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Formal industry credentials and competitive recognitions spanning AI engineering, business intelligence, and peer-reviewed research.
          </p>
        </div>

        {/* Top Block: Awards & Conference Research Publication */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          {achievementsData.map((item) => (
            <div key={item.id} className="glass-card" style={achievementBoxStyle(item.category === 'Award')}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                {item.category === 'Award' ? (
                  <span className="badge badge-emerald">
                    <Award size={13} /> University Award
                  </span>
                ) : (
                  <span className="badge badge-purple">
                    <BookOpen size={13} /> Peer-Reviewed Research
                  </span>
                )}
                <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                  {item.date}
                </span>
              </div>

              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff', marginBottom: '0.4rem' }}>
                {item.title}
              </h3>
              <h4 style={{ fontSize: '0.88rem', color: '#38bdf8', fontWeight: 600, marginBottom: '0.8rem' }}>
                {item.organization}
              </h4>
              <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications Sub-heading and Filter */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
          <div>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 700, color: '#fff' }}>
              Industry Certifications
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#94a3b8' }}>
              Verified credentials from Microsoft, Google, DeepLearning.AI, and UC Davis.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
            <Filter size={15} color="#94a3b8" />
            {certCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCertFilter(cat)}
                style={filterMiniBtnStyle(certFilter === cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div style={certGridStyle}>
          {filteredCerts.map((cert) => (
            <div key={cert.id} className="glass-card" style={certCardStyle}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.6rem' }}>
                <span style={issuerTagStyle(cert.issuer)}>
                  {cert.issuer}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.72rem', color: '#10b981' }}>
                  <ShieldCheck size={13} /> Verified
                </span>
              </div>

              <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#f8fafc', lineHeight: 1.4, flex: 1 }}>
                {cert.title}
              </h4>

              <div style={{ marginTop: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                  {cert.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Styles
const achievementBoxStyle = (isAward: boolean): React.CSSProperties => ({
  padding: '1.8rem',
  border: isAward ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid rgba(168, 85, 247, 0.3)',
});

const filterMiniBtnStyle = (active: boolean): React.CSSProperties => ({
  padding: '0.35rem 0.75rem',
  borderRadius: '6px',
  fontSize: '0.78rem',
  fontWeight: 600,
  backgroundColor: active ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255, 255, 255, 0.04)',
  color: active ? '#38bdf8' : '#cbd5e1',
  border: active ? '1px solid rgba(56, 189, 248, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
  cursor: 'pointer',
});

const certGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '1.2rem',
};

const certCardStyle: React.CSSProperties = {
  padding: '1.4rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const issuerTagStyle = (issuer: string): React.CSSProperties => {
  let color = '#38bdf8';
  let bg = 'rgba(56, 189, 248, 0.1)';
  if (issuer === 'Microsoft') {
    color = '#60a5fa';
    bg = 'rgba(96, 165, 250, 0.12)';
  } else if (issuer === 'Google') {
    color = '#34d399';
    bg = 'rgba(52, 211, 153, 0.12)';
  } else if (issuer === 'DeepLearning.AI') {
    color = '#f43f5e';
    bg = 'rgba(244, 63, 94, 0.12)';
  } else if (issuer === 'Infosys') {
    color = '#a855f7';
    bg = 'rgba(168, 85, 247, 0.12)';
  }

  return {
    fontSize: '0.75rem',
    fontWeight: 700,
    color,
    background: bg,
    padding: '0.2rem 0.55rem',
    borderRadius: '4px',
    border: `1px solid ${color}35`,
  };
};
