import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import { View } from 'react-native';

import { TWCLASSMAP_BOX_GAP } from './Box.constants';
import type { BoxProps } from './Box.types';

export const Box = ({
  flexDirection,
  flexWrap,
  gap,
  alignItems,
  justifyContent,
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
    ${twClassName}`.trim();

  return (
    <View style={[tw`${twContainerClassNames}`, style]} {...props}>
      {children}
    </View>
  );
};
