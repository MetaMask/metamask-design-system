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
  backgroundColor,
  className = '',
  style,
  children,
  ...props
}: BoxProps) => {
  const mergedClassName = twMerge(
    flexDirection ? 'flex' : '',
    flexDirection,
    flexWrap,
    gap !== undefined ? TWCLASSMAP_BOX_GAP[gap] : '',
    alignItems,
    justifyContent,
    backgroundColor,
    className,
  );

  return (
    <div className={mergedClassName} style={style} {...props}>
      {children}
    </div>
  );
};
