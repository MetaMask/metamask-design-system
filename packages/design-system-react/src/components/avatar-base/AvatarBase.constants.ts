import { AvatarBaseSize } from './AvatarBase.types';
import { TextVariant } from '../text';

export const AVATAR_BASE_SIZE_CLASS_MAP: Record<AvatarBaseSize, string> = {
  [AvatarBaseSize.Xs]: 'h-4 w-4',
  [AvatarBaseSize.Sm]: 'h-6 w-6',
  [AvatarBaseSize.Md]: 'h-8 w-8',
  [AvatarBaseSize.Lg]: 'h-10 w-10',
  [AvatarBaseSize.Xl]: 'h-12 w-12',
};

export const AVATAR_BASE_SIZE_TO_TEXT_VARIANT_MAP: Record<
  AvatarBaseSize,
  TextVariant
> = {
  [AvatarBaseSize.Xs]: TextVariant.BodyXs,
  [AvatarBaseSize.Sm]: TextVariant.BodyXs,
  [AvatarBaseSize.Md]: TextVariant.BodySm,
  [AvatarBaseSize.Lg]: TextVariant.BodyMd,
  [AvatarBaseSize.Xl]: TextVariant.BodyMd,
};
