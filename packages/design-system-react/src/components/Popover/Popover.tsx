import React, {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

import { twMerge } from '../../utils/tw-merge';
import { Box, BoxBackgroundColor, BoxBorderColor } from '../Box';

import { POPOVER_ARROW_PLACEMENT_STYLES } from './Popover.constants';
import { PopoverPosition, PopoverRole } from './Popover.types';
import type { PopoverProps } from './Popover.types';
import {
  computePopoverPosition,
  getAnchorPositionStyles,
  getClippingRect,
  getElementRect,
  getViewportRect,
  isReferenceHidden,
  supportsCssAnchorPositioning,
} from './Popover.utilities';
import type { PopoverPlacement } from './Popover.utilities';

type ArrowPlacementKey = keyof typeof POPOVER_ARROW_PLACEMENT_STYLES;

type PositionState = {
  x: number;
  y: number;
  placement: PopoverPlacement;
  arrow?: { x?: number; y?: number };
  referenceHidden: boolean;
};

const CAPTURE_EVENT_LISTENER_OPTIONS = { capture: true };
const SCROLL_EVENT_LISTENER_OPTIONS = { capture: true, passive: true };

let anchorNameCounter = 0;

const isSamePosition = (a: PositionState, b: PositionState) =>
  a.x === b.x &&
  a.y === b.y &&
  a.placement === b.placement &&
  a.referenceHidden === b.referenceHidden &&
  a.arrow?.x === b.arrow?.x &&
  a.arrow?.y === b.arrow?.y;

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      children,
      className,
      style,
      position = PopoverPosition.Auto,
      role = PopoverRole.Tooltip,
      hasArrow = false,
      matchWidth = false,
      preventOverflow = false,
      offset: offsetProp = [0, 8],
      flip: flipEnabled = false,
      referenceHidden = true,
      referenceElement,
      isOpen,
      isPortal = false,
      arrowProps,
      onClickOutside,
      onPressEscKey,
      ...props
    },
    ref,
  ) => {
    const arrowRef = useRef<HTMLDivElement | null>(null);
    const popoverRef = useRef<HTMLDivElement | null>(null);
    const anchorNameRef = useRef<string | null>(null);

    const isAuto = position === PopoverPosition.Auto;
    const requestedPlacement: PopoverPlacement = isAuto
      ? PopoverPosition.Bottom
      : position;
    const [offsetSkidding, offsetDistance] = offsetProp;

    // CSS cannot report which fallback it picked (needed to rotate the
    // arrow) and has no equivalent of shifting along the cross axis, so
    // those configurations always use the JS positioning fallback.
    const usesCssAnchor =
      Boolean(isOpen && referenceElement) &&
      !isAuto &&
      !hasArrow &&
      !preventOverflow &&
      supportsCssAnchorPositioning();

    if (usesCssAnchor && !anchorNameRef.current) {
      anchorNameCounter += 1;
      anchorNameRef.current = `--mm-popover-anchor-${anchorNameCounter}`;
    }

    const [positionState, setPositionState] = useState<PositionState>({
      x: 0,
      y: 0,
      placement: requestedPlacement,
      referenceHidden: false,
    });

    // Popover API: render in the top layer so ancestors' `overflow` and
    // stacking contexts never clip or cover the popover. `manual` keeps
    // visibility controlled by `isOpen` instead of native light dismiss.
    useLayoutEffect(() => {
      const element = popoverRef.current;
      if (isOpen && typeof element?.showPopover === 'function') {
        element.showPopover();
      }
    }, [isOpen, isPortal]);

    const [isAnchorHidden, setIsAnchorHidden] = useState(false);

    // `position-visibility: anchors-visible` ignores scroll-container
    // clipping in Firefox, so CSS-anchored popovers track visibility here.
    useEffect(() => {
      if (
        !usesCssAnchor ||
        !referenceHidden ||
        !referenceElement ||
        typeof IntersectionObserver === 'undefined'
      ) {
        setIsAnchorHidden(false);
        return undefined;
      }
      const observer = new IntersectionObserver(([entry]) => {
        setIsAnchorHidden(!entry.isIntersecting);
      });
      observer.observe(referenceElement);
      return () => observer.disconnect();
    }, [usesCssAnchor, referenceHidden, referenceElement]);

    useLayoutEffect(() => {
      const anchorName = anchorNameRef.current;
      if (!usesCssAnchor || !referenceElement || !anchorName) {
        return undefined;
      }
      const previousAnchorName =
        referenceElement.style.getPropertyValue('anchor-name');
      referenceElement.style.setProperty(
        'anchor-name',
        previousAnchorName
          ? `${previousAnchorName}, ${anchorName}`
          : anchorName,
      );
      return () => {
        if (previousAnchorName) {
          referenceElement.style.setProperty('anchor-name', previousAnchorName);
        } else {
          referenceElement.style.removeProperty('anchor-name');
        }
      };
    }, [usesCssAnchor, referenceElement]);

    useLayoutEffect(() => {
      const floating = popoverRef.current;
      if (!isOpen || usesCssAnchor || !referenceElement || !floating) {
        return undefined;
      }

      const update = () => {
        const arrowElement = arrowRef.current;
        const referenceRect = getElementRect(referenceElement);
        const result = computePopoverPosition({
          referenceRect,
          floatingSize: {
            width: floating.offsetWidth,
            height: floating.offsetHeight,
          },
          boundary: getViewportRect(),
          position,
          offset: [offsetSkidding, offsetDistance],
          flip: flipEnabled,
          shift: preventOverflow,
          arrowSize: arrowElement
            ? {
                width: arrowElement.offsetWidth,
                height: arrowElement.offsetHeight,
              }
            : undefined,
        });
        const next: PositionState = {
          ...result,
          referenceHidden: isReferenceHidden(
            referenceRect,
            getClippingRect(referenceElement),
          ),
        };
        setPositionState((previous) =>
          isSamePosition(previous, next) ? previous : next,
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
    }, [
      isOpen,
      usesCssAnchor,
      referenceElement,
      position,
      offsetSkidding,
      offsetDistance,
      flipEnabled,
      preventOverflow,
      hasArrow,
      isPortal,
    ]);

    useEffect(() => {
      if (!isOpen || (!onPressEscKey && !onClickOutside)) {
        return undefined;
      }

      const handleEscKey = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onPressEscKey?.();
        }
      };

      const handleClickOutside = (event: MouseEvent) => {
        if (
          popoverRef.current &&
          !popoverRef.current.contains(event.target as Node) &&
          !referenceElement?.contains(event.target as Node)
        ) {
          onClickOutside?.();
        }
      };

      if (onPressEscKey) {
        document.addEventListener(
          'keydown',
          handleEscKey,
          CAPTURE_EVENT_LISTENER_OPTIONS,
        );
      }

      if (onClickOutside) {
        document.addEventListener(
          'click',
          handleClickOutside,
          CAPTURE_EVENT_LISTENER_OPTIONS,
        );
      }

      return () => {
        if (onPressEscKey) {
          document.removeEventListener(
            'keydown',
            handleEscKey,
            CAPTURE_EVENT_LISTENER_OPTIONS,
          );
        }

        if (onClickOutside) {
          document.removeEventListener(
            'click',
            handleClickOutside,
            CAPTURE_EVENT_LISTENER_OPTIONS,
          );
        }
      };
    }, [onPressEscKey, isOpen, onClickOutside, referenceElement]);

    if (!isOpen) {
      return null;
    }

    const placement = usesCssAnchor
      ? requestedPlacement
      : positionState.placement;
    const arrowSide = placement.split('-')[0] as ArrowPlacementKey;
    const arrowPlacementStyle = POPOVER_ARROW_PLACEMENT_STYLES[arrowSide];
    const referenceHiddenValue = usesCssAnchor
      ? isAnchorHidden
      : positionState.referenceHidden;

    const positionStyle: React.CSSProperties = usesCssAnchor
      ? getAnchorPositionStyles({
          anchorName: anchorNameRef.current as string,
          placement: requestedPlacement,
          offset: [offsetSkidding, offsetDistance],
          flip: flipEnabled,
        })
      : {
          top: positionState.y,
          left: positionState.x,
          right: 'auto',
          bottom: 'auto',
        };

    const popoverStyle: React.CSSProperties = {
      position: 'fixed',
      ...positionStyle,
      width: matchWidth ? referenceElement?.clientWidth : 'auto',
      ...style,
    };

    const setPopoverRef = (element: HTMLDivElement | null) => {
      if (typeof ref === 'function') {
        ref(element);
      } else if (ref) {
        ref.current = element;
      }
      popoverRef.current = element;
    };

    const popoverContent = (
      <Box
        backgroundColor={BoxBackgroundColor.BackgroundElevated2}
        borderColor={BoxBorderColor.BorderMuted}
        borderWidth={1}
        padding={4}
        role={role}
        ref={setPopoverRef}
        popover="manual"
        data-popper-placement={placement}
        data-popper-reference-hidden={referenceHiddenValue}
        className={twMerge(
          // Reset the user agent `[popover]` styles (centered margin,
          // `overflow: auto` that would clip the arrow, `CanvasText` color).
          'm-0 overflow-visible rounded-lg shadow-md [color:inherit]',
          referenceHidden &&
            'data-[popper-reference-hidden=true]:pointer-events-none data-[popper-reference-hidden=true]:invisible',
          className,
        )}
        {...props}
        style={popoverStyle}
      >
        {children}
        {hasArrow && (
          <Box
            data-testid="popover-arrow"
            {...arrowProps}
            ref={arrowRef}
            className={twMerge(
              'invisible absolute size-10',
              arrowProps?.className,
            )}
            style={{
              left: positionState.arrow?.x,
              top: positionState.arrow?.y,
              ...arrowPlacementStyle.container,
            }}
          >
            <Box
              backgroundColor={BoxBackgroundColor.BackgroundElevated2}
              borderColor={BoxBorderColor.BorderMuted}
              borderWidth={1}
              data-testid="popover-arrow-visual"
              className="visible absolute left-1/2 top-1/2 -ml-1 -mt-1 size-2 rounded-tl-sm border-b-transparent border-r-transparent"
              style={arrowPlacementStyle.visual}
            />
          </Box>
        )}
      </Box>
    );

    return isPortal
      ? createPortal(popoverContent, document.body)
      : popoverContent;
  },
);

Popover.displayName = 'Popover';
