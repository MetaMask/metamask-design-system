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
   *
   * @deprecated Use `className` instead. `twClassName` remains supported for existing callers and will be removed in a future major version.
   */
  twClassName?: string;
  /**
   * Tailwind classes from `@metamask/design-system-twrnc-preset`.
   * Applied after `twClassName` when both are set, so these classes win.
   */
  className?: string;
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
