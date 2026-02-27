import type { ButtonBaseProps } from '../ButtonBase';

/**
 * ButtonSemantic severity variants.
 * Uses const object with derived union type (ADR-0003).
 */
export const ButtonSemanticSeverity = {
  /**
   * Green color scheme for positive/confirmatory actions.
   */
  Success: 'success',
  /**
   * Red color scheme for destructive/dangerous actions.
   */
  Danger: 'danger',
} as const;

export type ButtonSemanticSeverity =
  (typeof ButtonSemanticSeverity)[keyof typeof ButtonSemanticSeverity];

/**
 * ButtonSemantic component props.
 * Extends ButtonBaseProps which includes PressableProps
 * (onPress, testID, accessibilityLabel, etc.).
 */
export type ButtonSemanticProps = {
  /**
   * Required prop to control the severity/color scheme of the button.
   * - ButtonSemanticSeverity.Success: Green color scheme for positive actions
   * - ButtonSemanticSeverity.Danger: Red color scheme for destructive actions
   */
  severity: ButtonSemanticSeverity;
} & ButtonBaseProps;
