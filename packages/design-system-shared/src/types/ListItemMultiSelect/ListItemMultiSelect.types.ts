/**
 * ListItemMultiSelect shared props (ADR-0004).
 */
export type ListItemMultiSelectPropsShared = {
  /**
   * Whether this row is selected. When true, applies `bg-background-muted` on the root
   * and shows a selected Checkbox in `endAccessory`.
   */
  isSelected: boolean;
};
