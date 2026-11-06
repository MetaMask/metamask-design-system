import type { CSSProperties } from 'react';

import { PopoverPosition } from './Popover.types';

export type PopoverPlacement = Exclude<PopoverPosition, 'auto'>;
type Side = 'top' | 'right' | 'bottom' | 'left';
type Alignment = 'start' | 'end';

export type Rect = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type Size = {
  width: number;
  height: number;
};

export type ComputePopoverPositionOptions = {
  referenceRect: Rect;
  floatingSize: Size;
  /**
   * Area the popover must stay inside for `flip`, `shift` and auto placement
   * (the viewport, in the same coordinate space as `referenceRect`).
   */
  boundary: Rect;
  position: PopoverPosition;
  /**
   * `[skidding, distance]` in px.
   */
  offset: [number, number];
  flip: boolean;
  shift: boolean;
  arrowSize?: Size;
};

export type PopoverPositionResult = {
  x: number;
  y: number;
  placement: PopoverPlacement;
  arrow?: { x?: number; y?: number };
};

const OPPOSITE_SIDE: Record<Side, Side> = {
  top: 'bottom',
  bottom: 'top',
  left: 'right',
  right: 'left',
};

const AUTO_PLACEMENT_CANDIDATES: PopoverPlacement[] = [
  PopoverPosition.Bottom,
  PopoverPosition.Top,
  PopoverPosition.Right,
  PopoverPosition.Left,
];

const getSide = (placement: PopoverPlacement) =>
  placement.split('-')[0] as Side;

const getAlignment = (placement: PopoverPlacement) =>
  placement.split('-')[1] as Alignment | undefined;

const isVerticalSide = (side: Side) => side === 'top' || side === 'bottom';

const clamp = (min: number, value: number, max: number) =>
  Math.max(min, Math.min(value, max));

const getOppositePlacement = (placement: PopoverPlacement) => {
  const alignment = getAlignment(placement);
  const side = OPPOSITE_SIDE[getSide(placement)];
  return (alignment ? `${side}-${alignment}` : side) as PopoverPlacement;
};

const getCoords = (
  reference: Rect,
  floating: Size,
  placement: PopoverPlacement,
  [skidding, distance]: [number, number],
) => {
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  let x = reference.x + reference.width / 2 - floating.width / 2;
  let y = reference.y + reference.height / 2 - floating.height / 2;

  if (side === 'top') {
    y = reference.y - floating.height - distance;
  } else if (side === 'bottom') {
    y = reference.y + reference.height + distance;
  } else if (side === 'left') {
    x = reference.x - floating.width - distance;
  } else {
    x = reference.x + reference.width + distance;
  }

  if (isVerticalSide(side)) {
    if (alignment === 'start') {
      x = reference.x;
    } else if (alignment === 'end') {
      x = reference.x + reference.width - floating.width;
    }
    x += skidding;
  } else {
    if (alignment === 'start') {
      y = reference.y;
    } else if (alignment === 'end') {
      y = reference.y + reference.height - floating.height;
    }
    y += skidding;
  }

  return { x, y };
};

/**
 * Positive values mean the floating element overflows the boundary on that
 * side by that many px; negative values are the remaining space.
 *
 * @param coords - Top-left corner of the floating element.
 * @param coords.x - Left coordinate.
 * @param coords.y - Top coordinate.
 * @param floating - Size of the floating element.
 * @param boundary - Area the floating element must stay inside.
 * @returns Overflow per side.
 */
const getOverflow = (
  { x, y }: { x: number; y: number },
  floating: Size,
  boundary: Rect,
): Record<Side, number> => ({
  top: boundary.y - y,
  bottom: y + floating.height - (boundary.y + boundary.height),
  left: boundary.x - x,
  right: x + floating.width - (boundary.x + boundary.width),
});

const evaluatePlacement = (
  placement: PopoverPlacement,
  options: ComputePopoverPositionOptions,
) => {
  const coords = getCoords(
    options.referenceRect,
    options.floatingSize,
    placement,
    options.offset,
  );
  const overflow = getOverflow(coords, options.floatingSize, options.boundary);
  const side = getSide(placement);
  const crossSides: Side[] = isVerticalSide(side)
    ? ['left', 'right']
    : ['top', 'bottom'];
  return {
    placement,
    coords,
    mainOverflow: overflow[side],
    fitsMainAxis: overflow[side] <= 0,
    fitsCrossAxis: crossSides.every((crossSide) => overflow[crossSide] <= 0),
  };
};

type EvaluatedPlacement = ReturnType<typeof evaluatePlacement>;

const byMostSpace = (a: EvaluatedPlacement, b: EvaluatedPlacement) =>
  a.mainOverflow - b.mainOverflow;

const resolveAutoPlacement = (options: ComputePopoverPositionOptions) => {
  const candidates = AUTO_PLACEMENT_CANDIDATES.map((placement) =>
    evaluatePlacement(placement, options),
  );
  const fitsBothAxes = candidates.filter(
    (candidate) => candidate.fitsMainAxis && candidate.fitsCrossAxis,
  );
  const fitsMainAxis = candidates.filter((candidate) => candidate.fitsMainAxis);
  const pool = [fitsBothAxes, fitsMainAxis, candidates].find(
    (group) => group.length > 0,
  ) as EvaluatedPlacement[];
  return [...pool].sort(byMostSpace)[0];
};

const resolveFlip = (
  preferred: EvaluatedPlacement,
  options: ComputePopoverPositionOptions,
) => {
  if (preferred.fitsMainAxis) {
    return preferred;
  }
  const opposite = evaluatePlacement(
    getOppositePlacement(preferred.placement),
    options,
  );
  return opposite.mainOverflow < preferred.mainOverflow ? opposite : preferred;
};

/**
 * Computes viewport (`position: fixed`) coordinates for a popover. Used when
 * CSS anchor positioning is unavailable or cannot express the requested
 * behavior (auto placement, `preventOverflow` shifting, arrow placement).
 *
 * @param options - Geometry and behavior flags.
 * @returns The coordinates, resolved placement and arrow offset.
 */
export const computePopoverPosition = (
  options: ComputePopoverPositionOptions,
): PopoverPositionResult => {
  const { referenceRect, floatingSize, boundary, position, arrowSize } =
    options;
  const isAuto = position === PopoverPosition.Auto;

  let resolved = isAuto
    ? resolveAutoPlacement(options)
    : evaluatePlacement(position, options);
  if (!isAuto && options.flip) {
    resolved = resolveFlip(resolved, options);
  }

  const { placement } = resolved;
  let { x, y } = resolved.coords;
  const isVertical = isVerticalSide(getSide(placement));

  if (isAuto || options.shift) {
    if (isVertical) {
      x = clamp(
        boundary.x,
        x,
        boundary.x + boundary.width - floatingSize.width,
      );
    } else {
      y = clamp(
        boundary.y,
        y,
        boundary.y + boundary.height - floatingSize.height,
      );
    }
  }

  const result: PopoverPositionResult = { x, y, placement };

  if (arrowSize) {
    result.arrow = isVertical
      ? {
          x: clamp(
            0,
            referenceRect.x + referenceRect.width / 2 - x - arrowSize.width / 2,
            floatingSize.width - arrowSize.width,
          ),
        }
      : {
          y: clamp(
            0,
            referenceRect.y +
              referenceRect.height / 2 -
              y -
              arrowSize.height / 2,
            floatingSize.height - arrowSize.height,
          ),
        };
  }

  return result;
};

const CLIPPING_OVERFLOW_VALUES = new Set(['auto', 'scroll', 'hidden', 'clip']);

const toRect = (domRect: DOMRect): Rect => ({
  x: domRect.left,
  y: domRect.top,
  width: domRect.width,
  height: domRect.height,
});

export const getViewportRect = (): Rect => ({
  x: 0,
  y: 0,
  width: document.documentElement.clientWidth || window.innerWidth,
  height: document.documentElement.clientHeight || window.innerHeight,
});

/**
 * Intersection of the viewport and every ancestor of `element` that clips
 * its overflow.
 *
 * @param element - The element whose clipping area is computed.
 * @returns The visible area for `element` in viewport coordinates.
 */
export const getClippingRect = (element: Element): Rect => {
  const viewport = getViewportRect();
  let left = viewport.x;
  let top = viewport.y;
  let right = viewport.x + viewport.width;
  let bottom = viewport.y + viewport.height;

  let ancestor = element.parentElement;
  while (
    ancestor &&
    ancestor !== document.body &&
    ancestor !== document.documentElement
  ) {
    const { overflowX, overflowY } = window.getComputedStyle(ancestor);
    if (
      CLIPPING_OVERFLOW_VALUES.has(overflowX) ||
      CLIPPING_OVERFLOW_VALUES.has(overflowY)
    ) {
      const rect = ancestor.getBoundingClientRect();
      left = Math.max(left, rect.left);
      top = Math.max(top, rect.top);
      right = Math.min(right, rect.right);
      bottom = Math.min(bottom, rect.bottom);
    }
    ancestor = ancestor.parentElement;
  }

  return { x: left, y: top, width: right - left, height: bottom - top };
};

/**
 * Whether the reference is fully outside its clipping area (e.g. scrolled
 * out of a scroll container).
 *
 * @param referenceRect - Reference element rect in viewport coordinates.
 * @param clippingRect - Visible area for the reference element.
 * @returns `true` when no part of the reference is visible.
 */
export const isReferenceHidden = (referenceRect: Rect, clippingRect: Rect) =>
  referenceRect.y + referenceRect.height <= clippingRect.y ||
  referenceRect.y >= clippingRect.y + clippingRect.height ||
  referenceRect.x + referenceRect.width <= clippingRect.x ||
  referenceRect.x >= clippingRect.x + clippingRect.width;

export const getElementRect = (element: Element): Rect =>
  toRect(element.getBoundingClientRect());

/**
 * Chrome 128+, Firefox 147+, Safari 26+. Requires `position-try-fallbacks`
 * (not the pre-128 `position-try-options` name), which the anchored styles
 * rely on.
 *
 * @returns Whether the CSS anchor positioning features used by Popover are supported.
 */
export const supportsCssAnchorPositioning = () =>
  typeof CSS !== 'undefined' &&
  typeof CSS.supports === 'function' &&
  CSS.supports('anchor-name', '--mm-popover') &&
  CSS.supports('position-try-fallbacks', 'flip-block');

/**
 * Invokes `onMove` when `element` relocates or resizes on screen — including
 * layout shifts and ancestor reflows that do not fire scroll/resize events.
 *
 * @param element - Element whose viewport box should be tracked.
 * @param onMove - Callback when the box changes.
 * @returns Cleanup that stops the animation-frame loop.
 */
export const observeElementMove = (
  element: Element,
  onMove: () => void,
): (() => void) => {
  let frameId = 0;
  let previous = element.getBoundingClientRect();

  const loop = () => {
    const next = element.getBoundingClientRect();
    if (
      next.left !== previous.left ||
      next.top !== previous.top ||
      next.width !== previous.width ||
      next.height !== previous.height
    ) {
      previous = next;
      onMove();
    }
    frameId = requestAnimationFrame(loop);
  };

  frameId = requestAnimationFrame(loop);
  return () => cancelAnimationFrame(frameId);
};

export type AnchorPositionStylesOptions = {
  anchorName: string;
  placement: PopoverPlacement;
  offset: [number, number];
  flip: boolean;
};

/**
 * Inline styles that position a top-layer popover against the element whose
 * `anchor-name` is `anchorName`, mirroring `computePopoverPosition` for
 * fixed placements.
 *
 * @param options - Anchor name, placement and behavior flags.
 * @returns Inline styles for the popover root.
 */
export const getAnchorPositionStyles = (
  options: AnchorPositionStylesOptions,
): CSSProperties => {
  const {
    anchorName,
    placement,
    offset: [skidding, distance],
    flip,
  } = options;
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = isVerticalSide(side);
  const styles: Record<string, string> = {
    positionAnchor: anchorName,
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto',
  };

  styles[OPPOSITE_SIDE[side]] = `calc(anchor(${side}) + ${distance}px)`;

  const [crossStart, crossEnd] = isVertical
    ? (['left', 'right'] as const)
    : (['top', 'bottom'] as const);
  if (alignment === 'start') {
    styles[crossStart] = `calc(anchor(${crossStart}) + ${skidding}px)`;
  } else if (alignment === 'end') {
    styles[crossEnd] = `calc(anchor(${crossEnd}) - ${skidding}px)`;
  } else {
    styles[crossStart] = `calc(anchor(center) + ${skidding}px)`;
    styles.translate = isVertical ? '-50% 0' : '0 -50%';
  }

  if (flip) {
    styles.positionTryFallbacks = isVertical ? 'flip-block' : 'flip-inline';
  }

  return styles as CSSProperties;
};
