import { DEFAULT_BUTTONBASE_PROPS } from '../../../../primitives/ButtonBase/ButtonBase.constants';
import { IconColor } from '../../../Icon';
import { TextColor } from '../../../Text';
import type { ButtonSecondaryProps } from './ButtonSecondary.types';

// Defaults
export const DEFAULT_BUTTONSECONDARY_PROPS: Pick<
  ButtonSecondaryProps,
  | 'textProps'
  | 'size'
  | 'isLoading'
  | 'spinnerProps'
  | 'startIconProps'
  | 'endIconProps'
  | 'isDisabled'
  | 'isFullWidth'
  | 'isDanger'
  | 'isInverse'
> = {
  ...DEFAULT_BUTTONBASE_PROPS,
  textProps: {
    ...DEFAULT_BUTTONBASE_PROPS.textProps,
    color: TextColor.PrimaryInverse,
  },
  spinnerProps: {
    ...DEFAULT_BUTTONBASE_PROPS.spinnerProps,
    color: IconColor.PrimaryInverse,
  },
  startIconProps: {
    ...DEFAULT_BUTTONBASE_PROPS.startIconProps,
    color: IconColor.PrimaryInverse,
  },
  endIconProps: {
    ...DEFAULT_BUTTONBASE_PROPS.endIconProps,
    color: IconColor.PrimaryInverse,
  },
  isDanger: false,
  isInverse: false,
};
