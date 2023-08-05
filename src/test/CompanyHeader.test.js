import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './StoreMock';
import CompanyHeader from '../components/CompanyHeader';

describe('CompanyHeader', () => {
  test('Company Header should render corrrectly', () => {
    const tree = render(
      <MemoryRouter initialEntries={['/company/Test']}>
        <Provider store={store}>
          <CompanyHeader />
        </Provider>
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
