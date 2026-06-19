import Link from 'next/link';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import EmptyState from '@/components/ui/EmptyState';
import styles from './TopMovers.module.scss';

// TODO: LOGIC agent — replace with live top movers from market data API
const PLACEHOLDER_MOVERS: { symbol: string; name: string }[] = [];

export default function TopMovers() {
  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <h2 className={styles.title}>Top Movers</h2>
        <div className={styles.tabs}>
          <button className={`${styles.tab} ${styles.active}`}>Gainers</button>
          <button className={styles.tab}>Losers</button>
        </div>
      </div>

      <div className={styles.list}>
        {PLACEHOLDER_MOVERS.length === 0 ? (
          <EmptyState
            icon={<TrendingUpIcon />}
            title="No data yet"
            description="Market mover data will appear here once connected."
          />
        ) : (
          PLACEHOLDER_MOVERS.map(({ symbol }) => (
            <Link key={symbol} href={`/stocks/${symbol}`} className={styles.row}>
              {/* TODO: LOGIC agent — render StockCard with live data */}
              <span>{symbol}</span>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
