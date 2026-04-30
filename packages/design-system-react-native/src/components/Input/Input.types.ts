import type { InputPropsShared } from '@metamask/design-system-shared';
import type { TextInputProps } from 'react-native';

export type InputProps = Omit<
  TextInputProps,
  'editable' | 'value' | 'defaultValue'
> &
  InputPropsShared & {
    /**
     * Controlled value for Input.
     */
    value: string;
    /**
     * Optional boolean to show readonly input.
     *
     * @default false
     */
    isReadOnly?: boolean;
    /**
     * Optional boolean to disable state styles.
     *
     * @default false
     */
    isStateStylesDisabled?: boolean;
    /**
     * Optional prop to add twrnc overriding classNames.
     */
    twClassName?: string;
  };
