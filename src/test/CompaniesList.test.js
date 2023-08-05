import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './StoreMock';
import CompaniesList from '../components/CompaniesList';

describe('CompaniesList', () => {
  test('Should render the Companies correctly', () => {
    const tree = render(
      <MemoryRouter initialEntries={['/home']}>
        <Provider store={store}>
          <CompaniesList />
        </Provider>
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
