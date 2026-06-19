// UI-local types for shell components.
// Shared types that cross the client/backend boundary must live in CONTRACTS.md.

export type PriceDirection = 'up' | 'down' | 'flat';

export type RecommendationAction = 'BUY' | 'SELL' | 'HOLD' | 'WATCH';

export type ConfidenceLevel = 'HIGH' | 'MEDIUM' | 'LOW';

export type TimeRange = '1D' | '1W' | '1M' | '3M' | '6M' | '1Y' | '5Y';

export interface StockQuote {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  marketCap: number;
  direction: PriceDirection;
}

export interface PricePoint {
  timestamp: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface AIRecommendation {
  id: string;
  symbol: string;
  name: string;
  action: RecommendationAction;
  confidence: ConfidenceLevel;
  targetPrice: number;
  currentPrice: number;
  rationale: string;
  generatedAt: string;
}

export interface PortfolioHolding {
  symbol: string;
  name: string;
  shares: number;
  avgCost: number;
  currentPrice: number;
  totalValue: number;
  gainLoss: number;
  gainLossPercent: number;
}

export interface WatchlistEntry {
  symbol: string;
  name: string;
  currentPrice: number;
  change: number;
  changePercent: number;
  addedAt: string;
}

export interface MarketIndex {
  name: string;
  value: number;
  change: number;
  changePercent: number;
}
