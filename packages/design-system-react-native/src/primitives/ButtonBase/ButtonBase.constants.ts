import { IconSize, IconColor } from '../../components/Icon';
import { TextColor, TextVariant, FontWeight } from '../../components/Text';
import type { ButtonBaseProps } from './ButtonBase.types';
import { ButtonBaseSize } from './ButtonBase.types';

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
  isDisabled: false,
  isFullWidth: false,
};
