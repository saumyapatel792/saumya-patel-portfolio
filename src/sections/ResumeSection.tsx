import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { FileText, Download, ExternalLink, CheckCircle2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ResumeSection: React.FC = () => {
  const handleDownload = () => {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.8 },
    });
  };

  return (
    <section id="resume" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FileText size={14} /> Curriculum Vitae
          </div>
          <h2 className="section-title">
            Professional <span className="gradient-text">Resume</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive resume documenting graduate coursework, machine learning internships, certified competencies, and research publications.
          </p>
        </div>

        {/* Resume Showcase Box */}
        <div className="glass-card" style={resumeContainerStyle}>
          <div style={resumeHeaderStyle}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={pdfIconBadgeStyle}>
                <FileText size={24} color="#38bdf8" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff' }}>
                  Saumya_Patel_Resume.pdf
                </h3>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                  Data Science &amp; AI Postgraduate • 178 KB • Updated 2026
                </span>
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ padding: '0.65rem 1.15rem' }}
              >
                <ExternalLink size={16} />
                <span>View in New Tab</span>
              </a>

              <a
                href={personalInfo.resumePath}
                download="Saumya_Patel_Resume.pdf"
                onClick={handleDownload}
                className="btn btn-primary"
                style={{ padding: '0.65rem 1.25rem' }}
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Quick Resume Highlights Grid */}
          <div style={resumeQuickSummaryGridStyle}>
            <div style={summaryColumnStyle}>
              <h4 style={summaryColTitleStyle('#38bdf8')}>Core Competencies</h4>
              <ul style={summaryListStyle}>
                <li style={summaryItemStyle}>
                  <CheckCircle2 size={15} color="#38bdf8" />
                  <span>ML Lifecycle: Preprocessing, Feature Engineering, API Serving</span>
                </li>
                <li style={summaryItemStyle}>
                  <CheckCircle2 size={15} color="#38bdf8" />
                  <span>Predictive Modeling: Time-Series, Classification, Risk Scoring</span>
                </li>
                <li style={summaryItemStyle}>
                  <CheckCircle2 size={15} color="#38bdf8" />
                  <span>Business Intelligence: 25+ DAX Measures &amp; Star Schema</span>
                </li>
              </ul>
            </div>

            <div style={summaryColumnStyle}>
              <h4 style={summaryColTitleStyle('#10b981')}>Academic Credentials</h4>
              <ul style={summaryListStyle}>
                <li style={summaryItemStyle}>
                  <CheckCircle2 size={15} color="#10b981" />
                  <span>M.Sc. Data Science, Alliance University (GPA: 9.6)</span>
                </li>
                <li style={summaryItemStyle}>
                  <CheckCircle2 size={15} color="#10b981" />
                  <span>B.Sc. Information Technology, LJ University (GPA: 8.71)</span>
                </li>
                <li style={summaryItemStyle}>
                  <CheckCircle2 size={15} color="#10b981" />
                  <span>Winner, DATA BLITZ: The Excel Challenge 2026</span>
                </li>
              </ul>
            </div>

            <div style={summaryColumnStyle}>
              <h4 style={summaryColTitleStyle('#a855f7')}>Industry Experience</h4>
              <ul style={summaryListStyle}>
                <li style={summaryItemStyle}>
                  <CheckCircle2 size={15} color="#a855f7" />
                  <span>Data Science Intern @ Prodigy InfoTech (03/2026 – 04/2026)</span>
                </li>
                <li style={summaryItemStyle}>
                  <CheckCircle2 size={15} color="#a855f7" />
                  <span>Data Analyst Intern @ Cognifyz Technologies (06/2025 – 07/2025)</span>
                </li>
                <li style={summaryItemStyle}>
                  <CheckCircle2 size={15} color="#a855f7" />
                  <span>IFERP Research Conference Publication Author (01/2025)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Embedded PDF Viewer or Fallback */}
          <div style={{ marginTop: '2rem' }}>
            <div style={embeddedViewerContainerStyle}>
              <iframe
                src={`${personalInfo.resumePath}#toolbar=0&navpanes=0`}
                title="Saumya Patel Resume Preview"
                style={{ width: '100%', height: '550px', border: 'none', borderRadius: '8px' }}
              />
            </div>

            {/* Fallback notification */}
            <div style={fallbackNoticeStyle}>
              <AlertCircle size={15} color="#94a3b8" />
              <span>
                If the PDF preview does not render in your browser on mobile, please use the <strong>"Download Resume"</strong> or <strong>"View in New Tab"</strong> button above.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Styles
const resumeContainerStyle: React.CSSProperties = {
  padding: '2.5rem',
  border: '1px solid rgba(56, 189, 248, 0.2)',
};

const resumeHeaderStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '1.25rem',
  paddingBottom: '2rem',
  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
};

const pdfIconBadgeStyle: React.CSSProperties = {
  width: '50px',
  height: '50px',
  borderRadius: '12px',
  backgroundColor: 'rgba(56, 189, 248, 0.1)',
  border: '1px solid rgba(56, 189, 248, 0.25)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const resumeQuickSummaryGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '1.5rem',
  marginTop: '2rem',
};

const summaryColumnStyle: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.02)',
  border: '1px solid rgba(255, 255, 255, 0.06)',
  borderRadius: '10px',
  padding: '1.25rem',
};

const summaryColTitleStyle = (color: string): React.CSSProperties => ({
  fontSize: '0.85rem',
  fontWeight: 700,
  color,
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
  marginBottom: '0.8rem',
});

const summaryListStyle: React.CSSProperties = {
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.65rem',
};

const summaryItemStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '0.6rem',
  fontSize: '0.86rem',
  color: '#cbd5e1',
  lineHeight: 1.45,
};

const embeddedViewerContainerStyle: React.CSSProperties = {
  background: 'rgba(0, 0, 0, 0.4)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  borderRadius: '12px',
  padding: '0.5rem',
  overflow: 'hidden',
};

const fallbackNoticeStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
  fontSize: '0.8rem',
  color: '#94a3b8',
  marginTop: '1rem',
  justifyContent: 'center',
  textAlign: 'center',
};
