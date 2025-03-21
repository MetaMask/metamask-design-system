import type { ComponentProps } from 'react';

export type BlockiesProps = ComponentProps<'img'> & {
  /**
   * Required address used as a unique identifier to generate the Blockies.
   */
  address: string;
  /**
   * Optional prop to control the size of the Blockies.
   */
  size?: number;
  /**
   * Optional prop to add a test id to the icon
   */
  'data-testid'?: string;
};
