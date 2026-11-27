import type { BadgeIconPropsShared } from '@metamask/design-system-shared';
import type { ViewProps } from 'react-native';

import type { IconProps } from '../Icon';

/**
 * BadgeIcon component props (React Native platform-specific)
 * Extends shared props from @metamask/design-system-shared with React Native specific platform concerns
 */
export type BadgeIconProps = BadgeIconPropsShared & {
  /**
   * Optional prop to pass additional properties to the icon
   */
  iconProps?: Omit<IconProps, 'name'>;
  /**
   * @deprecated Use `className` instead.
   */
  twClassName?: string;
  /**
   * Optional Tailwind classes. Merged after the component's own classes and `twClassName`, so `className` wins on conflicts.
   */
  className?: string;
} & Omit<ViewProps, 'children'>;
