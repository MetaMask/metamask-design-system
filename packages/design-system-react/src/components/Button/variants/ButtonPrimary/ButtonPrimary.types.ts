import type { ButtonBaseProps } from '../../../ButtonBase';

export type ButtonPrimaryProps = ButtonBaseProps & {
  /**
   * Optional prop for additional CSS classes to be applied to the ButtonPrimary component
   */
  className?: string;
  /**
   * Optional prop that when true, applies error/danger styling to the button
   *
   * @default false
   */
  isDanger?: boolean;
  /**
   * Optional prop that when true, applies dark theme styling to the button
   *
   * @default false
   */
  isInverse?: boolean;
};
