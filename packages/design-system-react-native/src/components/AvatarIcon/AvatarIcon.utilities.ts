/* eslint-disable jsdoc/check-param-names */
/* eslint-disable jsdoc/require-param */
import { AvatarIconSeverity } from '../../types';
import type { AvatarIconProps } from './AvatarIcon.types';
import { TWCLASSMAP_AVATARICON_SEVERITY_BACKGROUNDCOLOR } from './AvatarIcon.constants';

/**
 * Generates a Tailwind class name string for the background color of an avatar icon.
 *
 * This function constructs a class name string based on the icon's `severity`
 * and optional additional Tailwind class names.
 *
 * @param severity - The severity level of the avatar icon, affecting background color.
 * @param twClassName - Additional Tailwind class names for customization.
 * @returns A string of Tailwind class names representing the avatar icon's container styles.
 *
 * Example:
 * ```
 * const classNames = generateAvatarIconContainerClassNames({
 *   severity: 'error',
 *   twClassName: 'border border-red-500',
 * });
 *
 * console.log(classNames);
 * // Output: "bg-error border border-red-500"
 * ```
 */
export const generateAvatarIconContainerClassNames = ({
  severity = AvatarIconSeverity.Default,
  twClassName = '',
}: Partial<AvatarIconProps>): string => {
  return `${TWCLASSMAP_AVATARICON_SEVERITY_BACKGROUNDCOLOR[severity]} ${twClassName}`.trim();
};
