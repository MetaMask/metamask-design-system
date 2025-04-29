import React from 'react';

import { AvatarIconSize, AvatarIconSeverity } from '../../types';
import { twMerge } from '../../utils/tw-merge';
import { AvatarBase, AvatarBaseShape } from '../AvatarBase';
import { Icon } from '../Icon';
import {
  MAP_AVATARICON_SIZE_ICONSIZE,
  TWCLASSMAP_AVATARICON_SEVERITY_BACKGROUNDCOLOR,
  MAP_AVATARICON_SEVERITY_ICONCOLOR,
} from './AvatarIcon.constants';
import type { AvatarIconProps } from './AvatarIcon.types';

export const AvatarIcon = React.forwardRef<HTMLDivElement, AvatarIconProps>(
  (
    {
      iconName,
      iconProps,
      size = AvatarIconSize.Md,
      severity = AvatarIconSeverity.Neutral,
      className,
      ...props
    },
    ref,
  ) => (
    <AvatarBase
      ref={ref}
      shape={AvatarBaseShape.Circle}
      size={size}
      className={twMerge(
        TWCLASSMAP_AVATARICON_SEVERITY_BACKGROUNDCOLOR[severity],
        className,
      )}
      {...props}
    >
      {iconName && (
        <Icon
          name={iconName}
          size={MAP_AVATARICON_SIZE_ICONSIZE[size]}
          color={MAP_AVATARICON_SEVERITY_ICONCOLOR[severity]}
          {...iconProps}
        />
      )}
    </AvatarBase>
  ),
);

AvatarIcon.displayName = 'AvatarIcon';
