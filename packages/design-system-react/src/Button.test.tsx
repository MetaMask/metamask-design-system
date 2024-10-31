import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  it('renders children correctly', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('applies the correct classes', () => {
    const { container } = render(<Button>Styled Button</Button>);
    expect(container.firstChild).toHaveClass(
      'px-4 h-8 rounded-full bg-primary-default text-primary-inverse',
    );
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('passes additional props to the button element', () => {
    render(<Button aria-label="custom-button">Accessible Button</Button>);
    expect(screen.getByLabelText('custom-button')).toBeInTheDocument();
  });
});
