import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import EmptyState from '@/components/ui/EmptyState';
import styles from './TrendFeed.module.scss';

// TODO: LOGIC agent — replace with AI-generated trend feed from agentic pipeline
export default function TrendFeed() {
  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <h2 className={styles.title}>AI Trend Signals</h2>
        <AutoAwesomeIcon fontSize="small" className={styles.aiIcon} />
      </div>

      <div className={styles.feed}>
        {/* TODO: LOGIC agent — render TrendSignalItem list from store */}
        <EmptyState
          icon={<AutoAwesomeIcon />}
          title="Awaiting AI signals"
          description="The agentic pipeline will surface trend signals here."
        />
      </div>
    </div>
  );
}
