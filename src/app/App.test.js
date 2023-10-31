import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App', () => {
  render(<App />);
  const H1Element = screen.getByText('Ingaberg Orton');
  expect(H1Element).toBeInTheDocument();
});
