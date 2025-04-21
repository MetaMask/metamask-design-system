/* eslint-disable jsdoc/check-param-names */
/* eslint-disable jsdoc/require-param */
import { ButtonIconSize } from '../../types';
import type { IconColor } from '../Icon';
import type { ButtonIconProps } from './ButtonIcon.types';

/**
 * Generates a Tailwind class name string for the icon button container.
 *
 * This function constructs a class name string based on the button icon's `size`,
 * `isDisabled`, `isPressed`, `isFloating`, and optional additional Tailwind class names.
 *
 * @param isDisabled - Determines whether the button is disabled, affecting opacity.
 * @param isPressed - Determines whether the button is pressed, affecting background color.
 * @param isFloating - Determines whether the button should have a floating, rounded appearance.
 * @param size - The size of the button in pixels.
 * @param twClassName - Additional Tailwind class names for customization.
 * @returns A string of Tailwind class names representing the button icon's container styles.
 *
 * Example:
 * ```
 * const classNames = generateButtonIconContainerClassNames({
 *   isDisabled: true,
 *   isPressed: false,
 *   isFloating: true,
 *   size: 48,
 *   twClassName: 'border border-blue-500',
 * });
 *
 * console.log(classNames);
 * // Output: "items-center justify-center rounded-full h-[48px] w-[48px] bg-icon-default opacity-50 border border-blue-500"
 * ```
 */
export const generateButtonIconContainerClassNames = ({
  isDisabled = false,
  isPressed = false,
  isFloating = false,
  size = ButtonIconSize.Md,
  twClassName = '',
}: Partial<ButtonIconProps> & {
  isPressed?: boolean;
}): string => {
  const baseStyle = 'items-center justify-center';
  const backgroundStyle = isFloating ? 'rounded-full' : 'rounded-sm';
  const sizeStyle = `h-[${size as string}px] w-[${size as string}px]`;

  let backgroundColor;

  if (isFloating) {
    backgroundColor = `bg-icon-default`;
  } else {
    backgroundColor = isPressed ? 'bg-background-pressed' : 'bg-transparent';
  }

  const opacityStyle = `opacity-${isDisabled ? 50 : 100}`;

  return `${baseStyle} ${backgroundStyle} ${sizeStyle} ${backgroundColor} ${opacityStyle} ${twClassName}`;
};

/**
 * Generates a Tailwind class name string for the icon color of a button icon.
 *
 * This function determines the appropriate icon color class based on whether
 * the button icon is using an inverse theme or is floating.
 *
 * @param isInverse - Determines if the button icon should use an inverse theme, affecting text color.
 * @param isFloating - Determines if the button icon is floating, affecting text color.
 * @returns A string representing the Tailwind class name for the button icon color.
 *
 * Example:
 * ```
 * const classNames = generateButtonIconIconColorClassNames({
 *   isInverse: true,
 *   isFloating: false,
 * });
 *
 * console.log(classNames);
 * // Output: "text-primary-inverse"
 * ```
 */
export const generateButtonIconIconColorClassNames = ({
  isInverse = false,
  isFloating = false,
}: Partial<ButtonIconProps>): IconColor => {
  const iconColor =
    isInverse || isFloating ? 'text-primary-inverse' : 'text-icon-default';

  return `${iconColor}` as IconColor;
};
