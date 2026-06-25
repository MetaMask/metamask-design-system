import type { TextAreaPropsShared } from '@metamask/design-system-shared';
import type { ChangeEvent, ComponentPropsWithoutRef, FocusEvent } from 'react';

import type { TextAreaResize } from './TextArea.constants';

/**
 * TextArea component props (React platform-specific)
 * Extends shared props from @metamask/design-system-shared with React-specific platform concerns
 */
export type TextAreaProps = Omit<
  ComponentPropsWithoutRef<'textarea'>,
  | 'autoFocus'
  | 'defaultValue'
  | 'disabled'
  | 'onBlur'
  | 'onChange'
  | 'onFocus'
  | 'placeholder'
  | 'readOnly'
  | 'value'
> &
  Omit<TextAreaPropsShared, 'textVariant'> & {
    /**
     * Optional prop to control the resize behavior of the textarea.
     * Possible values:
     * - TextAreaResize.None
     * - TextAreaResize.Both
     * - TextAreaResize.Horizontal
     * - TextAreaResize.Vertical
     *
     * @default TextAreaResize.None
     */
    resize?: TextAreaResize;
    /**
     * Called when the textarea value changes.
     */
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    /**
     * Called when the textarea receives focus.
     */
    onFocus?: (event: FocusEvent<HTMLTextAreaElement>) => void;
    /**
     * Called when the textarea loses focus.
     */
    onBlur?: (event: FocusEvent<HTMLTextAreaElement>) => void;
  };
