/**
 * Toast severity variants.
 * `Default` renders no built-in leading icon.
 */
export const ToastSeverity = {
  Default: 'default',
  Success: 'success',
  Warning: 'warning',
  Danger: 'danger',
} as const;

export type ToastSeverity = (typeof ToastSeverity)[keyof typeof ToastSeverity];

/**
 * Cross-platform Toast props shared between React and React Native.
 * Platform packages extend this with their own BannerBase props and event handlers.
 */
export type ToastPropsShared = {
  severity?: ToastSeverity;
};
