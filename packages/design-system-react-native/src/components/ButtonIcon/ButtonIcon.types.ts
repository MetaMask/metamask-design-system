import type { StyleProp, ViewStyle } from 'react-native';

import type { ButtonIconSize, ButtonIconVariant } from '../../types';
import type { IconProps, IconName } from '../Icon';
import type { ButtonAnimatedProps } from '../temp-components/ButtonAnimated';

/**
 * ButtonIcon component props.
 */
export type ButtonIconProps = {
  /**
   * Optional prop to control the size of the icon
   * Different sizes map to specific pixel dimensions
   *
   * @default IconSize.Md
   */
  size?: ButtonIconSize;
  /**
   * Optional prop to specify an icon to show
   */
  iconName: IconName;
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
   * Optional prop to add twrnc overriding classNames.
   */
  twClassName?: string;
  /**
   * Optional prop to control the style.
   */
  style?: StyleProp<ViewStyle>;
} & Omit<ButtonAnimatedProps, 'children'>;
