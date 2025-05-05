import { AvatarGroupSize } from '../../types';
import { TextVariant } from '../Text';

// Mappings
export const TWCLASSMAP_AVATARGROUP_SIZE_SPACEBETWEENAVATARS: Record<
  AvatarGroupSize,
  string
> = {
  [AvatarGroupSize.Xs]: 'gap-[-6px]',
  [AvatarGroupSize.Sm]: 'gap-[-10px]',
  [AvatarGroupSize.Md]: 'gap-[-14px]',
  [AvatarGroupSize.Lg]: 'gap-[-18px]',
  [AvatarGroupSize.Xl]: 'gap-[-22px]',
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
