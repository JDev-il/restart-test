import { configureStore } from '@reduxjs/toolkit';
import marketReducer from '@/store/marketSlice';
import stockReducer from '@/store/stockSlice';
import portfolioReducer from '@/store/portfolioSlice';
import watchlistReducer from '@/store/watchlistSlice';
import recommendationsReducer from '@/store/recommendationsSlice';

export const store = configureStore({
  reducer: {
    market: marketReducer,
    stock: stockReducer,
    portfolio: portfolioReducer,
    watchlist: watchlistReducer,
    recommendations: recommendationsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
