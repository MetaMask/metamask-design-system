import React from 'react';
import { render, screen } from '@testing-library/react';
import { Text, TextVariant } from './Text';

describe('Text Component', () => {
  it('renders children correctly', () => {
    render(<Text variant={TextVariant.BodyMd}>Hello, World!</Text>);
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });

  it('applies the correct variant classes', () => {
    const { container } = render(
      <Text variant={TextVariant.HeadingLg}>Heading</Text>,
    );
    expect(container.firstChild).toHaveClass(
      'text-s-heading-lg font-s-heading-lg leading-s-heading-lg tracking-s-heading-lg lg:text-l-heading-lg lg:font-l-heading-lg lg:leading-l-heading-lg lg:tracking-l-heading-lg',
    );
  });

  it('merges additional class names', () => {
    const { container } = render(
      <Text variant={TextVariant.BodySm} className="custom-class">
        Custom Class
      </Text>,
    );
    expect(container.firstChild).toHaveClass(
      'text-s-body-sm font-s-body-sm leading-s-body-sm tracking-s-body-sm lg:text-l-body-sm lg:font-l-body-sm lg:leading-l-body-sm lg:tracking-l-body-sm custom-class',
    );
  });
});
