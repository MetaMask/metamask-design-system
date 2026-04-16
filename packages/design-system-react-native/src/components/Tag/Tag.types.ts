import type { TagPropsShared } from '@metamask/design-system-shared';
import type { ReactNode } from 'react';
import type { ViewProps, StyleProp, ViewStyle } from 'react-native';

import type { IconName, IconProps } from '../Icon';

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
   * Optional prop for a custom element to show at the start of the tag when no start icon is shown.
   */
  startAccessory?: ReactNode;
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
  endAccessory?: ReactNode;
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
