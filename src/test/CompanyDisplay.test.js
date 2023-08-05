import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './StoreMock';
import CompanyDisplay from '../components/CompanyDisplay';

describe('CompanyDisplay', () => {
  test('The CompanyDisplay renders correctly and loads Company & Company Header', () => {
    const tree = render(
      <MemoryRouter initialEntries={['/company/Test']}>
        <Provider store={store}>
          <CompanyDisplay />
        </Provider>
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
