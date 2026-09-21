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
  accessibilityRole,
  ...props
}) => {
  const tw = useTailwind();
  const baseClassName = 'p-4 rounded-2xl bg-section';

  if (isInteractive) {
    const getPressableStyle = ({
      pressed,
    }: PressableStateCallbackType): StyleProp<ViewStyle> => {
      const baseStyle = tw.style(
        baseClassName,
        twClassName,
        pressed && 'bg-pressed',
      );
      const userStyle =
        typeof style === 'function' ? style({ pressed }) : style;

      return userStyle ? [baseStyle, userStyle] : baseStyle;
    };

    return (
      <Pressable
        accessibilityRole={accessibilityRole ?? 'button'}
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
      {...props}
    >
      {children}
    </View>
  );
};

Card.displayName = 'Card';
