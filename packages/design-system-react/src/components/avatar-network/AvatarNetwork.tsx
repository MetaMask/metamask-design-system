import React from 'react';

import { AvatarBase, AvatarBaseShape, AvatarBaseSize } from '../avatar-base';
import type { AvatarNetworkProps } from './AvatarNetwork.types';
import { AVATAR_NETWORK_TO_AVATAR_BASE_SIZE_MAP } from './AvatarNetwork.constants';

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
      size = AvatarBaseSize.Md,
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
        size={AVATAR_NETWORK_TO_AVATAR_BASE_SIZE_MAP[size]}
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
