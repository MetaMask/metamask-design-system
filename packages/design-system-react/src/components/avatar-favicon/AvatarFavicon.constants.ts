import { AvatarBaseSize } from '../avatar-base';
import { AvatarFaviconSize } from './AvatarFavicon.types';

export const AVATAR_FAVICON_TO_AVATAR_BASE_SIZE_MAP: Record<
  AvatarFaviconSize,
  AvatarBaseSize
> = {
  [AvatarFaviconSize.Xs]: AvatarBaseSize.Xs,
  [AvatarFaviconSize.Sm]: AvatarBaseSize.Sm,
  [AvatarFaviconSize.Md]: AvatarBaseSize.Md,
  [AvatarFaviconSize.Lg]: AvatarBaseSize.Lg,
  [AvatarFaviconSize.Xl]: AvatarBaseSize.Xl,
};
