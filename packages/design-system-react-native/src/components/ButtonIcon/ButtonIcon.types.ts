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
   * Optional prop to add twrnc overriding classNames.
   *
   * @deprecated Use `className` instead. `twClassName` remains supported for existing callers and will be removed in a future major version.
   */
  twClassName?: string;
  /**
   * Tailwind classes from `@metamask/design-system-twrnc-preset`.
   * Applied after `twClassName` when both are set, so these classes win.
   */
  className?: string;
  /**
   * Optional prop to control the style.
   */
  style?: StyleProp<ViewStyle>;
} & Omit<ButtonAnimatedProps, 'children'>;
