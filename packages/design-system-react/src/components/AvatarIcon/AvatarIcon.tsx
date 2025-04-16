import React from 'react';

import { AvatarIconSize, AvatarIconSeverity } from '../../types';
import { twMerge } from '../../utils/tw-merge';
import { AvatarBase, AvatarBaseShape } from '../AvatarBase';
import { Icon } from '../Icon';
import {
  AVATAR_ICON_SIZE_TO_ICON_SIZE_CLASSNAME_MAP,
  AVATAR_ICON_SEVERITY_CLASSNAME_MAP,
  AVATAR_ICON_TO_AVATAR_BASE_SIZE_MAP,
} from './AvatarIcon.constants';
import type { AvatarIconProps } from './AvatarIcon.types';

export const AvatarIcon = React.forwardRef<HTMLDivElement, AvatarIconProps>(
  (
    {
      iconName,
      iconProps,
      size = AvatarIconSize.Md,
      severity = AvatarIconSeverity.Default,
      className,
      ...props
    },
    ref,
  ) => {
    const baseSize = AVATAR_ICON_TO_AVATAR_BASE_SIZE_MAP[size];

    return (
      <AvatarBase
        ref={ref}
        shape={AvatarBaseShape.Circle}
        size={baseSize}
        className={twMerge(
          AVATAR_ICON_SEVERITY_CLASSNAME_MAP[severity].background,
          className,
        )}
        {...props}
      >
        {iconName && (
          <Icon
            name={iconName}
            size={AVATAR_ICON_SIZE_TO_ICON_SIZE_CLASSNAME_MAP[size]}
            color={AVATAR_ICON_SEVERITY_CLASSNAME_MAP[severity].iconColor}
            {...iconProps}
          />
        )}
      </AvatarBase>
    );
  },
);

AvatarIcon.displayName = 'AvatarIcon';
