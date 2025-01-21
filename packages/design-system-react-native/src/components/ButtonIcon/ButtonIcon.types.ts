import type { PressableProps, StyleProp, ViewStyle } from 'react-native';

import type { SpinnerProps } from '../../temp-components/Spinner';
import type { IconProps, IconName, IconSize } from '../Icon';

/**
 * Button variants.
 */
export enum ButtonIconVariant {
  Primary = 'Primary',
  Secondary = 'Secondary',
}

/**
 * ButtonIcon component props.
 */
export type ButtonIconProps = {
  /**
   * Variant of ButtonIcon
   * @default ButtonIconVariant.Secondary
   */
  variant?: ButtonIconVariant;
  /**
   * Optional prop to control the size of the icon
   * Different sizes map to specific pixel dimensions
   * @default IconSize.Md
   */
  size?: IconSize;
  /**
   * Optional prop that when true, shows a loading spinner
   * @default false
   */
  isLoading?: boolean;
  /**
   * Optional prop to pass additional properties to the end icon
   */
  spinnerProps?: Partial<SpinnerProps>;
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
   * Optional prop to add twrnc overriding classNames.
   */
  twClassName?: string;
  /**
   * Optional prop to control the style.
   */
  style?: StyleProp<ViewStyle>;
} & Omit<PressableProps, 'children'>;
