import { ImageOrSvgProps } from '../temp-components/ImageOrSvg';
import { AvatarBaseProps } from '../AvatarBase';

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
