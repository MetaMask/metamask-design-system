import type { CSSProperties } from 'react';

/**
 * Inline-style replacement for the original SCSS arrow rules. Each entry
 * positions the 40x40 invisible arrow container outside the popover edge
 * and rotates the inner 8x8 visible arrow so its drawn corner points at
 * the reference element.
 *
 * Keys are the leading segment of `data-popper-placement` (`'top'`,
 * `'top-start'`, etc. all share the same offset/rotation).
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

/**
 * Static styles for the outer arrow container (sized to match `react-popper`'s
 * default arrow modifier). Visibility is hidden — only the inner visual draws.
 */
export const POPOVER_ARROW_CONTAINER_STYLE: CSSProperties = {
  position: 'absolute',
  width: 40,
  height: 40,
  visibility: 'hidden',
  background: 'inherit',
};

/**
 * Static styles for the inner visible arrow square. Inherits the popover
 * background and border colors so it looks like a continuous notch.
 */
export const POPOVER_ARROW_VISUAL_STYLE: CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: 8,
  height: 8,
  marginTop: -4,
  marginLeft: -4,
  background: 'inherit',
  backgroundColor: 'inherit',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: 'inherit',
  borderBottomColor: 'transparent',
  borderRightColor: 'transparent',
  borderRadius: '2px 0 0 0',
  visibility: 'visible',
};
