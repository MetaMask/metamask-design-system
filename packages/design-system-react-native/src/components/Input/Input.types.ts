import type { TextVariant } from '@metamask/design-system-shared';
import type { TextInputProps } from 'react-native';

export type InputProps = Omit<
  TextInputProps,
  'editable' | 'value' | 'defaultValue'
> & {
  /**
   * Controlled value for Input.
   */
  value: string;
  /**
   * Optional enum to select between Typography variants.
   *
   * @default BodyMd
   */
  textVariant?: TextVariant;
  /**
   * Optional boolean to disable Input.
   *
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Optional boolean to show readonly input.
   *
   * @default false
   */
  isReadonly?: boolean;
  /**
   * Optional boolean to disable state styles.
   *
   * @default false
   */
  isStateStylesDisabled?: boolean;
  /**
   * Optional prop to add twrnc overriding classNames.
   */
  twClassName?: string;
};
