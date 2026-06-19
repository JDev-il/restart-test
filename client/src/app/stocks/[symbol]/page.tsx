import AppLayout from '@/components/layout/AppLayout';
import StockInfo from '@/components/stocks/StockInfo';
import StockChart from '@/components/stocks/StockChart';
import PriceDisplay from '@/components/stocks/PriceDisplay';
import styles from './stock.module.scss';

interface StockPageProps {
  params: Promise<{ symbol: string }>;
}

export default async function StockPage({ params }: StockPageProps) {
  const { symbol } = await params;

  return (
    <AppLayout>
      <div className={styles.page}>
        <div className={styles.header}>
          {/* TODO: LOGIC agent — fetch live quote for symbol */}
          <PriceDisplay symbol={symbol} />
        </div>

        <div className={styles.body}>
          <div className={styles.chartArea}>
            {/* TODO: LOGIC agent — fetch OHLCV history */}
            <StockChart symbol={symbol} />
          </div>
          <aside className={styles.info}>
            {/* TODO: LOGIC agent — fetch fundamentals */}
            <StockInfo symbol={symbol} />
          </aside>
        </div>
      </div>
    </AppLayout>
  );
}
