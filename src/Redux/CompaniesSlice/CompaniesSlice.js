import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const companiesSymbols = [
  'AAPL', 'MSFT', 'AMZN', 'GOOGL', 'FB', 'TSLA', 'BRK.B', 'JNJ', 'JPM', 'V', 'PG', 'MA', 'UNH', 'NVDA', 'HD', 'PYPL', 'ADBE', 'CRM', 'NFLX', 'BAC', 'INTC', 'CSCO', 'XOM', 'CMCSA', 'CVX', 'PEP', 'PFE', 'ABT', 'ABBV', 'LLY', 'NKE', 'COST', 'DHR', 'NEE', 'UNP', 'HON', 'AMD', 'C', 'ACN', 'LIN', 'MRK', 'ORCL', 'WMT', 'UPS', 'MCD', 'BMY', 'AMGN', 'PM', 'TMO', 'DIS', 'LMT', 'MO', 'GD', 'MDT', 'BLK', 'BKNG', 'GS', 'AXP', 'LRCX', 'CHTR', 'RTX', 'SPGI', 'BDX', 'CCI', 'NOC', 'ISRG', 'PLD', 'ANTM', 'SBUX', 'CI', 'SCHW', 'MCO', 'D', 'ADP', 'ILMN', 'ZTS', 'REGN', 'SYK', 'TJX', 'BIIB', 'ADSK', 'VRTX', 'CME', 'NOW', 'IBM', 'HCA', 'SO', 'FIS', 'ATVI', 'CL', 'MS',
];

const url = `https://financialmodelingprep.com/api/v3/quote/${companiesSymbols.toString()}?&apikey=`;
const apiKey = '66e98217e2416f23a2ebb8309751840a';

const initialState = {
  companies: [],
  companiesFiltered: [],
  status: 'idle',
  error: null,
};

export const getCompaniesData = createAsyncThunk(
  'statistics/getCompaniesData',
  async () => {
    try {
      const response = await axios.get(`${url}${apiKey}`);
      return response.data;
    } catch (error) {
      return 'Something went wrong, please try again';
    }
  },
);

const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    filterCompanies: (state, action) => {
      state.companiesFiltered = state.companies.filter((company) => company.name.toLowerCase()
        .includes(action.payload.toLowerCase()));
    },
    clearFilter: (state) => {
      state.companiesFiltered = state.companies;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getCompaniesData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCompaniesData.fulfilled, (state, action) => {
        state.status = 'succeded';
        state.companies = action.payload;
        state.companiesFiltered = action.payload;
      })
      .addCase(getCompaniesData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { filterCompanies, clearFilter } = companiesSlice.actions;
export default companiesSlice.reducer;
