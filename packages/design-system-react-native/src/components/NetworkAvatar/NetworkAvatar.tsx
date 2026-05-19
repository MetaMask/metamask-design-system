import {
  AvatarBaseShape,
  AvatarBaseSize,
} from '@metamask/design-system-shared';
import React from 'react';

import { AvatarImageOrSvg } from '../Avatar/variants/AvatarImageOrSvg';
import { AvatarInitials } from '../Avatar/variants/AvatarInitials';

import type { NetworkAvatarProps } from './NetworkAvatar.types';

export const NetworkAvatar = ({
  src,
  name,
  fallbackText,
  size = AvatarBaseSize.Md,
  imageOrSvgProps,
  ...props
}: NetworkAvatarProps) => {
  const fallbackLabel = fallbackText || name || '';

  if (!src) {
    return (
      <AvatarInitials
        label={fallbackLabel}
        shape={AvatarBaseShape.Square}
        size={size}
        {...props}
      />
    );
  }

  return (
    <AvatarImageOrSvg
      src={src}
      fallbackLabel={fallbackLabel}
      shape={AvatarBaseShape.Square}
      size={size}
      imageOrSvgProps={imageOrSvgProps}
      {...props}
    />
  );
};

/** @deprecated Use NetworkAvatar */
export const AvatarNetwork = NetworkAvatar;
