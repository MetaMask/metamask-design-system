// Third party dependencies.
import type { ReactNode } from 'react';
import type { ViewProps, StyleProp, ViewStyle } from 'react-native';

// External dependencies.
import type { ButtonIconProps } from '../ButtonIcon';

/**
 * Variant options for HeaderBase component.
 * Controls title text size and alignment.
 */
export enum HeaderBaseVariant {
  /** Center-aligned title with HeadingSm text */
  Compact = 'compact',
  /** Left-aligned title with HeadingLg text */
  Display = 'display',
}

/**
 * HeaderBase component props.
 *
 * Extends React Native's ViewProps to inherit standard props such as
 * `testID`, `accessibilityLabel`, and other View props.
 */
export type HeaderBaseProps = ViewProps & {
  /**
   * Variant controlling header text size.
   *
   * @default HeaderBaseVariant.Compact
   */
  variant?: HeaderBaseVariant;
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
   *
   * @default size: ButtonIconSize.Md
   */
  startButtonIconProps?: ButtonIconProps;
  /**
   * Optional array of ButtonIcon props to render multiple ButtonIcons as end accessories.
   * Rendered in reverse order (first item appears rightmost).
   * Only used if endAccessory is not provided.
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
   * Optional test ID for the title Text element.
   * Only used when children is a string.
   */
  titleTestID?: string;
  /**
   * Optional Tailwind class names for the header container.
   * Merged with default styles using tw.style().
   */
  twClassName?: string;
};
