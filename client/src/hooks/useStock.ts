import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { fetchStockQuote, fetchStockHistory } from '@/store/stockSlice';
import type { TimeRange } from '@/types';

export function useStockQuote(symbol: string) {
  const dispatch = useAppDispatch();
  const quote = useAppSelector((s) => s.stock.quotes[symbol]);
  const status = useAppSelector((s) => s.stock.quoteStatus[symbol] ?? 'idle');

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchStockQuote(symbol));
    }
  }, [dispatch, symbol, status]);

  return { quote, status };
}

export function useStockHistory(symbol: string, range: TimeRange = '1M') {
  const dispatch = useAppDispatch();
  const history = useAppSelector((s) => s.stock.history[symbol] ?? []);
  const status = useAppSelector((s) => s.stock.historyStatus[symbol] ?? 'idle');

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchStockHistory({ symbol, range }));
    }
  }, [dispatch, symbol, range, status]);

  return { history, status };
}
