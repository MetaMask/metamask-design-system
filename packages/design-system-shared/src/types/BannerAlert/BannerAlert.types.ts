import type { BannerBasePropsShared } from '../BannerBase';

/**
 * BannerAlert severity variants.
 * Uses const object with derived union type (ADR-0003).
 */
export const BannerAlertSeverity = {
  /** Informational style. */
  Info: 'info',
  /** Success style. */
  Success: 'success',
  /** Warning style. */
  Warning: 'warning',
  /** Danger style. */
  Danger: 'danger',
} as const;

export type BannerAlertSeverity =
  (typeof BannerAlertSeverity)[keyof typeof BannerAlertSeverity];

/**
 * BannerAlert shared props (ADR-0004).
 * Platform-independent properties shared across React and React Native.
 */
export type BannerAlertPropsShared = BannerBasePropsShared & {
  /**
   * Optional semantic severity.
   *
   * @default BannerAlertSeverity.Info
   */
  severity?: BannerAlertSeverity;
};
