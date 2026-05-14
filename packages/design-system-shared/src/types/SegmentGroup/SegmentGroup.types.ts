import type { SegmentButtonVariant } from '../SegmentButton/SegmentButton.types';

/**
 * SegmentGroup component shared props (ADR-0004).
 * Controlled-only: parent owns `value` and updates it from `onChange`.
 */
export type SegmentGroupPropsShared = {
  /**
   * Selected segment value; must match a child `SegmentButton` `value`.
   */
  value: string;
  /**
   * Called when the user selects a segment (via a participating `SegmentButton`).
   */
  onChange: (value: string) => void;
  /**
   * Optional default `variant` for segment buttons in this group. Each `SegmentButton` may still override with its own `variant` prop.
   */
  variant?: SegmentButtonVariant;
};
