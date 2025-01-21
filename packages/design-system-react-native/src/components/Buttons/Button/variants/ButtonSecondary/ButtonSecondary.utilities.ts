/* eslint-disable jsdoc/check-param-names */
/* eslint-disable jsdoc/require-param */
import type { ButtonSecondaryProps } from './ButtonSecondary.types';

/**
 * Generates a Tailwind class name for the icon based on color and optional additional classes.
 *
 * @param size - Different sizes map to specific pixel dimensions
 * @param twClassName - Additional Tailwind class names for customization.
 * @returns A combined string of class names.
 *
 * Example:
 * ```
 * const classNames = generateButtonSecondaryClassNames({
 *   size: ButtonSecondarySize.Md
 * });
 *
 * console.log(classNames);
 * // Output: "h-10 items-center justify-center bg-muted px-4"
 * ```
 */
export const generateButtonSecondaryClassNames = ({
  isPressed = false,
  isDanger = false,
  isInverse = false,
  isLoading = false,
  twClassName = '',
}: Partial<ButtonSecondaryProps> & {
  isPressed?: boolean;
}): string => {
  let backgroundStyle;
  let borderColorStyle;

  const isPressedOrLoading = isPressed || isLoading;

  if (isInverse && isDanger) {
    backgroundStyle = isPressedOrLoading
      ? 'bg-background-defaultPressed'
      : 'bg-background-default';
    borderColorStyle = isPressedOrLoading
      ? 'border-background-defaultPressed'
      : 'border-background-default';
  } else if (isDanger) {
    backgroundStyle = isPressedOrLoading
      ? 'bg-error-mutedPressed'
      : 'bg-transparent';
    borderColorStyle = isPressedOrLoading
      ? 'border-error-defaultPressed'
      : 'border-error-default';
  } else if (isInverse) {
    backgroundStyle = isPressedOrLoading
      ? 'bg-background-pressed'
      : 'bg-transparent';
    borderColorStyle = 'border-primary-inverse';
  } else {
    backgroundStyle = isPressedOrLoading
      ? 'bg-background-pressed'
      : 'bg-transparent';
    borderColorStyle = 'border-icon-default';
  }

  const borderWidthStyle = 'border-[1.5px]';

  return `${backgroundStyle} ${borderWidthStyle} ${borderColorStyle} ${twClassName}`;
};
