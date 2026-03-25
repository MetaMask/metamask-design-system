import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

import type { InputProps } from '../Input/Input.types';

/**
 * TextField component props.
 */
export type TextFieldProps = Omit<
  InputProps,
  'textVariant' | 'isStateStylesDisabled' | 'style'
> & {
  /**
   * Optional content to display before the Input.
   */
  startAccessory?: ReactNode;
  /**
   * Optional content to display after the Input.
   */
  endAccessory?: ReactNode;
  /**
   * Optional test ID for the start accessory wrapper (when `startAccessory` is set).
   */
  startAccessoryTestID?: string;
  /**
   * Optional test ID for the end accessory wrapper (when `endAccessory` is set).
   */
  endAccessoryTestID?: string;
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
