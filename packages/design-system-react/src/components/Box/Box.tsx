import React from 'react';

import { twMerge } from '../../utils/tw-merge';

import { TWCLASSMAP_BOX_GAP } from './Box.constants';
import type { BoxProps } from './Box.types';

export const Box = ({
  flexDirection,
  flexWrap,
  gap,
  alignItems,
  justifyContent,
  className = '',
  style,
  children,
  ...props
}: BoxProps) => {
  const mergedClassName = twMerge(
    'flex',
    flexDirection,
    flexWrap,
    gap !== undefined ? TWCLASSMAP_BOX_GAP[gap] : '',
    alignItems,
    justifyContent,
    className,
  );

  return (
    <div className={mergedClassName} style={style} {...props}>
      {children}
    </div>
  );
};
