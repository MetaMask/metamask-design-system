import { AvatarBaseProps } from '../../primitives/AvatarBase';
import { ImageSourcePropType, ImageProps } from 'react-native';

/**
 * AvatarFavicon component props.
 */
export type AvatarFaviconProps = {
  /**
   * Prop to control the source of the favicon
   */
  src: ImageSourcePropType;
} & Omit<AvatarBaseProps, 'children'>;
