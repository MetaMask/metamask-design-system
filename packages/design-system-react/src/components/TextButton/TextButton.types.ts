import type { TextButtonSize } from '../../types';
import type { ButtonBaseProps } from '../ButtonBase';

export type TextButtonProps = Omit<
  ButtonBaseProps,
  // We handle these props in TextButton
  | 'className'
  | 'isDisabled'
  | 'isLoading'
  | 'loadingIconProps'
  | 'loadingTextProps'
  | 'style'
  | 'size'
> & {
  /**
   * Optional prop for additional CSS classes to be applied to the TextButton component
   */
  className?: string;
  /**
   * Optional prop that when true, applies inverse styling to the button
   *
   * @default false
   */
  isInverse?: boolean;
  /**
   * Optional prop that when true, disables the button
   *
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Optional prop to specify the size of the TextButton
   *
   * @default TextButtonSize.BodyMd
   */
  size?: TextButtonSize;
  /**
   * Optional CSS styles to be applied to the component.
   * Should be used sparingly and only for dynamic styles that can't be achieved with className.
   */
  style?: React.CSSProperties;
};
