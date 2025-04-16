import { AvatarBaseProps } from '../AvatarBase';
import { ImageOrSvgProps } from '../temp-components/ImageOrSvg';

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
