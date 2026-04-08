import type { ReactNode } from 'react';

/**
 * TitleHub component shared props (ADR-0004).
 * Platform-independent properties; platform packages extend with `ViewProps` / `className`,
 * `twClassName`, and platform `Text` prop passthroughs.
 */
export type TitleHubPropsShared = {
  /**
   * Optional primary amount line below the title (for example a fiat or token value).
   * When a string, platforms typically wrap with large display styles via `textProps`.
   * The amount row renders when `amount` or `amountAccessory` is renderable.
   */
  amount?: ReactNode;
  /**
   * Optional accessory rendered inline to the right of the amount.
   */
  amountAccessory?: ReactNode;
  /**
   * Title row above the optional amount (via platform `textProps` when a string). Required.
   */
  title: ReactNode;
  /**
   * Optional accessory rendered inline to the right of `title` in the title row.
   */
  titleAccessory?: ReactNode;
  /**
   * Optional custom bottom row when neither `bottomLabel` nor `bottomLabelAccessory` is renderable.
   * Mutually exclusive with the bottom label row: only one bottom row is shown.
   */
  bottomAccessory?: ReactNode;
  /**
   * Optional bottom row with secondary label styling when a string (via platform `textProps`).
   * If `bottomLabel` or `bottomLabelAccessory` is renderable, that row is shown instead of `bottomAccessory`.
   */
  bottomLabel?: ReactNode;
  /**
   * Optional accessory rendered inline to the right of `bottomLabel` in the bottom label row.
   */
  bottomLabelAccessory?: ReactNode;
};
