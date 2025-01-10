import { DEFAULT_BUTTONBASE_PROPS } from '../../../../../base-components/ButtonBase/ButtonBase.constants';
import { IconColor } from '../../../../Icons/Icon';
import { TextColor } from '../../../../Text';
import type { ButtonLinkProps } from './ButtonLink.types';

// Defaults
export const DEFAULT_BUTTONLINK_PROPS: Partial<ButtonLinkProps> = {
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
};
