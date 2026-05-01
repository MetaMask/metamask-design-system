import type { ViewProps } from 'react-native';

import type { IconName, IconProps } from '../Icon';

/**
 * BadgeIcon component props.
 */
export type BadgeIconProps = {
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
