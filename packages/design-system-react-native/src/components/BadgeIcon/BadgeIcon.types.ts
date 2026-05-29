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
   * Optional prop to add twrnc overriding classNames.
   */
  twClassName?: string;
} & Omit<ViewProps, 'children'>;
