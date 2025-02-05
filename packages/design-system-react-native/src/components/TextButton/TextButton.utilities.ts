/* eslint-disable jsdoc/check-param-names */
/* eslint-disable jsdoc/require-param */
import type { TextButtonProps } from './TextButton.types';

/**
 * Generates a Tailwind class name for the text button container based on its state and optional additional classes.
 *
 * This function computes the appropriate background class name for a text button's container, considering its
 * `isPressed` and `isLoading` states. Additional Tailwind class names can also be appended using the `twClassName` parameter.
 *
 * @param isPressed - Indicates whether the button is currently being pressed.
 * @param isLoading - Indicates whether the button is in a loading state.
 * @param isDisabled - Indicates whether the button is in a disabled state.
 * @param twClassName - Additional Tailwind class names for customization.
 * @returns A combined string of Tailwind class names for the container's background styling.
 *
 * Example:
 * ```
 * const classNames = generateTextButtonContainerClassNames({
 *   isPressed: true,
 *   isLoading: false,
 *   twClassName: 'rounded-full',
 * });
 *
 * console.log(classNames);
 * // Output: "bg-background-pressed rounded-full"
 * ```
 */
export const generateTextButtonContainerClassNames = ({
  isPressed = false,
  isLoading = false,
  isDisabled = false,
  twClassName = '',
}: Partial<TextButtonProps> & {
  isPressed?: boolean;
}): string => {
  const isPressedOrLoading = isPressed || isLoading;
  const backgroundStyle = isPressedOrLoading
    ? 'bg-background-pressed'
    : 'bg-transparent';
  const opacityStyle = `opacity-${isDisabled ? 50 : 100}`;

  return `${backgroundStyle} ${opacityStyle} ${twClassName}`;
};

/**
 * Generates a Tailwind class name for the text button's text based on its state.
 *
 * This function computes the appropriate text color and style class names for a text button,
 * considering its `isPressed`, `isInverse`, and `isLoading` states.
 *
 * @param isPressed - Indicates whether the button is currently being pressed.
 * @param isInverse - Indicates whether the button is using an "inverse" theme.
 * @param isLoading - Indicates whether the button is in a loading state.
 * @returns A combined string of Tailwind class names for the text's color and style.
 *
 * Example:
 * ```
 * const classNames = generateTextButtonTextClassNames({
 *   isPressed: true,
 *   isInverse: false,
 *   isLoading: false,
 * });
 *
 * console.log(classNames);
 * // Output: "text-primary-defaultPressed underline"
 * ```
 */
export const generateTextButtonTextClassNames = ({
  isPressed = false,
  isInverse = false,
  isLoading = false,
}: Partial<TextButtonProps> & {
  isPressed?: boolean;
}): string => {
  let textColor, textStyle;
  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  const isPressedOrLoading = isPressed || isLoading;
  if (isInverse) {
    textColor = 'text-primary-inverse';
    textStyle = 'underline';
  } else {
    textColor = isPressedOrLoading
      ? 'text-primary-defaultPressed'
      : 'text-primary-default';
    textStyle = isPressedOrLoading ? 'underline' : 'no-underline';
  }

  return `${textColor} ${textStyle}`;
};
