import type {
  InputPropsShared,
  TextAreaPropsShared,
} from '@metamask/design-system-shared';

import type { InputProps } from '../Input/Input.types';

/**
 * Additional props merged onto the `Input` (`../Input/Input.tsx`).
 *
 * TextArea owns `value`, `onChangeText`, `placeholder`, `isReadOnly`, `onFocus`,
 * `onBlur`, `isDisabled`, `autoFocus`, `textVariant`, multiline (always on),
 * and `placeholderTextColor` (Input sets it from theme).
 */
type TextAreaInputProps = Omit<
  InputProps,
  | keyof InputPropsShared
  | 'editable'
  | 'multiline'
  | 'onBlur'
  | 'onChangeText'
  | 'onFocus'
  | 'placeholderTextColor'
>;

/**
 * React Native `TextArea` props: shared textarea state plus the remaining
 * `TextInput` props that are meaningful for the `TextInput`.
 */
export type TextAreaProps = TextAreaPropsShared &
  TextAreaInputProps & {
    /**
     * Called when the `TextInput` value changes (React Native naming).
     */
    onChangeText?: InputProps['onChangeText'];
    /**
     * Called when the `TextInput` receives focus (composed with TextArea border state).
     */
    onFocus?: InputProps['onFocus'];
    /**
     * Called when the `TextInput` loses focus (composed with TextArea border state).
     */
    onBlur?: InputProps['onBlur'];
  };
