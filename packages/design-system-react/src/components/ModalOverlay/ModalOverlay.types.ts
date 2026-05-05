import type { ComponentProps } from 'react';

export type ModalOverlayProps = ComponentProps<'div'> & {
  /**
   * Optional prop for additional CSS classes to be applied to the ModalOverlay component.
   * These classes will be merged with the component's default classes using twMerge.
   */
  className?: string;
};
