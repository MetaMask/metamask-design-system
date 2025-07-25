import type { ComponentProps } from 'react';
import type { BaseAvatarAccountProps } from '@metamask/design-system-shared';

import type { AvatarBaseProps } from '../AvatarBase';
import type { Blockies } from '../temp-components/Blockies';
import type { Jazzicon } from '../temp-components/Jazzicon';
import type { Maskicon } from '../temp-components/Maskicon';

export type AvatarAccountProps = Omit<
  ComponentProps<'img'>,
  'children' | 'size'
> &
  Omit<AvatarBaseProps, 'children' | 'size'> & 
  BaseAvatarAccountProps & {
    /**
     * Optional props to be passed to the Blockies component
     */
    blockiesProps?: Partial<ComponentProps<typeof Blockies>>;
    /**
     * Optional props to be passed to the Jazzicon component
     */
    jazziconProps?: Partial<ComponentProps<typeof Jazzicon>>;
    /**
     * Optional props to be passed to the Maskicon component
     */
    maskiconProps?: Partial<ComponentProps<typeof Maskicon>>;
  };
