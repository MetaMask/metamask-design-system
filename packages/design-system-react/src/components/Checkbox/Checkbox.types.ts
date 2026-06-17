import type { CheckboxPropsShared } from '@metamask/design-system-shared';
import type { ComponentProps } from 'react';

import type { IconProps } from '../Icon';
import type { TextProps } from '../Text';

export type CheckboxProps = Omit<
  ComponentProps<'label'>,
  'style' | 'className' | 'children' | 'htmlFor'
> &
  CheckboxPropsShared & {
    /**
     * Required unique identifier for the checkbox input element.
     * This is used for the input's ID and the label's htmlFor attributes.
     */
    id: string;

    /**
     * Optional props to be passed to the label's Text component
     */
    labelProps?: Omit<Partial<TextProps>, 'children'>;

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
