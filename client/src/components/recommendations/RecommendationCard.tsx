import Link from 'next/link';
import type { AIRecommendation } from '@/types';
import Badge from '@/components/ui/Badge';
import ConfidenceIndicator from './ConfidenceIndicator';
import styles from './RecommendationCard.module.scss';

interface RecommendationCardProps {
  recommendation: AIRecommendation;
}

const ACTION_VARIANT: Record<string, 'gain' | 'loss' | 'neutral' | 'warning'> = {
  BUY:   'gain',
  SELL:  'loss',
  HOLD:  'neutral',
  WATCH: 'warning',
};

export default function RecommendationCard({ recommendation: rec }: RecommendationCardProps) {
  const upside = ((rec.targetPrice - rec.currentPrice) / rec.currentPrice) * 100;

  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <div className={styles.identity}>
          <Link href={`/stocks/${rec.symbol}`} className={styles.symbol}>{rec.symbol}</Link>
          <span className={styles.name}>{rec.name}</span>
        </div>
        <Badge label={rec.action} variant={ACTION_VARIANT[rec.action]} />
      </div>

      <div className={styles.pricing}>
        <div className={styles.priceGroup}>
          <span className={styles.priceLabel}>Current</span>
          <span className={styles.priceValue}>${rec.currentPrice.toFixed(2)}</span>
        </div>
        <div className={styles.priceGroup}>
          <span className={styles.priceLabel}>Target</span>
          <span className={styles.priceValue}>${rec.targetPrice.toFixed(2)}</span>
        </div>
        <div className={styles.priceGroup}>
          <span className={styles.priceLabel}>Upside</span>
          <span className={`${styles.priceValue} ${upside >= 0 ? styles.gain : styles.loss}`}>
            {upside >= 0 ? '+' : ''}{upside.toFixed(1)}%
          </span>
        </div>
      </div>

      <p className={styles.rationale}>{rec.rationale}</p>

      <div className={styles.footer}>
        <ConfidenceIndicator level={rec.confidence} />
        <span className={styles.date}>{new Date(rec.generatedAt).toLocaleDateString()}</span>
      </div>
    </article>
  );
}
