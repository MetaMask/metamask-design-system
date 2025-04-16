import type { ComponentProps } from 'react';

import { BadgeCountSize } from '../../types';
import type { TextProps } from '../Text';

/**
 * BadgeCount component props.
 */
export type BadgeCountProps = ComponentProps<'div'> & {
  /**
   * Optional prop to control the size of the BadgeCount
   * Different sizes map to specific height
   * @default IconSize.Md
   */
  size?: BadgeCountSize;
  /**
   * Required prop to show the count number
   */
  count: number;
  /**
   * Optional prop to determine the max the count can go up to.
   * If count > max, the count will be shown as "max+"
   * @default 99
   */
  max?: number;
  /**
   * Optional props to be passed to the Text component used by count
   */
  textProps?: Partial<TextProps>;
  /**
   * Optional prop for additional CSS classes to be applied to the BadgeCount component.
   * These classes will be merged with the component's default classes using twMerge.
   */
  className?: string;
  /**
   * Optional CSS styles to be applied to the component.
   * Should be used sparingly and only for dynamic styles that can't be achieved with className.
   */
  style?: React.CSSProperties;
};
