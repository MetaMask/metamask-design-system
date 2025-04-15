import { ButtonIconSize } from '../../types';
import { IconSize } from '../icon';

export const BUTTON_ICON_SIZE_CLASS_MAP = {
  [ButtonIconSize.Sm]: 'h-6 w-6',
  [ButtonIconSize.Md]: 'h-8 w-8',
  [ButtonIconSize.Lg]: 'h-10 w-10',
} as const;

export const BUTTON_ICON_SIZE_TO_ICON_SIZE_CLASS_MAP = {
  [ButtonIconSize.Sm]: IconSize.Sm,
  [ButtonIconSize.Md]: IconSize.Md,
  [ButtonIconSize.Lg]: IconSize.Lg,
} as const;
