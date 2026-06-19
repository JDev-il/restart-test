import { apiClient } from './client';
import type { MarketIndex, StockQuote } from '@/types';

export const marketApi = {
  getIndices: () => apiClient.get<MarketIndex[]>('/market/indices'),
  getTopMovers: (type: 'gainers' | 'losers') =>
    apiClient.get<StockQuote[]>(`/market/movers?type=${type}`),
};
