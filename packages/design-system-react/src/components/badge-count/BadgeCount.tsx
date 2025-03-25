import React from 'react';

import { twMerge } from '../../utils/tw-merge';
import { Text, TextColor, FontWeight } from '../text';
import {
  MAP_BADGECOUNT_SIZE_TEXTVARIANT,
  TWCLASSMAP_BADGECOUNT_SIZE_CONTAINER,
  MAP_BADGECOUNT_SIZE_LINEHEIGHT,
} from './BadgeCount.constants';
import type { BadgeCountProps } from './BadgeCount.types';
import { BadgeCountSize } from './BadgeCount.types';

export const BadgeCount = React.forwardRef<HTMLDivElement, BadgeCountProps>(
  (
    {
      size = BadgeCountSize.Md,
      count,
      max = 99,
      textProps,
      className = '',
      style,
      ...props
    },
    ref,
  ) => {
    const mergedClassName = twMerge(
      // Base styles
      'inline-flex bg-error-default rounded-lg items-center justify-center self-start',
      TWCLASSMAP_BADGECOUNT_SIZE_CONTAINER[size],
      className,
    );

    return (
      <div ref={ref} className={mergedClassName} style={style} {...props}>
        <Text
          variant={MAP_BADGECOUNT_SIZE_TEXTVARIANT[size as BadgeCountSize]}
          color={TextColor.ErrorInverse}
          fontWeight={FontWeight.Medium}
          {...textProps}
          className={`${MAP_BADGECOUNT_SIZE_LINEHEIGHT[size]} ${textProps?.className || ''}`}
        >
          {count > max ? `${max}+` : `${count}`}
        </Text>
      </div>
    );
  },
);

BadgeCount.displayName = 'BadgeCount';
