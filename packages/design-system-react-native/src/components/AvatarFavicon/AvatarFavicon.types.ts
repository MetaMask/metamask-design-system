import { AvatarBaseProps } from '../../primitives/AvatarBase';
import { ImageOrSvgProps } from '../../primitives/ImageOrSvg';

/**
 * AvatarFavicon component props.
 */
export type AvatarFaviconProps = Omit<AvatarBaseProps, 'children'> &
  ImageOrSvgProps;
