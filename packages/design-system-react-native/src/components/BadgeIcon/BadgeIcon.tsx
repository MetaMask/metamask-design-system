import { IconColor, IconSize } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import { View } from 'react-native';

import { Icon } from '../Icon';

import type { BadgeIconProps } from './BadgeIcon.types';

export const BadgeIcon = ({
  iconName,
  iconProps,
  twClassName,
  style,
  ...props
}: BadgeIconProps) => {
  const tw = useTailwind();

  return (
    <View
      accessibilityRole="image"
      {...props}
      style={[
        tw.style(
          'h-4 w-4 bg-icon-default rounded-full items-center justify-center',
          twClassName,
        ),
        style,
      ]}
    >
      <Icon
        color={IconColor.PrimaryInverse}
        {...iconProps}
        size={IconSize.Xs}
        name={iconName}
      />
    </View>
  );
};
