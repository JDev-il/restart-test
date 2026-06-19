import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import {
  fetchRecommendations,
  fetchInsights,
} from '@/store/recommendationsSlice';

export function useRecommendations() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((s) => s.recommendations.items);
  const status = useAppSelector((s) => s.recommendations.recommendationsStatus);
  const error = useAppSelector((s) => s.recommendations.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRecommendations());
    }
  }, [dispatch, status]);

  return { items, status, error };
}

export function useAIInsights() {
  const dispatch = useAppDispatch();
  const insights = useAppSelector((s) => s.recommendations.insights);
  const status = useAppSelector((s) => s.recommendations.insightsStatus);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchInsights());
    }
  }, [dispatch, status]);

  return { insights, status };
}
