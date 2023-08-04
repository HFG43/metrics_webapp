import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import CompanyDisplay from '../components/CompanyDisplay';

test('The Navigation Bar renders correctly', () => {
  const tree = render(
    <MemoryRouter initialEntries={['/company/']}>
      <CompanyDisplay />
    </MemoryRouter>,
  );
  expect(tree).toMatchSnapshot();
});
