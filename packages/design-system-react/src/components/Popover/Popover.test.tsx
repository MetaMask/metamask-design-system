import { act, fireEvent, render, screen } from '@testing-library/react';
import React, { createRef, useState } from 'react';

import { BoxBackgroundColor, BoxBorderColor } from '../Box';

import { Popover } from './Popover';
import { PopoverPosition, PopoverRole } from './Popover.types';

const FLOATING_SIZE = { width: 100, height: 50 };
const ARROW_SIZE = 40;

const createdReferences: HTMLElement[] = [];

const createReference = (
  rect: { x: number; y: number; width: number; height: number } = {
    x: 400,
    y: 300,
    width: 200,
    height: 100,
  },
) => {
  const reference = document.createElement('button');
  reference.dataset.testid = 'reference';
  document.body.appendChild(reference);
  createdReferences.push(reference);
  jest.spyOn(reference, 'getBoundingClientRect').mockReturnValue({
    left: rect.x,
    top: rect.y,
    width: rect.width,
    height: rect.height,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height,
  } as DOMRect);
  return reference;
};

const mockCssAnchorSupport = (supported: boolean) => {
  const originalCSS = globalThis.CSS;
  globalThis.CSS = {
    supports: () => supported,
  } as unknown as typeof CSS;
  return () => {
    globalThis.CSS = originalCSS;
  };
};

describe('Popover', () => {
  beforeEach(() => {
    jest
      .spyOn(HTMLElement.prototype, 'offsetWidth', 'get')
      .mockImplementation(function getWidth(this: HTMLElement) {
        return this.dataset.testid === 'popover-arrow'
          ? ARROW_SIZE
          : FLOATING_SIZE.width;
      });
    jest
      .spyOn(HTMLElement.prototype, 'offsetHeight', 'get')
      .mockImplementation(function getHeight(this: HTMLElement) {
        return this.dataset.testid === 'popover-arrow'
          ? ARROW_SIZE
          : FLOATING_SIZE.height;
      });
  });

  afterEach(() => {
    jest.restoreAllMocks();
    createdReferences.splice(0).forEach((reference) => reference.remove());
  });

  describe('isOpen', () => {
    it('renders nothing when isOpen is false', () => {
      render(
        <Popover data-testid="popover" isOpen={false}>
          hidden
        </Popover>,
      );
      expect(screen.queryByTestId('popover')).not.toBeInTheDocument();
    });

    it('renders children when isOpen is true', () => {
      render(
        <Popover data-testid="popover" isOpen>
          popover content
        </Popover>,
      );
      expect(screen.getByTestId('popover')).toBeInTheDocument();
      expect(screen.getByText('popover content')).toBeInTheDocument();
    });
  });

  describe('Popover API', () => {
    it('renders a manual popover and shows it in the top layer when opened', () => {
      const showPopover = jest.spyOn(HTMLElement.prototype, 'showPopover');
      render(
        <Popover data-testid="popover" isOpen>
          x
        </Popover>,
      );
      const root = screen.getByTestId('popover');
      expect(root).toHaveAttribute('popover', 'manual');
      expect(showPopover).toHaveBeenCalledTimes(1);
      expect(showPopover.mock.instances[0]).toBe(root);
    });

    it('does not show the popover while closed', () => {
      const showPopover = jest.spyOn(HTMLElement.prototype, 'showPopover');
      render(<Popover isOpen={false}>x</Popover>);
      expect(showPopover).not.toHaveBeenCalled();
    });

    it('still renders when the Popover API is unavailable', () => {
      const descriptor = Object.getOwnPropertyDescriptor(
        HTMLElement.prototype,
        'showPopover',
      ) as PropertyDescriptor;
      // @ts-expect-error simulating a browser without the Popover API
      delete HTMLElement.prototype.showPopover;
      try {
        render(
          <Popover data-testid="popover" isOpen>
            x
          </Popover>,
        );
        expect(screen.getByTestId('popover')).toBeInTheDocument();
      } finally {
        Object.defineProperty(HTMLElement.prototype, 'showPopover', descriptor);
      }
    });
  });

  describe('role', () => {
    it('defaults to tooltip', () => {
      render(
        <Popover data-testid="popover" isOpen>
          x
        </Popover>,
      );
      expect(screen.getByTestId('popover')).toHaveAttribute('role', 'tooltip');
    });

    it('can be set to dialog', () => {
      render(
        <Popover data-testid="popover" isOpen role={PopoverRole.Dialog}>
          x
        </Popover>,
      );
      expect(screen.getByTestId('popover')).toHaveAttribute('role', 'dialog');
    });
  });

  describe('className and style', () => {
    it('uses elevated2 background and muted border on popover root and arrow visual', () => {
      render(
        <Popover data-testid="popover" isOpen hasArrow>
          x
        </Popover>,
      );
      const root = screen.getByTestId('popover');
      expect(root).toHaveClass(BoxBackgroundColor.BackgroundElevated2);
      expect(root).toHaveClass(BoxBorderColor.BorderMuted);

      const arrowVisual = screen.getByTestId('popover-arrow-visual');
      expect(arrowVisual).toHaveClass(BoxBackgroundColor.BackgroundElevated2);
      expect(arrowVisual).toHaveClass(BoxBorderColor.BorderMuted);
    });

    it('merges consumer className with internal classes', () => {
      render(
        <Popover data-testid="popover" isOpen className="z-10">
          x
        </Popover>,
      );
      const root = screen.getByTestId('popover');
      expect(root).toHaveClass('z-10');
      expect(root).toHaveClass('rounded-lg');
      expect(root).toHaveClass('shadow-md');
      expect(root).toHaveClass('m-0', 'overflow-visible');
    });

    it('applies the reference-hidden visibility classes when referenceHidden is true', () => {
      render(
        <Popover data-testid="popover" isOpen>
          x
        </Popover>,
      );
      expect(screen.getByTestId('popover')).toHaveClass(
        'data-[popper-reference-hidden=true]:invisible',
      );
    });

    it('omits the reference-hidden classes when referenceHidden is false', () => {
      render(
        <Popover data-testid="popover" isOpen referenceHidden={false}>
          x
        </Popover>,
      );
      expect(screen.getByTestId('popover')).not.toHaveClass(
        'data-[popper-reference-hidden=true]:invisible',
      );
    });

    it('merges consumer style on top of the computed position', () => {
      render(
        <Popover
          data-testid="popover"
          isOpen
          position={PopoverPosition.Bottom}
          offset={[0, 0]}
          referenceElement={createReference()}
          style={{ top: '99px', zIndex: 5 }}
        >
          x
        </Popover>,
      );
      expect(screen.getByTestId('popover')).toHaveStyle({
        position: 'fixed',
        left: '450px',
        top: '99px',
        zIndex: 5,
      });
    });
  });

  describe('position', () => {
    it('uses Auto by default and picks the side with the most space', () => {
      render(
        <Popover
          data-testid="popover"
          isOpen
          referenceElement={createReference({
            x: 400,
            y: 600,
            width: 200,
            height: 100,
          })}
        >
          x
        </Popover>,
      );
      const root = screen.getByTestId('popover');
      expect(root).toHaveAttribute('data-popper-placement', 'top');
      expect(root).toHaveStyle({ left: '450px', top: '542px' });
    });

    it('places the popover at the requested position', () => {
      render(
        <Popover
          data-testid="popover"
          isOpen
          position={PopoverPosition.BottomStart}
          referenceElement={createReference()}
        >
          x
        </Popover>,
      );
      const root = screen.getByTestId('popover');
      expect(root).toHaveAttribute('data-popper-placement', 'bottom-start');
      expect(root).toHaveStyle({ left: '400px', top: '408px' });
    });

    it('only flips when flip is enabled', () => {
      const reference = createReference({
        x: 400,
        y: 10,
        width: 200,
        height: 20,
      });
      const { rerender } = render(
        <Popover
          data-testid="popover"
          isOpen
          position={PopoverPosition.Top}
          referenceElement={reference}
        >
          x
        </Popover>,
      );
      expect(screen.getByTestId('popover')).toHaveAttribute(
        'data-popper-placement',
        'top',
      );

      rerender(
        <Popover
          data-testid="popover"
          isOpen
          position={PopoverPosition.Top}
          referenceElement={reference}
          flip
        >
          x
        </Popover>,
      );
      expect(screen.getByTestId('popover')).toHaveAttribute(
        'data-popper-placement',
        'bottom',
      );
    });

    it('keeps the popover inside the viewport with preventOverflow', () => {
      render(
        <Popover
          data-testid="popover"
          isOpen
          position={PopoverPosition.Bottom}
          preventOverflow
          referenceElement={createReference({
            x: -50,
            y: 300,
            width: 20,
            height: 20,
          })}
        >
          x
        </Popover>,
      );
      expect(screen.getByTestId('popover')).toHaveStyle({ left: '0px' });
    });

    it('applies the [skidding, distance] offset', () => {
      render(
        <Popover
          data-testid="popover"
          isOpen
          position={PopoverPosition.BottomStart}
          offset={[4, 16]}
          referenceElement={createReference()}
        >
          x
        </Popover>,
      );
      expect(screen.getByTestId('popover')).toHaveStyle({
        left: '404px',
        top: '416px',
      });
    });

    it('stays at the origin without a reference element', () => {
      render(
        <Popover data-testid="popover" isOpen position={PopoverPosition.Top}>
          x
        </Popover>,
      );
      const root = screen.getByTestId('popover');
      expect(root).toHaveStyle({ left: '0px', top: '0px' });
      expect(root).toHaveAttribute('data-popper-placement', 'top');
    });
  });

  describe('auto update', () => {
    it('repositions on scroll and resize and stops after closing', () => {
      const reference = createReference();
      const rect = jest.mocked(reference.getBoundingClientRect);
      const { rerender } = render(
        <Popover
          data-testid="popover"
          isOpen
          position={PopoverPosition.BottomStart}
          referenceElement={reference}
        >
          x
        </Popover>,
      );

      rect.mockReturnValue({
        left: 100,
        top: 50,
        width: 200,
        height: 100,
      } as DOMRect);
      act(() => {
        fireEvent.scroll(window);
      });
      expect(screen.getByTestId('popover')).toHaveStyle({
        left: '100px',
        top: '158px',
      });

      rect.mockReturnValue({
        left: 120,
        top: 50,
        width: 200,
        height: 100,
      } as DOMRect);
      act(() => {
        fireEvent(window, new Event('resize'));
      });
      expect(screen.getByTestId('popover')).toHaveStyle({ left: '120px' });

      act(() => {
        fireEvent.scroll(window);
      });
      expect(screen.getByTestId('popover')).toHaveStyle({ left: '120px' });

      rerender(
        <Popover
          data-testid="popover"
          isOpen={false}
          position={PopoverPosition.BottomStart}
          referenceElement={reference}
        >
          x
        </Popover>,
      );
      const callsAfterClose = rect.mock.calls.length;
      fireEvent.scroll(window);
      expect(rect.mock.calls).toHaveLength(callsAfterClose);
    });

    it('observes the reference and popover sizes when ResizeObserver exists', () => {
      const observe = jest.fn();
      const disconnect = jest.fn();
      let callback: () => void = () => undefined;
      const originalResizeObserver = globalThis.ResizeObserver;
      globalThis.ResizeObserver = jest.fn((cb: () => void) => {
        callback = cb;
        return { observe, disconnect, unobserve: jest.fn() };
      }) as unknown as typeof ResizeObserver;

      try {
        const reference = createReference();
        const { unmount } = render(
          <Popover
            data-testid="popover"
            isOpen
            position={PopoverPosition.BottomStart}
            referenceElement={reference}
          >
            x
          </Popover>,
        );
        expect(observe).toHaveBeenCalledWith(reference);
        expect(observe).toHaveBeenCalledWith(screen.getByTestId('popover'));

        jest.mocked(reference.getBoundingClientRect).mockReturnValue({
          left: 10,
          top: 300,
          width: 200,
          height: 100,
        } as DOMRect);
        act(() => callback());
        expect(screen.getByTestId('popover')).toHaveStyle({ left: '10px' });

        unmount();
        expect(disconnect).toHaveBeenCalled();
      } finally {
        globalThis.ResizeObserver = originalResizeObserver;
      }
    });
  });

  describe('layout shift', () => {
    it('repositions when the reference moves without scroll or resize events', () => {
      const originalIntersectionObserver = globalThis.IntersectionObserver;
      const callbacks: ((entries: { intersectionRatio: number }[]) => void)[] =
        [];
      const disconnect = jest.fn();
      globalThis.IntersectionObserver = jest.fn(
        (callback: (entries: { intersectionRatio: number }[]) => void) => {
          callbacks.push(callback);
          return { observe: jest.fn(), disconnect };
        },
      ) as unknown as typeof IntersectionObserver;

      try {
        const reference = createReference();
        const { unmount } = render(
          <Popover
            data-testid="popover"
            isOpen
            position={PopoverPosition.BottomStart}
            referenceElement={reference}
          >
            x
          </Popover>,
        );
        act(() => callbacks[callbacks.length - 1]([{ intersectionRatio: 1 }]));

        jest.mocked(reference.getBoundingClientRect).mockReturnValue({
          left: 40,
          top: 300,
          width: 200,
          height: 100,
        } as DOMRect);
        act(() =>
          callbacks[callbacks.length - 1]([{ intersectionRatio: 0.8 }]),
        );
        expect(screen.getByTestId('popover')).toHaveStyle({ left: '40px' });

        unmount();
        expect(disconnect).toHaveBeenCalled();
      } finally {
        globalThis.IntersectionObserver = originalIntersectionObserver;
      }
    });
  });

  describe('referenceHidden', () => {
    it('flags the popover when the reference is scrolled out of view', () => {
      render(
        <Popover
          data-testid="popover"
          isOpen
          position={PopoverPosition.Bottom}
          referenceElement={createReference({
            x: 400,
            y: -200,
            width: 200,
            height: 100,
          })}
        >
          x
        </Popover>,
      );
      expect(screen.getByTestId('popover')).toHaveAttribute(
        'data-popper-reference-hidden',
        'true',
      );
    });

    it('does not flag the popover when the reference is visible', () => {
      render(
        <Popover
          data-testid="popover"
          isOpen
          position={PopoverPosition.Bottom}
          referenceElement={createReference()}
        >
          x
        </Popover>,
      );
      expect(screen.getByTestId('popover')).toHaveAttribute(
        'data-popper-reference-hidden',
        'false',
      );
    });
  });

  describe('CSS anchor positioning', () => {
    let restoreCss: () => void;

    beforeEach(() => {
      restoreCss = mockCssAnchorSupport(true);
    });

    afterEach(() => {
      restoreCss();
    });

    it('anchors the popover to the reference instead of computing coordinates', () => {
      const reference = createReference();
      const setProperty = jest.spyOn(reference.style, 'setProperty');
      const removeProperty = jest.spyOn(reference.style, 'removeProperty');
      const { unmount } = render(
        <Popover
          data-testid="popover"
          isOpen
          position={PopoverPosition.TopEnd}
          flip
          referenceElement={reference}
        >
          x
        </Popover>,
      );

      const [property, anchorName] = setProperty.mock.calls[0];
      expect(property).toBe('anchor-name');
      expect(anchorName).toMatch(/^--mm-popover-anchor-\d+$/u);
      expect(reference.getBoundingClientRect).not.toHaveBeenCalled();

      const root = screen.getByTestId('popover');
      expect(root).toHaveAttribute('data-popper-placement', 'top-end');
      expect(root).toHaveAttribute('data-popper-reference-hidden', 'false');
      expect(root).toHaveStyle({ position: 'fixed' });

      unmount();
      expect(removeProperty).toHaveBeenCalledWith('anchor-name');
    });

    it('preserves an anchor-name already set on the reference', () => {
      const reference = createReference();
      jest
        .spyOn(reference.style, 'getPropertyValue')
        .mockReturnValue('--existing');
      const setProperty = jest.spyOn(reference.style, 'setProperty');
      const { unmount } = render(
        <Popover
          isOpen
          position={PopoverPosition.Top}
          referenceElement={reference}
        >
          x
        </Popover>,
      );
      expect(setProperty.mock.calls[0][1]).toMatch(
        /^--existing, --mm-popover-anchor-\d+$/u,
      );
      unmount();
      expect(setProperty).toHaveBeenLastCalledWith('anchor-name', '--existing');
    });

    describe('referenceHidden', () => {
      const originalIntersectionObserver = globalThis.IntersectionObserver;
      const observe = jest.fn();
      const disconnect = jest.fn();
      let callback: IntersectionObserverCallback = () => undefined;

      beforeEach(() => {
        globalThis.IntersectionObserver = jest.fn(
          (cb: IntersectionObserverCallback) => {
            callback = cb;
            return { observe, disconnect };
          },
        ) as unknown as typeof IntersectionObserver;
      });

      afterEach(() => {
        globalThis.IntersectionObserver = originalIntersectionObserver;
      });

      it('tracks whether the reference is clipped with an IntersectionObserver', () => {
        const reference = createReference();
        const { unmount } = render(
          <Popover
            data-testid="popover"
            isOpen
            position={PopoverPosition.Right}
            referenceElement={reference}
          >
            x
          </Popover>,
        );
        expect(observe).toHaveBeenCalledWith(reference);
        const root = screen.getByTestId('popover');
        expect(root).toHaveAttribute('data-popper-reference-hidden', 'false');

        act(() =>
          callback(
            [{ isIntersecting: false } as IntersectionObserverEntry],
            {} as IntersectionObserver,
          ),
        );
        expect(root).toHaveAttribute('data-popper-reference-hidden', 'true');

        act(() =>
          callback(
            [{ isIntersecting: true } as IntersectionObserverEntry],
            {} as IntersectionObserver,
          ),
        );
        expect(root).toHaveAttribute('data-popper-reference-hidden', 'false');

        unmount();
        expect(disconnect).toHaveBeenCalled();
      });

      it('does not observe the reference when referenceHidden is false', () => {
        render(
          <Popover
            isOpen
            position={PopoverPosition.Right}
            referenceHidden={false}
            referenceElement={createReference()}
          >
            x
          </Popover>,
        );
        expect(observe).not.toHaveBeenCalled();
      });
    });

    it.each([
      ['position is Auto', { position: PopoverPosition.Auto }],
      ['hasArrow is set', { hasArrow: true }],
      ['preventOverflow is set', { preventOverflow: true }],
    ])('falls back to JS positioning when %s', (_, overrides) => {
      const reference = createReference();
      const setProperty = jest.spyOn(reference.style, 'setProperty');
      render(
        <Popover
          isOpen
          position={PopoverPosition.Bottom}
          referenceElement={reference}
          {...overrides}
        >
          x
        </Popover>,
      );
      expect(setProperty).not.toHaveBeenCalled();
      expect(reference.getBoundingClientRect).toHaveBeenCalled();
    });

    it('falls back to JS positioning without a reference element', () => {
      render(
        <Popover data-testid="popover" isOpen position={PopoverPosition.Top}>
          x
        </Popover>,
      );
      expect(screen.getByTestId('popover')).toHaveStyle({ left: '0px' });
    });
  });

  describe('hasArrow', () => {
    it('does not render an arrow by default', () => {
      render(
        <Popover data-testid="popover" isOpen>
          x
        </Popover>,
      );
      expect(screen.queryByTestId('popover-arrow')).not.toBeInTheDocument();
    });

    it('renders an arrow centered on the reference', () => {
      render(
        <Popover
          data-testid="popover"
          isOpen
          hasArrow
          position={PopoverPosition.Bottom}
          referenceElement={createReference()}
        >
          x
        </Popover>,
      );
      expect(screen.getByTestId('popover-arrow')).toHaveStyle({
        left: '30px',
        top: '-20px',
      });
    });

    it('forwards arrowProps to the arrow element and merges className with the internal positioning classes', () => {
      render(
        <Popover
          data-testid="popover"
          isOpen
          hasArrow
          arrowProps={{
            id: 'custom-arrow',
            className: 'custom-arrow-class',
          }}
        >
          x
        </Popover>,
      );
      const arrowEl = document.getElementById('custom-arrow');
      expect(arrowEl).not.toBeNull();
      expect(arrowEl).toHaveClass('custom-arrow-class');
      // `arrowProps` must not clobber the classes that position the arrow.
      expect(arrowEl).toHaveClass('invisible', 'absolute', 'size-10');
    });

    it.each([
      [PopoverPosition.Top, 'rotate(-135deg)'],
      [PopoverPosition.TopStart, 'rotate(-135deg)'],
      [PopoverPosition.Bottom, 'rotate(45deg)'],
      [PopoverPosition.BottomEnd, 'rotate(45deg)'],
      [PopoverPosition.Left, 'rotate(135deg)'],
      [PopoverPosition.Right, 'rotate(-45deg)'],
    ])(
      'rotates the arrow visual for %s placement',
      (position, expectedTransform) => {
        render(
          <Popover
            isOpen
            hasArrow
            position={position}
            referenceElement={createReference()}
          >
            x
          </Popover>,
        );
        const visual = screen.getByTestId('popover-arrow-visual');
        expect(visual).toHaveStyle({ transform: expectedTransform });
      },
    );
  });

  describe('matchWidth', () => {
    it('uses width auto when matchWidth is false', () => {
      render(
        <Popover data-testid="popover" isOpen>
          x
        </Popover>,
      );
      expect(screen.getByTestId('popover')).toHaveStyle({ width: 'auto' });
    });

    it('matches the reference element width when matchWidth is true', () => {
      const reference = document.createElement('div');
      Object.defineProperty(reference, 'clientWidth', {
        configurable: true,
        get: () => 240,
      });

      render(
        <Popover
          data-testid="popover"
          isOpen
          matchWidth
          referenceElement={reference}
        >
          x
        </Popover>,
      );
      expect(screen.getByTestId('popover')).toHaveStyle({ width: '240px' });
    });

    it('follows the reference width while open', () => {
      const originalResizeObserver = globalThis.ResizeObserver;
      const callbacks: (() => void)[] = [];
      const disconnect = jest.fn();
      globalThis.ResizeObserver = jest.fn((callback: () => void) => {
        callbacks.push(callback);
        return { observe: jest.fn(), disconnect, unobserve: jest.fn() };
      }) as unknown as typeof ResizeObserver;

      try {
        const reference = createReference();
        let width = 240;
        Object.defineProperty(reference, 'clientWidth', {
          configurable: true,
          get: () => width,
        });
        const { rerender } = render(
          <Popover
            data-testid="popover"
            isOpen
            matchWidth
            position={PopoverPosition.Bottom}
            referenceElement={reference}
          >
            x
          </Popover>,
        );
        width = 320;
        act(() => callbacks.forEach((callback) => callback()));
        expect(screen.getByTestId('popover')).toHaveStyle({ width: '320px' });

        rerender(
          <Popover
            data-testid="popover"
            isOpen={false}
            matchWidth
            position={PopoverPosition.Bottom}
            referenceElement={reference}
          >
            x
          </Popover>,
        );
        expect(disconnect).toHaveBeenCalled();
      } finally {
        globalThis.ResizeObserver = originalResizeObserver;
      }
    });
  });

  describe('isPortal', () => {
    it('renders inline (in the parent) when isPortal is false', () => {
      const { container } = render(
        <div data-testid="parent">
          <Popover data-testid="popover" isOpen>
            x
          </Popover>
        </div>,
      );
      const parent = screen.getByTestId('parent');
      expect(parent).toContainElement(screen.getByTestId('popover'));
      // The popover root sits inside the parent wrapper rendered by RTL.
      expect(container).toContainElement(screen.getByTestId('popover'));
    });

    it('renders into document.body when isPortal is true', () => {
      render(
        <div data-testid="parent">
          <Popover data-testid="popover" isOpen isPortal>
            x
          </Popover>
        </div>,
      );
      const parent = screen.getByTestId('parent');
      const popover = screen.getByTestId('popover');
      expect(parent).not.toContainElement(popover);
      expect(document.body).toContainElement(popover);
    });
  });

  describe('ref forwarding', () => {
    it('forwards a ref object to the popover root', () => {
      const ref = createRef<HTMLDivElement>();
      render(
        <Popover ref={ref} data-testid="popover" isOpen>
          x
        </Popover>,
      );
      expect(ref.current).toBe(screen.getByTestId('popover'));
    });

    it('forwards a callback ref to the popover root', () => {
      const refCallback = jest.fn();
      render(
        <Popover ref={refCallback} data-testid="popover" isOpen>
          x
        </Popover>,
      );
      expect(refCallback).toHaveBeenCalledWith(screen.getByTestId('popover'));
    });

    it('does not call any ref handler when no ref is provided', () => {
      // Renders without a ref to exercise the "no ref" branch in the
      // setPopoverRef forwarder.
      render(
        <Popover data-testid="popover" isOpen>
          x
        </Popover>,
      );
      expect(screen.getByTestId('popover')).toBeInTheDocument();
    });
  });

  describe('onPressEscKey', () => {
    it('calls the handler when Escape is pressed', () => {
      const onPressEscKey = jest.fn();
      render(
        <Popover isOpen onPressEscKey={onPressEscKey}>
          x
        </Popover>,
      );
      fireEvent.keyDown(document, { key: 'Escape' });
      expect(onPressEscKey).toHaveBeenCalledTimes(1);
    });

    it('ignores non-Escape keys', () => {
      const onPressEscKey = jest.fn();
      render(
        <Popover isOpen onPressEscKey={onPressEscKey}>
          x
        </Popover>,
      );
      fireEvent.keyDown(document, { key: 'Enter' });
      expect(onPressEscKey).not.toHaveBeenCalled();
    });

    it('does not throw when Escape is pressed without a handler', () => {
      render(<Popover isOpen>x</Popover>);
      expect(() =>
        fireEvent.keyDown(document, { key: 'Escape' }),
      ).not.toThrow();
    });
  });

  describe('onClickOutside', () => {
    it('fires when clicking outside the popover', () => {
      const onClickOutside = jest.fn();
      render(
        <div>
          <Popover data-testid="popover" isOpen onClickOutside={onClickOutside}>
            x
          </Popover>
          <button data-testid="outside" type="button">
            outside
          </button>
        </div>,
      );
      fireEvent.click(screen.getByTestId('outside'));
      expect(onClickOutside).toHaveBeenCalledTimes(1);
    });

    it('does not fire when clicking inside the popover', () => {
      const onClickOutside = jest.fn();
      render(
        <Popover data-testid="popover" isOpen onClickOutside={onClickOutside}>
          <button data-testid="inside" type="button">
            inside
          </button>
        </Popover>,
      );
      fireEvent.click(screen.getByTestId('inside'));
      expect(onClickOutside).not.toHaveBeenCalled();
    });

    it('does not fire when clicking the reference element', () => {
      const reference = document.createElement('button');
      reference.dataset.testid = 'reference';
      document.body.appendChild(reference);

      const onClickOutside = jest.fn();
      render(
        <Popover
          data-testid="popover"
          isOpen
          referenceElement={reference}
          onClickOutside={onClickOutside}
        >
          x
        </Popover>,
      );
      fireEvent.click(reference);
      expect(onClickOutside).not.toHaveBeenCalled();
      document.body.removeChild(reference);
    });

    it('does not throw when clicking outside without a handler', () => {
      render(
        <div>
          <Popover data-testid="popover" isOpen>
            x
          </Popover>
          <button data-testid="outside" type="button">
            outside
          </button>
        </div>,
      );
      expect(() =>
        fireEvent.click(screen.getByTestId('outside')),
      ).not.toThrow();
    });

    it('removes document listeners with the same callbacks and capture options used on add', () => {
      const addEventListenerSpy = jest.spyOn(document, 'addEventListener');
      const removeEventListenerSpy = jest.spyOn(
        document,
        'removeEventListener',
      );

      try {
        const { unmount } = render(
          <Popover isOpen onClickOutside={jest.fn()} onPressEscKey={jest.fn()}>
            x
          </Popover>,
        );

        const keydownAddCall = addEventListenerSpy.mock.calls.find(
          ([eventType]) => eventType === 'keydown',
        );
        const clickAddCall = addEventListenerSpy.mock.calls.find(
          ([eventType]) => eventType === 'click',
        );

        if (!keydownAddCall || !clickAddCall) {
          throw new Error('Expected Popover to add document event listeners');
        }

        unmount();

        expect(removeEventListenerSpy).toHaveBeenCalledWith(
          'keydown',
          keydownAddCall[1],
          keydownAddCall[2],
        );
        expect(removeEventListenerSpy).toHaveBeenCalledWith(
          'click',
          clickAddCall[1],
          clickAddCall[2],
        );
      } finally {
        addEventListenerSpy.mockRestore();
        removeEventListenerSpy.mockRestore();
      }
    });

    it('removes the click listener when isOpen flips to false', () => {
      const onClickOutside = jest.fn();
      const Harness = () => {
        const [open, setOpen] = useState(true);
        return (
          <div>
            <Popover isOpen={open} onClickOutside={onClickOutside}>
              x
            </Popover>
            <button
              data-testid="toggle"
              type="button"
              onClick={() => setOpen(false)}
            >
              close
            </button>
            <button data-testid="outside" type="button">
              outside
            </button>
          </div>
        );
      };
      render(<Harness />);
      fireEvent.click(screen.getByTestId('toggle'));
      onClickOutside.mockClear();
      fireEvent.click(screen.getByTestId('outside'));
      expect(onClickOutside).not.toHaveBeenCalled();
    });
  });
});
