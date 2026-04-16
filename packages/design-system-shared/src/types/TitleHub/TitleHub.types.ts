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
   * The amount row renders only when `amount` is renderable; `amountEndAccessory` alone does not show the row.
   */
  amount?: ReactNode;
  /**
   * Optional accessory rendered inline to the right of the amount.
   * Only shown when the amount row is shown (i.e. when `amount` is renderable).
   */
  amountEndAccessory?: ReactNode;
  /**
   * Title row above the optional amount (via platform `textProps` when a string). Required.
   * The title row renders only when `title` is renderable; `titleEndAccessory` alone does not show the row.
   */
  title: ReactNode;
  /**
   * Optional accessory rendered inline to the right of `title` in the title row.
   * Only shown when the title row is shown (i.e. when `title` is renderable).
   */
  titleEndAccessory?: ReactNode;
  /**
   * Optional custom bottom row when the bottom label row is not shown (`bottomLabel` is not renderable).
   * Mutually exclusive with the bottom label row: only one bottom row is shown.
   */
  bottomAccessory?: ReactNode;
  /**
   * Optional bottom row with secondary label styling when a string (via platform `textProps`).
   * The bottom label row renders only when `bottomLabel` is renderable; `bottomAccessory` is not used in that case.
   * `bottomLabelEndAccessory` alone does not show the row.
   */
  bottomLabel?: ReactNode;
  /**
   * Optional accessory rendered inline to the right of `bottomLabel` in the bottom label row.
   * Only shown when `bottomLabel` is renderable.
   */
  bottomLabelEndAccessory?: ReactNode;
};
