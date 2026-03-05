import type {
  PressableProps,
  PressableStateCallbackType,
  StyleProp,
  ViewStyle,
} from 'react-native';

import type { IconName, IconProps } from '../Icon';
import type { TextProps } from '../Text';

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
   * Optional props forwarded to the internal Icon component.
   * Useful for test IDs and accessibility metadata.
   */
  iconProps?: Omit<Partial<IconProps>, 'name' | 'size' | 'color'>;
  /**
   * Optional props forwarded to the internal Text component.
   * Useful for test IDs and accessibility metadata.
   */
  labelProps?: Omit<
    Partial<TextProps>,
    'children' | 'variant' | 'fontWeight' | 'color' | 'twClassName'
  >;
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
