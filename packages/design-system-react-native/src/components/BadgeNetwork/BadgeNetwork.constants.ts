import type { BadgeIconProps } from './BadgeNetwork.types';
import { BadgeIconVariant } from './BadgeNetwork.types';
import { IconSize, IconName, IconColor } from '../Icon';

// Mappings
export const MAP_BADGEICON_VARIANT_ICONNAME: Record<
  | BadgeIconVariant.Snaps
  | BadgeIconVariant.Send
  | BadgeIconVariant.Stake
  | BadgeIconVariant.Bridge,
  IconName
> = {
  [BadgeIconVariant.Snaps]: IconName.Snaps,
  [BadgeIconVariant.Send]: IconName.Arrow2UpRight,
  [BadgeIconVariant.Stake]: IconName.Plant,
  [BadgeIconVariant.Bridge]: IconName.Bridge,
};

// Defaults
export const DEFAULT_BADGEICON_PROPS: Required<
  Pick<BadgeIconProps, 'iconProps'>
> = {
  iconProps: {
    size: IconSize.Xs,
    color: IconColor.PrimaryInverse,
  },
};
