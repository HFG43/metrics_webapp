import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './StoreMock';
import Home from '../components/Home';

describe('Home', () => {
  test('Home page renders correctly', () => {
    const tree = render(
      <MemoryRouter initialEntries={['/home']}>
        <Provider store={store}>
          <Home />
        </Provider>
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
