import type { CSSProperties } from 'react';

/**
 * Per-placement offsets and rotations applied on top of `react-popper`'s
 * computed arrow position. Keys are the leading segment of
 * `data-popper-placement` (`'top'`, `'top-start'`, etc. all share the same
 * offset/rotation).
 */
export const POPOVER_ARROW_PLACEMENT_STYLES: Record<
  'top' | 'bottom' | 'left' | 'right',
  { container: CSSProperties; visual: CSSProperties }
> = {
  top: {
    container: { bottom: -20 },
    visual: { transform: 'rotate(-135deg)' },
  },
  bottom: {
    container: { top: -20 },
    visual: { transform: 'rotate(45deg)' },
  },
  left: {
    container: { right: -20 },
    visual: { transform: 'rotate(135deg)' },
  },
  right: {
    container: { left: -20 },
    visual: { transform: 'rotate(-45deg)' },
  },
};
