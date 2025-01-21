import { IconSize } from '../Icon';
import type { ButtonIconProps } from './ButtonIcon.types';
import { ButtonIconVariant } from './ButtonIcon.types';

// Defaults
export const DEFAULT_BUTTONICON_PROPS: Partial<ButtonIconProps> = {
  variant: ButtonIconVariant.Secondary,
  isLoading: false,
  size: IconSize.Md,
  onPress: () => {
    console.log('Button pressed');
  },
  isDisabled: false,
  isInverse: false,
};
