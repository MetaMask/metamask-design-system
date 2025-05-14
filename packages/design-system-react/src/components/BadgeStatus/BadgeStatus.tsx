import React from 'react';

import { BadgeStatusSize } from '../../types';
import { twMerge } from '../../utils/tw-merge';

import {
  CLASSMAP_BADGESTATUS_STATUS_CIRCLE,
  CLASSMAP_BADGESTATUS_SIZE,
} from './BadgeStatus.constants';
import type { BadgeStatusProps } from './BadgeStatus.types';

export const BadgeStatus = React.forwardRef<HTMLDivElement, BadgeStatusProps>(
  (
    {
      status,
      size = BadgeStatusSize.Md,
      hasBorder = true,
      className,
      style,
      ...props
    },
    ref,
  ) => {
    const mergedClassName = twMerge(
      // Base styles
      'inline-flex rounded-full',
      // hasBorder style
      hasBorder ? 'border-2 border-background-default' : '',
      // Custom classes
      className,
    );

    const mergedCircleClassName = twMerge(
      // Base styles
      'z-10 rounded-full border-2',
      // Size styles
      CLASSMAP_BADGESTATUS_SIZE[size],
      // Circle with semantics style
      CLASSMAP_BADGESTATUS_STATUS_CIRCLE[status],
    );

    return (
      <div ref={ref} className={mergedClassName} style={style} {...props}>
        <div className={mergedCircleClassName} />
      </div>
    );
  },
);

BadgeStatus.displayName = 'BadgeStatus';
