import { AvatarBaseSize } from '../../types';

// Mappings
export const TWCLASSMAP_AVATARBASE_SIZE_SHAPE: Record<AvatarBaseSize, string> =
  {
    [AvatarBaseSize.Xs]: 'rounded-sm',
    [AvatarBaseSize.Sm]: 'rounded-md',
    [AvatarBaseSize.Md]: 'rounded-lg',
    [AvatarBaseSize.Lg]: 'rounded-[10px]',
    [AvatarBaseSize.Xl]: 'rounded-xl',
  };
export const MAP_AVATARBASE_SIZE_BORDERWIDTH: Record<AvatarBaseSize, number> = {
  [AvatarBaseSize.Xs]: 1,
  [AvatarBaseSize.Sm]: 1,
  [AvatarBaseSize.Md]: 1,
  [AvatarBaseSize.Lg]: 2,
  [AvatarBaseSize.Xl]: 2,
};
