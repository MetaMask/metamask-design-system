import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { createRef } from 'react';

import { ButtonHero } from './ButtonHero';

describe('ButtonHero Component', () => {
  it('renders children correctly', () => {
    render(<ButtonHero>Button Hero</ButtonHero>);
    expect(screen.getByText('Button Hero')).toBeInTheDocument();
  });

  it('renders as a button element by default', () => {
    render(<ButtonHero>Click me</ButtonHero>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click me');
  });

  it('handles click events', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();

    render(<ButtonHero onClick={handleClick}>Click me</ButtonHero>);

    const button = screen.getByRole('button');
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies custom className correctly', () => {
    render(<ButtonHero className="bg-default">Styled Button</ButtonHero>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-default');
  });

  it('handles disabled state correctly', () => {
    const handleClick = jest.fn();
    render(
      <ButtonHero isDisabled onClick={handleClick}>
        Disabled Button
      </ButtonHero>,
    );

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-disabled', 'true');
  });

  it('applies loading styles while preserving hero-specific classes', () => {
    render(
      <ButtonHero isLoading loadingText="Loading...">
        Loading Button
      </ButtonHero>,
    );

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-busy', 'true');

    expect(screen.getAllByText('Loading...')).toHaveLength(2);
  });

  it('displays loading text when loading', () => {
    render(
      <ButtonHero isLoading loadingText="Please wait...">
        Submit
      </ButtonHero>,
    );

    expect(screen.getAllByText('Please wait...')).toHaveLength(2);
    // Original text should still be present but invisible
    expect(screen.getByText('Submit')).toHaveClass('invisible');
  });

  it('does not apply hover/active classes when disabled or loading', () => {
    const { rerender } = render(<ButtonHero isDisabled>Disabled</ButtonHero>);

    let button = screen.getByRole('button');
    expect(button).not.toHaveClass(
      'hover:bg-primary-default-hover',
      'active:bg-primary-default-pressed',
    );

    rerender(<ButtonHero isLoading>Loading</ButtonHero>);
    button = screen.getByRole('button');
    expect(button).not.toHaveClass(
      'hover:bg-primary-default-hover',
      'active:bg-primary-default-pressed',
    );
  });

  it('forwards ref correctly', () => {
    const ref = createRef<HTMLButtonElement>();
    render(<ButtonHero ref={ref}>Button with ref</ButtonHero>);

    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    expect(ref.current).toHaveTextContent('Button with ref');
  });
});
