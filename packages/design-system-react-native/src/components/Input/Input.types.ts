import type { InputPropsShared } from '@metamask/design-system-shared';
import type { TextInputProps } from 'react-native';

export type InputProps = Omit<
  TextInputProps,
  'editable' | 'value' | 'defaultValue'
> &
  InputPropsShared & {
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
  };
