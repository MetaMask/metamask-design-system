/* eslint-disable jsdoc/check-param-names */
/* eslint-disable jsdoc/require-param */
import {
  DEFAULT_ICON_ICONCOLOR,
  DEFAULT_ICON_ICONSIZE,
  TWCLASSMAP_ICON_ICONSIZE,
} from './Icon.constants';
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
  color = DEFAULT_ICON_ICONCOLOR,
  size = DEFAULT_ICON_ICONSIZE,
  twClassName = '',
}: Partial<IconProps>): string => {
  const mergedClassnames = `${color} ${TWCLASSMAP_ICON_ICONSIZE[size]} ${twClassName}`;
  return mergedClassnames;
};
