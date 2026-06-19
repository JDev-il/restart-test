import React from 'react';
import styles from './StatCard.module.scss';

interface StatCardProps {
  label: string;
  value: string;
  subValue?: string;
  trend?: 'up' | 'down' | 'neutral';
  icon?: React.ReactNode;
}

export default function StatCard({ label, value, subValue, trend = 'neutral', icon }: StatCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.label}>{label}</span>
        {icon && <span className={styles.icon}>{icon}</span>}
      </div>
      <div className={styles.value}>{value}</div>
      {subValue && (
        <div className={`${styles.subValue} ${styles[trend]}`}>{subValue}</div>
      )}
    </div>
  );
}
