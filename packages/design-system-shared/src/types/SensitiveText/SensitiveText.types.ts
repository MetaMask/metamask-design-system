import type { ReactNode } from 'react';

/**
 * SensitiveText - length
 * Predefined length options for hidden bullet content (ADR-0003).
 * Values represent the number of bullet characters displayed when text is hidden.
 */
export const SensitiveTextLength = {
  /**
   * 6 bullet characters
   */
  Short: '6',
  /**
   * 9 bullet characters
   */
  Medium: '9',
  /**
   * 12 bullet characters
   */
  Long: '12',
  /**
   * 20 bullet characters
   */
  ExtraLong: '20',
} as const;
export type SensitiveTextLength =
  (typeof SensitiveTextLength)[keyof typeof SensitiveTextLength];

/**
 * Type for custom length values passed as numeric strings (e.g. `"15"`).
 */
export type CustomLength = string;

/**
 * SensitiveText component shared props (ADR-0004)
 * Platform-independent properties shared across React and React Native.
 */
export type SensitiveTextPropsShared = {
  /**
   * Whether the text content should be hidden.
   * When true, content is replaced with bullet characters.
   *
   * @default false
   */
  isHidden?: boolean;
  /**
   * The number of bullet characters to display when hidden.
   * Can be a predefined `SensitiveTextLength` or a custom numeric string.
   *
   * @default SensitiveTextLength.Short
   */
  length?: SensitiveTextLength | CustomLength;
  /**
   * The text content to display or hide.
   */
  children?: ReactNode;
};
