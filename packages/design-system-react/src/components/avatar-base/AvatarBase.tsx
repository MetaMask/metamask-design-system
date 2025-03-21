import { Slot, Slottable } from '@radix-ui/react-slot';
import React from 'react';

import { twMerge } from '../../utils/tw-merge';
import { Text, FontWeight, TextVariant, TextColor } from '../text';
import {
  TWCLASSMAP_AVATARBASE_SIZE_DIMENSION,
  TWCLASSMAP_AVATARBASE_SIZE_BORDERRADIUSS_QUARE,
  TWCLASSMAP_AVATARBASE_SIZE_BORDER,
} from './AvatarBase.constants';
import type { AvatarBaseProps } from './AvatarBase.types';
import { AvatarBaseShape, AvatarBaseSize } from '../../types';

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
      hasSolidBackgroundColor = false,
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : 'div';

    const mergedClassName = twMerge(
      // Base styles
      'relative inline-flex items-center justify-center',
      shape === AvatarBaseShape.Circle
        ? 'rounded-full'
        : TWCLASSMAP_AVATARBASE_SIZE_BORDERRADIUSS_QUARE[size],
      // hasSolidBackgroundColor
      hasSolidBackgroundColor ? 'bg-default' : 'bg-transparent',
      'overflow-hidden',
      // Size
      TWCLASSMAP_AVATARBASE_SIZE_DIMENSION[size],
      // Border
      hasBorder && TWCLASSMAP_AVATARBASE_SIZE_BORDER[size],
      // Custom classes
      className,
    );

    return (
      <Component ref={ref} className={mergedClassName} style={style} {...props}>
        <div className={'bg-muted absolute top-0 left-0 bottom-0 right-0'} />
        {children ? (
          <Slottable>{children}</Slottable>
        ) : (
          <Text
            variant={TextVariant.BodySm}
            fontWeight={FontWeight.Medium}
            color={TextColor.TextMuted}
            asChild
            className="uppercase z-10"
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
