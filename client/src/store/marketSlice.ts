import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { marketApi } from '@/lib/api/marketApi';
import type { MarketIndex, StockQuote } from '@/types';

interface MarketState {
  indices: MarketIndex[];
  gainers: StockQuote[];
  losers: StockQuote[];
  indicesStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  moversStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: MarketState = {
  indices: [],
  gainers: [],
  losers: [],
  indicesStatus: 'idle',
  moversStatus: 'idle',
  error: null,
};

export const fetchMarketIndices = createAsyncThunk(
  'market/fetchIndices',
  async () => marketApi.getIndices(),
);

export const fetchTopMovers = createAsyncThunk(
  'market/fetchTopMovers',
  async () => {
    const [gainers, losers] = await Promise.all([
      marketApi.getTopMovers('gainers'),
      marketApi.getTopMovers('losers'),
    ]);
    return { gainers, losers };
  },
);

const marketSlice = createSlice({
  name: 'market',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMarketIndices.pending, (state) => {
        state.indicesStatus = 'loading';
        state.error = null;
      })
      .addCase(fetchMarketIndices.fulfilled, (state, action) => {
        state.indicesStatus = 'succeeded';
        state.indices = action.payload;
      })
      .addCase(fetchMarketIndices.rejected, (state, action) => {
        state.indicesStatus = 'failed';
        state.error = action.error.message ?? 'Failed to fetch market indices';
      })
      .addCase(fetchTopMovers.pending, (state) => {
        state.moversStatus = 'loading';
      })
      .addCase(fetchTopMovers.fulfilled, (state, action) => {
        state.moversStatus = 'succeeded';
        state.gainers = action.payload.gainers;
        state.losers = action.payload.losers;
      })
      .addCase(fetchTopMovers.rejected, (state, action) => {
        state.moversStatus = 'failed';
        state.error = action.error.message ?? 'Failed to fetch top movers';
      });
  },
});

export default marketSlice.reducer;
