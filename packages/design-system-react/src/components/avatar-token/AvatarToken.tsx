import React from 'react';

import { AvatarBase, AvatarBaseShape, AvatarBaseSize } from '../avatar-base';
import type { AvatarTokenProps } from './AvatarToken.types';

export const AvatarToken = React.forwardRef<HTMLDivElement, AvatarTokenProps>(
  (
    {
      src,
      name,
      fallbackText,
      fallbackTextProps,
      className,
      size = AvatarBaseSize.Md,
      imageProps,
      ...props
    },
    ref,
  ) => {
    const displayText = fallbackText || (name ? name[0] : '');
    const altText = name || 'Token logo'; // TBC: Add localization for default text

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

AvatarToken.displayName = 'AvatarToken';
