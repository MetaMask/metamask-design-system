import {
  AvatarBaseShape,
  AvatarTokenSize,
} from '@metamask/design-system-shared';
import type { ImageErrorEventData } from 'expo-image';
import React, { useState } from 'react';

import { AvatarBase } from '../AvatarBase';
import { ImageOrSvg } from '../temp-components/ImageOrSvg';

import type { AvatarTokenProps } from './AvatarToken.types';

export const AvatarToken = ({
  src,
  size = AvatarTokenSize.Md,
  name,
  fallbackText,
  fallbackTextProps,
  imageOrSvgProps,
  ...props
}: AvatarTokenProps) => {
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
            contentFit: 'contain',
            ...imageOrSvgProps?.imageProps,
          }}
          onImageError={onImageErrorHandler}
          onSvgError={onSvgErrorHandler}
        />
      )}
    </AvatarBase>
  );
};
