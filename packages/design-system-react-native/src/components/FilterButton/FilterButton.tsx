import {
  ButtonVariant,
  FilterButtonSize,
  FilterButtonVariant,
  FilterButtonGroupContext,
  mergeTwClassName,
} from '@metamask/design-system-shared';
import React, { useContext } from 'react';
import type { GestureResponderEvent } from 'react-native';

import { Button } from '../Button';
import { IconColor } from '../Icon';
import { TextColor } from '../Text';

import type { FilterButtonProps } from './FilterButton.types';

export const FilterButton = ({
  children,
  textProps,
  startIconProps,
  endIconProps,
  value,
  isSelected = false,
  variant,
  isLoading = false,
  size,
  isFullWidth,
  twClassName = '',
  style,
  onPress,
  ...buttonBaseRest
}: FilterButtonProps) => {
  const filterButtonGroup = useContext(FilterButtonGroupContext);
  const usesGroupSelection = filterButtonGroup !== null && value !== undefined;

  const effectiveVariant =
    variant ?? filterButtonGroup?.variant ?? FilterButtonVariant.Primary;

  const effectiveSize = size ?? filterButtonGroup?.size ?? FilterButtonSize.Sm;

  const effectiveIsFullWidth =
    isFullWidth ?? filterButtonGroup?.isEqualWidth ?? false;

  const effectiveIsSelected = usesGroupSelection
    ? filterButtonGroup.value === value
    : isSelected;

  const handlePress = (event: GestureResponderEvent) => {
    if (
      usesGroupSelection &&
      filterButtonGroup !== null &&
      value !== undefined &&
      filterButtonGroup.value !== value
    ) {
      filterButtonGroup.onChange(value);
    }
    onPress?.(event);
  };

  const selectedButtonVariantByFilterVariant: Record<
    FilterButtonVariant,
    ButtonVariant
  > = {
    [FilterButtonVariant.Primary]: ButtonVariant.Primary,
    [FilterButtonVariant.Secondary]: ButtonVariant.Secondary,
  };

  const buttonVariant = effectiveIsSelected
    ? selectedButtonVariantByFilterVariant[effectiveVariant]
    : ButtonVariant.Tertiary;

  return (
    <Button
      {...buttonBaseRest}
      variant={buttonVariant}
      size={effectiveSize}
      isFullWidth={effectiveIsFullWidth}
      isLoading={isLoading}
      children={children}
      onPress={handlePress}
      style={style}
      twClassName={twClassName}
      textProps={
        effectiveIsSelected
          ? textProps
          : {
              ...textProps,
              twClassName: mergeTwClassName(
                TextColor.TextAlternative,
                textProps?.twClassName,
              ),
            }
      }
      startIconProps={
        effectiveIsSelected
          ? startIconProps
          : {
              ...startIconProps,
              twClassName: mergeTwClassName(
                IconColor.IconAlternative,
                startIconProps?.twClassName,
              ),
            }
      }
      endIconProps={
        effectiveIsSelected
          ? endIconProps
          : {
              ...endIconProps,
              twClassName: mergeTwClassName(
                IconColor.IconAlternative,
                endIconProps?.twClassName,
              ),
            }
      }
    />
  );
};

FilterButton.displayName = 'FilterButton';
