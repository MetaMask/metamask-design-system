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
  checkboxContainerProps?: Omit<Partial<ViewProps>, 'children'> & {
    /**
     * @deprecated Use `className` instead.
     */
    twClassName?: string;
    /**
     * Optional Tailwind classes. Merged after the checkbox container's own classes and `twClassName`, so `className` wins on conflicts.
     */
    className?: string;
  };

  /**
   * Optional props to be passed to the check Icon component.
   */
  checkedIconProps?: Partial<IconProps>;

  /**
   * Optional prop to add twrnc overriding classNames.
   *
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
  style?: PressableProps['style'];
} & Omit<PressableProps, 'children'>;
