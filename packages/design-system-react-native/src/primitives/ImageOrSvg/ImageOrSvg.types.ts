import {
  Image,
  ImageErrorEventData,
  ImageLoadEventData,
  NativeSyntheticEvent,
  StyleProp,
  ImageStyle,
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
interface BaseProps {
  width?: number | string;
  height?: number | string;
  onImageLoad?: (event: NativeSyntheticEvent<ImageLoadEventData>) => void;
  onImageError?: (
    errorEvent: NativeSyntheticEvent<ImageErrorEventData>,
  ) => void;
  onSvgError?: (error: Error) => void;
  style?: StyleProp<ImageStyle>;
  imageProps?: Omit<React.ComponentProps<typeof Image>, 'source'>;
  svgProps?: ExtendedSvgProps;
  forceSvg?: boolean;
}

/**
 * Props for a local bitmap image (imported via require).
 */
interface LocalImageProps extends BaseProps {
  src: number;
}

/**
 * Props for a remote image or SVG (with a uri property).
 */
interface RemoteImageOrSvgProps extends BaseProps {
  src: { uri: string | undefined };
}

/**
 * Props for a local SVG (imported as a component).
 */
interface LocalSvgProps extends BaseProps {
  src: React.ComponentType<SvgProps>;
}

/**
 * The union of all supported prop types.
 */
export type ImageOrSvgProps =
  | LocalImageProps
  | RemoteImageOrSvgProps
  | LocalSvgProps;
