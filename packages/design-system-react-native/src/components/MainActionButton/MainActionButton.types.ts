import type { ReactNode } from 'react';
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
   * Optional content rendered between the icon and the label.
   * Useful for supplementary content such as a balance or a badge.
   */
  children?: ReactNode;
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
    | 'children'
    | 'variant'
    | 'fontWeight'
    | 'color'
    | 'twClassName'
    | 'className'
  >;
  /**
   * Disables the button interaction and applies disabled styling.
   *
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Optional Tailwind classes to extend or override container styles.
   *
   * @deprecated Use `className` instead.
   */
  twClassName?: string;
  /**
   * Optional Tailwind classes. Merged after the component's own classes and `twClassName`, so `className` wins on conflicts.
   */
  className?: string;
  /**
   * Optional React Native style for the button container.
   */
  style?:
    | StyleProp<ViewStyle>
    | ((state: PressableStateCallbackType) => StyleProp<ViewStyle>);
} & Omit<PressableProps, 'children' | 'disabled' | 'style'>;
