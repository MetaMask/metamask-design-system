import type { TextareaPropsShared } from '@metamask/design-system-shared';
import type { ComponentPropsWithoutRef } from 'react';

import type { TextVariant } from '../../types';

import type { TextareaResize } from './Textarea.constants';

/**
 * Textarea component props (React platform-specific)
 * Extends shared props from @metamask/design-system-shared with React-specific platform concerns
 */
export type TextareaProps = Omit<
  ComponentPropsWithoutRef<'textarea'>,
  'disabled' | 'readOnly'
> &
  TextareaPropsShared & {
    /**
     * Optional enum to select between Typography variants.
     *
     * @default TextVariant.BodyMd
     */
    textVariant?: TextVariant;
    /**
     * Optional prop to control the resize behavior of the textarea.
     * Possible values:
     * - TextareaResize.None
     * - TextareaResize.Both
     * - TextareaResize.Horizontal
     * - TextareaResize.Vertical
     *
     * @default TextareaResize.Vertical
     */
    resize?: TextareaResize;
    /**
     * Optional prop for additional CSS classes to be applied to the Textarea component.
     * These classes will be merged with the component's default classes using twMerge.
     */
    className?: string;
    /**
     * Optional CSS styles to be applied to the component.
     * Should be used sparingly and only for dynamic styles that can't be achieved with className.
     */
    style?: React.CSSProperties;
  };
