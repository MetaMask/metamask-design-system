/**
 * Button - variant
 * Convert from enum to const object (ADR-0003)
 */
export const ButtonVariant = {
  /**
   * Primary button variant - used for primary actions
   */
  Primary: 'primary',
  /**
   * Secondary button variant - used for secondary actions
   */
  Secondary: 'secondary',
  /**
   * Tertiary button variant - used for tertiary-like actions
   */
  Tertiary: 'tertiary',
} as const;
export type ButtonVariant = (typeof ButtonVariant)[keyof typeof ButtonVariant];

/**
 * Button component shared props (ADR-0004)
 * Platform-independent properties shared across React and React Native
 */
export type ButtonPropsShared = {
  /**
   * Optional prop to control the variant of the Button
   *
   * @default ButtonVariant.Primary
   */
  variant?: ButtonVariant;
};
