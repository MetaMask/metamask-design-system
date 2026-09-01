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
    );
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

  it('merges props onto the child when asChild is true', () => {
    render(
      <Card asChild>
        <article data-testid="card">Card content</article>
      </Card>,
    );

    const card = screen.getByTestId('card');
    expect(card.tagName).toBe('ARTICLE');
    expect(card).toHaveClass('p-4', 'rounded', 'border-default', 'bg-default');
  });

  it('forwards ref to the root element', () => {
    const ref = createRef<HTMLDivElement>();

    render(<Card ref={ref}>Card content</Card>);

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
