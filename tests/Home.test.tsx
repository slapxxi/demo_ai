import { render, screen } from '@testing-library/react';
import Home from '@/app/page';
import '@testing-library/jest-dom';

describe('Home Component', () => {
  test('renders the heading', () => {
    render(<Home />);
    const headingElement = screen.getByText(/nothing here/i);
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveClass('text-4xl');
    expect(headingElement).toHaveClass('font-bold');
    expect(headingElement).toHaveClass('text-blue-600');
  });
});
