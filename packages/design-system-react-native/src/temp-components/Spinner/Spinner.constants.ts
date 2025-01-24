import { SpinnerColor } from '.';
import { IconSize } from '../../components/Icon';
import { TextVariant, TextColor } from '../../components/Text';
import type { SpinnerProps } from './Spinner.types';
// Defaults
export const DEFAULT_SPINNER_PROPS: Partial<SpinnerProps> = {
  color: SpinnerColor.IconDefault,
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
