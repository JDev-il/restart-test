import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import type { StockQuote } from '@/types';
import EmptyState from '@/components/ui/EmptyState';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import styles from './StockTable.module.scss';

interface StockTableProps {
  quotes?: StockQuote[];
}

const COLUMNS = ['Symbol', 'Name', 'Price', 'Change', '% Change', 'Volume', 'Mkt Cap'];

export default function StockTable({ quotes = [] }: StockTableProps) {
  return (
    <TableContainer component={Paper} className={styles.container}>
      <Table aria-label="Stock quotes table">
        <TableHead>
          <TableRow>
            {COLUMNS.map((col) => (
              <TableCell key={col} className={styles.th}>{col}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {/* TODO: LOGIC agent — render rows from live market data */}
          {quotes.length === 0 && (
            <TableRow>
              <TableCell colSpan={COLUMNS.length} padding="none">
                <EmptyState
                  icon={<TrendingUpIcon />}
                  title="No stocks loaded"
                  description="Market data will populate this table once connected."
                />
              </TableCell>
            </TableRow>
          )}
          {quotes.map((quote) => (
            <TableRow key={quote.symbol} hover className={styles.row}>
              <TableCell className={styles.symbolCell}>{quote.symbol}</TableCell>
              <TableCell>{quote.name}</TableCell>
              <TableCell className={styles.mono}>${quote.price.toFixed(2)}</TableCell>
              <TableCell className={`${styles.mono} ${quote.direction === 'up' ? styles.gain : styles.loss}`}>
                {quote.change > 0 ? '+' : ''}{quote.change.toFixed(2)}
              </TableCell>
              <TableCell className={`${styles.mono} ${quote.direction === 'up' ? styles.gain : styles.loss}`}>
                {quote.changePercent > 0 ? '+' : ''}{quote.changePercent.toFixed(2)}%
              </TableCell>
              <TableCell className={styles.mono}>{quote.volume.toLocaleString()}</TableCell>
              <TableCell className={styles.mono}>{(quote.marketCap / 1e9).toFixed(1)}B</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
