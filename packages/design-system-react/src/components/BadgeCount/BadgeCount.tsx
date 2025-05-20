import React, { forwardRef } from 'react';

import { BadgeCountSize } from '../../types';
import { twMerge } from '../../utils/tw-merge';
import { Text, TextColor, FontWeight } from '../Text';

import {
  MAP_BADGECOUNT_SIZE_TEXTVARIANT,
  TWCLASSMAP_BADGECOUNT_SIZE_CONTAINER,
} from './BadgeCount.constants';
import type { BadgeCountProps } from './BadgeCount.types';

export const BadgeCount = forwardRef<HTMLDivElement, BadgeCountProps>(
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
      'inline-flex items-center justify-center self-start rounded-lg bg-error-default',
      TWCLASSMAP_BADGECOUNT_SIZE_CONTAINER[size],
      className,
    );

    return (
      <div ref={ref} className={mergedClassName} style={style} {...props}>
        <Text
          variant={MAP_BADGECOUNT_SIZE_TEXTVARIANT[size]}
          color={TextColor.ErrorInverse}
          fontWeight={FontWeight.Medium}
          {...textProps}
          className={`${textProps?.className || ''}`}
          asChild
        >
          <span>{count > max ? `${max}+` : `${count}`}</span>
        </Text>
      </div>
    );
  },
);

BadgeCount.displayName = 'BadgeCount';
