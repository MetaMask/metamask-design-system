import { render, screen } from '@testing-library/react';
import React from 'react';

import { ButtonPrimarySize, IconName } from '..';
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
    expect(screen.queryByText('Submit')).not.toBeInTheDocument();
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
});
