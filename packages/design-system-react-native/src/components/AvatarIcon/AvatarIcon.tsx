/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';

import {
  AvatarIconSize,
  AvatarBaseShape,
  AvatarIconSeverity,
} from '../../types';
import AvatarBase from '../AvatarBase';
import Icon from '../Icon';
import {
  MAP_AVATARICON_SIZE_ICONSIZE,
  MAP_AVATARICON_SEVERITY_ICONCOLOR,
  TWCLASSMAP_AVATARICON_SEVERITY_BACKGROUNDCOLOR,
} from './AvatarIcon.constants';
import type { AvatarIconProps } from './AvatarIcon.types';

const AvatarIcon = ({
  size = AvatarIconSize.Md,
  shape = AvatarBaseShape.Circle,
  severity = AvatarIconSeverity.Neutral,
  iconName,
  iconProps,
  twClassName = '',
  style,
  ...props
}: AvatarIconProps) => {
  const tw = useTailwind();
  const twContainerClassNames = `
    ${TWCLASSMAP_AVATARICON_SEVERITY_BACKGROUNDCOLOR[severity]}
    ${twClassName}
  `;

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
