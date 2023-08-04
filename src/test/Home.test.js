import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'ruta/hacia/tu/configureStore';
import Home from '../components/Home';

describe('Home', () => {
  test('should render MarketView and CompaniesListDisplay components', async () => {
    const store = configureStore();
    render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );

    await waitFor(() => {
      expect(screen.getByText('STANDARD & POOR’S')).toBeInTheDocument();
    });

    // expect(screen.getByText('Best Performing Companies Prices')).toBeInTheDocument();
    // expect(screen.getByText('PRICE BY COMPANY')).toBeInTheDocument();
  });
});
