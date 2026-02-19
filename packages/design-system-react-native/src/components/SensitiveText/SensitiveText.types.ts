import type { TextProps } from '../Text/Text.types';

import type { SensitiveTextLength } from './SensitiveText.constants';

/**
 * Type for SensitiveTextLength values.
 */
export type SensitiveTextLengthType =
  (typeof SensitiveTextLength)[keyof typeof SensitiveTextLength];

/**
 * Type for custom length values.
 */
export type CustomLength = string;

/**
 * SensitiveText component props.
 *
 * Extends TextProps to inherit all Text component properties
 * including variant, color, fontWeight, twClassName, and standard
 * React Native TextProps such as testID and accessibilityLabel.
 */
export type SensitiveTextProps = {
  /**
   * Whether the text content should be hidden.
   * When true, content is replaced with bullet characters.
   *
   * @default false
   */
  isHidden?: boolean;
  /**
   * The number of bullet characters to display when hidden.
   * Can be a predefined SensitiveTextLength or a custom numeric string.
   *
   * @default SensitiveTextLength.Short
   */
  length?: SensitiveTextLengthType | CustomLength;
  /**
   * The text content to display or hide.
   */
  children: React.ReactNode;
} & TextProps;
