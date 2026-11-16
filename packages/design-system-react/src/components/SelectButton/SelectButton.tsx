import {
  IconColor,
  SelectButtonEndArrow,
  SelectButtonSize,
  SelectButtonVariant,
  TextColor,
} from '@metamask/design-system-shared';
import React, { forwardRef } from 'react';

import { twMerge } from '../../utils/tw-merge';
import { ButtonBase } from '../ButtonBase';
import { TextAlign } from '../Text';

import { MAP_SELECTBUTTON_END_ARROW_DIRECTION_TO_ICON_NAME } from './SelectButton.constants';
import type { SelectButtonProps } from './SelectButton.types';

export const SelectButton = forwardRef<HTMLButtonElement, SelectButtonProps>(
  (
    {
      placeholder,
      value,
      textProps,
      startAccessory,
      endArrowDirection,
      endAccessory,
      hideEndArrow = false,
      isDisabled = false,
      isFullWidth = false,
      endArrowDirectionIconProps,
      variant = SelectButtonVariant.Primary,
      isLoading = false,
      size = SelectButtonSize.Sm,
      className,
      style,
      ...props
    },
    ref,
  ) => {
    const labelContent = value ?? placeholder;
    const hasLabel = Boolean(labelContent);
    const isTransparentVariant =
      variant === SelectButtonVariant.Secondary ||
      variant === SelectButtonVariant.Tertiary;
    const isInteractive = !isDisabled && !isLoading;

    if (
      process.env.NODE_ENV !== 'production' &&
      !hasLabel &&
      !props['aria-label']
    ) {
      console.warn(
        'SelectButton: no label is rendered because `value` and `placeholder` are missing or empty. Provide an `aria-label` so the control has an accessible name.',
      );
    }

    const resolvedTextProps = {
      ...(variant === SelectButtonVariant.Tertiary
        ? { color: TextColor.TextAlternative }
        : {}),
      textAlign: TextAlign.Left,
      // One-line ellipsis by default; callers override it through `textProps`.
      ellipsis: true,
      ...textProps,
      className: twMerge(
        'min-w-0',
        // `flex-1` sets grow and shrink. Pairing it with `grow` / `shrink`
        // makes twMerge drop one of them, so full width uses `flex-1` only.
        isFullWidth ? 'flex-1' : 'shrink grow-0',
        textProps?.className,
      ),
    };

    let resolvedEndArrowDirection: SelectButtonEndArrow | undefined;
    if (hideEndArrow) {
      resolvedEndArrowDirection = undefined;
    } else if (endArrowDirection !== undefined) {
      resolvedEndArrowDirection = endArrowDirection;
    } else if (endAccessory) {
      resolvedEndArrowDirection = undefined;
    } else {
      resolvedEndArrowDirection = SelectButtonEndArrow.Down;
    }

    const resolvedIconColor =
      endArrowDirectionIconProps?.color ??
      (variant === SelectButtonVariant.Tertiary
        ? IconColor.IconAlternative
        : IconColor.IconDefault);

    const mergedClassName = twMerge(
      'min-w-0',
      isTransparentVariant
        ? [
            'border-0 bg-transparent',
            variant === SelectButtonVariant.Tertiary
              ? 'text-alternative'
              : 'text-default',
            isLoading && 'bg-pressed',
            isInteractive && ['hover:bg-hover', 'active:bg-pressed'],
          ]
        : [
            'bg-muted text-default',
            isLoading && 'bg-muted-pressed',
            isInteractive && [
              'hover:bg-muted-hover',
              'active:bg-muted-pressed',
            ],
          ],
      isFullWidth && 'justify-start',
      'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-default focus-visible:ring-0',
      className,
    );

    return (
      <ButtonBase
        ref={ref}
        {...props}
        size={size}
        // ButtonBase treats `isDisabled={false}` as set, so a loading button
        // would stay enabled (`false ?? isLoading`). Pass `undefined` unless
        // the control is actually disabled, matching React Native's
        // `isDisabled || isLoading` pressable.
        isDisabled={isDisabled ? true : undefined}
        isFullWidth={isFullWidth}
        isLoading={isLoading}
        textProps={resolvedTextProps}
        startAccessory={startAccessory}
        endAccessory={resolvedEndArrowDirection ? undefined : endAccessory}
        endIconName={
          resolvedEndArrowDirection
            ? MAP_SELECTBUTTON_END_ARROW_DIRECTION_TO_ICON_NAME[
                resolvedEndArrowDirection
              ]
            : undefined
        }
        endIconProps={
          resolvedEndArrowDirection
            ? {
                ...endArrowDirectionIconProps,
                color: resolvedIconColor,
                className: twMerge(
                  'shrink-0',
                  resolvedIconColor,
                  endArrowDirectionIconProps?.className,
                ),
              }
            : undefined
        }
        className={mergedClassName}
        style={style}
      >
        {hasLabel ? labelContent : undefined}
      </ButtonBase>
    );
  },
);

SelectButton.displayName = 'SelectButton';
