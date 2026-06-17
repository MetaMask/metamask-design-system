import {
  AvatarBaseShape,
  AvatarIconSeverity,
  AvatarIconSize,
} from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';

import { AvatarIcon } from '../Avatar/variants/AvatarIcon';

import {
  MAP_ALERTAVATAR_SEVERITY_ICONCOLOR,
  MAP_ALERTAVATAR_SEVERITY_ICONNAME,
  TWCLASSMAP_ALERTAVATAR_SEVERITY_BACKGROUNDCOLOR,
} from './AlertAvatar.constants';
import type { AlertAvatarProps } from './AlertAvatar.types';

export const AlertAvatar = ({
  iconName,
  severity = AvatarIconSeverity.Neutral,
  size = AvatarIconSize.Md,
  shape = AvatarBaseShape.Circle,
  iconProps,
  twClassName,
  style,
  ...props
}: AlertAvatarProps) => {
  const tw = useTailwind();
  const resolvedIconName =
    iconName ?? MAP_ALERTAVATAR_SEVERITY_ICONNAME[severity];
  const backgroundColor =
    TWCLASSMAP_ALERTAVATAR_SEVERITY_BACKGROUNDCOLOR[severity];
  const iconColor = MAP_ALERTAVATAR_SEVERITY_ICONCOLOR[severity];

  return (
    <AvatarIcon
      iconName={resolvedIconName}
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
