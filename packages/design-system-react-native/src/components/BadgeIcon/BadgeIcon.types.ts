import type { BadgeIconPropsShared } from '@metamask/design-system-shared';
import type { ViewProps } from 'react-native';

import type { IconName, IconProps } from '../Icon';

/**
 * BadgeIcon component props (React Native platform-specific)
 * Extends shared props from @metamask/design-system-shared with React Native specific platform concerns
 */
export type BadgeIconProps = Omit<BadgeIconPropsShared, 'iconName'> & {
  /**
   * Required prop to specify an icon to show
   */
  iconName: IconName;
  /**
   * Optional prop to pass additional properties to the icon
   */
  iconProps?: Omit<IconProps, 'name'>;
  /**
   * Optional prop to add twrnc overriding classNames.
   */
  twClassName?: string;
} & Omit<ViewProps, 'children'>;
