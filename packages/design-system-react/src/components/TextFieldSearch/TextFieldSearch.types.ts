import type { ButtonIconProps } from '../ButtonIcon';
import type { TextFieldProps } from '../TextField';

export type TextFieldSearchProps = Omit<
  TextFieldProps,
  'asChild' | 'children' | 'type'
> & {
  /**
   * Accessible name for the inner search input. Set it when the field has no
   * visible label. It renders no text.
   *
   * A top-level `aria-label` does something different: it names the `<search>`
   * landmark that wraps the field, which distinguishes the region when a page
   * has more than one search.
   */
  inputAriaLabel?: string;
  /**
   * Accessible name for the inner search input. Use this when the search field
   * does not have a visible label.
   */
  ariaLabel?: string;
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
