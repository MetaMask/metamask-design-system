import React, {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { twMerge } from '../../utils/tw-merge';
import { Box, BoxBackgroundColor, BoxBorderColor } from '../Box';

import { PopoverPosition, PopoverRole } from './Popover.types';
import type { PopoverProps } from './Popover.types';
import {
  computePopoverPosition,
  getElementRect,
  getViewportRect,
} from './Popover.utilities';
import type { PopoverPositionResult } from './Popover.utilities';

const SCROLL_EVENT_LISTENER_OPTIONS = { capture: true, passive: true };
const CAPTURE = true;

const INVOKER_INPUT_TYPES = ['button', 'submit', 'reset', 'image'];

/**
 * Button and button-like inputs can be a popover invoker. The browser then
 * treats a click on them as the trigger, not as an outside click, which is
 * what keeps `setIsOpen(!isOpen)` from reopening the popover on browsers that
 * light-dismiss on pointerup before the click event.
 *
 * @param element - Candidate reference element.
 * @returns Whether the element supports `popoverTargetElement`.
 */
const isPopoverInvoker = (
  element: HTMLElement,
): element is HTMLButtonElement | HTMLInputElement => {
  if (!('popoverTargetElement' in element)) {
    return false;
  }
  if (element instanceof HTMLButtonElement) {
    return true;
  }
  return (
    element instanceof HTMLInputElement &&
    INVOKER_INPUT_TYPES.includes(element.type)
  );
};

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      children,
      className,
      style,
      isOpen = false,
      onClose,
      isDismissible = true,
      referenceElement,
      position = PopoverPosition.Bottom,
      offset = [0, 8],
      role = PopoverRole.Tooltip,
      ...props
    },
    ref,
  ) => {
    const popoverRef = useRef<HTMLDivElement | null>(null);
    const onCloseRef = useRef(onClose);
    onCloseRef.current = onClose;
    const referenceRef = useRef(referenceElement);
    referenceRef.current = referenceElement;
    // True while the current pointer gesture is on the reference. Light
    // dismiss can hide the popover before the click listener runs, so this is
    // recorded on pointerdown.
    const pointerOnReferenceRef = useRef(false);
    // Changing the `popover` attribute while open hides it and fires
    // `toggle` with `newState: 'closed'`. That close is ours, not the user's.
    const ignoreCloseRef = useRef(false);
    const isDismissibleRef = useRef(isDismissible);
    if (isOpen && isDismissibleRef.current !== isDismissible) {
      ignoreCloseRef.current = true;
    }
    isDismissibleRef.current = isDismissible;
    const [skidding, distance] = offset;
    const [coords, setCoords] = useState<PopoverPositionResult | null>(null);
    const [isReferenceHidden, setIsReferenceHidden] = useState(false);

    // The popover unmounts when `isOpen` is false, which hides it without a
    // `toggle` event, so `onClose` only reports closes the browser initiated.
    useLayoutEffect(() => {
      const element = popoverRef.current;
      if (!isOpen || !element) {
        return undefined;
      }
      let reshowing = false;
      const handleToggle = (event: Event) => {
        if ((event as Event & { newState?: string }).newState !== 'closed') {
          return;
        }
        if (reshowing || ignoreCloseRef.current) {
          ignoreCloseRef.current = false;
          return;
        }
        // A non-invoker reference (a plain div, for example) still counts as
        // an outside click. Put the popover back and let the trigger's own
        // click handler decide, instead of reporting a close that the
        // following click would undo.
        if (pointerOnReferenceRef.current) {
          pointerOnReferenceRef.current = false;
          if (typeof element.showPopover !== 'function') {
            return;
          }
          reshowing = true;
          element.showPopover();
          reshowing = false;
          return;
        }
        onCloseRef.current?.();
      };
      const markPointerTarget = (event: Event) => {
        const reference = referenceRef.current;
        const { target } = event;
        pointerOnReferenceRef.current = Boolean(
          reference &&
            target instanceof Node &&
            (target === reference || reference.contains(target)),
        );
      };
      const handleKeyDown = (event: Event) => {
        if ((event as KeyboardEvent).key === 'Escape') {
          pointerOnReferenceRef.current = false;
        }
      };
      element.addEventListener('toggle', handleToggle);
      document.addEventListener('pointerdown', markPointerTarget, CAPTURE);
      document.addEventListener('pointerup', markPointerTarget, CAPTURE);
      document.addEventListener('click', markPointerTarget, CAPTURE);
      document.addEventListener('keydown', handleKeyDown, CAPTURE);

      const reference = referenceElement;
      const invoker =
        reference && isPopoverInvoker(reference) ? reference : null;
      const previousTarget = invoker?.popoverTargetElement ?? null;
      const previousAction = invoker?.popoverTargetAction;
      if (invoker && isDismissible) {
        invoker.popoverTargetElement = element;
        invoker.popoverTargetAction = 'show';
      }

      // `showPopover` throws if the popover is already open. An attribute
      // change between `auto` and `manual` hides it first, so this still
      // re-shows after `isDismissible` changes.
      let alreadyOpen = false;
      try {
        alreadyOpen = element.matches(':popover-open');
      } catch {
        alreadyOpen = false;
      }
      if (!alreadyOpen && typeof element.showPopover === 'function') {
        element.showPopover();
      }
      return () => {
        element.removeEventListener('toggle', handleToggle);
        document.removeEventListener('pointerdown', markPointerTarget, CAPTURE);
        document.removeEventListener('pointerup', markPointerTarget, CAPTURE);
        document.removeEventListener('click', markPointerTarget, CAPTURE);
        document.removeEventListener('keydown', handleKeyDown, CAPTURE);
        if (invoker) {
          invoker.popoverTargetElement = previousTarget;
          if (previousAction) {
            invoker.popoverTargetAction = previousAction;
          }
        }
      };
    }, [isOpen, isDismissible, referenceElement]);

    useLayoutEffect(() => {
      const floating = popoverRef.current;
      if (!isOpen || !referenceElement || !floating) {
        return undefined;
      }

      const update = () => {
        const next = computePopoverPosition({
          referenceRect: getElementRect(referenceElement),
          floatingSize: {
            width: floating.offsetWidth,
            height: floating.offsetHeight,
          },
          boundary: getViewportRect(),
          placement: position,
          offset: [skidding, distance],
        });
        setCoords((previous) =>
          previous?.x === next.x &&
          previous.y === next.y &&
          previous.placement === next.placement
            ? previous
            : next,
        );
      };

      update();
      window.addEventListener('scroll', update, SCROLL_EVENT_LISTENER_OPTIONS);
      window.addEventListener('resize', update);
      const resizeObserver =
        typeof ResizeObserver === 'undefined'
          ? undefined
          : new ResizeObserver(update);
      resizeObserver?.observe(referenceElement);
      resizeObserver?.observe(floating);

      return () => {
        window.removeEventListener(
          'scroll',
          update,
          SCROLL_EVENT_LISTENER_OPTIONS,
        );
        window.removeEventListener('resize', update);
        resizeObserver?.disconnect();
      };
    }, [isOpen, referenceElement, position, skidding, distance]);

    // An IntersectionObserver without a root reports the reference as hidden
    // once it is clipped by scroll containers or scrolled out of the viewport.
    useEffect(() => {
      if (
        !isOpen ||
        !referenceElement ||
        typeof IntersectionObserver === 'undefined'
      ) {
        return undefined;
      }
      const observer = new IntersectionObserver((entries) => {
        setIsReferenceHidden(!entries[entries.length - 1].isIntersecting);
      });
      observer.observe(referenceElement);
      return () => {
        observer.disconnect();
        setIsReferenceHidden(false);
      };
    }, [isOpen, referenceElement]);

    if (!isOpen) {
      return null;
    }

    const setPopoverRef = (element: HTMLDivElement | null) => {
      if (typeof ref === 'function') {
        ref(element);
      } else if (ref) {
        ref.current = element;
      }
      popoverRef.current = element;
    };

    return (
      <Box
        backgroundColor={BoxBackgroundColor.BackgroundElevated2}
        borderColor={BoxBorderColor.BorderMuted}
        borderWidth={1}
        role={role}
        ref={setPopoverRef}
        popover={isDismissible ? 'auto' : 'manual'}
        data-placement={coords?.placement ?? position}
        className={twMerge(
          // Reset the user agent `[popover]` styles (centered margin,
          // `overflow: auto`, `CanvasText` color).
          'm-0 overflow-visible rounded-lg shadow-md [color:inherit]',
          isReferenceHidden && 'pointer-events-none invisible',
          className,
        )}
        {...props}
        style={{
          position: 'fixed',
          top: coords?.y ?? 0,
          left: coords?.x ?? 0,
          right: 'auto',
          bottom: 'auto',
          ...style,
        }}
      >
        {children}
      </Box>
    );
  },
);

Popover.displayName = 'Popover';
