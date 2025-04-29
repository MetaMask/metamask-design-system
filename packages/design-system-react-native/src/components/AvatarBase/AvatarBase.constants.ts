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
  [AvatarBaseSize.Xs]: 'h-[18px] w-[18px]', // 16px with 1px border on each side
  [AvatarBaseSize.Sm]: 'h-[26px] w-[26px]', // 24px with 1px border on each side
  [AvatarBaseSize.Md]: 'h-[34px] w-[34px]', // 32px with 1px border on each side
  [AvatarBaseSize.Lg]: 'h-[44px] w-[44px]', // 40px with 2px border on each side
  [AvatarBaseSize.Xl]: 'h-[52px] w-[52px]', // 48px with 2px border on each side
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
