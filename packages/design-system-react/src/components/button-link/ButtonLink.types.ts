import type { ButtonBaseProps } from '../button-base';
import { ButtonBaseSize } from '../button-base';

export enum ButtonLinkSize {
  Sm = ButtonBaseSize.Sm,
  Md = ButtonBaseSize.Md,
  Lg = ButtonBaseSize.Lg,
  /**
   * Inherits font size from parent, removes height/padding, displays inline
   */
  Inherit = 'inherit',
}

export type ButtonLinkProps = Omit<
  ButtonBaseProps,
  'className' | 'isDisabled' | 'isLoading' | 'style' | 'size'
> & {
  /**
   * Optional prop for additional CSS classes to be applied to the ButtonLink component
   */
  className?: string;
  /**
   * Optional prop that when true, applies error/danger styling to the button
   * @default false
   */
  isDanger?: boolean;
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
  /**
   * Optional prop to control the size of the ButtonLink
   * @default ButtonLinkSize.Md
   */
  size?: ButtonLinkSize;
};
