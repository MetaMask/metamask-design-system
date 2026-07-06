import type { ComponentProps } from 'react';

/**
 * Maskicon component props.
 */
export type MaskiconProps = Omit<ComponentProps<'img'>, 'width' | 'height'> & {
  /**
   * Required address used as a unique identifier to generate the Maskicon.
   */
  address: string;
  /**
   * Optional prop to control the size of the Maskicon.
   * This will set both width and height.
   */
  size?: number;
  /**
   * Optional CSS class name to apply to the Maskicon.
   */
  className?: string;
  /**
   * Optional prop to add a test id to the icon
   */
  'data-testid'?: string;
};
