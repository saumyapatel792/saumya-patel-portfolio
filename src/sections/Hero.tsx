import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowRight, Download, Mail, Github, Linkedin, BookOpen, Sparkles, CheckCircle2, ShieldCheck, MapPin, GraduationCap } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Hero: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<'formal' | 'campus'>('formal');

  const triggerResumeDownload = () => {
    confetti({
      particleCount: 45,
      spread: 65,
      origin: { y: 0.75 },
    });
  };

  const photos = {
    formal: {
      src: '/images/saumya_patel_formal.jpg',
      alt: 'Saumya Alpesh Patel - Professional Portrait',
      caption: 'Professional Portrait',
      tag: 'Executive Portfolio',
      objectPosition: 'center center',
    },
    campus: {
      src: '/images/saumya_patel_campus.jpg',
      alt: 'Saumya Alpesh Patel - Academic Campus at Alliance University',
      caption: 'Alliance University Campus',
      tag: 'Academic & Campus',
      objectPosition: 'center 20%',
    },
  };

  const currentPhoto = photos[activePhoto];

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
                <ShieldCheck size={15} color="#10b981" />
                <span>Authentic Profile &amp; Verified Work</span>
              </div>
            </div>
          </div>

          {/* Right Column: Formal Professional Portrait Card */}
          <div style={portraitCardWrapperStyle}>
            <div className="glass-card" style={formalPortraitCardStyle}>
              {/* Photo Viewport Container */}
              <div style={photoViewportStyle}>
                <img
                  src={currentPhoto.src}
                  alt={currentPhoto.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: currentPhoto.objectPosition,
                    transition: 'all 0.35s ease',
                    display: 'block',
                  }}
                />

                {/* Subtle Gradient Overlays for High-End Framing */}
                <div style={photoTopShadowOverlayStyle} />
                <div style={photoBottomShadowOverlayStyle} />

                {/* Photo Switcher Controls */}
                <div style={photoSwitcherTabBarStyle}>
                  <button
                    onClick={() => setActivePhoto('formal')}
                    style={photoTabButtonStyle(activePhoto === 'formal')}
                    aria-label="Show Formal Portrait"
                  >
                    Formal Portrait
                  </button>
                  <button
                    onClick={() => setActivePhoto('campus')}
                    style={photoTabButtonStyle(activePhoto === 'campus')}
                    aria-label="Show Campus Photo"
                  >
                    Campus Profile
                  </button>
                </div>

                {/* Verified Identity Badge Floating on Photo */}
                <div style={floatingVerifiedBadgeStyle}>
                  <CheckCircle2 size={14} color="#10b981" />
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#f8fafc' }}>
                    Verified Candidate
                  </span>
                </div>
              </div>

              {/* Information Footprint Under Photo */}
              <div style={portraitCardDetailsStyle}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>
                      {personalInfo.name}
                    </h3>
                    <p style={{ fontSize: '0.825rem', color: '#38bdf8', fontWeight: 600, marginTop: '0.1rem' }}>
                      Data Science &amp; AI Postgraduate
                    </p>
                  </div>
                  <span style={{ fontSize: '0.72rem', color: '#cbd5e1', background: 'rgba(56, 189, 248, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px', border: '1px solid rgba(56, 189, 248, 0.25)' }}>
                    GPA 9.6
                  </span>
                </div>

                <div style={quickInfoRowStyle}>
                  <div style={quickInfoItemStyle}>
                    <GraduationCap size={14} color="#818cf8" />
                    <span>Alliance University</span>
                  </div>
                  <div style={quickInfoItemStyle}>
                    <MapPin size={14} color="#38bdf8" />
                    <span>Bengaluru, India</span>
                  </div>
                </div>
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

const portraitCardWrapperStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
};

const formalPortraitCardStyle: React.CSSProperties = {
  width: '100%',
  maxWidth: '430px',
  border: '1px solid rgba(255, 255, 255, 0.12)',
  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7), 0 0 30px rgba(56, 189, 248, 0.1)',
  padding: '0.75rem',
  borderRadius: '20px',
  backgroundColor: 'rgba(11, 16, 29, 0.85)',
};

const photoViewportStyle: React.CSSProperties = {
  position: 'relative',
  width: '100%',
  height: '460px',
  borderRadius: '14px',
  overflow: 'hidden',
  backgroundColor: '#070a13',
};

const photoTopShadowOverlayStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: '80px',
  background: 'linear-gradient(to bottom, rgba(7, 10, 19, 0.6) 0%, transparent 100%)',
  pointerEvents: 'none',
};

const photoBottomShadowOverlayStyle: React.CSSProperties = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: '110px',
  background: 'linear-gradient(to top, rgba(7, 10, 19, 0.85) 0%, transparent 100%)',
  pointerEvents: 'none',
};

const photoSwitcherTabBarStyle: React.CSSProperties = {
  position: 'absolute',
  top: '0.9rem',
  left: '0.9rem',
  display: 'flex',
  gap: '0.4rem',
  background: 'rgba(7, 10, 19, 0.75)',
  backdropFilter: 'blur(8px)',
  padding: '0.25rem',
  borderRadius: '8px',
  border: '1px solid rgba(255, 255, 255, 0.12)',
  zIndex: 10,
};

const photoTabButtonStyle = (active: boolean): React.CSSProperties => ({
  padding: '0.3rem 0.65rem',
  borderRadius: '6px',
  fontSize: '0.725rem',
  fontWeight: 600,
  background: active ? '#0284c7' : 'transparent',
  color: active ? '#ffffff' : '#cbd5e1',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
});

const floatingVerifiedBadgeStyle: React.CSSProperties = {
  position: 'absolute',
  top: '0.9rem',
  right: '0.9rem',
  background: 'rgba(7, 10, 19, 0.85)',
  backdropFilter: 'blur(8px)',
  padding: '0.35rem 0.65rem',
  borderRadius: '999px',
  border: '1px solid rgba(16, 185, 129, 0.3)',
  display: 'flex',
  alignItems: 'center',
  gap: '0.35rem',
  zIndex: 10,
};

const portraitCardDetailsStyle: React.CSSProperties = {
  padding: '1.1rem 0.75rem 0.5rem 0.75rem',
};

const quickInfoRowStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
  marginTop: '0.6rem',
  paddingTop: '0.6rem',
  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
};

const quickInfoItemStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
  fontSize: '0.78rem',
  color: '#cbd5e1',
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
