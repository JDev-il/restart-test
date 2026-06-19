import styles from './AllocationDisplay.module.scss';

// TODO: LOGIC agent — compute allocations from portfolio holdings slice
export default function AllocationDisplay() {
  return (
    <div className={styles.panel}>
      <h3 className={styles.title}>Allocation</h3>

      {/* TODO: LOGIC agent — replace with pie/donut chart from chart library */}
      <div className={styles.chartPlaceholder} aria-hidden>
        <span className={styles.chartLabel}>Allocation chart</span>
      </div>

      <div className={styles.legend}>
        {/* TODO: LOGIC agent — render legend from allocation data */}
        <div className={styles.legendEmpty}>
          <span className={styles.legendText}>No holdings to display</span>
        </div>
      </div>
    </div>
  );
}
