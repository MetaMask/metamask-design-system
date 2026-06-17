import {
  ButtonBaseSize,
  FilterButtonVariant,
  FilterButtonGroupContext,
} from '@metamask/design-system-shared';
import React, { useContext } from 'react';
import type { GestureResponderEvent } from 'react-native';

import { ButtonBase } from '../ButtonBase';
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

  const effectiveSize = size ?? filterButtonGroup?.size ?? ButtonBaseSize.Sm;

  const effectiveIsFullWidth =
    isFullWidth ?? filterButtonGroup?.isEqualWidth ?? false;

  const effectiveIsSelected = usesGroupSelection
    ? filterButtonGroup.value === value
    : isSelected;

  const getTextAndIconClassName = () => {
    if (
      effectiveVariant === FilterButtonVariant.Primary &&
      effectiveIsSelected
    ) {
      return 'text-primary-inverse';
    }
    if (
      effectiveVariant === FilterButtonVariant.Secondary &&
      effectiveIsSelected
    ) {
      return 'text-default';
    }
    return '';
  };

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

  return (
    <ButtonBase
      {...buttonBaseRest}
      size={effectiveSize}
      isFullWidth={effectiveIsFullWidth}
      isLoading={isLoading}
      children={children}
      onPress={handlePress}
      textProps={{
        ...(!effectiveIsSelected ? { color: TextColor.TextAlternative } : {}),
        ...textProps,
      }}
      startIconProps={{
        ...(!effectiveIsSelected ? { color: IconColor.IconAlternative } : {}),
        ...startIconProps,
      }}
      endIconProps={{
        ...(!effectiveIsSelected ? { color: IconColor.IconAlternative } : {}),
        ...endIconProps,
      }}
      twClassName={(pressed) => {
        if (
          effectiveVariant === FilterButtonVariant.Primary &&
          effectiveIsSelected
        ) {
          return `${pressed || isLoading ? 'bg-icon-default-pressed' : 'bg-icon-default'} ${
            typeof twClassName === 'function'
              ? twClassName(pressed)
              : twClassName
          }`;
        }

        if (
          effectiveVariant === FilterButtonVariant.Secondary &&
          effectiveIsSelected
        ) {
          return `${pressed || isLoading ? 'bg-muted-pressed' : 'bg-muted'} ${
            typeof twClassName === 'function'
              ? twClassName(pressed)
              : twClassName
          }`;
        }

        return `${pressed || isLoading ? 'bg-pressed' : 'bg-transparent'} border-0 ${
          typeof twClassName === 'function' ? twClassName(pressed) : twClassName
        }`;
      }}
      textClassName={getTextAndIconClassName}
      iconClassName={getTextAndIconClassName}
      style={style}
    />
  );
};

FilterButton.displayName = 'FilterButton';
