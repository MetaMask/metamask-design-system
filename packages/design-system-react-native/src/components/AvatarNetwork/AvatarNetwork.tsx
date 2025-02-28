/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import React, { useState } from 'react';
import { ImageErrorEventData, NativeSyntheticEvent } from 'react-native';

import AvatarBase from '../../primitives/AvatarBase';
import ImageOrSvg from '../../primitives/ImageOrSvg';
import { DEFAULT_AVATARNETWORK_PROPS } from './AvatarNetwork.constants';
import type { AvatarNetworkProps } from './AvatarNetwork.types';

const AvatarNetwork = ({
  size,
  shape = DEFAULT_AVATARNETWORK_PROPS.shape,
  fallbackText,
  fallbackTextProps,
  twClassName,
  testID,
  style,
  width = DEFAULT_AVATARNETWORK_PROPS.width,
  height = DEFAULT_AVATARNETWORK_PROPS.height,
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
