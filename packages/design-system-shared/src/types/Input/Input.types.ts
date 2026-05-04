import type { TextVariant } from '../Text/Text.types';

/**
 * Input component shared props (ADR-0004)
 * Platform-independent properties shared across React and React Native
 */
export type InputPropsShared = {
  /**
   * Controlled value for Input.
   */
  value: string;
  /**
   * Optional placeholder shown when `value` is empty.
   */
  placeholder?: string;
  /**
   * Optional prop to select between Typography variants.
   *
   * @default TextVariant.BodyMd
   */
  textVariant?: TextVariant;
  /**
   * Optional boolean to disable Input.
   *
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Optional boolean to show readonly input.
   *
   * @default false
   */
  isReadOnly?: boolean;
  /**
   * When true, the input requests focus on mount.
   *
   * @default false
   */
  autoFocus?: boolean;
  /**
   * Optional boolean to disable state styles.
   *
   * @default false
   */
  isStateStylesDisabled?: boolean;
};
