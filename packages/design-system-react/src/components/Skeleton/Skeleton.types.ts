import type { ComponentProps, ReactNode } from 'react';

export type SkeletonProps = Omit<
  ComponentProps<'div'>,
  'children' | 'height' | 'width'
> & {
  /**
   * Optional height of the skeleton container. Numbers are interpreted as px;
   * strings can use any CSS length (`'2rem'`, `'100px'`, etc.).
   */
  height?: number | string;
  /**
   * Optional width of the skeleton container. Numbers are interpreted as px;
   * strings can use any CSS length.
   */
  width?: number | string;
  /**
   * Optional content to display within the skeleton.
   *
   * - When provided **without** `hideChildren`, children are rendered
   *   directly and the skeleton is not shown (the component is a no-op).
   * - When provided **with** `hideChildren`, children are rendered invisibly
   *   to preserve layout dimensions while the animated skeleton bar fills
   *   the container.
   */
  children?: ReactNode;
  /**
   * When `true`, children are rendered invisibly while the skeleton
   * animation plays, preserving layout dimensions. When `false` (the
   * default) and `children` are provided, children render directly with no
   * skeleton overlay.
   *
   * @default false
   */
  hideChildren?: boolean;
  /**
   * When `true`, the skeleton plays the pulse animation. Set to `false` to
   * render a static placeholder.
   *
   * @default true
   */
  autoPlay?: boolean;
  /**
   * Optional prop for additional CSS classes to be applied to the skeleton
   * container. Merged with the component's defaults via `twMerge`.
   */
  className?: string;
};
