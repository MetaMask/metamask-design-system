/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import React, { useState } from 'react';
import {
  ImageProps,
  ImageErrorEventData,
  NativeSyntheticEvent,
} from 'react-native';

import AvatarBase from '../../primitives/AvatarBase';
import ImageOrSvg from '../../primitives/ImageOrSvg';
import { DEFAULT_AVATARFAVICON_PROPS } from './AvatarFavicon.constants';
import type { AvatarFaviconProps } from './AvatarFavicon.types';

const AvatarFavicon = ({
  size,
  shape = DEFAULT_AVATARFAVICON_PROPS.shape,
  fallbackText,
  fallbackTextProps,
  twClassName,
  testID,
  style,
  width = DEFAULT_AVATARFAVICON_PROPS.width,
  height = DEFAULT_AVATARFAVICON_PROPS.height,
  name,
  imageProps,
  onImageError,
  onSvgError,
  ...restImageOrSvgProps
}: AvatarFaviconProps) => {
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

export default AvatarFavicon;
