import React from 'react';
import { twMerge } from '../../utils/tw-merge';

import type { BoxProps } from './Box.types';
import {
  TWCLASSMAP_BOX_GAP,
  TWCLASSMAP_BOX_MARGIN,
  TWCLASSMAP_BOX_MARGINTOP,
  TWCLASSMAP_BOX_MARGINBOTTOM,
  TWCLASSMAP_BOX_MARGINLEFT,
  TWCLASSMAP_BOX_MARGINRIGHT,
  TWCLASSMAP_BOX_PADDING,
  TWCLASSMAP_BOX_PADDINGTOP,
  TWCLASSMAP_BOX_PADDINGBOTTOM,
  TWCLASSMAP_BOX_PADDINGLEFT,
  TWCLASSMAP_BOX_PADDINGRIGHT,
  TWCLASSMAP_BOX_BORDERWIDTH,
  TWCLASSMAP_BOX_WIDTH,
  TWCLASSMAP_BOX_MINWIDTH,
  TWCLASSMAP_BOX_HEIGHT,
  TWCLASSMAP_BOX_MINHEIGHT,
} from './Box.constants';

export const Box = ({
  flexDirection,
  flexWrap,
  gap,
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  borderColor,
  borderWidth,
  borderRadius,
  borderStyle,
  alignItems,
  justifyContent,
  width,
  minWidth,
  height,
  minHeight,
  backgroundColor,
  className = '',
  style,
  children,
  ...props
}: BoxProps) => {
  const mergedClassName = twMerge(
    flexDirection,
    flexWrap,
    gap !== undefined ? TWCLASSMAP_BOX_GAP[gap] : '',
    margin !== undefined ? TWCLASSMAP_BOX_MARGIN[margin] : '',
    marginTop !== undefined ? TWCLASSMAP_BOX_MARGINTOP[marginTop] : '',
    marginBottom !== undefined ? TWCLASSMAP_BOX_MARGINBOTTOM[marginBottom] : '',
    marginLeft !== undefined ? TWCLASSMAP_BOX_MARGINLEFT[marginLeft] : '',
    marginRight !== undefined ? TWCLASSMAP_BOX_MARGINRIGHT[marginRight] : '',
    padding !== undefined ? TWCLASSMAP_BOX_PADDING[padding] : '',
    paddingTop !== undefined ? TWCLASSMAP_BOX_PADDINGTOP[paddingTop] : '',
    paddingBottom !== undefined
      ? TWCLASSMAP_BOX_PADDINGBOTTOM[paddingBottom]
      : '',
    paddingLeft !== undefined ? TWCLASSMAP_BOX_PADDINGLEFT[paddingLeft] : '',
    paddingRight !== undefined ? TWCLASSMAP_BOX_PADDINGRIGHT[paddingRight] : '',
    borderColor,
    borderWidth !== undefined ? TWCLASSMAP_BOX_BORDERWIDTH[borderWidth] : '',
    borderRadius,
    borderStyle,
    alignItems,
    justifyContent,
    width !== undefined ? TWCLASSMAP_BOX_WIDTH[width] : '',
    minWidth !== undefined ? TWCLASSMAP_BOX_MINWIDTH[minWidth] : '',
    height !== undefined ? TWCLASSMAP_BOX_HEIGHT[height] : '',
    minHeight !== undefined ? TWCLASSMAP_BOX_MINHEIGHT[minHeight] : '',
    backgroundColor,
    className,
  );

  return (
    <div className={mergedClassName} style={style} {...props}>
      {children}
    </div>
  );
};
