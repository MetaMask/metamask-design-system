import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import { View } from 'react-native';

import type { BoxProps } from './Box.types';

/**
 * A generic container component that can be used to create UI elements with background color, padding, and border color support
 *
 * @param options0
 * @param options0.children
 * @param options0.backgroundColor
 * @param options0.padding
 * @param options0.borderColor
 * @param options0.twClassName
 * @param options0.style
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
