import { createContext } from 'react';

import type { FilterButtonVariant } from '../../types/FilterButton/FilterButton.types';

export type FilterButtonGroupContextValue = {
  value: string;
  onChange: (nextValue: string) => void;
  variant?: FilterButtonVariant;
};

export const FilterButtonGroupContext =
  createContext<FilterButtonGroupContextValue | null>(null);

FilterButtonGroupContext.displayName = 'FilterButtonGroupContext';
