import type { AvatarIconPropsShared } from '@metamask/design-system-shared';

import type { AvatarBaseProps } from '../AvatarBase';
import type { IconName, IconProps } from '../Icon';

/**
 * AvatarIcon component props.
 */
export type AvatarIconProps = AvatarIconPropsShared & {
  /**
   * Optional prop to specify an icon to show
   */
  iconName: IconName;
  /**
   * Optional prop to pass additional properties to the icon
   */
  iconProps?: Omit<IconProps, 'name'>;
} & Omit<AvatarBaseProps, 'children' | 'fallbackText' | 'fallbackTextProps'>;
