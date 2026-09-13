import {
  mergeTwClassName,
  SelectButtonEndArrow,
  SelectButtonSize,
  SelectButtonVariant,
} from '@metamask/design-system-shared';
import React from 'react';

import { Box } from '../Box';
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
    twClassName: mergeTwClassName('text-left', textProps?.twClassName),
  };

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
      contentWrapperProps={buttonBaseRest.contentWrapperProps}
      startAccessory={startAccessory}
      endAccessory={
        resolvedEndArrowDirection || !endAccessory ? undefined : (
          <Box twClassName="ml-auto">{endAccessory}</Box>
        )
      }
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
              twClassName: mergeTwClassName(
                'ml-auto',
                endArrowDirectionIconProps?.twClassName,
              ),
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
