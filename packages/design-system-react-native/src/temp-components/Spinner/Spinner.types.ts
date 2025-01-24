import type { ViewProps } from 'react-native';

import type { SpinnerColor } from '.';
import type { IconProps } from '../../components/Icon';
import type { TextProps } from '../../components/Text/Text.types';

/**
 * Spinner component props.
 */
export type SpinnerProps = {
  /**
   * Optional prop that sets the color of the spinner icon using predefined theme colors
   * @default SpinnerColor.IconDefault
   */
  color?: SpinnerColor;
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
   */
  twClassName?: string;
} & ViewProps;
