import { PopoverPosition } from './Popover.types';
import {
  computePopoverPosition,
  getElementRect,
  getViewportRect,
} from './Popover.utilities';
import type { ComputePopoverPositionOptions } from './Popover.utilities';

const reference = { x: 400, y: 300, width: 200, height: 100 };
const floatingSize = { width: 100, height: 50 };
const boundary = { x: 0, y: 0, width: 1000, height: 800 };

const compute = (overrides: Partial<ComputePopoverPositionOptions> = {}) =>
  computePopoverPosition({
    referenceRect: reference,
    floatingSize,
    boundary,
    placement: PopoverPosition.Bottom,
    offset: [0, 8],
    ...overrides,
  });

describe('computePopoverPosition', () => {
  it.each([
    [PopoverPosition.Top, 450, 242],
    [PopoverPosition.TopStart, 400, 242],
    [PopoverPosition.TopEnd, 500, 242],
    [PopoverPosition.Bottom, 450, 408],
    [PopoverPosition.BottomStart, 400, 408],
    [PopoverPosition.BottomEnd, 500, 408],
    [PopoverPosition.Left, 292, 325],
    [PopoverPosition.LeftStart, 292, 300],
    [PopoverPosition.LeftEnd, 292, 350],
    [PopoverPosition.Right, 608, 325],
    [PopoverPosition.RightStart, 608, 300],
    [PopoverPosition.RightEnd, 608, 350],
  ])('places %s at (%d, %d)', (placement, x, y) => {
    expect(compute({ placement })).toStrictEqual({ x, y, placement });
  });

  it('applies skidding along the reference edge', () => {
    expect(
      compute({ placement: PopoverPosition.BottomStart, offset: [10, 0] }),
    ).toMatchObject({ x: 410, y: 400 });
    expect(
      compute({ placement: PopoverPosition.RightEnd, offset: [-10, 4] }),
    ).toMatchObject({ x: 604, y: 340 });
  });

  it.each([
    [PopoverPosition.TopStart, 500, 242],
    [PopoverPosition.TopEnd, 400, 242],
    [PopoverPosition.BottomStart, 500, 408],
    [PopoverPosition.BottomEnd, 400, 408],
    // Left/right start/end are block-axis and do not mirror in RTL.
    [PopoverPosition.LeftStart, 292, 300],
    [PopoverPosition.LeftEnd, 292, 350],
    [PopoverPosition.RightStart, 608, 300],
    [PopoverPosition.RightEnd, 608, 350],
  ])('places %s at (%d, %d) in RTL', (placement, x, y) => {
    expect(compute({ placement, rtl: true })).toStrictEqual({
      x,
      y,
      placement,
    });
  });

  it('mirrors skidding on the inline axis in RTL', () => {
    expect(
      compute({
        placement: PopoverPosition.BottomStart,
        offset: [10, 0],
        rtl: true,
      }),
    ).toMatchObject({ x: 490, y: 400 });
  });

  it('flips to the opposite side when it overflows less', () => {
    expect(
      compute({
        placement: PopoverPosition.TopStart,
        referenceRect: { ...reference, y: 20 },
      }),
    ).toStrictEqual({ x: 400, y: 128, placement: PopoverPosition.BottomStart });
    expect(
      compute({
        placement: PopoverPosition.Right,
        referenceRect: { ...reference, x: 850, width: 100 },
      }),
    ).toStrictEqual({ x: 742, y: 325, placement: PopoverPosition.Left });
  });

  it('keeps the preferred side when the opposite overflows more', () => {
    expect(
      compute({
        placement: PopoverPosition.Bottom,
        referenceRect: { x: 400, y: 20, width: 200, height: 760 },
      }),
    ).toMatchObject({ placement: PopoverPosition.Bottom, y: 788 });
  });

  it('shifts along the cross axis to stay inside the boundary', () => {
    expect(
      compute({
        placement: PopoverPosition.BottomEnd,
        referenceRect: { ...reference, x: 10, width: 40 },
      }),
    ).toMatchObject({ x: 0 });
    expect(
      compute({
        placement: PopoverPosition.Left,
        referenceRect: { ...reference, y: 780, height: 10 },
      }),
    ).toMatchObject({ y: 750 });
  });
});

describe('getViewportRect', () => {
  it('uses the document element size', () => {
    Object.defineProperty(document.documentElement, 'clientWidth', {
      configurable: true,
      value: 1024,
    });
    Object.defineProperty(document.documentElement, 'clientHeight', {
      configurable: true,
      value: 768,
    });
    expect(getViewportRect()).toStrictEqual({
      x: 0,
      y: 0,
      width: 1024,
      height: 768,
    });
  });

  it('falls back to the window size', () => {
    Object.defineProperty(document.documentElement, 'clientWidth', {
      configurable: true,
      value: 0,
    });
    Object.defineProperty(document.documentElement, 'clientHeight', {
      configurable: true,
      value: 0,
    });
    expect(getViewportRect()).toStrictEqual({
      x: 0,
      y: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    });
  });
});

describe('getElementRect', () => {
  it('returns the border box', () => {
    const element = document.createElement('div');
    jest.spyOn(element, 'getBoundingClientRect').mockReturnValue({
      x: 1,
      y: 2,
      width: 3,
      height: 4,
    } as DOMRect);
    expect(getElementRect(element)).toStrictEqual({
      x: 1,
      y: 2,
      width: 3,
      height: 4,
    });
  });
});
