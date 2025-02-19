/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import React, { useState } from 'react';
import {
  ImageProps,
  ImageErrorEventData,
  NativeSyntheticEvent,
} from 'react-native';

import AvatarBase from '../../primitives/AvatarBase';
import ImageOrSvg from '../../primitives/ImageOrSvg';
import { DEFAULT_AVATARTOKEN_PROPS } from './AvatarToken.constants';
import type { AvatarTokenProps } from './AvatarToken.types';

const AvatarToken = ({
  size,
  shape = DEFAULT_AVATARTOKEN_PROPS.shape,
  fallbackText,
  fallbackTextProps,
  twClassName,
  style,
  width = DEFAULT_AVATARTOKEN_PROPS.width,
  height = DEFAULT_AVATARTOKEN_PROPS.height,
  name,
  imageProps,
  onImageError,
  onSvgError,
  ...props
}: AvatarTokenProps) => {
  const [finalFallbackText, setFallbackText] = useState<string>('');

  // Merging default settings with passed in props
  const finalImageProps: Partial<ImageProps> = {
    ...DEFAULT_AVATARTOKEN_PROPS.imageProps,
    ...imageProps,
  };

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
      twClassName={twClassName}
      style={style}
    >
      <ImageOrSvg
        width={width}
        height={height}
        imageProps={finalImageProps}
        onImageError={onImageErrorHandler}
        onSvgError={onSvgErrorHandler}
        {...props}
      />
    </AvatarBase>
  );
};

export default AvatarToken;
