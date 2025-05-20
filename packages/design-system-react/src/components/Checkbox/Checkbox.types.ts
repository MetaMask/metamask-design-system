import type { ComponentProps } from 'react';

import type { IconProps } from '../Icon';
import type { TextProps } from '../Text';

export type CheckboxProps = Omit<
  ComponentProps<'button'>,
  'style' | 'className' | 'children'
> & {
  /**
   * Optional prop that when true, shows a checked checkbox
   *
   * @default false
   */
  isSelected?: boolean;
  /**
   * Optional prop for the initial state of checkbox when uncontrolled
   *
   * @default false
   */
  defaultIsSelected?: boolean;
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
   * Optional label prop that renders text or a React node as a label beside the checkbox
   */
  label?: React.ReactNode | string;
  /**
   * Optional props to be passed to the label's Text component
   */
  labelProps?: Omit<Partial<TextProps>, 'children'>;
  /**
   * Optional callback for when the checked state changes
   */
  onChange?: (isSelected: boolean) => void;
  /**
   * Optional props to be passed to the checkbox container element
   */
  checkboxContainerProps?: (Omit<ComponentProps<'div'>, 'children'> & {
    className?: string;
  }) &
    Record<string, unknown>;
  /**
   * Optional props to be passed to the check Icon component
   */
  checkedIconProps?: Partial<IconProps>;
  /**
   * Optional prop for additional CSS classes to be applied to the Checkbox component.
   * These classes will be merged with the component's default classes using twMerge.
   */
  className?: string;
  /**
   * Optional CSS styles for the outer container.
   */
  style?: React.CSSProperties;
};
