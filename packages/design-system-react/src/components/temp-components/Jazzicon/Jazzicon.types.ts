import type { ComponentProps } from 'react';

export type JazziconProps = ComponentProps<'div'> & {
  /**
   * Required address used as a unique identifier to generate the Jazzicon.
   */
  address: string;
  /**
   * Optional prop to control the size of the Jazzicon.
   */
  size?: number;
  /**
   * Optional prop to add a test id to the icon
   */
  'data-testid'?: string;
};
