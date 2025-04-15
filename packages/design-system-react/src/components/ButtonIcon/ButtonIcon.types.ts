import type { ButtonBaseProps } from '../ButtonBase';
import type { IconName, IconProps } from '../Icon';

export enum ButtonIconSize {
  /**
   * Represents a small button size (24px).
   */
  Sm = 'sm',
  /**
   * Represents a medium button size (32px).
   */
  Md = 'md',
  /**
   * Represents a large button size (40px).
   */
  Lg = 'lg',
}

export type ButtonIconProps = Omit<
  ButtonBaseProps,
  // We handle these props in ButtonIcon
  | 'className'
  | 'isDisabled'
  | 'isLoading'
  | 'style'
  | 'children'
  | 'size'
  | 'aria-label'
> & {
  /**
   * Required prop to specify the icon to show
   */
  iconName: IconName;
  /**
   * Required prop to provide an accessible label for the button
   */
  ariaLabel: string;
  /**
   * Optional prop to pass additional properties to the icon
   */
  iconProps?: Partial<IconProps>;
  /**
   * Optional prop that when true, disables the button
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Optional prop that when true, applies inverse styling to the button
   * @default false
   */
  isInverse?: boolean;
  /**
   * Optional prop that when true, applies floating/contained styling to the button
   * @default false
   */
  isFloating?: boolean;
  /**
   * Optional prop to control the size of the button
   * @default ButtonIconSize.Md
   */
  size?: ButtonIconSize;
  /**
   * Optional prop for additional CSS classes to be applied to the ButtonIcon component
   */
  className?: string;
  /**
   * Optional CSS styles to be applied to the component.
   * Should be used sparingly and only for dynamic styles that can't be achieved with className.
   */
  style?: React.CSSProperties;
};
