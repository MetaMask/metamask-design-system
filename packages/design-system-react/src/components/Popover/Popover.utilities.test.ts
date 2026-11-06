import { PopoverPosition } from './Popover.types';
import {
  computePopoverPosition,
  getAnchorPositionStyles,
  getClippingRect,
  getElementRect,
  getViewportRect,
  isReferenceHidden,
  observeElementMove,
  supportsCssAnchorPositioning,
} from './Popover.utilities';
import type { ComputePopoverPositionOptions } from './Popover.utilities';

const boundary = { x: 0, y: 0, width: 1000, height: 1000 };
const referenceRect = { x: 400, y: 400, width: 200, height: 100 };
const floatingSize = { width: 100, height: 50 };

const compute = (overrides: Partial<ComputePopoverPositionOptions> = {}) =>
  computePopoverPosition({
    referenceRect,
    floatingSize,
    boundary,
    position: PopoverPosition.Bottom,
    offset: [0, 8],
    flip: false,
    shift: false,
    ...overrides,
  });

describe('computePopoverPosition', () => {
  it.each([
    [PopoverPosition.Top, 450, 342],
    [PopoverPosition.TopStart, 400, 342],
    [PopoverPosition.TopEnd, 500, 342],
    [PopoverPosition.Bottom, 450, 508],
    [PopoverPosition.BottomStart, 400, 508],
    [PopoverPosition.BottomEnd, 500, 508],
    [PopoverPosition.Left, 292, 425],
    [PopoverPosition.LeftStart, 292, 400],
    [PopoverPosition.LeftEnd, 292, 450],
    [PopoverPosition.Right, 608, 425],
    [PopoverPosition.RightStart, 608, 400],
    [PopoverPosition.RightEnd, 608, 450],
  ])('places %s at (%d, %d)', (position, x, y) => {
    expect(compute({ position })).toStrictEqual({ x, y, placement: position });
  });

  it('applies skidding along the cross axis', () => {
    expect(
      compute({ position: PopoverPosition.BottomStart, offset: [10, 0] }),
    ).toMatchObject({ x: 410, y: 500 });
    expect(
      compute({ position: PopoverPosition.RightStart, offset: [10, 0] }),
    ).toMatchObject({ x: 600, y: 410 });
  });

  describe('flip', () => {
    it('keeps the requested placement when it fits', () => {
      expect(
        compute({ position: PopoverPosition.Top, flip: true }).placement,
      ).toBe(PopoverPosition.Top);
    });

    it('flips to the opposite side, keeping the alignment, when it has more room', () => {
      expect(
        compute({
          position: PopoverPosition.TopStart,
          flip: true,
          referenceRect: { x: 400, y: 10, width: 200, height: 100 },
        }),
      ).toStrictEqual({
        x: 400,
        y: 118,
        placement: PopoverPosition.BottomStart,
      });
    });

    it('keeps the requested placement when the opposite side overflows more', () => {
      expect(
        compute({
          position: PopoverPosition.Top,
          flip: true,
          referenceRect: { x: 400, y: 20, width: 200, height: 975 },
        }).placement,
      ).toBe(PopoverPosition.Top);
    });

    it('does not flip when disabled', () => {
      expect(
        compute({
          position: PopoverPosition.Top,
          referenceRect: { x: 400, y: 10, width: 200, height: 100 },
        }).placement,
      ).toBe(PopoverPosition.Top);
    });
  });

  describe('auto placement', () => {
    it('picks the side with the most space that fits on both axes', () => {
      expect(
        compute({
          position: PopoverPosition.Auto,
          referenceRect: { x: 400, y: 700, width: 200, height: 100 },
        }).placement,
      ).toBe(PopoverPosition.Top);
    });

    it('prefers a side that fits on the main axis when none fit on both', () => {
      expect(
        compute({
          position: PopoverPosition.Auto,
          floatingSize: { width: 990, height: 50 },
          referenceRect: { x: 0, y: 100, width: 50, height: 850 },
        }).placement,
      ).toBe(PopoverPosition.Top);
    });

    it('falls back to the side with the most space when nothing fits', () => {
      expect(
        compute({
          position: PopoverPosition.Auto,
          floatingSize: { width: 2000, height: 2000 },
          referenceRect: { x: 0, y: 0, width: 300, height: 100 },
        }).placement,
      ).toBe(PopoverPosition.Bottom);
    });

    it('always shifts the popover into the boundary', () => {
      expect(
        compute({
          position: PopoverPosition.Auto,
          referenceRect: { x: 0, y: 400, width: 20, height: 100 },
        }),
      ).toMatchObject({ placement: PopoverPosition.Right });
      expect(
        compute({
          position: PopoverPosition.Auto,
          referenceRect: { x: 970, y: 0, width: 20, height: 20 },
        }),
      ).toMatchObject({ placement: PopoverPosition.Bottom, x: 900 });
    });
  });

  describe('shift', () => {
    it('clamps along the x axis for top and bottom placements', () => {
      expect(
        compute({
          position: PopoverPosition.Bottom,
          shift: true,
          referenceRect: { x: -50, y: 400, width: 20, height: 20 },
        }).x,
      ).toBe(0);
    });

    it('clamps along the y axis for left and right placements', () => {
      expect(
        compute({
          position: PopoverPosition.Right,
          shift: true,
          referenceRect: { x: 400, y: 990, width: 20, height: 20 },
        }).y,
      ).toBe(950);
    });
  });

  describe('arrow', () => {
    const arrowSize = { width: 40, height: 40 };

    it('centers the arrow on the reference for vertical placements', () => {
      expect(
        compute({ position: PopoverPosition.Bottom, arrowSize }).arrow,
      ).toStrictEqual({ x: 30 });
    });

    it('centers the arrow on the reference for horizontal placements', () => {
      expect(
        compute({ position: PopoverPosition.Right, arrowSize }).arrow,
      ).toStrictEqual({ y: 5 });
    });

    it('clamps the arrow inside the popover', () => {
      expect(
        compute({
          position: PopoverPosition.BottomStart,
          arrowSize,
          referenceRect: { x: 400, y: 400, width: 1000, height: 100 },
        }).arrow,
      ).toStrictEqual({ x: 60 });
    });
  });
});

describe('getViewportRect', () => {
  it('uses the document element client size', () => {
    const { documentElement } = document;
    jest.spyOn(documentElement, 'clientWidth', 'get').mockReturnValue(320);
    jest.spyOn(documentElement, 'clientHeight', 'get').mockReturnValue(480);
    expect(getViewportRect()).toStrictEqual({
      x: 0,
      y: 0,
      width: 320,
      height: 480,
    });
    jest.restoreAllMocks();
  });

  it('falls back to the window size', () => {
    expect(getViewportRect()).toStrictEqual({
      x: 0,
      y: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    });
  });
});

describe('getClippingRect', () => {
  const mockRect = (element: Element, rect: Partial<DOMRect>) =>
    jest
      .spyOn(element, 'getBoundingClientRect')
      .mockReturnValue({ ...rect } as DOMRect);

  afterEach(() => {
    document.body.innerHTML = '';
    jest.restoreAllMocks();
  });

  it('returns the viewport when no ancestor clips', () => {
    const element = document.createElement('div');
    document.body.appendChild(element);
    expect(getClippingRect(element)).toStrictEqual(getViewportRect());
  });

  it('intersects every clipping ancestor with the viewport', () => {
    const outer = document.createElement('div');
    outer.style.overflowY = 'auto';
    const middle = document.createElement('div');
    const inner = document.createElement('div');
    inner.style.overflowX = 'hidden';
    const element = document.createElement('div');
    inner.appendChild(element);
    middle.appendChild(inner);
    outer.appendChild(middle);
    document.body.appendChild(outer);

    mockRect(outer, { left: -10, top: 50, right: 500, bottom: 600 });
    mockRect(inner, { left: 20, top: 0, right: 2000, bottom: 400 });

    expect(getClippingRect(element)).toStrictEqual({
      x: 20,
      y: 50,
      width: 480,
      height: 350,
    });
  });
});

describe('isReferenceHidden', () => {
  const clip = { x: 0, y: 0, width: 100, height: 100 };

  it.each([
    ['above', { x: 10, y: -20, width: 10, height: 20 }],
    ['below', { x: 10, y: 100, width: 10, height: 20 }],
    ['left of', { x: -20, y: 10, width: 20, height: 10 }],
    ['right of', { x: 100, y: 10, width: 20, height: 10 }],
  ])('is true when the reference is fully %s the clipping area', (_, rect) => {
    expect(isReferenceHidden(rect, clip)).toBe(true);
  });

  it('is false when the reference is partially visible', () => {
    expect(
      isReferenceHidden({ x: -5, y: -5, width: 10, height: 10 }, clip),
    ).toBe(false);
  });
});

describe('getElementRect', () => {
  it('maps the bounding client rect', () => {
    const element = document.createElement('div');
    jest.spyOn(element, 'getBoundingClientRect').mockReturnValue({
      left: 1,
      top: 2,
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

describe('observeElementMove', () => {
  const originalIntersectionObserver = globalThis.IntersectionObserver;
  type Observer = {
    callback: (entries: { intersectionRatio: number }[]) => void;
    options: IntersectionObserverInit;
    observe: jest.Mock;
    disconnect: jest.Mock;
  };
  let observers: Observer[];

  const latest = () => observers[observers.length - 1];
  const fire = (intersectionRatio: number) =>
    latest().callback([{ intersectionRatio }]);

  const createElement = (rect: Partial<DOMRect>) => {
    const element = document.createElement('div');
    jest
      .spyOn(element, 'getBoundingClientRect')
      .mockReturnValue({ ...rect } as DOMRect);
    return element;
  };

  beforeEach(() => {
    observers = [];
    globalThis.IntersectionObserver = jest.fn(
      (callback: Observer['callback'], options: IntersectionObserverInit) => {
        const observer = {
          callback,
          options,
          observe: jest.fn(),
          disconnect: jest.fn(),
        };
        observers.push(observer);
        return observer;
      },
    ) as unknown as typeof IntersectionObserver;
  });

  afterEach(() => {
    globalThis.IntersectionObserver = originalIntersectionObserver;
    jest.restoreAllMocks();
  });

  it('observes the element against a root shrunk to its own rect', () => {
    const element = createElement({
      left: 10,
      top: 20,
      width: 100,
      height: 50,
    });
    observeElementMove(element, jest.fn());
    expect(latest().observe).toHaveBeenCalledWith(element);
    expect(latest().options).toStrictEqual({
      root: document,
      rootMargin: `-20px -${window.innerWidth - 110}px -${
        window.innerHeight - 70
      }px -10px`,
      threshold: 1,
    });
  });

  it('calls onMove when the element moves after the first update', () => {
    const onMove = jest.fn();
    observeElementMove(
      createElement({ left: 10, top: 20, width: 100, height: 50 }),
      onMove,
    );
    fire(1);
    expect(onMove).not.toHaveBeenCalled();

    const moved = latest();
    fire(0.5);
    expect(onMove).toHaveBeenCalledTimes(1);
    expect(moved.disconnect).toHaveBeenCalled();
    expect(observers).toHaveLength(2);
    expect(latest().options.threshold).toBe(1);
  });

  it('re-observes from the current ratio when initially partially clipped', () => {
    const onMove = jest.fn();
    observeElementMove(
      createElement({ left: 10, top: 20, width: 100, height: 50 }),
      onMove,
    );
    fire(0.4);
    expect(observers).toHaveLength(2);
    expect(latest().options.threshold).toBe(0.4);
  });

  it('waits when the element is initially fully clipped', () => {
    const onMove = jest.fn();
    observeElementMove(
      createElement({ left: 10, top: 20, width: 100, height: 50 }),
      onMove,
    );
    fire(0);
    expect(onMove).not.toHaveBeenCalled();
    expect(observers).toHaveLength(1);
  });

  it('does not observe zero-size elements', () => {
    observeElementMove(createElement({ width: 0, height: 0 }), jest.fn());
    expect(observers).toHaveLength(0);
  });

  it('disconnects on cleanup', () => {
    const stop = observeElementMove(
      createElement({ left: 10, top: 20, width: 100, height: 50 }),
      jest.fn(),
    );
    stop();
    expect(latest().disconnect).toHaveBeenCalled();
  });

  it('cleans up safely when nothing was observed', () => {
    const stop = observeElementMove(
      createElement({ width: 0, height: 0 }),
      jest.fn(),
    );
    expect(() => stop()).not.toThrow();
  });
});

describe('supportsCssAnchorPositioning', () => {
  const originalCSS = globalThis.CSS;

  afterEach(() => {
    globalThis.CSS = originalCSS;
  });

  it('is false when CSS is undefined', () => {
    // @ts-expect-error simulating an environment without the CSS namespace
    delete globalThis.CSS;
    expect(supportsCssAnchorPositioning()).toBe(false);
  });

  it('is false when CSS.supports is unavailable', () => {
    globalThis.CSS = {} as typeof CSS;
    expect(supportsCssAnchorPositioning()).toBe(false);
  });

  it('is false when any required feature is missing', () => {
    globalThis.CSS = {
      supports: (property: string) => property !== 'position-try-fallbacks',
    } as typeof CSS;
    expect(supportsCssAnchorPositioning()).toBe(false);
  });

  it('is true when every required feature is supported', () => {
    const supports = jest.fn(() => true);
    globalThis.CSS = { supports } as unknown as typeof CSS;
    expect(supportsCssAnchorPositioning()).toBe(true);
    expect(supports).toHaveBeenCalledWith('anchor-name', '--mm-popover');
    expect(supports).toHaveBeenCalledWith(
      'position-try-fallbacks',
      'flip-block',
    );
    expect(supports).not.toHaveBeenCalledWith(
      'position-visibility',
      expect.anything(),
    );
  });
});

describe('getAnchorPositionStyles', () => {
  const base = {
    anchorName: '--anchor',
    offset: [4, 8] as [number, number],
    flip: false,
  };

  it.each([
    [
      PopoverPosition.Bottom,
      {
        top: 'calc(anchor(bottom) + 8px)',
        left: 'calc(anchor(center) + 4px)',
        translate: '-50% 0',
      },
    ],
    [
      PopoverPosition.TopStart,
      {
        bottom: 'calc(anchor(top) + 8px)',
        left: 'calc(anchor(left) + 4px)',
      },
    ],
    [
      PopoverPosition.BottomEnd,
      {
        top: 'calc(anchor(bottom) + 8px)',
        right: 'calc(anchor(right) - 4px)',
      },
    ],
    [
      PopoverPosition.Right,
      {
        left: 'calc(anchor(right) + 8px)',
        top: 'calc(anchor(center) + 4px)',
        translate: '0 -50%',
      },
    ],
    [
      PopoverPosition.LeftStart,
      {
        right: 'calc(anchor(left) + 8px)',
        top: 'calc(anchor(top) + 4px)',
      },
    ],
    [
      PopoverPosition.LeftEnd,
      {
        right: 'calc(anchor(left) + 8px)',
        bottom: 'calc(anchor(bottom) - 4px)',
      },
    ],
  ])('anchors %s', (placement, expected) => {
    expect(getAnchorPositionStyles({ ...base, placement })).toStrictEqual({
      positionAnchor: '--anchor',
      top: 'auto',
      right: 'auto',
      bottom: 'auto',
      left: 'auto',
      ...expected,
    });
  });

  it('flips on the block axis for top and bottom placements', () => {
    expect(
      getAnchorPositionStyles({
        ...base,
        placement: PopoverPosition.Top,
        flip: true,
      }),
    ).toMatchObject({ positionTryFallbacks: 'flip-block' });
  });

  it('flips on the inline axis for left and right placements', () => {
    expect(
      getAnchorPositionStyles({
        ...base,
        placement: PopoverPosition.Left,
        flip: true,
      }),
    ).toMatchObject({ positionTryFallbacks: 'flip-inline' });
  });
});
