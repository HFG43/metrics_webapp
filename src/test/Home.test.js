import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Home from '../components/Home';

test('should render MarketView and CompaniesListDisplay components', () => {
  render(<Home />);
  expect(screen.getByText('STANDARD & POOR’S')).toBeInTheDocument();
  expect(
    screen.getByText('Best Performing Companies Prices'),
  ).toBeInTheDocument();
  expect(screen.getByText('PRICE BY COMPANY')).toBeInTheDocument();
});
