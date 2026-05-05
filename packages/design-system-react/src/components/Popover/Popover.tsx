import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePopper } from 'react-popper';

import { twMerge } from '../../utils/tw-merge';
import {
  Box,
  BoxAlignItems,
  BoxBackgroundColor,
  BoxBorderColor,
  BoxFlexDirection,
  BoxJustifyContent,
} from '../Box';

import {
  POPOVER_ARROW_CONTAINER_STYLE,
  POPOVER_ARROW_PLACEMENT_STYLES,
  POPOVER_ARROW_VISUAL_STYLE,
} from './Popover.constants';
import { PopoverPosition, PopoverRole } from './Popover.types';
import type { PopoverProps } from './Popover.types';

type ArrowPlacementKey = keyof typeof POPOVER_ARROW_PLACEMENT_STYLES;

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
      const handleEscKey = (event: KeyboardEvent) => {
        if (event.key === 'Escape' && onPressEscKey) {
          onPressEscKey();
        }
      };

      const handleClickOutside = (event: MouseEvent) => {
        if (
          isOpen &&
          popoverRef.current &&
          !popoverRef.current.contains(event.target as Node) &&
          !referenceElement?.contains(event.target as Node) &&
          onClickOutside
        ) {
          onClickOutside();
        }
      };

      document.addEventListener('keydown', handleEscKey, { capture: true });
      if (isOpen) {
        document.addEventListener('click', handleClickOutside, {
          capture: true,
        });
      }

      return () => {
        document.removeEventListener('keydown', handleEscKey, {
          capture: true,
        } as EventListenerOptions);
        document.removeEventListener('click', handleClickOutside, {
          capture: true,
        } as EventListenerOptions);
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
            'data-[popper-reference-hidden=true]:invisible data-[popper-reference-hidden=true]:pointer-events-none',
          className,
        )}
        {...attributes.popper}
        {...props}
        style={popoverStyle}
      >
        {children}
        {hasArrow && (
          <Box
            borderColor={BoxBorderColor.BorderMuted}
            flexDirection={BoxFlexDirection.Row}
            justifyContent={BoxJustifyContent.Center}
            alignItems={BoxAlignItems.Center}
            ref={setArrowElement}
            data-testid="popover-arrow"
            style={{
              ...POPOVER_ARROW_CONTAINER_STYLE,
              ...styles.arrow,
              ...arrowPlacementStyle?.container,
            }}
            {...attributes.arrow}
            {...arrowProps}
          >
            <span
              data-testid="popover-arrow-visual"
              style={{
                ...POPOVER_ARROW_VISUAL_STYLE,
                ...arrowPlacementStyle?.visual,
              }}
            />
          </Box>
        )}
      </Box>
    );

    return isPortal ? createPortal(popoverContent, document.body) : popoverContent;
  },
);

Popover.displayName = 'Popover';
