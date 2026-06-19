import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import StatCard from '@/components/ui/StatCard';
import styles from './PortfolioSummary.module.scss';

// TODO: LOGIC agent — replace with portfolio totals from Redux store
export default function PortfolioSummary() {
  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <AccountBalanceWalletIcon fontSize="small" className={styles.icon} />
        <h2 className={styles.title}>Portfolio</h2>
      </div>

      <div className={styles.stats}>
        <StatCard label="Total Value"   value="—" subValue="—" trend="neutral" />
        <StatCard label="Day P&L"       value="—" subValue="—" trend="neutral" />
        <StatCard label="Total Return"  value="—" subValue="—" trend="neutral" />
      </div>

      {/* TODO: LOGIC agent — render allocation mini-chart */}
      <div className={styles.chartPlaceholder} aria-hidden>
        <span className={styles.chartLabel}>Allocation chart</span>
      </div>
    </div>
  );
}
