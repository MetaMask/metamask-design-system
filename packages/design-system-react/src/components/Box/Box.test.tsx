import { render, screen } from '@testing-library/react';
import React from 'react';

import { Box } from './Box';

describe('Box Component', () => {
  it('renders children correctly', () => {
    render(<Box>Hello, World!</Box>);
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });

  it('applies the correct classes', () => {
    render(
      <Box className="custom-class">Styled Content</Box>,
    );
    expect(screen.getByText('Styled Content')).toHaveClass('custom-class');
    // Add more class-related tests as needed
  });

  // Add more tests as needed
});
