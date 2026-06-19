import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { stockApi } from '@/lib/api/stockApi';
import type { StockQuote, PricePoint } from '@/types';
import type { TimeRange } from '@/types';

interface StockState {
  quotes: Record<string, StockQuote>;
  history: Record<string, PricePoint[]>;
  quoteStatus: Record<string, 'idle' | 'loading' | 'succeeded' | 'failed'>;
  historyStatus: Record<string, 'idle' | 'loading' | 'succeeded' | 'failed'>;
  error: string | null;
}

const initialState: StockState = {
  quotes: {},
  history: {},
  quoteStatus: {},
  historyStatus: {},
  error: null,
};

export const fetchStockQuote = createAsyncThunk(
  'stock/fetchQuote',
  async (symbol: string) => stockApi.getQuote(symbol),
);

export const fetchStockHistory = createAsyncThunk(
  'stock/fetchHistory',
  async ({ symbol, range }: { symbol: string; range: TimeRange }) =>
    stockApi.getHistory(symbol, range).then((data) => ({ symbol, range, data })),
);

const stockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStockQuote.pending, (state, action) => {
        state.quoteStatus[action.meta.arg] = 'loading';
        state.error = null;
      })
      .addCase(fetchStockQuote.fulfilled, (state, action) => {
        const symbol = action.payload.symbol;
        state.quoteStatus[symbol] = 'succeeded';
        state.quotes[symbol] = action.payload;
      })
      .addCase(fetchStockQuote.rejected, (state, action) => {
        state.quoteStatus[action.meta.arg] = 'failed';
        state.error = action.error.message ?? 'Failed to fetch stock quote';
      })
      .addCase(fetchStockHistory.pending, (state, action) => {
        state.historyStatus[action.meta.arg.symbol] = 'loading';
      })
      .addCase(fetchStockHistory.fulfilled, (state, action) => {
        const { symbol, data } = action.payload;
        state.historyStatus[symbol] = 'succeeded';
        state.history[symbol] = data;
      })
      .addCase(fetchStockHistory.rejected, (state, action) => {
        state.historyStatus[action.meta.arg.symbol] = 'failed';
        state.error = action.error.message ?? 'Failed to fetch stock history';
      });
  },
});

export default stockSlice.reducer;
