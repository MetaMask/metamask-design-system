import type { ButtonBaseProps } from '../../../ButtonBase';

export type ButtonSecondaryProps = ButtonBaseProps & {
  /**
   * Optional prop for additional CSS classes to be applied to the ButtonSecondary component
   */
  className?: string;
  /**
   * Optional prop that when true, applies error/danger styling to the button
   *
   * @default false
   */
  isDanger?: boolean;
  /**
   * Optional prop that when true, applies inverse styling to the button
   *
   * @default false
   */
  isInverse?: boolean;
};
