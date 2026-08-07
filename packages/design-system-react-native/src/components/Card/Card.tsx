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
    tw.style('p-3 rounded-xl bg-section', twClassName),
    style,
  ];

  if (onPress) {
    return (
      <TouchableOpacity
        {...props}
        onPress={onPress}
        style={cardStyle}
        {...touchableOpacityProps}
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
