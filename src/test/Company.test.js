import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Company from '../components/Company';
import store from './StoreMock';

describe('Company', () => {
  test('should render Company correctly', () => {
    const companyRender = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/Test']}>
          <Company />
        </MemoryRouter>
      </Provider>,
    );

    expect(companyRender).toMatchSnapshot();
  });
});
