/**
 * Textarea component shared props (ADR-0004)
 * Platform-independent properties shared across React and React Native
 */
export type TextareaPropsShared = {
  /**
   * Optional boolean to disable the textarea.
   *
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Optional boolean to make the textarea read-only.
   *
   * @default false
   */
  isReadOnly?: boolean;
  /**
   * Optional boolean to indicate an error state.
   *
   * @default false
   */
  isError?: boolean;
};
