import BookmarkIcon from '@mui/icons-material/Bookmark';
import type { WatchlistEntry } from '@/types';
import WatchlistItem from './WatchlistItem';
import EmptyState from '@/components/ui/EmptyState';
import styles from './WatchlistPanel.module.scss';

interface WatchlistPanelProps {
  entries?: WatchlistEntry[];
}

// TODO: LOGIC agent — receive entries from watchlist Redux slice
export default function WatchlistPanel({ entries = [] }: WatchlistPanelProps) {
  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <span className={styles.count}>
          {entries.length} {entries.length === 1 ? 'stock' : 'stocks'} watched
        </span>
        {/* TODO: LOGIC agent — wire sort/filter controls */}
      </div>

      <div className={styles.list}>
        {entries.length === 0 ? (
          <EmptyState
            icon={<BookmarkIcon />}
            title="Watchlist is empty"
            description="Search for a stock and add it to your watchlist to monitor it here."
          />
        ) : (
          entries.map((entry) => (
            <WatchlistItem key={entry.symbol} entry={entry} />
          ))
        )}
      </div>
    </div>
  );
}
