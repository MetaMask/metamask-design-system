import {
  ImageErrorEventData,
  ImageLoadEventData,
  NativeSyntheticEvent,
  StyleProp,
  ImageStyle,
  ImageProps,
} from 'react-native';
import { SvgProps } from 'react-native-svg';

/**
 * Base props common to all variations.
 */
interface ImageOrSvgBaseProps {
  /**
   * Optional prop to set the width of the image/SVG.
   * Accepts numbers (pixels) or string values (like percentages).
   */
  width?: number | string;
  /**
   * Optional prop to set the height of the image/SVG.
   * Accepts numbers (pixels) or string values (like percentages).
   */
  height?: number | string;
  /**
   * Optional prop to set callback triggered when the image has loaded successfully.
   */
  onImageLoad?: (event: NativeSyntheticEvent<ImageLoadEventData>) => void;
  /**
   * Optional prop to set callback triggered when there is an error rendering the image.
   */
  onImageError?: (
    errorEvent: NativeSyntheticEvent<ImageErrorEventData>,
  ) => void;
  /**
   * Optional prop to set callback triggered when there is an error rendering the SVG.
   */
  onSvgError?: (error: Error) => void;
  /**
   * Optional prop for style overrides for the image/SVG container.
   */
  style?: StyleProp<ImageStyle>;
  /**
   * Additional props to pass to the Image component, excluding
   * the 'source' prop (which is handled separately).
   */
  imageProps?: Omit<ImageProps, 'source'>;
  /**
   * Additional props to pass to the Svg component, excluding
   * the 'uri' prop (which is handled separately).
   */
  svgProps?: Omit<SvgProps, 'uri'>;
}

/**
 * Defines the source type for an image or SVG.
 *
 * The source can be one of the following:
 * - A number representing a locally imported image resource.
 * - A React component (with SvgProps) representing a locally imported SVG.
 * - An object with an optional `uri` property for remote images or SVGs.
 */
export type ImageOrSvgSrc =
  | number // For local imported image
  | React.ComponentType<SvgProps> // For local imported svg
  | { uri?: string }; // For remote image or SVG (with a uri property)

export interface ImageOrSvgProps extends ImageOrSvgBaseProps {
  /**
   * Required prop for the source of the image or SVG.
   * This prop determines whether a local image, a local SVG component,
   * or a remote image/SVG (via URI) is rendered.
   */
  src: ImageOrSvgSrc;
}
