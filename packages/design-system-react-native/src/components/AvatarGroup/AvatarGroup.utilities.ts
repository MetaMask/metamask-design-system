/* eslint-disable jsdoc/check-param-names */
/* eslint-disable jsdoc/require-param */
import { AvatarGroupSize, AvatarGroupVariant } from '../../types';
import {
  TWCLASSMAP_AVATARBASE_HASBORDER_SIZE_DIMENSION,
  TWCLASSMAP_AVATARBASE_SIZE_BORDERRADIUSS_SQUARE,
  TWCLASSMAP_AVATARBASE_SIZE_BORDER,
} from '../AvatarBase/AvatarBase.constants';
import { MAP_AVATARGROUP_SIZE_SPACEBETWEENAVATARS } from './AvatarGroup.constants';
import type { AvatarGroupProps } from './AvatarGroup.types';

/**
 * Generates a Tailwind class name string for the container of an avatar group.
 *
 * This function constructs a class name string based on the avatar group's `size`,
 * `isReverse`, and optional additional Tailwind class names.
 *
 * @param size - The size of the avatar group, determining spacing between avatars.
 * @param isReverse - A boolean indicating whether the avatar group should be reversed in order.
 * @param twClassName - Additional Tailwind class names for customization.
 * @returns A string of Tailwind class names representing the avatar group's container styles.
 *
 * Example:
 * ```
 * const classNames = generateAvatarGroupContainerClassNames({
 *   size: 'md',
 *   isReverse: true,
 *   twClassName: 'justify-center',
 * });
 *
 * console.log(classNames);
 * // Output: "flex-row-reverse gap-[8px] justify-center"
 * ```
 */
export const generateAvatarGroupContainerClassNames = ({
  size = AvatarGroupSize.Md,
  isReverse = false,
  twClassName = '',
}: Partial<AvatarGroupProps>): string => {
  const rowStyle = isReverse ? 'flex-row-reverse' : 'flex-row';
  const gapStyle = `gap-[${MAP_AVATARGROUP_SIZE_SPACEBETWEENAVATARS[size]}px]`;

  return `${rowStyle} ${gapStyle} ${twClassName}`.trim();
};

/**
 * Generates a Tailwind class name string for the overflow text container in an avatar group.
 *
 * This function constructs a class name string based on the avatar group's `size`,
 * `variant`, and default styling rules.
 *
 * @param size - The size of the avatar group, determining dimensions and border width.
 * @param variant - The variant of the avatar group, affecting border radius.
 * @returns A string of Tailwind class names representing the avatar group's overflow text container styles.
 *
 * Example:
 * ```
 * const classNames = generateAvatarGroupOverflowTextContainerClassNames({
 *   size: 48,
 *   variant: 'network',
 * });
 *
 * console.log(classNames);
 * // Output: "bg-icon-default items-center justify-center overflow-hidden w-[52px] h-[52px] rounded-md border-background-default border-[2px]"
 * ```
 */
export const generateAvatarGroupOverflowTextContainerClassNames = ({
  size = AvatarGroupSize.Md,
  variant,
}: Partial<AvatarGroupProps>): string => {
  const baseStyle =
    'bg-icon-default items-center justify-center overflow-hidden';
  const sizeStyle = `${TWCLASSMAP_AVATARBASE_HASBORDER_SIZE_DIMENSION[size]}`;
  const borderStyle = `${TWCLASSMAP_AVATARBASE_SIZE_BORDER[size]}`;
  const borderRadiusStyle =
    variant === AvatarGroupVariant.Network
      ? TWCLASSMAP_AVATARBASE_SIZE_BORDERRADIUSS_SQUARE[size]
      : 'rounded-full';
  return `${baseStyle} ${sizeStyle} ${borderRadiusStyle} ${borderStyle}`;
};
