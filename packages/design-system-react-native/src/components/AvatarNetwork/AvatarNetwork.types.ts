import { AvatarBaseProps } from '../../primitives/AvatarBase';
import { ImageOrSvgProps } from '../../primitives/ImageOrSvg';

/**
 * AvatarNetwork component props.
 */
export type AvatarNetworkProps = {
  /**
   * Optional props for network name, to be used to calculate the fallbackText.
   */
  name?: string;
} & Omit<AvatarBaseProps, 'children'> &
  ImageOrSvgProps;
