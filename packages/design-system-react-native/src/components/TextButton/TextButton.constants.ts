import { IconSize, IconColor } from '../Icon';
import { TextColor, TextVariant, FontWeight } from '../Text';
import type { TextButtonProps } from './TextButton.types';

// Defaults
export const DEFAULT_TEXTBUTTON_PROPS: Required<
  Pick<
    TextButtonProps,
    | 'textProps'
    | 'isLoading'
    | 'loadingText'
    | 'spinnerProps'
    | 'startIconProps'
    | 'endIconProps'
    | 'isDisabled'
    | 'isInverse'
  >
> = {
  textProps: {
    variant: TextVariant.BodyMd,
    fontWeight: FontWeight.Medium,
    color: TextColor.PrimaryDefault,
  },
  isLoading: false,
  loadingText: 'Loading',
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
  isInverse: false,
};
