import type { ViewProps } from 'react-native';

import type { AvatarGroupSize } from '../../types';
import type { AvatarAccountProps } from '../AvatarAccount';
import type { AvatarBaseProps } from '../AvatarBase';
import type { AvatarFaviconProps } from '../AvatarFavicon';
import type { AvatarNetworkProps } from '../AvatarNetwork';
import type { AvatarTokenProps } from '../AvatarToken';

type BaseAvatarGroupProps = {
  /**
   * Optional enum to select between Avatar Group sizes.
   *
   * @default AvatarGroupSize.Md
   */
  size?: AvatarGroupSize;
  /**
   * Optional enum to select max number of Avatars visible,
   * before the overflow counter being displayed
   *
   * @default 4
   */
  max?: number;
  /**
   * Optional prop to reverse the direction of the AvatarGroup
   */
  isReverse?: boolean;
  /**
   * Optional prop to pass additional AvatarBase props to the overflow Text element
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
        variant: 'Account';
        /**
         * A list of Avatars to be horizontally stacked.
         * Note: AvatarGroupProps's size prop will overwrite each individual avatarProp's size.
         */
        avatarPropsArr: AvatarAccountProps[];
      }
    | {
        variant: 'Favicon';
        /**
         * A list of Avatars to be horizontally stacked.
         * Note: AvatarGroupProps's size prop will overwrite each individual avatarProp's size.
         */
        avatarPropsArr: AvatarFaviconProps[];
      }
    | {
        variant: 'Network';
        /**
         * A list of Avatars to be horizontally stacked.
         * Note: AvatarGroupProps's size prop will overwrite each individual avatarProp's size.
         */
        avatarPropsArr: AvatarNetworkProps[];
      }
    | {
        variant: 'Token';
        /**
         * A list of Avatars to be horizontally stacked.
         * Note: AvatarGroupProps's size prop will overwrite each individual avatarProp's size.
         */
        avatarPropsArr: AvatarTokenProps[];
      }
  );
