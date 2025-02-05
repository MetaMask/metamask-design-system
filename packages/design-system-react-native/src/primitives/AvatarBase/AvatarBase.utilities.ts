/* eslint-disable jsdoc/check-param-names */
/* eslint-disable jsdoc/require-param */
import { DEFAULT_AVATARBASE_PROPS } from './AvatarBase.constants';
import type { AvatarBaseProps } from './AvatarBase.types';
import { AvatarBaseShape } from './AvatarBase.types';
import { TWCLASSMAP_AVATARBASE_SHAPE } from './AvatarBase.constants';

/**
 * Generates a Tailwind class name string for the base container of a button.
 *
 * This function constructs a class name string based on the button's `size`,
 * `isDisabled`, `isFullWidth`, and optional additional Tailwind class names.
 *
 * @param size - The size of the button, defaulting to `DEFAULT_AVATARBASE_PROPS.size`.
 * @param isDisabled - A boolean indicating whether the button is disabled, affecting opacity.
 * @param isFullWidth - A boolean indicating whether the button should stretch to full width.
 * @param twClassName - Additional Tailwind class names for customization.
 * @returns A string of Tailwind class names representing the button's container styles.
 *
 * Example:
 * ```
 * const classNames = generateAvatarBaseContainerClassNames({
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
export const generateAvatarBaseContainerClassNames = ({
  size = DEFAULT_AVATARBASE_PROPS.size,
  shape = DEFAULT_AVATARBASE_PROPS.shape,
  twClassName = '',
}: Partial<AvatarBaseProps>): string => {
  const baseStyle = 'items-center justify-center';
  const fallbackBackgroundStyle = 'bg-icon-alternative';
  const sizeStyle = `h-[${size}px]`;
  const shapeStyle =
    shape === AvatarBaseShape.Circle
      ? 'rounded-full'
      : TWCLASSMAP_AVATARBASE_SHAPE[size];

  const mergedClassnames = `${baseStyle} ${fallbackBackgroundStyle} ${sizeStyle} ${twClassName}`;
  return mergedClassnames;
};
