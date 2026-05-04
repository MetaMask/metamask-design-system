import type { InputPropsShared } from '@metamask/design-system-shared';
import type { TextInputProps } from 'react-native';

export type InputProps = Omit<
  TextInputProps,
  'editable' | 'value' | 'defaultValue'
> &
  InputPropsShared & {
    /**
     * Optional prop to add twrnc overriding classNames.
     */
    twClassName?: string;
  };
