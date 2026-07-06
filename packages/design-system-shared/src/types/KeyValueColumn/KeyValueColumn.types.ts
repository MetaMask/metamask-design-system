import type { ReactNode } from 'react';

/**
 * KeyValueColumn shared props (ADR-0004).
 * Platform-independent properties shared across React and React Native.
 */
export type KeyValueColumnPropsShared = {
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
};
