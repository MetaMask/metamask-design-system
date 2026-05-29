import type {
  TextAreaPropsShared,
} from '@metamask/design-system-shared';
import type { ComponentPropsWithoutRef, Ref } from 'react';

import type { TextAreaResize } from './TextArea.constants';

/**
 * Additional props merged onto the inner `textarea`.
 *
 * TextArea owns `value`, `placeholder`, `isReadOnly`, `onFocus`, `onBlur`,
 * `onChange`, `autoFocus`, `textVariant`, `resize`, and inner layout.
 */
type TextAreaInputProps = Omit<
  ComponentPropsWithoutRef<'textarea'>,
  | 'autoFocus'
  | 'cols'
  | 'disabled'
  | 'id'
  | 'maxLength'
  | 'name'
  | 'onBlur'
  | 'onChange'
  | 'onFocus'
  | 'placeholder'
  | 'readOnly'
  | 'required'
  | 'rows'
  | 'value'
>;

/**
 * TextArea component props (React platform-specific)
 * Extends shared props from @metamask/design-system-shared with React-specific platform concerns
 */
export type TextAreaProps = Omit<
  ComponentPropsWithoutRef<'div'>,
  'onBlur' | 'onChange' | 'onFocus' | 'onClick'
> &
  TextAreaPropsShared & {
    /**
     * Additional props for the inner `textarea`. Do not pass `value`,
     * `placeholder`, `isReadOnly`, `onFocus`, `onBlur`, `onChange`, `id`,
     * `name`, `maxLength`, `rows`, `cols`, or `required` here; use the
     * TextArea-level props where applicable.
     */
    inputProps?: TextAreaInputProps;
    /**
     * Ref to the inner `textarea` element. The component `ref` targets the
     * root `div`.
     */
    inputRef?: Ref<HTMLTextAreaElement>;
    /**
     * Optional prop to control the resize behavior of the textarea.
     * Possible values:
     * - TextAreaResize.None
     * - TextAreaResize.Both
     * - TextAreaResize.Horizontal
     * - TextAreaResize.Vertical
     *
     * @default TextAreaResize.Vertical
     */
    resize?: TextAreaResize;
    /**
     * Max number of characters to allow.
     */
    maxLength?: number;
    /**
     * Name attribute of the inner `textarea` element.
     */
    name?: string;
    /**
     * `id` of the inner `textarea` element.
     */
    id?: string;
    /**
     * If true, the inner textarea is marked as required.
     */
    required?: boolean;
    /**
     * Number of rows to display.
     */
    rows?: number;
    /**
     * Number of columns to display.
     */
    cols?: number;
    /**
     * Called when the inner textarea value changes.
     */
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    /**
     * Called when the inner textarea receives focus.
     */
    onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
    /**
     * Called when the inner textarea loses focus.
     */
    onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
    /**
     * Called when the root container is clicked. Focuses the inner textarea.
     */
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    /**
     * Optional prop for additional CSS classes to be applied to the TextArea component.
     * These classes will be merged with the component's default classes using twMerge.
     */
    className?: string;
    /**
     * Optional CSS styles to be applied to the component.
     * Should be used sparingly and only for dynamic styles that can't be achieved with className.
     */
    style?: React.CSSProperties;
  };
