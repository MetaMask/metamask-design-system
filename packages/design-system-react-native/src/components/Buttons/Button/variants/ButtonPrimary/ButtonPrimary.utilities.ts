/* eslint-disable jsdoc/check-param-names */
/* eslint-disable jsdoc/require-param */
import type { ButtonPrimaryProps } from './ButtonPrimary.types';

/**
 * Generates a Tailwind class name for the icon based on color and optional additional classes.
 *
 * @param size - Different sizes map to specific pixel dimensions
 * @param twClassName - Additional Tailwind class names for customization.
 * @returns A combined string of class names.
 *
 * Example:
 * ```
 * const classNames = generateButtonPrimaryClassNames({
 *   size: ButtonPrimarySize.Md
 * });
 *
 * console.log(classNames);
 * // Output: "h-10 items-center justify-center bg-muted px-4"
 * ```
 */
export const generateButtonPrimaryClassNames = ({
  isPressed = false,
  isDanger = false,
  isInverse = false,
  isLoading = false,
  twClassName = '',
}: Partial<ButtonPrimaryProps>): string => {
  let backgroundStyle;
  const isPressedOrLoading = isPressed || isLoading;

  if (isInverse && isDanger) {
    backgroundStyle = isPressedOrLoading
      ? 'bg-background-defaultPressed'
      : 'bg-background-default';
  } else if (isDanger) {
    backgroundStyle = isPressedOrLoading
      ? 'bg-error-defaultPressed'
      : 'bg-error-default';
  } else if (isInverse) {
    backgroundStyle = isPressedOrLoading
      ? 'bg-background-defaultPressed'
      : 'bg-background-default';
  } else {
    backgroundStyle = isPressedOrLoading
      ? 'bg-primary-defaultPressed'
      : 'bg-primary-default';
  }

  return `${backgroundStyle} ${twClassName}`;
};
