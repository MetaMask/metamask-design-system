import React from 'react';
import { render, screen } from '@testing-library/react';
import { Text, TextVariant, TextColor } from '.';

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
      'text-default',
      'text-s-heading-lg',
      'font-s-heading-lg',
      'leading-s-heading-lg',
      'tracking-s-heading-lg',
      'md:text-l-heading-lg',
    );
  });

  it('merges additional class names', () => {
    const { container } = render(
      <Text variant={TextVariant.BodySm} className="custom-class">
        Custom Class
      </Text>,
    );
    expect(container.firstChild).toHaveClass(
      'text-default',
      'text-s-body-sm',
      'font-s-body-sm',
      'leading-s-body-sm',
      'tracking-s-body-sm',
      'custom-class',
    );
  });

  it('applies correct color class when color prop is provided', () => {
    const { container } = render(
      <Text variant={TextVariant.BodyMd} color={TextColor.ErrorDefault}>
        Error Text
      </Text>,
    );
    expect(container.firstChild).toHaveClass('text-error-default');
  });

  it('applies ellipsis class when ellipsis prop is true', () => {
    const { container } = render(
      <Text variant={TextVariant.BodyMd} ellipsis>
        Long text that should ellipsis
      </Text>,
    );
    expect(container.firstChild).toHaveClass('truncate');
  });

  it('renders with custom HTML element when as prop is provided', () => {
    const { container } = render(
      <Text variant={TextVariant.BodyMd} as="span">
        Span Text
      </Text>,
    );
    expect(container.firstChild?.nodeName).toBe('SPAN');
  });

  it('renders with default color when no color prop is provided', () => {
    const { container } = render(
      <Text variant={TextVariant.BodyMd}>Default Color Text</Text>,
    );
    expect(container.firstChild).toHaveClass('text-default');
  });

  it('combines multiple props correctly', () => {
    const { container } = render(
      <Text
        variant={TextVariant.BodyMd}
        color={TextColor.SuccessDefault}
        ellipsis
        className="custom-class"
        as="div"
      >
        Combined Props Text
      </Text>,
    );
    expect(container.firstChild).toHaveClass(
      'text-success-default',
      'truncate',
      'custom-class',
    );
    expect(container.firstChild?.nodeName).toBe('DIV');
  });

  it('renders with default variant (BodyMd) when no variant is provided', () => {
    const { container } = render(<Text>Default Variant Text</Text>);
    expect(container.firstChild).toHaveClass(
      'text-default',
      'text-s-body-md',
      'font-s-body-md',
      'leading-s-body-md',
      'tracking-s-body-md',
      'md:text-l-body-md',
    );
  });
});
