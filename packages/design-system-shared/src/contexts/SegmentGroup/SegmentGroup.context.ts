import { createContext } from 'react';

import type { SegmentButtonVariant } from '../../types/SegmentButton/SegmentButton.types';

export type SegmentGroupContextValue = {
  value: string;
  onChange: (nextValue: string) => void;
  variant?: SegmentButtonVariant;
};

export const SegmentGroupContext =
  createContext<SegmentGroupContextValue | null>(null);

SegmentGroupContext.displayName = 'SegmentGroupContext';
