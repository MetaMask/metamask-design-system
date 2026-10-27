import type { ButtonIconProps } from '../ButtonIcon';
import type { TextFieldProps } from '../TextField';

export type TextFieldSearchProps = Omit<
  TextFieldProps,
  'asChild' | 'children' | 'type'
> & {
  /**
   * Accessible name for the inner search input. Required. It renders no text.
   *
   * A surrounding `<search>` element is a separate landmark. Put `aria-label`
   * on that element when a page has more than one search.
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
