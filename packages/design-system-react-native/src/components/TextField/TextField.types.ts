import type { TextFieldPropsShared } from '@metamask/design-system-shared';
import type { PressableProps, StyleProp, ViewStyle } from 'react-native';

import type { InputProps } from '../Input/Input.types';

/**
 * Additional props merged onto the inner `Input` (`../Input/Input.tsx`).
 *
 * TextField owns `value`, `onChangeText`, `placeholder`, `isReadonly`, `onFocus`,
 * `onBlur`, `isDisabled`, `autoFocus`, typography, and inner layout.
 * `placeholderTextColor` is omitted (Input sets it from theme).
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
  | 'twClassName'
  | 'value'
>;

/**
 * React Native `TextField` props between `TextFieldPropsShared` and the root
 * `Pressable`: typed focus/blur handlers, `inputProps`, container styling, and
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
   * Optional twrnc classes for the container Pressable.
   */
  twClassName?: string;
  /**
   * Optional style for the container Pressable.
   */
  style?: StyleProp<ViewStyle>;
  /**
   * Optional test id for the root Pressable.
   */
  testID?: string;
};

type TextFieldReservedPressableKeys =
  | keyof TextFieldBaseProps
  | 'accessible'
  | 'children'
  | 'disabled'
  | 'onPress'
  | 'style';

/**
 * TextField props: `TextFieldBaseProps` plus remaining `Pressable` props at the
 * top level (tap-to-focus wrapper), excluding keys reserved by TextField.
 */
export type TextFieldProps = TextFieldBaseProps &
  Omit<PressableProps, TextFieldReservedPressableKeys>;
