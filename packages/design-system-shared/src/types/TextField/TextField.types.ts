import type { ReactNode } from 'react';

/**
 * TextField shared props (ADR-0004).
 *
 * Platform-independent fields for a controlled text field and optional chrome
 * (accessories, custom input slot). Styling, `testID`, native-only `inputProps`,
 * and typed focus/blur handlers stay on the platform layer.
 */
export type TextFieldPropsShared = {
  /** Controlled value. */
  value: string;
  /**
   * Called when the text changes. Uses React Native `TextInput` naming; web
   * implementations may map this from the native input change event.
   */
  onChangeText?: (text: string) => void;
  /** Placeholder shown when `value` is empty. */
  placeholder?: string;
  /** When true, the value cannot be edited. */
  isReadonly?: boolean;
  /**
   * When true, interaction and editing are disabled.
   *
   * @default false
   */
  isDisabled?: boolean;
  /**
   * When true, the field shows an error state (for example border treatment).
   *
   * @default false
   */
  isError?: boolean;
  /**
   * When true, the field requests focus on mount.
   *
   * @default false
   */
  autoFocus?: boolean;
  /** Optional content before the input. */
  startAccessory?: ReactNode;
  /** Optional content after the input. */
  endAccessory?: ReactNode;
  /** Replaces the default field input implementation. */
  inputElement?: ReactNode;
};
