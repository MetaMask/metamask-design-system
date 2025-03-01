import { ViewProps } from 'react-native';

import { AvatarGroupSize } from '../../shared/enums';
import { AvatarFaviconProps } from '../AvatarFavicon';
import { AvatarIconProps } from '../AvatarIcon';

/**
 * AvatarGroup variants.
 */
export enum AvatarGroupVariant {
  Favicon = 'Favicon',
  Icon = 'Icon',
}

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
        variant: AvatarGroupVariant.Favicon;
        /**
         * A list of Avatars to be horizontally stacked.
         * Note: AvatarGroupProps's size prop will overwrite each individual avatarProp's size.
         */
        avatarPropsArr: AvatarFaviconProps[];
      }
    | {
        variant: AvatarGroupVariant.Icon;
        /**
         * A list of Avatars to be horizontally stacked.
         * Note: AvatarGroupProps's size prop will overwrite each individual avatarProp's size.
         */
        avatarPropsArr: AvatarIconProps[];
      }
  );
