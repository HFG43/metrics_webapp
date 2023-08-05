import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './StoreMock';
import MarketView from '../components/MarketView';

describe('MarketView', () => {
  test('MarketView section should render correctly in home', () => {
    const tree = render(
      <MemoryRouter initialEntries={['/home']}>
        <Provider store={store}>
          <MarketView />
        </Provider>
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
