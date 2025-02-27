/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, { useMemo } from 'react';

import {
  DEFAULT_AVATARICON_PROPS,
  MAP_AVATARICON_SIZE_ICONSIZE,
  MAP_AVATARICON_SEVERITY_ICONCOLOR,
} from './AvatarIcon.constants';
import type { AvatarIconProps } from './AvatarIcon.types';
import { generateAvatarIconContainerClassNames } from './AvatarIcon.utilities';
import Icon, { IconProps } from '../Icon';
import AvatarBase from '../../primitives/AvatarBase';

const AvatarIcon = ({
  size = DEFAULT_AVATARICON_PROPS.size,
  shape = DEFAULT_AVATARICON_PROPS.shape,
  severity = DEFAULT_AVATARICON_PROPS.severity,
  iconName,
  iconProps,
  twClassName = '',
  style,
  ...props
}: AvatarIconProps) => {
  const tw = useTailwind();
  const twContainerClassNames = useMemo(() => {
    return generateAvatarIconContainerClassNames({
      severity,
      twClassName,
    });
  }, [severity, twClassName]);

  return (
    <AvatarBase
      size={size}
      shape={shape}
      style={[tw`${twContainerClassNames}`, style]}
      accessibilityRole="image"
      {...props}
    >
      <Icon
        name={iconName}
        size={MAP_AVATARICON_SIZE_ICONSIZE[size]}
        color={MAP_AVATARICON_SEVERITY_ICONCOLOR[severity]}
        {...iconProps}
      />
    </AvatarBase>
  );
};

export default AvatarIcon;
