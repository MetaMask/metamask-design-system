import type { ReactNode } from 'react';
import type { PressableProps, StyleProp, ViewStyle } from 'react-native';

import type { InputProps } from '../Input/Input.types';

/**
 * TextField component props.
 *
 * Inherits [Input](../Input/Input.tsx) props for the inner text input, excluding
 * `textVariant` and `isStateStylesDisabled`, which are owned by TextField. The
 * outer container is a `Pressable` (tap-to-focus); use `pressableProps` for
 * additional Pressable-specific attributes.
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
  /**
   * Optional props forwarded to the root `Pressable` wrapper.
   */
  pressableProps?: Omit<
    PressableProps,
    'onPress' | 'disabled' | 'style' | 'children'
  >;
};
