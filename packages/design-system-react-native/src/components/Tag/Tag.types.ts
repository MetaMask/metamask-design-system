import type { ViewProps, StyleProp, ViewStyle } from 'react-native';

import type { IconName, IconProps } from '../Icon';
import type { TextProps } from '../Text';

import type { TagVariant } from './Tag.constants';

export type TagProps = {
  /**
   * Visual emphasis (background and default text color for label / plain-text children).
   */
  variant?: TagVariant;
  /**
   * Label string; when set, shown instead of string/number `children`. Matches Figma `Label` in Code Connect.
   */
  label?: string;
  /**
   * Content inside the tag. String and number children use the Tag `Text` styling; use `label` for a dedicated string prop.
   */
  children?: React.ReactNode;
  /**
   * Props passed to the `Text` wrapper when `children` is a string or number.
   */
  textProps?: Partial<TextProps>;
  /**
   * Optional prop to specify an icon to show at the start of the tag (`IconSize.Xs` unless overridden in `startIconProps`).
   */
  startIconName?: IconName;
  /**
   * Optional prop to pass additional properties to the start icon. You may set `name` here instead of `startIconName`.
   */
  startIconProps?: Partial<IconProps>;
  /**
   * Optional prop for a custom element to show at the start of the tag when no start icon is shown.
   */
  startAccessory?: React.ReactNode;
  /**
   * Optional prop to specify an icon to show at the end of the tag (`IconSize.Xs` unless overridden in `endIconProps`).
   */
  endIconName?: IconName;
  /**
   * Optional prop to pass additional properties to the end icon. You may set `name` here instead of `endIconName`.
   */
  endIconProps?: Partial<IconProps>;
  /**
   * Optional prop for a custom element to show at the end of the tag when no end icon is shown.
   */
  endAccessory?: React.ReactNode;
  /**
   * Additional Tailwind classes to be applied to the Tag container.
   */
  twClassName?: string;
  /**
   * Test identifier for selecting the component in tests.
   */
  testID?: string;
  /**
   * Optional container styles.
   */
  style?: StyleProp<ViewStyle>;
} & Omit<ViewProps, 'children' | 'style'>;
