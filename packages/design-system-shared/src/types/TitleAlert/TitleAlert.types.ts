import type { ReactNode } from 'react';

import type { IconAlertSeverity } from '../IconAlert/IconAlert.types';

/**
 * TitleAlert component shared props (ADR-0004).
 * Platform-independent properties; platform packages extend with `ViewProps` / `className`,
 * `twClassName`, and platform `Text` prop passthroughs.
 */
export type TitleAlertPropsShared = {
  /**
   * Maps to {@link IconAlert} glyph and theme color for the leading alert icon.
   */
  severity: IconAlertSeverity;
  /**
   * Title row content. The title row renders only when `title` is renderable;
   * `titleStartAccessory` / `titleEndAccessory` alone do not show the row.
   */
  title: ReactNode;
  /**
   * Optional accessory rendered inline to the left of `title` in the title row.
   * Only shown when the title row is shown (i.e. when `title` is renderable).
   */
  titleStartAccessory?: ReactNode;
  /**
   * Optional accessory rendered inline to the right of `title` in the title row.
   * Only shown when the title row is shown (i.e. when `title` is renderable).
   */
  titleEndAccessory?: ReactNode;
};
