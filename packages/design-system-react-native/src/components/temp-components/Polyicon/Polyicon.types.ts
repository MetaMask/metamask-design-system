import type { SvgProps } from 'react-native-svg';

/**
 * Polyicon component props.
 */
export type PolyiconProps = {
  /**
   * Required address used as a unique identifier to generate the Polyicon.
   */
  address: string;
  /**
   * Optional prop to control the size of the Polyicon.
   */
  size?: number;
} & Omit<SvgProps, 'width' | 'height'>;
