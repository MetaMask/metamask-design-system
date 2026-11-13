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
   *
   * @deprecated Use `className` instead. `twClassName` remains supported for existing callers and will be removed in a future major version.
   */
  twClassName?: string;
  /**
   * Tailwind classes from `@metamask/design-system-twrnc-preset`.
   * Applied after `twClassName` when both are set, so these classes win.
   */
  className?: string;
  /**
   * Optional prop to control the style.
   */
  style?: StyleProp<ViewStyle>;
} & ViewProps;
