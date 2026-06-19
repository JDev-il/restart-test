import AppLayout from '@/components/layout/AppLayout';
import WatchlistPanel from '@/components/watchlist/WatchlistPanel';
import styles from './watchlist.module.scss';

export const metadata = { title: 'Watchlist — MarketMind' };

export default function WatchlistPage() {
  return (
    <AppLayout>
      <div className={styles.page}>
        <header className={styles.header}>
          <h1 className={styles.title}>Watchlist</h1>
          <p className={styles.subtitle}>Stocks you are tracking</p>
        </header>

        {/* TODO: LOGIC agent — fetch and manage watchlist from store */}
        <WatchlistPanel />
      </div>
    </AppLayout>
  );
}
