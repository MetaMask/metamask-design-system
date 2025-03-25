/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import { View } from 'react-native';

import Icon, { IconSize, IconColor } from '../Icon';
import type { BadgeIconProps } from './BadgeIcon.types';

const BadgeIcon = ({
  iconName,
  iconProps,
  twClassName = '',
  style,
  ...props
}: BadgeIconProps) => {
  const tw = useTailwind();
  const twContainerClassNames = `
    h-4 w-4 
    bg-icon-default 
    rounded-full 
    items-center 
    justify-center 
    ${twClassName}
  `.trim();

  return (
    <View
      style={[tw`${twContainerClassNames}`, style]}
      accessibilityRole="image"
      {...props}
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

export default BadgeIcon;
