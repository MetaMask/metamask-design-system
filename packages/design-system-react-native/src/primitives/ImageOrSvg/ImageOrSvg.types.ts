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
 * Base props common to both local and remote images/SVGs.
 * The optional prop `forceSvg` is provided to force rendering of <SvgUri>
 * even when the usual heuristics would choose <Image>. (This is useful only for testing.)
 */
interface BaseProps {
  width?: number | string;
  height?: number | string;
  /** Called when an image loads successfully */
  onImageLoad?: (event: NativeSyntheticEvent<ImageLoadEventData>) => void;
  /** Called when an image fails to load */
  onImageError?: (
    errorEvent: NativeSyntheticEvent<ImageErrorEventData>,
  ) => void;
  /** Called when an SVG fails to load */
  onSvgError?: (error: Error) => void;
  style?: StyleProp<ImageStyle>;
  /**
   * Additional props for the underlying Image component.
   */
  imageProps?: Omit<React.ComponentProps<typeof Image>, 'source'>;
  /**
   * Additional props for the underlying SvgUri component.
   */
  svgProps?: Omit<SvgProps, 'uri'>;
  /**
   * For testing only—if true, forces rendering of <SvgUri>
   * regardless of the normal heuristics.
   */
  forceSvg?: boolean;
}

/**
 * Props for a local image (using a number from require).
 */
interface LocalImageProps extends BaseProps {
  src: number;
}

/**
 * Props for a remote image or SVG (using an object with a URI).
 */
interface RemoteImageOrSvgProps extends BaseProps {
  src: Exclude<React.ComponentProps<typeof Image>['source'], number>;
}

/**
 * The complete props type.
 */
export type ImageOrSvgProps = LocalImageProps | RemoteImageOrSvgProps;
