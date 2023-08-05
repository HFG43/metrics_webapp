import '@testing-library/jest-dom';
import { configureStore } from '@reduxjs/toolkit';
import CompaniesReducer from '../Redux/CompaniesSlice/CompaniesSlice';
import MarketReducer from '../redux/MarketSlice/MarketSlice';

const mockCompaniesData = [
  {
    symbol: 'Test',
    name: 'Company Test',
    price: 181.99,
    changesPercentage: -4.802,
    change: -9.18,
    dayLow: 181.92,
    dayHigh: 187.38,
    yearHigh: 198.23,
    yearLow: 124.17,
    marketCap: 2862466188708,
    priceAvg50: 186.8782,
    priceAvg200: 159.8155,
    exchange: 'NASDAQ',
    volume: 110000114,
    avgVolume: 55933106,
    open: 185.52,
    previousClose: 191.17,
    eps: 5.89,
    pe: 30.9,
    earningsAnnouncement: '2023-10-25T00:00:00.000+0000',
    sharesOutstanding: 15728700416,
    timestamp: 1691179201,
  },
];

const mockMarketData = [
  {
    symbol: '^GSPC',
    name: 'Nasdaq',
    price: 2500.5,
    changesPercentage: -0.53,
    change: -23.8604,
    dayLow: 4474.55,
    dayHigh: 4540.34,
    yearHigh: 4607.07,
    yearLow: 3491.58,
    marketCap: null,
    priceAvg50: 4400.185,
    priceAvg200: 4092.7017,
    exchange: 'INDEX',
    volume: 2413919000,
    avgVolume: 3991349032,
    open: 4513.96,
    previousClose: 4501.89,
    eps: null,
    pe: null,
    earningsAnnouncement: null,
    sharesOutstanding: null,
    timestamp: 1691188256,
  },
];

const initialStates = {
  companies: {
    companies: mockCompaniesData,
    companiesFiltered: mockCompaniesData,
    status: 'idle',
    error: null,
  },
  market: {
    marketData: mockMarketData,
    status: 'idle',
    error: null,
  },
};
const store = configureStore({
  reducer: {
    companies: CompaniesReducer,
    market: MarketReducer,
  },
  preloadedState: initialStates,
});

export default store;
