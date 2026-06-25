import type { ReactNode } from 'react';

import type { IconName } from '../Icon';

/**
 * SectionHeader component shared props (ADR-0004).
 * Platform-independent properties; platform packages extend with `ViewProps`,
 * `twClassName`, and platform `Text` / `Icon` prop passthroughs.
 */
export type SectionHeaderPropsShared = {
  /**
   * Section title. When a string, platforms typically apply heading styles via `titleProps` / `textProps`.
   * The title row renders only when `title` is renderable; `titleAccessory` alone does not show the inner row.
   */
  title: ReactNode;
  /**
   * Optional accessory rendered inline to the right of `title` in the title row.
   * Only shown when the title row is shown (i.e. when `title` is renderable).
   */
  titleAccessory?: ReactNode;
  /**
   * Optional content rendered below the title row in the middle column,
   * between start and end accessories.
   */
  children?: ReactNode;
  /**
   * Optional node before the title row (e.g. icon or avatar).
   */
  startAccessory?: ReactNode;
  /**
   * Optional node after the title row (e.g. icon or action).
   */
  endAccessory?: ReactNode;
  /**
   * Optional icon name for the start of the header row.
   * When set (or implied via `startIconProps.name`), renders an icon instead of `startAccessory`.
   */
  startIconName?: IconName;
  /**
   * Optional icon name for the end of the header row.
   * When set (or implied via `endIconProps.name`), renders an icon instead of `endAccessory`.
   */
  endIconName?: IconName;
};
