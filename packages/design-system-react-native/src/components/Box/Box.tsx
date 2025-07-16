import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import { View } from 'react-native';

import {
  TWCLASSMAP_BOX_GAP,
  TWCLASSMAP_BOX_MARGIN,
  TWCLASSMAP_BOX_MARGIN_TOP,
  TWCLASSMAP_BOX_MARGIN_RIGHT,
  TWCLASSMAP_BOX_MARGIN_BOTTOM,
  TWCLASSMAP_BOX_MARGIN_LEFT,
  TWCLASSMAP_BOX_MARGIN_HORIZONTAL,
  TWCLASSMAP_BOX_MARGIN_VERTICAL,
  TWCLASSMAP_BOX_PADDING,
  TWCLASSMAP_BOX_PADDING_TOP,
  TWCLASSMAP_BOX_PADDING_RIGHT,
  TWCLASSMAP_BOX_PADDING_BOTTOM,
  TWCLASSMAP_BOX_PADDING_LEFT,
  TWCLASSMAP_BOX_PADDING_HORIZONTAL,
  TWCLASSMAP_BOX_PADDING_VERTICAL,
  TWCLASSMAP_BOX_BORDER_WIDTH,
  TWCLASSMAP_BOX_BORDER_RADIUS,
} from './Box.constants';
import type { BoxProps } from './Box.types';

export const Box = ({
  flexDirection,
  flexWrap,
  gap,
  alignItems,
  justifyContent,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  marginHorizontal,
  marginVertical,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingHorizontal,
  paddingVertical,
  borderWidth,
  borderColor,
  borderRadius,
  backgroundColor,
  twClassName = '',
  style,
  children,
  ...props
}: BoxProps) => {
  const tw = useTailwind();
  const twContainerClassNames = `
    flex
    ${flexDirection ?? ''} 
    ${flexWrap ?? ''} 
    ${gap !== undefined ? TWCLASSMAP_BOX_GAP[gap] : ''} 
    ${alignItems ?? ''} 
    ${justifyContent ?? ''}
    ${margin !== undefined ? TWCLASSMAP_BOX_MARGIN[margin] : ''}
    ${marginTop !== undefined ? TWCLASSMAP_BOX_MARGIN_TOP[marginTop] : ''}
    ${marginRight !== undefined ? TWCLASSMAP_BOX_MARGIN_RIGHT[marginRight] : ''}
    ${marginBottom !== undefined ? TWCLASSMAP_BOX_MARGIN_BOTTOM[marginBottom] : ''}
    ${marginLeft !== undefined ? TWCLASSMAP_BOX_MARGIN_LEFT[marginLeft] : ''}
    ${marginHorizontal !== undefined ? TWCLASSMAP_BOX_MARGIN_HORIZONTAL[marginHorizontal] : ''}
    ${marginVertical !== undefined ? TWCLASSMAP_BOX_MARGIN_VERTICAL[marginVertical] : ''}
    ${padding !== undefined ? TWCLASSMAP_BOX_PADDING[padding] : ''}
    ${paddingTop !== undefined ? TWCLASSMAP_BOX_PADDING_TOP[paddingTop] : ''}
    ${paddingRight !== undefined ? TWCLASSMAP_BOX_PADDING_RIGHT[paddingRight] : ''}
    ${paddingBottom !== undefined ? TWCLASSMAP_BOX_PADDING_BOTTOM[paddingBottom] : ''}
    ${paddingLeft !== undefined ? TWCLASSMAP_BOX_PADDING_LEFT[paddingLeft] : ''}
    ${paddingHorizontal !== undefined ? TWCLASSMAP_BOX_PADDING_HORIZONTAL[paddingHorizontal] : ''}
    ${paddingVertical !== undefined ? TWCLASSMAP_BOX_PADDING_VERTICAL[paddingVertical] : ''}
    ${borderWidth !== undefined ? TWCLASSMAP_BOX_BORDER_WIDTH[borderWidth] : ''}
    ${borderColor ?? ''}
    ${borderRadius ? TWCLASSMAP_BOX_BORDER_RADIUS[borderRadius] : ''}
    ${backgroundColor ?? ''}
    ${twClassName}`.trim();

  return (
    <View style={[tw`${twContainerClassNames}`, style]} {...props}>
      {children}
    </View>
  );
};
