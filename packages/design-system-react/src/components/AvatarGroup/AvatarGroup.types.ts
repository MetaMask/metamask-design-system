import type { ComponentProps } from 'react';

import { AvatarGroupSize, AvatarGroupVariant } from '../../types';
import { AvatarAccountProps } from '../AvatarAccount';
import { AvatarBaseProps } from '../AvatarBase';
import { AvatarFaviconProps } from '../AvatarFavicon';
import { AvatarNetworkProps } from '../AvatarNetwork';
import { AvatarTokenProps } from '../AvatarToken';

type BaseAvatarGroupProps = {
  /**
   * Optional enum to select between Avatar Group sizes.
   * @default AvatarGroupSize.Md
   */
  size?: AvatarGroupSize;
  /**
   * Optional enum to select max number of Avatars visible,
   * before the overflow counter being displayed
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
        variant: AvatarGroupVariant.Account;
        /**
         * A list of Avatars to be horizontally stacked.
         * Note: AvatarGroupProps's size prop will overwrite each individual avatarProp's size.
         */
        avatarPropsArr: AvatarAccountProps[];
      }
    | {
        variant: AvatarGroupVariant.Favicon;
        /**
         * A list of Avatars to be horizontally stacked.
         * Note: AvatarGroupProps's size prop will overwrite each individual avatarProp's size.
         */
        avatarPropsArr: AvatarFaviconProps[];
      }
    | {
        variant: AvatarGroupVariant.Network;
        /**
         * A list of Avatars to be horizontally stacked.
         * Note: AvatarGroupProps's size prop will overwrite each individual avatarProp's size.
         */
        avatarPropsArr: AvatarNetworkProps[];
      }
    | {
        variant: AvatarGroupVariant.Token;
        /**
         * A list of Avatars to be horizontally stacked.
         * Note: AvatarGroupProps's size prop will overwrite each individual avatarProp's size.
         */
        avatarPropsArr: AvatarTokenProps[];
      }
  );
