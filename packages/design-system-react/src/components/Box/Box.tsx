import React from 'react';

import { twMerge } from '../../utils/tw-merge';

import type { BoxProps } from './Box.types';

/**
 * A generic container component that can be used to create UI elements with background color, padding, and border color support
 */
export const Box: React.FC<BoxProps> = ({
  children,
  className,
  style,
  backgroundColor,
  padding,
  borderColor,
  ...props
}) => {
  // Convert numeric padding to Tailwind class
  const paddingClass = padding !== undefined ? `p-${padding}` : '';

  const mergedClassName = twMerge(
    backgroundColor,
    paddingClass,
    borderColor,
    className,
  );

  return (
    <div className={mergedClassName} style={style} {...props}>
      {children}
    </div>
  );
};
