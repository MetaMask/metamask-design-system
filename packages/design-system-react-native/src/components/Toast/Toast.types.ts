import type { ToastPropsShared } from '@metamask/design-system-shared';
import { ToastSeverity } from '@metamask/design-system-shared';
import type { ViewProps } from 'react-native';

import type { BannerBaseProps } from '../BannerBase';
import type { IconProps } from '../Icon/Icon.types';

export { ToastSeverity };
export type { ToastPropsShared };

/**
 * Optional props for the leading severity `Icon`.
 */
export type ToastIconProps = Omit<IconProps, 'name' | 'size' | 'color'>;

/**
 * Shared toast props aligned with BannerBase, plus optional severity/icon props.
 */
export type ToastSharedProps = Omit<BannerBaseProps, 'closeButtonProps'> & {
  closeButtonProps?: Omit<
    NonNullable<BannerBaseProps['closeButtonProps']>,
    'onPress'
  >;
  severity?: ToastSeverity;
  iconAlertProps?: ToastIconProps;
};

/**
 * Toast options used by the imperative `toast(...)` API.
 */
export type ToastOptions = ToastSharedProps & {
  hasNoTimeout?: boolean;
  bottomOffset?: number;
};

/**
 * Toaster component reference.
 */
export type ToasterRef = {
  showToast: (toastOptions: ToastOptions) => void;
  closeToast: () => void;
};

/**
 * Toast component props intended for direct rendering of a single toast surface.
 */
export type ToastProps = ToastSharedProps;

/**
 * Toaster component props.
 * Extends ViewProps to inherit standard React Native props such as testID and accessibilityLabel.
 */
export type ToasterProps = {
  /**
   * Optional Tailwind CSS classes for the toast container.
   */
  twClassName?: string;
} & Omit<ViewProps, 'style'>;
