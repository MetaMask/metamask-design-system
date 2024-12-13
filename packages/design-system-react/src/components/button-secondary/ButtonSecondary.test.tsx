import { render, screen } from '@testing-library/react';
import React from 'react';

import { ButtonSecondarySize, IconName } from '..';
import { ButtonSecondary } from './ButtonSecondary';

describe('ButtonSecondary', () => {
  it('renders with secondary button styles by default', () => {
    render(<ButtonSecondary>Secondary Button</ButtonSecondary>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass(
      'bg-default',
      'border-2',
      'border-muted',
      'text-default',
    );
  });

  it('renders with danger styles when isDanger is true', () => {
    render(<ButtonSecondary isDanger>Danger Button</ButtonSecondary>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass(
      'bg-default',
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

  it('merges custom className with default styles', () => {
    render(
      <ButtonSecondary className="custom-class">
        Secondary Button
      </ButtonSecondary>,
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
    expect(button).toHaveClass('bg-default');
  });

  it('renders with inverse danger styles when both isInverse and isDanger are true', () => {
    render(
      <ButtonSecondary isInverse isDanger>
        Inverse Danger Button
      </ButtonSecondary>,
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass(
      'bg-transparent',
      'border-2',
      'border-error-inverse',
      'text-error-inverse',
    );
  });

  it('applies disabled styles while preserving variant-specific classes', () => {
    render(<ButtonSecondary isDisabled>Disabled Button</ButtonSecondary>);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass(
      'bg-default',
      'border-2',
      'border-muted',
      'text-default',
      'opacity-50',
      'cursor-not-allowed',
    );
  });

  it('applies loading styles while preserving variant-specific classes', () => {
    render(
      <ButtonSecondary isLoading loadingText="Loading...">
        Loading Button
      </ButtonSecondary>,
    );

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass(
      'bg-default',
      'border-2',
      'border-muted',
      'text-default',
      'opacity-50',
      'cursor-not-allowed',
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
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
        endIconName={IconName.AddSquare}
      >
        With Icons
      </ButtonSecondary>,
    );

    const icons = screen.getAllByRole('img');
    expect(icons).toHaveLength(2);
    expect(icons[0]).toHaveClass('mr-2'); // start icon
    expect(icons[1]).toHaveClass('ml-2'); // end icon
  });

  it('renders loading text when provided', () => {
    render(
      <ButtonSecondary isLoading loadingText="Please wait...">
        Submit
      </ButtonSecondary>,
    );

    expect(screen.getByText('Please wait...')).toBeInTheDocument();
    expect(screen.queryByText('Submit')).not.toBeInTheDocument();
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
});
