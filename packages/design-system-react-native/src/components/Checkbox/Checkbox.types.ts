import type { CheckboxPropsShared } from '@metamask/design-system-shared';
import type { PressableProps, ViewProps } from 'react-native';

import type { IconProps } from '../Icon';
import type { TextProps } from '../Text';

/**
 * Checkbox component props.
 */
export type CheckboxProps = CheckboxPropsShared & {
  /**
   * Optional props to be passed to the label's Text component.
   */
  labelProps?: Omit<Partial<TextProps>, 'children'>;

  /**
   * Optional props passed to the container view wrapping the checkbox icon.
   */
  checkboxContainerProps?: Omit<Partial<ViewProps>, 'children'>;

  /**
   * Optional props to be passed to the check Icon component.
   */
  checkedIconProps?: Partial<IconProps>;

  /**
   * Optional prop to add twrnc overriding classNames.
   */
  twClassName?: string;

  /**
   * Optional prop to control the style.
   */
  style?: PressableProps['style'];
} & Omit<PressableProps, 'children'>;
