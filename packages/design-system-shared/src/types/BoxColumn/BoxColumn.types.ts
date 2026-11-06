import type { ReactNode } from 'react';

import type { TextOrChildrenPropsShared } from '../TextOrChildren';

/**
 * BoxColumn component shared props (ADR-0004)
 * Platform-independent properties shared across React and React Native.
 *
 * @deprecated `BoxColumn` is deprecated in favor of `Box`. This type will be removed in a future major version.
 */
export type BoxColumnPropsShared = TextOrChildrenPropsShared & {
  /**
   * Optional node rendered above the text/children.
   */
  topAccessory?: ReactNode;
  /**
   * Optional node rendered below the text/children.
   */
  bottomAccessory?: ReactNode;
};
