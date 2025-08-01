import React, { forwardRef, useState } from 'react';

import { AvatarFaviconSize, AvatarBaseShape } from '../../types';
import { AvatarBase } from '../AvatarBase';

import type { AvatarFaviconProps } from './AvatarFavicon.types';

export const AvatarFavicon = forwardRef<HTMLDivElement, AvatarFaviconProps>(
  (
    {
      src,
      name = '',
      fallbackText,
      fallbackTextProps,
      className,
      size = AvatarFaviconSize.Md,
      imageProps,
      ...props
    },
    ref,
  ) => {
    const [finalFallbackText, setFinalFallbackText] = useState<string>('');
    const backupFallbackText = fallbackText || name?.[0] || '';
    const altText = name || 'Dapp logo'; // TBC: Add localization for default text

    const onErrorHandler = (e: React.SyntheticEvent<HTMLImageElement>) => {
      setFinalFallbackText(backupFallbackText);
      imageProps?.onError?.(e);
    };

    return (
      <AvatarBase
        ref={ref}
        shape={AvatarBaseShape.Circle}
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
            className="size-full object-contain"
            {...imageProps}
            onError={onErrorHandler}
          />
        )}
      </AvatarBase>
    );
  },
);

AvatarFavicon.displayName = 'AvatarFavicon';
