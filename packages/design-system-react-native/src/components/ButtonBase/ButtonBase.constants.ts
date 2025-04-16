import { ButtonBaseSize } from '../../types';
import { IconSize, IconColor } from '../Icon';
import { TextColor, TextVariant, FontWeight } from '../Text';
import type { ButtonBaseProps } from './ButtonBase.types';

// Defaults
export const DEFAULT_BUTTONBASE_PROPS: Pick<
  ButtonBaseProps,
  | 'textProps'
  | 'size'
  | 'isLoading'
  | 'spinnerProps'
  | 'startIconProps'
  | 'endIconProps'
  | 'isDisabled'
  | 'isFullWidth'
> = {
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
