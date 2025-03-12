/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import React, { useState } from 'react';
import { ImageErrorEventData, NativeSyntheticEvent } from 'react-native';

import AvatarBase from '../../primitives/AvatarBase';
import ImageOrSvg from '../../primitives/ImageOrSvg';
import { DEFAULT_AVATARTOKEN_PROPS } from './AvatarToken.constants';
import type { AvatarTokenProps } from './AvatarToken.types';

const AvatarToken = ({
  size,
  shape = DEFAULT_AVATARTOKEN_PROPS.shape,
  fallbackText,
  fallbackTextProps,
  hasBorder,
  hasSolidBackgroundColor,
  twClassName,
  testID,
  style,
  width = DEFAULT_AVATARTOKEN_PROPS.width,
  height = DEFAULT_AVATARTOKEN_PROPS.height,
  name,
  imageProps,
  onImageError,
  onSvgError,
  ...restImageOrSvgProps
}: AvatarTokenProps) => {
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

export default AvatarToken;
