import type { ComponentProps, ReactNode } from 'react';

import type { ButtonIconProps } from '../ButtonIcon';

/**
 * Props accepted by the auto-rendered back / close `ButtonIcon`. The
 * component owns `iconName` (ArrowLeft / Close) and `size`
 * (ButtonIconSize.Sm), so consumers cannot override them. The `data-*` index
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
type PopoverHeaderButtonProps = Omit<ButtonIconProps, 'iconName' | 'size'> & {
  [key: `data-${string}`]: string | undefined;
};

/**
 * Discriminated pair: `onBack` and `backButtonProps` are co-required. If
 * `onBack` is set, the consumer must also provide `backButtonProps` with a
 * (required) `ariaLabel`. This enforces the no-i18n-fallback contract at
 * compile time without an internal English default.
 */
type PopoverHeaderBackProps =
  | { onBack?: undefined; backButtonProps?: undefined }
  | { onBack: () => void; backButtonProps: PopoverHeaderButtonProps };

/**
 * Discriminated pair: `onClose` and `closeButtonProps` are co-required. Same
 * shape and rationale as `PopoverHeaderBackProps`.
 */
type PopoverHeaderCloseProps =
  | { onClose?: undefined; closeButtonProps?: undefined }
  | { onClose: () => void; closeButtonProps: PopoverHeaderButtonProps };

export type PopoverHeaderProps = Omit<ComponentProps<'header'>, 'children'> &
  PopoverHeaderBackProps &
  PopoverHeaderCloseProps & {
    /**
     * Header title content. When a string, it is auto-wrapped in a
     * `Text` with `TextVariant.HeadingSm`, `TextAlign.Center`, and
     * `TextColor.Inherit` so the title picks up the popover surface color.
     * When a `ReactNode`, it is rendered as-is.
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
     * Optional override for additional CSS classes applied to the
     * PopoverHeader root. Merged with the component's defaults via `twMerge`.
     */
    className?: string;
  };
