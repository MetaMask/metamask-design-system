import type {
  AvatarGroupPropsShared,
  AvatarGroupVariant,
} from '@metamask/design-system-shared';
import type { ViewProps } from 'react-native';

import type { AvatarAccountProps } from '../AvatarAccount/index.js';
import type { AvatarBaseProps } from '../AvatarBase/index.js';
import type { AvatarFaviconProps } from '../AvatarFavicon/index.js';
import type { AvatarNetworkProps } from '../AvatarNetwork/index.js';
import type { AvatarTokenProps } from '../AvatarToken/index.js';

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
        variant: typeof AvatarGroupVariant.Account;
        /**
         * A list of Avatars to be horizontally stacked.
         * Note: AvatarGroupProps's size prop will overwrite each individual avatarProp's size.
         */
        avatarPropsArr: AvatarAccountProps[];
      }
    | {
        variant: typeof AvatarGroupVariant.Favicon;
        /**
         * A list of Avatars to be horizontally stacked.
         * Note: AvatarGroupProps's size prop will overwrite each individual avatarProp's size.
         */
        avatarPropsArr: AvatarFaviconProps[];
      }
    | {
        variant: typeof AvatarGroupVariant.Network;
        /**
         * A list of Avatars to be horizontally stacked.
         * Note: AvatarGroupProps's size prop will overwrite each individual avatarProp's size.
         */
        avatarPropsArr: AvatarNetworkProps[];
      }
    | {
        variant: typeof AvatarGroupVariant.Token;
        /**
         * A list of Avatars to be horizontally stacked.
         * Note: AvatarGroupProps's size prop will overwrite each individual avatarProp's size.
         */
        avatarPropsArr: AvatarTokenProps[];
      }
  );
