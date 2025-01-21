import { IconSize, IconColor } from '../Icons/Icon';
import { TextColor, TextVariant, FontWeight } from '../Text';
import type { TextButtonProps } from './TextButton.types';

// Defaults
export const DEFAULT_TEXTBUTTON_PROPS: Partial<TextButtonProps> = {
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
  onPress: () => {
    console.log('Button pressed');
  },
  isDisabled: false,
};
