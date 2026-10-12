import React from 'react';
import { Bot, Activity, PieChart, Database, GitBranch, ShieldCheck, Cpu } from 'lucide-react';

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
            <Bot size={13} /> NLP Triage Pipeline
          </span>
          <span style={headerMetricStyle('#38bdf8')}>FastAPI • 75ms</span>
        </div>

        {/* 2x2 Architecture Stepper Grid */}
        <div style={grid2x2Style}>
          <div style={stepCardStyle('#38bdf8')}>
            <span style={stepNumberStyle('#38bdf8')}>01 • Ingestion</span>
            <span style={stepTitleStyle}>Citizen Grievance</span>
            <span style={stepDescStyle}>Raw text input</span>
          </div>
          <div style={stepCardStyle('#6366f1')}>
            <span style={stepNumberStyle('#818cf8')}>02 • NLP Engine</span>
            <span style={stepTitleStyle}>TF-IDF + VADER</span>
            <span style={stepDescStyle}>Polarity &amp; n-grams</span>
          </div>
          <div style={stepCardStyle('#a855f7')}>
            <span style={stepNumberStyle('#c084fc')}>03 • Classifier</span>
            <span style={stepTitleStyle}>Softmax Model</span>
            <span style={stepDescStyle}>5-Class department</span>
          </div>
          <div style={stepCardStyle('#10b981')}>
            <span style={stepNumberStyle('#34d399')}>04 • Dispatch</span>
            <span style={stepTitleStyle}>Automated Route</span>
            <span style={stepDescStyle}>Officer assignment</span>
          </div>
        </div>

        {/* Metrics Row */}
        <div style={metricsBarRowStyle}>
          <div style={metricPillStyle}>
            <span style={metricLabelStyle}>Accuracy</span>
            <strong style={metricValueStyle('#38bdf8')}>92.0%</strong>
          </div>
          <div style={metricPillStyle}>
            <span style={metricLabelStyle}>Turnaround</span>
            <strong style={metricValueStyle('#10b981')}>-40% Time</strong>
          </div>
          <div style={metricPillStyle}>
            <span style={metricLabelStyle}>Latency</span>
            <strong style={metricValueStyle('#c084fc')}>~75ms</strong>
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
            <Activity size={13} /> SHAP Feature Attribution
          </span>
          <span style={headerMetricStyle('#a855f7')}>F1-Score: 89%</span>
        </div>

        {/* Clean Stacked SHAP Feature Bars with No Cutoff */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', margin: '0.85rem 0' }}>
          <div style={shapItemContainerStyle}>
            <div style={shapHeaderRowStyle}>
              <span style={shapFeatureNameStyle}>BMI (&gt;30 kg/m²)</span>
              <span style={shapValueBadgeStyle('#ef4444', 'rgba(239, 68, 68, 0.12)')}>+0.42 SHAP (High Risk)</span>
            </div>
            <div style={progressBarTrackStyle}>
              <div style={progressBarFillStyle('linear-gradient(90deg, #ef4444, #f87171)', '85%')} />
            </div>
          </div>

          <div style={shapItemContainerStyle}>
            <div style={shapHeaderRowStyle}>
              <span style={shapFeatureNameStyle}>Neck Circumference</span>
              <span style={shapValueBadgeStyle('#ef4444', 'rgba(239, 68, 68, 0.12)')}>+0.31 SHAP (High Risk)</span>
            </div>
            <div style={progressBarTrackStyle}>
              <div style={progressBarFillStyle('linear-gradient(90deg, #ef4444, #f87171)', '68%')} />
            </div>
          </div>

          <div style={shapItemContainerStyle}>
            <div style={shapHeaderRowStyle}>
              <span style={shapFeatureNameStyle}>SpO2 Desaturation</span>
              <span style={shapValueBadgeStyle('#f59e0b', 'rgba(245, 158, 11, 0.12)')}>+0.25 SHAP (Hypoxia)</span>
            </div>
            <div style={progressBarTrackStyle}>
              <div style={progressBarFillStyle('linear-gradient(90deg, #f59e0b, #fbbf24)', '55%')} />
            </div>
          </div>

          <div style={shapItemContainerStyle}>
            <div style={shapHeaderRowStyle}>
              <span style={shapFeatureNameStyle}>Physical Activity</span>
              <span style={shapValueBadgeStyle('#10b981', 'rgba(16, 185, 129, 0.12)')}>-0.18 SHAP (Protective)</span>
            </div>
            <div style={progressBarTrackStyle}>
              <div style={progressBarFillStyle('linear-gradient(90deg, #10b981, #34d399)', '38%')} />
            </div>
          </div>
        </div>

        <div style={disclaimerBannerStyle}>
          <ShieldCheck size={14} color="#60a5fa" style={{ flexShrink: 0 }} />
          <span>Clinical Decision Support Prototype • Tree Explainability</span>
        </div>
      </div>
    );
  }

  if (type === 'insurance') {
    return (
      <div className="project-visual-container" style={containerStyle}>
        <div style={topBarStyle}>
          <span style={pillBadgeStyle('#38bdf8')}>
            <PieChart size={13} /> Power BI Intelligence
          </span>
          <span style={headerMetricStyle('#38bdf8')}>$10M+ Monitored</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', margin: '0.85rem 0' }}>
          <div style={kpiBoxStyle}>
            <span style={kpiLabelStyle}>Active Volume</span>
            <span style={kpiValueStyle('#38bdf8')}>$10.4M</span>
            <span style={kpiTrendStyle}>+14.2% YoY</span>
          </div>
          <div style={kpiBoxStyle}>
            <span style={kpiLabelStyle}>Loss Ratio</span>
            <span style={kpiValueStyle('#10b981')}>62.4%</span>
            <span style={kpiTrendStyle}>Target &lt;65%</span>
          </div>
          <div style={kpiBoxStyle}>
            <span style={kpiLabelStyle}>Settlement</span>
            <span style={kpiValueStyle('#a855f7')}>4.8 Days</span>
            <span style={kpiTrendStyle}>-65% Latency</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          <span style={daxFormulaTagStyle}>
            <strong style={{ color: '#38bdf8' }}>DAX:</strong> [Loss Ratio] = DIVIDE([Claims Paid], [Earned Premium])
          </span>
          <span style={daxFormulaTagStyle}>
            <strong style={{ color: '#38bdf8' }}>Model:</strong> 15+ Star Schema DAX Measures &amp; Time Intelligence
          </span>
        </div>
      </div>
    );
  }

  if (type === 'india-ogd') {
    return (
      <div className="project-visual-container" style={containerStyle}>
        <div style={topBarStyle}>
          <span style={pillBadgeStyle('#10b981')}>
            <Database size={13} /> data.gov.in Audit
          </span>
          <span style={headerMetricStyle('#10b981')}>500+ Datasets</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', margin: '0.85rem 0' }}>
          <div style={shapItemContainerStyle}>
            <div style={shapHeaderRowStyle}>
              <span style={shapFeatureNameStyle}>Transport &amp; Highways</span>
              <span style={shapValueBadgeStyle('#38bdf8', 'rgba(56, 189, 248, 0.12)')}>114 Datasets</span>
            </div>
            <div style={progressBarTrackStyle}>
              <div style={progressBarFillStyle('linear-gradient(90deg, #38bdf8, #0284c7)', '85%')} />
            </div>
          </div>

          <div style={shapItemContainerStyle}>
            <div style={shapHeaderRowStyle}>
              <span style={shapFeatureNameStyle}>Agriculture &amp; Farmers</span>
              <span style={shapValueBadgeStyle('#818cf8', 'rgba(129, 140, 248, 0.12)')}>92 Datasets</span>
            </div>
            <div style={progressBarTrackStyle}>
              <div style={progressBarFillStyle('linear-gradient(90deg, #6366f1, #818cf8)', '70%')} />
            </div>
          </div>

          <div style={shapItemContainerStyle}>
            <div style={shapHeaderRowStyle}>
              <span style={shapFeatureNameStyle}>Health &amp; Family Welfare</span>
              <span style={shapValueBadgeStyle('#f59e0b', 'rgba(245, 158, 11, 0.12)')}>58 Datasets</span>
            </div>
            <div style={progressBarTrackStyle}>
              <div style={progressBarFillStyle('linear-gradient(90deg, #f59e0b, #fbbf24)', '45%')} />
            </div>
          </div>
        </div>

        <div style={disclaimerBannerStyle}>
          <span>Audited reporting disparity across 12 Indian union ministries</span>
        </div>
      </div>
    );
  }

  // MLOps
  return (
    <div className="project-visual-container" style={containerStyle}>
      <div style={topBarStyle}>
        <span style={pillBadgeStyle('#6366f1')}>
          <GitBranch size={13} /> MLOps Pipeline
        </span>
        <span style={headerMetricStyle('#6366f1')}>ZenML + MLflow</span>
      </div>

      <div style={grid2x2Style}>
        <div style={stepCardStyle('#38bdf8')}>
          <span style={stepNumberStyle('#38bdf8')}>01 • Ingestion</span>
          <span style={stepTitleStyle}>Data Validation</span>
          <span style={stepDescStyle}>Schema check</span>
        </div>
        <div style={stepCardStyle('#6366f1')}>
          <span style={stepNumberStyle('#818cf8')}>02 • Orchestrate</span>
          <span style={stepTitleStyle}>ZenML DAG</span>
          <span style={stepDescStyle}>Step execution</span>
        </div>
        <div style={stepCardStyle('#a855f7')}>
          <span style={stepNumberStyle('#c084fc')}>03 • Track</span>
          <span style={stepTitleStyle}>MLflow Runs</span>
          <span style={stepDescStyle}>Params &amp; metrics</span>
        </div>
        <div style={stepCardStyle('#10b981')}>
          <span style={stepNumberStyle('#34d399')}>04 • Deploy</span>
          <span style={stepTitleStyle}>Docker Container</span>
          <span style={stepDescStyle}>REST endpoint</span>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.8rem', padding: '0.5rem 0.75rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
        <span style={{ fontSize: '0.725rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Cpu size={14} color="#38bdf8" /> Model registry &amp; parameter tracking
        </span>
        <span style={{ fontSize: '0.725rem', color: '#38bdf8', fontWeight: 600 }}>100% Parity</span>
      </div>
    </div>
  );
};

// Clean, Responsive Styles
const containerStyle: React.CSSProperties = {
  background: 'rgba(9, 14, 26, 0.95)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  borderRadius: '12px',
  padding: '1rem 1.1rem',
  fontFamily: 'inherit',
};

const topBarStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '0.5rem',
  marginBottom: '0.75rem',
};

const pillBadgeStyle = (accent: string): React.CSSProperties => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.4rem',
  padding: '0.25rem 0.6rem',
  borderRadius: '999px',
  fontSize: '0.725rem',
  fontWeight: 600,
  background: `${accent}15`,
  color: accent,
  border: `1px solid ${accent}30`,
  whiteSpace: 'nowrap',
});

const headerMetricStyle = (accent: string): React.CSSProperties => ({
  fontSize: '0.725rem',
  color: accent,
  fontFamily: 'var(--font-mono)',
  fontWeight: 600,
  whiteSpace: 'nowrap',
});

const grid2x2Style: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '0.5rem',
  margin: '0.75rem 0',
};

const stepCardStyle = (color: string): React.CSSProperties => ({
  background: 'rgba(255, 255, 255, 0.02)',
  border: `1px solid ${color}25`,
  borderRadius: '8px',
  padding: '0.45rem 0.6rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.1rem',
});

const stepNumberStyle = (color: string): React.CSSProperties => ({
  fontSize: '0.625rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
  color,
});

const stepTitleStyle: React.CSSProperties = {
  fontSize: '0.775rem',
  fontWeight: 700,
  color: '#f8fafc',
  lineHeight: 1.25,
};

const stepDescStyle: React.CSSProperties = {
  fontSize: '0.65rem',
  color: '#94a3b8',
};

const metricsBarRowStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '0.4rem',
  marginTop: '0.75rem',
};

const metricPillStyle: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.03)',
  padding: '0.45rem 0.3rem',
  borderRadius: '6px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: '0.1rem',
};

const metricLabelStyle: React.CSSProperties = {
  color: '#94a3b8',
  fontSize: '0.675rem',
};

const metricValueStyle = (color: string): React.CSSProperties => ({
  color,
  fontSize: '0.9rem',
  fontWeight: 700,
  fontFamily: 'var(--font-mono)',
});

const shapItemContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
};

const shapHeaderRowStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '0.5rem',
};

const shapFeatureNameStyle: React.CSSProperties = {
  fontSize: '0.75rem',
  fontWeight: 600,
  color: '#cbd5e1',
};

const shapValueBadgeStyle = (textColor: string, bgColor: string): React.CSSProperties => ({
  fontSize: '0.675rem',
  fontWeight: 600,
  fontFamily: 'var(--font-mono)',
  color: textColor,
  background: bgColor,
  padding: '0.15rem 0.45rem',
  borderRadius: '4px',
  whiteSpace: 'nowrap',
});

const progressBarTrackStyle: React.CSSProperties = {
  width: '100%',
  height: '6px',
  background: 'rgba(255, 255, 255, 0.06)',
  borderRadius: '999px',
  overflow: 'hidden',
};

const progressBarFillStyle = (background: string, width: string): React.CSSProperties => ({
  width,
  height: '100%',
  background,
  borderRadius: '999px',
  transition: 'width 0.4s ease',
});

const disclaimerBannerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  fontSize: '0.7rem',
  color: '#94a3b8',
  background: 'rgba(255, 255, 255, 0.02)',
  padding: '0.45rem 0.6rem',
  borderRadius: '6px',
  marginTop: '0.6rem',
};

const kpiBoxStyle: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid rgba(255, 255, 255, 0.06)',
  padding: '0.55rem 0.4rem',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.15rem',
  textAlign: 'center',
};

const kpiLabelStyle: React.CSSProperties = {
  fontSize: '0.675rem',
  color: '#94a3b8',
};

const kpiValueStyle = (color: string): React.CSSProperties => ({
  fontSize: '1rem',
  fontWeight: 700,
  fontFamily: 'var(--font-mono)',
  color,
});

const kpiTrendStyle: React.CSSProperties = {
  fontSize: '0.65rem',
  color: '#94a3b8',
};

const daxFormulaTagStyle: React.CSSProperties = {
  fontSize: '0.675rem',
  fontFamily: 'var(--font-mono)',
  background: 'rgba(56, 189, 248, 0.05)',
  color: '#94a3b8',
  padding: '0.35rem 0.55rem',
  borderRadius: '6px',
  border: '1px solid rgba(56, 189, 248, 0.15)',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};
