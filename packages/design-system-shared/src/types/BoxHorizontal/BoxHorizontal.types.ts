import type { ReactNode } from 'react';

import type { TextOrChildrenPropsShared } from '../TextOrChildren';

/**
 * BoxHorizontal component shared props (ADR-0004)
 * Platform-independent properties shared across React and React Native.
 */
export type BoxHorizontalPropsShared = TextOrChildrenPropsShared & {
  /**
   * Optional node rendered before the text/children (e.g. icon, avatar).
   */
  startAccessory?: ReactNode;
  /**
   * Optional node rendered after the text/children (e.g. icon, badge).
   */
  endAccessory?: ReactNode;
};
