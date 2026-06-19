import AppLayout from '@/components/layout/AppLayout';
import PortfolioTable from '@/components/portfolio/PortfolioTable';
import AllocationDisplay from '@/components/portfolio/AllocationDisplay';
import styles from './portfolio.module.scss';

export const metadata = { title: 'Portfolio — MarketMind' };

export default function PortfolioPage() {
  return (
    <AppLayout>
      <div className={styles.page}>
        <header className={styles.header}>
          <h1 className={styles.title}>My Portfolio</h1>
        </header>

        <div className={styles.layout}>
          <div className={styles.main}>
            {/* TODO: LOGIC agent — fetch portfolio holdings from store */}
            <PortfolioTable />
          </div>
          <aside className={styles.aside}>
            {/* TODO: LOGIC agent — compute allocation percentages */}
            <AllocationDisplay />
          </aside>
        </div>
      </div>
    </AppLayout>
  );
}
