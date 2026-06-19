import { apiClient } from './client';
import type { StockQuote, PricePoint } from '@/types';
import type { TimeRange } from '@/types';

export const stockApi = {
  getQuote: (symbol: string) =>
    apiClient.get<StockQuote>(`/stocks/${symbol}/quote`),
  getHistory: (symbol: string, range: TimeRange) =>
    apiClient.get<PricePoint[]>(`/stocks/${symbol}/history?range=${range}`),
};
