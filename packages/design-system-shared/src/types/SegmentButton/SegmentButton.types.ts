/**
 * SegmentButton visual variant (ADR-0003).
 * Maps to combinations of ButtonPrimary / ButtonSecondary / ButtonTertiary presentation with `isSelected`.
 */
export const SegmentButtonVariant = {
  Primary: 'primary',
  Secondary: 'secondary',
} as const;
export type SegmentButtonVariant =
  (typeof SegmentButtonVariant)[keyof typeof SegmentButtonVariant];

/**
 * SegmentButton component shared props (ADR-0004).
 */
export type SegmentButtonPropsShared = {
  /**
   * Segment identity when used inside `SegmentGroup`. When set and an ancestor `SegmentGroup` exists, selection is derived from the group `value` and `isSelected` is ignored.
   */
  value?: string;
  /**
   * When true, the segment uses the "selected" visual for the current `variant`.
   *
   * @default false
   */
  isSelected?: boolean;
  /**
   * Visual variant: `primary` toggles between ButtonPrimary (selected) and ButtonSecondary (unselected); `secondary` toggles between ButtonSecondary (selected) and ButtonTertiary-like row with alternative text/icon color (unselected).
   *
   * @default primary
   */
  variant?: SegmentButtonVariant;
};
