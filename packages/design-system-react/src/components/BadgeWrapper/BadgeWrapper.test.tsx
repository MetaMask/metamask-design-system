import { render, screen } from '@testing-library/react';
import React, { createRef } from 'react';

import {
  BadgeWrapperPosition,
  BadgeWrapperPositionAnchorShape,
} from '../../types';

import { BadgeWrapper } from './BadgeWrapper';

describe('BadgeWrapper', () => {
  beforeEach(() => {
    jest.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      x: 0,
      y: 0,
      toJSON: () => {
        // Empty implementation needed for mock
        return '';
      },
    });
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

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
    expect(badgeEl.parentElement).toHaveStyle({ bottom: '0px', right: '0px' });
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
    expect(badgeEl.parentElement).toHaveStyle({ bottom: '0px', left: '0px' });
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
    expect(badgeEl.parentElement).toHaveStyle({ top: '0px', left: '0px' });
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
    expect(badgeEl.parentElement).toHaveStyle({ top: '0px', right: '0px' });
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
    expect(badgeEl.parentElement).toHaveStyle({ bottom: '10px', right: '5px' });
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
    expect(badgeEl.parentElement).toHaveStyle({ bottom: '4px', right: '3px' });
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

  it('calculates finalPositions correctly', () => {
    jest.restoreAllMocks();
    const anchorRect = {
      width: 100,
      height: 50,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      x: 0,
      y: 0,
      toJSON: () => {
        // Empty implementation needed for mock
        return '';
      },
    };
    const badgeRect = {
      width: 20,
      height: 10,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      x: 0,
      y: 0,
      toJSON: () => {
        // Empty implementation needed for mock
        return '';
      },
    };
    jest
      .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
      .mockReturnValueOnce(anchorRect)
      .mockReturnValueOnce(badgeRect);

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

    // Computed offsets:
    // anchorShapeXOffset = 100 * .1464 = 14.64
    // badgeCenteringXOffset = 20/2 = 10
    // finalXOffset = 14.64 - 10 = 4.64
    // anchorShapeYOffset = 50 * .1464 = 7.32
    // badgeCenteringYOffset = 10/2 = 5
    // finalYOffset = 7.32 - 5 = 2.32
    const bottom = parseFloat(badgeDiv.style.bottom);
    const right = parseFloat(badgeDiv.style.right);
    expect(bottom).toBeCloseTo(2.32, 2);
    expect(right).toBeCloseTo(4.64, 2);
  });
});
