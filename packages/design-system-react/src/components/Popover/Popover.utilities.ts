import type { PopoverPosition } from './Popover.types';

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
   * Area the popover must stay inside (the viewport, in the same coordinate
   * space as `referenceRect`).
   */
  boundary: Rect;
  placement: PopoverPosition;
  /**
   * `[skidding, distance]` in px.
   */
  offset: [number, number];
};

export type PopoverPositionResult = {
  x: number;
  y: number;
  placement: PopoverPosition;
};

const OPPOSITE_SIDE: Record<Side, Side> = {
  top: 'bottom',
  bottom: 'top',
  left: 'right',
  right: 'left',
};

const getSide = (placement: PopoverPosition) => placement.split('-')[0] as Side;

const getAlignment = (placement: PopoverPosition) =>
  placement.split('-')[1] as Alignment | undefined;

const isVerticalSide = (side: Side) => side === 'top' || side === 'bottom';

const clamp = (min: number, value: number, max: number) =>
  Math.max(min, Math.min(value, max));

const getOppositePlacement = (placement: PopoverPosition) => {
  const alignment = getAlignment(placement);
  const side = OPPOSITE_SIDE[getSide(placement)];
  return (alignment ? `${side}-${alignment}` : side) as PopoverPosition;
};

const getCoords = (
  reference: Rect,
  floating: Size,
  placement: PopoverPosition,
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
 * Returns how far the floating element overflows the boundary on the given
 * side, in px. Negative values are the remaining space on that side.
 *
 * @param coords - Top-left corner of the floating element.
 * @param coords.x - Left coordinate.
 * @param coords.y - Top coordinate.
 * @param floating - Size of the floating element.
 * @param boundary - Area the floating element must stay inside.
 * @param side - Side to measure.
 * @returns Overflow in px.
 */
const getOverflow = (
  { x, y }: { x: number; y: number },
  floating: Size,
  boundary: Rect,
  side: Side,
) => {
  switch (side) {
    case 'top':
      return boundary.y - y;
    case 'bottom':
      return y + floating.height - (boundary.y + boundary.height);
    case 'left':
      return boundary.x - x;
    default:
      return x + floating.width - (boundary.x + boundary.width);
  }
};

/**
 * Computes viewport (`position: fixed`) coordinates for a popover. The
 * popover flips to the opposite side when that side overflows less, then
 * shifts along the reference edge to stay inside the boundary.
 *
 * @param options - Geometry, preferred placement and offset.
 * @returns The coordinates and the resolved placement.
 */
export const computePopoverPosition = (
  options: ComputePopoverPositionOptions,
): PopoverPositionResult => {
  const {
    referenceRect,
    floatingSize,
    boundary,
    placement: preferredPlacement,
    offset,
  } = options;
  const side = getSide(preferredPlacement);
  let placement = preferredPlacement;
  let coords = getCoords(referenceRect, floatingSize, placement, offset);
  const overflow = getOverflow(coords, floatingSize, boundary, side);

  if (overflow > 0) {
    const oppositePlacement = getOppositePlacement(preferredPlacement);
    const oppositeCoords = getCoords(
      referenceRect,
      floatingSize,
      oppositePlacement,
      offset,
    );
    const oppositeOverflow = getOverflow(
      oppositeCoords,
      floatingSize,
      boundary,
      OPPOSITE_SIDE[side],
    );
    if (oppositeOverflow < overflow) {
      placement = oppositePlacement;
      coords = oppositeCoords;
    }
  }

  let { x, y } = coords;
  if (isVerticalSide(side)) {
    x = clamp(boundary.x, x, boundary.x + boundary.width - floatingSize.width);
  } else {
    y = clamp(
      boundary.y,
      y,
      boundary.y + boundary.height - floatingSize.height,
    );
  }

  return { x, y, placement };
};

/**
 * Returns the visual viewport as a rect in `position: fixed` coordinates.
 *
 * @returns The viewport rect.
 */
export const getViewportRect = (): Rect => ({
  x: 0,
  y: 0,
  width: document.documentElement.clientWidth || window.innerWidth,
  height: document.documentElement.clientHeight || window.innerHeight,
});

/**
 * Returns an element's border box in viewport coordinates.
 *
 * @param element - The element to measure.
 * @returns The element rect.
 */
export const getElementRect = (element: Element): Rect => {
  const { x, y, width, height } = element.getBoundingClientRect();
  return { x, y, width, height };
};
