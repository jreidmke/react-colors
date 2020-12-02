import { render, fireEvent } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event'


let homePageRend = render(
  <MemoryRouter initialEntries={['/colors']}>
    <App/>
  </MemoryRouter>
);

test('renders app', () => {
  const {getByText} = homePageRend;
  expect(getByText('Add Color')).toBeInTheDocument();
})

test('/ redirects to /colors page', () => {
  const {getByText} = render(
    <MemoryRouter initialEntries={['/']}>
      <App/>
    </MemoryRouter>
  );
  expect(getByText('Add Color')).toBeInTheDocument();
})

test('matches snapshot', () => {
  const {asFragment} = homePageRend;
  expect(asFragment()).toMatchSnapshot();
})

test('links take user to color details page', () => {
  const {getByText} = render(
    <MemoryRouter initialEntries={['/colors']}>
      <App/>
    </MemoryRouter>
  );
  expect(getByText('Add Color')).toBeInTheDocument();
  fireEvent.click(getByText('RED'));
  expect(getByText('Return Home')).toBeInTheDocument();
  fireEvent.click(getByText('Return Home'));
  expect(getByText('Add Color')).toBeInTheDocument();
})

test('links return user home', () => {//here, it won't let me start on /colors/red. is it a problem with params?
  const {getByText} = render(
    <MemoryRouter initialEntries={['/colors/red']}>
      <App/>
    </MemoryRouter>
  );
  expect(getByText('red')).toBeInTheDocument();
  fireEvent.click(getByText('Return Home'));
  expect(getByText('Add Color')).toBeInTheDocument();
})

test('adds a color', () => {
  const {getByText, getByPlaceholderText} = render(
    <MemoryRouter initialEntries={['/colors']}>
      <App/>
    </MemoryRouter>
  );
  const input = getByPlaceholderText('Color');
  userEvent.type(input, 'pink');
  fireEvent.click(getByText('Add Color'));
  expect(getByText('PINK')).toBeInTheDocument();
})
