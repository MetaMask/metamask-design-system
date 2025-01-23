import type { ButtonBaseProps } from '../button-base';

export type ButtonTertiaryProps = Omit<
  ButtonBaseProps,
  'className' | 'isDisabled' | 'isLoading' | 'style'
> & {
  /**
   * Optional prop for additional CSS classes to be applied to the ButtonTertiary component
   */
  className?: string;
  /**
   * Optional prop that when true, applies error/danger styling to the button
   * @default false
   */
  isDanger?: boolean;
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
   * Optional CSS styles to be applied to the component.
   * Should be used sparingly and only for dynamic styles that can't be achieved with className.
   */
  style?: React.CSSProperties;
};
