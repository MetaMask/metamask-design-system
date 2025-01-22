/* eslint-disable jsdoc/check-param-names */
/* eslint-disable jsdoc/require-param */
import type { ButtonTertiaryProps } from './ButtonTertiary.types';

/**
 * Generates Tailwind class names for a tertiary button's container based on its state.
 *
 * This function calculates the background, border color, and border width styles dynamically
 * depending on the button's state (`isPressed`, `isDanger`, `isInverse`, `isLoading`). It also
 * allows additional Tailwind classes to be appended using the `twClassName` parameter.
 *
 * @param isPressed - Indicates whether the button is currently being pressed.
 * @param isDanger - Indicates whether the button is in a "danger" state.
 * @param isInverse - Indicates whether the button is using an "inverse" theme.
 * @param isLoading - Indicates whether the button is in a loading state.
 * @param twClassName - Additional Tailwind class names for customization.
 * @returns A string containing the combined Tailwind class names for the container's background,
 * border styles, and any additional classes.
 *
 * Example:
 * ```
 * const classNames = generateButtonTertiaryContainerClassNames({
 *   isPressed: true,
 *   isDanger: true,
 *   isInverse: false,
 *   isLoading: false,
 *   twClassName: 'rounded-full',
 * });
 *
 * console.log(classNames);
 * // Output: "bg-error-mutedPressed border-0 border-error-mutedPressed rounded-full"
 *
 * const inverseClassNames = generateButtonTertiaryContainerClassNames({
 *   isInverse: true,
 *   twClassName: 'rounded-lg',
 * });
 *
 * console.log(inverseClassNames);
 * // Output: "bg-transparent border-[1.5px] border-primary-inverse rounded-lg"
 * ```
 *
 * State Priorities:
 * 1. If `isInverse` and `isDanger` are true, styles are dynamically determined based on `isPressed` or `isLoading`.
 * 2. If only `isDanger` is true, the styles reflect error-related colors with no borders.
 * 3. If only `isInverse` is true, a border width is added along with inverse-specific styles.
 * 4. If none of the above states are true, default styles are applied for a non-danger, non-inverse tertiary button.
 */
export const generateButtonTertiaryContainerClassNames = ({
  isPressed = false,
  isDanger = false,
  isInverse = false,
  isLoading = false,
  twClassName = '',
}: Partial<ButtonTertiaryProps> & {
  isPressed?: boolean;
}): string => {
  let backgroundStyle, borderColorStyle;
  let borderWidthStyle = 'border-0';

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
      ? 'border-error-mutedPressed'
      : 'border-transparent';
  } else if (isInverse) {
    backgroundStyle = isPressedOrLoading
      ? 'bg-background-pressed'
      : 'bg-transparent';
    borderColorStyle = 'border-primary-inverse';
    borderWidthStyle = 'border-[1.5px]';
  } else {
    backgroundStyle = isPressedOrLoading
      ? 'bg-background-pressed'
      : 'bg-transparent';
    borderColorStyle = isPressedOrLoading
      ? 'border-background-pressed'
      : 'border-transparent';
  }

  return `${backgroundStyle} ${borderWidthStyle} ${borderColorStyle} ${twClassName}`;
};

/**
 * Generates Tailwind class names for a tertiary button's text styling based on its state.
 *
 * This function determines the appropriate text color class name for a tertiary button
 * by evaluating the current states (`isPressed`, `isDanger`, `isInverse`, `isLoading`).
 * The returned class name dynamically reflects the button's configuration.
 *
 * @param isPressed - Indicates whether the button is currently being pressed.
 * @param isDanger - Indicates whether the button is in a "danger" state.
 * @param isInverse - Indicates whether the button is using an "inverse" theme.
 * @param isLoading - Indicates whether the button is in a loading state.
 * @returns A string containing the Tailwind class name for the button's text color.
 *
 * Example:
 * ```
 * const classNames = generateButtonTertiaryTextClassNames({
 *   isPressed: true,
 *   isDanger: true,
 *   isInverse: false,
 *   isLoading: false,
 * });
 *
 * console.log(classNames);
 * // Output: "text-error-defaultPressed"
 *
 * const defaultClassNames = generateButtonTertiaryTextClassNames({});
 *
 * console.log(defaultClassNames);
 * // Output: "text-primary-default"
 * ```
 *
 * State Priorities:
 * 1. If `isInverse` and `isDanger` are true, the text color is determined dynamically based on `isPressed` or `isLoading`.
 * 2. If only `isDanger` is true, the text color defaults to `text-error-default` or `text-error-defaultPressed` depending on the state.
 * 3. If only `isInverse` is true, the text color is `text-primary-inverse`.
 * 4. If none of the above states are true, the text color defaults to `text-primary-default`.
 */
export const generateButtonTertiaryTextClassNames = ({
  isPressed = false,
  isDanger = false,
  isInverse = false,
  isLoading = false,
}: Partial<ButtonTertiaryProps> & {
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
    textColor = isPressedOrLoading
      ? 'text-primary-defaultPressed'
      : 'text-primary-default';
  }

  return `${textColor}`;
};
