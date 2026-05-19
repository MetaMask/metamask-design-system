import {
  AvatarBaseShape,
  TokenAvatarSize,
} from '@metamask/design-system-shared';
import React from 'react';

import { resolveTokenOrNftAvatarBadge, withAvatarBadge } from '../Avatar';
import { AvatarImageOrSvg } from '../Avatar/variants/AvatarImageOrSvg';
import { AvatarInitials } from '../Avatar/variants/AvatarInitials';

import type { TokenAvatarProps } from './TokenAvatar.types';

export const TokenAvatar = ({
  src,
  name = '',
  fallbackText,
  size = TokenAvatarSize.Md,
  imageOrSvgProps,
  networkBadge,
  iconBadge,
  ...props
}: TokenAvatarProps) => {
  const fallbackLabel = fallbackText || name || '';
  const resolved = resolveTokenOrNftAvatarBadge({ networkBadge, iconBadge });

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

/** @deprecated Use TokenAvatar */
export const AvatarToken = TokenAvatar;
