import {
  mergeTwClassName,
  SelectButtonEndArrow,
  SelectButtonSize,
  SelectButtonVariant,
} from '@metamask/design-system-shared';
import React from 'react';

import { ButtonBase } from '../ButtonBase';
import { IconColor } from '../Icon';
import { TextColor } from '../Text';

import { MAP_SELECTBUTTON_END_ARROW_DIRECTION_TO_ICON_NAME } from './SelectButton.constants';
import type { SelectButtonProps } from './SelectButton.types';

export const SelectButton = ({
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
  twClassName = '',
  style,
  ...buttonBaseRest
}: SelectButtonProps) => {
  const labelContent = value ?? placeholder;
  const resolvedTextProps = {
    ...textProps,
    twClassName: mergeTwClassName(
      // Ensure the label actually grows to push the end arrow when full width.
      // ButtonBase applies 'grow-0' by default; add 'grow' here to override it.
      // Keep 'flex-1' for existing expectations/tests.
      isFullWidth ? 'text-left flex-1 grow' : 'text-left',
      textProps?.twClassName,
    ),
  };
  const resolvedContentWrapperProps = isFullWidth
    ? {
        ...buttonBaseRest.contentWrapperProps,
        twClassName: mergeTwClassName(
          'w-full',
          buttonBaseRest.contentWrapperProps?.twClassName,
        ),
      }
    : buttonBaseRest.contentWrapperProps;

  let resolvedEndArrowDirection: SelectButtonEndArrow | undefined;
  if (hideEndArrow) {
    resolvedEndArrowDirection = undefined;
  } else if (endArrowDirection !== undefined && endArrowDirection !== null) {
    resolvedEndArrowDirection = endArrowDirection;
  } else if (endAccessory) {
    resolvedEndArrowDirection = undefined;
  } else {
    resolvedEndArrowDirection = SelectButtonEndArrow.Down;
  }

  return (
    <ButtonBase
      {...buttonBaseRest}
      size={size}
      isDisabled={isDisabled}
      isFullWidth={isFullWidth}
      isLoading={isLoading}
      children={labelContent}
      textProps={{
        ...(variant === SelectButtonVariant.Tertiary
          ? { color: TextColor.TextAlternative }
          : {}),
        ...resolvedTextProps,
      }}
      contentWrapperProps={resolvedContentWrapperProps}
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
              ...(variant === SelectButtonVariant.Tertiary
                ? { color: IconColor.IconAlternative }
                : {}),
              ...endArrowDirectionIconProps,
            }
          : undefined
      }
      twClassName={(pressed) =>
        variant === SelectButtonVariant.Secondary ||
        variant === SelectButtonVariant.Tertiary
          ? `min-w-0 ${pressed || isLoading ? 'bg-pressed' : 'bg-transparent'} border-0 ${
              typeof twClassName === 'function'
                ? twClassName(pressed)
                : twClassName
            }`
          : `min-w-0 ${pressed || isLoading ? 'bg-muted-pressed' : 'bg-muted'} border-transparent border ${
              typeof twClassName === 'function'
                ? twClassName(pressed)
                : twClassName
            }`
      }
      textClassName={() =>
        variant === SelectButtonVariant.Tertiary ? '' : 'text-default'
      }
      iconClassName={() =>
        variant === SelectButtonVariant.Tertiary ? '' : 'text-default'
      }
      style={style}
    />
  );
};

SelectButton.displayName = 'SelectButton';
