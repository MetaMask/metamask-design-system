import React, { useState } from 'react';
import type { ImageErrorEventData, NativeSyntheticEvent } from 'react-native';

import { AvatarTokenSize, AvatarBaseShape } from '../../types';
import { AvatarBase } from '../AvatarBase';
import { ImageOrSvg } from '../temp-components/ImageOrSvg';

import type { AvatarTokenProps } from './AvatarToken.types';

export const AvatarToken = ({
  src,
  size = AvatarTokenSize.Md,
  name,
  fallbackText,
  fallbackTextProps,
  twClassName,
  imageOrSvgProps,
  ...props
}: AvatarTokenProps) => {
  const [finalFallbackText, setFallbackText] = useState<string>('');

  const backupFallbackText = fallbackText || name?.[0] || '';
  const onImageErrorHandler = (
    e: NativeSyntheticEvent<ImageErrorEventData>,
  ) => {
    setFallbackText(backupFallbackText);
    imageOrSvgProps?.onImageError?.(e);
  };

  const onSvgErrorHandler = (e: any) => {
    setFallbackText(backupFallbackText);
    imageOrSvgProps?.onSvgError?.(e);
  };

  return (
    <AvatarBase
      size={size}
      shape={AvatarBaseShape.Circle}
      fallbackText={finalFallbackText}
      fallbackTextProps={fallbackTextProps}
      twClassName={twClassName}
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
