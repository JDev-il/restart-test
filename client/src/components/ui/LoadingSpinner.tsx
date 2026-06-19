import CircularProgress from '@mui/material/CircularProgress';
import styles from './LoadingSpinner.module.scss';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  label?: string;
}

const SIZE_MAP = { sm: 20, md: 32, lg: 48 };

export default function LoadingSpinner({ size = 'md', label }: LoadingSpinnerProps) {
  return (
    <div className={styles.wrapper} role="status" aria-label={label ?? 'Loading'}>
      <CircularProgress size={SIZE_MAP[size]} color="primary" thickness={3} />
      {label && <span className={styles.label}>{label}</span>}
    </div>
  );
}
