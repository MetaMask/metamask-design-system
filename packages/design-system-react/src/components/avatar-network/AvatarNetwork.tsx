import React from 'react';

import { AvatarNetworkSize, AvatarBaseShape } from '../../types';
import { AvatarBase } from '../avatar-base';
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
      ...props
    },
    ref,
  ) => {
    const displayText = fallbackText || (name ? name[0] : '');
    const altText = name || 'Network logo'; // TBC: Add localization for default text

    return (
      <AvatarBase
        ref={ref}
        shape={AvatarBaseShape.Square}
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

AvatarNetwork.displayName = 'AvatarNetwork';
