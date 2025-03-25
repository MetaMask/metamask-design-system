import type { ComponentProps } from 'react';
import { IconName, IconProps } from '../icon';

/**
 * BadgeIcon component props.
 */
export type BadgeIconProps = ComponentProps<'div'> & {
  /**
   * Required prop to specify an icon to show
   */
  iconName: IconName;
  /**
   * Optional prop to pass additional properties to the icon
   */
  iconProps?: Omit<IconProps, 'name'>;
  /**
   * Optional prop for additional CSS classes to be applied to the BadgeIcon component.
   * These classes will be merged with the component's default classes using twMerge.
   */
  className?: string;
  /**
   * Optional CSS styles to be applied to the component.
   * Should be used sparingly and only for dynamic styles that can't be achieved with className.
   */
  style?: React.CSSProperties;
};
