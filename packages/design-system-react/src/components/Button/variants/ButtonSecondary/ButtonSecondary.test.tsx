import { render, screen } from '@testing-library/react';
import React from 'react';

import { ButtonSecondarySize } from '../../../../types';
import { IconName } from '../../../Icon';

import { ButtonSecondary } from './ButtonSecondary';

describe('ButtonSecondary', () => {
  it('renders with secondary button styles by default', () => {
    render(<ButtonSecondary>Secondary Button</ButtonSecondary>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass(
      'bg-muted',
      'text-default',
      'hover:bg-muted-hover',
      'active:bg-muted-pressed',
    );
  });

  it('renders with danger styles when isDanger is true', () => {
    render(<ButtonSecondary isDanger>Danger Button</ButtonSecondary>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass(
      'bg-muted',
      'text-error-default',
      'hover:bg-muted-hover',
      'active:bg-muted-pressed',
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
      'bg-muted',
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
      'text-default',
      'bg-muted-pressed',
      'cursor-not-allowed',
    );
  });

  it('does not apply hover/active classes when disabled or loading', () => {
    const { rerender } = render(
      <ButtonSecondary isDisabled>Disabled</ButtonSecondary>,
    );

    let button = screen.getByRole('button');
    expect(button).not.toHaveClass(
      'hover:bg-muted-hover',
      'active:bg-muted-pressed',
    );

    rerender(<ButtonSecondary isLoading>Loading</ButtonSecondary>);
    button = screen.getByRole('button');
    expect(button).not.toHaveClass(
      'hover:bg-muted-hover',
      'active:bg-muted-pressed',
    );
  });

  it('renders with correct size classes', () => {
    const { rerender } = render(
      <ButtonSecondary size={ButtonSecondarySize.Sm}>Small</ButtonSecondary>,
    );
    expect(screen.getByRole('button')).toHaveClass('h-8');

    rerender(
      <ButtonSecondary size={ButtonSecondarySize.Lg}>Large</ButtonSecondary>,
    );
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

    expect(screen.getAllByText('Please wait...')).toHaveLength(2); // Both visible and screen reader text
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
      expect(button).toHaveClass('bg-muted-pressed');

      // Should not have hover/active classes
      expect(button).not.toHaveClass('hover:bg-muted-hover');
      expect(button).not.toHaveClass('active:bg-muted-pressed');

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
      expect(button).toHaveClass('bg-muted-pressed', 'text-error-default');
      expect(button).not.toHaveClass('hover:bg-muted-hover');
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
      expect(button).toHaveClass('bg-default-pressed', 'text-error-default');
    });
  });
});
