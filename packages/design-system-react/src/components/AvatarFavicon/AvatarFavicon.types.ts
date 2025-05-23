import type { ComponentProps } from 'react';

import type { AvatarBaseProps } from '../AvatarBase';

export type AvatarFaviconProps = Omit<
  ComponentProps<'img'>,
  'children' | 'size'
> &
  Omit<AvatarBaseProps, 'children'> & {
    /**
     * Optional name of the dapp
     * Used as alt text for image and first letter is used as fallback if no fallbackText provided
     */
    name?: string;
    /**
     * Optional URL for the dapp favicon/logo
     * When provided, displays the image instead of fallback text
     */
    src?: string;
    /**
     * Optional prop to pass to the underlying img element
     * Useful for overriding the default alt text which is the dapp name
     */
    imageProps?: ComponentProps<'img'> & {
      'data-testid'?: string;
    };
  };
