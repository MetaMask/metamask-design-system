import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import { View } from 'react-native';

import type { BoxProps } from './Box.types';

/**
 * A generic container component that can be used to create UI elements with background color, padding, and border color support
 */
export const Box: React.FC<BoxProps> = ({
  children,
  backgroundColor,
  padding,
  borderColor,
  twClassName,
  style,
  ...props
}) => {
  const tw = useTailwind();
  // Convert numeric padding to Tailwind class
  const paddingClass = padding !== undefined ? `p-${padding}` : '';

  const twClassNames = `
    ${backgroundColor}
    ${paddingClass}
    ${borderColor}
    ${twClassName}
  `;

  return (
    <View style={[tw`${twClassNames}`, style]} {...props}>
      {children}
    </View>
  );
};
