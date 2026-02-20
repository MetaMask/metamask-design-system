import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import type { CardProps } from './Card.types';

export const Card = ({
  children,
  onPress,
  twClassName,
  touchableOpacityProps,
  style,
  ...props
}: CardProps) => {
  const tw = useTailwind();

  const cardStyle = [
    tw.style('p-4 rounded border border-default bg-default', twClassName),
    style,
  ];

  if (onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={cardStyle}
        {...touchableOpacityProps}
        {...props}
      >
        {children}
      </TouchableOpacity>
    );
  }

  return (
    <View style={cardStyle} {...props}>
      {children}
    </View>
  );
};
