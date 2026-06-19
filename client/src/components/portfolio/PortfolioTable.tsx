import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import type { PortfolioHolding } from '@/types';
import EmptyState from '@/components/ui/EmptyState';
import styles from './PortfolioTable.module.scss';

interface PortfolioTableProps {
  holdings?: PortfolioHolding[];
}

const COLUMNS = ['Symbol', 'Name', 'Shares', 'Avg Cost', 'Current', 'Value', 'P&L', '% Return'];

export default function PortfolioTable({ holdings = [] }: PortfolioTableProps) {
  return (
    <TableContainer component={Paper} className={styles.container}>
      <Table aria-label="Portfolio holdings">
        <TableHead>
          <TableRow>
            {COLUMNS.map((col) => (
              <TableCell key={col} className={styles.th}>{col}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {/* TODO: LOGIC agent — render rows from portfolio Redux slice */}
          {holdings.length === 0 && (
            <TableRow>
              <TableCell colSpan={COLUMNS.length} padding="none">
                <EmptyState
                  icon={<AccountBalanceWalletIcon />}
                  title="No holdings"
                  description="Add stocks to your portfolio to track performance here."
                />
              </TableCell>
            </TableRow>
          )}
          {holdings.map((h) => (
            <TableRow key={h.symbol} hover>
              <TableCell className={styles.symbol}>{h.symbol}</TableCell>
              <TableCell>{h.name}</TableCell>
              <TableCell className={styles.mono}>{h.shares.toLocaleString()}</TableCell>
              <TableCell className={styles.mono}>${h.avgCost.toFixed(2)}</TableCell>
              <TableCell className={styles.mono}>${h.currentPrice.toFixed(2)}</TableCell>
              <TableCell className={styles.mono}>${h.totalValue.toFixed(2)}</TableCell>
              <TableCell className={`${styles.mono} ${h.gainLoss >= 0 ? styles.gain : styles.loss}`}>
                {h.gainLoss >= 0 ? '+' : ''}{h.gainLoss.toFixed(2)}
              </TableCell>
              <TableCell className={`${styles.mono} ${h.gainLossPercent >= 0 ? styles.gain : styles.loss}`}>
                {h.gainLossPercent >= 0 ? '+' : ''}{h.gainLossPercent.toFixed(2)}%
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
