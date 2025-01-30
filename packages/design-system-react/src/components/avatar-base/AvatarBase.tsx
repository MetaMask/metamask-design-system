import { Slot } from '@radix-ui/react-slot';
import React from 'react';

import { twMerge } from '../../utils/tw-merge';
import { AVATAR_BASE_SIZE_CLASS_MAP } from './AvatarBase.constants';
import type { AvatarBaseProps } from './AvatarBase.types';
import { AvatarBaseSize } from './AvatarBase.types';

export const AvatarBase = React.forwardRef<HTMLDivElement, AvatarBaseProps>(
  (
    { children, className, size = AvatarBaseSize.Md, asChild, style, ...props },
    ref,
  ) => {
    const Component = asChild ? Slot : 'div';

    const mergedClassName = twMerge(
      // Base styles
      'inline-flex items-center justify-center',
      'rounded-full',
      'bg-alternative',
      'overflow-hidden',
      // Size
      AVATAR_BASE_SIZE_CLASS_MAP[size],
      // Custom classes
      className,
    );

    return (
      <Component ref={ref} className={mergedClassName} style={style} {...props}>
        {children}
      </Component>
    );
  },
);

AvatarBase.displayName = 'AvatarBase';
