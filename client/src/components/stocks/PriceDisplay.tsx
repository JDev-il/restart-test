import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import type { PriceDirection } from '@/types';
import styles from './PriceDisplay.module.scss';

interface PriceDisplayProps {
  symbol: string;
  name?: string;
  price?: number;
  change?: number;
  changePercent?: number;
  direction?: PriceDirection;
}

const DIRECTION_ICONS = {
  up:   TrendingUpIcon,
  down: TrendingDownIcon,
  flat: TrendingFlatIcon,
};

export default function PriceDisplay({
  symbol,
  name,
  price,
  change,
  changePercent,
  direction = 'flat',
}: PriceDisplayProps) {
  const TrendIcon = DIRECTION_ICONS[direction];

  return (
    <div className={styles.wrapper}>
      <div className={styles.identity}>
        <span className={styles.symbol}>{symbol}</span>
        {name && <span className={styles.name}>{name}</span>}
      </div>

      <div className={styles.pricing}>
        {/* TODO: LOGIC agent — replace placeholder with live quote */}
        <span className={styles.price}>
          {price != null ? `$${price.toFixed(2)}` : '—'}
        </span>
        <span className={`${styles.change} ${styles[direction]}`}>
          <TrendIcon fontSize="small" />
          {change != null ? (change > 0 ? '+' : '') + change.toFixed(2) : '—'}
          {changePercent != null ? ` (${changePercent > 0 ? '+' : ''}${changePercent.toFixed(2)}%)` : ''}
        </span>
      </div>
    </div>
  );
}
