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
      const handleToggle = (event: Event) => {
        if ((event as Event & { newState?: string }).newState === 'closed') {
          onCloseRef.current?.();
        }
      };
      element.addEventListener('toggle', handleToggle);
      if (typeof element.showPopover === 'function') {
        element.showPopover();
      }
      return () => element.removeEventListener('toggle', handleToggle);
    }, [isOpen, isDismissible]);

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
        padding={4}
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
