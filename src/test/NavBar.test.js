import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import NavBar from '../components/NavBar';

test('The Navigation Bar renders correctly', () => {
  const tree = render(
    <MemoryRouter initialEntries={['/home']}>
      <NavBar />
    </MemoryRouter>,
  );
  expect(tree).toMatchSnapshot();
});

test('Check if the link is correctly placed in the component', () => {
  render(
    <MemoryRouter initialEntries={['/home']}>
      <NavBar />
    </MemoryRouter>,
  );
  const links = document.getElementsByTagName('a');
  expect(links.length).toBe(1);
});
