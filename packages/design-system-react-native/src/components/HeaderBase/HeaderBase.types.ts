// Third party dependencies.
import type { ReactNode } from 'react';
import type { ViewProps, StyleProp, ViewStyle } from 'react-native';

// External dependencies.
import type { ButtonIconProps } from '../ButtonIcon';
import type { TextProps } from '../Text';

/**
 * HeaderBase component props.
 *
 * Extends React Native's ViewProps to inherit standard props such as
 * `testID`, `accessibilityLabel`, and other View props.
 */
export type HeaderBaseProps = ViewProps & {
  /**
   * Title of the HeaderBase. Pass a string for automatic Text rendering,
   * or a ReactNode for custom content.
   */
  children?: ReactNode | string;
  /**
   * Optional style for the header container.
   */
  style?: StyleProp<ViewStyle>;
  /**
   * Optional prop to include content to be displayed before the title.
   * Takes priority over startButtonIconProps if both are provided.
   */
  startAccessory?: ReactNode;
  /**
   * Optional prop to include content to be displayed after the title.
   * Takes priority over endButtonIconProps if both are provided.
   */
  endAccessory?: ReactNode;
  /**
   * Optional ButtonIcon props to render a ButtonIcon as the start accessory.
   * Only used if startAccessory is not provided.
   * For multiple start-side actions, compose them explicitly with `startAccessory`.
   *
   * @default size: ButtonIconSize.Md
   */
  startButtonIconProps?: ButtonIconProps;
  /**
   * Optional array of ButtonIcon props to render multiple ButtonIcons as end accessories.
   * Rendered in reverse order (first item appears rightmost).
   * Only used if endAccessory is not provided.
   * This is the built-in multiple-action path for HeaderBase; for custom layouts,
   * use `endAccessory`.
   *
   * @default size: ButtonIconSize.Md for each
   */
  endButtonIconProps?: ButtonIconProps[];
  /**
   * Optional prop to include the top inset to make sure the header is visible
   * below device's notch.
   *
   * @default false
   */
  includesTopInset?: boolean;
  /**
   * Optional props to pass to the start accessory wrapper View.
   */
  startAccessoryWrapperProps?: ViewProps;
  /**
   * Optional props to pass to the end accessory wrapper View.
   */
  endAccessoryWrapperProps?: ViewProps;
  /**
   * Optional props passed to the Text component when children is a string.
   * Props are spread onto TextOrChildren `textProps` and can override default values.
   */
  textProps?: Omit<Partial<TextProps>, 'children'>;
  /**
   * Optional Tailwind class names for the header container.
   * Merged with default styles using tw.style().
   */
  twClassName?: string;
};
