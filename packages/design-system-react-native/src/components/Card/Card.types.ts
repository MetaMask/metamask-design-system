import type { ReactNode } from 'react';
import type { PressableProps, ViewProps } from 'react-native';

/**
 * Card component props.
 */
export type CardProps = {
  /**
   * Content to display inside the card.
   */
  children: ReactNode;
  /**
   * Optional callback when the card is pressed.
   * When provided, the card renders as a Pressable with a pressed background state.
   */
  onPress?: () => void;
  /**
   * Optional prop to add twrnc overriding classNames.
   */
  twClassName?: string;
  /**
   * Optional props to pass to the underlying Pressable when onPress is provided.
   */
  pressableProps?: Omit<PressableProps, 'onPress' | 'style' | 'children'>;
} & ViewProps;
