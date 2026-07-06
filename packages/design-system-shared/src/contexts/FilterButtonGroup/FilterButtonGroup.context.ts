import { createContext } from 'react';

import type {
  FilterButtonSize,
  FilterButtonVariant,
} from '../../types/FilterButton/FilterButton.types';

export type FilterButtonGroupContextValue = {
  value: string;
  onChange: (nextValue: string) => void;
  variant?: FilterButtonVariant;
  size?: FilterButtonSize;
  isEqualWidth?: boolean;
};

export const FilterButtonGroupContext =
  createContext<FilterButtonGroupContextValue | null>(null);

FilterButtonGroupContext.displayName = 'FilterButtonGroupContext';
