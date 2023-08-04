import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CompaniesList from '../components/CompaniesList';
import { getCompaniesData } from '../Redux/CompaniesSlice/CompaniesSlice';

test('should call getCompaniesData when status is idle and companies array is empty', () => {
  const dispatch = jest.fn();
  const useSelectorMock = jest.spyOn(redux, 'useSelector');
  useSelectorMock.mockReturnValueOnce([]);
  useSelectorMock.mockReturnValueOnce('idle');
  render(<CompaniesList />, { wrapper: MemoryRouter });
  expect(dispatch).toHaveBeenCalledTimes(1);
  expect(dispatch).toHaveBeenCalledWith(getCompaniesData());
});
