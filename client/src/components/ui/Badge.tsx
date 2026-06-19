import styles from './Badge.module.scss';

type BadgeVariant = 'gain' | 'loss' | 'neutral' | 'accent' | 'warning';

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
}

export default function Badge({ label, variant = 'neutral' }: BadgeProps) {
  return (
    <span className={`${styles.badge} ${styles[variant]}`}>{label}</span>
  );
}
