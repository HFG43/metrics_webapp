import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Company from '../components/Company';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Company', () => {
  test('should dispatch getCompaniesData when status is idle', () => {
    const store = mockStore({
      companies: {
        companies: [],
        status: 'idle',
        error: null,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/AAPL']}>
          <Company />
        </MemoryRouter>
      </Provider>,
    );

    const actions = store.getActions();
    expect(actions).toContainEqual(expect.objectContaining({ type: 'statistics/getCompaniesData/pending' }));
  });
});
