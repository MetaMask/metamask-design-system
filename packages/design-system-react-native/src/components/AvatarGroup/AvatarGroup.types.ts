import type {
  AvatarGroupPropsShared,
  AvatarGroupVariant,
} from '@metamask/design-system-shared';
import type { ViewProps } from 'react-native';

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
   * Optional prop to add twrnc overriding classNames.
   */
  twClassName?: string;
} & ViewProps;

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
