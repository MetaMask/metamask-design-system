import type { AvatarFaviconPropsShared } from '@metamask/design-system-shared';
import type { ComponentProps } from 'react';

import type { AvatarBaseProps } from '../AvatarBase';

/**
 * AvatarFavicon component props (React platform-specific)
 * Extends shared props from @metamask/design-system-shared with React-specific platform concerns
 */
export type AvatarFaviconProps = Omit<
  ComponentProps<'img'>,
  'children' | 'size'
> &
  Omit<AvatarBaseProps, 'children'> &
  AvatarFaviconPropsShared & {
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
