import type { TextOrChildrenProps } from '../TextOrChildren/TextOrChildren.types';

/**
 * TextWithAccessories component props.
 */
export type TextWithAccessoriesProps = TextOrChildrenProps & {
  /**
   * Optional node rendered before the text/children (e.g. icon, avatar).
   */
  startAccessory?: React.ReactNode;
  /**
   * Optional node rendered after the text/children (e.g. icon, badge).
   */
  endAccessory?: React.ReactNode;
  /**
   * Optional Tailwind class names applied to the root Box. Merged with default styles.
   * Can override the default gap (e.g. "gap-0", "gap-2").
   */
  twClassName?: string;
};
