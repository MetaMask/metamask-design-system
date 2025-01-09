/* eslint-disable jsdoc/check-param-names */
/* eslint-disable jsdoc/require-param */
import type { ButtonLinkProps } from './ButtonLink.types';

/**
 * Generates a Tailwind class name for the icon based on color and optional additional classes.
 *
 * @param size - Different sizes map to specific pixel dimensions
 * @param twClassName - Additional Tailwind class names for customization.
 * @returns A combined string of class names.
 *
 * Example:
 * ```
 * const classNames = generateButtonLinkClassNames({
 *   size: ButtonLinkSize.Md
 * });
 *
 * console.log(classNames);
 * // Output: "h-10 items-center justify-center bg-muted px-4"
 * ```
 */
export const generateButtonLinkClassNames = ({
  isPressed = false,
  isDanger = false,
  isInverse = false,
  isLoading = false,
  twClassName = '',
}: Partial<ButtonLinkProps>): string => {
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
    backgroundStyle = isPressedOrLoading ? 'bg-error-muted' : 'bg-transparent';
    borderColorStyle = isPressedOrLoading
      ? 'border-error-muted'
      : 'border-transparent';
  } else if (isInverse) {
    backgroundStyle = isPressedOrLoading
      ? 'bg-background-pressed'
      : 'bg-transparent';
    borderColorStyle = 'border-primary-inverse';
  } else {
    backgroundStyle = isPressedOrLoading
      ? 'bg-background-pressed'
      : 'bg-transparent';
    borderColorStyle = isPressedOrLoading
      ? 'border-background-pressed'
      : 'border-transparent';
  }

  const borderWidthStyle = 'border-[1.5px]';

  return `${backgroundStyle} ${borderWidthStyle} ${borderColorStyle} ${twClassName}`;
};
