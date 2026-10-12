import React from 'react';
import { skillCategoriesData } from '../data/portfolioData';
import { Cpu, Code2, BrainCircuit, Sparkles, BarChart3, Server, Check } from 'lucide-react';

export const Skills: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 size={20} color="#38bdf8" />;
      case 'BrainCircuit':
        return <BrainCircuit size={20} color="#818cf8" />;
      case 'Sparkles':
        return <Sparkles size={20} color="#c084fc" />;
      case 'BarChart3':
        return <BarChart3 size={20} color="#34d399" />;
      case 'Server':
        return <Server size={20} color="#38bdf8" />;
      default:
        return <Cpu size={20} color="#38bdf8" />;
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} /> Technical Arsenal
          </div>
          <h2 className="section-title">
            Skills &amp; <span className="gradient-text">Core Competencies</span>
          </h2>
          <p className="section-subtitle">
            Curated, verified technical toolsets derived from practical projects, graduate coursework, and industry internships.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div style={skillsGridStyle}>
          {skillCategoriesData.map((category) => (
            <div key={category.id} className="glass-card" style={{ padding: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={iconBoxStyle}>
                  {getCategoryIcon(category.iconName)}
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem' }}>
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`badge ${skill.isPrimary ? 'badge-cyan' : ''}`}
                    style={{
                      padding: '0.35rem 0.75rem',
                      fontSize: '0.825rem',
                      backgroundColor: skill.isPrimary ? 'rgba(56, 189, 248, 0.1)' : 'rgba(255, 255, 255, 0.04)',
                      borderColor: skill.isPrimary ? 'rgba(56, 189, 248, 0.28)' : 'rgba(255, 255, 255, 0.08)',
                      color: skill.isPrimary ? '#e0f2fe' : '#cbd5e1',
                    }}
                  >
                    {skill.isPrimary && <Check size={12} color="#38bdf8" style={{ marginRight: '0.2rem' }} />}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Notice on Authenticity */}
        <div style={authenticityNoticeStyle}>
          <p style={{ fontSize: '0.825rem', color: '#94a3b8', textAlign: 'center' }}>
            Note: Skill proficiencies reflect hands-on project implementation and rigorous academic exposure without artificial percentage bars.
          </p>
        </div>
      </div>
    </section>
  );
};

const skillsGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gap: '1.5rem',
};

const iconBoxStyle: React.CSSProperties = {
  width: '38px',
  height: '38px',
  borderRadius: '10px',
  background: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const authenticityNoticeStyle: React.CSSProperties = {
  marginTop: '2.5rem',
  padding: '0.85rem 1.5rem',
  background: 'rgba(255, 255, 255, 0.02)',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  borderRadius: '999px',
  maxWidth: '700px',
  marginInline: 'auto',
};
