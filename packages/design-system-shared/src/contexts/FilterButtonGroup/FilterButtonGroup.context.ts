import { createContext } from 'react';

import type { ButtonBaseSize } from '../../types/ButtonBase/ButtonBase.types';
import type { FilterButtonVariant } from '../../types/FilterButton/FilterButton.types';

export type FilterButtonGroupContextValue = {
  value: string;
  onChange: (nextValue: string) => void;
  variant?: FilterButtonVariant;
  size?: ButtonBaseSize;
  isEqualWidth?: boolean;
};

export const FilterButtonGroupContext =
  createContext<FilterButtonGroupContextValue | null>(null);

FilterButtonGroupContext.displayName = 'FilterButtonGroupContext';
