/* eslint-disable jsdoc/check-param-names */
/* eslint-disable jsdoc/require-param */
import { DEFAULT_BUTTONBASE_PROPS } from './ButtonBase.constants';
import type { ButtonBaseProps } from './ButtonBase.types';

/**
 * Generates a Tailwind class name string for the base container of a button.
 *
 * This function constructs a class name string based on the button's `size`,
 * `isDisabled`, `isFullWidth`, and optional additional Tailwind class names.
 *
 * @param size - The size of the button, defaulting to `DEFAULT_BUTTONBASE_PROPS.size`.
 * @param isDisabled - A boolean indicating whether the button is disabled, affecting opacity.
 * @param isFullWidth - A boolean indicating whether the button should stretch to full width.
 * @param twClassName - Additional Tailwind class names for customization.
 * @returns A string of Tailwind class names representing the button's container styles.
 *
 * Example:
 * ```
 * const classNames = generateButtonBaseContainerClassNames({
 *   size: 'md',
 *   isDisabled: true,
 *   isFullWidth: false,
 *   twClassName: 'border border-red-500',
 * });
 *
 * console.log(classNames);
 * // Output: "md-class flex-row items-center justify-center rounded-full bg-background-muted px-4 opacity-50 self-start border border-red-500"
 * ```
 */
export const generateButtonBaseContainerClassNames = ({
  size = DEFAULT_BUTTONBASE_PROPS.size,
  isDisabled,
  isFullWidth,
  twClassName = '',
}: Partial<ButtonBaseProps>): string => {
  const baseStyle =
    'flex-row items-center justify-center rounded-full bg-background-muted px-4';
  const sizeStyle = `h-[${size}px]`;
  const disabledStyle = isDisabled ? 'opacity-50' : 'opacity-100';
  const widthStyle = isFullWidth ? 'self-stretch' : 'self-start';
  const mergedClassnames = `${sizeStyle} ${baseStyle} ${disabledStyle} ${widthStyle} ${twClassName}`;
  return mergedClassnames;
};
