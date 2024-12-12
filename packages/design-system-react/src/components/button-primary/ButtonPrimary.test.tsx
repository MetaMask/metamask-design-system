import { render, screen } from '@testing-library/react';
import React from 'react';

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
      'bg-primary-inverse',
      'hover:bg-primary-inverse-hover',
      'active:bg-primary-inverse-pressed',
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
      'bg-primary-inverse',
      'hover:bg-primary-inverse-hover',
      'active:bg-primary-inverse-pressed',
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
      'bg-primary-default',
      'text-primary-inverse',
      'opacity-50',
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
});
