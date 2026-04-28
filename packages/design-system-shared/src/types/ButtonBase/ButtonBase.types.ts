/**
 * ButtonBase - size
 * Convert from enum to const object (ADR-0003)
 */
export const ButtonBaseSize = {
  /**
   * Represents a small button size (32px).
   */
  Sm: 'sm',
  /**
   * Represents a medium button size (40px).
   */
  Md: 'md',
  /**
   * Represents a large button size (48px).
   */
  Lg: 'lg',
} as const;
export type ButtonBaseSize =
  (typeof ButtonBaseSize)[keyof typeof ButtonBaseSize];

export const ButtonSize = ButtonBaseSize;
export type ButtonSize = ButtonBaseSize;

export const ButtonHeroSize = ButtonBaseSize;
export type ButtonHeroSize = ButtonBaseSize;

/**
 * ButtonBase component shared props (ADR-0004)
 * Platform-independent properties shared across React and React Native
 */
export type ButtonBasePropsShared = {
  /**
   * Required prop for the content to be rendered within the ButtonBase
   */
  children: React.ReactNode;
  /**
   * Optional prop to control the size of the ButtonBase
   *
   * @default ButtonBaseSize.Lg
   */
  size?: ButtonBaseSize;
  /**
   * Optional prop that when true, shows a loading spinner
   *
   * @default false
   */
  isLoading?: boolean;
  /**
   * Optional prop for text to display when button is in loading state
   */
  loadingText?: string;
  /**
   * Optional prop that when true, disables the button
   *
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Optional prop that when true, makes the button take up the full width of its container
   *
   * @default false
   */
  isFullWidth?: boolean;
};
