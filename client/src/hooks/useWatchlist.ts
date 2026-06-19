import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import {
  fetchWatchlist,
  addToWatchlist,
  removeFromWatchlist,
} from '@/store/watchlistSlice';

export function useWatchlist() {
  const dispatch = useAppDispatch();
  const entries = useAppSelector((s) => s.watchlist.entries);
  const status = useAppSelector((s) => s.watchlist.status);
  const mutating = useAppSelector((s) => s.watchlist.mutating);
  const error = useAppSelector((s) => s.watchlist.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchWatchlist());
    }
  }, [dispatch, status]);

  const add = (symbol: string) => dispatch(addToWatchlist(symbol));
  const remove = (symbol: string) => dispatch(removeFromWatchlist(symbol));
  const isWatched = (symbol: string) => entries.some((e) => e.symbol === symbol);

  return { entries, status, mutating, error, add, remove, isWatched };
}
