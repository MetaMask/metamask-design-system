import type { ReactNode } from 'react';

/**
 * KeyValueRow layout variant (height).
 * Uses const object with derived union type (ADR-0003).
 */
export const KeyValueRowVariant = {
  /** Compact row height (40px, h-10). */
  Summary: 'summary',
  /** Taller row for input contexts (48px, h-12). */
  Input: 'input',
} as const;

export type KeyValueRowVariant =
  (typeof KeyValueRowVariant)[keyof typeof KeyValueRowVariant];

/**
 * KeyValueRow shared props (ADR-0004).
 * Platform-independent properties shared across React and React Native.
 */
export type KeyValueRowPropsShared = {
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
   * Row height variant.
   *
   * @default KeyValueRowVariant.Summary
   */
  variant?: KeyValueRowVariant;
};
