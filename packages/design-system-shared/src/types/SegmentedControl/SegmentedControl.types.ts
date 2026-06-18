import type { ButtonBaseSize } from '../ButtonBase/ButtonBase.types';

/**
 * SegmentedControl component shared props (ADR-0004).
 * Controlled-only: parent owns `value` and updates it from `onChange`.
 */
export type SegmentedControlPropsShared = {
  /**
   * Selected segment value; must match a child `FilterButton` `value`.
   */
  value: string;
  /**
   * Called when the user selects a segment (via a participating `FilterButton`).
   */
  onChange: (value: string) => void;
  /**
   * Size of the control and child filter buttons.
   *
   * @default ButtonBaseSize.Sm
   */
  size?: ButtonBaseSize;
  /**
   * When true, the control stretches to the width of its parent and segments share equal width.
   *
   * @default false
   */
  isFullWidth?: boolean;
};
