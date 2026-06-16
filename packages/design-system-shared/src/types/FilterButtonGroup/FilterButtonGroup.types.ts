import type { FilterButtonVariant } from '../FilterButton/FilterButton.types';

/**
 * FilterButtonGroup component shared props (ADR-0004).
 * Controlled-only: parent owns `value` and updates it from `onChange`.
 */
export type FilterButtonGroupPropsShared = {
  /**
   * Selected filter value; must match a child `FilterButton` `value`.
   */
  value: string;
  /**
   * Called when the user selects a filter button (via a participating `FilterButton`).
   */
  onChange: (value: string) => void;
  /**
   * Optional default `variant` for filter buttons in this group. Each `FilterButton` may still override with its own `variant` prop.
   */
  variant?: FilterButtonVariant;
};
