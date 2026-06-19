import AppLayout from '@/components/layout/AppLayout';
import MarketOverview from '@/components/dashboard/MarketOverview';
import PortfolioSummary from '@/components/dashboard/PortfolioSummary';
import TopMovers from '@/components/dashboard/TopMovers';
import TrendFeed from '@/components/dashboard/TrendFeed';
import styles from './dashboard.module.scss';

export const metadata = { title: 'Dashboard — MarketMind' };

export default function DashboardPage() {
  return (
    <AppLayout>
      <div className={styles.page}>
        <header className={styles.header}>
          <h1 className={styles.title}>Market Dashboard</h1>
          <p className={styles.subtitle}>AI-powered insights updated in real time</p>
        </header>

        <section className={styles.overview}>
          <MarketOverview />
        </section>

        <div className={styles.grid}>
          <div className={styles.primary}>
            {/* TODO: LOGIC agent — wire live chart data */}
            <TopMovers />
            <TrendFeed />
          </div>
          <aside className={styles.sidebar}>
            {/* TODO: LOGIC agent — wire portfolio state */}
            <PortfolioSummary />
          </aside>
        </div>
      </div>
    </AppLayout>
  );
}
