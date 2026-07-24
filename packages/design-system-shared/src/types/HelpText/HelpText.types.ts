/**
 * HelpText severity variants.
 * Uses const object with derived union type (ADR-0003).
 */
export const HelpTextSeverity = {
  /** Informational style. */
  Info: 'info',
  /** Success style. */
  Success: 'success',
  /** Warning style. */
  Warning: 'warning',
  /** Danger style. */
  Danger: 'danger',
} as const;

export type HelpTextSeverity =
  (typeof HelpTextSeverity)[keyof typeof HelpTextSeverity];

/**
 * HelpText shared props (ADR-0004).
 * Platform-independent properties shared across React and React Native.
 */
export type HelpTextPropsShared = {
  /**
   * Optional semantic severity. When set, overrides `color`.
   */
  severity?: HelpTextSeverity;
  /**
   * When true and `severity` is set, shows a leading IconAlert.
   *
   * @default false
   */
  showIcon?: boolean;
};
