'use client';

import type { TimeRange } from '@/types';
import styles from './StockChart.module.scss';

interface StockChartProps {
  symbol: string;
  timeRange?: TimeRange;
}

const TIME_RANGES: TimeRange[] = ['1D', '1W', '1M', '3M', '6M', '1Y', '5Y'];

export default function StockChart({ symbol, timeRange = '1M' }: StockChartProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.controls}>
        {TIME_RANGES.map((range) => (
          <button
            key={range}
            className={`${styles.rangeBtn} ${range === timeRange ? styles.active : ''}`}
            aria-pressed={range === timeRange}
            aria-label={`Show ${range} chart`}
          >
            {range}
          </button>
        ))}
      </div>

      {/* TODO: LOGIC agent — replace with real chart library (e.g. Recharts, Lightweight Charts) */}
      <div className={styles.chartArea} role="img" aria-label={`Price chart for ${symbol}`}>
        <span className={styles.placeholder}>Chart area — {symbol}</span>
      </div>
    </div>
  );
}
