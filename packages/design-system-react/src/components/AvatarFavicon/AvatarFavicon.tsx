import React from 'react';

import { AvatarFaviconSize, AvatarBaseShape } from '../../types';
import { AvatarBase } from '../AvatarBase';
import type { AvatarFaviconProps } from './AvatarFavicon.types';

export const AvatarFavicon = React.forwardRef<
  HTMLDivElement,
  AvatarFaviconProps
>(
  (
    {
      src,
      name,
      fallbackText,
      fallbackTextProps,
      className,
      size = AvatarFaviconSize.Md,
      imageProps,
      ...props
    },
    ref,
  ) => {
    const displayText = fallbackText || (name ? name[0] : '');
    const altText = name || 'Dapp logo'; // TBC: Add localization for default text

    return (
      <AvatarBase
        ref={ref}
        shape={AvatarBaseShape.Circle}
        size={size}
        className={className}
        fallbackText={displayText}
        fallbackTextProps={fallbackTextProps}
        {...props}
      >
        {src && (
          <img
            src={src}
            alt={altText}
            className="w-full h-full object-cover"
            {...imageProps}
          />
        )}
      </AvatarBase>
    );
  },
);

AvatarFavicon.displayName = 'AvatarFavicon';
