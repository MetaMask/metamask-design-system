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
};
