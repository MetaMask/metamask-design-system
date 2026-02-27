import type { ComponentProps } from 'react';

import type { ButtonIconSize, ButtonIconVariant } from '../../types';
import type { IconName, IconProps } from '../Icon';

export type ButtonIconProps = ComponentProps<'button'> & {
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
   *
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Optional prop to control the visual variant of the button.
   *
   * @default ButtonIconVariant.Default
   */
  variant?: ButtonIconVariant;
  /**
   * Optional prop to control the size of the button
   *
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
