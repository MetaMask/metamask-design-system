import { AvatarBaseProps } from '../AvatarBase';
import { ImageOrSvgProps } from '../temp-components/ImageOrSvg';

/**
 * AvatarFavicon component props.
 */
export type AvatarFaviconProps = {
  /**
   * Optional props for favicon name, to be used to calculate the fallbackText.
   */
  name?: string;
} & Omit<AvatarBaseProps, 'children'> &
  ImageOrSvgProps;
