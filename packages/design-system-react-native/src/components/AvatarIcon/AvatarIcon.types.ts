import type { AvatarIconPropsShared } from '@metamask/design-system-shared';

import type { AvatarBaseProps } from '../AvatarBase/index.js';
import type { IconProps } from '../Icon/index.js';

/**
 * AvatarIcon component props.
 */
export type AvatarIconProps = AvatarIconPropsShared & {
  /**
   * Optional prop to pass additional properties to the icon
   */
  iconProps?: Omit<IconProps, 'name'>;
} & Omit<AvatarBaseProps, 'children' | 'fallbackText' | 'fallbackTextProps'>;
