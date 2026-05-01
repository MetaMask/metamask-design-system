import type { ComponentProps, ReactNode } from 'react';

import type { ButtonIconProps } from '../ButtonIcon';

/**
 * Props accepted by the auto-rendered back / close `ButtonIcon`. The
 * component owns `iconName` (ArrowLeft / Close) and `size`
 * (ButtonIconSize.Md), so consumers cannot override them. The `data-*` index
 * signature lets test ids and other dataset attributes pass through
 * `Partial`/`Omit` indirection.
 *
 * `ariaLabel` is preserved as **required** (it is required on
 * `ButtonIconProps`). The component does not pull from any i18n context, so
 * consumers must pass a localized label explicitly:
 *
 * ```tsx
 * closeButtonProps={{ ariaLabel: t('close') }}
 * ```
 */
type ModalHeaderButtonProps = Omit<ButtonIconProps, 'iconName' | 'size'> & {
  [key: `data-${string}`]: string | undefined;
};

/**
 * Discriminated pair: `onBack` and `backButtonProps` are co-required. If
 * `onBack` is set, the consumer must also provide `backButtonProps` with a
 * (required) `ariaLabel`. This enforces the no-i18n-fallback contract at
 * compile time without an internal English default.
 */
type ModalHeaderBackProps =
  | { onBack?: undefined; backButtonProps?: undefined }
  | { onBack: () => void; backButtonProps: ModalHeaderButtonProps };

/**
 * Discriminated pair: `onClose` and `closeButtonProps` are co-required. Same
 * shape and rationale as `ModalHeaderBackProps`.
 */
type ModalHeaderCloseProps =
  | { onClose?: undefined; closeButtonProps?: undefined }
  | { onClose: () => void; closeButtonProps: ModalHeaderButtonProps };

export type ModalHeaderProps = Omit<ComponentProps<'header'>, 'children'> &
  ModalHeaderBackProps &
  ModalHeaderCloseProps & {
    /**
     * Header title content. When a string, it is auto-wrapped in a
     * `Text` with `TextVariant.HeadingSm` and `TextAlign.Center`. When a
     * `ReactNode`, it is rendered as-is.
     */
    children?: ReactNode;
    /**
     * Optional override for the start (left in LTR) slot. When provided, it
     * replaces the auto-rendered back button — even if `onBack` is set.
     */
    startAccessory?: ReactNode;
    /**
     * Optional override for the end (right in LTR) slot. When provided, it
     * replaces the auto-rendered close button — even if `onClose` is set.
     */
    endAccessory?: ReactNode;
    /**
     * Optional prop for additional CSS classes to be applied to the
     * ModalHeader root. Merged with the component's defaults via `twMerge`.
     */
    className?: string;
  };
