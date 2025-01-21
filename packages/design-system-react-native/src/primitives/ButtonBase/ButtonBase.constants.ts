import { IconSize, IconColor } from '../../components/Icons/Icon';
import { TextColor, TextVariant, FontWeight } from '../../components/Text';
import type { ButtonBaseProps } from './ButtonBase.types';
import { ButtonBaseSize } from './ButtonBase.types';

// Mappings
export const TWCLASSMAP_BUTTONBASE_SIZE: Record<ButtonBaseSize, string> = {
  [ButtonBaseSize.Sm]: 'h-8', // size (32px).
  [ButtonBaseSize.Md]: 'h-10', // size (40px).
  [ButtonBaseSize.Lg]: 'h-12', // size (48px).
};

// Defaults
export const DEFAULT_BUTTONBASE_PROPS: Partial<ButtonBaseProps> = {
  textProps: {
    variant: TextVariant.BodyMd,
    fontWeight: FontWeight.Medium,
    color: TextColor.TextDefault,
    numberOfLines: 1,
    ellipsizeMode: 'clip',
  },
  size: ButtonBaseSize.Lg,
  isLoading: false,
  spinnerProps: {
    color: IconColor.IconDefault,
  },
  startIconProps: {
    size: IconSize.Sm,
    testID: 'start-icon',
  },
  endIconProps: {
    size: IconSize.Sm,
    testID: 'end-icon',
  },
  onPress: () => {
    console.log('Button pressed');
  },
  isDisabled: false,
  isFullWidth: false,
};
