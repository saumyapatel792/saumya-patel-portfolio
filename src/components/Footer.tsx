import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin, BookOpen, Mail, ArrowUp, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#05070d',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '4.5rem 0 2.5rem 0',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2.5rem',
            paddingBottom: '3.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          }}
        >
          {/* Col 1: Bio */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #0284c7 0%, #6366f1 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                }}
              >
                S
              </div>
              <span style={{ fontWeight: 800, fontSize: '1.2rem', color: '#fff' }}>
                {personalInfo.name}
              </span>
            </div>
            <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '1.2rem' }}>
              Data Science postgraduate at Alliance University, Bengaluru. Passionate about machine learning, NLP, Generative AI, and building data-driven systems that solve real problems.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.85rem' }}>
              <MapPin size={15} color="#38bdf8" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.2rem' }}>
              Quick Navigation
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.6rem', fontSize: '0.88rem' }}>
              <a href="#about" style={{ color: '#94a3b8' }}>About Me</a>
              <a href="#skills" style={{ color: '#94a3b8' }}>Technical Skills</a>
              <a href="#experience" style={{ color: '#94a3b8' }}>Experience</a>
              <a href="#projects" style={{ color: '#94a3b8' }}>Featured Projects</a>
              <a href="#education" style={{ color: '#94a3b8' }}>Education</a>
              <a href="#certifications" style={{ color: '#94a3b8' }}>Certifications</a>
              <a href="#writing" style={{ color: '#94a3b8' }}>Technical Writing</a>
              <a href="#contact" style={{ color: '#94a3b8' }}>Contact</a>
            </div>
          </div>

          {/* Col 3: Direct Connect */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.2rem' }}>
              Get in Touch
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem', color: '#cbd5e1' }}>
              <a href={`mailto:${personalInfo.email}`} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#cbd5e1' }}>
                <Mail size={16} color="#38bdf8" />
                <span>{personalInfo.email}</span>
              </a>
              <a href={`tel:${personalInfo.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#cbd5e1' }}>
                <Phone size={16} color="#10b981" />
                <span>{personalInfo.phoneFormatted}</span>
              </a>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.2rem' }}>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                style={socialIconStyle}
              >
                <Github size={17} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                style={socialIconStyle}
              >
                <Linkedin size={17} />
              </a>
              <a
                href={personalInfo.medium}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Medium Profile"
                style={socialIconStyle}
              >
                <BookOpen size={17} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div style={{ fontSize: '0.825rem', color: '#64748b' }}>
            © {new Date().getFullYear()} Saumya Alpesh Patel. Built with React, Vite &amp; TypeScript.
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="btn btn-secondary"
            style={{
              padding: '0.45rem 0.9rem',
              fontSize: '0.8rem',
              borderRadius: '8px',
            }}
          >
            <ArrowUp size={14} /> Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

const socialIconStyle: React.CSSProperties = {
  width: '36px',
  height: '36px',
  borderRadius: '8px',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  color: '#cbd5e1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.2s ease',
};
