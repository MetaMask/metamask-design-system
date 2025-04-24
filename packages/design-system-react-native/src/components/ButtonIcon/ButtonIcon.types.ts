import type { StyleProp, ViewStyle } from 'react-native';

import { ButtonIconSize } from '../../types';
import { ButtonAnimatedProps } from '../temp-components/ButtonAnimated';
import type { IconProps, IconName } from '../Icon';

/**
 * ButtonIcon component props.
 */
export type ButtonIconProps = {
  /**
   * Optional prop to control the size of the icon
   * Different sizes map to specific pixel dimensions
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
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Optional prop to show the inverse state of the button, which is reserved for buttons on colored backgrounds.
   * @default false
   */
  isInverse?: boolean;
  /**
   * Optional prop to show the floating/contained state of the button, which is reserved for floating buttons.
   * Note: This prop provides styling only. There is no positioning logic.
   * @default false
   */
  isFloating?: boolean;
  /**
   * Optional prop to add twrnc overriding classNames.
   */
  twClassName?: string;
  /**
   * Optional prop to control the style.
   */
  style?: StyleProp<ViewStyle>;
} & Omit<ButtonAnimatedProps, 'children'>;
