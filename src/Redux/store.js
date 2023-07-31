import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import marketReducer from './MarketSlice/MarketSlice';
// IMPORT REDUCER

const store = configureStore({
  reducer: {
    market: marketReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
