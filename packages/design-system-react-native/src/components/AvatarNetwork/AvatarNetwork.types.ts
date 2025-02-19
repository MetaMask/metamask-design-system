import { AvatarBaseProps } from '../../primitives/AvatarBase';
import { ImageOrSvgProps } from '../../primitives/ImageOrSvg';

/**
 * AvatarNetwork component props.
 */
export type AvatarNetworkProps = {
  /**
   * Optional props for token name, to be used to calculate the fallbackText
   * when the image fails to load
   */
  name?: string;
} & Omit<AvatarBaseProps, 'children'> &
  ImageOrSvgProps;
