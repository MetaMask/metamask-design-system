import { ButtonIconSize } from '../../types';
import { IconSize, IconName } from '../Icon';
import type { ButtonIconProps } from './ButtonIcon.types';

// Mappings
export const MAPPING_BUTTONICONSIZE_ICONSIZE: Record<ButtonIconSize, IconSize> =
  {
    [ButtonIconSize.Sm]: IconSize.Sm,
    [ButtonIconSize.Md]: IconSize.Md,
    [ButtonIconSize.Lg]: IconSize.Lg,
  };
