import type { TextInputProps } from 'react-native';

import type { TextVariant } from '../../types';

export interface InputProps extends Omit<TextInputProps, 'editable'> {
  /**
   * Optional enum to select between Typography variants.
   * @default BodyMd
   */
  textVariant?: TextVariant;
  /**
   * Optional boolean to disable Input.
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Optional boolean to show readonly input.
   * @default false
   */
  isReadonly?: boolean;
  /**
   * Optional boolean to disable state styles.
   * @default false
   */
  isStateStylesDisabled?: boolean;
  /**
   * Optional prop to add twrnc overriding classNames.
   */
  twClassName?: string;
}
