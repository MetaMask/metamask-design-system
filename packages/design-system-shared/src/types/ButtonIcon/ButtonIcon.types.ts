import type { IconName } from '../Icon';

/**
 * ButtonIcon - size
 * Convert from enum to const object (ADR-0003)
 */
export const ButtonIconSize = {
  /**
   * Represents a small button size (24px).
   */
  Sm: 'sm',
  /**
   * Represents a medium button size (32px).
   */
  Md: 'md',
  /**
   * Represents a large button size (40px).
   */
  Lg: 'lg',
} as const;
export type ButtonIconSize =
  (typeof ButtonIconSize)[keyof typeof ButtonIconSize];

/**
 * ButtonIcon - variant
 * Convert from enum to const object (ADR-0003)
 */
export const ButtonIconVariant = {
  /**
   * Represents the default button icon variant (transparent background).
   */
  Default: 'default',
  /**
   * Represents a filled button icon variant (muted background).
   */
  Filled: 'filled',
  /**
   * Represents a floating button icon variant (icon-default background, full circle).
   */
  Floating: 'floating',
} as const;
export type ButtonIconVariant =
  (typeof ButtonIconVariant)[keyof typeof ButtonIconVariant];

/**
 * ButtonIcon component shared props (ADR-0004)
 * Platform-independent properties shared across React and React Native
 */
export type ButtonIconPropsShared = {
  /**
   * Required prop to specify the icon to show
   */
  iconName: IconName;
  /**
   * Optional prop to control the size of the button
   *
   * @default ButtonIconSize.Md
   */
  size?: ButtonIconSize;
  /**
   * Optional prop that when true, disables the button
   *
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Optional prop to control the visual variant of the button.
   *
   * @default ButtonIconVariant.Default
   */
  variant?: ButtonIconVariant;
};
