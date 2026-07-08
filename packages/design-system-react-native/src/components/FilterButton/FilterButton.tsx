import {
  FilterButtonSize,
  FilterButtonVariant,
  FilterButtonGroupContext,
  mergeTwClassName,
} from '@metamask/design-system-shared';
import React, { useContext } from 'react';
import type { GestureResponderEvent } from 'react-native';

import { ButtonPrimary } from '../Button/variants/ButtonPrimary';
import { ButtonSecondary } from '../Button/variants/ButtonSecondary';
import { ButtonTertiary } from '../Button/variants/ButtonTertiary';
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

  const sharedProps = {
    ...buttonBaseRest,
    size: effectiveSize,
    isFullWidth: effectiveIsFullWidth,
    isLoading,
    children,
    onPress: handlePress,
    style,
    twClassName,
  };

  if (!effectiveIsSelected) {
    return (
      <ButtonTertiary
        {...sharedProps}
        textProps={{
          ...textProps,
          twClassName: mergeTwClassName(
            TextColor.TextAlternative,
            textProps?.twClassName,
          ),
        }}
        startIconProps={{
          ...startIconProps,
          twClassName: mergeTwClassName(
            IconColor.IconAlternative,
            startIconProps?.twClassName,
          ),
        }}
        endIconProps={{
          ...endIconProps,
          twClassName: mergeTwClassName(
            IconColor.IconAlternative,
            endIconProps?.twClassName,
          ),
        }}
      />
    );
  }

  if (effectiveVariant === FilterButtonVariant.Primary) {
    return (
      <ButtonPrimary
        {...sharedProps}
        textProps={textProps}
        startIconProps={startIconProps}
        endIconProps={endIconProps}
      />
    );
  }

  return (
    <ButtonSecondary
      {...sharedProps}
      textProps={textProps}
      startIconProps={startIconProps}
      endIconProps={endIconProps}
    />
  );
};

FilterButton.displayName = 'FilterButton';
