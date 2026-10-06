import type { AvatarIconPropsShared } from '@metamask/design-system-shared';

import type { AvatarBaseProps } from '../AvatarBase/index.js';
import type { IconProps } from '../Icon/index.js';

export type AvatarIconProps = Omit<AvatarBaseProps, 'children' | 'size'> &
  AvatarIconPropsShared & {
    /**
     * Optional props to be passed to the Icon component
     */
    iconProps?: Omit<IconProps, 'name'>;
  };
