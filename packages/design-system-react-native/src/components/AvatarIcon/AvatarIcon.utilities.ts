/* eslint-disable jsdoc/check-param-names */
/* eslint-disable jsdoc/require-param */
import type { AvatarIconProps } from './AvatarIcon.types';
import {
  TWCLASSMAP_AVATARICON_SEVERITY_BACKGROUNDCOLOR,
  DEFAULT_AVATARICON_PROPS,
} from './AvatarIcon.constants';

/**
 * Generates a Tailwind class name string for the base container of a button.
 *
 * This function constructs a class name string based on the button's `size`,
 * `isDisabled`, `isFullWidth`, and optional additional Tailwind class names.
 *
 * @param size - The size of the button, defaulting to `DEFAULT_AVATARICON_PROPS.size`.
 * @param isDisabled - A boolean indicating whether the button is disabled, affecting opacity.
 * @param isFullWidth - A boolean indicating whether the button should stretch to full width.
 * @param twClassName - Additional Tailwind class names for customization.
 * @returns A string of Tailwind class names representing the button's container styles.
 *
 * Example:
 * ```
 * const classNames = generateAvatarIconContainerClassNames({
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
export const generateAvatarIconContainerClassNames = ({
  severity = DEFAULT_AVATARICON_PROPS.severity,
  twClassName = '',
}: Partial<AvatarIconProps>): string => {
  return `${TWCLASSMAP_AVATARICON_SEVERITY_BACKGROUNDCOLOR[severity]} ${twClassName}`;
};
