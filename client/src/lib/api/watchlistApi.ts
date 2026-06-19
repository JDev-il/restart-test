import { apiClient } from './client';
import type { WatchlistEntry } from '@/types';

export const watchlistApi = {
  getEntries: () => apiClient.get<WatchlistEntry[]>('/watchlist'),
  addEntry: (symbol: string) => apiClient.post<WatchlistEntry>('/watchlist', { symbol }),
  removeEntry: (symbol: string) => apiClient.delete<void>(`/watchlist/${symbol}`),
};
