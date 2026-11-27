import type { ButtonIconPropsShared } from '@metamask/design-system-shared';
import type { StyleProp, ViewStyle } from 'react-native';

import type { IconProps } from '../Icon';
import type { ButtonAnimatedProps } from '../temp-components/ButtonAnimated';

/**
 * ButtonIcon component props.
 */
export type ButtonIconProps = ButtonIconPropsShared & {
  /**
   * Optional prop to pass additional properties to the icon
   */
  iconProps?: Partial<IconProps>;
  /**
   * @deprecated Use `className` instead.
   */
  twClassName?: string;
  /**
   * Optional Tailwind classes. Merged after the component's own classes and `twClassName`, so `className` wins on conflicts.
   */
  className?: string;
  /**
   * Optional prop to control the style.
   */
  style?: StyleProp<ViewStyle>;
} & Omit<ButtonAnimatedProps, 'children'>;
