import { AvatarBaseSize } from '../avatar-base';
import { AvatarTokenSize } from './AvatarToken.types';

export const AVATAR_TOKEN_TO_AVATAR_BASE_SIZE_MAP: Record<
  AvatarTokenSize,
  AvatarBaseSize
> = {
  [AvatarTokenSize.Xs]: AvatarBaseSize.Xs,
  [AvatarTokenSize.Sm]: AvatarBaseSize.Sm,
  [AvatarTokenSize.Md]: AvatarBaseSize.Md,
  [AvatarTokenSize.Lg]: AvatarBaseSize.Lg,
  [AvatarTokenSize.Xl]: AvatarBaseSize.Xl,
};
