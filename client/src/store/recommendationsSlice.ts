import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { recommendationsApi, type AIInsight } from '@/lib/api/recommendationsApi';
import type { AIRecommendation } from '@/types';

interface RecommendationsState {
  items: AIRecommendation[];
  insights: AIInsight[];
  recommendationsStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  insightsStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: RecommendationsState = {
  items: [],
  insights: [],
  recommendationsStatus: 'idle',
  insightsStatus: 'idle',
  error: null,
};

export const fetchRecommendations = createAsyncThunk(
  'recommendations/fetchAll',
  async () => recommendationsApi.getRecommendations(),
);

export const fetchInsights = createAsyncThunk(
  'recommendations/fetchInsights',
  async () => recommendationsApi.getInsights(),
);

const recommendationsSlice = createSlice({
  name: 'recommendations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecommendations.pending, (state) => {
        state.recommendationsStatus = 'loading';
        state.error = null;
      })
      .addCase(fetchRecommendations.fulfilled, (state, action) => {
        state.recommendationsStatus = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchRecommendations.rejected, (state, action) => {
        state.recommendationsStatus = 'failed';
        state.error = action.error.message ?? 'Failed to fetch recommendations';
      })
      .addCase(fetchInsights.pending, (state) => {
        state.insightsStatus = 'loading';
      })
      .addCase(fetchInsights.fulfilled, (state, action) => {
        state.insightsStatus = 'succeeded';
        state.insights = action.payload;
      })
      .addCase(fetchInsights.rejected, (state, action) => {
        state.insightsStatus = 'failed';
        state.error = action.error.message ?? 'Failed to fetch AI insights';
      });
  },
});

export default recommendationsSlice.reducer;
