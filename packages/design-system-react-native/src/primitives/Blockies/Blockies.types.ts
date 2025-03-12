import { ImageProps } from 'react-native';

/**
 * Blockies component props.
 */
export type BlockiesProps = {
  /**
   * Required address used as a unique identifier to generate the Blockies.
   */
  address: string;
  /**
   * Optional prop to control the size of the Blockies.
   */
  size?: number;
} & Omit<ImageProps, 'source' | 'width' | 'height'>;
