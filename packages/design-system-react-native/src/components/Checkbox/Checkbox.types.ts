import type { PressableProps, ViewProps } from 'react-native';

import type { IconProps } from '../Icon';
import type { TextProps } from '../Text';
/**
 * Checkbox component props.
 */

export type CheckboxProps = {
  /**
   * Required prop to determine whether the checkbox is currently selected.
   * This component is fully controlled, so you must manage this state
   * in your parent component.
   */
  isSelected: boolean;

  /**
   * Optional prop that when true, disables the checkbox.
   *
   * @default false
   */
  isDisabled?: boolean;

  /**
   * Optional prop that when true, displays the invalid/error state of the checkbox.
   *
   * @default false
   */
  isInvalid?: boolean;

  /**
   * Optional label prop that renders text or a React node as a label beside the checkbox.
   */
  label?: React.ReactNode | string;

  /**
   * Optional props to be passed to the label's Text component.
   */
  labelProps?: Omit<Partial<TextProps>, 'children'>;

  /**
   * Required callback for when the checked state changes.
   * Use this to update your state.
   */
  onChange: (isSelected: boolean) => void;

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
