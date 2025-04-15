import { AvatarBaseProps } from '../AvatarBase';
import { ImageOrSvgProps } from '../temp-components/ImageOrSvg';

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
