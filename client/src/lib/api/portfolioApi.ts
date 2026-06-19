import { apiClient } from './client';
import type { PortfolioHolding } from '@/types';

export const portfolioApi = {
  getHoldings: () => apiClient.get<PortfolioHolding[]>('/portfolio/holdings'),
};
