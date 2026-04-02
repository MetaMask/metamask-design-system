import type { ReactNode } from 'react';

/**
 * KeyValuePair orientation variants.
 * Uses const object with derived union type (ADR-0003).
 */
export const KeyValuePairOrientation = {
  /** Key and value in a row (key left, value right). */
  Horizontal: 'horizontal',
  /** Key and value stacked (key above, value below). */
  Vertical: 'vertical',
} as const;

export type KeyValuePairOrientation =
  (typeof KeyValuePairOrientation)[keyof typeof KeyValuePairOrientation];

/**
 * KeyValuePair shared props (ADR-0004).
 * Platform-independent properties shared across React and React Native.
 */
export type KeyValuePairPropsShared = {
  /** Optional node rendered before the key (e.g. icon). */
  keyStartAccessory?: ReactNode;
  /** Optional node rendered after the key (e.g. icon, badge). */
  keyEndAccessory?: ReactNode;
  /** Key content: string or custom ReactNode. Named keyLabel to avoid React’s reserved `key` prop. */
  keyLabel: string | ReactNode;
  /** Optional node rendered before the value (e.g. icon). */
  valueStartAccessory?: ReactNode;
  /** Optional node rendered after the value (e.g. icon, badge). */
  valueEndAccessory?: ReactNode;
  /** Value content: string or custom ReactNode. */
  value: string | ReactNode;
  /**
   * Layout direction.
   *
   * @default KeyValuePairOrientation.Horizontal
   */
  orientation?: KeyValuePairOrientation;
};
