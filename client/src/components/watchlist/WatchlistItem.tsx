import Link from 'next/link';
import IconButton from '@mui/material/IconButton';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import type { WatchlistEntry } from '@/types';
import styles from './WatchlistItem.module.scss';

interface WatchlistItemProps {
  entry: WatchlistEntry;
}

export default function WatchlistItem({ entry }: WatchlistItemProps) {
  const isGain = entry.changePercent >= 0;

  return (
    <div className={styles.item}>
      <Link href={`/stocks/${entry.symbol}`} className={styles.info}>
        <div className={styles.identity}>
          <span className={styles.symbol}>{entry.symbol}</span>
          <span className={styles.name}>{entry.name}</span>
        </div>
        <div className={styles.pricing}>
          <span className={styles.price}>${entry.currentPrice.toFixed(2)}</span>
          <span className={`${styles.change} ${isGain ? styles.gain : styles.loss}`}>
            {isGain ? <TrendingUpIcon fontSize="inherit" /> : <TrendingDownIcon fontSize="inherit" />}
            {isGain ? '+' : ''}{entry.changePercent.toFixed(2)}%
          </span>
        </div>
      </Link>

      {/* TODO: LOGIC agent — wire remove to watchlist slice action */}
      <IconButton
        size="small"
        className={styles.removeBtn}
        aria-label={`Remove ${entry.symbol} from watchlist`}
      >
        <BookmarkRemoveIcon fontSize="small" />
      </IconButton>
    </div>
  );
}
