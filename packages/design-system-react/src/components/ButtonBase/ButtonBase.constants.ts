import { ButtonBaseSize } from '@metamask/design-system-shared';

export const TWCLASSMAP_BUTTONBASE_SIZE_DIMENSION: Record<
  ButtonBaseSize,
  string
> = {
  [ButtonBaseSize.Sm]: 'h-8', // size (32px).
  [ButtonBaseSize.Md]: 'h-10', // size (40px).
  [ButtonBaseSize.Lg]: 'h-12', // size (48px).
};

/** Border radius per size (sm: 8px, md/lg: 12px). */
export const TWCLASSMAP_BUTTONBASE_SIZE_BORDER_RADIUS: Record<
  ButtonBaseSize,
  string
> = {
  [ButtonBaseSize.Sm]: 'rounded-lg',
  [ButtonBaseSize.Md]: 'rounded-xl',
  [ButtonBaseSize.Lg]: 'rounded-xl',
};
