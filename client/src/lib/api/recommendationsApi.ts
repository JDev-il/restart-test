import { apiClient } from './client';
import type { AIRecommendation } from '@/types';

export interface AIInsight {
  id: string;
  content: string;
  symbol?: string;
  generatedAt: string;
}

export const recommendationsApi = {
  getRecommendations: () =>
    apiClient.get<AIRecommendation[]>('/recommendations'),
  getInsights: () =>
    apiClient.get<AIInsight[]>('/recommendations/insights'),
};
