import type { ReactNode } from 'react';

/**
 * TitleSubpage component shared props (ADR-0004).
 * Platform-independent properties; platform packages extend with `ViewProps` / `className`,
 * `twClassName`, and platform `Text` prop passthroughs.
 */
export type TitleSubpagePropsShared = {
  /**
   * Optional primary amount line below the title and optional subtitle (for example a fiat or token value).
   * When a string, platforms typically wrap with large display styles via `textProps`.
   * The amount row renders when `amount` or `amountEndAccessory` is renderable.
   */
  amount?: ReactNode;
  /**
   * Optional accessory rendered inline to the right of the amount.
   */
  amountEndAccessory?: ReactNode;
  /**
   * Title row above the optional amount (via platform `textProps` when a string). Required.
   */
  title: ReactNode;
  /**
   * Leading visual for the identity row (for example an avatar). On React Native this is rendered
   * in a 40×40 box, centered, as the `startAccessory` of the identity `BoxRow`.
   */
  titleAvatar: ReactNode;
  /**
   * Optional accessory rendered inline to the right of `title` in the title row.
   */
  titleEndAccessory?: ReactNode;
  /**
   * Optional subtitle row below the title and above the amount (via platform `textProps` when a string).
   * The subtitle row renders when `subtitle` is renderable.
   */
  subtitle?: ReactNode;
  /**
   * Optional accessory rendered inline to the right of `subtitle` in the subtitle row.
   */
  subtitleEndAccessory?: ReactNode;
  /**
   * Optional custom bottom row when neither `bottomLabel` nor `bottomLabelEndAccessory` is renderable.
   * Mutually exclusive with the bottom label row: only one bottom row is shown.
   */
  bottomAccessory?: ReactNode;
  /**
   * Optional bottom row with secondary label styling when a string (via platform `textProps`).
   * If `bottomLabel` or `bottomLabelEndAccessory` is renderable, that row is shown instead of `bottomAccessory`.
   */
  bottomLabel?: ReactNode;
  /**
   * Optional accessory rendered inline to the right of `bottomLabel` in the bottom label row.
   */
  bottomLabelEndAccessory?: ReactNode;
};
