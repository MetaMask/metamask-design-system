/* eslint-disable import/prefer-default-export */

import { TextVariant } from '../../types';

import type { InputProps } from './Input.types';

export const INPUT_TEST_ID = 'input';

export const SAMPLE_INPUT_PROPS: InputProps = {
  textVariant: TextVariant.BodyMd,
  isDisabled: false,
  isStateStylesDisabled: false,
  isReadonly: false,
  placeholder: 'Sample Placeholder',
};
