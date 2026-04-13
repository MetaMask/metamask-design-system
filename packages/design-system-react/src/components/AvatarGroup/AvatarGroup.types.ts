import type {
  AvatarGroupPropsShared,
  AvatarGroupVariant,
} from '@metamask/design-system-shared';
import type { ComponentProps } from 'react';

import type { AvatarAccountProps } from '../AvatarAccount';
import type { AvatarBaseProps } from '../AvatarBase';
import type { AvatarFaviconProps } from '../AvatarFavicon';
import type { AvatarNetworkProps } from '../AvatarNetwork';
import type { AvatarTokenProps } from '../AvatarToken';

type BaseAvatarGroupProps = Omit<AvatarGroupPropsShared, 'variant'> & {
  /**
   * Optional prop to pass additional AvatarBase props to the overflow Text element.
   */
  overflowTextProps?: AvatarBaseProps;
  /**
   * Optional prop for additional CSS classes to be applied to the AvatarGroup component.
   * These classes will be merged with the component's default classes using twMerge.
   */
  className?: string;
  /**
   * Optional CSS styles to be applied to the component.
   * Should be used sparingly and only for dynamic styles that can't be achieved with className.
   */
  style?: React.CSSProperties;
} & ComponentProps<'div'>;

/**
 * AvatarGroup props.
 */
export type AvatarGroupProps = BaseAvatarGroupProps &
  (
    | {
        variant: Extract<AvatarGroupVariant, 'account'>;
        /**
         * A list of Avatars to be horizontally stacked.
         * Note: AvatarGroupProps's size prop will overwrite each individual avatarProp's size.
         */
        avatarPropsArr: AvatarAccountProps[];
      }
    | {
        variant: Extract<AvatarGroupVariant, 'favicon'>;
        /**
         * A list of Avatars to be horizontally stacked.
         * Note: AvatarGroupProps's size prop will overwrite each individual avatarProp's size.
         */
        avatarPropsArr: AvatarFaviconProps[];
      }
    | {
        variant: Extract<AvatarGroupVariant, 'network'>;
        /**
         * A list of Avatars to be horizontally stacked.
         * Note: AvatarGroupProps's size prop will overwrite each individual avatarProp's size.
         */
        avatarPropsArr: AvatarNetworkProps[];
      }
    | {
        variant: Extract<AvatarGroupVariant, 'token'>;
        /**
         * A list of Avatars to be horizontally stacked.
         * Note: AvatarGroupProps's size prop will overwrite each individual avatarProp's size.
         */
        avatarPropsArr: AvatarTokenProps[];
      }
  );
