import { KeyValueRowVariant } from '../KeyValueRow/KeyValueRow.types';
import type { KeyValueRowPropsShared } from '../KeyValueRow/KeyValueRow.types';
import type { SelectButtonPropsShared } from '../SelectButton/SelectButton.types';

/**
 * KeyValueSelect row height variant (ADR-0003).
 * Alias to KeyValueRowVariant to keep values in sync.
 */
export const KeyValueSelectVariant = KeyValueRowVariant;
export type KeyValueSelectVariant = KeyValueRowVariant;

/**
 * SelectButton-only props exposed on KeyValueSelect via `selectButtonProps`.
 * Size is always Md and variant is always Secondary.
 */
export type KeyValueSelectSelectButtonPropsShared = Pick<
  SelectButtonPropsShared,
  'placeholder' | 'endArrowDirection' | 'hideEndArrow'
>;

/**
 * KeyValueSelect shared props (ADR-0004).
 * Keeps KeyValueRow key/value naming; SelectButton-only options live on `selectButtonProps`.
 * `value` is narrowed to a select label (`string | null`) rather than KeyValueRow's ReactNode.
 * `variant` uses the component-scoped `KeyValueSelectVariant` alias.
 */
export type KeyValueSelectPropsShared = Omit<
  KeyValueRowPropsShared,
  'value' | 'variant'
> & {
  /**
   * Selected select label. When `undefined` or `null`, `selectButtonProps.placeholder` is shown.
   */
  value?: string | null;
  /**
   * Row height variant.
   *
   * @default KeyValueSelectVariant.Summary
   */
  variant?: KeyValueSelectVariant;
  /**
   * SelectButton-only props (placeholder and caret controls).
   */
  selectButtonProps: KeyValueSelectSelectButtonPropsShared;
  /**
   * When true, disables the row press and SelectButton presentation.
   *
   * @default false
   */
  isDisabled?: boolean;
};
