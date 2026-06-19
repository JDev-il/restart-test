import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import { portfolioApi } from '@/lib/api/portfolioApi';
import type { PortfolioHolding } from '@/types';

interface PortfolioState {
  holdings: PortfolioHolding[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

interface StateWithPortfolio {
  portfolio: PortfolioState;
}

const initialState: PortfolioState = {
  holdings: [],
  status: 'idle',
  error: null,
};

export const fetchPortfolioHoldings = createAsyncThunk(
  'portfolio/fetchHoldings',
  async () => portfolioApi.getHoldings(),
);

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPortfolioHoldings.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchPortfolioHoldings.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.holdings = action.payload;
      })
      .addCase(fetchPortfolioHoldings.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to fetch portfolio';
      });
  },
});

export const selectHoldings = (state: StateWithPortfolio) => state.portfolio.holdings;

export const selectPortfolioTotals = createSelector(selectHoldings, (holdings) => {
  const totalValue = holdings.reduce((sum, h) => sum + h.totalValue, 0);
  const totalCost = holdings.reduce((sum, h) => sum + h.avgCost * h.shares, 0);
  const totalGainLoss = totalValue - totalCost;
  const totalGainLossPercent = totalCost > 0 ? (totalGainLoss / totalCost) * 100 : 0;

  // dayPnl requires previousClose per holding — not in PortfolioHolding type yet.
  // Backend API must include it for accurate daily P&L; returning 0 until then.
  const dayPnl = 0;

  return { totalValue, totalGainLoss, totalGainLossPercent, dayPnl };
});

export const selectAllocationBreakdown = createSelector(selectHoldings, (holdings) => {
  const total = holdings.reduce((sum, h) => sum + h.totalValue, 0);
  return holdings.map((h) => ({
    symbol: h.symbol,
    name: h.name,
    value: h.totalValue,
    percent: total > 0 ? (h.totalValue / total) * 100 : 0,
  }));
});

export default portfolioSlice.reducer;
