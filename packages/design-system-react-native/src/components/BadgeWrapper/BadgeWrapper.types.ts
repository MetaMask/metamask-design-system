import type { BadgeWrapperPropsShared } from '@metamask/design-system-shared';
import type { ViewProps, StyleProp, ViewStyle } from 'react-native';

/**
 * BadgeWrapper component props (React Native platform-specific)
 * Extends shared props from @metamask/design-system-shared with React Native-specific platform concerns
 */
export type BadgeWrapperProps = BadgeWrapperPropsShared & {
  /**
   * Optional prop to pass additional props to the children container
   */
  childrenContainerProps?: ViewProps;
  /**
   * Optional prop to pass additional props to the badge container
   */
  badgeContainerProps?: ViewProps;
  /**
   * Optional prop to add twrnc overriding classNames.
   */
  twClassName?: string;
  /**
   * Optional prop to control the style.
   */
  style?: StyleProp<ViewStyle>;
} & ViewProps;
