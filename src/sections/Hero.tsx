import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { AiNetworkCanvas } from '../components/AiNetworkCanvas';
import { ArrowRight, Download, Mail, Github, Linkedin, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Hero: React.FC = () => {
  const triggerResumeDownload = () => {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.75 },
    });
  };

  return (
    <section id="home" className="section" style={{ minHeight: '92vh', display: 'flex', alignItems: 'center', paddingTop: '7rem' }}>
      <div className="container">
        <div style={heroLayoutGridStyle}>
          {/* Left Column: Intro & Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
            {/* Availability Pill */}
            <div style={availabilityPillStyle}>
              <span style={greenPulseDotStyle} />
              <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0' }}>
                {personalInfo.availabilityStatement}
              </span>
            </div>

            {/* Headline */}
            <div>
              <h1 style={heroHeadlineStyle}>
                Building Intelligent Solutions with{' '}
                <span className="gradient-text">Data &amp; AI.</span>
              </h1>
              <p style={heroSubheadStyle}>
                {personalInfo.subHeadline}
              </p>
            </div>

            {/* Key Metric Highlights from Resume */}
            <div style={statHighlightsGridStyle}>
              <div style={statBoxStyle}>
                <span style={statNumberStyle('#38bdf8')}>9.6</span>
                <span style={statLabelStyle}>M.Sc. Data Science GPA</span>
              </div>
              <div style={statBoxStyle}>
                <span style={statNumberStyle('#6366f1')}>92%</span>
                <span style={statLabelStyle}>NLP Triage Accuracy</span>
              </div>
              <div style={statBoxStyle}>
                <span style={statNumberStyle('#10b981')}>25+</span>
                <span style={statLabelStyle}>Custom DAX Measures</span>
              </div>
              <div style={statBoxStyle}>
                <span style={statNumberStyle('#a855f7')}>50K+</span>
                <span style={statLabelStyle}>Records Modeled</span>
              </div>
            </div>

            {/* Primary Actions */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.9rem', marginTop: '0.4rem' }}>
              <a href="#projects" className="btn btn-primary">
                <span>Explore My Projects</span>
                <ArrowRight size={17} />
              </a>

              <a
                href={personalInfo.resumePath}
                download="Saumya_Patel_Resume.pdf"
                onClick={triggerResumeDownload}
                className="btn btn-secondary"
              >
                <Download size={17} />
                <span>Download My Resume</span>
              </a>

              <a href="#contact" className="btn btn-ghost" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                <Mail size={17} />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Trust Indicator */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginTop: '0.6rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.825rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Sparkles size={14} color="#38bdf8" /> Connect:
              </span>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  style={socialIconStyle}
                >
                  <Github size={17} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  style={socialIconStyle}
                >
                  <Linkedin size={17} />
                </a>
                <a
                  href={personalInfo.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Medium blog profile"
                  style={socialIconStyle}
                >
                  <BookOpen size={17} />
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#cbd5e1', fontSize: '0.8rem', marginLeft: 'auto' }}>
                <CheckCircle2 size={14} color="#10b981" />
                <span>Verified Credentials &amp; Code</span>
              </div>
            </div>
          </div>

          {/* Right Column: AI Network Visual & Live Interactive Card */}
          <div style={canvasCardContainerStyle}>
            <div style={canvasInnerStyle}>
              <AiNetworkCanvas />
              <div style={canvasOverlayBadgeStyle}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#38bdf8', boxShadow: '0 0 10px #38bdf8' }} />
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#f8fafc' }}>
                    Applied AI &amp; Generative Intelligence
                  </span>
                </div>
                <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>
                  Alliance University • Bengaluru
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Styles
const heroLayoutGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gap: '3.5rem',
  alignItems: 'center',
};

const availabilityPillStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.6rem',
  padding: '0.4rem 0.95rem',
  background: 'rgba(16, 185, 129, 0.08)',
  border: '1px solid rgba(16, 185, 129, 0.25)',
  borderRadius: '999px',
  width: 'fit-content',
};

const greenPulseDotStyle: React.CSSProperties = {
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  backgroundColor: '#10b981',
  boxShadow: '0 0 10px #10b981',
  flexShrink: 0,
};

const heroHeadlineStyle: React.CSSProperties = {
  fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
  fontWeight: 800,
  lineHeight: 1.15,
  letterSpacing: '-0.03em',
  marginBottom: '1rem',
};

const heroSubheadStyle: React.CSSProperties = {
  fontSize: '1.15rem',
  color: '#cbd5e1',
  lineHeight: 1.7,
  maxWidth: '620px',
};

const statHighlightsGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '0.8rem',
  marginTop: '0.5rem',
};

const statBoxStyle: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid rgba(255, 255, 255, 0.07)',
  borderRadius: '10px',
  padding: '0.65rem 0.6rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.15rem',
};

const statNumberStyle = (color: string): React.CSSProperties => ({
  fontSize: '1.35rem',
  fontWeight: 800,
  color,
  letterSpacing: '-0.02em',
});

const statLabelStyle: React.CSSProperties = {
  fontSize: '0.7rem',
  color: '#94a3b8',
  lineHeight: 1.25,
};

const canvasCardContainerStyle: React.CSSProperties = {
  position: 'relative',
  width: '100%',
  height: '100%',
  minHeight: '420px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const canvasInnerStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  minHeight: '400px',
  background: 'radial-gradient(ellipse at center, rgba(30, 41, 59, 0.5) 0%, rgba(10, 14, 26, 0.9) 70%)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '24px',
  overflow: 'hidden',
  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 40px rgba(56, 189, 248, 0.12)',
  position: 'relative',
};

const canvasOverlayBadgeStyle: React.CSSProperties = {
  position: 'absolute',
  bottom: '1.25rem',
  left: '1.25rem',
  right: '1.25rem',
  background: 'rgba(10, 14, 26, 0.85)',
  backdropFilter: 'blur(12px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '12px',
  padding: '0.8rem 1.1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '0.5rem',
};

const socialIconStyle: React.CSSProperties = {
  width: '38px',
  height: '38px',
  borderRadius: '10px',
  backgroundColor: 'rgba(255, 255, 255, 0.04)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  color: '#cbd5e1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.2s ease',
};
