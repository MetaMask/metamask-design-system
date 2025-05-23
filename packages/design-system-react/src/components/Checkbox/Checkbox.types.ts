import type { ComponentProps } from 'react';

import type { IconProps } from '../Icon';
import type { TextProps } from '../Text';

export type CheckboxProps = Omit<
  ComponentProps<'label'>,
  'style' | 'className' | 'children' | 'htmlFor'
> & {
  /**
   * Required unique identifier for the checkbox input element.
   * This is used for the input's id and the label's htmlFor attributes.
   */
  id: string;

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
   * Optional props to be passed to the label's Text component
   */
  labelProps?: Omit<Partial<TextProps>, 'children'>;

  /**
   * Required callback for when the checked state changes.
   * Use this to update your state.
   */
  onChange: (isSelected: boolean) => void;

  /**
   * Optional props passed to the input element.
   */
  inputProps?: Omit<
    ComponentProps<'input'>,
    'type' | 'checked' | 'onChange' | 'disabled'
  > & {
    [key: `data-${string}`]: string;
  };

  /**
   * Optional props passed to the container div wrapping the checkbox icon.
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
