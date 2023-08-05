import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Company from '../components/Company';
import { getCompaniesData } from '../Redux/CompaniesSlice/CompaniesSlice';

const mockStore = configureStore();

describe('Company', () => {
  test('should dispatch getCompaniesData when status is idle', () => {
    const initialState = {
      companies: {
        companies: [],
        status: 'idle',
      },
    };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/AAPL']}>
          <Company />
        </MemoryRouter>
      </Provider>,
    );

    expect(getCompaniesData).toHaveBeenCalled();
  });
});
