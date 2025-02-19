import {
  Image,
  ImageErrorEventData,
  ImageLoadEventData,
  NativeSyntheticEvent,
  StyleProp,
  ImageStyle,
  ImageProps,
} from 'react-native';
import { SvgProps } from 'react-native-svg';

/**
 * ExtendedSvgProps allows extra keys (such as "data-testid")
 */
interface ExtendedSvgProps extends Omit<SvgProps, 'uri'> {
  [key: string]: any;
}

/**
 * Base props common to all variations.
 * (The optional `forceSvg` prop is available for testing purposes.)
 */
interface ImageOrSvgBaseProps {
  width?: number | string;
  height?: number | string;
  onImageLoad?: (event: NativeSyntheticEvent<ImageLoadEventData>) => void;
  onImageError?: (
    errorEvent: NativeSyntheticEvent<ImageErrorEventData>,
  ) => void;
  onSvgError?: (error: Error) => void;
  style?: StyleProp<ImageStyle>;
  imageProps?: Omit<ImageProps, 'source'>;
  svgProps?: ExtendedSvgProps;
}

/**
 * Props for a local bitmap image (imported via require).
 */
interface LocalImageProps extends ImageOrSvgBaseProps {
  src: number;
}

/**
 * Props for a remote image or SVG (with a uri property).
 */
interface RemoteImageOrSvgProps extends ImageOrSvgBaseProps {
  src: { uri: string };
}

/**
 * Props for a local SVG (imported as a component).
 */
export type ImageOrSvgSrc =
  | number
  | { uri?: string }
  | React.ComponentType<SvgProps>;

export interface ImageOrSvgProps extends ImageOrSvgBaseProps {
  src: ImageOrSvgSrc;
}
