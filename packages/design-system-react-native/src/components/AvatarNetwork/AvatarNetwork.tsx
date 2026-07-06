import {
  AvatarBaseShape,
  AvatarNetworkSize,
} from '@metamask/design-system-shared';
import React, { useState } from 'react';
import type { ImageErrorEvent } from 'react-native';

import { AvatarBase } from '../AvatarBase';
import { ImageOrSvg } from '../temp-components/ImageOrSvg';

import type { AvatarNetworkProps } from './AvatarNetwork.types';

export const AvatarNetwork = ({
  src,
  size = AvatarNetworkSize.Md,
  name,
  fallbackText,
  fallbackTextProps,
  imageOrSvgProps,
  ...props
}: AvatarNetworkProps) => {
  const [finalFallbackText, setFallbackText] = useState<string>('');

  const backupFallbackText = fallbackText || name?.[0] || '?';
  const onImageErrorHandler = (e: ImageErrorEvent) => {
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
      shape={AvatarBaseShape.Square}
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
            resizeMode: 'contain',
            ...imageOrSvgProps?.imageProps,
          }}
          onImageError={onImageErrorHandler}
          onSvgError={onSvgErrorHandler}
        />
      )}
    </AvatarBase>
  );
};
