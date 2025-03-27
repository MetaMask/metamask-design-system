/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import React from 'react';

import { twMerge } from '../../utils/tw-merge';
import {
  CLASSMAP_BADGESTATUS_STATUS_CIRCLE,
  CLASSMAP_BADGESTATUS_SIZE,
} from './BadgeStatus.constants';
import type { BadgeStatusProps } from './BadgeStatus.types';
import { BadgeStatusSize } from './BadgeStatus.types';

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
      'inline-flex relative rounded-full',
      // hasBorder style
      hasBorder ? 'border-2 border-background-default' : '',
      // Custom classes
      className,
    );

    const mergedCircleClassName = twMerge(
      // Base styles
      'rounded-full border-2 z-10',
      // Size styles
      CLASSMAP_BADGESTATUS_SIZE[size],
      // Circle with semantics style
      CLASSMAP_BADGESTATUS_STATUS_CIRCLE[status],
    );

    return (
      <div ref={ref} className={mergedClassName} style={style} {...props}>
        <div className="bg-background-default absolute top-0 left-0 bottom-0 right-0 rounded-full" />
        <div className={mergedCircleClassName} />
      </div>
    );
  },
);

BadgeStatus.displayName = 'BadgeStatus';
