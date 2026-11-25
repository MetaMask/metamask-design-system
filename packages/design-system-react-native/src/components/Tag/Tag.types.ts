import type { TagPropsShared } from '@metamask/design-system-shared';
import type { ViewProps, StyleProp, ViewStyle } from 'react-native';

import type { IconName, IconProps } from '../Icon';
import type { TextProps } from '../Text';

/**
 * Tag component props (React Native platform-specific).
 * Extends shared props from @metamask/design-system-shared with React Native specific platform concerns.
 */
export type TagProps = TagPropsShared & {
  /**
   * Optional prop to specify an icon to show at the start of the tag (`IconSize.Xs` unless overridden in `startIconProps`).
   */
  startIconName?: IconName;
  /**
   * Optional prop to pass additional properties to the start icon. You may set `name` here instead of `startIconName`.
   */
  startIconProps?: Partial<IconProps>;
  /**
   * Optional prop to specify an icon to show at the end of the tag (`IconSize.Xs` unless overridden in `endIconProps`).
   */
  endIconName?: IconName;
  /**
   * Optional prop to pass additional properties to the end icon. You may set `name` here instead of `endIconName`.
   */
  endIconProps?: Partial<IconProps>;
  /**
   * Optional props to be passed to the Text component used by string children. Merged over the tag defaults (`BodyXs`, medium weight, severity-based color), so values set here take precedence.
   */
  textProps?: Partial<TextProps>;
  /**
   * Additional Tailwind classes to be applied to the Tag container.
   *
   * @deprecated Use `className` instead.
   */
  twClassName?: string;
  /**
   * Optional Tailwind classes. Merged after the component's own classes and `twClassName`, so `className` wins on conflicts.
   */
  className?: string;
  /**
   * Test identifier for selecting the component in tests.
   */
  testID?: string;
  /**
   * Optional container styles.
   */
  style?: StyleProp<ViewStyle>;
} & Omit<ViewProps, 'children' | 'style'>;
