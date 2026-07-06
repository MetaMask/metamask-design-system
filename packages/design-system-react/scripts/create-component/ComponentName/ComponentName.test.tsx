import { render, screen } from '@testing-library/react';
import React from 'react';

import { ComponentName } from './ComponentName';

describe('ComponentName Component', () => {
  it('renders children correctly', () => {
    render(<ComponentName>Hello, World!</ComponentName>);
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });

  it('applies the correct classes', () => {
    render(
      <ComponentName className="bg-default">Styled Content</ComponentName>,
    );
    expect(screen.getByText('Styled Content')).toHaveClass('bg-default');
  });

  it('accepts data-testid prop', () => {
    render(
      <ComponentName data-testid="component-name">Test Content</ComponentName>,
    );
    expect(screen.getByTestId('component-name')).toBeInTheDocument();
  });

  // Add more tests as needed
});
