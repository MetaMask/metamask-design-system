import {
  AvatarBaseShape,
  AvatarBaseSize,
} from '@metamask/design-system-shared';
import React from 'react';

import { AvatarImageOrSvg } from '../Avatar/variants/AvatarImageOrSvg';
import { AvatarInitials } from '../Avatar/variants/AvatarInitials';

import type { SocialAvatarProps } from './SocialAvatar.types';

export const SocialAvatar = ({
  src,
  name,
  fallbackText,
  size = AvatarBaseSize.Md,
  imageOrSvgProps,
  ...props
}: SocialAvatarProps) => {
  const fallbackLabel = fallbackText || name || '';

  if (!src) {
    return (
      <AvatarInitials
        label={fallbackLabel}
        shape={AvatarBaseShape.Circle}
        size={size}
        {...props}
      />
    );
  }

  return (
    <AvatarImageOrSvg
      src={src}
      fallbackLabel={fallbackLabel}
      shape={AvatarBaseShape.Circle}
      size={size}
      imageOrSvgProps={imageOrSvgProps}
      {...props}
    />
  );
};
