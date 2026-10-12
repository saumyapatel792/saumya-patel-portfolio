import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { User, MapPin, GraduationCap, Compass, Languages, ExternalLink, Award, FileText } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="section" style={{ backgroundColor: 'rgba(10, 14, 23, 0.5)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <User size={14} /> Profile &amp; Focus
          </div>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            An authentic look at my academic background, technical ethos, and the problems I enjoy solving.
          </p>
        </div>

        {/* Content Layout Grid */}
        <div style={aboutGridStyle}>
          {/* Left Column: Narrative Story & Engineering Approach */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#fff', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Compass size={20} color="#38bdf8" />
                Data Science Postgraduate &amp; AI Builder
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', fontSize: '1rem', color: '#cbd5e1', lineHeight: 1.8 }}>
                <p>
                  I am pursuing an <strong style={{ color: '#fff' }}>M.Sc. in Data Science at Alliance University, Bengaluru</strong>. My interests span machine learning, deep learning, natural language processing, Generative AI, and data analytics.
                </p>
                <p>
                  Through internships and hands-on projects, I have explored the complete process of working with data—from preprocessing and exploratory analysis to model development, evaluation, API integration, and interactive applications.
                </p>
                <p>
                  I enjoy solving practical problems, experimenting with new technologies, and building systems that make data more useful for real-world decisions. I am looking for opportunities where I can contribute, collaborate, and grow as an AI and Data Science professional.
                </p>
              </div>

              {/* Research & Presentation Highlight */}
              <div style={researchHighlightBannerStyle}>
                <Award size={18} color="#a855f7" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#f8fafc' }}>
                    Peer-Reviewed Conference Publication
                  </h4>
                  <p style={{ fontSize: '0.825rem', color: '#cbd5e1', marginTop: '0.2rem' }}>
                    Co-authored "Analysis of Internet of Things in Payment" presented at IFERP (ICRAECA), LJ University (Jan 2025).
                  </p>
                </div>
              </div>
            </div>

            {/* Language Proficiencies verified from Resume */}
            <div className="glass-card" style={{ padding: '1.5rem 2rem' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Languages size={17} color="#38bdf8" /> Verified Languages (Resume)
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {personalInfo.languages.map((lang) => (
                  <div key={lang.language} style={langPillStyle}>
                    <span style={{ fontWeight: 600, color: '#f8fafc' }}>{lang.language}</span>
                    <span style={{ color: '#38bdf8', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Professional Profile Card */}
          <div>
            <div className="glass-card" style={{ padding: '2.2rem 2rem', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.1rem', marginBottom: '1.5rem' }}>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, #0284c7 0%, #6366f1 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: 800,
                    fontSize: '1.6rem',
                    boxShadow: '0 8px 24px rgba(56, 189, 248, 0.3)',
                  }}
                >
                  SP
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff' }}>
                    {personalInfo.name}
                  </h3>
                  <span style={{ fontSize: '0.8rem', color: '#38bdf8', fontWeight: 600 }}>
                    Early-Career AI &amp; Data Science Specialist
                  </span>
                </div>
              </div>

              <div style={profileInfoListStyle}>
                <div style={profileInfoItemStyle}>
                  <GraduationCap size={16} color="#818cf8" />
                  <div>
                    <span style={profileItemLabelStyle}>Education</span>
                    <span style={profileItemValueStyle}>M.Sc. Data Science, Alliance University (GPA 9.6)</span>
                  </div>
                </div>

                <div style={profileInfoItemStyle}>
                  <MapPin size={16} color="#38bdf8" />
                  <div>
                    <span style={profileItemLabelStyle}>Location</span>
                    <span style={profileItemValueStyle}>{personalInfo.location}</span>
                  </div>
                </div>

                <div style={profileInfoItemStyle}>
                  <Compass size={16} color="#10b981" />
                  <div>
                    <span style={profileItemLabelStyle}>Core Focus</span>
                    <span style={profileItemValueStyle}>Machine Learning, NLP, Generative AI, BI Dashboards</span>
                  </div>
                </div>

                <div style={profileInfoItemStyle}>
                  <FileText size={16} color="#a855f7" />
                  <div>
                    <span style={profileItemLabelStyle}>Academic Honours</span>
                    <span style={profileItemValueStyle}>Winner — DATA BLITZ: The Excel Challenge 2026</span>
                  </div>
                </div>
              </div>

              {/* Profiles Direct Links */}
              <div style={{ marginTop: '1.8rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={profileLinkRowStyle}
                >
                  <span>LinkedIn Profile</span>
                  <ExternalLink size={14} color="#94a3b8" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={profileLinkRowStyle}
                >
                  <span>GitHub Repository Profile</span>
                  <ExternalLink size={14} color="#94a3b8" />
                </a>
                <a
                  href={personalInfo.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={profileLinkRowStyle}
                >
                  <span>Medium Thought Leadership Blog</span>
                  <ExternalLink size={14} color="#94a3b8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Styles
const aboutGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gap: '2rem',
  alignItems: 'start',
};

const researchHighlightBannerStyle: React.CSSProperties = {
  marginTop: '1.5rem',
  padding: '1.1rem 1.25rem',
  background: 'rgba(168, 85, 247, 0.08)',
  border: '1px solid rgba(168, 85, 247, 0.25)',
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '0.85rem',
};

const langPillStyle: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  padding: '0.5rem 0.9rem',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
  fontSize: '0.85rem',
};

const profileInfoListStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.1rem',
};

const profileInfoItemStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '0.8rem',
};

const profileItemLabelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.725rem',
  color: '#94a3b8',
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
  fontWeight: 600,
};

const profileItemValueStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.9rem',
  color: '#f8fafc',
  fontWeight: 500,
  marginTop: '0.1rem',
};

const profileLinkRowStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0.6rem 0.8rem',
  borderRadius: '8px',
  background: 'rgba(255, 255, 255, 0.03)',
  color: '#cbd5e1',
  fontSize: '0.85rem',
  fontWeight: 500,
  transition: 'all 0.2s ease',
};
