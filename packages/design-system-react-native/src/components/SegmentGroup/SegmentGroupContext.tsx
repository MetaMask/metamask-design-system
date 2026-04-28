import type { SegmentButtonVariant } from '@metamask/design-system-shared';
import { createContext } from 'react';

export type SegmentGroupContextValue = {
  value: string;
  onChange: (nextValue: string) => void;
  variant?: SegmentButtonVariant;
};

export const SegmentGroupContext =
  createContext<SegmentGroupContextValue | null>(null);

SegmentGroupContext.displayName = 'SegmentGroupContext';
