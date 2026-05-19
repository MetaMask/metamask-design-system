import {
  AvatarBaseShape,
  AvatarBaseSize,
} from '@metamask/design-system-shared';
import React from 'react';

import { AvatarImageOrSvg } from '../Avatar/variants/AvatarImageOrSvg';
import { AvatarInitials } from '../Avatar/variants/AvatarInitials';

import type { PredictionsAvatarProps } from './PredictionsAvatar.types';

export const PredictionsAvatar = ({
  src,
  name,
  fallbackText,
  size = AvatarBaseSize.Md,
  imageOrSvgProps,
  ...props
}: PredictionsAvatarProps) => {
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
