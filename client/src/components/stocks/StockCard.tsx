import Link from 'next/link';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import type { StockQuote } from '@/types';
import styles from './StockCard.module.scss';

interface StockCardProps {
  quote: StockQuote;
}

export default function StockCard({ quote }: StockCardProps) {
  const isGain = quote.direction === 'up';

  return (
    <Link href={`/stocks/${quote.symbol}`} className={styles.card}>
      <div className={styles.left}>
        <span className={styles.symbol}>{quote.symbol}</span>
        <span className={styles.name}>{quote.name}</span>
      </div>

      <div className={styles.right}>
        <span className={styles.price}>${quote.price.toFixed(2)}</span>
        <span className={`${styles.change} ${isGain ? styles.gain : styles.loss}`}>
          {isGain
            ? <TrendingUpIcon fontSize="inherit" />
            : <TrendingDownIcon fontSize="inherit" />
          }
          {quote.changePercent > 0 ? '+' : ''}{quote.changePercent.toFixed(2)}%
        </span>
      </div>
    </Link>
  );
}
