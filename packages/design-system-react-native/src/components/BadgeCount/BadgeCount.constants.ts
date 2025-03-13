import { TextVariant, TextColor, FontWeight } from '../Text';
import type { BadgeCountProps } from './BadgeCount.types';
import { BadgeCountSize } from './BadgeCount.types';

// Mappings
export const MAP_BADGECOUNT_SIZE_TEXTVARIANT: Record<
  BadgeCountSize,
  TextVariant
> = {
  [BadgeCountSize.Md]: TextVariant.BodyXs,
  [BadgeCountSize.Lg]: TextVariant.BodySm,
};
export const MAP_BADGECOUNT_SIZE_MINWIDTH: Record<BadgeCountSize, number> = {
  [BadgeCountSize.Md]: 16,
  [BadgeCountSize.Lg]: 24,
};
export const MAP_BADGECOUNT_SIZE_LINEHEIGHT: Record<BadgeCountSize, number> = {
  [BadgeCountSize.Md]: 14,
  [BadgeCountSize.Lg]: 16,
};
export const MAP_BADGECOUNT_SIZE_PADDINGVERTICAL: Record<
  BadgeCountSize,
  number
> = {
  [BadgeCountSize.Md]: 0,
  [BadgeCountSize.Lg]: 2,
};
export const MAP_BADGECOUNT_SIZE_PADDINGHORIZONTAL: Record<
  BadgeCountSize,
  number
> = {
  [BadgeCountSize.Md]: 4,
  [BadgeCountSize.Lg]: 6,
};

// Defaults
export const DEFAULT_BADGECOUNT_PROPS: Required<
  Pick<BadgeCountProps, 'size' | 'max' | 'textProps'>
> = {
  size: BadgeCountSize.Md,
  max: 99,
  textProps: {
    color: TextColor.ErrorInverse,
    fontWeight: FontWeight.Medium,
  },
};
