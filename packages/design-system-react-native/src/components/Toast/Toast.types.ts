// Third party dependencies.
import type { ReactNode } from 'react';
import type { GestureResponderEvent, ViewProps } from 'react-native';

// External dependencies.
import type { ButtonIconProps } from '../ButtonIcon';

/**
 * Toast severity variants.
 */
export const ToastSeverity = {
  Default: 'default',
  Success: 'success',
  Warning: 'warning',
  Error: 'error',
} as const;

export type ToastSeverity = (typeof ToastSeverity)[keyof typeof ToastSeverity];

/**
 * Optional props for the close `ButtonIcon`.
 */
export type ToastCloseButtonProps = Omit<
  Partial<ButtonIconProps>,
  'iconName' | 'onPress'
> & {
  onPress?: (event: GestureResponderEvent) => void;
};

/**
 * Shared toast content props.
 */
export type ToastSharedProps = {
  text: ReactNode;
  description?: ReactNode;
  actionText?: string;
  onActionPress?: () => void;
  closeButtonProps?: ToastCloseButtonProps;
  startAccessory?: ReactNode;
  severity?: ToastSeverity;
};

/**
 * Toast options used by the imperative `toast(...)` API.
 */
export type ToastOptions = ToastSharedProps & {
  hasNoTimeout: boolean;
  onClose?: () => void;
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
 * Toast component props.
 * Intended for direct rendering of a single toast surface.
 */
export type ToastProps = ToastSharedProps & {
  onClose: () => void;
  /**
   * Optional Tailwind CSS classes for the toast container.
   */
  twClassName?: string;
} & Omit<ViewProps, 'style'>;

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
