import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import marketReducer from './MarketSlice/MarketSlice';
import companiesReducer from './CompaniesSlice/CompaniesSlice';

const store = configureStore({
  reducer: {
    market: marketReducer,
    companies: companiesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
