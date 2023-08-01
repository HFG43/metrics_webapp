import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://financialmodelingprep.com/api/v3/quote/%5eGSPC?apikey=';
const apiKey = '66e98217e2416f23a2ebb8309751840';

const initialState = {
  marketData: [],
  price: 0,
  status: 'idle',
};

export const getMarketData = createAsyncThunk(
  'statistics/getMarketData',
  async () => {
    try {
      const response = await axios.get(`${url}${apiKey}`);
      console.log(response);
      return response.data;
    } catch (error) {
      return 'Something went wrong, please try again';
    }
  },
);

const marketSlice = createSlice({
  name: 'market',
  initialState,
  reducers: {
    updateMarketPrice: (state, action) => {
      state.price = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getMarketData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMarketData.fulfilled, (state, action) => {
        state.status = 'succeded';
        state.marketData = action.payload;
        console.log(state.marketData);
      })
      .addCase(getMarketData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { updateMarketPrice } = marketSlice.actions;

export default marketSlice.reducer;
