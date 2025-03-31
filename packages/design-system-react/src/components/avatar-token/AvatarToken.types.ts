import type { ComponentProps } from 'react';

import { AvatarBaseProps } from '../avatar-base';
import type { TextProps } from '../text';
import { AvatarTokenSize } from '../../types';

export type AvatarTokenProps = Omit<AvatarBaseProps, 'children' | 'size'> & {
  /**
   * Required name of the token
   * Used as alt text for image and first letter is used as fallback if no fallbackText provided
   */
  name: string;
  /**
   * Optional URL for the token image
   * When provided, displays the image instead of fallback text
   */
  src?: string;
  /**
   * Optional prop to pass to the underlying img element
   * Useful for overriding the default alt text which is the token name
   */
  imageProps?: ComponentProps<'img'>;
  /**
   * Optional prop to control the size of the avatar
   * @default AvatarTokenSize.Md
   */
  size?: AvatarTokenSize;
};
