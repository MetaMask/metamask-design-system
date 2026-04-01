import type { ReactNode } from 'react';

import type { TextOrChildrenPropsShared } from '../TextOrChildren';

/**
 * BoxVertical component shared props (ADR-0004)
 * Platform-independent properties shared across React and React Native.
 */
export type BoxVerticalPropsShared = TextOrChildrenPropsShared & {
  /**
   * Optional node rendered above the text/children.
   */
  topAccessory?: ReactNode;
  /**
   * Optional node rendered below the text/children.
   */
  bottomAccessory?: ReactNode;
};
