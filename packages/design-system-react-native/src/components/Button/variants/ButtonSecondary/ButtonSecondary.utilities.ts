/* eslint-disable jsdoc/check-param-names */
/* eslint-disable jsdoc/require-param */
import type { ButtonSecondaryProps } from './ButtonSecondary.types';

/**
 * Generates Tailwind class names for the button's container based on its state.
 *
 * This function calculates the appropriate background, border color, and border width
 * class names for a secondary button container. It considers the button's states
 * (`isPressed`, `isDanger`, `isInverse`, `isLoading`) to generate the correct styling,
 * and allows for additional customization through `twClassName`.
 *
 * @param isPressed - Indicates whether the button is currently being pressed.
 * @param isDanger - Indicates whether the button is in a "danger" state.
 * @param isInverse - Indicates whether the button is using an "inverse" theme.
 * @param isLoading - Indicates whether the button is in a loading state.
 * @param twClassName - Additional Tailwind class names for customization.
 * @returns A string representing the combined Tailwind class names for the container's background, border, and custom styles.
 *
 * Example:
 * ```
 * const classNames = generateButtonSecondaryContainerClassNames({
 *   isPressed: true,
 *   isDanger: true,
 *   isInverse: false,
 *   isLoading: false,
 *   twClassName: 'rounded-md',
 * });
 *
 * console.log(classNames);
 * // Output: "bg-error-mutedPressed border-[1.5px] border-error-defaultPressed rounded-md"
 *
 * const inverseClassNames = generateButtonSecondaryContainerClassNames({
 *   isInverse: true,
 *   twClassName: 'rounded-lg',
 * });
 *
 * console.log(inverseClassNames);
 * // Output: "bg-transparent border-[1.5px] border-primary-inverse rounded-lg"
 * ```
 *
 * State Priorities:
 * 1. If `isInverse` and `isDanger` are true, the background and border styles are derived dynamically based on `isPressed` or `isLoading`.
 * 2. If only `isDanger` is true, the background and border styles use error-specific values.
 * 3. If only `isInverse` is true, the border color uses inverse-specific values while the background remains transparent.
 * 4. If none of the above states are true, default styles are applied for a non-inverse, non-danger secondary button.
 * 5. The border width is always set to `border-[1.5px]`.
 */
export const generateButtonSecondaryContainerClassNames = ({
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

/**
 * Generates Tailwind class names for the text styling of a secondary button based on its state.
 *
 * This function determines the appropriate text color class name for a secondary button
 * by considering its current states (`isPressed`, `isDanger`, `isInverse`, `isLoading`).
 * The returned class name ensures that the text color dynamically adapts to the button's
 * configuration.
 *
 * @param isPressed - Indicates whether the button is currently being pressed.
 * @param isDanger - Indicates whether the button is in a "danger" state.
 * @param isInverse - Indicates whether the button is using an "inverse" theme.
 * @param isLoading - Indicates whether the button is in a loading state.
 * @returns A string representing the Tailwind class name for the button's text color.
 *
 * Example:
 * ```
 * const classNames = generateButtonSecondaryTextClassNames({
 *   isPressed: true,
 *   isDanger: true,
 *   isInverse: true,
 *   isLoading: false,
 * });
 *
 * console.log(classNames);
 * // Output: "text-error-defaultPressed"
 *
 * const defaultClassNames = generateButtonSecondaryTextClassNames({});
 *
 * console.log(defaultClassNames);
 * // Output: "text-text-default"
 * ```
 *
 * State Priorities:
 * 1. If `isInverse` and `isDanger` are true, the text color changes dynamically based on `isPressed` or `isLoading`.
 * 2. If only `isDanger` is true, the text uses `text-error-default` or `text-error-defaultPressed` depending on the state.
 * 3. If only `isInverse` is true, the text uses `text-primary-inverse`.
 * 4. If none of the above states are true, the text defaults to `text-text-default`.
 */
export const generateButtonSecondaryTextClassNames = ({
  isPressed = false,
  isDanger = false,
  isInverse = false,
  isLoading = false,
}: Partial<ButtonSecondaryProps> & {
  isPressed?: boolean;
}): string => {
  let textColor;
  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  const isPressedOrLoading = isPressed || isLoading;
  if (isInverse && isDanger) {
    textColor = isPressedOrLoading
      ? 'text-error-defaultPressed'
      : 'text-error-default';
  } else if (isDanger) {
    textColor = isPressedOrLoading
      ? 'text-error-defaultPressed'
      : 'text-error-default';
  } else if (isInverse) {
    textColor = 'text-primary-inverse';
  } else {
    textColor = 'text-text-default';
  }

  return `${textColor}`;
};
