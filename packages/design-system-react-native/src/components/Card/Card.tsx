import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import { Pressable, View } from 'react-native';

import type { CardProps } from './Card.types';

export const Card = ({
  children,
  onPress,
  twClassName,
  pressableProps,
  style,
  ...props
}: CardProps) => {
  const tw = useTailwind();

  if (onPress) {
    return (
      <Pressable
        {...props}
        onPress={onPress}
        style={({ pressed }) => [
          tw.style(
            pressed
              ? 'p-4 rounded-2xl bg-background-section-pressed'
              : 'p-4 rounded-2xl bg-background-section',
            twClassName,
          ),
          style,
        ]}
        {...pressableProps}
      >
        {children}
      </Pressable>
    );
  }

  return (
    <View
      style={[
        tw.style('p-4 rounded-2xl bg-background-section', twClassName),
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
};
