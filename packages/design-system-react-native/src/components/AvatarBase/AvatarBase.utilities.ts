/* eslint-disable jsdoc/check-param-names */
/* eslint-disable jsdoc/require-param */
import { AvatarBaseShape } from '../../types';
import {
  DEFAULT_AVATARBASE_PROPS,
  TWCLASSMAP_AVATARBASE_SIZE_SHAPE,
  MAP_AVATARBASE_SIZE_BORDERWIDTH,
} from './AvatarBase.constants';
import type { AvatarBaseProps } from './AvatarBase.types';

/**
 * Generates a Tailwind class name string for the base container of an avatar.
 *
 * This function constructs a class name string based on the avatar's `size`,
 * `shape`, `hasBorder`, `hasSolidBackgroundColor`, and optional additional Tailwind class names.
 *
 * @param size - The size of the avatar, defaulting to `DEFAULT_AVATARBASE_PROPS.size`.
 * @param shape - The shape of the avatar, either `circle` or another defined shape.
 * @param hasBorder - A boolean indicating whether the avatar has a border.
 * @param hasSolidBackgroundColor - A boolean indicating whether the avatar has a solid background color.
 * @param twClassName - Additional Tailwind class names for customization.
 * @returns A string of Tailwind class names representing the avatar's container styles.
 *
 * Example:
 * ```
 * const classNames = generateAvatarBaseContainerClassNames({
 *   size: 48,
 *   shape: 'circle',
 *   hasBorder: true,
 *   hasSolidBackgroundColor: true,
 *   twClassName: 'shadow-md',
 * });
 *
 * console.log(classNames);
 * // Output: "items-center justify-center overflow-hidden bg-background-default h-[52px] w-[52px] rounded-full border-background-default border-[2px] shadow-md"
 * ```
 */
export const generateAvatarBaseContainerClassNames = ({
  size = DEFAULT_AVATARBASE_PROPS.size, // AvatarSize.Md
  shape = DEFAULT_AVATARBASE_PROPS.shape, // AvatarShape.Circle
  hasBorder = DEFAULT_AVATARBASE_PROPS.hasBorder, // false
  hasSolidBackgroundColor = DEFAULT_AVATARBASE_PROPS.hasSolidBackgroundColor, // false
  twClassName = '',
}: Partial<AvatarBaseProps>): string => {
  const baseStyle = 'items-center justify-center overflow-hidden';
  const transparentBgStyle = hasSolidBackgroundColor
    ? 'bg-background-default'
    : 'bg-transparent';
  const totalSize = hasBorder
    ? Number(size) + MAP_AVATARBASE_SIZE_BORDERWIDTH[size] * 2
    : Number(size);
  Number(size) + MAP_AVATARBASE_SIZE_BORDERWIDTH[size] * 2;
  const sizeStyle = `h-[${totalSize}px] w-[${totalSize}px]`;
  const shapeStyle =
    shape === AvatarBaseShape.Circle
      ? 'rounded-full'
      : TWCLASSMAP_AVATARBASE_SIZE_SHAPE[size];
  const borderStyle = hasBorder
    ? `border-background-default border-[${MAP_AVATARBASE_SIZE_BORDERWIDTH[size]}px]`
    : '';

  const mergedClassnames =
    `${baseStyle} ${transparentBgStyle} ${sizeStyle} ${shapeStyle} ${borderStyle} ${twClassName}`.trim();
  return mergedClassnames;
};
