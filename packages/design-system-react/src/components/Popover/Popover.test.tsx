import { act, fireEvent, render, screen } from '@testing-library/react';
import React, { createRef, useLayoutEffect, useState } from 'react';

import { Popover } from './Popover';
import { PopoverPosition, PopoverRole } from './Popover.types';

const FLOATING_SIZE = { width: 100, height: 50 };

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
  document.body.appendChild(reference);
  createdReferences.push(reference);
  const getRect = jest.spyOn(reference, 'getBoundingClientRect');
  const setRect = (next: typeof rect) =>
    getRect.mockReturnValue({
      x: next.x,
      y: next.y,
      left: next.x,
      top: next.y,
      width: next.width,
      height: next.height,
      right: next.x + next.width,
      bottom: next.y + next.height,
    } as DOMRect);
  setRect(rect);
  return { reference, setRect };
};

const dispatchToggle = (element: HTMLElement, newState: string) => {
  const event = new Event('toggle');
  Object.assign(event, { newState });
  act(() => {
    element.dispatchEvent(event);
  });
};

type ObserverCallback = (entries: { isIntersecting: boolean }[]) => void;

describe('Popover', () => {
  let resizeCallbacks: (() => void)[];
  let intersectionCallbacks: ObserverCallback[];
  let observed: Element[];

  beforeEach(() => {
    resizeCallbacks = [];
    intersectionCallbacks = [];
    observed = [];
    jest
      .spyOn(HTMLElement.prototype, 'offsetWidth', 'get')
      .mockReturnValue(FLOATING_SIZE.width);
    jest
      .spyOn(HTMLElement.prototype, 'offsetHeight', 'get')
      .mockReturnValue(FLOATING_SIZE.height);
    Object.defineProperty(document.documentElement, 'clientWidth', {
      configurable: true,
      value: 1000,
    });
    Object.defineProperty(document.documentElement, 'clientHeight', {
      configurable: true,
      value: 800,
    });
    globalThis.ResizeObserver = class {
      constructor(callback: () => void) {
        resizeCallbacks.push(callback);
      }

      observe(element: Element) {
        observed.push(element);
      }

      disconnect = jest.fn();

      unobserve = jest.fn();
    } as unknown as typeof ResizeObserver;
    globalThis.IntersectionObserver = class {
      constructor(callback: ObserverCallback) {
        intersectionCallbacks.push(callback);
      }

      observe = jest.fn();

      disconnect = jest.fn();
    } as unknown as typeof IntersectionObserver;
  });

  afterEach(() => {
    jest.restoreAllMocks();
    createdReferences.splice(0).forEach((reference) => reference.remove());
    // @ts-expect-error cleaning up test globals
    delete globalThis.ResizeObserver;
    // @ts-expect-error cleaning up test globals
    delete globalThis.IntersectionObserver;
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

    it('renders nothing by default', () => {
      render(<Popover data-testid="popover">hidden</Popover>);
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
    it('renders popover="auto" by default and shows it when opened', () => {
      const showPopover = jest.spyOn(HTMLElement.prototype, 'showPopover');
      render(
        <Popover data-testid="popover" isOpen>
          x
        </Popover>,
      );
      const root = screen.getByTestId('popover');
      expect(root).toHaveAttribute('popover', 'auto');
      expect(showPopover).toHaveBeenCalledTimes(1);
      expect(showPopover.mock.instances[0]).toBe(root);
    });

    it('renders popover="manual" when isDismissible is false', () => {
      render(
        <Popover data-testid="popover" isOpen isDismissible={false}>
          x
        </Popover>,
      );
      expect(screen.getByTestId('popover')).toHaveAttribute(
        'popover',
        'manual',
      );
    });

    it('shows the popover again when isDismissible changes while open', () => {
      const showPopover = jest.spyOn(HTMLElement.prototype, 'showPopover');
      const { rerender } = render(<Popover isOpen>x</Popover>);
      rerender(
        <Popover isOpen isDismissible={false}>
          x
        </Popover>,
      );
      expect(showPopover).toHaveBeenCalledTimes(2);
    });

    it.each([
      ['already open', true, 0],
      ['not yet open', false, 1],
    ])(
      'handles :popover-open when the popover is %s',
      (_label, open, calls) => {
        jest
          .spyOn(Element.prototype, 'matches')
          .mockImplementation(
            (selector: string) => selector !== ':popover-open' || open,
          );
        const showPopover = jest.spyOn(HTMLElement.prototype, 'showPopover');
        render(<Popover isOpen>x</Popover>);
        expect(showPopover).toHaveBeenCalledTimes(calls);
      },
    );

    it('still shows the popover when :popover-open cannot be queried', () => {
      jest
        .spyOn(Element.prototype, 'matches')
        .mockImplementation((selector: string) => {
          if (selector === ':popover-open') {
            throw new Error('unsupported');
          }
          return true;
        });
      const showPopover = jest.spyOn(HTMLElement.prototype, 'showPopover');
      render(
        <Popover data-testid="popover" isOpen>
          x
        </Popover>,
      );
      expect(showPopover).toHaveBeenCalledTimes(1);
      expect(screen.getByTestId('popover')).toBeInTheDocument();
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

  describe('onClose', () => {
    it('is called when the browser closes the popover', () => {
      const onClose = jest.fn();
      render(
        <Popover data-testid="popover" isOpen onClose={onClose}>
          x
        </Popover>,
      );
      dispatchToggle(screen.getByTestId('popover'), 'closed');
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('is not called when the popover opens', () => {
      const onClose = jest.fn();
      render(
        <Popover data-testid="popover" isOpen onClose={onClose}>
          x
        </Popover>,
      );
      dispatchToggle(screen.getByTestId('popover'), 'open');
      expect(onClose).not.toHaveBeenCalled();
    });

    it('does not throw without an onClose handler', () => {
      render(
        <Popover data-testid="popover" isOpen>
          x
        </Popover>,
      );
      expect(() =>
        dispatchToggle(screen.getByTestId('popover'), 'closed'),
      ).not.toThrow();
    });

    it('calls the latest onClose without re-showing the popover', () => {
      const showPopover = jest.spyOn(HTMLElement.prototype, 'showPopover');
      const first = jest.fn();
      const second = jest.fn();
      const { rerender } = render(
        <Popover data-testid="popover" isOpen onClose={first}>
          x
        </Popover>,
      );
      rerender(
        <Popover data-testid="popover" isOpen onClose={second}>
          x
        </Popover>,
      );
      dispatchToggle(screen.getByTestId('popover'), 'closed');
      expect(first).not.toHaveBeenCalled();
      expect(second).toHaveBeenCalledTimes(1);
      expect(showPopover).toHaveBeenCalledTimes(1);
    });

    it('stops listening once isOpen becomes false', () => {
      const onClose = jest.fn();
      const { rerender } = render(
        <Popover data-testid="popover" isOpen onClose={onClose}>
          x
        </Popover>,
      );
      const root = screen.getByTestId('popover');
      rerender(
        <Popover data-testid="popover" isOpen={false} onClose={onClose}>
          x
        </Popover>,
      );
      dispatchToggle(root, 'closed');
      expect(onClose).not.toHaveBeenCalled();
    });

    it('keeps a controlled isOpen in sync', () => {
      const ControlledPopover = () => {
        const [isOpen, setIsOpen] = useState(true);
        return (
          <Popover
            data-testid="popover"
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
          >
            x
          </Popover>
        );
      };
      render(<ControlledPopover />);
      dispatchToggle(screen.getByTestId('popover'), 'closed');
      expect(screen.queryByTestId('popover')).not.toBeInTheDocument();
    });

    it('does not report the close caused by changing isDismissible', () => {
      const onClose = jest.fn();
      const Harness = ({ dismissible }: { dismissible: boolean }) => {
        useLayoutEffect(() => {
          const root = document.querySelector('[data-testid="popover"]');
          if (root?.getAttribute('popover') === 'manual') {
            const event = new Event('toggle');
            Object.assign(event, { newState: 'closed' });
            root.dispatchEvent(event);
          }
        });
        return (
          <Popover
            data-testid="popover"
            isOpen
            isDismissible={dismissible}
            onClose={onClose}
          >
            x
          </Popover>
        );
      };
      const { rerender } = render(<Harness dismissible />);
      rerender(<Harness dismissible={false} />);
      expect(onClose).not.toHaveBeenCalled();
      dispatchToggle(screen.getByTestId('popover'), 'closed');
      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('trigger light dismiss', () => {
    const defineInvoker = (element: HTMLElement) => {
      let target: Element | null = null;
      let action = 'toggle';
      Object.defineProperty(element, 'popoverTargetElement', {
        configurable: true,
        get: () => target,
        set: (value: Element | null) => {
          target = value;
        },
      });
      Object.defineProperty(element, 'popoverTargetAction', {
        configurable: true,
        get: () => action,
        set: (value: string) => {
          action = value;
        },
      });
      return {
        get target() {
          return target;
        },
        get action() {
          return action;
        },
      };
    };

    it('registers a button trigger as the invoker and restores it', () => {
      const { reference } = createReference();
      const invoker = defineInvoker(reference);
      const { unmount } = render(
        <Popover data-testid="popover" isOpen referenceElement={reference}>
          x
        </Popover>,
      );
      expect(invoker.target).toBe(screen.getByTestId('popover'));
      expect(invoker.action).toBe('show');
      unmount();
      expect(invoker.target).toBeNull();
      expect(invoker.action).toBe('toggle');
    });

    it('registers an input button and ignores a text input or div', () => {
      const input = document.createElement('input');
      input.type = 'button';
      const text = document.createElement('input');
      const div = document.createElement('div');
      [input, text, div].forEach((element) => {
        document.body.appendChild(element);
        createdReferences.push(element);
      });
      const inputInvoker = defineInvoker(input);
      const textInvoker = defineInvoker(text);
      const divInvoker = defineInvoker(div);
      const { rerender } = render(
        <Popover data-testid="popover" isOpen referenceElement={input}>
          x
        </Popover>,
      );
      expect(inputInvoker.target).toBe(screen.getByTestId('popover'));
      rerender(
        <Popover data-testid="popover" isOpen referenceElement={text}>
          x
        </Popover>,
      );
      expect(textInvoker.target).toBeNull();
      rerender(
        <Popover data-testid="popover" isOpen referenceElement={div}>
          x
        </Popover>,
      );
      expect(divInvoker.target).toBeNull();
    });

    it('does not register an invoker when the popover is not dismissible', () => {
      const { reference } = createReference();
      const invoker = defineInvoker(reference);
      render(
        <Popover
          data-testid="popover"
          isOpen
          isDismissible={false}
          referenceElement={reference}
        >
          x
        </Popover>,
      );
      expect(invoker.target).toBeNull();
    });

    it('re-shows instead of closing when the reference gesture light-dismisses', () => {
      const reference = document.createElement('div');
      const child = document.createElement('span');
      reference.appendChild(child);
      document.body.appendChild(reference);
      createdReferences.push(reference);
      const showPopover = jest.spyOn(HTMLElement.prototype, 'showPopover');
      const onClose = jest.fn();
      render(
        <Popover
          data-testid="popover"
          isOpen
          referenceElement={reference}
          onClose={onClose}
        >
          x
        </Popover>,
      );
      fireEvent.pointerDown(child);
      dispatchToggle(screen.getByTestId('popover'), 'closed');
      expect(onClose).not.toHaveBeenCalled();
      expect(showPopover).toHaveBeenCalledTimes(2);
    });

    it('ignores a re-entrant close from the re-show', () => {
      const reference = document.createElement('div');
      document.body.appendChild(reference);
      createdReferences.push(reference);
      let armed = false;
      const showPopover = jest
        .spyOn(HTMLElement.prototype, 'showPopover')
        .mockImplementation(function reenter(this: HTMLElement) {
          if (!armed) {
            return;
          }
          armed = false;
          const event = new Event('toggle');
          Object.assign(event, { newState: 'closed' });
          this.dispatchEvent(event);
        });
      const onClose = jest.fn();
      render(
        <Popover
          data-testid="popover"
          isOpen
          referenceElement={reference}
          onClose={onClose}
        >
          x
        </Popover>,
      );
      fireEvent.pointerDown(reference);
      armed = true;
      dispatchToggle(screen.getByTestId('popover'), 'closed');
      expect(onClose).not.toHaveBeenCalled();
      expect(showPopover).toHaveBeenCalledTimes(2);
    });

    it('does not re-show when the Popover API is unavailable', () => {
      const reference = document.createElement('div');
      document.body.appendChild(reference);
      createdReferences.push(reference);
      const descriptor = Object.getOwnPropertyDescriptor(
        HTMLElement.prototype,
        'showPopover',
      ) as PropertyDescriptor;
      const onClose = jest.fn();
      // @ts-expect-error simulating a browser without the Popover API
      delete HTMLElement.prototype.showPopover;
      try {
        render(
          <Popover
            data-testid="popover"
            isOpen
            referenceElement={reference}
            onClose={onClose}
          >
            x
          </Popover>,
        );
        fireEvent.pointerDown(reference);
        dispatchToggle(screen.getByTestId('popover'), 'closed');
        expect(onClose).not.toHaveBeenCalled();
      } finally {
        Object.defineProperty(HTMLElement.prototype, 'showPopover', descriptor);
      }
    });

    it('still reports Escape after a gesture on the reference', () => {
      const reference = document.createElement('div');
      document.body.appendChild(reference);
      createdReferences.push(reference);
      const onClose = jest.fn();
      render(
        <Popover
          data-testid="popover"
          isOpen
          referenceElement={reference}
          onClose={onClose}
        >
          x
        </Popover>,
      );
      fireEvent.pointerDown(reference);
      fireEvent.keyDown(document, { key: 'Escape' });
      dispatchToggle(screen.getByTestId('popover'), 'closed');
      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('positioning', () => {
    it('positions below the reference by default with an 8px offset', () => {
      const { reference } = createReference();
      render(
        <Popover data-testid="popover" isOpen referenceElement={reference}>
          x
        </Popover>,
      );
      const root = screen.getByTestId('popover');
      expect(root).toHaveStyle({
        position: 'fixed',
        top: '408px',
        left: '450px',
      });
      expect(root).toHaveAttribute('data-placement', 'bottom');
    });

    it('applies the requested position and offset', () => {
      const { reference } = createReference();
      render(
        <Popover
          data-testid="popover"
          isOpen
          referenceElement={reference}
          position={PopoverPosition.RightStart}
          offset={[4, 12]}
        >
          x
        </Popover>,
      );
      expect(screen.getByTestId('popover')).toHaveStyle({
        top: '304px',
        left: '612px',
      });
    });

    it('flips and reports the resolved placement', () => {
      const { reference } = createReference({
        x: 400,
        y: 20,
        width: 200,
        height: 100,
      });
      render(
        <Popover
          data-testid="popover"
          isOpen
          referenceElement={reference}
          position={PopoverPosition.Top}
        >
          x
        </Popover>,
      );
      const root = screen.getByTestId('popover');
      expect(root).toHaveAttribute('data-placement', 'bottom');
      expect(root).toHaveStyle({ top: '128px' });
    });

    it('renders at the origin with the requested placement without a reference', () => {
      render(
        <Popover data-testid="popover" isOpen position={PopoverPosition.Left}>
          x
        </Popover>,
      );
      const root = screen.getByTestId('popover');
      expect(root).toHaveStyle({ top: '0px', left: '0px' });
      expect(root).toHaveAttribute('data-placement', 'left');
    });

    it('updates on scroll and resize', () => {
      const { reference, setRect } = createReference();
      render(
        <Popover data-testid="popover" isOpen referenceElement={reference}>
          x
        </Popover>,
      );
      setRect({ x: 100, y: 100, width: 200, height: 100 });
      act(() => {
        fireEvent.scroll(window);
      });
      expect(screen.getByTestId('popover')).toHaveStyle({
        top: '208px',
        left: '150px',
      });
      setRect({ x: 200, y: 100, width: 200, height: 100 });
      act(() => {
        fireEvent(window, new Event('resize'));
      });
      expect(screen.getByTestId('popover')).toHaveStyle({ left: '250px' });
    });

    it('observes the reference and popover sizes', () => {
      const { reference, setRect } = createReference();
      render(
        <Popover data-testid="popover" isOpen referenceElement={reference}>
          x
        </Popover>,
      );
      expect(observed).toStrictEqual([
        reference,
        screen.getByTestId('popover'),
      ]);
      setRect({ x: 400, y: 300, width: 300, height: 100 });
      act(() => resizeCallbacks[0]());
      expect(screen.getByTestId('popover')).toHaveStyle({ left: '500px' });
    });

    it('keeps the same position state when nothing moved', () => {
      const { reference } = createReference();
      render(
        <Popover data-testid="popover" isOpen referenceElement={reference}>
          x
        </Popover>,
      );
      const before = screen.getByTestId('popover').getAttribute('style');
      act(() => {
        fireEvent.scroll(window);
      });
      expect(screen.getByTestId('popover').getAttribute('style')).toBe(before);
    });

    it('removes listeners when closed', () => {
      const removeListener = jest.spyOn(window, 'removeEventListener');
      const { reference } = createReference();
      const { rerender } = render(
        <Popover isOpen referenceElement={reference}>
          x
        </Popover>,
      );
      rerender(
        <Popover isOpen={false} referenceElement={reference}>
          x
        </Popover>,
      );
      expect(removeListener).toHaveBeenCalledWith(
        'scroll',
        expect.any(Function),
        expect.objectContaining({ capture: true }),
      );
      expect(removeListener).toHaveBeenCalledWith(
        'resize',
        expect.any(Function),
      );
    });

    it('works without ResizeObserver and IntersectionObserver', () => {
      // @ts-expect-error simulating an environment without observers
      delete globalThis.ResizeObserver;
      // @ts-expect-error simulating an environment without observers
      delete globalThis.IntersectionObserver;
      const { reference } = createReference();
      const { unmount } = render(
        <Popover data-testid="popover" isOpen referenceElement={reference}>
          x
        </Popover>,
      );
      expect(screen.getByTestId('popover')).toHaveStyle({ top: '408px' });
      expect(() => unmount()).not.toThrow();
    });
  });

  describe('hidden reference', () => {
    it('hides the popover while the reference is out of view', () => {
      const { reference } = createReference();
      render(
        <Popover data-testid="popover" isOpen referenceElement={reference}>
          x
        </Popover>,
      );
      const root = screen.getByTestId('popover');
      expect(root).not.toHaveClass('invisible');
      act(() => intersectionCallbacks[0]([{ isIntersecting: false }]));
      expect(root).toHaveClass('invisible', 'pointer-events-none');
      act(() =>
        intersectionCallbacks[0]([
          { isIntersecting: false },
          { isIntersecting: true },
        ]),
      );
      expect(root).not.toHaveClass('invisible');
    });

    it('resets when the popover closes', () => {
      const { reference } = createReference();
      const { rerender } = render(
        <Popover data-testid="popover" isOpen referenceElement={reference}>
          x
        </Popover>,
      );
      act(() => intersectionCallbacks[0]([{ isIntersecting: false }]));
      rerender(
        <Popover
          data-testid="popover"
          isOpen={false}
          referenceElement={reference}
        >
          x
        </Popover>,
      );
      rerender(
        <Popover data-testid="popover" isOpen referenceElement={reference}>
          x
        </Popover>,
      );
      expect(screen.getByTestId('popover')).not.toHaveClass('invisible');
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

    it('applies dialog', () => {
      render(
        <Popover data-testid="popover" isOpen role={PopoverRole.Dialog}>
          x
        </Popover>,
      );
      expect(screen.getByTestId('popover')).toHaveAttribute('role', 'dialog');
    });
  });

  describe('className, style and native props', () => {
    it('does not apply default padding', () => {
      render(
        <Popover data-testid="popover" isOpen>
          x
        </Popover>,
      );
      expect(screen.getByTestId('popover')).not.toHaveClass('p-4');
    });

    it('merges className and style and forwards native props', () => {
      render(
        <Popover
          data-testid="popover"
          isOpen
          className="mt-2 p-2"
          style={{ width: 240 }}
          aria-label="Menu"
          id="menu"
        >
          x
        </Popover>,
      );
      const root = screen.getByTestId('popover');
      expect(root).toHaveClass('mt-2', 'p-2', 'rounded-lg', 'm-0');
      expect(root).not.toHaveClass('p-4');
      expect(root).toHaveStyle({ width: '240px', position: 'fixed' });
      expect(root).toHaveAttribute('aria-label', 'Menu');
      expect(root).toHaveAttribute('id', 'menu');
    });
  });

  describe('ref', () => {
    it('forwards object refs', () => {
      const ref = createRef<HTMLDivElement>();
      render(
        <Popover data-testid="popover" isOpen ref={ref}>
          x
        </Popover>,
      );
      expect(ref.current).toBe(screen.getByTestId('popover'));
    });

    it('forwards callback refs', () => {
      const ref = jest.fn();
      render(
        <Popover data-testid="popover" isOpen ref={ref}>
          x
        </Popover>,
      );
      expect(ref).toHaveBeenCalledWith(screen.getByTestId('popover'));
    });
  });
});
