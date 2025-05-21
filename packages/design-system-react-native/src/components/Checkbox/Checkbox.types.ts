import type { StyleProp, PressableProps, ViewProps } from 'react-native';

import type { IconProps } from '../Icon';
import type { TextProps } from '../Text';
/**
 * Checkbox component props.
 */

export type CheckboxProps = {
  /**
   * Optional prop that when true, shows a checked checkbox.
   *
   * @default false
   */
  isSelected?: boolean;

  /**
   * Optional prop that when true, disables the checkbox
   *
   * @default false
   */
  isDisabled?: boolean;

  /**
   * Optional prop that when true, shows the invalid state
   *
   * @default false
   */
  isInvalid?: boolean;

  /**
   * Optional label prop
   */
  label?: React.ReactNode | string;

  /**
   * Optional props to be passed to the label's Text component
   */
  labelProps?: Omit<Partial<TextProps>, 'children'>;

  /**
   * Optional callback for when the checked state changes
   *
   * @default false
   */
  onChange?: (isSelected: boolean) => void;

  /**
   * Optional props to be passed to the checkbox container component
   */
  checkboxContainerProps?: Omit<Partial<ViewProps>, 'children'>;

  /**
   * Optional props to be passed to the label's Text component
   */
  checkedIconProps?: Partial<IconProps>;

  /**
   * Optional prop to add twrnc overriding classNames.
   */
  twClassName?: string;

  /**
   * Optional prop to control the style.
   */
  style?: StyleProp<PressableProps>;
} & Omit<PressableProps, 'children'>;
