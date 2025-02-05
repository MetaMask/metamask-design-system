import { Slot } from '@radix-ui/react-slot';
import React from 'react';

import { twMerge } from '../../utils/tw-merge';
import { Text, FontWeight } from '..';
import {
  AVATAR_BASE_SIZE_CLASS_MAP,
  AVATAR_BASE_SIZE_TO_TEXT_VARIANT_MAP,
} from './AvatarBase.constants';
import type { AvatarBaseProps } from './AvatarBase.types';
import { AvatarBaseShape, AvatarBaseSize } from './AvatarBase.types';

export const AvatarBase = React.forwardRef<HTMLDivElement, AvatarBaseProps>(
  (
    {
      children,
      fallbackText,
      fallbackTextProps,
      className,
      size = AvatarBaseSize.Md,
      shape = AvatarBaseShape.Circle,
      asChild,
      style,
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : 'div';

    const mergedClassName = twMerge(
      // Base styles
      'inline-flex items-center justify-center',
      shape === AvatarBaseShape.Circle ? 'rounded-full' : 'rounded-lg',
      'bg-muted',
      'overflow-hidden',
      // Size
      AVATAR_BASE_SIZE_CLASS_MAP[size],
      // Custom classes
      className,
    );

    return (
      <Component ref={ref} className={mergedClassName} style={style} {...props}>
        {children || (
          <Text
            variant={AVATAR_BASE_SIZE_TO_TEXT_VARIANT_MAP[size]}
            fontWeight={FontWeight.Bold}
            asChild
            {...fallbackTextProps}
          >
            {/* asChild prop renders Text component as a span, it does not create an additional element */}
            <span>{fallbackText}</span>
          </Text>
        )}
      </Component>
    );
  },
);

AvatarBase.displayName = 'AvatarBase';
