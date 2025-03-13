/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import { View } from 'react-native';

import Icon from '../Icon';
import {
  DEFAULT_BADGEICON_PROPS,
  MAP_BADGEICON_VARIANT_ICONNAME,
} from './BadgeIcon.constants';
import type { BadgeIconProps } from './BadgeIcon.types';
import { BadgeIconVariant } from './BadgeIcon.types';

const BadgeIcon = (props: BadgeIconProps) => {
  const tw = useTailwind();
  const { variant, iconProps, twClassName = '', style, ...rest } = props;
  const twContainerClassNames =
    `h-4 w-4 bg-icon-default rounded-full items-center justify-center ${twClassName}`.trim();

  const finalIconName =
    variant === BadgeIconVariant.Custom
      ? props.iconName
      : MAP_BADGEICON_VARIANT_ICONNAME[variant];

  return (
    <View
      style={[tw`${twContainerClassNames}`, style]}
      accessibilityRole="image"
      {...props}
    >
      <Icon
        color={DEFAULT_BADGEICON_PROPS.iconProps.color} // IconSize.Xs - 12px
        {...iconProps}
        size={DEFAULT_BADGEICON_PROPS.iconProps.size} // IconColor.PrimaryInverse
        name={finalIconName}
      />
    </View>
  );
};

export default BadgeIcon;
