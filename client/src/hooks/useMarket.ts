import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import {
  fetchMarketIndices,
  fetchTopMovers,
} from '@/store/marketSlice';

export function useMarketIndices() {
  const dispatch = useAppDispatch();
  const indices = useAppSelector((s) => s.market.indices);
  const status = useAppSelector((s) => s.market.indicesStatus);
  const error = useAppSelector((s) => s.market.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMarketIndices());
    }
  }, [dispatch, status]);

  return { indices, status, error };
}

export function useTopMovers() {
  const dispatch = useAppDispatch();
  const gainers = useAppSelector((s) => s.market.gainers);
  const losers = useAppSelector((s) => s.market.losers);
  const status = useAppSelector((s) => s.market.moversStatus);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTopMovers());
    }
  }, [dispatch, status]);

  return { gainers, losers, status };
}
