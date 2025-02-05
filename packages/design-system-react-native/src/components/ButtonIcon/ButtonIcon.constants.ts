import { IconSize, IconName } from '../Icon';
import { ButtonIconSize } from './ButtonIcon.types';
import type { ButtonIconProps } from './ButtonIcon.types';

// Mappings
export const MAPPING_BUTTONICONSIZE_ICONSIZE: Record<ButtonIconSize, IconSize> =
  {
    [ButtonIconSize.Sm]: IconSize.Sm,
    [ButtonIconSize.Md]: IconSize.Md,
    [ButtonIconSize.Lg]: IconSize.Lg,
  };

// Defaults
export const DEFAULT_BUTTONICON_PROPS: Pick<
  ButtonIconProps,
  'iconName' | 'size' | 'isDisabled' | 'isInverse' | 'isFloating'
> = {
  iconName: IconName.Close,
  size: ButtonIconSize.Md,
  isDisabled: false,
  isInverse: false,
  isFloating: false,
};
