import type { SvgProps } from 'react-native-svg';

/**
 * Maskicon component props.
 */
export type MaskiconProps = {
  /**
   * Required address used as a unique identifier to generate the Maskicon.
   */
  address: string;
  /**
   * Optional prop to control the size of the Maskicon.
   */
  size?: number;
} & Omit<SvgProps, 'width' | 'height'>;
