import type { ComponentProps } from 'react';

/**
 * Maskicon component props.
 */
export type MaskiconProps = ComponentProps<'div'> & {
  /**
   * Required address used as a unique identifier to generate the Maskicon.
   */
  address: string;
  /**
   * Optional prop to control the size of the Maskicon.
   */
  size?: number;
  /**
   * Optional prop to add a test id to the icon
   */
  'data-testid'?: string;
};
