/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import React, { useState } from 'react';
import {
  ImageProps,
  ImageErrorEventData,
  NativeSyntheticEvent,
} from 'react-native';

import AvatarBase from '../../primitives/AvatarBase';
import ImageOrSvg from '../../primitives/ImageOrSvg';
import { DEFAULT_AVATARNETWORK_PROPS } from './AvatarNetwork.constants';
import type { AvatarNetworkProps } from './AvatarNetwork.types';

const AvatarNetwork = ({
  size = DEFAULT_AVATARNETWORK_PROPS.size,
  shape = DEFAULT_AVATARNETWORK_PROPS.shape,
  fallbackText,
  fallbackTextProps,
  twClassName,
  style,
  width = DEFAULT_AVATARNETWORK_PROPS.width,
  height = DEFAULT_AVATARNETWORK_PROPS.height,
  name,
  imageProps,
  onImageError,
  onSvgError,
  ...props
}: AvatarNetworkProps) => {
  const [finalFallbackText, setFallbackText] = useState<string>('');

  // Merging default settings with passed in props
  const finalImageProps: Partial<ImageProps> = {
    ...DEFAULT_AVATARNETWORK_PROPS.imageProps,
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

export default AvatarNetwork;
