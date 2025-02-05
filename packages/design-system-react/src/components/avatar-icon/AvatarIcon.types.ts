import type { ComponentProps } from 'react';

import { IconName } from '../icon';
import type { IconProps } from '../icon';

export enum AvatarIconSeverity {
  Default = 'default',
  Info = 'info',
  Success = 'success',
  Error = 'error',
  Warning = 'warning',
}

export enum AvatarIconSize {
  /**
   * Extra small size (16px)
   */
  Xs = 'xs',
  /**
   * Small size (24px)
   */
  Sm = 'sm',
  /**
   * Medium size (32px)
   */
  Md = 'md',
  /**
   * Large size (40px)
   */
  Lg = 'lg',
  /**
   * Extra large size (48px)
   */
  Xl = 'xl',
}

export type AvatarIconProps = Omit<
  ComponentProps<'div'>,
  'children' | 'size'
> & {
  /**
   * Required icon name from the icon set
   */
  iconName: IconName;
  /**
   * Optional props to be passed to the Icon component
   */
  iconProps?: Omit<IconProps, 'name'>;
  /**
   * Optional prop to control the size of the avatar
   * @default AvatarIconSize.Md
   */
  size?: AvatarIconSize;
  /**
   * Optional prop to control the severity of the avatar
   * @default AvatarIconSeverity.Default
   */
  severity?: AvatarIconSeverity;
  /**
   * Optional additional CSS classes to be applied to the component
   */
  className?: string;
};
