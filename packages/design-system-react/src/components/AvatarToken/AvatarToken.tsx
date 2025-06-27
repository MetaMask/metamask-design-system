import React, { forwardRef, useState } from 'react';

import { AvatarTokenSize, AvatarBaseShape } from '../../types';
import { AvatarBase } from '../AvatarBase';

import type { AvatarTokenProps } from './AvatarToken.types';

export const AvatarToken = forwardRef<HTMLDivElement, AvatarTokenProps>(
  (
    {
      src,
      name = '',
      fallbackText,
      fallbackTextProps,
      className,
      size = AvatarTokenSize.Md,
      imageProps,
      ...props
    },
    ref,
  ) => {
    const [finalFallbackText, setFinalFallbackText] = useState<string>('');
    const backupFallbackText = fallbackText || name?.[0] || '';
    const altText = name || 'Token logo'; // TBC: Add localization for default text

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
            onError={onErrorHandler}
            {...imageProps}
          />
        )}
      </AvatarBase>
    );
  },
);

AvatarToken.displayName = 'AvatarToken';
