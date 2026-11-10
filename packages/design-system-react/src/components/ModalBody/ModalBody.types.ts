import type { ComponentProps, ReactNode } from 'react';

export type ModalBodyProps = ComponentProps<'div'> & {
  /**
   * The content of the ModalBody.
   */
  children?: ReactNode;
  /**
   * Optional prop for additional CSS classes to be applied to the ModalBody component.
   * These classes will be merged with the component's default classes using twMerge.
   */
  className?: string;
  /**
   * Tab order of the body.
   *
   * Unset unless a consumer passes it, so the body is not a tab stop by default.
   * Pass `0` when the body scrolls and its content has no focusable elements, so
   * keyboard users can focus the region and scroll it with the arrow keys.
   */
  tabIndex?: number;
};
