import type { TextAreaPropsShared } from '@metamask/design-system-shared';
import type { Ref } from 'react';
import type { StyleProp, TextInput, ViewStyle } from 'react-native';

import type { BoxProps } from '../Box/Box.types';
import type { InputProps } from '../Input/Input.types';

/**
 * Additional props merged onto the inner `Input` (`../Input/Input.tsx`).
 *
 * TextArea owns `value`, `onChangeText`, `placeholder`, `isReadOnly`, `onFocus`,
 * `onBlur`, `isDisabled`, `autoFocus`, typography, multiline (always on), and inner
 * layout (merged with any `twClassName` you pass here). `placeholderTextColor` is
 * omitted (Input sets it from theme).
 */
type TextAreaInputProps = Omit<
  InputProps,
  | 'autoFocus'
  | 'isDisabled'
  | 'isReadOnly'
  | 'isStateStylesDisabled'
  | 'multiline'
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
 * React Native `TextArea` props between `TextAreaPropsShared` and the root
 * `Box`: typed focus/blur handlers, `inputProps`, container styling, and
 * `testID`.
 */
export type TextAreaBaseProps = TextAreaPropsShared & {
  /**
   * Called when the inner input receives focus (composed with TextArea border state).
   */
  onFocus?: InputProps['onFocus'];
  /**
   * Called when the inner input loses focus (composed with TextArea border state).
   */
  onBlur?: InputProps['onBlur'];
  /**
   * Additional props for the inner `Input`. Do not pass `placeholder`, `isReadOnly`, `onFocus`, `onBlur`, or `multiline` here;
   * use the TextArea-level props where applicable. For accessibility, prefer `accessibilityLabel` and `accessibilityHint` on
   * `inputProps`. `placeholderTextColor` is omitted from the type; the inner `Input` sets it from the theme.
   */
  inputProps?: TextAreaInputProps;
  /**
   * Ref to the inner `TextInput`. The component `ref` targets the root `Box` (`View`).
   */
  inputRef?: Ref<TextInput>;
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

type TextAreaReservedBoxKeys =
  | keyof TextAreaBaseProps
  | 'accessible'
  | 'children'
  | 'style';

/**
 * TextArea props: `TextAreaBaseProps` plus remaining `BoxProps` at the top
 * level, excluding keys reserved by TextArea.
 */
export type TextAreaProps = TextAreaBaseProps &
  Omit<BoxProps, TextAreaReservedBoxKeys>;
