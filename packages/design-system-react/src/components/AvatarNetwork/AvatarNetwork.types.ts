import type { ComponentProps } from 'react';

import { AvatarBaseProps } from '../AvatarBase';

export type AvatarNetworkProps = Omit<
  ComponentProps<'img'>,
  'children' | 'size'
> &
  Omit<AvatarBaseProps, 'children'> & {
    /**
     * Optional name of the network
     * Used as alt text for image and first letter is used as fallback if no fallbackText provided
     */
    name?: string;
    /**
     * Optional URL for the network image
     * When provided, displays the image instead of fallback text
     */
    src?: string;
    /**
     * Optional prop to pass to the underlying img element
     * Useful for overriding the default alt text which is the network name
     */
    imageProps?: ComponentProps<'img'>;
  };
