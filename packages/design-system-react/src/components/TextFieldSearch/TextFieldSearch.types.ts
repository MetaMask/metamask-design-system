import type { ReactNode } from 'react';

import type { ButtonIconProps } from '../ButtonIcon';
import type { TextFieldProps } from '../TextField';

export type TextFieldSearchProps = Omit<TextFieldProps, 'type'> & {
  /**
   * Accessible name for the search input. Rendered as a visually hidden
   * `<label>` associated with the field. This component does not show a
   * separate visible label, and placeholder text alone is not a name.
   *
   * When omitted or an empty string, `placeholder` is used. Pass `label`
   * when the accessible name should differ from the placeholder. Pass
   * `false` to skip the hidden label when the input is named another way.
   */
  label?: ReactNode;
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
