import type { ComponentProps } from 'react';

import { AvatarAccountVariant, AvatarAccountSize } from '../../types';
import { AvatarBaseProps } from '../AvatarBase';
import type { Blockies } from '../temp-components/Blockies';
import type { Jazzicon } from '../temp-components/Jazzicon';
import type { Maskicon } from '../temp-components/Maskicon';

export type AvatarAccountProps = Omit<
  ComponentProps<'img'>,
  'children' | 'size'
> &
  Omit<AvatarBaseProps, 'children' | 'size'> & {
    /**
     * Required address used as a unique identifier to generate the AvatarAccount art.
     */
    address: string;
    /**
     * Optional prop to control the variant of the avatar account
     * @default AvatarAccountVariant.Jazzicon
     */
    variant?: AvatarAccountVariant;
    /**
     * Optional prop to control the size of the avatar
     * @default AvatarAccountSize.Md
     */
    size?: AvatarAccountSize;
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
