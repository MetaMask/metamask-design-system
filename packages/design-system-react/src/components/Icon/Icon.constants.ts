import { IconSize } from '../../types';

export const ICON_SIZE_CLASS_MAP: Record<IconSize, string> = {
  [IconSize.Xs]: 'w-3 h-3', // 12px
  [IconSize.Sm]: 'w-4 h-4', // 16px
  [IconSize.Md]: 'w-5 h-5', // 20px
  [IconSize.Lg]: 'w-6 h-6', // 24px
  [IconSize.Xl]: 'w-8 h-8', // 32px
};
