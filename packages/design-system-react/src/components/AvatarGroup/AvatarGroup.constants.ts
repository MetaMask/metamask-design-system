import { AvatarGroupSize } from '../../types';
import { TextVariant } from '../Text';

// Mappings
export const AVATAR_GROUP_SIZE_NEGATIVESPACEBETWEENAVATARS_MAP: Record<
  AvatarGroupSize,
  string
> = {
  [AvatarGroupSize.Xs]: 'ml-[-6px]',
  [AvatarGroupSize.Sm]: 'ml-[-10px]',
  [AvatarGroupSize.Md]: 'ml-[-14px]',
  [AvatarGroupSize.Lg]: 'ml-[-18px]',
  [AvatarGroupSize.Xl]: 'ml-[-22px]',
};

export const AVATAR_GROUP_SIZE_ISREVERSE_NEGATIVESPACEBETWEENAVATARS_MAP: Record<
  AvatarGroupSize,
  string
> = {
  [AvatarGroupSize.Xs]: 'mr-[-6px]',
  [AvatarGroupSize.Sm]: 'mr-[-10px]',
  [AvatarGroupSize.Md]: 'mr-[-14px]',
  [AvatarGroupSize.Lg]: 'mr-[-18px]',
  [AvatarGroupSize.Xl]: 'mr-[-22px]',
};

export const AVATAR_GROUP_SIZE_OVERFLOWTEXT_TEXTVARIANT_MAP: Record<
  AvatarGroupSize,
  TextVariant
> = {
  [AvatarGroupSize.Xs]: TextVariant.BodyXs,
  [AvatarGroupSize.Sm]: TextVariant.BodySm,
  [AvatarGroupSize.Md]: TextVariant.BodyMd,
  [AvatarGroupSize.Lg]: TextVariant.HeadingMd,
  [AvatarGroupSize.Xl]: TextVariant.HeadingMd,
};
