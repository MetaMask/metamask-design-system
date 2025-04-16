import { AvatarBaseSize } from '../../types';

export const TWCLASSMAP_AVATARBASE_SIZE_DIMENSION: Record<
  AvatarBaseSize,
  string
> = {
  [AvatarBaseSize.Xs]: 'h-4 w-4', // 16px
  [AvatarBaseSize.Sm]: 'h-6 w-6', // 24px
  [AvatarBaseSize.Md]: 'h-8 w-8', // 32px
  [AvatarBaseSize.Lg]: 'h-10 w-10', // 40px
  [AvatarBaseSize.Xl]: 'h-12 w-12', // 48px
};

export const TWCLASSMAP_AVATARBASE_HASBORDER_SIZE_DIMENSION: Record<
  AvatarBaseSize,
  string
> = {
  [AvatarBaseSize.Xs]: 'h-[17px] w-[17px]', // 16px with 1px border
  [AvatarBaseSize.Sm]: 'h-[25px] w-[25px]', // 24px with 1px border
  [AvatarBaseSize.Md]: 'h-[33px] w-[33px]', // 32px with 1px border
  [AvatarBaseSize.Lg]: 'h-[42px] w-[42px]', // 40px with 2px border
  [AvatarBaseSize.Xl]: 'h-[50px] w-[50px]', // 48px with 2px border
};

export const TWCLASSMAP_AVATARBASE_SIZE_BORDERRADIUSS_SQUARE: Record<
  AvatarBaseSize,
  string
> = {
  [AvatarBaseSize.Xs]: 'rounded-sm', // 4px
  [AvatarBaseSize.Sm]: 'rounded-md', // 6px
  [AvatarBaseSize.Md]: 'rounded-lg', // 8px
  [AvatarBaseSize.Lg]: 'rounded-[10px]', // 10px (No tailwind class for this)
  [AvatarBaseSize.Xl]: 'rounded-xl', // 12px
};

export const TWCLASSMAP_AVATARBASE_SIZE_BORDER: Record<AvatarBaseSize, string> =
  {
    [AvatarBaseSize.Xs]: 'border-background-default border', // 1px border
    [AvatarBaseSize.Sm]: 'border-background-default border', // 1px border
    [AvatarBaseSize.Md]: 'border-background-default border', // 1px border
    [AvatarBaseSize.Lg]: 'border-background-default border-2', // 2px border
    [AvatarBaseSize.Xl]: 'border-background-default border-2', // 2px border
  };
