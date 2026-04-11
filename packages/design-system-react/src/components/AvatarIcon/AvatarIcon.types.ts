import type { AvatarIconPropsShared } from '@metamask/design-system-shared';

import type { AvatarBaseProps } from '../AvatarBase';
import type { IconName, IconProps } from '../Icon';

/**
 * AvatarIcon component props (React platform-specific)
 * Extends shared props from @metamask/design-system-shared with React-specific platform concerns
 */
export type AvatarIconProps = Omit<AvatarBaseProps, 'children' | 'size'> &
  Omit<AvatarIconPropsShared, 'iconName'> & {
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
     *
     * @default AvatarIconSize.Md
     */
    size?: AvatarIconPropsShared['size'];
    className?: string;
  };
