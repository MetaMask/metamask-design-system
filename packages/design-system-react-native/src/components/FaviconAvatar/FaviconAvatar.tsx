import {
  AvatarBaseShape,
  FaviconAvatarSize,
} from '@metamask/design-system-shared';
import React from 'react';

import { resolveFaviconAvatarBadge, withAvatarBadge } from '../Avatar';
import { AvatarImageOrSvg } from '../Avatar/variants/AvatarImageOrSvg';
import { AvatarInitials } from '../Avatar/variants/AvatarInitials';

import type { FaviconAvatarProps } from './FaviconAvatar.types';

export const FaviconAvatar = ({
  src,
  name,
  fallbackText,
  size = FaviconAvatarSize.Md,
  imageOrSvgProps,
  networkBadge,
  statusBadge,
  ...props
}: FaviconAvatarProps) => {
  const fallbackLabel = fallbackText || name || '';
  const resolved = resolveFaviconAvatarBadge({ networkBadge, statusBadge });

  const core = !src ? (
    <AvatarInitials
      label={fallbackLabel}
      shape={AvatarBaseShape.Circle}
      size={size}
      {...props}
    />
  ) : (
    <AvatarImageOrSvg
      src={src}
      fallbackLabel={fallbackLabel}
      shape={AvatarBaseShape.Circle}
      size={size}
      imageOrSvgProps={imageOrSvgProps}
      {...props}
    />
  );

  return withAvatarBadge(core, AvatarBaseShape.Circle, resolved);
};

/** @deprecated Use FaviconAvatar */
export const AvatarFavicon = FaviconAvatar;
