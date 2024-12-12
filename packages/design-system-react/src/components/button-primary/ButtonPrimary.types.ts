import type { ButtonBaseProps } from '../button-base';

export type ButtonPrimaryProps = Omit<
  ButtonBaseProps,
  'className' // We want to handle className ourselves
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
   * Optional prop that when true, applies inverse styling to the button
   * @default false
   */
  isInverse?: boolean;
};
