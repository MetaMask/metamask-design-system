import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePopper } from 'react-popper';

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
      offset = [0, 8],
      flip = false,
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
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
      null,
    );
    const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(
      null,
    );
    const popoverRef = useRef<HTMLDivElement | null>(null);

    const isAuto = position === PopoverPosition.Auto;

    const { styles, attributes } = usePopper(referenceElement, popperElement, {
      placement: position,
      modifiers: [
        {
          name: 'preventOverflow',
          enabled: isAuto ? true : preventOverflow,
        },
        {
          name: 'flip',
          enabled: isAuto ? true : flip,
        },
        {
          name: 'arrow',
          enabled: hasArrow,
          options: { element: arrowElement },
        },
        {
          name: 'offset',
          options: { offset },
        },
      ],
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

    const placement = attributes.popper?.['data-popper-placement'];
    const arrowPlacementStyle = placement
      ? POPOVER_ARROW_PLACEMENT_STYLES[
          placement.split('-')[0] as ArrowPlacementKey
        ]
      : undefined;

    const popoverStyle: React.CSSProperties = {
      ...styles.popper,
      width: matchWidth ? referenceElement?.clientWidth : 'auto',
      ...style,
    };

    const setPopoverRef = (element: HTMLDivElement | null) => {
      if (typeof ref === 'function') {
        ref(element);
      } else if (ref) {
        ref.current = element;
      }
      setPopperElement(element);
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
        className={twMerge(
          'rounded-lg shadow-md',
          referenceHidden &&
            'data-[popper-reference-hidden=true]:pointer-events-none data-[popper-reference-hidden=true]:invisible',
          className,
        )}
        {...attributes.popper}
        {...props}
        style={popoverStyle}
      >
        {children}
        {hasArrow && (
          <Box
            ref={setArrowElement}
            data-testid="popover-arrow"
            className="invisible absolute size-10"
            style={{ ...styles.arrow, ...arrowPlacementStyle?.container }}
            {...attributes.arrow}
            {...arrowProps}
          >
            <Box
              backgroundColor={BoxBackgroundColor.BackgroundDefault}
              borderColor={BoxBorderColor.BorderMuted}
              borderWidth={1}
              data-testid="popover-arrow-visual"
              className="visible absolute left-1/2 top-1/2 -ml-1 -mt-1 size-2 rounded-tl-sm border-b-transparent border-r-transparent"
              style={arrowPlacementStyle?.visual}
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
