import React, { useState } from 'react';
import type { ImageErrorEventData, NativeSyntheticEvent } from 'react-native';

import { AvatarBase } from '../../../AvatarBase';
import { ImageOrSvg } from '../../../temp-components/ImageOrSvg';
import { AvatarInitials } from '../AvatarInitials';

import type { AvatarImageOrSvgProps } from './AvatarImageOrSvg.types';

export const AvatarImageOrSvg = ({
  src,
  fallbackLabel = '',
  imageOrSvgProps,
  ...props
}: AvatarImageOrSvgProps) => {
  const [hasError, setHasError] = useState(false);

  const onImageErrorHandler = (
    e: NativeSyntheticEvent<ImageErrorEventData>,
  ) => {
    setHasError(true);
    imageOrSvgProps?.onImageError?.(e);
  };

  const onSvgErrorHandler = (e: Error) => {
    setHasError(true);
    imageOrSvgProps?.onSvgError?.(e);
  };

  if (hasError) {
    return <AvatarInitials label={fallbackLabel} {...props} />;
  }

  return (
    <AvatarBase {...props}>
      <ImageOrSvg
        src={src}
        width="100%"
        height="100%"
        {...imageOrSvgProps}
        imageProps={{
          resizeMode: 'contain',
          ...imageOrSvgProps?.imageProps,
        }}
        onImageError={onImageErrorHandler}
        onSvgError={onSvgErrorHandler}
      />
    </AvatarBase>
  );
};
