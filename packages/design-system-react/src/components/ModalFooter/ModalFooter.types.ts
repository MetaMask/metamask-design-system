import type { ComponentProps, ReactNode } from 'react';

import type { BoxProps } from '../Box';
import type { ButtonProps } from '../Button';

type ButtonPropsWithDataAttrs = Partial<ButtonProps> & {
  [key: `data-${string}`]: string | undefined;
};

export type ModalFooterProps = ComponentProps<'footer'> & {
  /**
   * Optional custom content rendered above the built-in submit/cancel button row.
   * Use this for inline form controls (e.g. a "do not show again" checkbox)
   * or to fully replace the built-in button row by omitting `onSubmit` / `onCancel`.
   */
  children?: ReactNode;
  /**
   * Optional click handler for the submit button. When provided, a primary
   * "submit" button is rendered.
   */
  onSubmit?: () => void;
  /**
   * Optional props passed to the submit `Button` (rendered when `onSubmit` is set).
   *
   * The button label is the `children` of this prop — `ModalFooter` is i18n-agnostic
   * and intentionally does not pull strings from any translation context. Pass a
   * localized string from your application's i18n layer:
   *
   * ```tsx
   * submitButtonProps={{ children: t('confirm') }}
   * ```
   *
   * If `children` is omitted the component falls back to the literal `'Confirm'`
   * so prototypes and Storybook render correctly without an i18n setup.
   */
  submitButtonProps?: ButtonPropsWithDataAttrs;
  /**
   * Optional click handler for the cancel button. When provided, a secondary
   * "cancel" button is rendered before the submit button.
   */
  onCancel?: () => void;
  /**
   * Optional props passed to the cancel `Button` (rendered when `onCancel` is set).
   *
   * Same i18n contract as `submitButtonProps`: pass the localized label as
   * `children`. Falls back to `'Cancel'` when omitted.
   */
  cancelButtonProps?: ButtonPropsWithDataAttrs;
  /**
   * Optional props passed to the inner `Box` that wraps the submit/cancel
   * buttons. Use this to override the default max-width, background, or any
   * other Box utility prop. The default max-width of 360px is applied via
   * className and will be overridden if `containerProps.className` provides
   * its own `max-w-*` utility (`twMerge` lets the consumer's class win).
   */
  containerProps?: Omit<BoxProps, 'children'> & {
    [key: `data-${string}`]: string | undefined;
  };
  /**
   * Optional prop for additional CSS classes to be applied to the ModalFooter component.
   * These classes will be merged with the component's default classes using twMerge.
   */
  className?: string;
};
