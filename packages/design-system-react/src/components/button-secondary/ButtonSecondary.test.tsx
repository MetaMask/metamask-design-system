import { render, screen } from '@testing-library/react';
import React from 'react';

import { IconName } from '../icon';
import { ButtonBaseSize } from '../button-base';
import { ButtonSecondary } from './ButtonSecondary';

describe('ButtonSecondary', () => {
  it('renders with secondary button styles by default', () => {
    render(<ButtonSecondary>Secondary Button</ButtonSecondary>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass(
      'bg-transparent',
      'border-2',
      'border-icon-muted',
      'text-default',
    );
  });

  it('renders with danger styles when isDanger is true', () => {
    render(<ButtonSecondary isDanger>Danger Button</ButtonSecondary>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass(
      'bg-error-muted',
      'border-2',
      'border-error-default',
      'text-error-default',
    );
  });

  it('renders with inverse styles when isInverse is true', () => {
    render(<ButtonSecondary isInverse>Inverse Button</ButtonSecondary>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass(
      'bg-transparent',
      'border-2',
      'border-primary-inverse',
      'text-primary-inverse',
    );
  });

  it('renders with inverse danger styles when both isInverse and isDanger are true', () => {
    render(
      <ButtonSecondary isInverse isDanger>
        Inverse Danger Button
      </ButtonSecondary>,
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-default', 'border-0', 'text-error-default');
  });

  it('applies disabled styles while preserving variant-specific classes', () => {
    render(<ButtonSecondary isDisabled>Disabled Button</ButtonSecondary>);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass(
      'bg-transparent',
      'border-2',
      'border-icon-muted',
      'text-default',
      'opacity-50',
      'cursor-not-allowed',
    );
  });

  it('applies loading styles while preserving variant-specific classes', () => {
    render(<ButtonSecondary isLoading>Button</ButtonSecondary>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass(
      'border-2',
      'border-icon-muted',
      'text-default',
      'bg-pressed',
      'cursor-not-allowed',
    );
  });

  it('does not apply hover/active classes when disabled or loading', () => {
    const { rerender } = render(
      <ButtonSecondary isDisabled>Disabled</ButtonSecondary>,
    );

    let button = screen.getByRole('button');
    expect(button).not.toHaveClass(
      'hover:bg-default-hover',
      'hover:border-default',
      'active:bg-default-pressed',
    );

    rerender(<ButtonSecondary isLoading>Loading</ButtonSecondary>);
    button = screen.getByRole('button');
    expect(button).not.toHaveClass(
      'hover:bg-default-hover',
      'hover:border-default',
      'active:bg-default-pressed',
    );
  });

  it('renders with correct size classes', () => {
    const { rerender } = render(
      <ButtonSecondary size={ButtonBaseSize.Sm}>Small</ButtonSecondary>,
    );
    expect(screen.getByRole('button')).toHaveClass('h-8');

    rerender(<ButtonSecondary size={ButtonBaseSize.Lg}>Large</ButtonSecondary>);
    expect(screen.getByRole('button')).toHaveClass('h-12');
  });

  it('renders with icons correctly', () => {
    render(
      <ButtonSecondary
        startIconName={IconName.AddSquare}
        startIconProps={{ 'data-testid': 'start-icon' }}
        endIconName={IconName.AddSquare}
        endIconProps={{ 'data-testid': 'end-icon' }}
      >
        With Icons
      </ButtonSecondary>,
    );

    const startIcon = screen.getByTestId('start-icon');
    const endIcon = screen.getByTestId('end-icon');
    expect(startIcon).toHaveClass('mr-2');
    expect(endIcon).toHaveClass('ml-2');
  });

  it('renders loading text when provided', () => {
    render(
      <ButtonSecondary isLoading loadingText="Please wait...">
        Submit
      </ButtonSecondary>,
    );

    expect(screen.getByText('Please wait...')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toHaveClass('invisible');
  });

  it('applies full width class correctly', () => {
    render(<ButtonSecondary isFullWidth>Full Width</ButtonSecondary>);
    expect(screen.getByRole('button')).toHaveClass('w-full');
  });

  it('renders as child component when asChild is true', () => {
    render(
      <ButtonSecondary asChild>
        <a href="#">Link Button</a>
      </ButtonSecondary>,
    );

    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#');
  });

  describe('loading state', () => {
    it('applies correct loading styles and removes hover/active states', () => {
      render(<ButtonSecondary isLoading>Loading Button</ButtonSecondary>);

      const button = screen.getByRole('button');

      // Should have loading background
      expect(button).toHaveClass('bg-pressed');

      // Should not have hover/active classes
      expect(button).not.toHaveClass('hover:bg-hover');
      expect(button).not.toHaveClass('active:bg-pressed');

      // Should be disabled and have loading cursor
      expect(button).toBeDisabled();
      expect(button).toHaveClass('cursor-not-allowed');
    });

    it('applies correct loading styles for danger variant', () => {
      render(
        <ButtonSecondary isLoading isDanger>
          Loading Button
        </ButtonSecondary>,
      );

      const button = screen.getByRole('button');
      expect(button).toHaveClass(
        'bg-error-muted-pressed',
        'text-error-default-pressed',
      );
      expect(button).not.toHaveClass('hover:bg-hover');
    });

    it('applies correct loading styles for inverse variant', () => {
      render(
        <ButtonSecondary isLoading isInverse>
          Loading Button
        </ButtonSecondary>,
      );

      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-pressed');
      expect(button).not.toHaveClass('hover:bg-hover');
    });

    it('applies correct loading styles for inverse danger variant', () => {
      render(
        <ButtonSecondary isLoading isInverse isDanger>
          Loading Button
        </ButtonSecondary>,
      );

      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-default-pressed');
      expect(button).not.toHaveClass('hover:bg-default-hover');
    });
  });
});
