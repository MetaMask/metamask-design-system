/**
 * ListItemSelect shared props (ADR-0004).
 */
export type ListItemSelectPropsShared = {
  /**
   * Whether this row is selected. When true, applies `bg-background-muted` on the root.
   */
  isSelected: boolean;
  /**
   * When true and `isSelected`, shows a trailing check icon in `endAccessory`.
   *
   * @default false
   */
  showSelectedIcon?: boolean;
};
