import { ButtonIconSize } from '../../types';
import { IconSize } from '../Icon';

// Mappings
export const TWCLASSMAP_BUTTONICON_SIZE_DIMENSION = {
  [ButtonIconSize.Xs]: 'h-5 w-5',
  [ButtonIconSize.Sm]: 'h-6 w-6',
  [ButtonIconSize.Md]: 'h-8 w-8',
  [ButtonIconSize.Lg]: 'h-10 w-10',
};

export const MAP_BUTTONICON_SIZE_ICONSIZE: Record<ButtonIconSize, IconSize> = {
  [ButtonIconSize.Xs]: IconSize.Sm,
  [ButtonIconSize.Sm]: IconSize.Md,
  [ButtonIconSize.Md]: IconSize.Lg,
  [ButtonIconSize.Lg]: IconSize.Xl,
};
