import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import {
  fetchPortfolioHoldings,
  selectHoldings,
  selectPortfolioTotals,
  selectAllocationBreakdown,
} from '@/store/portfolioSlice';

export function usePortfolio() {
  const dispatch = useAppDispatch();
  const holdings = useAppSelector(selectHoldings);
  const totals = useAppSelector(selectPortfolioTotals);
  const allocation = useAppSelector(selectAllocationBreakdown);
  const status = useAppSelector((s) => s.portfolio.status);
  const error = useAppSelector((s) => s.portfolio.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPortfolioHoldings());
    }
  }, [dispatch, status]);

  return { holdings, totals, allocation, status, error };
}
