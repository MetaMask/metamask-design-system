import { SegmentButtonVariant } from '@metamask/design-system-shared';
import React, { useContext } from 'react';
import type { GestureResponderEvent } from 'react-native';

import { ButtonBase } from '../ButtonBase';
import { IconColor, IconSize } from '../Icon';
import { SegmentGroupContext } from '../SegmentGroup/SegmentGroupContext';
import { FontWeight, TextColor, TextVariant } from '../Text';

import type { SegmentButtonProps } from './SegmentButton.types';

export const SegmentButton = ({
  children,
  textProps,
  startIconProps,
  endIconProps,
  value,
  isSelected = false,
  variant,
  isLoading = false,
  twClassName = '',
  style,
  onPress,
  ...buttonBaseRest
}: SegmentButtonProps) => {
  const segmentGroup = useContext(SegmentGroupContext);
  const usesGroupSelection = segmentGroup !== null && value !== undefined;

  const effectiveVariant =
    variant ?? segmentGroup?.variant ?? SegmentButtonVariant.Primary;

  const effectiveIsSelected = usesGroupSelection
    ? segmentGroup.value === value
    : isSelected;

  const getTextAndIconClassName = () => {
    if (
      effectiveVariant === SegmentButtonVariant.Primary &&
      effectiveIsSelected
    ) {
      return 'text-primary-inverse';
    }
    if (
      (effectiveVariant === SegmentButtonVariant.Primary &&
        !effectiveIsSelected) ||
      (effectiveVariant === SegmentButtonVariant.Secondary &&
        effectiveIsSelected)
    ) {
      return 'text-default';
    }
    return '';
  };

  const handlePress = (event: GestureResponderEvent) => {
    if (
      usesGroupSelection &&
      segmentGroup !== null &&
      value !== undefined &&
      segmentGroup.value !== value
    ) {
      segmentGroup.onChange(value);
    }
    onPress?.(event);
  };

  return (
    <ButtonBase
      {...buttonBaseRest}
      isLoading={isLoading}
      children={children}
      onPress={handlePress}
      textProps={{
        variant: TextVariant.BodyMd,
        fontWeight: FontWeight.Medium,
        numberOfLines: 1,
        ellipsizeMode: 'clip',
        ...(effectiveVariant === SegmentButtonVariant.Secondary &&
        !effectiveIsSelected
          ? { color: TextColor.TextAlternative }
          : {}),
        ...textProps,
      }}
      startIconProps={{
        size: IconSize.Sm,
        ...(effectiveVariant === SegmentButtonVariant.Secondary &&
        !effectiveIsSelected
          ? { color: IconColor.IconAlternative }
          : {}),
        ...startIconProps,
      }}
      endIconProps={{
        size: IconSize.Sm,
        ...(effectiveVariant === SegmentButtonVariant.Secondary &&
        !effectiveIsSelected
          ? { color: IconColor.IconAlternative }
          : {}),
        ...endIconProps,
      }}
      twClassName={(pressed) => {
        if (
          effectiveVariant === SegmentButtonVariant.Primary &&
          effectiveIsSelected
        ) {
          return `${pressed || isLoading ? 'bg-icon-default-pressed' : 'bg-icon-default'} ${
            typeof twClassName === 'function'
              ? twClassName(pressed)
              : twClassName
          }`;
        }

        if (
          (effectiveVariant === SegmentButtonVariant.Primary &&
            !effectiveIsSelected) ||
          (effectiveVariant === SegmentButtonVariant.Secondary &&
            effectiveIsSelected)
        ) {
          return `${pressed || isLoading ? 'bg-muted-pressed' : 'bg-muted'} ${
            typeof twClassName === 'function'
              ? twClassName(pressed)
              : twClassName
          }`;
        }

        return `${pressed || isLoading ? 'bg-pressed' : 'bg-transparent'} ${
          pressed || isLoading
            ? 'border-background-pressed'
            : 'border-transparent'
        } border-0 ${
          typeof twClassName === 'function' ? twClassName(pressed) : twClassName
        }`;
      }}
      textClassName={getTextAndIconClassName}
      iconClassName={getTextAndIconClassName}
      style={style}
    />
  );
};

SegmentButton.displayName = 'SegmentButton';
