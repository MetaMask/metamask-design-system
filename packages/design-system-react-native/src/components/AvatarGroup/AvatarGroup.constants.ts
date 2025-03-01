import type { AvatarGroupProps } from './AvatarGroup.types';
import { AvatarGroupSize } from '../../shared/enums';
import { TextVariant } from '../Text';

// Mappings
export const MAP_AVATARGROUP_SIZE_SPACEBETWEENAVATARS: Record<
  AvatarGroupSize,
  number
> = {
  [AvatarGroupSize.Xs]: -6,
  [AvatarGroupSize.Sm]: -10,
  [AvatarGroupSize.Md]: -14,
  [AvatarGroupSize.Lg]: -18,
  [AvatarGroupSize.Xl]: -22,
};

export const MAP_AVATARGROUP_SIZE_OVERFLOWTEXT_TEXTVARIANT: Record<
  AvatarGroupSize,
  TextVariant
> = {
  [AvatarGroupSize.Xs]: TextVariant.BodyXs,
  [AvatarGroupSize.Sm]: TextVariant.BodySm,
  [AvatarGroupSize.Md]: TextVariant.BodyMd,
  [AvatarGroupSize.Lg]: TextVariant.HeadingMd,
  [AvatarGroupSize.Xl]: TextVariant.HeadingMd,
};

// Defaults
export const DEFAULT_AVATARGROUP_PROPS: Required<
  Pick<AvatarGroupProps, 'size' | 'max' | 'isReverse'>
> = {
  size: AvatarGroupSize.Md,
  max: 4,
  isReverse: false,
};
