import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { watchlistApi } from '@/lib/api/watchlistApi';
import type { WatchlistEntry } from '@/types';

interface WatchlistState {
  entries: WatchlistEntry[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  mutating: boolean;
  error: string | null;
}

const initialState: WatchlistState = {
  entries: [],
  status: 'idle',
  mutating: false,
  error: null,
};

export const fetchWatchlist = createAsyncThunk(
  'watchlist/fetchEntries',
  async () => watchlistApi.getEntries(),
);

export const addToWatchlist = createAsyncThunk(
  'watchlist/addEntry',
  async (symbol: string) => watchlistApi.addEntry(symbol),
);

export const removeFromWatchlist = createAsyncThunk(
  'watchlist/removeEntry',
  async (symbol: string) => {
    await watchlistApi.removeEntry(symbol);
    return symbol;
  },
);

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWatchlist.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchWatchlist.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.entries = action.payload;
      })
      .addCase(fetchWatchlist.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to fetch watchlist';
      })
      .addCase(addToWatchlist.pending, (state) => {
        state.mutating = true;
      })
      .addCase(addToWatchlist.fulfilled, (state, action) => {
        state.mutating = false;
        state.entries.push(action.payload);
      })
      .addCase(addToWatchlist.rejected, (state, action) => {
        state.mutating = false;
        state.error = action.error.message ?? 'Failed to add to watchlist';
      })
      .addCase(removeFromWatchlist.pending, (state) => {
        state.mutating = true;
      })
      .addCase(removeFromWatchlist.fulfilled, (state, action) => {
        state.mutating = false;
        state.entries = state.entries.filter((e) => e.symbol !== action.payload);
      })
      .addCase(removeFromWatchlist.rejected, (state, action) => {
        state.mutating = false;
        state.error = action.error.message ?? 'Failed to remove from watchlist';
      });
  },
});

export default watchlistSlice.reducer;
