import {
  BoxBackgroundColor,
  BoxBorderColor,
  BoxFlexDirection,
} from '@metamask/design-system-shared';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { KeyboardEvent } from 'react';
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

  it('allows the default surface styles to be overridden via props', () => {
    render(
      <Card
        data-testid="card"
        padding={2}
        borderWidth={2}
        borderColor={BoxBorderColor.BorderMuted}
        backgroundColor={BoxBackgroundColor.BackgroundMuted}
      >
        Card content
      </Card>,
    );

    expect(screen.getByTestId('card')).toHaveClass(
      'p-2',
      'border-2',
      'border-muted',
      'bg-muted',
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

  describe('when onClick is omitted', () => {
    it('renders a plain div with no button affordances', () => {
      render(<Card data-testid="card">Card content</Card>);

      const card = screen.getByTestId('card');
      expect(card.tagName).toBe('DIV');
      expect(card).not.toHaveAttribute('role');
      expect(card).not.toHaveAttribute('tabindex');
    });

    it('does not apply interactive surface styles', () => {
      render(<Card data-testid="card">Card content</Card>);

      expect(screen.getByTestId('card')).not.toHaveClass(
        'cursor-pointer',
        'hover:bg-default-hover',
        'active:bg-default-pressed',
      );
    });

    it('still forwards a consumer onKeyDown handler', () => {
      const onKeyDown = jest.fn();

      render(
        <Card data-testid="card" onKeyDown={onKeyDown}>
          Card content
        </Card>,
      );

      fireEvent.keyDown(screen.getByTestId('card'), { key: 'Enter' });

      expect(onKeyDown).toHaveBeenCalledTimes(1);
    });
  });

  describe('when onClick is provided', () => {
    it('stays a div and exposes button affordances', () => {
      render(<Card onClick={jest.fn()}>Clickable card</Card>);

      const card = screen.getByRole('button', { name: 'Clickable card' });
      expect(card.tagName).toBe('DIV');
      expect(card).toHaveAttribute('tabindex', '0');
    });

    it('applies interactive surface styles', () => {
      render(<Card onClick={jest.fn()}>Clickable card</Card>);

      expect(
        screen.getByRole('button', { name: 'Clickable card' }),
      ).toHaveClass(
        'cursor-pointer',
        'hover:bg-default-hover',
        'active:bg-default-pressed',
      );
    });

    it('fires onClick when clicked', async () => {
      const user = userEvent.setup();
      const onClick = jest.fn();

      render(<Card onClick={onClick}>Clickable card</Card>);

      await user.click(screen.getByRole('button', { name: 'Clickable card' }));

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it.each(['Enter', ' '])('fires onClick on %s', (key) => {
      const onClick = jest.fn();

      render(<Card onClick={onClick}>Clickable card</Card>);

      fireEvent.keyDown(screen.getByRole('button'), { key });

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('does not fire onClick on other keys', () => {
      const onClick = jest.fn();

      render(<Card onClick={onClick}>Clickable card</Card>);

      fireEvent.keyDown(screen.getByRole('button'), { key: 'a' });

      expect(onClick).not.toHaveBeenCalled();
    });

    it('calls a consumer onKeyDown before activating', () => {
      const onClick = jest.fn();
      const onKeyDown = jest.fn();

      render(
        <Card onClick={onClick} onKeyDown={onKeyDown}>
          Clickable card
        </Card>,
      );

      fireEvent.keyDown(screen.getByRole('button'), { key: 'Enter' });

      expect(onKeyDown).toHaveBeenCalledTimes(1);
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('lets a consumer onKeyDown prevent activation', () => {
      const onClick = jest.fn();

      render(
        <Card
          onClick={onClick}
          onKeyDown={(event: KeyboardEvent<HTMLDivElement>) =>
            event.preventDefault()
          }
        >
          Clickable card
        </Card>,
      );

      fireEvent.keyDown(screen.getByRole('button'), { key: 'Enter' });

      expect(onClick).not.toHaveBeenCalled();
    });

    it('does not hijack Enter from an interactive child', () => {
      const onClick = jest.fn();

      render(
        <Card onClick={onClick}>
          <button type="button">Inner button</button>
        </Card>,
      );

      const notPrevented = fireEvent.keyDown(screen.getByText('Inner button'), {
        key: 'Enter',
      });

      expect(notPrevented).toBe(true);
      expect(onClick).not.toHaveBeenCalled();
    });

    it('does not hijack Space from an interactive child', () => {
      const onClick = jest.fn();

      render(
        <Card onClick={onClick}>
          <a href="#activity">Inner link</a>
        </Card>,
      );

      const notPrevented = fireEvent.keyDown(screen.getByText('Inner link'), {
        key: ' ',
      });

      expect(notPrevented).toBe(true);
      expect(onClick).not.toHaveBeenCalled();
    });

    it('allows the role to be overridden', () => {
      render(
        <Card data-testid="card" onClick={jest.fn()} role="link">
          Clickable card
        </Card>,
      );

      expect(screen.getByTestId('card')).toHaveAttribute('role', 'link');
    });
  });

  describe('asChild', () => {
    it('merges props onto the child', () => {
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

    it('makes an inline child a full-width block surface', () => {
      render(
        <Card asChild>
          <a href="#activity" data-testid="card">
            Card content
          </a>
        </Card>,
      );

      expect(screen.getByTestId('card')).toHaveClass('block', 'w-full');
    });

    it('forwards onClick onto the child', async () => {
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

    it('leaves role, tabIndex, and keyboard activation to the child', () => {
      const onClick = jest.fn();

      render(
        <Card asChild onClick={onClick}>
          <a href="#activity" data-testid="card">
            Card content
          </a>
        </Card>,
      );

      const card = screen.getByTestId('card');
      expect(card).not.toHaveAttribute('role');
      expect(card).not.toHaveAttribute('tabindex');

      fireEvent.keyDown(card, { key: 'Enter' });

      expect(onClick).not.toHaveBeenCalled();
    });
  });

  it('forwards ref to the root element', () => {
    const ref = createRef<HTMLDivElement>();

    render(<Card ref={ref}>Card content</Card>);

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('forwards ref to the root element when onClick is provided', () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <Card ref={ref} onClick={jest.fn()}>
        Clickable card
      </Card>,
    );

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
