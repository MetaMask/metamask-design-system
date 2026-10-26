import type { ButtonIconProps } from '../ButtonIcon';
import type { TextFieldProps } from '../TextField';

export type TextFieldSearchProps = Omit<TextFieldProps, 'type'> & {
  /**
   * Required accessible name for the search input. This component does not
   * render a visible label, and placeholder text is not a name.
   *
   * Set as `aria-label` on the input and on the `<search>` landmark. Use a
   * distinct value when more than one search field is on the page. This
   * replaces `inputProps['aria-label']`.
   */
  inputAriaLabel: string;
  /**
   * Click handler for the clear button. Use it to reset the controlled `value`.
   * Required: the clear button always renders when `value` is truthy.
   */
  clearButtonOnClick: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * Additional props forwarded to the clear `ButtonIcon`. `ariaLabel` is
   * defaulted to `'Clear'` and can be overridden here to provide a localized
   * label.
   */
  clearButtonProps?: Partial<ButtonIconProps>;
};
