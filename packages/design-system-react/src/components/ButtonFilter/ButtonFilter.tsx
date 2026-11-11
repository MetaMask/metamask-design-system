import React, { forwardRef } from 'react';

import { twMerge } from '../../utils/tw-merge.js';
import { ButtonBase } from '../ButtonBase/index.js';

import type { ButtonFilterProps } from './ButtonFilter.types.js';

/**
 * @deprecated Use `FilterButton` instead. This component will be removed
 * in a future major version of the design system.
 */
export const ButtonFilter = forwardRef<HTMLButtonElement, ButtonFilterProps>(
  ({ className, isActive = false, ...props }, ref) => {
    const mergedClassName = twMerge(
      isActive
        ? 'bg-icon-default text-icon-inverse'
        : 'bg-background-muted text-default',
      className,
    );

    return <ButtonBase ref={ref} className={mergedClassName} {...props} />;
  },
);

ButtonFilter.displayName = 'ButtonFilter';
