import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useCallback } from 'react';
import { Pressable } from 'react-native';

import {
  Box,
  BoxAlignItems,
  BoxFlexDirection,
  BoxJustifyContent,
} from '../Box';
import { Icon, IconSize } from '../Icon';
import { FontWeight, Text, TextColor, TextVariant } from '../Text';

import type { ActionListItemProps } from './ActionListItem.types';

export const ActionListItem: React.FC<ActionListItemProps> = ({
  label,
  description,
  startAccessory,
  endAccessory,
  iconName,
  labelTextProps,
  descriptionTextProps,
  iconProps,
  isDisabled = false,
  onPress,
  pressableProps,
  twClassName,
  style,
  ...props
}) => {
  const tw = useTailwind();

  const renderLabel = () => {
    if (typeof label === 'string') {
      return (
        <Text
          variant={TextVariant.BodyMd}
          fontWeight={FontWeight.Medium}
          {...labelTextProps}
        >
          {label}
        </Text>
      );
    }
    return label;
  };

  const renderDescription = () => {
    if (!description) {
      return null;
    }

    if (typeof description === 'string') {
      return (
        <Text
          variant={TextVariant.BodySm}
          color={TextColor.TextAlternative}
          {...descriptionTextProps}
        >
          {description}
        </Text>
      );
    }
    return description;
  };

  const renderStartContent = () => {
    if (startAccessory) {
      return startAccessory;
    }

    if (iconName) {
      return (
        <Box
          alignItems={BoxAlignItems.Center}
          justifyContent={BoxJustifyContent.Center}
          twClassName="h-6"
        >
          <Icon name={iconName} size={IconSize.Md} {...iconProps} />
        </Box>
      );
    }

    return null;
  };

  const getPressableStyle = useCallback(
    ({ pressed }: { pressed: boolean }) => {
      const baseStyle = tw.style(
        'bg-default px-4 py-3',
        pressed && !isDisabled && 'bg-default-pressed',
        isDisabled && 'opacity-50',
        twClassName,
      );

      return style ? [baseStyle, style] : baseStyle;
    },
    [tw, isDisabled, twClassName, style],
  );

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      style={getPressableStyle}
      {...pressableProps}
      {...props}
    >
      <Box
        flexDirection={BoxFlexDirection.Row}
        alignItems={BoxAlignItems.Center}
        justifyContent={BoxJustifyContent.Between}
        gap={4}
      >
        {/* Left side content (start accessory/icon + label/description) */}
        <Box
          flexDirection={BoxFlexDirection.Row}
          alignItems={BoxAlignItems.Start}
          twClassName="flex-1"
          gap={4}
        >
          {renderStartContent()}
          <Box twClassName="flex-1">
            {renderLabel()}
            {renderDescription()}
          </Box>
        </Box>

        {/* End accessory */}
        {endAccessory && <Box>{endAccessory}</Box>}
      </Box>
    </Pressable>
  );
};

export default ActionListItem;
