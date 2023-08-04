import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Company from '../components/Company';

test('should render the component with correct data', () => {
  const mockStore = configureStore();
  const store = mockStore({
    companies: {
      companies: [
        {
          symbol: 'AAPL',
          name: 'Apple Inc.',
          price: 148.48,
          dayLow: 147.22,
          dayHigh: 148.5,
          priceAvg50: 146.5,
          open: 148.11,
          previousClose: 148.48,
          volume: 56729590,
        },
      ],
      status: 'succeeded',
    },
  });
  const { getByText } = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/AAPL']}>
        <Company />
      </MemoryRouter>
    </Provider>,
  );
  expect(getByText('Finantial details: Apple Inc.')).toBeInTheDocument();
  expect(getByText('Price')).toBeInTheDocument();
  expect(getByText('148.48')).toBeInTheDocument();
  expect(getByText('Lowest Price')).toBeInTheDocument();
});

// const mockCompany = [
//   {
//     symbol: 'AAPL',
//     name: 'Apple Inc.',
//     price: 193.0799,
//     changesPercentage: -1.2909,
//     change: -2.5251,
//     dayLow: 191.8529,
//     dayHigh: 195.1709,
//     yearHigh: 198.23,
//     yearLow: 124.17,
//     marketCap: 3036895903451,
//     priceAvg50: 186.1904,
//     priceAvg200: 159.3036,
//     exchange: 'NASDAQ',
//     volume: 24805103,
//     avgVolume: 56493540,
//     open: 195.04,
//     previousClose: 195.605,
//     eps: 5.89,
//     pe: 32.78,
//     earningsAnnouncement: '2023-08-03T00:00:00.000+0000',
//     sharesOutstanding: 15728700416,
//     timestamp: 1690995873,
//   },
// ];

// test('Company with finantial components should render correctly', () => {
//   const tree = render(
//     <MemoryRouter initialEntries={['/company']}>
//       <Provider store={store}>
//         <Company />
//       </Provider>
//     </MemoryRouter>,
//   );
//   expect(tree).toMatchSnapshot();
// });
