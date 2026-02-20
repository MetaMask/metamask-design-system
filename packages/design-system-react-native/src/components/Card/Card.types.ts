import type { ReactNode } from 'react';
import type { TouchableOpacityProps, ViewProps } from 'react-native';

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
   * When provided, the card wraps content in a TouchableOpacity.
   */
  onPress?: () => void;
  /**
   * Optional prop to add twrnc overriding classNames.
   */
  twClassName?: string;
  /**
   * Optional props to pass to the underlying TouchableOpacity when onPress is provided.
   */
  touchableOpacityProps?: Omit<
    TouchableOpacityProps,
    'onPress' | 'style' | 'children'
  >;
} & ViewProps;
