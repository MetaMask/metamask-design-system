import { Slot } from '@radix-ui/react-slot';
import React from 'react';

import { AvatarBaseSize, AvatarBaseShape } from '../../types';
import { twMerge } from '../../utils/tw-merge';
import { Text, FontWeight, TextVariant, TextColor } from '../text';
import {
  TWCLASSMAP_AVATARBASE_SIZE_DIMENSION,
  TWCLASSMAP_AVATARBASE_HASBORDER_SIZE_DIMENSION,
  TWCLASSMAP_AVATARBASE_SIZE_BORDERRADIUSS_QUARE,
  TWCLASSMAP_AVATARBASE_SIZE_BORDER,
} from './AvatarBase.constants';
import type { AvatarBaseProps } from './AvatarBase.types';

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
      hasBorder = false,
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : 'div';

    const mergedClassName = twMerge(
      // Base styles
      'inline-flex items-center justify-center',
      shape === AvatarBaseShape.Circle
        ? 'rounded-full'
        : TWCLASSMAP_AVATARBASE_SIZE_BORDERRADIUSS_QUARE[size],
      'bg-muted',
      'overflow-hidden',
      // Size
      hasBorder
        ? TWCLASSMAP_AVATARBASE_HASBORDER_SIZE_DIMENSION[size]
        : TWCLASSMAP_AVATARBASE_SIZE_DIMENSION[size],
      // Border
      hasBorder && TWCLASSMAP_AVATARBASE_SIZE_BORDER[size],
      // Custom classes
      className,
    );

    return (
      <Component ref={ref} className={mergedClassName} style={style} {...props}>
        {children || (
          <Text
            variant={TextVariant.BodySm}
            fontWeight={FontWeight.Medium}
            color={TextColor.TextMuted}
            asChild
            className="uppercase"
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
