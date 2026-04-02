import type { TextareaPropsShared } from '@metamask/design-system-shared';
import type { TextInputProps } from 'react-native';

import type { TextVariant } from '../../types';

/**
 * Textarea component props (React Native platform-specific)
 * Extends shared props from @metamask/design-system-shared with React Native specific platform concerns
 */
export type TextareaProps = Omit<TextInputProps, 'editable' | 'value'> &
  TextareaPropsShared & {
    /**
     * Controlled value for Textarea.
     */
    value: string;
    /**
     * Optional enum to select between Typography variants.
     *
     * @default TextVariant.BodyMd
     */
    textVariant?: TextVariant;
    /**
     * Optional number of lines to display. Controls the minimum height of the textarea.
     *
     * @default 4
     */
    numberOfLines?: number;
    /**
     * Optional boolean to disable state styles (focus border, disabled opacity).
     *
     * @default false
     */
    isStateStylesDisabled?: boolean;
    /**
     * Optional prop to add twrnc overriding classNames.
     */
    twClassName?: string;
  };
