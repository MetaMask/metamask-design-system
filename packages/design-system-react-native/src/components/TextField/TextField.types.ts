import type { TextFieldPropsShared } from '@metamask/design-system-shared';
import type { StyleProp, ViewStyle } from 'react-native';

import type { BoxProps } from '../Box/Box.types';
import type { InputProps } from '../Input/Input.types';

/**
 * Additional props merged onto the inner `Input` (`../Input/Input.tsx`).
 *
 * TextField owns `value`, `onChangeText`, `placeholder`, `isReadonly`, `onFocus`,
 * `onBlur`, `isDisabled`, `autoFocus`, typography, and inner layout (merged with
 * any `twClassName` you pass here). `placeholderTextColor` is omitted (Input sets
 * it from theme).
 */
export type TextFieldInputProps = Omit<
  InputProps,
  | 'autoFocus'
  | 'isDisabled'
  | 'isReadonly'
  | 'isStateStylesDisabled'
  | 'onBlur'
  | 'onChangeText'
  | 'onFocus'
  | 'placeholder'
  | 'placeholderTextColor'
  | 'style'
  | 'textVariant'
  | 'value'
>;

/**
 * React Native `TextField` props between `TextFieldPropsShared` and the root
 * `Box`: typed focus/blur handlers, `inputProps`, container styling, and
 * `testID`.
 */
export type TextFieldBaseProps = TextFieldPropsShared & {
  /**
   * Called when the inner input receives focus (composed with TextField border state).
   */
  onFocus?: InputProps['onFocus'];
  /**
   * Called when the inner input loses focus (composed with TextField border state).
   */
  onBlur?: InputProps['onBlur'];
  /**
   * Additional props for the inner `Input`. Use `accessibilityState={{ required: true }}` when
   * the field is required. Do not pass `placeholder`, `isReadonly`, `onFocus`, or `onBlur` here;
   * use the TextField-level props above.
   */
  inputProps?: TextFieldInputProps;
  /**
   * Optional twrnc classes for the root `Box`.
   */
  twClassName?: string;
  /**
   * Optional style for the root `Box`.
   */
  style?: StyleProp<ViewStyle>;
  /**
   * Optional test id for the root `Box`.
   */
  testID?: string;
};

type TextFieldReservedBoxKeys =
  | keyof TextFieldBaseProps
  | 'accessible'
  | 'children'
  | 'style';

/**
 * TextField props: `TextFieldBaseProps` plus remaining `BoxProps` at the top
 * level, excluding keys reserved by TextField.
 */
export type TextFieldProps = TextFieldBaseProps &
  Omit<BoxProps, TextFieldReservedBoxKeys>;
