import { AvatarBaseProps } from '../AvatarBase';
import { ImageOrSvgProps, ImageOrSvgSrc } from '../temp-components/ImageOrSvg';

/**
 * AvatarNetwork component props.
 */
export type AvatarNetworkProps = {
  /**
   * Optional prop for the source of the image or SVG.
   */
  src?: ImageOrSvgSrc;
  /**
   * Optional props for network name, to be used to calculate the fallbackText.
   */
  name?: string;
  /**
   * Optional prop to pass to the underlying ImageOrSvg element
   * Useful for overriding the default alt text which is the dapp name
   */
  imageOrSvgProps?: Partial<ImageOrSvgProps>;
} & Omit<AvatarBaseProps, 'children'>;
