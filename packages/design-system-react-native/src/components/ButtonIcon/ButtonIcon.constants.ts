import { ButtonIconSize, IconSize } from '@metamask/design-system-shared';

// Mappings
export const TWCLASSMAP_BUTTONICON_SIZE_DIMENSION = {
  [ButtonIconSize.Sm]: 'h-6 w-6',
  [ButtonIconSize.Md]: 'h-8 w-8',
  [ButtonIconSize.Lg]: 'h-10 w-10',
};

export const MAP_BUTTONICON_SIZE_ICONSIZE: Record<ButtonIconSize, IconSize> = {
  [ButtonIconSize.Sm]: IconSize.Md,
  [ButtonIconSize.Md]: IconSize.Lg,
  [ButtonIconSize.Lg]: IconSize.Xl,
};
