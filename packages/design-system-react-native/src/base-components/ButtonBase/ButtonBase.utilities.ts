/* eslint-disable jsdoc/check-param-names */
/* eslint-disable jsdoc/require-param */
import {
  DEFAULT_BUTTONBASE_PROPS,
  TWCLASSMAP_BUTTONBASE_SIZE,
} from './ButtonBase.constants';
import type { ButtonBaseProps, ButtonBaseSize } from './ButtonBase.types';

/**
 * Generates a Tailwind class name for the icon based on color and optional additional classes.
 *
 * @param size - Different sizes map to specific pixel dimensions
 * @param twClassName - Additional Tailwind class names for customization.
 * @returns A combined string of class names.
 *
 * Example:
 * ```
 * const classNames = generateButtonBaseClassNames({
 *   size: ButtonBaseSize.Md
 * });
 *
 * console.log(classNames);
 * // Output: "h-10 items-center justify-center bg-muted px-4"
 * ```
 */
export const generateButtonBaseClassNames = ({
  size = DEFAULT_BUTTONBASE_PROPS.size,
  isDisabled,
  isFullWidth,
  twClassName = '',
}: Partial<ButtonBaseProps>): string => {
  const baseStyle =
    'flex-row items-center justify-center rounded-full bg-background-muted px-4 gap-x-2';
  const sizeStyle = TWCLASSMAP_BUTTONBASE_SIZE[size as ButtonBaseSize];
  const disabledStyle = isDisabled ? 'opacity-50' : 'opacity-100';
  const widthStyle = isFullWidth ? 'self-stretch' : 'self-start';
  const mergedClassnames = `${sizeStyle} ${baseStyle} ${disabledStyle} ${widthStyle} ${twClassName}`;
  return mergedClassnames;
};
