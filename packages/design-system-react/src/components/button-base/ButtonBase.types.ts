import type { ComponentProps } from 'react';

import type { MakePropsOptional } from '../../types/make-props-optional';
import type { IconName, IconProps } from '../icon';

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

export type ButtonBaseProps = ComponentProps<'button'> & {
  /**
   * Required prop for the content to be rendered within the ButtonBase
   */
  children: React.ReactNode;
  /**
   * Optional prop for additional CSS classes to be applied to the ButtonBase component.
   * These classes will be merged with the component's default classes using twMerge.
   */
  className?: string;
  /**
   * Optional prop to control the size of the ButtonBase
   * @default ButtonBaseSize.Md
   */
  size?: ButtonBaseSize;
  /**
   * Optional prop that when true, makes the button take up the full width of its container
   * @default false
   */
  isFullWidth?: boolean;
  /**
   * Optional boolean that determines if the component should merge its props onto its immediate child
   * instead of rendering a button element
   * @default false
   */
  asChild?: boolean;
  /**
   * Optional prop that when true, shows a loading spinner
   * @default false
   */
  isLoading?: boolean;
  /**
   * Optional prop for text to display when button is in loading state
   */
  loadingText?: string;
  /**
   * Optional prop to specify an icon to show at the start of the button
   */
  startIconName?: IconName;
  /**
   * Optional prop to pass additional properties to the start icon
   */
  startIconProps?: MakePropsOptional<IconProps>;
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
  endIconProps?: MakePropsOptional<IconProps>;
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
   * Optional prop to pass additional properties to the loading icon
   */
  loadingIconProps?: MakePropsOptional<IconProps>;
  /**
   * Optional CSS styles to be applied to the component.
   * Should be used sparingly and only for dynamic styles that can't be achieved with className.
   */
  style?: React.CSSProperties;
};
