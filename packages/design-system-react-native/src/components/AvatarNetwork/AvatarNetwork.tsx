/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import React, { useState } from 'react';
import { ImageErrorEventData, NativeSyntheticEvent } from 'react-native';

import { AvatarBaseShape } from '../../types';
import AvatarBase from '../../primitives/AvatarBase';
import ImageOrSvg from '../../primitives/ImageOrSvg';
import type { AvatarNetworkProps } from './AvatarNetwork.types';

const AvatarNetwork = ({
  size,
  shape = AvatarBaseShape.Square,
  fallbackText,
  fallbackTextProps,
  hasBorder,
  hasSolidBackgroundColor,
  twClassName,
  testID,
  style,
  width = '100%',
  height = '100%',
  name,
  imageProps,
  onImageError,
  onSvgError,
  ...restImageOrSvgProps
}: AvatarNetworkProps) => {
  const [finalFallbackText, setFallbackText] = useState<string>('');

  const backupFallbackText = fallbackText || name?.[0] || '';
  const onImageErrorHandler = (
    e: NativeSyntheticEvent<ImageErrorEventData>,
  ) => {
    setFallbackText(backupFallbackText);
    onImageError?.(e);
  };

  const onSvgErrorHandler = (e: any) => {
    setFallbackText(backupFallbackText);
    onSvgError?.(e);
  };

  return (
    <AvatarBase
      size={size}
      shape={shape}
      fallbackText={finalFallbackText}
      fallbackTextProps={fallbackTextProps}
      hasBorder={hasBorder}
      hasSolidBackgroundColor={hasSolidBackgroundColor}
      twClassName={twClassName}
      testID={testID}
      style={style}
    >
      <ImageOrSvg
        width={width}
        height={height}
        imageProps={{
          resizeMode: 'contain',
          ...imageProps,
        }}
        onImageError={onImageErrorHandler}
        onSvgError={onSvgErrorHandler}
        {...restImageOrSvgProps}
      />
    </AvatarBase>
  );
};

export default AvatarNetwork;
