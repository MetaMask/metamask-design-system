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
   * Title row content. The title row renders only when `title` is renderable.
   */
  title: ReactNode;
  /**
   * Optional description below the title row (platform packages render via `TextOrChildren`).
   * Shown only when `description` is renderable (`null`, `undefined`, `false`, and `''` are not).
   */
  description?: ReactNode;
};
