import type { ConfidenceLevel } from '@/types';
import styles from './ConfidenceIndicator.module.scss';

interface ConfidenceIndicatorProps {
  level: ConfidenceLevel;
}

const LABEL_MAP: Record<ConfidenceLevel, string> = {
  HIGH:   'High Confidence',
  MEDIUM: 'Medium Confidence',
  LOW:    'Low Confidence',
};

export default function ConfidenceIndicator({ level }: ConfidenceIndicatorProps) {
  return (
    <div className={`${styles.indicator} ${styles[level.toLowerCase()]}`}>
      <span className={styles.dot} />
      <span className={styles.label}>{LABEL_MAP[level]}</span>
    </div>
  );
}
