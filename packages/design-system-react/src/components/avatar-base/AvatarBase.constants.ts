import { AvatarBaseSize } from './AvatarBase.types';

export const AVATAR_BASE_SIZE_CLASS_MAP: Record<AvatarBaseSize, string> = {
  [AvatarBaseSize.Xs]: 'h-4 w-4 text-s-body-xs',
  [AvatarBaseSize.Sm]: 'h-6 w-6 text-s-body-sm',
  [AvatarBaseSize.Md]: 'h-8 w-8 text-s-body-md',
  [AvatarBaseSize.Lg]: 'h-10 w-10 text-s-body-lg',
  [AvatarBaseSize.Xl]: 'h-12 w-12 text-s-body-lg',
};
