import styles from './StockInfo.module.scss';

interface StockInfoProps {
  symbol: string;
}

const INFO_ROWS = [
  { label: 'Open',       key: 'open' },
  { label: 'Day High',   key: 'dayHigh' },
  { label: 'Day Low',    key: 'dayLow' },
  { label: '52W High',   key: 'high52w' },
  { label: '52W Low',    key: 'low52w' },
  { label: 'Volume',     key: 'volume' },
  { label: 'Mkt Cap',    key: 'marketCap' },
  { label: 'P/E Ratio',  key: 'pe' },
  { label: 'Div Yield',  key: 'divYield' },
];

export default function StockInfo({ symbol }: StockInfoProps) {
  return (
    <div className={styles.panel}>
      <h3 className={styles.heading}>Key Statistics</h3>

      {/* TODO: LOGIC agent — populate from fundamentals API */}
      <dl className={styles.list}>
        {INFO_ROWS.map(({ label }) => (
          <div key={label} className={styles.row}>
            <dt className={styles.term}>{label}</dt>
            <dd className={styles.value}>—</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
