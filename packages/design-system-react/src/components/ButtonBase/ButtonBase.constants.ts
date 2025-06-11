import { ButtonBaseSize } from '../../types';

export const TWCLASSMAP_BUTTONBASE_SIZE_DIMENSION: Record<
  ButtonBaseSize,
  string
> = {
  [ButtonBaseSize.Sm]: 'h-8', // size (32px).
  [ButtonBaseSize.Md]: 'h-10', // size (40px).
  [ButtonBaseSize.Lg]: 'h-12', // size (48px).
};
