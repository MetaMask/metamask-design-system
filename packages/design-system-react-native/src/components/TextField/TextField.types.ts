import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

import type { InputProps } from '../Input/Input.types';

/**
 * TextFieldSize enum.
 */
export enum TextFieldSize {
  Sm = 'sm',
  Md = 'md',
  Lg = 'lg',
}

/**
 * TextField component props.
 */
export type TextFieldProps = Omit<
  InputProps,
  'textVariant' | 'isStateStylesDisabled' | 'style'
> & {
  /**
   * Optional prop for size of the TextField.
   *
   * @default TextFieldSize.Md
   */
  size?: TextFieldSize;
  /**
   * Optional content to display before the Input.
   */
  startAccessory?: ReactNode;
  /**
   * Optional content to display after the Input.
   */
  endAccessory?: ReactNode;
  /**
   * Optional boolean to show the error state.
   *
   * @default false
   */
  isError?: boolean;
  /**
   * Optional prop to replace the default Input with a custom element.
   */
  inputElement?: ReactNode;
  /**
   * Optional prop to add twrnc overriding classNames.
   */
  twClassName?: string;
  /**
   * Optional prop to customize the container style.
   */
  style?: StyleProp<ViewStyle>;
};
