import type { ButtonIconPropsShared } from '@metamask/design-system-shared';
import type { StyleProp, ViewStyle } from 'react-native';

import type { IconName, IconProps } from '../Icon';
import type { ButtonAnimatedProps } from '../temp-components/ButtonAnimated';

/**
 * ButtonIcon component props.
 */
export type ButtonIconProps = Omit<ButtonIconPropsShared, 'iconName'> & {
  /**
   * Optional prop to specify an icon to show
   */
  iconName: IconName;
  /**
   * Optional prop to pass additional properties to the icon
   */
  iconProps?: Partial<IconProps>;
  /**
   * Optional prop to add twrnc overriding classNames.
   */
  twClassName?: string;
  /**
   * Optional prop to control the style.
   */
  style?: StyleProp<ViewStyle>;
} & Omit<ButtonAnimatedProps, 'children'>;
