import type { PressableProps } from 'react-native';

/**
 * Haptic feedback styles available for button press interactions.
 * Maps to `Haptics.impact()` styles from react-native-nitro-haptics.
 * Use `'none'` to disable haptic feedback.
 */
export type HapticFeedbackStyle =
  | 'light'
  | 'medium'
  | 'heavy'
  | 'soft'
  | 'rigid'
  | 'none';

/**
 * ButtonAnimated component props.
 */
export type ButtonAnimatedProps = PressableProps & {
  /**
   * Optional haptic feedback style triggered on press.
   *
   * @default 'light'
   */
  hapticFeedback?: HapticFeedbackStyle;
};
