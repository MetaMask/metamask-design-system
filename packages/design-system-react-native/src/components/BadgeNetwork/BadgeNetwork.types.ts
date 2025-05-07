import { AvatarNetworkProps } from '../AvatarNetwork';
import { ImageOrSvgSrc } from '../temp-components/ImageOrSvg';

export type BadgeNetworkProps = Omit<AvatarNetworkProps, 'size' | 'shape'> & {
  /**
   * Optional prop for the source of the image or SVG.
   */
  src?: ImageOrSvgSrc;
  /**
   * Optional props for network name, to be used to calculate the fallbackText.
   */
  name?: string;
  /**
   * Optional text to be rendered when the content fails to render
   */
  fallbackText?: string;
};
