import { render, screen } from '@testing-library/react';
import Home from '@/app/page';
import '@testing-library/jest-dom';

describe('Home Component', () => {
  test('renders the heading', () => {
    render(<Home />);
    const headingElement = screen.getByText(/welcome to the home page!/i);
    expect(headingElement).toBeInTheDocument();
  });
});
