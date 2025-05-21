import type { ButtonBaseProps } from '../../../ButtonBase';

export type ButtonTertiaryProps = ButtonBaseProps & {
  /**
   * Optional prop for additional CSS classes to be applied to the ButtonTertiary component
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
