import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, Check, Copy, ExternalLink, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Compose a clean, prefilled mailto link so it works natively without requiring third-party API keys
    const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name} via Portfolio`);
    const mailtoBody = encodeURIComponent(
      `Hi Saumya,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
    );

    // Open native email client
    window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setFormStatus('success');
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
    });
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'rgba(10, 14, 23, 0.5)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} /> Communication
          </div>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle">
            Whether discussing opportunities in Data Science, Machine Learning Engineering, AI solutions, or data analytics, feel free to reach out.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div style={contactGridStyle}>
          {/* Left Column: Direct Info & Copy Email */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginBottom: '0.6rem' }}>
                Contact Information
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '1.8rem' }}>
                I am actively seeking Data Science, Machine Learning, and AI Engineering roles. You can reach out directly via email, phone, or LinkedIn.
              </p>

              <div style={contactInfoListStyle}>
                {/* Email with Copy Action */}
                <div style={infoItemBoxStyle}>
                  <div style={infoIconStyle('#38bdf8')}>
                    <Mail size={18} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <span style={infoLabelStyle}>Email Address</span>
                    <a href={`mailto:${personalInfo.email}`} style={infoValueLinkStyle}>
                      {personalInfo.email}
                    </a>
                  </div>
                  <button
                    onClick={copyEmailToClipboard}
                    className="btn btn-secondary"
                    style={{ padding: '0.4rem 0.75rem', fontSize: '0.78rem' }}
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check size={14} color="#10b981" />
                        <span style={{ color: '#10b981' }}>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Phone */}
                <div style={infoItemBoxStyle}>
                  <div style={infoIconStyle('#10b981')}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <span style={infoLabelStyle}>Phone Number</span>
                    <a href={`tel:${personalInfo.phone}`} style={infoValueLinkStyle}>
                      {personalInfo.phoneFormatted}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div style={infoItemBoxStyle}>
                  <div style={infoIconStyle('#818cf8')}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span style={infoLabelStyle}>Current Location</span>
                    <span style={{ fontSize: '0.92rem', color: '#f8fafc', fontWeight: 500 }}>
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Verified Profiles Banner */}
              <div style={socialCardsGroupStyle}>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={socialCardLinkStyle}
                >
                  <span style={{ fontWeight: 600 }}>LinkedIn Profile</span>
                  <ExternalLink size={14} color="#94a3b8" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={socialCardLinkStyle}
                >
                  <span style={{ fontWeight: 600 }}>GitHub Repositories</span>
                  <ExternalLink size={14} color="#94a3b8" />
                </a>
                <a
                  href={personalInfo.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={socialCardLinkStyle}
                >
                  <span style={{ fontWeight: 600 }}>Medium Articles</span>
                  <ExternalLink size={14} color="#94a3b8" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div>
            <div className="glass-card" style={{ padding: '2.2rem 2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.4rem' }}>
                <MessageSquare size={18} color="#38bdf8" />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff' }}>
                  Send a Direct Message
                </h3>
              </div>

              {formStatus === 'success' && (
                <div style={successMessageBoxStyle}>
                  <Check size={18} color="#10b981" />
                  <div>
                    <strong style={{ color: '#f8fafc', fontSize: '0.9rem' }}>Message Prepared!</strong>
                    <p style={{ fontSize: '0.825rem', color: '#cbd5e1', marginTop: '0.15rem' }}>
                      Your native email client has been opened with your message prefilled. You can also contact me directly at {personalInfo.email}.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} style={formStyle}>
                <div style={formRowTwoColStyle}>
                  <div style={formFieldGroupStyle}>
                    <label htmlFor="name" style={formLabelStyle}>Your Name *</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={formInputStyle}
                    />
                  </div>

                  <div style={formFieldGroupStyle}>
                    <label htmlFor="email" style={formLabelStyle}>Your Email *</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. recruiter@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={formInputStyle}
                    />
                  </div>
                </div>

                <div style={formFieldGroupStyle}>
                  <label htmlFor="subject" style={formLabelStyle}>Subject</label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="e.g. Data Science / ML Opportunity at [Company]"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={formInputStyle}
                  />
                </div>

                <div style={formFieldGroupStyle}>
                  <label htmlFor="message" style={formLabelStyle}>Message *</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Hello Saumya, I came across your portfolio and would like to discuss..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ ...formInputStyle, resize: 'vertical' }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.8rem', fontSize: '0.95rem' }}
                >
                  <Send size={16} />
                  <span>Send Message via Email</span>
                </button>

                <p style={{ fontSize: '0.78rem', color: '#94a3b8', textAlign: 'center', marginTop: '0.6rem' }}>
                  Uses a direct, privacy-preserving client mailto handler with zero third-party credential exposure.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Styles
const contactGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gap: '2rem',
  alignItems: 'start',
};

const contactInfoListStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.1rem',
};

const infoItemBoxStyle: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.02)',
  border: '1px solid rgba(255, 255, 255, 0.06)',
  borderRadius: '10px',
  padding: '0.9rem 1.1rem',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
};

const infoIconStyle = (color: string): React.CSSProperties => ({
  width: '38px',
  height: '38px',
  borderRadius: '8px',
  background: `${color}15`,
  color,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
});

const infoLabelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.72rem',
  color: '#94a3b8',
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
  fontWeight: 600,
};

const infoValueLinkStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.92rem',
  color: '#f8fafc',
  fontWeight: 500,
  marginTop: '0.1rem',
};

const socialCardsGroupStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem',
  marginTop: '1.5rem',
  paddingTop: '1.25rem',
  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
};

const socialCardLinkStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0.65rem 0.9rem',
  borderRadius: '8px',
  background: 'rgba(255, 255, 255, 0.02)',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  color: '#cbd5e1',
  fontSize: '0.86rem',
};

const formStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
};

const formRowTwoColStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '1rem',
};

const formFieldGroupStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.35rem',
};

const formLabelStyle: React.CSSProperties = {
  fontSize: '0.8rem',
  fontWeight: 600,
  color: '#cbd5e1',
};

const formInputStyle: React.CSSProperties = {
  background: 'rgba(0, 0, 0, 0.4)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '8px',
  padding: '0.65rem 0.9rem',
  color: '#fff',
  fontSize: '0.9rem',
  fontFamily: 'inherit',
  outline: 'none',
};

const successMessageBoxStyle: React.CSSProperties = {
  background: 'rgba(16, 185, 129, 0.1)',
  border: '1px solid rgba(16, 185, 129, 0.3)',
  borderRadius: '10px',
  padding: '0.9rem 1.1rem',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '0.75rem',
  marginBottom: '1rem',
};
