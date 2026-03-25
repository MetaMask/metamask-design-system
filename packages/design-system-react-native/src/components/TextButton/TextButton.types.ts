import type { TextProps } from '../Text';

/**
 * TextButton component props.
 *
 * Extends {@link Text} with link defaults (medium weight, `TextColor.PrimaryDefault`).
 * While pressed (`onPressIn`–`onPressOut`), color becomes `TextColor.PrimaryDefaultPressed`.
 * Does not use `Pressable`; pass `onPress` for the primary interaction.
 */
export type TextButtonProps = Omit<
  TextProps,
  'children' | 'color' | 'onPress'
> & {
  /**
   * Content shown as the label.
   */
  children: React.ReactNode;
  /**
   * Called when the user presses the label. Primary interaction for this control.
   */
  onPress?: TextProps['onPress'];
};
