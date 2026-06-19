import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import StatCard from '@/components/ui/StatCard';
import type { MarketIndex } from '@/types';
import styles from './MarketOverview.module.scss';

// TODO: LOGIC agent — replace with live market index data from store
const PLACEHOLDER_INDICES: MarketIndex[] = [
  { name: 'S&P 500',   value: 0, change: 0, changePercent: 0 },
  { name: 'NASDAQ',    value: 0, change: 0, changePercent: 0 },
  { name: 'DOW',       value: 0, change: 0, changePercent: 0 },
  { name: 'VIX',       value: 0, change: 0, changePercent: 0 },
];

export default function MarketOverview() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Market Indices</h2>
      <div className={styles.grid}>
        {PLACEHOLDER_INDICES.map((index) => (
          <StatCard
            key={index.name}
            label={index.name}
            value="—"
            subValue="—"
            trend="neutral"
            icon={<TrendingUpIcon fontSize="small" />}
          />
        ))}
      </div>
    </section>
  );
}
