import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getMarketData } from '../Redux/MarketSlice/MarketSlice';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Market Slice', () => {
  it('should update the state to "succeded" after successful getMarketData', async () => {
    const sp500Mock = [
      {
        symbol: '^GSPC',
        name: 'S&P 500',
        price: 4438.73,
      },
    ];

    jest.spyOn(axios, 'get').mockResolvedValue({ data: sp500Mock });

    const store = mockStore({
      market: {
        marketData: [],
        status: 'idle',
        error: null,
      },
    });

    store.dispatch(getMarketData());

    const state = store.getState().market;
    expect(state.status).toEqual('succeded');
  });
});
