import {
  AvatarBaseShape,
  AvatarIconSeverity,
  AvatarIconSize,
} from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';

import { AvatarIcon } from '../Avatar/variants/AvatarIcon';

import {
  MAP_ICONAVATAR_SEVERITY_ICONCOLOR,
  TWCLASSMAP_ICONAVATAR_SEVERITY_BACKGROUNDCOLOR,
} from './IconAvatar.constants';
import type { IconAvatarProps } from './IconAvatar.types';

export const IconAvatar = ({
  iconName,
  severity = AvatarIconSeverity.Neutral,
  size = AvatarIconSize.Md,
  shape = AvatarBaseShape.Circle,
  iconProps,
  twClassName,
  style,
  ...props
}: IconAvatarProps) => {
  const tw = useTailwind();
  const backgroundColor =
    TWCLASSMAP_ICONAVATAR_SEVERITY_BACKGROUNDCOLOR[severity];
  const iconColor = MAP_ICONAVATAR_SEVERITY_ICONCOLOR[severity];

  return (
    <AvatarIcon
      iconName={iconName}
      backgroundColor={backgroundColor}
      iconColor={iconColor}
      size={size}
      shape={shape}
      iconProps={iconProps}
      twClassName={twClassName}
      style={[tw.style(twClassName), style]}
      {...props}
    />
  );
};
