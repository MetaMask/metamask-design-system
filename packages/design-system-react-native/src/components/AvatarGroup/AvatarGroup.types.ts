import type {
  AvatarGroupPropsShared,
  AvatarGroupVariant,
} from '@metamask/design-system-shared';
import type { ViewProps } from 'react-native';

import type { AccountAvatarProps } from '../AccountAvatar';
import type { AvatarBaseProps } from '../AvatarBase';
import type { FaviconAvatarProps } from '../FaviconAvatar';
import type { NetworkAvatarProps } from '../NetworkAvatar';
import type { TokenAvatarProps } from '../TokenAvatar';

/** @deprecated Use AccountAvatarProps */
export type AvatarAccountProps = AccountAvatarProps;

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
        avatarPropsArr: AccountAvatarProps[];
      }
    | {
        variant: typeof AvatarGroupVariant.Favicon;
        /**
         * A list of Avatars to be horizontally stacked.
         * Note: AvatarGroupProps's size prop will overwrite each individual avatarProp's size.
         */
        avatarPropsArr: FaviconAvatarProps[];
      }
    | {
        variant: typeof AvatarGroupVariant.Network;
        /**
         * A list of Avatars to be horizontally stacked.
         * Note: AvatarGroupProps's size prop will overwrite each individual avatarProp's size.
         */
        avatarPropsArr: NetworkAvatarProps[];
      }
    | {
        variant: typeof AvatarGroupVariant.Token;
        /**
         * A list of Avatars to be horizontally stacked.
         * Note: AvatarGroupProps's size prop will overwrite each individual avatarProp's size.
         */
        avatarPropsArr: TokenAvatarProps[];
      }
  );
