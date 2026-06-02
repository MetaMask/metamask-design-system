import {
  arrow,
  autoPlacement,
  autoUpdate,
  flip,
  hide,
  offset,
  shift,
  useFloating,
} from '@floating-ui/react-dom';
import type { Middleware, Placement } from '@floating-ui/react-dom';
import React, { forwardRef, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import { twMerge } from '../../utils/tw-merge';
import { Box, BoxBackgroundColor, BoxBorderColor } from '../Box';

import { POPOVER_ARROW_PLACEMENT_STYLES } from './Popover.constants';
import { PopoverPosition, PopoverRole } from './Popover.types';
import type { PopoverProps } from './Popover.types';

type ArrowPlacementKey = keyof typeof POPOVER_ARROW_PLACEMENT_STYLES;

const CAPTURE_EVENT_LISTENER_OPTIONS = { capture: true };

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

    const isAuto = position === PopoverPosition.Auto;
    const [offsetSkidding, offsetDistance] = offsetProp;

    const middleware: Middleware[] = [
      offset({ mainAxis: offsetDistance, crossAxis: offsetSkidding }),
    ];
    if (isAuto) {
      middleware.push(autoPlacement());
    } else if (flipEnabled) {
      middleware.push(flip());
    }
    if (isAuto || preventOverflow) {
      middleware.push(shift());
    }
    if (hasArrow) {
      middleware.push(arrow({ element: arrowRef }));
    }
    middleware.push(hide());

    const { refs, floatingStyles, placement, middlewareData } = useFloating({
      open: isOpen,
      whileElementsMounted: autoUpdate,
      placement: isAuto ? 'bottom' : (position as Placement),
      elements: { reference: referenceElement ?? null },
      middleware,
    });

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

    const arrowSide = placement.split('-')[0] as ArrowPlacementKey;
    const arrowPlacementStyle = POPOVER_ARROW_PLACEMENT_STYLES[arrowSide];
    const referenceHiddenValue = Boolean(middlewareData.hide?.referenceHidden);

    const popoverStyle: React.CSSProperties = {
      ...floatingStyles,
      width: matchWidth ? referenceElement?.clientWidth : 'auto',
      ...style,
    };

    const setPopoverRef = (element: HTMLDivElement | null) => {
      if (typeof ref === 'function') {
        ref(element);
      } else if (ref) {
        ref.current = element;
      }
      refs.setFloating(element);
      popoverRef.current = element;
    };

    const popoverContent = (
      <Box
        backgroundColor={BoxBackgroundColor.BackgroundDefault}
        borderColor={BoxBorderColor.BorderMuted}
        borderWidth={1}
        padding={4}
        role={role}
        ref={setPopoverRef}
        data-popper-placement={placement}
        data-popper-reference-hidden={referenceHiddenValue}
        className={twMerge(
          'rounded-lg shadow-md',
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
            ref={arrowRef}
            data-testid="popover-arrow"
            className="invisible absolute size-10"
            style={{
              left: middlewareData.arrow?.x,
              top: middlewareData.arrow?.y,
              ...arrowPlacementStyle.container,
            }}
            {...arrowProps}
          >
            <Box
              backgroundColor={BoxBackgroundColor.BackgroundDefault}
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
