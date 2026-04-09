/**
 * IconAlert - severity (ADR-0003)
 */
export const IconAlertSeverity = {
  /**
   * Informational severity (info icon, primary color)
   */
  Info: 'info',
  /**
   * Positive / confirmation severity
   */
  Success: 'success',
  /**
   * Caution severity
   */
  Warning: 'warning',
  /**
   * Critical error severity
   */
  Error: 'error',
} as const;
export type IconAlertSeverity =
  (typeof IconAlertSeverity)[keyof typeof IconAlertSeverity];

/**
 * IconAlert shared props (ADR-0004)
 */
export type IconAlertPropsShared = {
  /**
   * Maps to a fixed icon and theme color for alerts and messaging.
   */
  severity: IconAlertSeverity;
};
