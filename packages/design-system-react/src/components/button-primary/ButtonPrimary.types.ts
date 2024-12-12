import type { ButtonBaseProps } from '../button-base';

export type ButtonPrimaryProps = Omit<
  ButtonBaseProps,
  // We handle these props in ButtonPrimary
  'className' | 'isDisabled' | 'isLoading' | 'style'
> & {
  /**
   * Optional prop for additional CSS classes to be applied to the ButtonPrimary component
   */
  className?: string;
  /**
   * Optional prop that when true, applies error/danger styling to the button
   * @default false
   */
  isDanger?: boolean;
  /**
   * Optional prop that when true, applies dark theme styling to the button
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
   * Optional CSS styles to be applied to the component.
   * Should be used sparingly and only for dynamic styles that can't be achieved with className.
   */
  style?: React.CSSProperties;
};
