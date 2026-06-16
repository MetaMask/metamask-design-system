/**
 * FilterButton visual variant (ADR-0003).
 * Maps to combinations of ButtonPrimary / ButtonSecondary / ButtonTertiary presentation with `isSelected`.
 */
export const FilterButtonVariant = {
  Primary: 'primary',
  Secondary: 'secondary',
} as const;
export type FilterButtonVariant =
  (typeof FilterButtonVariant)[keyof typeof FilterButtonVariant];

/**
 * FilterButton component shared props (ADR-0004).
 */
export type FilterButtonPropsShared = {
  /**
   * Filter button identity when used inside `FilterButtonGroup`. When set and an ancestor `FilterButtonGroup` exists, selection is derived from the group `value` and `isSelected` is ignored.
   */
  value?: string;
  /**
   * When true, the filter button uses the "selected" visual for the current `variant`.
   *
   * @default false
   */
  isSelected?: boolean;
  /**
   * Visual variant: `primary` toggles between ButtonPrimary (selected) and ButtonSecondary (unselected); `secondary` toggles between ButtonSecondary (selected) and ButtonTertiary-like row with alternative text/icon color (unselected).
   *
   * @default primary
   */
  variant?: FilterButtonVariant;
};
