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
 * Toast options.
 */
export type ToastOptions = {
  hasNoTimeout: boolean;
  text: ReactNode;
  description?: ReactNode;
  actionText?: string;
  onActionPress?: () => void;
  onClose?: () => void;
  closeButtonProps?: ToastCloseButtonProps;
  startAccessory?: ReactNode;
  severity?: ToastSeverity;
  bottomOffset?: number;
};

/**
 * Toast component reference.
 */
export type ToastRef = {
  showToast: (toastOptions: ToastOptions) => void;
  closeToast: () => void;
};

/**
 * Toast component props.
 * Extends ViewProps to inherit standard React Native props such as testID and accessibilityLabel.
 */
export type ToastProps = {
  /**
   * Optional Tailwind CSS classes for the toast container.
   */
  twClassName?: string;
} & Omit<ViewProps, 'style'>;
