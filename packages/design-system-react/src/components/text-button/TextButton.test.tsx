import { render, screen } from '@testing-library/react';
import React from 'react';

import { IconName, Text, TextVariant } from '..';
import { TextButton } from './TextButton';

describe('TextButton', () => {
  it('renders with text button styles by default', () => {
    render(<TextButton>Text Button</TextButton>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass(
      'text-primary-default',
      'px-0',
      'h-auto',
      'bg-transparent',
      'rounded-none',
    );
  });

  it('renders with inverse styles when isInverse is true', () => {
    render(<TextButton isInverse>Inverse Button</TextButton>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('text-primary-inverse');
  });

  it('applies the specified text variant', () => {
    render(
      <TextButton textVariant={TextVariant.BodyLg}>
        Custom Text Variant
      </TextButton>,
    );

    const text = screen.getByText('Custom Text Variant');
    expect(text).toHaveClass(
      'text-s-body-lg',
      'leading-s-body-lg',
      'tracking-s-body-lg',
    );
  });

  it('applies disabled styles while preserving variant-specific classes', () => {
    render(<TextButton isDisabled>Disabled Button</TextButton>);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass(
      'text-primary-default',
      'opacity-50',
      'cursor-not-allowed',
    );
  });

  it('applies loading styles while preserving variant-specific classes', () => {
    render(
      <TextButton isLoading loadingText="Loading...">
        Button
      </TextButton>,
    );

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass(
      'text-primary-default-pressed',
      'cursor-not-allowed',
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('applies loading styles with inverse variant', () => {
    render(
      <TextButton isLoading isInverse loadingText="Loading...">
        Button
      </TextButton>,
    );

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('text-primary-inverse', 'cursor-not-allowed');
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders with icons correctly', () => {
    render(
      <TextButton
        startIconName={IconName.AddSquare}
        startIconProps={{ 'data-testid': 'start-icon' }}
        endIconName={IconName.AddSquare}
        endIconProps={{ 'data-testid': 'end-icon' }}
      >
        With Icons
      </TextButton>,
    );

    const startIcon = screen.getByTestId('start-icon');
    const endIcon = screen.getByTestId('end-icon');
    expect(startIcon).toHaveClass('mr-2');
    expect(endIcon).toHaveClass('ml-2');
  });

  it('renders as child component when asChild is true', () => {
    render(
      <TextButton asChild>
        <a href="https://metamask.io">Link Button</a>
      </TextButton>,
    );

    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://metamask.io');
  });

  it('inherits font styles when used inside Text component', () => {
    render(
      <Text variant={TextVariant.BodyLg}>
        Text with{' '}
        <TextButton textProps={{ className: 'font-inherit' }}>
          Text Button
        </TextButton>{' '}
        inside
      </Text>,
    );

    const text = screen.getByText('Text Button');
    expect(text).toHaveClass('font-inherit');
  });
});
