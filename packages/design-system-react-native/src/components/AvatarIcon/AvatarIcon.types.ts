import type { AvatarIconPropsShared } from '@metamask/design-system-shared';

import type { AvatarBaseProps } from '../AvatarBase';
import type { IconName, IconProps } from '../Icon';

/**
 * AvatarIcon component props (React Native platform-specific)
 * Extends shared props from @metamask/design-system-shared with React Native-specific platform concerns
 */
export type AvatarIconProps = AvatarIconPropsShared &
  Omit<AvatarBaseProps, 'children' | 'fallbackText' | 'fallbackTextProps'> & {
    /**
     * Required icon name from the icon set - narrowed to platform-specific IconName
     */
    iconName: IconName;
    /**
     * Optional prop to pass additional properties to the icon
     */
    iconProps?: Omit<IconProps, 'name'>;
    /**
     * Optional Tailwind class name for styling
     */
    twClassName?: string;
  };
