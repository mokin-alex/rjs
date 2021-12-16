import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react header text', () => {
  render(<App />);
  expect(screen.getByText(/MAW ReactJS home work/i)).toBeInTheDocument();
});
