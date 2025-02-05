import { AvatarBaseSize } from './AvatarBase.types';

export const AVATAR_BASE_SIZE_CLASS_MAP: Record<AvatarBaseSize, string> = {
  [AvatarBaseSize.Xs]: 'h-4 w-4',
  [AvatarBaseSize.Sm]: 'h-6 w-6',
  [AvatarBaseSize.Md]: 'h-8 w-8',
  [AvatarBaseSize.Lg]: 'h-10 w-10',
  [AvatarBaseSize.Xl]: 'h-12 w-12',
};

export const AVATAR_BASE_SQUARE_BORDER_RADIUS_MAP: Record<
  AvatarBaseSize,
  string
> = {
  [AvatarBaseSize.Xs]: 'rounded-[4px]',
  [AvatarBaseSize.Sm]: 'rounded-[6px]',
  [AvatarBaseSize.Md]: 'rounded-[8px]',
  [AvatarBaseSize.Lg]: 'rounded-[10px]',
  [AvatarBaseSize.Xl]: 'rounded-[12px]',
};
