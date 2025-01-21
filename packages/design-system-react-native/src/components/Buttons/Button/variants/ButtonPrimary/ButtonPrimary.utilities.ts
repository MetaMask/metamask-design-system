/* eslint-disable jsdoc/check-param-names */
/* eslint-disable jsdoc/require-param */
import type { ButtonPrimaryProps } from './ButtonPrimary.types';

/**
 * Generates a Tailwind class name for the container based on its state and optional additional classes.
 *
 * This function computes the appropriate background class name for a button's container, considering its
 * `isPressed`, `isDanger`, `isInverse`, and `isLoading` states. Additional Tailwind class names can
 * also be appended using the `twClassName` parameter.
 *
 * @param isPressed - Indicates whether the button is currently being pressed.
 * @param isDanger - Indicates whether the button is in a "danger" state.
 * @param isInverse - Indicates whether the button is using an "inverse" theme.
 * @param isLoading - Indicates whether the button is in a loading state.
 * @param twClassName - Additional Tailwind class names for customization.
 * @returns A combined string of Tailwind class names for the container's background styling.
 *
 * Example:
 * ```
 * const classNames = generateButtonPrimaryContainerClassNames({
 *   isPressed: true,
 *   isDanger: false,
 *   isInverse: true,
 *   isLoading: false,
 *   twClassName: 'rounded-lg',
 * });
 *
 * console.log(classNames);
 * // Output: "bg-background-defaultPressed rounded-lg"
 * ```
 */
export const generateButtonPrimaryContainerClassNames = ({
  isPressed = false,
  isDanger = false,
  isInverse = false,
  isLoading = false,
  twClassName = '',
}: Partial<ButtonPrimaryProps> & {
  isPressed?: boolean;
}): string => {
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

/**
 * Generates a Tailwind class name for the text based on the button's state.
 *
 * This function calculates the appropriate text color class for a button based on its
 * `isPressed`, `isDanger`, `isInverse`, and `isLoading` states. The returned class
 * name determines how the button's text will be styled dynamically.
 *
 * @param isPressed - Indicates whether the button is currently being pressed.
 * @param isDanger - Indicates whether the button is in a "danger" state.
 * @param isInverse - Indicates whether the button is using an "inverse" theme.
 * @param isLoading - Indicates whether the button is in a loading state.
 * @returns A string representing the Tailwind class for the text color.
 *
 * Example:
 * ```
 * const classNames = generateButtonPrimaryTextClassNames({
 *   isPressed: true,
 *   isDanger: false,
 *   isInverse: true,
 *   isLoading: false,
 * });
 *
 * console.log(classNames);
 * // Output: "text-text-default"
 *
 * const dangerPressed = generateButtonPrimaryTextClassNames({
 *   isPressed: true,
 *   isDanger: true,
 *   isInverse: true,
 *   isLoading: false,
 * });
 *
 * console.log(dangerPressed);
 * // Output: "text-error-defaultPressed"
 * ```
 *
 * State Priorities:
 * 1. If `isInverse` and `isDanger` are true, the class changes dynamically based on `isPressed` or `isLoading`.
 * 2. If only `isDanger` is true, the text uses `text-primary-inverse`.
 * 3. If only `isInverse` is true, the text uses `text-text-default`.
 * 4. If none of the above states are true, the text defaults to `text-primary-inverse`.
 */
export const generateButtonPrimaryTextClassNames = ({
  isPressed = false,
  isDanger = false,
  isInverse = false,
  isLoading = false,
}: Partial<ButtonPrimaryProps> & {
  isPressed?: boolean;
}): string => {
  let textColor;
  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  const isPressedOrLoading = isPressed || isLoading;

  if (isDanger) {
    textColor = 'text-primary-inverse';
  } else if (isInverse) {
    textColor = 'text-text-default';
  } else {
    textColor = 'text-primary-inverse';
  }
  if (isInverse && isDanger) {
    const pressedOrLoading = isPressedOrLoading;
    textColor = pressedOrLoading
      ? 'text-error-defaultPressed'
      : 'text-error-default';
  }

  return `${textColor}`;
};
