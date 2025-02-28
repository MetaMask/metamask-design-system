import { AvatarBaseProps } from '../../primitives/AvatarBase';
import { ImageOrSvgProps } from '../../primitives/ImageOrSvg';

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
