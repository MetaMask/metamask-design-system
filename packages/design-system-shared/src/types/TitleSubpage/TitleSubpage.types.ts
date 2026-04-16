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
   * The amount row renders when `amount` is truthy; `amountEndAccessory` only appears on that row and does not show the row without `amount`.
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
   * Leading visual for the identity row (for example an avatar). On React Native this is passed as
   * the `startAccessory` of the identity `BoxRow` (typically size the avatar to the design-spec 40×40 slot).
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
   * Optional custom bottom row when `bottomLabel` is not truthy.
   * Mutually exclusive with the bottom label row: only one bottom row is shown.
   */
  bottomAccessory?: ReactNode;
  /**
   * Optional bottom row with secondary label styling when a string (via platform `textProps`).
   * When `bottomLabel` is truthy, that row is shown instead of `bottomAccessory`; `bottomLabelEndAccessory` only appears with a truthy `bottomLabel`.
   */
  bottomLabel?: ReactNode;
  /**
   * Optional accessory rendered inline to the right of `bottomLabel` in the bottom label row.
   */
  bottomLabelEndAccessory?: ReactNode;
};
