/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import React, { useState } from 'react';
import { ImageErrorEventData, NativeSyntheticEvent } from 'react-native';

import { AvatarNetworkSize, AvatarBaseShape } from '../../types';
import AvatarBase from '../AvatarBase';
import ImageOrSvg from '../temp-components/ImageOrSvg';
import type { AvatarNetworkProps } from './AvatarNetwork.types';

const AvatarNetwork = ({
  src,
  size = AvatarNetworkSize.Md,
  name,
  fallbackText,
  fallbackTextProps,
  twClassName,
  imageOrSvgProps,
  ...props
}: AvatarNetworkProps) => {
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
      shape={AvatarBaseShape.Square}
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

export default AvatarNetwork;
