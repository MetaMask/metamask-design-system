import type { ReactNode } from 'react';

import type { TextOrChildrenPropsShared } from '../TextOrChildren';

/**
 * BoxRow component shared props (ADR-0004)
 * Platform-independent properties shared across React and React Native.
 *
 * @deprecated `BoxRow` is deprecated in favor of `Box`. This type will be removed in a future major version.
 */
export type BoxRowPropsShared = TextOrChildrenPropsShared & {
  /**
   * Optional node rendered before the text/children (e.g. icon, avatar).
   */
  startAccessory?: ReactNode;
  /**
   * Optional node rendered after the text/children (e.g. icon, badge).
   */
  endAccessory?: ReactNode;
};
