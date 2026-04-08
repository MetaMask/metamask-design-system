import type { ReactNode } from 'react';

/**
 * TitleStandard component shared props (ADR-0004).
 * Platform-independent properties; platform packages extend with `ViewProps` / `className`,
 * `twClassName`, and platform `Text` prop passthroughs.
 */
export type TitleStandardPropsShared = {
  /**
   * Primary title content. When a string, platforms typically wrap with large heading styles via `textProps`.
   */
  title: ReactNode;
  /**
   * Optional accessory rendered inline to the right of the title.
   */
  titleAccessory?: ReactNode;
  /**
   * Optional accessory rendered in its own row above the title.
   */
  topAccessory?: ReactNode;
  /**
   * Optional custom bottom row when `bottomLabel` is not renderable.
   * Mutually exclusive with a renderable `bottomLabel`: only one bottom row is shown.
   */
  bottomAccessory?: ReactNode;
  /**
   * Optional bottom row with secondary label styling when a string (via platform `textProps`).
   * If renderable, it is shown instead of `bottomAccessory`.
   */
  bottomLabel?: ReactNode;
};
