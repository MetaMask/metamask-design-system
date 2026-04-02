import type { AvatarTokenPropsShared } from '@metamask/design-system-shared';

import type { AvatarBaseProps } from '../AvatarBase';
import type {
  ImageOrSvgProps,
  ImageOrSvgSrc,
} from '../temp-components/ImageOrSvg';

/**
 * AvatarToken component props (React Native platform-specific)
 * Extends shared props from @metamask/design-system-shared with React Native-specific platform concerns
 */
export type AvatarTokenProps = AvatarTokenPropsShared &
  Omit<AvatarBaseProps, 'children'> & {
    /**
     * Optional prop for the source of the image or SVG.
     */
    src?: ImageOrSvgSrc;
    /**
     * Optional prop to pass to the underlying ImageOrSvg element
     * Useful for overriding the default alt text which is the dapp name
     */
    imageOrSvgProps?: Partial<ImageOrSvgProps>;
  };
