import type { IconColor } from '../../components/Icons/Icon';
import type { TextProps } from '../../components/Text/Text.types';

/**
 * SpinnerTemp component props.
 */
export type SpinnerTempProps = {
  /**
   * Optional prop that sets the color of the spinner icon using predefined theme colors
   * @default IconColor.IconDefault
   */
  color?: IconColor;
  /**
   * Optional text to display on the right of the spinner, providing additional context or information about the loading state.
   */
  loadingText?: string;
  /**
   * Optional props to be passed to the loadingText element
   */
  loadingTextProps?: Omit<Partial<TextProps>, 'children'>;
};
