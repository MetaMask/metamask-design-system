import { AvatarBaseProps } from '../../primitives/AvatarBase';
import { ImageOrSvgProps } from '../../primitives/ImageOrSvg';

/**
 * AvatarToken component props.
 */
export type AvatarTokenProps = {
  /**
   * Optional props for token name, to be used to calculate the fallbackText.
   */
  name?: string;
} & Omit<AvatarBaseProps, 'children'> &
  ImageOrSvgProps;
