import type { AvatarIconPropsShared } from '@metamask/design-system-shared';

import type { AvatarBaseProps } from '../AvatarBase';
import type { IconProps } from '../Icon';

export type AvatarIconProps = Omit<AvatarBaseProps, 'children' | 'size'> &
  AvatarIconPropsShared & {
    /**
     * Optional props to be passed to the Icon component
     */
    iconProps?: Omit<IconProps, 'name'>;
    /**
     * Optional prop to control the size of the avatar
     *
     * @default AvatarIconSize.Md
     */
    size?: AvatarBaseProps['size'];
  };
