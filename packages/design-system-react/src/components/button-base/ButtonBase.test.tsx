import { render, screen } from '@testing-library/react';
import React from 'react';

import { ButtonBase } from './ButtonBase';

describe('ButtonBase Component', () => {
  it('renders children correctly', () => {
    render(<ButtonBase>Hello, World!</ButtonBase>);
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });

  it('applies the correct classes', () => {
    render(
      <ButtonBase className="custom-class">Styled Content</ButtonBase>,
    );
    expect(screen.getByText('Styled Content')).toHaveClass('custom-class');
    // Add more class-related tests as needed
  });

  // Add more tests as needed
});
