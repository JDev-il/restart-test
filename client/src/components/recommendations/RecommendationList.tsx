import type { AIRecommendation, RecommendationAction } from '@/types';
import RecommendationCard from './RecommendationCard';
import EmptyState from '@/components/ui/EmptyState';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import styles from './RecommendationList.module.scss';

interface RecommendationListProps {
  recommendations?: AIRecommendation[];
}

const FILTER_ACTIONS: RecommendationAction[] = ['BUY', 'SELL', 'HOLD', 'WATCH'];

export default function RecommendationList({ recommendations = [] }: RecommendationListProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.filters}>
        <button className={`${styles.filterBtn} ${styles.active}`}>All</button>
        {FILTER_ACTIONS.map((action) => (
          <button key={action} className={styles.filterBtn}>{action}</button>
        ))}
        {/* TODO: LOGIC agent — wire filter state to slice */}
      </div>

      <div className={styles.list}>
        {recommendations.length === 0 ? (
          <EmptyState
            icon={<AutoAwesomeIcon />}
            title="No recommendations yet"
            description="The AI agent is analyzing market data. Recommendations will appear here."
          />
        ) : (
          recommendations.map((rec) => (
            <RecommendationCard key={rec.id} recommendation={rec} />
          ))
        )}
      </div>
    </div>
  );
}
