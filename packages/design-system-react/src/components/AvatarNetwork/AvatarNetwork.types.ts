import type { AvatarNetworkPropsShared } from '@metamask/design-system-shared';
import type { ComponentProps } from 'react';

import type { AvatarBaseProps } from '../AvatarBase';

/**
 * AvatarNetwork component props (React platform-specific)
 * Extends shared props from @metamask/design-system-shared with React-specific platform concerns
 */
export type AvatarNetworkProps = Omit<
  ComponentProps<'img'>,
  'children' | 'size'
> &
  Omit<AvatarBaseProps, 'children'> &
  AvatarNetworkPropsShared & {
    /**
     * Optional prop to pass to the underlying img element.
     * Useful for overriding the default alt text which is the network name.
     */
    imageProps?: ComponentProps<'img'> & {
      'data-testid'?: string;
    };
  };
