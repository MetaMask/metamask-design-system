import type { AvatarTokenPropsShared } from '@metamask/design-system-shared';
import type { ComponentProps } from 'react';

import type { AvatarBaseProps } from '../AvatarBase';

/**
 * AvatarToken component props (React platform-specific)
 * Extends shared props from @metamask/design-system-shared with React-specific platform concerns
 */
export type AvatarTokenProps = Omit<
  ComponentProps<'img'>,
  'children' | 'size'
> &
  Omit<AvatarBaseProps, 'children'> &
  AvatarTokenPropsShared & {
    /**
     * Optional URL for the token image
     * When provided, displays the image instead of fallback text
     */
    src?: string;
    /**
     * Optional prop to pass to the underlying img element
     * Useful for overriding the default alt text which is the token name
     */
    imageProps?: ComponentProps<'img'> & {
      'data-testid'?: string;
    };
  };
