import type { ViewProps } from 'react-native';

import type { IconProps, IconColor } from '../Icon';
import type { TextProps } from '../Text';

/**
 * Spinner component props.
 */
export type SpinnerProps = {
  /**
   * Optional prop that sets the color of the spinner icon using predefined theme colors
   *
   * @default IconColor.IconDefault
   */
  color?: IconColor;
  /**
   * Optional props to be passed to the loadingText element
   */
  spinnerIconProps?: Partial<IconProps>;
  /**
   * Optional text to display on the right of the spinner, providing additional context or information about the loading state.
   */
  loadingText?: string;
  /**
   * Optional props to be passed to the loadingText element
   */
  loadingTextProps?: Omit<Partial<TextProps>, 'children'>;
  /**
   * Optional prop to add twrnc overriding classNames.
   *
   * @deprecated Use `className` instead. `twClassName` remains supported for existing callers and will be removed in a future major version.
   */
  twClassName?: string;
  /**
   * Tailwind classes from `@metamask/design-system-twrnc-preset`.
   * Applied after `twClassName` when both are set, so these classes win.
   */
  className?: string;
} & ViewProps;
