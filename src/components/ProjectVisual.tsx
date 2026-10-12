import React from 'react';
import { Bot, Activity, PieChart, Database, GitBranch, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';

interface ProjectVisualProps {
  type: 'grievance' | 'sleep-apnea' | 'insurance' | 'india-ogd' | 'mlops';
  interactive?: boolean;
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ type }) => {
  if (type === 'grievance') {
    return (
      <div className="project-visual-container" style={containerStyle}>
        <div style={topBarStyle}>
          <span style={pillBadgeStyle('#38bdf8')}>
            <Bot size={13} /> NLP Grievance Triage Pipeline
          </span>
          <span style={latencyBadgeStyle}>Latency: ~75ms</span>
        </div>

        <div style={pipelineFlowStyle}>
          <div style={nodeCardStyle('#38bdf8')}>
            <span style={nodeLabelStyle}>Citizen Text</span>
            <span style={nodeSubStyle}>Raw Complaint</span>
          </div>
          <ArrowRight size={16} color="#6366f1" />
          <div style={nodeCardStyle('#6366f1')}>
            <span style={nodeLabelStyle}>TF-IDF Vector</span>
            <span style={nodeSubStyle}>n-grams (1,2)</span>
          </div>
          <ArrowRight size={16} color="#8b5cf6" />
          <div style={nodeCardStyle('#8b5cf6')}>
            <span style={nodeLabelStyle}>Logistic Reg.</span>
            <span style={nodeSubStyle}>5-Class Softmax</span>
          </div>
          <ArrowRight size={16} color="#10b981" />
          <div style={nodeCardStyle('#10b981')}>
            <span style={nodeLabelStyle}>FastAPI Route</span>
            <span style={nodeSubStyle}>Urgency + Dept</span>
          </div>
        </div>

        <div style={metricsBarRowStyle}>
          <div style={metricPillStyle}>
            <span style={{ color: '#94a3b8', fontSize: '0.75rem' }}>Department Accuracy</span>
            <strong style={{ color: '#38bdf8', fontSize: '1rem' }}>92.0%</strong>
          </div>
          <div style={metricPillStyle}>
            <span style={{ color: '#94a3b8', fontSize: '0.75rem' }}>Turnaround Delta</span>
            <strong style={{ color: '#10b981', fontSize: '1rem' }}>-40% Time</strong>
          </div>
          <div style={metricPillStyle}>
            <span style={{ color: '#94a3b8', fontSize: '0.75rem' }}>Sentiment Engine</span>
            <strong style={{ color: '#a855f7', fontSize: '1rem' }}>VADER + Weights</strong>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'sleep-apnea') {
    return (
      <div className="project-visual-container" style={containerStyle}>
        <div style={topBarStyle}>
          <span style={pillBadgeStyle('#a855f7')}>
            <Activity size={13} /> SHAP Feature Impact Diagnostics
          </span>
          <span style={latencyBadgeStyle}>F1-Score: 89%</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', margin: '0.75rem 0' }}>
          <div style={shapRowStyle}>
            <span style={shapLabelStyle}>BMI (&gt;30 kg/m²)</span>
            <div style={shapBarTrackStyle}>
              <div style={{ ...shapBarFillStyle('#ef4444', '85%') }}>+0.42 SHAP (Elevates Risk)</div>
            </div>
          </div>
          <div style={shapRowStyle}>
            <span style={shapLabelStyle}>Neck Circumference</span>
            <div style={shapBarTrackStyle}>
              <div style={{ ...shapBarFillStyle('#ef4444', '68%') }}>+0.31 SHAP (Elevates Risk)</div>
            </div>
          </div>
          <div style={shapRowStyle}>
            <span style={shapLabelStyle}>SpO2 Desaturation</span>
            <div style={shapBarTrackStyle}>
              <div style={{ ...shapBarFillStyle('#f59e0b', '60%') }}>+0.25 SHAP (Hypoxia)</div>
            </div>
          </div>
          <div style={shapRowStyle}>
            <span style={shapLabelStyle}>Physical Activity</span>
            <div style={shapBarTrackStyle}>
              <div style={{ ...shapBarFillStyle('#10b981', '40%') }}>-0.18 SHAP (Protective)</div>
            </div>
          </div>
        </div>

        <div style={disclaimerBannerStyle}>
          <ShieldCheck size={14} color="#60a5fa" />
          <span>Educational Clinical Decision Support — Ensemble Tree Explainer</span>
        </div>
      </div>
    );
  }

  if (type === 'insurance') {
    return (
      <div className="project-visual-container" style={containerStyle}>
        <div style={topBarStyle}>
          <span style={pillBadgeStyle('#38bdf8')}>
            <PieChart size={13} /> Power BI Star Schema &amp; DAX
          </span>
          <span style={latencyBadgeStyle}>$10M+ Monitored</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.6rem', margin: '0.8rem 0' }}>
          <div style={kpiBoxStyle}>
            <span style={kpiLabelStyle}>Active Portfolio</span>
            <span style={kpiValueStyle('#38bdf8')}>$10.4M</span>
            <span style={kpiTrendStyle}>+14.2% YoY</span>
          </div>
          <div style={kpiBoxStyle}>
            <span style={kpiLabelStyle}>Loss Ratio (DAX)</span>
            <span style={kpiValueStyle('#10b981')}>62.4%</span>
            <span style={kpiTrendStyle}>Target &lt;65%</span>
          </div>
          <div style={kpiBoxStyle}>
            <span style={kpiLabelStyle}>Claim Velocity</span>
            <span style={kpiValueStyle('#a855f7')}>4.8 Days</span>
            <span style={kpiTrendStyle}>-65% Latency</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span style={daxFormulaTagStyle}>[Total Premium] = SUM(FactPolicies[Amount])</span>
          <span style={daxFormulaTagStyle}>[YTD Growth] = TOTALYTD(...)</span>
        </div>
      </div>
    );
  }

  if (type === 'india-ogd') {
    return (
      <div className="project-visual-container" style={containerStyle}>
        <div style={topBarStyle}>
          <span style={pillBadgeStyle('#10b981')}>
            <Database size={13} /> data.gov.in Metadata Audit
          </span>
          <span style={latencyBadgeStyle}>500+ Datasets</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', margin: '0.75rem 0' }}>
          <div style={sectorRowStyle}>
            <span style={sectorLabelStyle}>Transport &amp; Highways</span>
            <div style={sectorBarTrackStyle}>
              <div style={{ width: '85%', height: '100%', background: '#38bdf8', borderRadius: '4px' }} />
            </div>
            <span style={sectorCountStyle}>114 Sets</span>
          </div>
          <div style={sectorRowStyle}>
            <span style={sectorLabelStyle}>Agriculture &amp; Farmers</span>
            <div style={sectorBarTrackStyle}>
              <div style={{ width: '70%', height: '100%', background: '#6366f1', borderRadius: '4px' }} />
            </div>
            <span style={sectorCountStyle}>92 Sets</span>
          </div>
          <div style={sectorRowStyle}>
            <span style={sectorLabelStyle}>Health &amp; Family Welfare</span>
            <div style={sectorBarTrackStyle}>
              <div style={{ width: '45%', height: '100%', background: '#f59e0b', borderRadius: '4px' }} />
            </div>
            <span style={sectorCountStyle}>58 Sets</span>
          </div>
        </div>

        <div style={disclaimerBannerStyle}>
          <span>Surfaced 25% sector-wise reporting disparity across 12 Indian ministries</span>
        </div>
      </div>
    );
  }

  // MLOps
  return (
    <div className="project-visual-container" style={containerStyle}>
      <div style={topBarStyle}>
        <span style={pillBadgeStyle('#6366f1')}>
          <GitBranch size={13} /> Automated MLOps Architecture
        </span>
        <span style={latencyBadgeStyle}>ZenML + MLflow + Docker</span>
      </div>

      <div style={pipelineFlowStyle}>
        <div style={nodeCardStyle('#38bdf8')}>
          <span style={nodeLabelStyle}>Data Ingestion</span>
          <span style={nodeSubStyle}>Validation Step</span>
        </div>
        <ArrowRight size={14} color="#6366f1" />
        <div style={nodeCardStyle('#6366f1')}>
          <span style={nodeLabelStyle}>ZenML DAG</span>
          <span style={nodeSubStyle}>Pipeline Steps</span>
        </div>
        <ArrowRight size={14} color="#a855f7" />
        <div style={nodeCardStyle('#a855f7')}>
          <span style={nodeLabelStyle}>MLflow Runs</span>
          <span style={nodeSubStyle}>Metrics &amp; Artifacts</span>
        </div>
        <ArrowRight size={14} color="#10b981" />
        <div style={nodeCardStyle('#10b981')}>
          <span style={nodeLabelStyle}>Docker Image</span>
          <span style={nodeSubStyle}>Container Serve</span>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.8rem', padding: '0.5rem 0.8rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
        <span style={{ fontSize: '0.775rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Cpu size={14} color="#38bdf8" /> Reproducible model registry &amp; parameter tracking
        </span>
        <span style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: 600 }}>100% Pipeline Parity</span>
      </div>
    </div>
  );
};

// Styles
const containerStyle: React.CSSProperties = {
  background: 'rgba(9, 14, 26, 0.95)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  borderRadius: '12px',
  padding: '1.1rem',
  fontFamily: 'inherit',
};

const topBarStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '0.75rem',
};

const pillBadgeStyle = (accent: string): React.CSSProperties => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.4rem',
  padding: '0.2rem 0.55rem',
  borderRadius: '999px',
  fontSize: '0.75rem',
  fontWeight: 600,
  background: `${accent}15`,
  color: accent,
  border: `1px solid ${accent}30`,
});

const latencyBadgeStyle: React.CSSProperties = {
  fontSize: '0.75rem',
  color: '#94a3b8',
  fontFamily: 'var(--font-mono)',
};

const pipelineFlowStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '0.3rem',
  margin: '0.75rem 0',
  flexWrap: 'wrap',
};

const nodeCardStyle = (color: string): React.CSSProperties => ({
  flex: '1 1 80px',
  background: 'rgba(255, 255, 255, 0.03)',
  border: `1px solid ${color}35`,
  borderRadius: '8px',
  padding: '0.45rem 0.5rem',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.15rem',
});

const nodeLabelStyle: React.CSSProperties = {
  fontSize: '0.75rem',
  fontWeight: 600,
  color: '#f8fafc',
};

const nodeSubStyle: React.CSSProperties = {
  fontSize: '0.675rem',
  color: '#94a3b8',
};

const metricsBarRowStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '0.5rem',
  marginTop: '0.75rem',
};

const metricPillStyle: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.02)',
  padding: '0.5rem',
  borderRadius: '6px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
};

const shapRowStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
  fontSize: '0.75rem',
};

const shapLabelStyle: React.CSSProperties = {
  width: '130px',
  color: '#cbd5e1',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

const shapBarTrackStyle: React.CSSProperties = {
  flex: 1,
  height: '18px',
  background: 'rgba(255, 255, 255, 0.05)',
  borderRadius: '4px',
  overflow: 'hidden',
  position: 'relative',
};

const shapBarFillStyle = (bg: string, width: string): React.CSSProperties => ({
  width,
  height: '100%',
  background: bg,
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '0.5rem',
  fontSize: '0.675rem',
  fontWeight: 600,
  color: '#ffffff',
});

const disclaimerBannerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  fontSize: '0.725rem',
  color: '#94a3b8',
  background: 'rgba(255, 255, 255, 0.02)',
  padding: '0.4rem 0.6rem',
  borderRadius: '6px',
  marginTop: '0.6rem',
};

const kpiBoxStyle: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid rgba(255, 255, 255, 0.06)',
  padding: '0.6rem 0.5rem',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.2rem',
};

const kpiLabelStyle: React.CSSProperties = {
  fontSize: '0.7rem',
  color: '#94a3b8',
};

const kpiValueStyle = (color: string): React.CSSProperties => ({
  fontSize: '1.05rem',
  fontWeight: 700,
  color,
});

const kpiTrendStyle: React.CSSProperties = {
  fontSize: '0.675rem',
  color: '#cbd5e1',
};

const daxFormulaTagStyle: React.CSSProperties = {
  fontSize: '0.7rem',
  fontFamily: 'var(--font-mono)',
  background: 'rgba(56, 189, 248, 0.07)',
  color: '#7dd3fc',
  padding: '0.2rem 0.5rem',
  borderRadius: '4px',
  border: '1px solid rgba(56, 189, 248, 0.2)',
};

const sectorRowStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
  fontSize: '0.75rem',
};

const sectorLabelStyle: React.CSSProperties = {
  width: '150px',
  color: '#cbd5e1',
};

const sectorBarTrackStyle: React.CSSProperties = {
  flex: 1,
  height: '10px',
  background: 'rgba(255, 255, 255, 0.05)',
  borderRadius: '4px',
  overflow: 'hidden',
};

const sectorCountStyle: React.CSSProperties = {
  width: '55px',
  textAlign: 'right',
  color: '#94a3b8',
  fontFamily: 'var(--font-mono)',
};
