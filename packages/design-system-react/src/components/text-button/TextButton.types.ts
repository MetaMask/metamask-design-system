import type { ButtonBaseProps } from '../button-base';
import type { TextVariant } from '../text';

export type TextButtonProps = Omit<
  ButtonBaseProps,
  // We handle these props in TextButton
  'className' | 'isDisabled' | 'isLoading' | 'style' | 'size'
> & {
  /**
   * Optional prop for additional CSS classes to be applied to the TextButton component
   */
  className?: string;
  /**
   * Optional prop that when true, applies inverse styling to the button
   * @default false
   */
  isInverse?: boolean;
  /**
   * Optional prop that when true, disables the button
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Optional prop that when true, shows a loading spinner
   * @default false
   */
  isLoading?: boolean;
  /**
   * Optional prop to specify the text variant
   * @default TextVariant.BodyMd
   */
  textVariant?: TextVariant;
  /**
   * Optional CSS styles to be applied to the component.
   * Should be used sparingly and only for dynamic styles that can't be achieved with className.
   */
  style?: React.CSSProperties;
};
