import type { TextPropsShared } from '../Text';

/**
 * TextButton component shared props (ADR-0004).
 * Platform-independent props shared across React and React Native.
 */
export type TextButtonPropsShared = Omit<
  TextPropsShared,
  'children' | 'color'
> & {
  /**
   * Content shown as the label.
   */
  children: TextPropsShared['children'];
};
