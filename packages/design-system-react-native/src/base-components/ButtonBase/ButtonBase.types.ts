import type { PressableProps } from 'react-native';

import type { IconProps, IconName } from '../../components/Icons/Icon';

export enum ButtonBaseSize {
  /**
   * Represents a small button size (32px).
   */
  Sm = 'sm',
  /**
   * Represents a medium button size (40px).
   */
  Md = 'md',
  /**
   * Represents a large button size (48px).
   */
  Lg = 'lg',
}

/**
 * ButtonBase component props.
 */
export type ButtonBaseProps = {
  /**
   * Required prop for the content to be rendered within the ButtonBase
   */
  children: React.ReactNode;
  /**
   * Optional prop to control the size of the ButtonBase
   * Possible values: ButtonBaseSize.Sm (32px), ButtonBaseSize.Md (40px), ButtonBaseSize.Lg (48px)
   * @default ButtonBaseSize.Md
   */
  size?: ButtonBaseSize;
  /**
   * Optional prop that when true, shows a loading spinner
   * @default false
   */
  isLoading?: boolean;
  /**
   * Optional prop to specify an icon to show at the start of the button
   */
  startIconName?: IconName;
  /**
   * Optional prop to pass additional properties to the start icon
   */
  startIconProps?: Partial<IconProps>;
  /**
   * Optional prop for a custom element to show at the start of the button
   */
  startAccessory?: React.ReactNode;
  /**
   * Optional prop to specify an icon to show at the end of the button
   */
  endIconName?: IconName;
  /**
   * Optional prop to pass additional properties to the end icon
   */
  endIconProps?: Partial<IconProps>;
  /**
   * Optional prop for a custom element to show at the end of the button
   */
  endAccessory?: React.ReactNode;
  /**
   * Optional prop that when true, disables the button
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Optional prop that when true, makes the button take up the full width of its container
   * @default false
   */
  isFullWidth?: boolean;
  /**
   * Optional prop to pass additional properties to the loading icon
   */
  loadingIconProps?: Partial<IconProps>;
  /**
   * Optional prop to add twrnc overriding classNames.
   */
  twClassName?: string;
} & PressableProps;
