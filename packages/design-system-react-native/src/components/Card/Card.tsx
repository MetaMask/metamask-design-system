import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import { Pressable, View } from 'react-native';
import type {
  PressableProps,
  PressableStateCallbackType,
  StyleProp,
  ViewStyle,
} from 'react-native';

import type { CardProps } from './Card.types';

export const Card: React.FC<CardProps> = ({
  children,
  isInteractive = false,
  twClassName,
  style,
  ...props
}) => {
  const tw = useTailwind();

  const baseClassName = 'p-4 rounded-2xl bg-background-section';

  if (isInteractive) {
    const pressableStyle = style as PressableProps['style'];

    const getPressableStyle = ({
      pressed,
    }: PressableStateCallbackType): StyleProp<ViewStyle> => {
      const baseStyle = tw.style(
        baseClassName,
        pressed && 'bg-pressed',
        twClassName,
      );

      if (!pressableStyle) {
        return baseStyle;
      }

      const userStyle =
        typeof pressableStyle === 'function'
          ? pressableStyle({ pressed })
          : pressableStyle;

      return [baseStyle, userStyle];
    };

    return (
      <Pressable
        accessibilityRole="button"
        style={getPressableStyle}
        {...(props as Omit<PressableProps, 'children' | 'style'>)}
      >
        {children}
      </Pressable>
    );
  }

  return (
    <View
      style={[
        tw.style(baseClassName, twClassName),
        style as StyleProp<ViewStyle>,
      ]}
      {...(props as object)}
    >
      {children}
    </View>
  );
};

Card.displayName = 'Card';
