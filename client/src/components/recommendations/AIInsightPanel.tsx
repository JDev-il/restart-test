import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PsychologyIcon from '@mui/icons-material/Psychology';
import styles from './AIInsightPanel.module.scss';

// TODO: LOGIC agent — wire real-time AI signal stream
export default function AIInsightPanel() {
  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <PsychologyIcon fontSize="small" className={styles.icon} />
        <h3 className={styles.title}>AI Analysis Engine</h3>
      </div>

      <div className={styles.status}>
        <span className={styles.statusDot} />
        <span className={styles.statusLabel}>Awaiting data connection</span>
        {/* TODO: LOGIC agent — show ACTIVE when connected to AI pipeline */}
      </div>

      <div className={styles.metrics}>
        <div className={styles.metric}>
          <span className={styles.metricLabel}>Signals Analyzed</span>
          <span className={styles.metricValue}>—</span>
        </div>
        <div className={styles.metric}>
          <span className={styles.metricLabel}>Model Accuracy</span>
          <span className={styles.metricValue}>—</span>
        </div>
        <div className={styles.metric}>
          <span className={styles.metricLabel}>Last Run</span>
          <span className={styles.metricValue}>—</span>
        </div>
      </div>

      {/* TODO: LOGIC agent — render streaming AI thought process */}
      <div className={styles.stream}>
        <div className={styles.streamPlaceholder}>
          <AutoAwesomeIcon className={styles.streamIcon} fontSize="small" />
          <p className={styles.streamText}>AI reasoning will stream here</p>
        </div>
      </div>
    </div>
  );
}
