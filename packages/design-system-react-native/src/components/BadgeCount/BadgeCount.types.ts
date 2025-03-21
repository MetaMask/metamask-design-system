import type { ViewProps, StyleProp, ViewStyle } from 'react-native';

import type { TextProps } from '../Text';

export enum BadgeCountSize {
  /**
   * Represents a medium badge count (14px height).
   */
  Md = 'Md',
  /**
   * Represents a large badge count (20px height).
   */
  Lg = 'Lg',
}

/**
 * BadgeCount component props.
 */
export type BadgeCountProps = {
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
   * Optional prop to add twrnc overriding classNames.
   */
  twClassName?: string;
  /**
   * Optional prop to control the style.
   */
  style?: StyleProp<ViewStyle>;
} & Omit<ViewProps, 'children'>;
