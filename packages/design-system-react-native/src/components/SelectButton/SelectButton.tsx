import {
  SelectButtonEndArrow,
  SelectButtonVariant,
} from '@metamask/design-system-shared';
import React from 'react';

import { ButtonBase } from '../ButtonBase';
import { IconColor, IconSize } from '../Icon';
import { FontWeight, TextColor, TextVariant } from '../Text';

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
  endArrowDirectionIconProps,
  variant = SelectButtonVariant.Primary,
  isLoading = false,
  twClassName = '',
  style,
  ...buttonBaseRest
}: SelectButtonProps) => {
  const labelContent = value ?? placeholder;

  const resolvedEndArrowDirection = hideEndArrow
    ? undefined
    : endArrowDirection != null
      ? endArrowDirection
      : endAccessory
        ? undefined
        : SelectButtonEndArrow.Down;

  return (
    <ButtonBase
      {...buttonBaseRest}
      isDisabled={isDisabled}
      isLoading={isLoading}
      children={labelContent}
      textProps={{
        variant: TextVariant.BodyMd,
        fontWeight: FontWeight.Medium,
        numberOfLines: 1,
        ellipsizeMode: 'clip',
        ...(variant === SelectButtonVariant.Tertiary
          ? { color: TextColor.TextAlternative }
          : {}),
        ...textProps,
      }}
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
              size: IconSize.Sm,
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
          ? `min-w-0 ${pressed || isLoading ? 'bg-pressed' : 'bg-transparent'} ${
              pressed || isLoading
                ? 'border-background-pressed'
                : 'border-transparent'
            } border-0 ${
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
