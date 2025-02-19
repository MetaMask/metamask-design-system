/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import React from 'react';
import { ImageProps } from 'react-native';

import AvatarBase from '../../primitives/AvatarBase';
import ImageOrSvg from '../../primitives/ImageOrSvg';
import { DEFAULT_AVATARFAVICON_PROPS } from './AvatarFavicon.constants';
import type { AvatarFaviconProps } from './AvatarFavicon.types';

const AvatarFavicon = ({
  size = DEFAULT_AVATARFAVICON_PROPS.size,
  shape = DEFAULT_AVATARFAVICON_PROPS.shape,
  fallbackText,
  fallbackTextProps,
  twClassName,
  style,
  width = DEFAULT_AVATARFAVICON_PROPS.width,
  height = DEFAULT_AVATARFAVICON_PROPS.height,
  imageProps,
  ...props
}: AvatarFaviconProps) => {
  // Merging default settings with passed in props
  const finalImageProps: Partial<ImageProps> = {
    ...DEFAULT_AVATARFAVICON_PROPS.imageProps,
    ...imageProps,
  };

  return (
    <AvatarBase
      size={size}
      shape={shape}
      fallbackText={fallbackText}
      fallbackTextProps={fallbackTextProps}
      twClassName={twClassName}
      style={style}
    >
      <ImageOrSvg
        width={width}
        height={height}
        imageProps={finalImageProps}
        {...props}
      />
    </AvatarBase>
  );
};

export default AvatarFavicon;
