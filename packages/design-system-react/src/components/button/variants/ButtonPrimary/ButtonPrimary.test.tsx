import { render, screen } from '@testing-library/react';
import React from 'react';

import { ButtonPrimarySize } from '../../../../types';
import { IconName } from '../../../Icon';
import { ButtonPrimary } from './ButtonPrimary';

describe('ButtonPrimary', () => {
  it('renders with primary button styles by default', () => {
    render(<ButtonPrimary>Primary Button</ButtonPrimary>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass(
      'bg-primary-default',
      'hover:bg-primary-default-hover',
      'active:bg-primary-default-pressed',
      'text-primary-inverse',
    );
  });

  it('renders with danger styles when isDanger is true', () => {
    render(<ButtonPrimary isDanger>Danger Button</ButtonPrimary>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass(
      'bg-error-default',
      'hover:bg-error-default-hover',
      'active:bg-error-default-pressed',
      'text-error-inverse',
    );
  });

  it('renders with inverse styles when isInverse is true', () => {
    render(<ButtonPrimary isInverse>Inverse Button</ButtonPrimary>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass(
      'bg-default',
      'hover:bg-default-hover',
      'active:bg-default-pressed',
      'text-default',
    );
  });

  it('merges custom className with default styles', () => {
    render(
      <ButtonPrimary className="custom-class">Primary Button</ButtonPrimary>,
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
    expect(button).toHaveClass('bg-primary-default');
  });

  it('renders with inverse danger styles when both isInverse and isDanger are true', () => {
    render(
      <ButtonPrimary isInverse isDanger>
        Inverse Danger Button
      </ButtonPrimary>,
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass(
      'bg-default',
      'hover:bg-default-hover',
      'active:bg-default-pressed',
      'text-error-default',
    );
  });

  it('applies disabled styles while preserving variant-specific classes', () => {
    render(<ButtonPrimary isDisabled>Disabled Button</ButtonPrimary>);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass(
      'bg-primary-default',
      'text-primary-inverse',
      'opacity-50',
      'cursor-not-allowed',
    );
  });

  it('applies loading styles while preserving variant-specific classes', () => {
    render(
      <ButtonPrimary isLoading loadingText="Loading...">
        Loading Button
      </ButtonPrimary>,
    );

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass(
      'text-primary-inverse',
      'bg-primary-default-pressed',
      'cursor-not-allowed',
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('does not apply hover/active classes when disabled or loading', () => {
    const { rerender } = render(
      <ButtonPrimary isDisabled>Disabled</ButtonPrimary>,
    );

    let button = screen.getByRole('button');
    expect(button).not.toHaveClass(
      'hover:bg-primary-default-hover',
      'active:bg-primary-default-pressed',
    );

    rerender(<ButtonPrimary isLoading>Loading</ButtonPrimary>);
    button = screen.getByRole('button');
    expect(button).not.toHaveClass(
      'hover:bg-primary-default-hover',
      'active:bg-primary-default-pressed',
    );
  });

  it('renders with correct size classes', () => {
    const { rerender } = render(
      <ButtonPrimary size={ButtonPrimarySize.Sm}>Small</ButtonPrimary>,
    );
    expect(screen.getByRole('button')).toHaveClass('h-8');

    rerender(<ButtonPrimary size={ButtonPrimarySize.Lg}>Large</ButtonPrimary>);
    expect(screen.getByRole('button')).toHaveClass('h-12');
  });

  it('renders with icons correctly', () => {
    render(
      <ButtonPrimary
        startIconName={IconName.AddSquare}
        startIconProps={{ 'data-testid': 'start-icon' }}
        endIconName={IconName.AddSquare}
        endIconProps={{ 'data-testid': 'end-icon' }}
      >
        With Icons
      </ButtonPrimary>,
    );

    const startIcon = screen.getByTestId('start-icon');
    const endIcon = screen.getByTestId('end-icon');
    expect(startIcon).toHaveClass('mr-2');
    expect(endIcon).toHaveClass('ml-2');
  });

  it('renders loading text when provided', () => {
    render(
      <ButtonPrimary isLoading loadingText="Please wait...">
        Submit
      </ButtonPrimary>,
    );

    expect(screen.getByText('Please wait...')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toHaveClass('invisible');
  });

  it('applies full width class correctly', () => {
    render(<ButtonPrimary isFullWidth>Full Width</ButtonPrimary>);
    expect(screen.getByRole('button')).toHaveClass('w-full');
  });

  it('renders as child component when asChild is true', () => {
    render(
      <ButtonPrimary asChild>
        <a href="#">Link Button</a>
      </ButtonPrimary>,
    );

    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#');
  });

  describe('loading state', () => {
    it('applies correct loading styles and removes hover/active states', () => {
      render(<ButtonPrimary isLoading>Loading Button</ButtonPrimary>);

      const button = screen.getByRole('button');

      // Should have loading background
      expect(button).toHaveClass('bg-primary-default-pressed');

      // Should not have hover/active classes
      expect(button).not.toHaveClass('hover:bg-primary-default-hover');
      expect(button).not.toHaveClass('active:bg-primary-default-pressed');

      // Should be disabled and have loading cursor
      expect(button).toBeDisabled();
      expect(button).toHaveClass('cursor-not-allowed');
    });

    it('applies correct loading styles for danger variant', () => {
      render(
        <ButtonPrimary isLoading isDanger>
          Loading Button
        </ButtonPrimary>,
      );

      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-error-default-pressed');
      expect(button).not.toHaveClass('hover:bg-error-default-hover');
    });

    it('applies correct loading styles for inverse variant', () => {
      render(
        <ButtonPrimary isLoading isInverse>
          Loading Button
        </ButtonPrimary>,
      );

      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-default-pressed');
      expect(button).not.toHaveClass('hover:bg-default-hover');
    });

    it('applies correct loading styles for inverse danger variant', () => {
      render(
        <ButtonPrimary isLoading isInverse isDanger>
          Loading Button
        </ButtonPrimary>,
      );

      const button = screen.getByRole('button');

      // Should have the correct background and text colors
      expect(button).toHaveClass('bg-default-pressed');
      expect(button).toHaveClass('text-error-default');

      // Should not have hover/active classes
      expect(button).not.toHaveClass('hover:bg-default-hover');
      expect(button).not.toHaveClass('active:bg-default-pressed');

      // Should be disabled and have loading cursor
      expect(button).toBeDisabled();
      expect(button).toHaveClass('cursor-not-allowed');
    });
  });

  describe('className combinations', () => {
    it('handles all isDanger and isInverse combinations', () => {
      const { rerender } = render(<ButtonPrimary>Button</ButtonPrimary>);

      // Default state (both false)
      expect(screen.getByRole('button')).toHaveClass('bg-primary-default');

      // Only isDanger
      rerender(<ButtonPrimary isDanger>Button</ButtonPrimary>);
      expect(screen.getByRole('button')).toHaveClass('bg-error-default');

      // Only isInverse
      rerender(<ButtonPrimary isInverse>Button</ButtonPrimary>);
      expect(screen.getByRole('button')).toHaveClass('bg-default');
      expect(screen.getByRole('button')).toHaveClass('text-default');

      // Both isDanger and isInverse
      rerender(
        <ButtonPrimary isDanger isInverse>
          Button
        </ButtonPrimary>,
      );
      expect(screen.getByRole('button')).toHaveClass('bg-default');
      expect(screen.getByRole('button')).toHaveClass('text-error-default');
    });

    it('handles all interactive state combinations', () => {
      const { rerender } = render(<ButtonPrimary>Button</ButtonPrimary>);

      // Default interactive state
      let button = screen.getByRole('button');
      expect(button).toHaveClass('bg-primary-default');
      expect(button).toHaveClass('hover:bg-primary-default-hover');
      expect(button).toHaveClass('active:bg-primary-default-pressed');

      // Disabled
      rerender(<ButtonPrimary isDisabled>Button</ButtonPrimary>);
      button = screen.getByRole('button');
      expect(button).not.toHaveClass('hover:bg-primary-default-hover');

      // Loading
      rerender(<ButtonPrimary isLoading>Button</ButtonPrimary>);
      button = screen.getByRole('button');
      expect(button).not.toHaveClass('hover:bg-primary-default-hover');
    });
  });
});
