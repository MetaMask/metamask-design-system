/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import React from 'react';

import { twMerge } from '../../utils/tw-merge';
import { Icon, IconSize, IconColor } from '../icon';
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
          color={IconColor.PrimaryInverse}
          {...iconProps}
          size={IconSize.Xs}
          name={iconName}
        />
      </div>
    );
  },
);

BadgeIcon.displayName = 'BadgeIcon';
