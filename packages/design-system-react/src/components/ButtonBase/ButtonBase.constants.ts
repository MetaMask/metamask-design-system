import { ButtonBaseSize } from '../../types';

export const BUTTON_BASE_SIZE_CLASS_MAP: Record<ButtonBaseSize, string> = {
  [ButtonBaseSize.Sm]: 'h-8', // size (32px).
  [ButtonBaseSize.Md]: 'h-10', // size (40px).
  [ButtonBaseSize.Lg]: 'h-12', // size (48px).
};
