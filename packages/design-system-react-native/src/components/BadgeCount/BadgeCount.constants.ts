import { BadgeCountSize } from '@metamask/design-system-shared';

import { TextVariant } from '../Text';

// Mappings
export const MAP_BADGECOUNT_SIZE_TEXTVARIANT: Record<
  BadgeCountSize,
  TextVariant
> = {
  [BadgeCountSize.Md]: TextVariant.BodyXs,
  [BadgeCountSize.Lg]: TextVariant.BodySm,
};

export const TWCLASSMAP_BADGECOUNT_SIZE_CONTAINER: Record<
  BadgeCountSize,
  string
> = {
  [BadgeCountSize.Md]: 'min-w-4 h-4 px-1', // min-width 16px, height 14px, padding-horizontal 4
  [BadgeCountSize.Lg]: 'min-w-6 h-5 px-1.5', // min-width 24px, height 20px, padding-horizontal 6
};
