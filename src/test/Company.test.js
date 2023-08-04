import React from 'react';
import * as redux from 'react-redux';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Company from '../components/Company';
import { getCompaniesData } from '../Redux/CompaniesSlice/CompaniesSlice';

describe('Company', () => {
  test('should dispatch getCompaniesData when status is idle', () => {
    const dispatch = jest.fn();
    const useSelectorMock = jest.spyOn(redux, 'useSelector');
    useSelectorMock.mockReturnValueOnce([]);
    useSelectorMock.mockReturnValueOnce('idle');

    render(<Company />, { wrapper: MemoryRouter });
    expect(dispatch).toHaveBeenCalledWith(getCompaniesData());
  });
});

// companies: [
//   {
//     symbol: 'AAPL',
//     name: 'Apple Inc.',
//     price: 148.48,
//     dayLow: 147.22,
//     dayHigh: 148.5,
//     priceAvg50: 146.5,
//     open: 148.11,
//     previousClose: 148.48,
//     volume: 56729590,
//   },
// ]
