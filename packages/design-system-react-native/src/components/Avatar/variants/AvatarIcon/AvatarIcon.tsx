import { AvatarIconSize } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';

import { AvatarBase } from '../../../AvatarBase';
import { Icon } from '../../../Icon';

import { MAP_AVATARICON_SIZE_ICONSIZE } from './AvatarIcon.constants';
import type { AvatarIconProps } from './AvatarIcon.types';

export const AvatarIcon = ({
  iconName,
  backgroundColor,
  iconColor,
  size = AvatarIconSize.Md,
  iconProps,
  twClassName,
  style,
  ...props
}: AvatarIconProps) => {
  const tw = useTailwind();

  return (
    <AvatarBase
      {...props}
      size={size}
      twClassName={backgroundColor}
      style={[tw.style(backgroundColor, twClassName), style]}
    >
      <Icon
        name={iconName}
        size={MAP_AVATARICON_SIZE_ICONSIZE[size]}
        color={iconColor}
        {...iconProps}
      />
    </AvatarBase>
  );
};
