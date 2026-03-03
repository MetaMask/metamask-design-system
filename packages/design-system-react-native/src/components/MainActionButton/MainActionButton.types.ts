import type {
  PressableProps,
  PressableStateCallbackType,
  StyleProp,
  ViewStyle,
} from 'react-native';

import type { IconName } from '../Icon';

/**
 * MainActionButton component props.
 */
export type MainActionButtonProps = {
  /**
   * Icon name rendered above the label.
   */
  iconName: IconName;
  /**
   * Label text rendered below the icon.
   */
  label: string;
  /**
   * Disables the button interaction and applies disabled styling.
   *
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Optional Tailwind classes to extend or override container styles.
   */
  twClassName?: string | ((pressed: boolean) => string);
  /**
   * Optional React Native style for the button container.
   */
  style?:
    | StyleProp<ViewStyle>
    | ((state: PressableStateCallbackType) => StyleProp<ViewStyle>);
} & Omit<PressableProps, 'children' | 'disabled' | 'style'>;
