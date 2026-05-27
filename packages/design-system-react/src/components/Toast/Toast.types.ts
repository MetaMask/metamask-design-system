import type { ToastPropsShared } from '@metamask/design-system-shared';

import type { BannerBaseProps } from '../BannerBase';
import type { IconProps } from '../Icon';

type ToastCloseButtonProps = Omit<
  NonNullable<BannerBaseProps['closeButtonProps']>,
  'onClick'
>;

/**
 * Props for the Toast visual component.
 * Extends the platform BannerBase props with severity and an icon override.
 * `onClose` is simplified to `() => void` (no MouseEvent) to align with the
 * React Native API and the imperative `toast()` pattern.
 */
export type ToastProps = Omit<BannerBaseProps, 'closeButtonProps' | 'onClose'> &
  ToastPropsShared & {
    /**
     * Optional handler called when the close button is pressed.
     * When provided, a close button is shown.
     */
    onClose?: () => void;
    /**
     * Optional props passed to the severity `Icon`.
     * Only used when `severity` is not `Default` and `startAccessory` is not provided.
     */
    iconProps?: Omit<IconProps, 'name' | 'color'>;
    /**
     * Optional props for the close `ButtonIcon`.
     * `ariaLabel` defaults to `'Close toast'`.
     */
    closeButtonProps?: ToastCloseButtonProps;
  };

/**
 * Options passed to the imperative `toast(...)` API.
 */
export type ToastOptions = ToastProps & {
  /**
   * When true the toast stays visible until explicitly dismissed.
   * Defaults to false.
   */
  hasNoTimeout?: boolean;
};

/**
 * Imperative handle exposed by `<Toaster ref={...} />`.
 */
export type ToasterRef = {
  showToast: (options: ToastOptions) => void;
  closeToast: () => void;
};

/**
 * Props for the `<Toaster />` container component.
 */
export type ToasterProps = {
  /**
   * Optional extra CSS classes applied to the fixed outer container.
   */
  className?: string;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'style'>;
