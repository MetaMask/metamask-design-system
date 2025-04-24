import { ButtonIconSize } from '../../types';
import { IconSize } from '../Icon';

export const TWCLASSMAP_BUTTONICON_SIZE_DIMENSION = {
  [ButtonIconSize.Sm]: 'h-6 w-6',
  [ButtonIconSize.Md]: 'h-8 w-8',
  [ButtonIconSize.Lg]: 'h-10 w-10',
} as const;

export const MAP_BUTTONICON_SIZE_ICONSIZE = {
  [ButtonIconSize.Sm]: IconSize.Sm,
  [ButtonIconSize.Md]: IconSize.Md,
  [ButtonIconSize.Lg]: IconSize.Lg,
} as const;
