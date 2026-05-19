import {
  AvatarBaseShape,
  AvatarBaseSize,
} from '@metamask/design-system-shared';
import React from 'react';

import { resolveTokenOrNftAvatarBadge, withAvatarBadge } from '../Avatar';
import { AvatarImageOrSvg } from '../Avatar/variants/AvatarImageOrSvg';
import { AvatarInitials } from '../Avatar/variants/AvatarInitials';

import type { NFTAvatarProps } from './NFTAvatar.types';

export const NFTAvatar = ({
  src,
  name,
  fallbackText,
  size = AvatarBaseSize.Md,
  imageOrSvgProps,
  networkBadge,
  iconBadge,
  ...props
}: NFTAvatarProps) => {
  const fallbackLabel = fallbackText || name || '';
  const resolved = resolveTokenOrNftAvatarBadge({ networkBadge, iconBadge });
  const shape = AvatarBaseShape.Square;

  const core = !src ? (
    <AvatarInitials
      label={fallbackLabel}
      shape={shape}
      size={size}
      {...props}
    />
  ) : (
    <AvatarImageOrSvg
      src={src}
      fallbackLabel={fallbackLabel}
      shape={shape}
      size={size}
      imageOrSvgProps={imageOrSvgProps}
      {...props}
    />
  );

  return withAvatarBadge(core, shape, resolved);
};
