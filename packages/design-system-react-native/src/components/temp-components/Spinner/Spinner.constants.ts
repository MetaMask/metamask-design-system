import { IconColor, IconSize } from '../../Icon';
import { TextVariant, TextColor } from '../../Text';
import type { SpinnerProps } from './Spinner.types';

// Defaults
export const DEFAULT_SPINNER_PROPS: Partial<SpinnerProps> = {
  color: IconColor.IconDefault,
  spinnerIconProps: {
    size: IconSize.Md,
    testID: 'spinner-icon',
  },
  loadingText: 'Loading',
  loadingTextProps: {
    variant: TextVariant.BodyMd,
    color: TextColor.TextDefault,
    testID: 'spinner-text',
  },
  twClassName: '',
};
