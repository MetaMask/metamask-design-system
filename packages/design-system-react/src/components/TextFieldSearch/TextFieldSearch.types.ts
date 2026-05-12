import type { ButtonIconProps } from '../ButtonIcon/ButtonIcon.types';
import type { TextFieldProps } from '../TextField/TextField.types';

export type TextFieldSearchProps = Omit<TextFieldProps, 'type'> & {
  /**
   * If true, renders a clear button as the end accessory when `value` is
   * truthy. Set to false to hide the clear button regardless of `value`.
   *
   * @default true
   */
  showClearButton?: boolean;
  /**
   * Click handler for the clear button. Use it to reset the controlled `value`.
   */
  clearButtonOnClick?: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * Additional props forwarded to the clear `ButtonIcon`. `ariaLabel` is
   * defaulted to `'Clear'` and can be overridden here to provide a localized
   * label.
   */
  clearButtonProps?: Partial<ButtonIconProps>;
};
