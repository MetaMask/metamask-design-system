/* eslint-disable jsdoc/check-param-names */
/* eslint-disable jsdoc/require-param */
import { IconColor, IconSize } from '../../types';
import type { IconProps } from './Icon.types';

/**
 * Generates a Tailwind class name for the icon based on color and optional additional classes.
 *
 * @param color - The color of the icon, mapped to a Tailwind class.
 * @param size - Different sizes map to specific pixel dimensions
 * @param twClassName - Additional Tailwind class names for customization.
 * @returns A combined string of class names.
 *
 * Example:
 * ```
 * const classNames = generateIconClassNames({
 *   color: IconColor.IconDefault,
 *   size: IconSize.Md
 * });
 *
 * console.log(classNames);
 * // Output: "text-icon-default w-[20px] h-[20px]"
 * ```
 */
export const generateIconClassNames = ({
  color = IconColor.IconDefault,
  size = IconSize.Md,
  twClassName = '',
}: Partial<IconProps>): string => {
  const mergedClassnames = `${color} w-[${size}px] h-[${size}px] ${twClassName}`;
  return mergedClassnames;
};
