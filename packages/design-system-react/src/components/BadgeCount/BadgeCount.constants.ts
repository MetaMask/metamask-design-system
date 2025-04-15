import { BadgeCountSize } from '../../types';
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
  [BadgeCountSize.Md]: 'min-w-4 h-3.5 py-0 px-1', // min-width 16px, height 14px, padding-vertical 0, padding-horizontal 4
  [BadgeCountSize.Lg]: 'min-w-6 h-5 py-0.5 px-1.5', // min-width 24px, height 20px, padding-vertical 2, padding-horizontal 6
};
