import { TextVariant } from '../../types';

import type { InputProps } from './Input.types';

export const INPUT_TEST_ID = 'input';

export const SAMPLE_INPUT_PROPS: Partial<InputProps> = {
  textVariant: TextVariant.BodyMd,
  isDisabled: false,
  isReadonly: false,
  placeholder: 'Sample placeholder',
};
