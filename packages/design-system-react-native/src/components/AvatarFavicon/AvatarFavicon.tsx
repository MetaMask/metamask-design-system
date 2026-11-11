import {
  AvatarBaseShape,
  AvatarFaviconSize,
} from '@metamask/design-system-shared';
import type { ImageErrorEventData } from 'expo-image';
import React, { useState } from 'react';

import { AvatarBase } from '../AvatarBase/index.js';
import { ImageOrSvg } from '../temp-components/ImageOrSvg/index.js';

import type { AvatarFaviconProps } from './AvatarFavicon.types.js';

export const AvatarFavicon = ({
  src,
  size = AvatarFaviconSize.Md,
  name,
  fallbackText,
  fallbackTextProps,
  imageOrSvgProps,
  ...props
}: AvatarFaviconProps) => {
  const [finalFallbackText, setFallbackText] = useState<string>('');

  const backupFallbackText = fallbackText || name?.[0] || '?';
  const onImageErrorHandler = (e: ImageErrorEventData) => {
    setFallbackText(backupFallbackText);
    imageOrSvgProps?.onImageError?.(e);
  };

  const onSvgErrorHandler = (e: Error) => {
    setFallbackText(backupFallbackText);
    imageOrSvgProps?.onSvgError?.(e);
  };

  return (
    <AvatarBase
      size={size}
      shape={AvatarBaseShape.Circle}
      fallbackText={src ? finalFallbackText : backupFallbackText}
      fallbackTextProps={fallbackTextProps}
      {...props}
    >
      {src && (
        <ImageOrSvg
          src={src}
          width={'100%'}
          height={'100%'}
          {...imageOrSvgProps}
          imageProps={{
            // Raster favicons. `cover` fills the circle; `contain` letterboxes
            // non-square assets and lets the avatar background show in the gaps.
            contentFit: 'cover',
            ...imageOrSvgProps?.imageProps,
          }}
          svgProps={{
            // SVG ignores contentFit. `slice` is the SVG equivalent of cover.
            preserveAspectRatio: 'xMidYMid slice',
            ...imageOrSvgProps?.svgProps,
          }}
          onImageError={onImageErrorHandler}
          onSvgError={onSvgErrorHandler}
        />
      )}
    </AvatarBase>
  );
};
