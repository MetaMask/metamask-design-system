import { ImageOrSvgProps } from '../temp-components/ImageOrSvg';
import { AvatarBaseProps } from '../AvatarBase';

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
