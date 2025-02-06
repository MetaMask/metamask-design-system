import { AvatarBaseProps } from '../../primitives/AvatarBase';
import { ImageSourcePropType, ImageProps } from 'react-native';

/**
 * AvatarFavicon component props.
 */
export type AvatarFaviconProps = {
  /**
   * Optional prop to control the severity of the avatar
   * @default AvatarFaviconSeverity.Default
   */
  src: ImageSourcePropType;
} & Omit<AvatarBaseProps, 'children'>;
