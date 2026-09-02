import { BoxFlexDirection } from '@metamask/design-system-shared';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { createRef } from 'react';

import { Card } from './Card';

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Card content</Card>);

    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('applies default surface styles', () => {
    render(<Card data-testid="card">Card content</Card>);

    expect(screen.getByTestId('card')).toHaveClass(
      'p-4',
      'rounded',
      'border',
      'border-default',
      'bg-default',
      'text-default',
    );
  });

  it('renders a block-level surface without stretching to fill a flex parent', () => {
    render(<Card data-testid="card">Card content</Card>);

    const card = screen.getByTestId('card');
    expect(card).toHaveClass('block');
    expect(card).not.toHaveClass('w-full');
  });

  it('keeps the flex display when flexDirection is provided', () => {
    render(
      <Card data-testid="card" flexDirection={BoxFlexDirection.Row}>
        Card content
      </Card>,
    );

    const card = screen.getByTestId('card');
    expect(card).toHaveClass('flex', 'flex-row');
    expect(card).not.toHaveClass('block');
  });

  it('allows the text color to be overridden via className', () => {
    render(
      <Card data-testid="card" className="text-muted">
        Card content
      </Card>,
    );

    const card = screen.getByTestId('card');
    expect(card).toHaveClass('text-muted');
    expect(card).not.toHaveClass('text-default');
  });

  it('merges className with default classes', () => {
    render(
      <Card data-testid="card" className="mt-4">
        Card content
      </Card>,
    );

    const card = screen.getByTestId('card');
    expect(card).toHaveClass('p-4', 'rounded', 'border-default', 'mt-4');
  });

  it('applies inline styles when provided', () => {
    render(
      <Card data-testid="card" style={{ marginTop: 8 }}>
        Card content
      </Card>,
    );

    expect(screen.getByTestId('card')).toHaveStyle({ marginTop: '8px' });
  });

  it('renders a div when onClick is omitted', () => {
    render(<Card data-testid="card">Card content</Card>);

    expect(screen.getByTestId('card').tagName).toBe('DIV');
  });

  it('renders a button and fires onClick when provided', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();

    render(
      <Card data-testid="card" onClick={onClick}>
        Pressable card
      </Card>,
    );

    const card = screen.getByRole('button', { name: 'Pressable card' });
    expect(card.tagName).toBe('BUTTON');

    await user.click(card);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('applies pressable surface styles when onClick is provided', () => {
    render(<Card onClick={jest.fn()}>Pressable card</Card>);

    expect(screen.getByRole('button', { name: 'Pressable card' })).toHaveClass(
      'cursor-pointer',
      'hover:bg-hover',
      'active:bg-pressed',
    );
  });

  it('does not apply pressable surface styles when onClick is omitted', () => {
    render(<Card data-testid="card">Card content</Card>);

    expect(screen.getByTestId('card')).not.toHaveClass(
      'cursor-pointer',
      'hover:bg-hover',
      'active:bg-pressed',
    );
  });

  it('merges props onto the child when asChild is true', () => {
    render(
      <Card asChild>
        <article data-testid="card">Card content</article>
      </Card>,
    );

    const card = screen.getByTestId('card');
    expect(card.tagName).toBe('ARTICLE');
    expect(card).toHaveClass(
      'p-4',
      'rounded',
      'border-default',
      'bg-default',
      'text-default',
    );
  });

  it('makes an inline child a full-width block surface when asChild is true', () => {
    render(
      <Card asChild>
        <a href="#activity" data-testid="card">
          Card content
        </a>
      </Card>,
    );

    expect(screen.getByTestId('card')).toHaveClass('block', 'w-full');
  });

  it('forwards onClick onto the child when asChild is true', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();

    render(
      <Card asChild onClick={onClick}>
        <a href="#activity" data-testid="card">
          Card content
        </a>
      </Card>,
    );

    await user.click(screen.getByTestId('card'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('forwards ref to the root element', () => {
    const ref = createRef<HTMLDivElement>();

    render(<Card ref={ref}>Card content</Card>);

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('forwards ref to the button when onClick is provided', () => {
    const ref = createRef<HTMLButtonElement>();

    render(
      <Card ref={ref} onClick={jest.fn()}>
        Pressable card
      </Card>,
    );

    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});
