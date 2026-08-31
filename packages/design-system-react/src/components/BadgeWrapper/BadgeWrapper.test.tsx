import {
  BadgeWrapperPosition,
  BadgeWrapperPositionAnchorShape,
} from '@metamask/design-system-shared';
import { render, screen } from '@testing-library/react';
import React, { createRef } from 'react';

import { BadgeWrapper } from './BadgeWrapper';

describe('BadgeWrapper', () => {
  it('renders the wrapper, anchor, and badge elements', () => {
    render(
      <BadgeWrapper
        data-testid="wrapper"
        badge={<div data-testid="badge">B</div>}
      >
        <span data-testid="anchor">A</span>
      </BadgeWrapper>,
    );
    expect(screen.getByTestId('wrapper')).toBeInTheDocument();
    expect(screen.getByTestId('anchor')).toBeInTheDocument();
    expect(screen.getByTestId('badge')).toBeInTheDocument();
  });

  it('defaults to BottomRight with zero offsets', () => {
    render(
      <BadgeWrapper badge={<div data-testid="badge">B</div>}>
        <div data-testid="anchor" />
      </BadgeWrapper>,
    );
    const badgeEl = screen.getByTestId('badge');
    // Ensure the parent element exists
    expect(badgeEl.parentElement).toBeInTheDocument();
    // Apply styles check only after confirming parent exists
    expect(badgeEl.parentElement).toHaveStyle({ bottom: '7%', right: '7%' });
  });

  it('applies BottomLeft position correctly', () => {
    render(
      <BadgeWrapper
        position={BadgeWrapperPosition.BottomLeft}
        badge={<div data-testid="badge" />}
      >
        <div data-testid="anchor" />
      </BadgeWrapper>,
    );
    const badgeEl = screen.getByTestId('badge');
    expect(badgeEl.parentElement).toBeInTheDocument();
    expect(badgeEl.parentElement).toHaveStyle({ bottom: '7%', left: '7%' });
  });

  it('applies TopLeft position correctly', () => {
    render(
      <BadgeWrapper
        position={BadgeWrapperPosition.TopLeft}
        badge={<div data-testid="badge" />}
      >
        <div data-testid="anchor" />
      </BadgeWrapper>,
    );
    const badgeEl = screen.getByTestId('badge');
    expect(badgeEl.parentElement).toBeInTheDocument();
    expect(badgeEl.parentElement).toHaveStyle({ top: '7%', left: '7%' });
  });

  it('applies TopRight position correctly', () => {
    render(
      <BadgeWrapper
        position={BadgeWrapperPosition.TopRight}
        badge={<div data-testid="badge" />}
      >
        <div data-testid="anchor" />
      </BadgeWrapper>,
    );
    const badgeEl = screen.getByTestId('badge');
    expect(badgeEl.parentElement).toBeInTheDocument();
    expect(badgeEl.parentElement).toHaveStyle({ top: '7%', right: '7%' });
  });

  it('respects positionXOffset and positionYOffset', () => {
    render(
      <BadgeWrapper
        positionXOffset={5}
        positionYOffset={10}
        badge={<div data-testid="badge" />}
      >
        <div data-testid="anchor" />
      </BadgeWrapper>,
    );
    const badgeEl = screen.getByTestId('badge');
    expect(badgeEl.parentElement).toBeInTheDocument();
    expect(badgeEl.parentElement).toHaveStyle({ bottom: '7%', right: '7%' });
  });

  it('uses Rectangular anchor shape (no extra shape offset)', () => {
    render(
      <BadgeWrapper
        positionAnchorShape={BadgeWrapperPositionAnchorShape.Rectangular}
        positionXOffset={3}
        positionYOffset={4}
        badge={<div data-testid="badge" />}
      >
        <div data-testid="anchor" />
      </BadgeWrapper>,
    );
    const badgeEl = screen.getByTestId('badge');
    expect(badgeEl.parentElement).toBeInTheDocument();
    expect(badgeEl.parentElement).toHaveStyle({
      bottom: '11%',
      right: '11%',
    });
  });

  it('overrides with customPosition when provided', () => {
    const custom = { top: 1, right: 2, bottom: 3, left: 4 };
    render(
      <BadgeWrapper customPosition={custom} badge={<div data-testid="badge" />}>
        <div data-testid="anchor" />
      </BadgeWrapper>,
    );
    const badgeEl = screen.getByTestId('badge');
    expect(badgeEl.parentElement).toBeInTheDocument();
    expect(badgeEl.parentElement).toHaveStyle({
      top: '1px',
      right: '2px',
      bottom: '3px',
      left: '4px',
    });
  });

  it('merges extra className and style onto the container', () => {
    render(
      <BadgeWrapper
        data-testid="wrapper"
        className="bg-default"
        style={{ margin: 7 }}
        badge={<div data-testid="badge" />}
      >
        <div data-testid="anchor" />
      </BadgeWrapper>,
    );
    const wrapper = screen.getByTestId('wrapper');
    expect(wrapper).toHaveClass(
      'relative',
      'inline-flex',
      'self-start',
      'bg-default',
    );
    expect(wrapper).toHaveStyle({ margin: '7px' });
  });

  it('forwards ref to the container div', () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <BadgeWrapper ref={ref} badge={<div />}>
        <div />
      </BadgeWrapper>,
    );
    expect(ref.current?.tagName).toBe('DIV');
  });

  it('uses static badge dimensions and transforms', () => {
    render(
      <BadgeWrapper badge={<div data-testid="badge-m" />}>
        <div data-testid="anchor-m" />
      </BadgeWrapper>,
    );

    const badgeEl = screen.getByTestId('badge-m');
    expect(badgeEl.parentElement).toBeInTheDocument();
    // We can assert that parentElement exists since we checked it's in the document
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const badgeDiv = badgeEl.parentElement!;

    expect(badgeDiv).toHaveStyle({
      bottom: '7%',
      right: '7%',
      width: '16px',
      height: '16px',
      transform: 'translate(8px, 8px)',
    });
  });
});
