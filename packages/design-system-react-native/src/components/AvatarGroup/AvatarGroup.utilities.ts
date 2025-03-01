/* eslint-disable jsdoc/check-param-names */
/* eslint-disable jsdoc/require-param */
import { DEFAULT_AVATARBASE_PROPS } from './AvatarBase.constants';
import type { AvatarBaseProps } from './AvatarBase.types';
import { TWCLASSMAP_AVATARBASE_SIZE_SHAPE } from './AvatarBase.constants';
import { AvatarBaseShape } from '../../shared/enums';

/**
 * Generates a Tailwind class name string for the base container of an avatar.
 *
 * This function constructs a class name string based on the avatar's `size`,
 * `shape`, and optional additional Tailwind class names.
 *
 * @param size - The size of the avatar, defaulting to `DEFAULT_AVATARBASE_PROPS.size`.
 * @param shape - The shape of the avatar, either `circle` or another defined shape.
 * @param twClassName - Additional Tailwind class names for customization.
 * @returns A string of Tailwind class names representing the avatar's container styles.
 *
 * Example:
 * ```
 * const classNames = generateAvatarBaseContainerClassNames({
 *   size: 48,
 *   shape: 'circle',
 *   twClassName: 'border border-gray-500',
 * });
 *
 * console.log(classNames);
 * // Output: "items-center justify-center overflow-hidden bg-background-muted h-[48px] w-[48px] rounded-full border border-gray-500"
 * ```
 */
export const generateAvatarBaseContainerClassNames = ({
  size = DEFAULT_AVATARBASE_PROPS.size,
  shape = DEFAULT_AVATARBASE_PROPS.shape,
  twClassName = '',
}: Partial<AvatarBaseProps>): string => {
  const baseStyle = 'items-center justify-center overflow-hidden';
  const fallbackBackgroundStyle = 'bg-background-muted';
  const sizeStyle = `h-[${size}px] w-[${size}px]`;
  const shapeStyle =
    shape === AvatarBaseShape.Circle
      ? 'rounded-full'
      : TWCLASSMAP_AVATARBASE_SIZE_SHAPE[size];

  const mergedClassnames = `${baseStyle} ${fallbackBackgroundStyle} ${sizeStyle} ${shapeStyle} ${twClassName}`;
  return mergedClassnames;
};
