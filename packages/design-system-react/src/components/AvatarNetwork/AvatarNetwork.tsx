import React, { useState } from 'react';

import { AvatarNetworkSize, AvatarBaseShape } from '../../types';
import { AvatarBase } from '../AvatarBase';
import type { AvatarNetworkProps } from './AvatarNetwork.types';

export const AvatarNetwork = React.forwardRef<
  HTMLDivElement,
  AvatarNetworkProps
>(
  (
    {
      src,
      name,
      fallbackText,
      fallbackTextProps,
      className,
      size = AvatarNetworkSize.Md,
      imageProps,
      onImageError,
      ...props
    },
    ref,
  ) => {
    const [finalFallbackText, setFinalFallbackText] = useState<string>('');
    const backupFallbackText = fallbackText || name?.[0] || '';
    const altText = name || 'Network logo'; // TBC: Add localization for default text

    const onImageErrorHandler = (
      e: React.SyntheticEvent<HTMLImageElement, Event>,
    ) => {
      setFinalFallbackText(backupFallbackText);
      onImageError?.(e);
    };

    return (
      <AvatarBase
        ref={ref}
        shape={AvatarBaseShape.Square}
        size={size}
        className={className}
        fallbackText={src ? finalFallbackText : backupFallbackText}
        fallbackTextProps={fallbackTextProps}
        {...props}
      >
        {src && (
          <img
            src={src}
            alt={altText}
            className="h-full w-full object-contain"
            onError={onImageErrorHandler}
            {...imageProps}
          />
        )}
      </AvatarBase>
    );
  },
);

AvatarNetwork.displayName = 'AvatarNetwork';
