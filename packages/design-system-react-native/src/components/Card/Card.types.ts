import type { ReactNode } from 'react';
import type { PressableProps, ViewProps } from 'react-native';

type CardBaseProps = {
  /**
   * Content to display inside the card.
   */
  children: ReactNode;
  /**
   * Optional prop to add twrnc overriding classNames.
   */
  twClassName?: string;
} & ViewProps;

type CardStaticProps = CardBaseProps & {
  onPress?: never;
  pressableProps?: never;
};

type CardInteractiveProps = CardBaseProps & {
  /**
   * Callback when the card is pressed.
   * When provided, the card renders as a Pressable with a pressed background state.
   */
  onPress: () => void;
  /**
   * Optional props to pass to the underlying Pressable.
   */
  pressableProps?: Omit<PressableProps, 'onPress' | 'style' | 'children'>;
};

/**
 * Card component props.
 */
export type CardProps = CardStaticProps | CardInteractiveProps;
