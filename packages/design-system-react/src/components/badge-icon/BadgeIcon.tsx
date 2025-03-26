/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import React from 'react';

import { twMerge } from '../../utils/tw-merge';
import { Icon, IconSize } from '../icon';
import type { BadgeIconProps } from './BadgeIcon.types';

export const BadgeIcon = React.forwardRef<HTMLDivElement, BadgeIconProps>(
  ({ iconName, iconProps, className = '', style, ...props }, ref) => {
    const mergedClassName = twMerge(
      'inline-flex h-4 w-4 bg-icon-default rounded-full items-center justify-center',
      className,
    );

    return (
      <div ref={ref} className={mergedClassName} style={style} {...props}>
        <Icon
          size={IconSize.Xs}
          name={iconName}
          {...iconProps}
          className={twMerge(
            iconProps?.color ? '' : 'text-background-default', // if color is provided, use it, otherwise use background default
            iconProps?.className,
          )}
        />
      </div>
    );
  },
);

BadgeIcon.displayName = 'BadgeIcon';
