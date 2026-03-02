import type { ReactNode } from 'react';
import type { PressableProps, ViewProps } from 'react-native';

import type { IconName, IconProps } from '../Icon';
import type { TextProps } from '../Text';

/**
 * ActionListItem component props.
 *
 * Extends `ViewProps` so the root Pressable inherits standard React Native
 * props such as `testID` and `accessibilityLabel`. The `onPress` callback
 * is a top-level prop, while `pressableProps` provides additional
 * Pressable-specific overrides.
 */
export type ActionListItemProps = {
  /**
   * Label for the list item — can be a string or React node.
   * When a string, it is wrapped in a Text component with default styling.
   * When a ReactNode, it is rendered as-is and `labelTextProps` is ignored.
   */
  label: string | ReactNode;
  /**
   * Optional description for the list item — can be a string or React node.
   * When a string, it is wrapped in a Text component with default styling.
   * When a ReactNode, it is rendered as-is and `descriptionTextProps` is ignored.
   */
  description?: string | ReactNode;
  /**
   * Optional start accessory (left side) — React node.
   * Takes priority over `iconName` when both are provided.
   */
  startAccessory?: ReactNode;
  /**
   * Optional end accessory (right side) — React node.
   */
  endAccessory?: ReactNode;
  /**
   * Optional icon name from the design system icon library.
   * Renders an icon with `IconSize.Md`. Ignored when `startAccessory` is provided.
   */
  iconName?: IconName;
  /**
   * Optional props spread to the label Text component (only when label is a string).
   */
  labelTextProps?: Partial<TextProps>;
  /**
   * Optional props spread to the description Text component (only when description is a string).
   */
  descriptionTextProps?: Partial<TextProps>;
  /**
   * Optional props spread to the Icon component (only when iconName is provided).
   */
  iconProps?: Partial<IconProps>;
  /**
   * Whether the list item is disabled.
   * When true, applies 50% opacity and disables interactions.
   *
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Optional callback when the list item is pressed.
   */
  onPress?: PressableProps['onPress'];
  /**
   * Optional props to pass to the underlying Pressable.
   * Use this for Pressable-specific props such as testID for the interactive element.
   */
  pressableProps?: Omit<PressableProps, 'onPress' | 'disabled' | 'style'>;
  /**
   * Optional prop to add twrnc overriding classNames.
   */
  twClassName?: string;
} & Omit<ViewProps, 'children'>;
