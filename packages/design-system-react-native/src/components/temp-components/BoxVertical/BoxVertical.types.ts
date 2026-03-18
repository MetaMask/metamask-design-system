import type { TextOrChildrenProps } from '../TextOrChildren/TextOrChildren.types';

/**
 * BoxVertical component props.
 */
export type BoxVerticalProps = TextOrChildrenProps & {
  /**
   * Optional node rendered above the text/children.
   */
  topAccessory?: React.ReactNode;
  /**
   * Optional node rendered below the text/children.
   */
  bottomAccessory?: React.ReactNode;
  /**
   * Optional Tailwind class names applied to the root Box. Merged with default styles.
   */
  twClassName?: string;
};
